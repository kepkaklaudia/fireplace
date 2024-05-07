import { Navbar } from "@/app/components/navbar";
import { Footer } from "@/app/components/footer";
import { Main } from "@/app/components/main";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen">
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}
