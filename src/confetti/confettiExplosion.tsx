import React, { useEffect, useRef } from "react";
import styles from "./confettiExplosion.module.css";

const ConfettiExplosion = () => {
  const confettiRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const confettiContainer: any = confettiRef.current;
    const colors = [
      "#ff0000",
      "#ffa500",
      "#ffff00",
      "#00ff00",
      "#0000ff",
      "#4b0082",
      "#8a2be2",
    ];
    const numConfetti = 100;
    const duration = 5000; // 5 seconds
    const fadeOutDuration = 1000; // 1 second

    let confettiTimeouts: NodeJS.Timeout[] = [];
    let confettiCount = 0;

    const createConfetti = () => {
      if (confettiCount >= numConfetti) {
        clearInterval(confettiInterval);
        return;
      }

      const confetti: HTMLDivElement = document.createElement("div");
      const size: number = Math.floor(Math.random() * 10) + 5; // Random size between 5 and 14 pixels
      const color: string = colors[Math.floor(Math.random() * colors.length)];
      const rotation: number = Math.floor(Math.random() * 360);
      const x: number = Math.random() * 100;
      const y: number = Math.random() * 100;

      confetti.style.width = `${size}px`;
      confetti.style.height = `${size}px`;
      confetti.style.backgroundColor = color;
      confetti.style.transform = `translate(${x}vw, ${y}vh) rotate(${rotation}deg)`;
      confetti.classList.add(styles.confetti);

      confettiContainer.appendChild(confetti);

      const timeout: NodeJS.Timeout = setTimeout(() => {
        confetti.style.transition = `opacity ${fadeOutDuration / 1000}s`;
        confetti.style.opacity = "0";

        setTimeout(() => {
          confetti.remove();
        }, fadeOutDuration);
      }, duration);

      confettiTimeouts.push(timeout);
      confettiCount++;
    };

    const confettiInterval = setInterval(
      createConfetti,
      duration / numConfetti
    );

    return () => {
      confettiTimeouts.forEach((timeout) => clearTimeout(timeout));
      clearInterval(confettiInterval);
    };
  }, []);

  return <div className={styles["confetti-container"]} ref={confettiRef}></div>;
};

export default ConfettiExplosion;
