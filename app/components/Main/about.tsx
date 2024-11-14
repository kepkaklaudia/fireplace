"use client";

import Image from "next/image";

export const About = () => (
  <section className="bg-black flex w-full h-full  flex-col lg:flex-row">
    <div className="w-auto flex h-fit self-end mx-auto order-1 lg:order-none my-auto">
      <Image
        alt="Main picture"
        width={1080}
        height={1298}
        className="w-full max-w-[400px] lg:max-w-[600px] xs:hidden xl:block"
        src="/fireplace.jpg"
      />
      <Image
        alt="Main picture"
        width={1080}
        height={1298}
        className="w-full hidden xs:block xl:hidden max-w-[400px] lg:max-w-[600px]"
        src="/fire.jpg"
      />
    </div>
    <div className="flex flex-col w-full my-auto px-4 py-12 gap-4">
      <p className="w-full text-white text-5xl tracking-wide">About us</p>{" "}
      <p className="text-2xl max-w-[400px] md:max-w-[550px] text-white my-8 tracking-wide">
        {" "}
        Every product we create is&nbsp;a&nbsp;masterpiece, crafted with
        attention to&nbsp;the smallest&nbsp;details.
      </p>
      <p className="w-full text-white tracking-wide ">
        {" "}
        We focus on&nbsp;the elements that have the greatest impact on&nbsp;the
        aesthetics of&nbsp;the final product. Our top priority is&nbsp;user
        safety and the&nbsp;efficiency of our&nbsp;designs.{" "}
      </p>
      <p className="w-full text-white tracking-wide ">
        Throughout the design process, we aim to&nbsp;meet the unique
        expectations of&nbsp;our Scandinavian customers. We&nbsp;carefully
        analyze their needs, seeking optimal solutions and
        innovative&nbsp;technologies.
      </p>
      <p className="w-full text-white tracking-wide ">
        Our products are made to&nbsp;last, crafted from the highest quality
        materials available, and designed with long-term, intensive use
        in&nbsp;mind – perfect for Scandinavian&nbsp;homes.
      </p>{" "}
    </div>
  </section>
);
