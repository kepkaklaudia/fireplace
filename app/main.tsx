"use client";

import Image from "next/image";

export const Main = () => (
  <main className="grid grid-rows-2 w-full min-h-[1000px] mt-[72px] md:mt-[60px]">
    <section className="bg-blue flex flex-col md:flex-row w-full h-full max-h-[600px]">
      <div className="flex flex-col w-full my-14 md:my-auto p-4 gap-4">
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
      <div className="w-auto flex justify-end shrink-0">
        <Image
          alt="Main picture"
          width={800}
          height={1000}
          className="m-full md:w-auto h-full"
          src="/main.png"
        />
      </div>
    </section>
  </main>
);
