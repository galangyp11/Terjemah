import Navbar from "./components/navbar";
import Homepage from "@/app/components/homepage";
import Input from "@/app/components/input";
import Koleksi from "./components/koleksi";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main className="h-auto bg-krem1 w-full">
      <div className="w-full sticky top-0 z-50">
        <Navbar />
      </div>

      <div className="mt-10 w-full flex justify-center">
        <Homepage />
      </div>

      <div>
        <Footer />
      </div>
    </main>
  );
}
