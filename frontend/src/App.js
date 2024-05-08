import React from "react";
import "./App.css";
import { Container } from "@mui/material";
import Navbar from "./Components/Navbar";
import Product from "./Components/Product";

function App() {

  return (
    <main className="App">
      <Container component="section" maxWidth={"lg"}>
        <Navbar/>
        <Product/>
      </Container>
    </main>
  );
}

export default App;
