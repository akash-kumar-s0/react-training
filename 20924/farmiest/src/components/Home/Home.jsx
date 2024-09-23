import Hero from "../Hero/Hero";
import NavBar from "../NavBar/NavBar";
import "./Home.css";

const Home = () => {
  return (
    <>
    <div className="bg-custom-gradient">
      <div className="top-container">
        <NavBar />
      </div>
      <div className="top-container">
        <Hero />
      </div>
      
    </div>
    <div className="height"></div>
    </>
  );
};

export default Home;
