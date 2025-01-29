import Hero from "./components/Hero";
import HistoryBox from "./components/HistoryBox";
import NavBar from "./components/NavBar";
import Services from "./components/Services";
import Uniqueness from "./components/Uniqueness";
import Team from "./components/Team";
import OurStory from "./components/OurStory";
import NewsAndUpdate from "./components/NewsAndUpdate";
import ProjectCollection from "./components/ProjectCollection";
import Footer from "./components/Footer";
import Brands from "./components/Brands";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <HistoryBox />
      <Brands />
      <Services />
      <Uniqueness />
      <Team />
      <OurStory />
      <NewsAndUpdate />
      <ProjectCollection />
      <Footer />
    </>
  );
}

export default App;
