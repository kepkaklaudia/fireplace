import { Navbar } from "@/app/navbar";
import { Footer } from "@/app/footer";
import { Main } from "@/app/main";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen">
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}
