import "./App.css";
import Navigation from "./components/navigation";
import HeroSection from "./components/hero";
const App = () => {
  return (
    <div className="main-div">
      <Navigation />
      <HeroSection />
    </div>
  );
};

export default App;
