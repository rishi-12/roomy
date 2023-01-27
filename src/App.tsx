import React from "react";
import NavBar from "./components/NavBar";
import Chat from "./components/Chat/Chat";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Feed from "./components/Feed/Feed";

function PageWithNavBar() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageWithNavBar />}>
          <Route path="/" element={<Feed />} />
          <Route path="/messaging" element={<Chat />} />
        </Route>
        {/* <Route path="/" element={<Login />}/> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
