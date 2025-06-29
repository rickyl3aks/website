import { useEffect, useRef, useState } from "react";
import { projects } from "../section/projects";
import styles from "./projectCarousel.module.css";

const ProjectCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollAmount = 320;
  const list = projects();
  const [activeDot, setDot] = useState(0);

  const scrollToIndex = (index: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ left: index * scrollAmount, behavior: "smooth" });
      setDot(index);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const scrollLeft = scrollRef.current.scrollLeft;
        const newIndex = Math.round(scrollLeft / scrollAmount);
        setDot(newIndex);
      }
    };

    const ref = scrollRef.current;
    if (ref) {
      ref.addEventListener("scroll", handleScroll, { passive: true });
    }

    return () => {
      if (ref) ref.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className={styles.container}>
      <div className={styles.controls}>
        <button onClick={() => scrollToIndex(Math.max(activeDot - 1, 0))} className={styles.scrollBtnLeft}>
          ←
        </button>

        <div ref={scrollRef} className={styles.scrollContainer}>
          {list.map((project, index) => (
            <div key={index} className={styles.card}>
              <img src={project.url} alt={project.title} className={styles.cardImage} />
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.cardInfo}>{project.info}</p>
                <a
                  href={project.link}
                  data-umami-event={`link to: ${project.title}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.viewBtn}
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>

        <button onClick={() => scrollToIndex(Math.min(activeDot + 1, list.length - 1))} className={styles.scrollBtnRight}>
          →
        </button>
      </div>

      <div className={styles.indicators}>
        {list.map((_, index) => (
          <span key={index} className={`${styles.dot} ${index === activeDot ? styles.active : ""}`} onClick={() => scrollToIndex(index)} />
        ))}
      </div>
    </section>
  );
};

export default ProjectCarousel;
