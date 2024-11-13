import { Entry } from "@/app/components/Main/entry";
import { Products } from "@/app/components/Main/products";
import { About } from "@/app/components/Main/about";
import { Icons } from "@/app/components/Main/icons";
import { Distribution } from "@/app/components/Main/distribution";

export const Main = () => (
  <main className="flex flex-col w-full min-h-[1000px] mt-[72px] md:mt-[60px]">
    <Entry />
    <Products />
    <About />
    <Icons />
    <Distribution />
  </main>
);
