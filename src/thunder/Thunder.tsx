import { useState, useEffect } from "react";
import styles from "./thunder.module.css";
import Cloud from "../cloud/Cloud";
import Rain from "../rain/Rain";
import { quotes } from "../quotes/quotes";
import ConfettiExplosion from "../confetti/confettiExplosion";

const Thunder = ({ isOpen }: any) => {
  const [isJumping, setIsJumping] = useState<boolean>(false);
  const [catPosition, setCatPosition] = useState<number>(0);
  const [collision, setCollision] = useState<boolean>(false);
  const [collisionCount, setCollisionCount] = useState<number>(0);
  const [showRain, setShowRain] = useState<boolean>(false);
  const lightningElements: string[] =
    isOpen && collision ? Array(4).fill(null) : [];
  const containerWidth: number = 450;
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleKeyDown = (event: any) => {
    if (event.keyCode === 32) {
      setIsJumping(true);
    }
  };

  const handleTouchStart = (event: any) => {
    if (!event.target.closest(`.${styles.container}`)) {
      return;
    }
    setIsJumping(true);
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("touchstart", handleTouchStart, {
      passive: false,
    });
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("touchstart", handleTouchStart);
    };
  }, []);

  useEffect(() => {
    if (isOpen && isJumping) {
      const timeoutId = setTimeout(() => {
        setIsJumping(false);
      }, 500);

      return () => clearTimeout(timeoutId);
    }
  }, [isOpen, isJumping]);

  useEffect(() => {
    if (isOpen) {
      const catTimer = setInterval(() => {
        setCatPosition((prevPosition) => {
          const newPosition = prevPosition + 5;
          if (newPosition >= containerWidth) {
            return newPosition - containerWidth;
          }
          return newPosition;
        });
      }, 50);

      return () => {
        clearInterval(catTimer);
      };
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      const cloudElement = document.querySelector<HTMLElement>(
        `.${styles.cloud}`
      );
      const catElement = document.querySelector<HTMLElement>(`.${styles.cat}`);

      if (cloudElement && catElement) {
        const cloudRect = cloudElement.getBoundingClientRect();
        const catRect = catElement.getBoundingClientRect();

        const isCollision = !(
          cloudRect.right < catRect.left ||
          cloudRect.left > catRect.right ||
          cloudRect.bottom < catRect.top ||
          cloudRect.top > catRect.bottom
        );
        setCollision(isCollision);
        if (isCollision && !collision) {
          setShowRain(true);
          setCollisionCount((prevCount) => prevCount + 1);
          setCollision(true);
          const timeoutId = setTimeout(() => {
            setShowRain(false);
          }, 3000);

          return () => clearTimeout(timeoutId);
        }
      }
    } else if (!isOpen) {
      setShowRain(false);
      setCollision(false);
      setCollisionCount(0);
    }
  }, [isOpen, catPosition, collision]);

  const lastCollisionCount = Math.min(
    collisionCount,
    Object.keys(quotes).length
  );

  return (
    <>
      {collisionCount === 0 && (
        <div>
          {isMobile ? (
            <p>
              To make the cat jump and create rain, simply tap inside the window
              below
            </p>
          ) : (
            <p>
              To make the cat jump and create rain, press the spacebar on your
              keyboard
            </p>
          )}
        </div>
      )}
      {Object.keys(quotes).includes(lastCollisionCount.toString()) && (
        <div className={styles.quotes}>
          <p>{quotes[lastCollisionCount].quote}</p>
          <cite>{quotes[lastCollisionCount].author}</cite>
        </div>
      )}
      <div className={styles.container}>
        {Object.keys(quotes).length === lastCollisionCount && (
          <ConfettiExplosion />
        )}
        <h1 style={{ textAlign: "left" }}>{collisionCount}</h1>
        <Cloud />
        <div className={styles.center}>
          <div className={styles.cloud}></div>
          {lightningElements.map((_, index) => (
            <div key={index} className={styles.lightning} />
          ))}
        </div>
        {showRain && <Rain />}
        {Object.keys(quotes).length !== lastCollisionCount && (
          <div
            className={`${styles.cat} ${isJumping ? styles.jumping : ""}`}
            style={{ left: `${catPosition}px` }}
          ></div>
        )}
      </div>
    </>
  );
};

export default Thunder;
