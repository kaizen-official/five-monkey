"use client";
import React from "react";
import Hero from "./HomeComponents/Hero";
import OurStory from "./HomeComponents/OurStory";
import Menu from "./HomeComponents/Menu";
import Gallery from "./HomeComponents/Gallery";

export default function Home() {
  return (
    <main className="flex flex-col w-full min-h-screen">
      <Hero />
      <OurStory />
      <Menu />
      <Gallery />
    </main>
  );
}
