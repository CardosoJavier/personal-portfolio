"use client";
import { EnvelopeAtFill, Github, Linkedin } from "react-bootstrap-icons";
import Image from "next/image";
import ExperienceList from "../components/experienceList";
import SectionHeader from "../components/sectionHeader";
import ProjectList from "../components/projectList";
import experience from "../static/data/experience.json";
import projects from "../static/data/projects.json";
import links from "../static/data/links.json";
import "../styles/css/scroll.css";
import LogoResume from "../components/logoResume";
import NavLink from "../components/navLink";
import { useEffect, useState } from "react";

export default function Portfolio() {
  const [section, setSection] = useState("");

  useEffect(() => {
    // get all sections ids
    const sections = document.querySelectorAll("section");
    const sectionVisibility = {
      threshold: 0.8, // percentage of section visibility
    };

    // define observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setSection(entry.target.id);
        }
      });
    }, sectionVisibility);

    // observer for sections
    sections.forEach((section) => {
      observer.observe(section);
    });
  });

  return (
    <div className=" px-8 py-12">
      <LogoResume />
      <div className=" grid grid-cols-1 text-left gap-5 lg:grid lg:grid-cols-2 lg:px-10 lg:py-20">
        {/* Intro */}
        <section
          id="intro"
          className="flex flex-col w-10/12 gap-3 mb-10 lg:col-span-1 lg:sticky lg:h-fit lg:top-20"
        >
          <h1 className=" text-4xl text-headers font-bold tracking-tight md:text-5xl">
            Javier Cardoso
          </h1>
          <h2 className="text-xl font-medium tracking-tight text-slate-200 md:text-2xl">
            Software Engineer
          </h2>
          <p className="text-body leading-normal tracking-tight font-light md:text-lg">
            Just another developer trying to find a place in the world.
          </p>
          <div className="links flex flex-row gap-5">
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className=" cursor-pointer"
            >
              <Github
                color="#C6CDD4"
                size={
                  window.innerWidth >= 768
                    ? 25
                    : window.innerWidth >= 1024
                    ? 30
                    : 20
                }
              />
            </a>
            <a
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className=" cursor-pointer"
            >
              <Linkedin
                color="#C6CDD4"
                size={
                  window.innerWidth >= 768
                    ? 25
                    : window.innerWidth >= 1024
                    ? 30
                    : 20
                }
              />
            </a>
            <a
              href={"mailto:" + links.email}
              target="_blank"
              rel="noopener noreferrer"
              className=" cursor-pointer"
            >
              <EnvelopeAtFill
                color="#C6CDD4"
                size={
                  window.innerWidth >= 768
                    ? 25
                    : window.innerWidth >= 1024
                    ? 30
                    : 20
                }
              />
            </a>
          </div>
          <ul className="hidden mt-20 lg:grid lg:gap-3 lg:w-full">
            <NavLink
              sectionId={"about"}
              sectionName={"about"}
              sectionsToObserve={["about"]}
              currentSection={section}
            />
            <NavLink
              sectionId={"experience"}
              sectionName={"experience"}
              sectionsToObserve={["experience"]}
              currentSection={section}
            />
            <NavLink
              sectionId={"projects"}
              sectionName={"projects"}
              sectionsToObserve={["projects", "footer"]}
              currentSection={section}
            />
          </ul>
        </section>

        {/* Scroll column */}
        <div className="grid grid-cols-1 gap-14 lg:gap-32 lg:overflow-y-auto lg:h-full">
          {/* About */}
          <section
            id="about"
            className=" flex flex-col gap-3 font-light text-body tracking-tight leading-relaxed md:text-lg lg:text-base"
          >
            <SectionHeader header="about" />
            <p>
              Back in 2018, I was on track to become a doctor, majoring in
              Molecular & Cell Biology. Life was smooth—interesting classes, new
              friends, and a couple of organizations to keep things balanced.
              “Everything is perfect”, I said. But then,{" "}
              <span className="font-medium text-slate-200">
                my best friend introduced me to programming, and everything
                changed
              </span>
              .
            </p>
            <p>
              One night of coding Java and building a simple snake game with
              Java Swing, and I was hooked—not just on making games but on the
              endless possibilities software offers.
            </p>
            <p>
              Soon after, I switched majors to Software Engineering, and doors
              flew open. I became a{" "}
              <span className="font-medium text-slate-200">
                hackathon organizer, ACM project manager
              </span>{" "}
              in my college chapter, built all kind of web, mobile, and desktop
              apps, and even interned at the largest financial institution in
              the US.
            </p>
            <p>
              Now, I’m passionate about{" "}
              <span className="font-medium text-slate-200">
                merging software engineering and design
              </span>{" "}
              to create visually stunning products with quality systems under
              the hood.
            </p>
          </section>

          {/* Experience */}
          <section id="experience" className="flex flex-col gap-5">
            <SectionHeader header="experience" />
            <ExperienceList experiences={experience} />
          </section>
          {/* Projects */}
          <section id="projects" className="flex flex-col gap-3">
            <SectionHeader header="projects" />
            <ProjectList projects={projects} />
          </section>
        </div>
      </div>
      {/* footer */}
      <section id="footer">
        <p className="flex flex-col gap-1 font-light text-body tracking-tight leading-relaxed text-sm text-center mt-14">
          Developed with ❤️ using NEXT.js
          <br />
          <span className="inline-flex justify-center">
            Design inspired by
            <a
              href="https://brittanychiang.com"
              className="hover:text-teal-400 mx-1 underline"
            >
              Brittany Chiang
            </a>
          </span>
        </p>
      </section>
    </div>
  );
}
