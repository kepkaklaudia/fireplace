"use client";

import Image from "next/image";

export const Main = () => (
  <main className="flex flex-col w-full min-h-[1000px] mt-[72px] md:mt-[60px]">
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
          className="w-full md:w-auto h-full"
          src="/main.png"
        />
      </div>
    </section>
    <section className="flex flex-col my-4">
      <p className="text-blue text-center text-2xl mini:text-3xl mt-10 mb-6">
        see what we offer
      </p>
      <p className="text-center text-4xl mini:text-5xl md:text-6xl">
        Product range
      </p>
      <p className="text-center mt-6 text-red max-w-[250px] mx-auto">
        Section in development – more&nbsp;fireplaces coming soon!
      </p>
      <div className="flex flex-col sm:flex-row my-12 gap-y-16 sm:gap-8 justify-center">
        {[{ name: "loki" }, { name: "malmo" }].map((product) => (
          <div
            key={product.name}
            className="flex flex-col items-center gap-y-4"
          >
            <Image
              alt={product.name}
              width={750}
              height={750}
              className="w-11/12 mini:w-auto h-auto mini:max-h-[300px]"
              src={`/${product.name}.png`}
            />
            <p className="font-bold text-3xl sm:text-4xl capitalize">
              {product.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  </main>
);
