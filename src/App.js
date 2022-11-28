import { BrowserRouter as Router, useRoutes } from "react-router-dom"
import './index.css'

import LoginPage from "./components/LoginPage.jsx"
import HomePage from "./components/HomePage.jsx"
import GatepassForm from "./components/GatepassForm.jsx"
import GatepassHistory from "./components/GatepassHistory"
import GatepassAction from "./components/GatepassAction.jsx"


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
