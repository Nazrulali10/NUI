import Dependency from "./components/Dependency";
import Footer from "./components/Footer";
import { Hero } from "./components/Hero";
import NavBar from "./components/NavBar";
import ExploreButton from "./components/buttons/ExploreButton";
import AccordianSection from "./sections/AccordianSection";
import BentoSection from "./sections/Bentosection";
import ButtonsSection from "./sections/ButtonsSection";
import CarouselSection from "./sections/CarouselSection";
import MenuSection from "./sections/MenuSection";
import TabSection from "./sections/TabSection";

export default function App() {
  return (
    <>
      <NavBar />

      <div className=" min-h-screen flex flex-col px-2 md:px-24 gap-6 pb-10">
        <Hero />
        {/* <Dependency/> */}
        <ExploreButton />
        <CarouselSection/>
        <AccordianSection/>
        <TabSection/>
        <BentoSection />
        <MenuSection/>
        <ButtonsSection/>
        
      </div>
      <Footer/>
    </>
  );
}
