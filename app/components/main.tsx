import { Entry } from "@/app/components/Main/entry";
import { Products } from "@/app/components/Main/products";

export const Main = () => (
  <main className="flex flex-col w-full min-h-[1000px] mt-[72px] md:mt-[60px]">
    <Entry />
    <Products />
  </main>
);
