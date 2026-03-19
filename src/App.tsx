import Header from "./components/header/Header";
import Hero from "./components/main/Hero";
import "./index.css";

function App() {
  return (
    <div className="lg:w-auto lg:min-h-auto lg:overflow-hidden lg:mr-16.5 lg:ml-16.5">
      <Header/>
      <Hero />
    </div>
  );
}

export default App;
