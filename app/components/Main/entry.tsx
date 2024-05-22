"use client";

import Image from "next/image";

export const Entry = () => (
  <section className="bg-blue flex flex-col sm:flex-row w-full h-fit md:max-h-[600px]">
    <div className="flex flex-col w-full my-14 sm:my-auto p-4 gap-4 animate-in fade-in duration-500">
      {[
        { text: "Inspired by\u00A0Nordic Simplicity" },
        { text: "Engineered for\u00A0Efficiency" },
        { text: "Designed for\u00A0Comfort" },
      ].map((link) => (
        <p
          className="w-full text-white text-xl mini:text-2xl md:text-3xl lg:text-4xl"
          key={link.text}
        >
          {link.text}
        </p>
      ))}
    </div>
    <div className="w-auto flex justify-end animate-in fade-in duration-500">
      <Image
        alt="Main picture"
        width={800}
        height={1000}
        className="w-full md:w-auto md:min-w-[300px] lg:min-w-[450px] h-full"
        src="/main.png"
      />
    </div>
  </section>
);
