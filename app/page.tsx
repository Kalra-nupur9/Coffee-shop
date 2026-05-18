import CurvedLoop from "./components/CurvedLoop";
import { Footer } from "./components/Footer";
import HeroSection from "./components/HeroSection";
import { Navbar } from "./components/Navbar";
import { CiCoffeeCup } from "react-icons/ci";


export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection/>
      <CurvedLoop
        />

      
      <Footer />
    </>
  );
}
