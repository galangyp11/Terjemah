import Navbar from "./components/navbar";
import Homepage from "@/app/components/homepage";
import Input from "@/app/components/input";
import Koleksi from "./components/koleksi";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main className="h-auto bg-krem1 w-full">
      <div className="w-full">
        <Navbar />
      </div>

      <div>
        <Homepage />
      </div>

      <div id="masuk" className="bg-krem2 flex justify-center">
        <Input />
      </div>

      <div id="koleksi" className="bg-krem1 flex justify-center">
        <Koleksi />
      </div>

      <div>
        <Footer />
      </div>
    </main>
  );
}
