import logo from "./logo.svg";
import "./App.css";
import * as React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import ResponsiveAppBar from "./components/ResponsiveAppBar.js";
import TemporaryDrawer from "./components/TemporaryDrawer.js";
import AuthFormDialog from "./components/AuthFormDialog.js";
import LandingPage from "./pages/LandingPage.js";
import ProfilePage from "./pages/ProfilePage.js";
import ExplorePage from "./pages/ExplorePage.js";
// import CategorySideDrawerPage from './pages/CategoryPage.js';
import CategoryTagsPage from "./pages/CategoryTagsPage.js";
import AuthContext from "./contexts/auth-context";

function App() {
  //#region Declare UI elements
  // cart drawer state
  const [drawerState, setDrawerState] = React.useState({ right: false });
  // login/signup modal state
  const [open, setOpen] = React.useState(false);
  // login/signup modal tab state
  const [authType, setAuthType] = React.useState("signup");
  // is user
  const [isUser, setIsUser] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  // check if authenticated
  const ctx = React.useContext(AuthContext);

  const navigate = useNavigate();

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
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
  //#endregion

  React.useEffect(() => {
    ctx.isLoggedIn ? setIsUser(true) : setIsUser(false);
    setIsLoggedIn(ctx.isLoggedIn )
  }, [isUser, ctx]);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
      }}>
      <div className='App'>
        <ResponsiveAppBar
          isUser={isUser}
          toggleDrawer={toggleDrawer}
          handleClickOpen={handleClickOpen}
          setAuthType={setAuthType}
        />
        <TemporaryDrawer
          drawerState={drawerState}
          toggleDrawer={toggleDrawer}
        />
        <AuthFormDialog
          open={open}
          authType={authType}
          setAuthType={setAuthType}
          setIsUser={setIsUser}
          handleClose={handleClose}
          navigate={navigate}
        />
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/profile' element={<ProfilePage />} />
          <Route path='/explore' element={<ExplorePage />} />
          {/* <Route path="/categories/:category" exact element={<CategorySideDrawerPage />} /> */}
          <Route
            path='/categories/:category'
            exact
            element={<CategoryTagsPage />}
          />
        </Routes>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
