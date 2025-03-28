import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import First from "./First";
import Second from "./second";
import Layout from "./Layout/Layout";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Login2 from "./pages/Login2";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import Counter from "./hooks/Counter";
import DisplayPersons from "./hooks/DisplayPersons";
import AdminLayout from "./Layout/admin/AdminLayout";
import Dashboard from "./Layout/admin/Dashboard";
import CategoryHome from "./pages/admin/Category/CategoryHome";
import TestPage from "./pages/TestPage";
import ProductsHome from "./pages/admin/ProductsHome/ProductsHome";
import AddProduct from "./pages/admin/ProductsHome/AddProduct";
import AdminRoutes from "./ProtectedRoutes/AdminRoutes";
import ReduxCounter from "./pages/Redux/ReduxCounter";
import Persons from "./pages/Redux/Persons";

const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/first" element={<First />} />
          <Route path="/second" element={<Second />} />

          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login2" element={<Login2 />} />

          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
        </Route>
        <Route path="/" element={<AdminRoutes />}>
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="category" element={<CategoryHome />} />
            <Route path="product" element={<ProductsHome />} />
            <Route path="addproduct" element={<AddProduct />} />
          </Route>
        </Route>

        <Route path="/counter" element={<Counter />} />
        <Route path="/persons" element={<DisplayPersons />} />
        <Route path="/reduxcounter" element={<ReduxCounter />} />
        <Route path="/person" element={<Persons />} />

        <Route path="/test" element={<TestPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MyRoutes;
