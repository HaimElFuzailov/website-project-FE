import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FavoriteItem from "./components/pages/FavoriteItem";
import OrderList from "./components/pages/OrderList";
import SignUp from "./components/pages/SignUp";
import LogIn from "./components/pages/LogIn";

function App() {
  //  useEffect(()=>{
  //   fetch('/website/user/all').then((responese)=>responese.json()).then((data)=>{console.log(data)})
  //  },[])

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/favorite_items" element={<FavoriteItem />} />
          <Route path="/order_List" element={<OrderList />} />
          <Route path="/log_in" element={<LogIn />} />
          <Route path="/sign_up" element={<SignUp />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
