"use client";

import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen bg-custom-gradient">
      <Image
        className="animate-bounce"
        src={require("../app/static/img/brand/Logo.png")}
      />
    </div>
  );
}
