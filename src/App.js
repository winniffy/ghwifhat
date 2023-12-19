import logo from "./Assets/logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import heroImage from "./Assets/gwhlogo.jpg";
import heroImage2 from "./Assets/ptweet.jpg";
import Tokenomics from "./Components/Tokenomics/Tokenomics";
import Buy from "./Components/Buy/Buy";
import CarouselSlide from "./Components/Carousel/CarouselSlide";
import meme1 from "./Assets/meme2.jpg";
import meme2 from "./Assets/meme4.jpg";
import meme3 from "./Assets/meme2.jpg";
import meme4 from "./Assets/meme1.jpg";

function App() {
  return (
    <>
      <Navbar logo={logo} />
      <Hero heroImage={heroImage} heroImage2={heroImage2} />
      <Tokenomics />
      <Buy />
      <CarouselSlide
        heroImage2={heroImage2}
        meme1={meme1}
        meme2={meme2}
        meme3={meme3}
        meme4={meme4}
      />
    </>
  );
}

export default App;
