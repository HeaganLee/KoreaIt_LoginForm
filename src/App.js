import { Navigate, Route, Routes } from "react-router-dom";
import { Reset } from "./styles/Global/reset";
import { Global } from "@emotion/react";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Callback from "./study/Callback";
import PromiseStudy from "./study/PromiseStudy";
import Main from "./Pages/Main/Main";
import AuthRoute from "./components/Routes/AuthRoute";
import AuthRouteReactQuery from "./components/Routes/AuthRouteReactQuery";
import BookDetail from "./Pages/BookDetail/BookDetail";


function App() {
 

  return (
    <>
      <Global styles={ Reset }></Global>
      <Routes>
        <Route exact path="/login" element={<AuthRouteReactQuery path="/login" element={<Login/>}/>} />
        <Route path="/register" element={<AuthRouteReactQuery path="/register" element={<Register/>}/>} />
        <Route path="/" element={<AuthRouteReactQuery path="/" element={<Main/>}/>}/>
        <Route path="/book/:bookId" element={<AuthRouteReactQuery path="/book" element={<BookDetail/>}/>}/>
        <Route path="/admin/search" element={<AuthRouteReactQuery path="/" element={<Main/>}/>}/>


        {/* <Route path="/callback" Component={Callback} />
        <Route path="/promise" Component={PromiseStudy} /> */}
      </Routes>
    </>
  );
}

export default App;
