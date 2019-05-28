import React, { useState, useEffect } from "react";
import "./styles.css";

function ReactHookCarousel(props) {
  let { pictures, altProp, styleProp, height, width, disableAutoPlay } = props;
  height = height ? height : "350px";
  width = width ? width : "500px";
  const isPicturesArray = Array.isArray(pictures) && pictures.length !== 0;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(!disableAutoPlay);
  const [isMouseMoving, setIsMouseMoving] = useState(false);

  useEffect(() => {
    let timeout = setTimeout(() => {
      setIsMouseMoving(0);
      let elements = document.getElementsByClassName("icons");
      for (let i = 0; i < elements.length; i++) {
        elements[i].style.visibility = "hidden";
        elements[i].style.opacity = 0;
      }
    }, 2000);
    return () => {
      clearTimeout(timeout);
    };
  }, [isMouseMoving]);

  useEffect(() => {
    if (isPicturesArray) {
      if (isPlaying) {
        var changeCurrentIndex = setTimeout(() => {
          setCurrentIndex((currentIndex + 1) % pictures.length);
        }, 2600);
      } else {
        document.getElementById("image").classList.remove("image");
      }
      return () => clearTimeout(changeCurrentIndex);
    }
  }, [currentIndex, isPlaying]);

  function togglePlay() {
    if (isPlaying) document.getElementById("image").classList.remove("image");
    setIsPlaying(!isPlaying);
  }

  function pauseCarousel() {
    if (isPlaying) {
      setIsPlaying(false);
    }
  }

  if (isPicturesArray) {
    return (
      <div
        onMouseMove={() => {
          setIsMouseMoving(true);
          let elements = document.getElementsByClassName("icons");
          for (let i = 0; i < elements.length; i++) {
            elements[i].style.visibility = "visible";
            elements[i].style.opacity = 0.7;
          }
        }}
        className="container"
        style={{
          height: height,
          width: width
        }}
      >
        <img
          key={currentIndex}
          src={pictures[currentIndex]}
          id="image"
          className="image"
          style={styleProp}
          height={height}
          width={width}
          alt={altProp ? altProp : "Cannot Load"}
        />
        <div className={"icons play-icon"} onClick={() => togglePlay()}>
          {!isPlaying ? <div className="play" /> : <div className="pause" />}
        </div>
        <div
          className="icons prev-icon arrow left"
          onClick={() => {
            pauseCarousel();
            setCurrentIndex(
              (currentIndex - 1 + pictures.length) % pictures.length
            );
          }}
        />
        <div
          className="icons next-icon arrow right"
          onClick={() => {
            pauseCarousel();
            setCurrentIndex((currentIndex + 1) % pictures.length);
          }}
        />
      </div>
    );
  } else {
    console.error(
      "Invalid Props: make sure to pass pictures prop(an Array with image URLs) to the carousel component. You passed",
      pictures
    );
    return <div>Please Pass Valid props to display the carousel</div>;
  }
}

export default ReactHookCarousel;
