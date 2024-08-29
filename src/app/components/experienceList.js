"use client";
import TechList from "./techList";
import ListItemHeader from "./listItemHeader";

export default function ExperienceList({ experiences }) {
  return (
    <ul className="flex flex-col gap-10">
      {experiences.map((experience, index) => (
        <li key={index}>
          <header className="text-body text-xs font-semibold uppercase tracking-wide">
            {experience.date}
          </header>
          <ListItemHeader
            header={experience.title}
            link={experience.link}
            company={experience.company}
          />
          <p className=" text-body text-sm mt-2 leading-normal">
            {experience.description}
          </p>
          <TechList tech={experience.tech} />
        </li>
      ))}
    </ul>
  );
}
