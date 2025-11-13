"use client";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Capabilities from "../components/Capabilities";
import Highlights from "../components/Highlights";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <div id="top">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="capabilities">
        <Capabilities />
      </div>
      <div id="highlights">
        <Highlights />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </>
  );
}
