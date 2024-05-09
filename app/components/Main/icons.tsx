import { Boxes, Leaf, ShieldCheck, TrendingUp } from "lucide-react";
import { ElementType } from "react";

export const Icons = () => {
  const Element = ({
    text,
    title,
    Icon,
  }: {
    text: string;
    title: string;
    Icon: ElementType;
  }) => {
    return (
      <div className="flex flex-col items-center gap-4 w-[95%] justify-self-center max-w-[250px]">
        <Icon className="text-blue w-16 h-auto stroke-1" />
        <p className="font-semibold text-lg mini:text-xl text-blue">{title}</p>
        <p className="text-center text-gray-500">{text}</p>
      </div>
    );
  };

  return (
    <>
      <div className="flex flex-col items-center w-full">
        <p className="text-blue font-semibold mt-16 sm:mt-20 mb-4 text-base md:text-lg">
          ILDNORD
        </p>
        <p className="text-4xl mini:text-5xl md:text-6xl text-center">
          Northern fire
        </p>
      </div>

      <section className="mt-14 mb-20 md:my-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-2 gap-y-14 md:gap-y-16 w-full justify-around">
        {[
          {
            title: "Innovative Design",
            text: "Modern, minimalist style inspired by\u00A0Scandinavian aesthetics and\u00A0elegance.",
            Icon: TrendingUp,
          },

          {
            title: "Solid Construction",
            text: "Crafted from the highest quality materials to\u00A0withstand harsh Scandinavian conditions and ensure\u00A0longevity.",
            Icon: Boxes,
          },

          {
            title: "Eco Efficiency",
            text: "Eco-friendly, energy-efficient fireplaces designed to conserve heat and reduce\u00A0emissions.",
            Icon: Leaf,
          },

          {
            title: "User Safety",
            text: "Designed to\u00A0meet high safety standards, offering reliable performance and peace of\u00A0mind.",
            Icon: ShieldCheck,
          },
        ].map((feature, index) => (
          <Element key={index} {...feature} />
        ))}
      </section>
    </>
  );
};
