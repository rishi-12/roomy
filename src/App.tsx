import React from "react";
import NavBar from "./components/NavBar";
import Chat from "./components/Chat/Chat";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />}></Route>
        <Route path="/messaging" element={<Chat />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
