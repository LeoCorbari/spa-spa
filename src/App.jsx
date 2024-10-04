import Nav from "./components/nav/Nav";
import Home from "./components/home/Home";
import "../src/App.scss";
import LearnMore from "./components/leran-more/LearnMore";
import Services from "./components/our-services/Services";
import AboutUs from "./components/about-us/AboutUs";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Nav />
      <Home />
      <LearnMore />
      <Services />
      <AboutUs />
      <Footer />
    </>
  );
}

export default App;
