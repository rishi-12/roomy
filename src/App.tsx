import React from "react";
import NavBar from "./components/NavBar";
import Chat from "./components/Chat/Chat";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Feed from "./components/Feed/Feed";
import Login from "./components/Login/Login";
import NewPostForm from "./components/Feed/NewPostForm";
import NewPostForm_ from "./components/Feed/NewPostForm_";

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
          <Route path="/newPost" element={<NewPostForm />} />
          <Route path="/newPost_" element={<NewPostForm_ />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
