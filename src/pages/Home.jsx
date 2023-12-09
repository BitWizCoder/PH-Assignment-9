import Cards from "../components/Cards";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Join from "../components/Join";
import Speakers from "../components/Speakers";

const Home = () => {
  return (
    <div>
      <Hero />
      <Cards title={'You will Explore'} />
      <Speakers />
      <Join />
      <Footer />
    </div>
  );
};

export default Home;
