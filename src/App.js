import React from "react";
import "./App.css";
//componente
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <div className="container">
      <Header />
      <NavBar />
      <ItemListContainer subtitle={"Listado de Productos"} />
    </div>
  );
}

export default App;
