import Navbar from "@/app/components/navbar";
import Input from "@/app/components/input";
import Footer from "@/app/components/footer";

export default function Home() {
  return (
    <main className="h-auto bg-krem1 w-full">
      <div className="w-full">
        <Navbar />
      </div>

      <div className="mt-10 w-full flex justify-center">
        <Input />
      </div>

      <div>
        <Footer />
      </div>
    </main>
  );
}
