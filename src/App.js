import { Route, Routes } from "react-router-dom";
import { Reset } from "./styles/Global/reset";
import { Global } from "@emotion/react";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";

function App() {
  return (
    <>
      <Global styles={ Reset }></Global>
      <Routes>
        <Route exact path="/login" Component={Login} />
        <Route path="/register" Component={Register} />
      </Routes>
    </>
  );
}

export default App;
