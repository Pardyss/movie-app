import { useEffect, useState } from "react";
import Dots from "./Dots";

const images = [
  "images/the-avengers-movie-poster.jpg",
  "images/Joker-Poster.jpg",
  "images/combat.webp",
  "images/Joker-Poster-serious.jpg",
];

function Slider({}) {
  const [changingIntervalId, setChangingIntervalId] = useState(0);
  const [ImageIndex, setImageIndex] = useState(0);
  const [animation, setAnimation] = useState(false);

  function clear(newIndex) {
    clearInterval(changingIntervalId);
    setImageIndex(newIndex);
    genInterval();
  }

  function changeSlider() {
    setAnimation(true);
    setTimeout(() => {
      setImageIndex((prev) => {
        if (prev >= images.length - 1) {
          return 0;
        }
        return prev + 1;
      });
      setTimeout(() => {
        setAnimation(false);
      }, 100);
    }, 100);
  }

  const genInterval = () => {
    const intervalId = setInterval(() => {
      changeSlider();
    }, 3000);
    setChangingIntervalId(intervalId);
    return intervalId;
  };

  useEffect(() => {
    const intervalId = genInterval();
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="slideShow">
      <img
        className="banners"
        src={images[ImageIndex]}
        style={animation ? { opacity: 0 } : {}}
      ></img>
      <Dots
        image={images[ImageIndex]}
        setNewDot={clear}
        total={images.length}
        selectedIndex={ImageIndex}
      />
    </div>
  );
}

export default Slider;
