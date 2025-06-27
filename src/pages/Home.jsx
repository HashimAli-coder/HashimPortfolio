import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import Footer from "../components/Footer"

const Home = () => {
  return (
    <div className="bg-gray-950 text-white scroll-smooth">
      <Hero />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default Home;
