import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Footer from "./component/footer";
import Services from "./component/Services/Services";
import Login from "./component/Login/Login";

function MainLayout() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/" element={<Navigate to="/home" />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<MainLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
