import Navbar from "@/app/components/navbar";
import Koleksi from "@/app/components/koleksi";
import Footer from "@/app/components/footer";

export default function Home() {
  return (
    <main className="h-auto bg-krem1 w-full">
      <div className="w-full sticky top-0 z-50">
        <Navbar />
      </div>

      <div className="py-2 w-full flex justify-center">
        <Koleksi />
      </div>

      <div>
        <Footer />
      </div>
    </main>
  );
}
