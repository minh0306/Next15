"use client";
import { useEffect, useState } from "react";
import { Box, Button } from "@mui/material";
import Image from "next/image";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
const slideData = [
  { id: 1, img: "/assets/banner1.jpg", caption: "Slide 1" },
  { id: 2, img: "/assets/banner3.jpg", caption: "Slide 2" },
  { id: 3, img: "/assets/banner2.jpg", caption: "Slide 3" },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slideData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slideData.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "100%",
        maxWidth: "full",
        margin: "auto",
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "100%",
          overflow: "hidden",
          borderRadius: "8px",
        }}
      >
        <Image
          src={slideData[currentIndex].img}
          alt={slideData[currentIndex].caption}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          quality={100}
          style={{ objectFit: "cover" }}
        />
      </Box>

      <Button
        onClick={prevSlide}
        sx={{
          position: "absolute",
          top: "50%",
          left: 0,
          transform: "translateY(-50%)",
          color: "#fff",
          bgcolor: "rgba(0, 0, 0, 0.2)",
          "&:hover": { bgcolor: "rgba(0, 0, 0, 0.5)" },
        }}
      >
        <NavigateBeforeIcon />
      </Button>
      <Button
        onClick={nextSlide}
        sx={{
          position: "absolute",
          top: "50%",
          right: 0,
          transform: "translateY(-50%)",
          color: "#fff",
          bgcolor: "rgba(0, 0, 0, 0.2)",
          "&:hover": { bgcolor: "rgba(0, 0, 0, 0.5)" },
        }}
      >
        <NavigateNextIcon />
      </Button>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          position: "absolute",
          bottom: "10px",
          width: "100%",
          gap: "8px",
        }}
      >
        {slideData.map((_, index) => (
          <Box
            key={index}
            sx={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              backgroundColor:
                currentIndex === index ? "#fff" : "rgba(255, 255, 255, 0.5)",
              transition: "background-color 0.3s ease",
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Carousel;
