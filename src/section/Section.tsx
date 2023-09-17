import { forwardRef, useEffect, useRef } from "react";
import ImageSlider from "./ImageSlider";
import { projects } from "./projects";
import style from "./section.module.css";

//https://api.github.com/users/rickyl3aks/repos

const Section = forwardRef((props, ref) => {
  const slides = projects();
  const disintegrateRef = useRef(null) as any;
  const numberOfPixels = 120;

  const handleScroll = () => {
    const disintegrate = disintegrateRef.current;
    if (disintegrate) {
      const rect = disintegrate.getBoundingClientRect();
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;
      if (
        rect.top <= scrollTop + windowHeight &&
        rect.bottom >= scrollTop &&
        !disintegrate.classList.contains(style.disintegrateAnimate)
      ) {
        disintegrate.classList.add(style.disintegrateAnimate);
      } else if (
        rect.top > scrollTop + windowHeight &&
        disintegrate.classList.contains(style.disintegrateAnimate)
      ) {
        disintegrate.classList.remove(style.disintegrateAnimate);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div ref={ref as null}>
      <div className={style.scrollerContainer}>
        <p id="projects" className={style.projectTitle}>
          PROJECTS
        </p>
        <div ref={disintegrateRef} className={style.disintegrate}>
          {" "}
          {Array.from({ length: numberOfPixels }, (_, idx) => (
            <div key={idx} className={style.pixel} />
          ))}
        </div>
        <div className={style.space} />
        <div className={style.containerStyle}>
          <ImageSlider slides={slides} />
        </div>
      </div>
    </div>
  );
});

export default Section;
