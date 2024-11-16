"use client";

import React, { useEffect } from "react";
import Projects from "@/components/Projects";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import About from "@/components/About";
import "aos/dist/aos.css"; // Import AOS CSS for animations
import AOS from "aos"; // Import AOS library

const Page = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration in milliseconds
      easing: "ease-in-out", // Easing for the animations
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <div>
      <main>
        {/* Hero Section */}
        <section data-aos="fade-in">
          <Hero />
        </section>

        {/* Projects Section */}
        <section data-aos="fade-up">
          <Projects />
        </section>

        {/* Skills Section */}
        <section data-aos="zoom-in">
          <Skills />
        </section>

        {/* Contact Section */}
        <section data-aos="fade-right">
          <Contact />
        </section>

        {/* About Section */}
        <section data-aos="fade-left">
          <About />
        </section>
      </main>
    </div>
  );
};

export default Page;
