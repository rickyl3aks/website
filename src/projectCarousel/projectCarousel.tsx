import { useRef } from "react";
import { projects } from "../section/projects";
import styles from "./projectCarousel.module.css";

const ProjectCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollAmount = 320;
  const list = projects();

  const scroll = (offset: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  return (
    <section className={styles.container}>
      <div className={styles.controls}>
        <button onClick={() => scroll(-scrollAmount)} className={styles.scrollBtnLeft}>
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

        <button onClick={() => scroll(scrollAmount)} className={styles.scrollBtnRight}>
          →
        </button>
      </div>
    </section>
  );
};

export default ProjectCarousel;
