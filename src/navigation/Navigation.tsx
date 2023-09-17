import style from "./navigation.module.css";

const Navigation = ({ resultRef }: any) => {
  const handleOnClick = () => {
    resultRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div id="home">
      <div className={style.container} />
      <div>
        <div className={style.title}>
          <p>Riccardo</p>
          <p>
            Consolandi<span className={style.dot}> .</span>
          </p>
        </div>
        <div className={style.space} />
        <nav>
          <ul>
            <li>
              {" "}
              <a href="#home" className={style.link}>
                Home
              </a>
            </li>
            <li>
              {" "}
              <a
                href="#profile"
                className={style.link}
                onClick={() => handleOnClick()}
              >
                Profile
              </a>
            </li>
            <li>
              {" "}
              <a
                href="#projects"
                className={style.link}
                onClick={() => handleOnClick()}
              >
                Projects
              </a>
            </li>
            <li>
              {" "}
              <a
                href="#contacts"
                className={style.link}
                onClick={() => handleOnClick()}
              >
                Contacts
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navigation;
