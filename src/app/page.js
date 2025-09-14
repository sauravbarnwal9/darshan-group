import Component2 from "@/components/Component2";
import ContactSection from "@/components/Footer";
import HeroSection from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Component2 />

      <ContactSection />
    </>
  );
}
