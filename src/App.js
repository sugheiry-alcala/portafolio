import React, { useState, useEffect } from 'react';
import './App.css';
import Cover from './components/cover/Cover';
import Navbar from './components/navbar/Navbar';
import About from './components/about/About';
import Slider from './components/slider/Slider';
import Info from './components/info/Info';
import Footer from './components/footer/Footer';

function App() {
  const [scrolHeight, setScrolHeight] = useState(0);
  const handleScrol = () => {
    const position = window.pageYOffset;
    setScrolHeight(position);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScrol);
  }, [scrolHeight])

  return (
    <div className="App">
      <Navbar  isScrolling={scrolHeight}/>
      <Cover />
      <About />
      <Slider />
      <Info />
      <Footer />

    </div>
  );
}

export default App;
