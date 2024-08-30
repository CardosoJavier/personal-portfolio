"use client";
import TechList from "./techList";
import ListItemHeader from "./listItemHeader";
import ListBody from "./listBody";

export default function ExperienceList({ experiences }) {
  return (
    <ul className="flex flex-col gap-10">
      {experiences.map((experience, index) => (
        <li key={index} className=" md:grid md:grid-cols-3">
          <header className="text-body text-xs font-semibold uppercase tracking-wide md:text-sm">
            {experience.date}
          </header>
          <div className=" md:col-span-2">
            <ListItemHeader
              header={experience.title}
              link={experience.link}
              company={experience.company}
            />
            <ListBody body={experience.description} />
            <TechList tech={experience.tech} />
          </div>
        </li>
      ))}
    </ul>
  );
}
