import Image from "next/image";
import HeroSection from "./components/HeroSection";
import ShareSetupSection from "./components/sections/ShareSetupSection";
import BrowseTheRangeSection from "./components/sections/BrowseTheRangeSection";
import OurProductSection from "./components/sections/OurProductSection";

export default function Home() {
  return (
    <main className="bg-white">
    <HeroSection />
    <div className="flex flex-col gap-[56px] mx-4 md:mx-[130px]">
      <BrowseTheRangeSection />
      <OurProductSection />
    </div>
    <div className="mt-[56px]">
      <ShareSetupSection />
    </div> 
  </main>
  );
}
