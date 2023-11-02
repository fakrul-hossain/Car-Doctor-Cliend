import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../componets/Header/Header";
import Footer from "../../componets/Footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <Header></Header>
      <div className="min-h-[60vh]">
        <Outlet></Outlet>
      </div>
      <div className="max-w-[1440px] mx-auto">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default MainLayout;
