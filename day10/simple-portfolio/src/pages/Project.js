import React from "react";
export default function Project() {
  const projects = [
    { name: "Project 1", img: "./project/1.svg" },
    { name: "Project 2", img: "./project/2.svg" },
    { name: "Project 3", img: "./project/3.svg" },
    { name: "Project 4", img: "./project/4.svg" },
    { name: "Project 5", img: "./project/5.svg" },
    { name: "Project 6", img: "./project/3.svg" },
    { name: "Project 7", img: "./project/4.svg" },
    { name: "Project 8", img: "./project/5.svg" },
  ];
  return (
    <section className='projects-section-container'>
      <h2>Projects</h2>
      <div className='project-container'>
        <ul>
          {projects.map(({ name, img }, key) => (
            <ProjectItem name={name} img={img} key={key} />
          ))}
        </ul>
      </div>
    </section>
  );
}

function ProjectItem({ name, img }) {
  console.log("name :>> ", name, img);
  return (
    <li className='project-item'>
      <div className='container'>
        <img src={img} alt={name} />
      </div>
      <h4>{name}</h4>
    </li>
  );
}
