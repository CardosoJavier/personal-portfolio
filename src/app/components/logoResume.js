"use client";

import links from "../static/data/links.json";
import Image from "next/image";
export default function LogoResume() {
  return (
    <section
      id="nav"
      className="logoResume flex flex-row justify-between items-center mb-10 md:mb-20"
    >
      <a href={links.domain}>
        <Image
          src={require("../static/img/brand/Logo.png")}
          width={
            window.innerWidth >= 768 ? 55 : window.innerWidth >= 1024 ? 65 : 45
          }
          height="auto"
          className=" transition-transform duration-200 hover:scale-125"
        />
      </a>
      <div>
        <a
          href="/JavierCardoso.pdf"
          type="application/pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center border-headers border-2 rounded-md text-headers transition-colors duration-300 hover:text-teal-400 hover:border-teal-400"
        >
          <span className="text-sm px-2 py-2 tracking-tight md:text-base">
            Resume
          </span>
        </a>
      </div>
    </section>
  );
}
