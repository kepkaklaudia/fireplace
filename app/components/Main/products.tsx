"use client";

import Image from "next/image";

export const Products = () => (
  <section id="products" className="flex flex-col my-8 sm:my-12">
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
        <div key={product.name} className="flex flex-col items-center gap-y-4">
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
    <span id="about-us" />
  </section>
);
