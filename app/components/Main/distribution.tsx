"use client";

import Image from "next/image";

export const Disctribution = () => (
  <section id="kratki" className="flex flex-col bg-[url('../public/cover.jpg')] bg-cover bg-center h-[500px]">
    <p className="text-white text-center text-2xl lg:text-3xl mt-10 mb-6 text-semibold">
      Where to buy?
    </p>
    <p className="text-white text-center text-2xl lg:text-3xl mt-10 mb-6">
      {" "}
      Our official distributor is{" "}
    </p>
    <div className="flex  gap-8 justify-center">
      <a
        href="https://kratki.com/pl"
        rel="noopener noreferrer"
        target="_blank"
        className="focus-style-white"
      >
        <Image
          alt=""
          width={500}
          height={500}
          className=" w-auto max-h-[80px] md:max-h-[100px] p-1"
          src="/kratki.webp"
        />
      </a>
    </div>
  </section>
);
