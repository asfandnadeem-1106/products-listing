import React from "react";
import "./App.css";
import { Container } from "@mui/material";
import Navbar from "./Components/Navbar";
import Product from "./Components/Product";
import Footer from "./Components/Footer";

function App() {

  return (
    <main className="App">
      <Container component="section" maxWidth={"lg"}>
        <Navbar/>
        <Product/>
        <Footer/>
      </Container>
    </main>
  );
}

export default App;
