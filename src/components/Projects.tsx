import React from 'react';
import Heading from './Heading'; // Adjust the path based on your file structure
import Card from './Card'; // Adjust the path based on your file structure

// Assuming `data` is imported or declared here as an array of project objects
const data = [
  {
    id: 0,
    title: "Todo List",
    desc: "A React & TypeScript-based app for managing and organizing your tasks efficiently.",
    img: "/project_01.jpg",
    tags: ["React", "Node", "CSS", "Typescript"],
  },
  {
    id: 1,
    title: "Countdown Timer",
    desc: "A Next.js and TypeScript powered website to track time with an interactive countdown feature.",
    img: "/project_02.jpg",
    tags: ["Next.JS", "Node", "CSS", "Typescript"],
  },
  {
    id: 2,
    title: "Weather Widget",
    desc: "A Next.js and TypeScript tool for displaying real-time weather data based on location.",
    img: "/project_03.jpg",
    tags: ["Next.JS", "TypeScript", "API", "Weather"],
  },
  {
    id: 3,
    title: "Shareable Resume",
    desc: "A dynamic, shareable resume format that allows for easy updates and customization.",
    img: "/project_04.jpg",
    tags: ["React", "TypeScript", "CSS"],
  },
  {
    id: 4,
    title: "Static Interactive Resume",
    desc: "A TypeScript-based resume that showcases skills dynamically with an interactive format.",
    img: "/project_05.jpg",
    tags: ["TypeScript", "HTML", "CSS"],
  },
  {
    id: 5,
    title: "ID Card",
    desc: "A simple and interactive ID card design with personal information and styling.",
    img: "/project_06.jpg",
    tags: ["React", "CSS", "UI"],
  },
  {
    id: 6,
    title: "Calculator App",
    desc: "A functional calculator app built with React and TypeScript to perform basic calculations.",
    img: "/project_07.jpg",
    tags: ["React", "TypeScript", "CSS"],
  },
  {
    id: 7,
    title: "Increase/Decrease Button",
    desc: "A React-based app with buttons that increase or decrease a value dynamically.",
    img: "/project_08.jpg",
    tags: ["React", "TypeScript", "CSS"],
  },
  {
    id: 8,
    title: "VegNest Website",
    desc: "A responsive website showcasing a variety of vegetable products with modern design.",
    img: "/project_09.jpg",
    tags: ["React", "TailwindCSS", "Responsive Design"],
  },
  {
    id: 9,
    title: "ChocoBites Website",
    desc: "A responsive website for a chocolate biscuit brand with product showcases and details.",
    img: "/project_10.jpg",
    tags: ["React", "TailwindCSS", "Responsive Design"],
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <div id="projects" className="container pt-32">
      {/* Heading Section */}
      <Heading title="My Projects" />

      {/* Projects Grid */}
      <div className="grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2">
        {data.map((el) => (
          <Card
            key={el.id}
            title={el.title}
            desc={el.desc}
            img={el.img}
            tags={el.tags}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
