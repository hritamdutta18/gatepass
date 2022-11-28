import { BrowserRouter as Router, useRoutes } from "react-router-dom"
import './index.css'

import LoginPage from "./components/LoginPage/LoginPage"
import HomePage from "./components/HomePage/HomePage"
import GatepassForm from "./components/GatepassForm/GatepassForm"
import GatepassHistory from "./components/GatepassHistory/GatepassHistory"
import GatepassAction from "./components/GatepassAction/GatepassAction"


function App() {

  const AppRoute= () => {
    
      let routes = useRoutes([
        { path: "/", element: <LoginPage /> },
        { path: "/login", element: <LoginPage /> },
        { path: "/home", element: <HomePage /> },
        { path: "/generateForm", element: <GatepassForm /> },
        { path: "/history", element: <GatepassHistory/> },
        { path: "/action", element: <GatepassAction/> },
      ]);
      return routes;
  }
  return (
    // /<Router>
        <AppRoute />     
    // </Router>
  );
}

export default App;
