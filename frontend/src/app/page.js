import Footer from "@/components/Shared/Footer";
import NavBar from "@/components/Shared/NavBar";
import FAQ from "@/containers/HomePage/FAQ";
import Hero from "@/containers/HomePage/Hero";
import ModelTest from "@/containers/HomePage/ModelTest";
import ModelTestDetails from "@/containers/HomePage/ModelTestDetails";

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <ModelTest />
      <ModelTestDetails />
      <FAQ />
      <Footer />
    </>
  );
}
