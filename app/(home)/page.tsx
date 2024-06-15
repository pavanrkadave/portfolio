import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-7xl mx-auto p-5 overflow-hidden">
        <Navbar />
        <HeroSection />
      </div>
    </div>
  );
}
