import "./App.css";
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import styled from "styled-components";

const AppDiv = styled.div`
  height: 100%;
`;

function App() {
  return (
    <AppDiv>
      <Header />
      <hr />
      <Outlet></Outlet>
      <hr />
      <Footer />
    </AppDiv>
  );
}

export default App;
