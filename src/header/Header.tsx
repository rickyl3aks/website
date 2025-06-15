import { useEffect } from "react";
import style from "./header.module.css";
import { useTypewriter } from "./useTypewriter";
const text = [`I am a self-taught${"\n"}developer`, `Hello there!`, `Down below${"\n"}some of my${"\n"}projects!`];

const Header = () => {
  const typewriter = useTypewriter(text);

  const handleRightClick = (event: any) => {
    event.preventDefault();
  };

  useEffect(() => {
    document.addEventListener("contextmenu", handleRightClick);
    return () => {
      document.removeEventListener("contextmenu", handleRightClick);
    };
  }, []);
  return (
    <>
      <div className={style.container}>
        <div className={style.intro}>
          <span>👋 </span>
          <span className={style.blinking_cursor}>{typewriter}</span>
        </div>
        <video controlsList="nodownload" playsInline loop muted autoPlay className={style.rectangle}>
          <source src="./videos/bird_house.mp4" type="video/mp4"></source>
        </video>
      </div>
    </>
  );
};

export default Header;
