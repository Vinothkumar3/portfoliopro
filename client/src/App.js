import "./App.css";
/* all components */
import Home from "./PortfolioContainer/Home/Home";
import AboutMe from "./PortfolioContainer/AboutMe/AboutMe";
import Resume from "./PortfolioContainer/Resume/Resume";
import Blog from "./PortfolioContainer/Blog/Blog";
import ContactMe from "./PortfolioContainer/ContactMe/ContactMe";
import Footer from "./PortfolioContainer/Footer/Footer";
function App() {
  return (
    <>
      <div className="App">
        <Home />
        <AboutMe />
        <Resume />
        <Blog />
        <ContactMe />
        <Footer />
      </div>
    </>
  );
}

export default App;
