import Header from "./components/header/Header";
import Hero from "./components/main/Hero";
import ServiceContet from "./components/main/ServiceContet";
import "./index.css";
import SlideSection from "./components/main/SlideSection";

function App() {
  return (
    <div className="lg:w-auto lg:min-h-auto lg:overflow-hidden">
      <div className="lg:mr-16.5 lg:ml-16.5">
        <Header />
        <Hero />
      </div>
      <ServiceContet />
      <SlideSection />
      
    </div>
  );
}

export default App;
