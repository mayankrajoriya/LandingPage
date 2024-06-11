import "./App.css";

import About from "./Components/About";
import Work from "./Components/Work";

import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Home from "./Components/Home ";
import Testimonial from "./Components/Testimonials";

function App() {
  return (
    <div className="App">
      <Home/>
      <About />
      <Work />
      <Testimonial/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;