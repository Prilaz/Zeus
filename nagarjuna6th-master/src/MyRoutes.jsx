import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import First from "./First";
import Second from "./second";
import layout from "./Layout/layout";
import Layout from "./Layout/layout";
import Home from "./pages/Home";
import Footer from "./Layout/Footer";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import Counter from "./hooks/Counter";
import PersonalCard from "./hooks/PersonalCard";
import DisplayPersons from "./hooks/DisplayPersons";
import ChatBox from "./pages/chatBox";

const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route index element={<Footer />} />
          <Route path="/first" element={<First />} />
          <Route path="/second" element={<Second />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/home" element={<Home />} />
        </Route>
        <Route path="/counter" element={<Counter />} />

        <Route path="/displayPersons" element={<DisplayPersons />} />
        {/* <Route path='/' element={<Second />} /> */}

        <Route path="/chatbox" element={<ChatBox />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MyRoutes;
