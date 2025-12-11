import React from "react";
import Header from "../components/Header";
import ThemeToggler from "../components/ThemeToggler";
import Gallery from "../components/Gallery";
import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <div>
        <NavBar/>
      <Header />
      <Gallery />
    </div>
  );
}
