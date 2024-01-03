import { useState, useEffect, useContext } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import { useUserContext } from "./context/userContext";

import Signup from "./pages/Auth/Signup";
import HomePage from "./pages/Demo/HomePage";
import Recipes from "./pages/Recipes/Recipes";
import Shop from "./pages/Shop/Shop";
import Fridge from "./pages/Fridge/Fridge";
import Profile from "./pages/Profile/Profile";
import Sidebar from "./component/Sidebar/Sidebar";
import TopHeader from "./component/TopHeader/TopHeader";
import LandingPage from "./pages/Landing/LandingPage";
import Search from "./pages/Search/Search";
function App() {
  const location = useLocation();
  const currentPath = location.pathname;
  const { loadingAuthState } = useUserContext();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Function to toggle the sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  if (loadingAuthState) {
    return (
      <div className="loader-wrapper">
        <div className="loader-container">
          <span className="loader"></span>
        </div>
      </div>
    );
  }

  const shouldShowHeaderAndSidebar = (path) => {
    const routesToShow = ["/recipes", "/fridge", "/shop", "/", "/search"];
    return routesToShow.some((route) => path.startsWith(route));
  };

  const showHeaderAndSidebar = shouldShowHeaderAndSidebar(currentPath);

  return (
    <>
      {showHeaderAndSidebar && (
        <TopHeader
          toggleSidebar={toggleSidebar}
          isSidebarOpen={isSidebarOpen}
        />
      )}
      <div className="container">
        {showHeaderAndSidebar && isSidebarOpen && <Sidebar />}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/recipes/:search" element={<Recipes />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/fridge" element={<Fridge />} />
          <Route path="/search" element={<Search />} />
          <Route path="/search/:search" element={<Search />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
