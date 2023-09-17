import { useEffect, useState } from "react";
import styles from "./rain.module.css";

const Rain = () => {
  const [raindrops, setRaindrops] = useState<any>([]);
  useEffect(() => {
    const totalRaindrops = 50;

    const intervalId = setInterval(() => {
      setRaindrops((prevRaindrops: any) => {
        if (prevRaindrops.length < totalRaindrops) {
          return [...prevRaindrops, Date.now()];
        } else {
          clearInterval(intervalId);
          return prevRaindrops;
        }
      });
    }, 300);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={styles.rainContainer}>
      {raindrops.map((timestamp: string, index: number) => (
        <div
          key={timestamp}
          className={styles.raindrop}
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${index * 0.1}s`,
          }}
        ></div>
      ))}
    </div>
  );
};

export default Rain;
