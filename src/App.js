import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import ResponsiveAppBar from './components/ResponsiveAppBar.js';
import TemporaryDrawer from './components/TemporaryDrawer.js';
import AuthFormDialog from './components/AuthFormDialog.js';
import LandingPage from './pages/LandingPage.js';

function App() {
  // cart drawer state
  const [drawerState, setDrawerState] = React.useState({ right: false });
  // login/signup modal state
  const [open, setOpen] = React.useState(false);
  // login/signup modal tab state
  const [authType, setAuthType] = React.useState('login');
  // is user
  const [isUser, setIsUser] = React.useState(true)

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setDrawerState({ ...drawerState, [anchor]: open });
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="App">
      <ResponsiveAppBar isUser={isUser} toggleDrawer={toggleDrawer} handleClickOpen={handleClickOpen} setAuthType={setAuthType} />
      <TemporaryDrawer drawerState={drawerState} toggleDrawer={toggleDrawer} />
      <AuthFormDialog open={open} authType={authType} setAuthType={setAuthType} handleClose={handleClose} />
      <LandingPage />
    </div>
  );
}

export default App;
