import { useState, useEffect, useRef } from "react";

// Images
import HeroImg from '../images/TSKYPP.png'
import HeroSub from '../images/TSKYPP2.png'

function Hero() {
  const [isFlash, setIsFlash] = useState(false);
  const imageRef = useRef(null);

  const flashHeroImage = () => {
    setIsFlash(true); 
    setTimeout(() => {
      setIsFlash(false); 
    }, 1000); 
  };


  useEffect(() => {
    flashHeroImage();
    const img = new Image();
    setInterval(() => {
      img.onload = () => {
        const interval = Math.floor(Math.random() * 1000 + 1000); 
          setIsFlash(true); 
          setTimeout(() => {
            setIsFlash(false);
          }, interval);
      };
      img.src = HeroImg;
    }, 8000);
  }, []);

  return (
    <>
      <section className="hero">
        <div className="hero__container">
          <img ref={imageRef}
            src={isFlash ? HeroSub : HeroImg}
            alt="Home Hero image" className="hero__img"
          />
        </div>
      </section>
    </>
  )
}
export default Hero






