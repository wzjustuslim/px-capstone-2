import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import ResponsiveAppBar from './components/ResponsiveAppBar.js'
import TemporaryDrawer from './components/TemporaryDrawer.js'
import LandingPage from './pages/LandingPage.js'

function App() {
  const [drawerState, setDrawerState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setDrawerState({ ...drawerState, [anchor]: open });
  };

  return (
    <div className="App">
      <ResponsiveAppBar toggleDrawer={toggleDrawer} />
      <TemporaryDrawer drawerState={drawerState} toggleDrawer={toggleDrawer} />
      <LandingPage />
    </div>
  );
}

export default App;
