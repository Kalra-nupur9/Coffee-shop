import CurvedLoop from "./components/sections/CurvedLoop";
import { Footer } from "./components/sections/Footer";
import HeroSection from "./components/sections/HeroSection";
import Navbar from "./components/sections/Navbar";
import { CiCoffeeCup } from "react-icons/ci";
import SignatureDrinks from "./components/sections/signature-drinks";
import StorySection from "./components/sections/story-section";
import LocationSection from "./components/sections/location-section";
import InstagramSection from "./components/sections/instagram-section";
import NewsletterSection from "./components/sections/newsletter-section";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <HeroSection />
        <CurvedLoop />
        <SignatureDrinks />
        <StorySection />
        <InstagramSection />
        <LocationSection />
        <NewsletterSection />
      </main>

      <Footer />
    </>
  );
}
