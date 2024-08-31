"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import ListItemHeader from "./listItemHeader";
import TechList from "./techList";
import ListBody from "./listBody";

export default function ProjectList({ projects }) {
  const [counter, setCounter] = useState(2);
  const [currentProjects, setCurrentProjects] = useState([]);

  useEffect(() => {
    setCurrentProjects(projects.slice(0, counter));
  }, [counter, projects]);

  function displayNextProjects() {
    const newCounter =
      counter + 2 >= projects.length ? projects.length : counter + 2;
    setCounter(newCounter);
  }

  return (
    <div>
      <ul className="grid grid-cols-1 gap-10 lg:gap-0">
        {currentProjects.map((project, index) => (
          <li
            key={index}
            className={`grid grid-cols-1 mb-5 rounded-lg transition-colors duration-500 md:gap-5 md:grid-cols-2 lg:hover:bg-body/10 lg:p-10 lg:grid-cols-1`}
          >
            <div className="flex flex-col gap-2 md:w-11/12 lg:w-full">
              <ListItemHeader header={project.name} link={project.link} />
              <ListBody body={project.description} />
              <Image
                src={require("../static/img/projects/" + project.image)}
                width={window >= 768 ? 380 : window >= 1024 ? 450 : 350}
                height="auto"
                alt={project.name + " banner"}
                className={`rounded-lg border-2 transition duration-500 border-body/35 hover:bg-body md:hidden lg:block`}
              />
              <TechList tech={project.tech} />
            </div>
            <div className="flex justify-center items-center lg:hidden">
              <Image
                src={require("../static/img/projects/" + project.image)}
                width={window >= 768 ? 380 : window >= 1024 ? 450 : 350}
                height="auto"
                alt={project.name + " banner"}
                className={`rounded-lg border-2 transition duration-500 border-body/35 hover:bg-body hidden md:block`}
                loading="eager"
              />
            </div>
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
