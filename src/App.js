import "./App.css";
import React, { useState, useContext } from "react";
import { Routes, Route, Link } from "react-router-dom";

import LoginPage from "./pages/LoginPage";

import Dashboard from "./pages/admin/Dashboard";
import NotFoundPage from "./pages/NotFoundPage";
import Vendor from "./pages/admin/Vendor";
import Products from "./pages/admin/Products";
import VendorProducts from "./pages/vendors/Products";
import ManageProducts from "./pages/admin/ManageProducts";
import ManageVendor from "./pages/admin/ManageVendor";

import {Context} from "./context/usercontext";
import {userContext} from "./context/usercontext";
import { useSelector } from "react-redux";
import Register1 from "./pages/Register1";

import RegisterFormik from "./pages/RegisterFormik";
import * as PATHS from './constants/URLS';
import AddProducts from "./pages/vendors/Addproducts";

function App() {
// const {data:user}= useContext(Context);
const {user}= useSelector(state => state.auth)
console.log(user);
  return (
    <div className="App">
      {/* <LoginPage/> */}
      <Routes>
        {! user && <Route path={PATHS.ROOT} element={<LoginPage />} />}
        {! user && <Route path={PATHS.REGISTER} element={<Register1 />} />}
        {! user && <Route path={PATHS.REG} element={<RegisterFormik />} />}
       { user&&<Route path={PATHS.ROOT} element={<Dashboard/>}>
          <Route path={PATHS.VENDOR_REQUESTS} element={<Vendor />} />
          <Route path={PATHS.PRODUCT_REQUESTS} element={<Products />}/>
          <Route path={PATHS.MANGAE_VENDORS} element={<ManageVendor/>} />
          <Route path={PATHS.MANGAE_PRODUCTS} element={<ManageProducts/>}/>
          <Route path={PATHS.PRODUCTS} element={<VendorProducts/>}/>
          <Route path={PATHS.ADD_PRODUCT} element={<AddProducts/>}/>
        
          {/* <Route path="dashboard" element={<NotFoundPage />} />
          <Route path="settings" element={<NotFoundPage />} /> */}
        </Route>}
        <Route path="*" element={<NotFoundPage />} />
  
      </Routes>
    </div>
  );
        }
export default App;
