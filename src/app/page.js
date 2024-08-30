"use client";
import dynamic from "next/dynamic";
const Portfolio = dynamic(() => import("./pages/portfolio"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="bg-fixed bg-custom-gradient">
      <Portfolio />
    </main>
  );
}
