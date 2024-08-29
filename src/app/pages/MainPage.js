import { EnvelopeAtFill, Github, Linkedin } from "react-bootstrap-icons";
import ExperienceList from "../components/experienceList";
import experience from "../static/data/experience.json";
import projects from "../static/data/projects.json";
import links from "../static/data/links.json";
import SectionHeader from "../components/sectionHeader";
import ProjectList from "../components/projectList";

export default function MainPage() {
  return (
    <div className="flex flex-col h-full text-left px-8 py-12 gap-20">
      {/* Logo and Resume */}
      <section className="logoResume flex flex-row justify-between">
        <a className=" text-xl">Logo</a>
        <a href="" className="border-headers border-2 rounded-md text-headers">
          <p className="text-sm p-1 tracking-tight">Resume</p>
        </a>
      </section>
      {/* Intro */}
      <section className="intro flex flex-col w-10/12 gap-3">
        <h1 className=" text-4xl text-headers font-bold tracking-tight">
          Javier Cardoso
        </h1>
        <h2 className="text-xl font-medium tracking-tight text-slate-200">
          Software Engineer
        </h2>
        <p className="text-body leading-normal tracking-tight font-light">
          Just another developer trying to find a place in the world.
        </p>
        <div className="links flex flex-row gap-5">
          <a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            className=" cursor-pointer"
          >
            <Github color="#C6CDD4" size={20} />
          </a>
          <a
            href={links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className=" cursor-pointer"
          >
            <Linkedin color="#C6CDD4" size={20} />
          </a>
          <a
            href={"mailto:" + links.email}
            target="_blank"
            rel="noopener noreferrer"
            className=" cursor-pointer"
          >
            <EnvelopeAtFill color="#C6CDD4" size={20} />
          </a>
        </div>
      </section>
      {/* About */}
      <section
        id="about"
        className=" flex flex-col gap-3 font-light text-body tracking-tight leading-relaxed"
      >
        <SectionHeader header="about" />
        <p>
          Back in 2018, I was on track to become a doctor, majoring in Molecular
          & Cell Biology. Life was smooth—interesting classes, new friends, and
          a couple of organizations to keep things balanced. “Everything is
          perfect”, I said. But then,{" "}
          <span className="font-medium text-slate-200">
            my best friend introduced me to programming, and everything changed
          </span>
          .
        </p>
        <p>
          One night of coding Java and building a simple snake game with Java
          Swing, and I was hooked—not just on making games but on the endless
          possibilities software offers.
        </p>
        <p>
          Soon after, I switched majors to Software Engineering, and doors flew
          open. I became a{" "}
          <span className="font-medium text-slate-200">
            hackathon organizer, ACM project manager
          </span>{" "}
          in my college chapter, built all kind of web, mobile, and desktop
          apps, and even interned at the largest financial institution in the
          US.
        </p>
        <p>
          Now, I’m passionate about{" "}
          <span className="font-medium text-slate-200">
            merging software engineering and design
          </span>{" "}
          to create visually stunning products with quality systems under the
          hood.
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
      {/* Acknowledge */}
      <section id="acknowledgement">
        <p className="flex flex-col gap-1 font-light text-body tracking-tight leading-relaxed text-sm text-center">
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
