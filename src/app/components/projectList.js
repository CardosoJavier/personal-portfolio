"use client";
import Image from "next/image";
import ListItemHeader from "./listItemHeader";
import TechList from "./techList";
import { ArrowRight } from "react-bootstrap-icons";

export default function ProjectList({ projects }) {
  return (
    <div>
      <ul className="flex flex-col gap-10">
        {projects.map((project, index) => (
          <li key={index} className="flex flex-col mb-5">
            <ListItemHeader header={project.name} link={project.link} />
            <div className="flex flex-col gap-2">
              <p className="text-body text-sm mt-2 leading-normal">
                {project.description}
              </p>
              <Image
                src={require("../static/img/projects/" + project.image)}
                width={350}
                height={350}
                alt={project.name + " banner"}
                className="rounded-lg"
              />
            </div>
            <TechList tech={project.tech} />
          </li>
        ))}
      </ul>
      <div className="mt-10 justify-start items-baseline">
        <a
          href={"#"}
          target="_blank"
          className="font-medium text-slate-200 leading-snug"
        >
          <span className="inline-flex items-baseline gap-2">
            View full project list <ArrowRight />
          </span>
        </a>
      </div>
    </div>
  );
}
