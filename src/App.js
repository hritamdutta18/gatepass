import { BrowserRouter as Navigate, Route, Routes, useRoutes } from "react-router-dom"
import './index.css'

import LoginPage from "./components/LoginPage/LoginPage"
import HomePage from "./components/HomePage/HomePage"
import DashBoard from "./components/DashBoard/DashBoard"
import GatepassForm from "./components/GatepassForm/GatepassForm"
import GatepassHistory from "./components/GatepassHistory/GatepassHistory"
import GatepassAction from "./components/GatepassAction/GatepassAction"


function App() {

  const AppRoute= () => {
    
      let routes = useRoutes([
        { path: "*", element: <HomePage /> },
        { path: "/", element: <HomePage /> },
        { path: "/login", element: <LoginPage /> },
        { path: "/dashboard", element: <DashBoard /> },
        { path: "/generateForm", element: <GatepassForm /> },
        { path: "/history", element: <GatepassHistory/> },
        { path: "/action", element: <GatepassAction/> },
      ]);
      return routes;
  }
  return (
    // /<Router>
    <Routes>
      <Route path= "/" element= { <HomePage /> } >
        <Route path="*" element= { <Navigate to="/" replace= {true} /> } />
      </Route>
      
      <Route path= "/login" element= { <LoginPage /> } />
      <Route path= "/dashboard" element= { <DashBoard /> } />
      <Route path= "/generateForm" element= { <GatepassForm /> } />
      <Route path= "/history" element= { <GatepassHistory /> } />
      <Route path= "/action" element= { <GatepassAction /> } />
    </Routes>
        // <AppRoute />     
    // </Router>
  );
}

export default App;
