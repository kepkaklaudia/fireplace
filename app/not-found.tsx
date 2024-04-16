import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-items-center mt-20 px-6 text-center">
      <Link
        href="/"
        className="flex items-center space-x-3 rtl:space-x-reverse focus-style-blue"
      >
        <Image
          src="/pagelogo.png"
          width="170"
          height="32"
          className="h-8 sm:h-10 w-auto"
          alt="ILDNORD Logo"
        />
      </Link>
      <h2 className="font-bold text-5xl sm:text-6xl tracking-wide mt-16 sm:mt-20 leading-tight">
        Not Found
      </h2>
      <p className="my-12 sm:my-16 text-base sm:text-lg max-w-[250px] sm:max-w-none">{`The page you're looking for has gone up in\u00A0flames!`}</p>
      <Link
        className="bg-blue text-white px-6 py-4 text-lg sm:text-xl tracking-wide"
        href="/"
      >
        Return Home
      </Link>
    </div>
  );
}
