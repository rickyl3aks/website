import style from "./header.module.css";
import { useTypewriter } from "./useTypewriter";
const text = [
  `I am a self-taught${"\n"}developer`,
  `Hello there!`,
  `Down below${"\n"}some of my${"\n"}projects!`,
];

const Header = () => {
  const typewriter = useTypewriter(text);
  return (
    <>
      <div className={style.container}>
        <div className={style.intro}>
          <span>👋 </span>
          <span className={style.blinking_cursor}>{typewriter}</span>
        </div>
        <div className={style.rectangle} />
      </div>
    </>
  );
};

export default Header;
