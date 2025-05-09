// Home.jsx
import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Product from "./Product";
import Blogs from "./Blogs";
import Videos from "./Videos";
import Footer from "./Footer";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Product />
      <Blogs />
      <Videos />
      <Footer />
    </div>
  );
}

export default Home;
