"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import ListItemHeader from "./listItemHeader";
import TechList from "./techList";
import ListBody from "./listBody";

export default function ProjectList({ projects }) {
  const [counter, setCounter] = useState(2);
  const [currentProjects, setCurrentProjects] = useState([]);
  const [windowSize, setWindowSize] = useState(0);

  useEffect(() => {
    setCurrentProjects(projects.slice(0, counter));
  }, [counter, projects]);

  useEffect(() => {
    setWindowSize(window.innerWidth);
  }, [window.innerWidth]);

  function displayNextProjects() {
    const newCounter =
      counter + 2 >= projects.length ? projects.length : counter + 2;
    setCounter(newCounter);
  }

  return (
    <div>
      <ul className="flex flex-col gap-10">
        {currentProjects.map((project, index) => (
          <li key={index} className={`flex flex-col mb-5`}>
            <ListItemHeader header={project.name} link={project.link} />
            <div className="flex flex-col gap-2">
              <ListBody body={project.description} />
              <Image
                src={require("../static/img/projects/" + project.image)}
                width={windowSize >= 768 ? 380 : windowSize >= 1024 ? 450 : 350}
                height="auto"
                alt={project.name + " banner"}
                className={`rounded-lg border-2 transition duration-500 border-body/35 hover:bg-body`}
              />
            </div>
            <TechList tech={project.tech} />
          </li>
        ))}
      </ul>
      {counter < projects.length && (
        <div className=" w-full text-center mt-10">
          <button
            onClick={() => displayNextProjects()}
            className=" text-sm text-body tracking-tight border-body border-2 rounded-md px-2 py-1"
          >
            Display more
          </button>
        </div>
      )}
    </div>
  );
}
