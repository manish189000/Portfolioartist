import React, { useState, useEffect } from "react";
import video1 from "../vidovfx/smoke01.mp4";
import video2 from "../vidovfx/smoke02.mp4";
import video3 from "../vidovfx/rain_and_destruction01.mp4";
import video4 from "../vidovfx/rain_and_destruction02.mp4";
import video5 from "../vidovfx/pyro and dust.mp4";
import video6 from "../vidovfx/dust.mp4";
import video7 from "../vidovfx/snow_dust.mp4";
import video8 from "../vidovfx/snow01.mp4";
import video9 from "../vidovfx/water_and_ripples.mp4";

const videos = [
  {
    src: video1,
    title: "The porter show  ",
    description: "Smoke 01",
  },
  {
    src: video2,
    title: " The porter show",
    description: "Smoke 02",
  },
  {
    src: video3,
    title: " The Fall of the House of Ushe",
    description: "Rain and Destruction 01",
  },
  {
    src: video4,
    title: " The Fall of the House of Usher",
    description: "Rain and Destruction 02",
  },
  {
    src: video5,
    title: "Personal",
    description: "Pyro and Dust ",
  },
  {
    src: video6,
    title: " Dino Ranch Showt",
    description: "Dus",
  },
  {
    src: video7,
    title: " Dino Ranch Show",
    description: "Snow Dust",
  },
  {
    src: video8,
    title: " Dino Ranch Show",
    description: "Snow 01",
  },
  {
    src: video9,
    title: " Dino Ranch Show",
    description: "Water and Ripples",
  },
];

const VFXHero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-black text-white h-screen flex items-center justify-center">
      <div className="absolute inset-0 overflow-hidden">
        <video
          src={videos[currentIndex].src}
          autoPlay
          loop
          muted
          className="w-full h-full object-cover object-center"
          style={{ height: "100vh" }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center p-4">
          <h1 className="text-4xl font-Arial text-[#CA8A04] md:text-6xl font-bold mb-4 text-center">
            {videos[currentIndex].title}
          </h1>
          <p className="text-lg md:text-2xl mb-8 text-center">
            {videos[currentIndex].description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VFXHero;
