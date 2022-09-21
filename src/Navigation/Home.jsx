import React from "react";
import { Outlet } from "react-router-dom";
import "./navigation.css";
import Footer from "../Components/Footer/Footer";
import Wrapper from "../Components/UI/Wrapper/Wrapper";

function Home() {
  return (
    <div className="container">
      <Wrapper>
        <Outlet />
      </Wrapper>
      <Footer />
    </div>
  );
}

export default Home;
