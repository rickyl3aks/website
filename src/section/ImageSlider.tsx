import { useState } from "react";
import style from "./imageSlider.module.css";

const slideStyles: object = {
  height: "300px",
  position: "relative",
  borderRadius: "10px",
  backgroundSize: "cover",
  backgroundPosition: "center",
  overflow: "hidden",
};

const ImageSlider = ({ slides }: any) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const goToPrevious = (): void => {
    const isFirstSlide: boolean = currentIndex === 0;
    const newIndex: number = isFirstSlide
      ? slides.length - 1
      : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = (): void => {
    const isLastSlide: boolean = currentIndex === slides.length - 1;
    const newIndex: number = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex: number): void => {
    setCurrentIndex(slideIndex);
  };

  const slideStylesWidthBackground: object = {
    ...slideStyles,
    backgroundImage: `url(${slides[currentIndex].url})`,
  };

  return (
    <div className={style.sliderStyles}>
      <div onClick={goToPrevious} className={style.leftArrowStyles}>
        <div className={style.arrowIcon}></div>
      </div>
      <div onClick={goToNext} className={style.rightArrowStyles}>
        <div className={style.arrowIcon}></div>
      </div>
      <div style={slideStylesWidthBackground}>
        <div className={style.infos}>
          <div>
            <p>{slides[currentIndex].info}</p>
          </div>
          <div>
            <div style={{ margin: ".5rem" }} />
            <a
              href={slides[currentIndex].link}
              target="_blank"
              rel="noreferrer"
            >
              <span className={style.btn}>click here</span>
            </a>
          </div>
        </div>
        <div className={style.container}>
          {currentIndex + 1}/{slides.length}
        </div>
      </div>
      <div className={style.dotsContainerStyles}>
        {slides.map((slideIndex: number, idx: number): object => (
          <div
            className={
              currentIndex === idx ? style.dotAnimation : style.dotStyle
            }
            key={idx + slideIndex}
            onClick={() => goToSlide(idx)}
          >
            ●
          </div>
        ))}
      </div>
    </div>
  );
};
export default ImageSlider;
