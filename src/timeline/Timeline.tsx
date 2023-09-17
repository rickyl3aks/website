import { forwardRef } from "react";
import Game from "../game/Game";
import style from "./timeline.module.css";

export const Timeline = forwardRef((props, ref) => {
  return (
    <>
      <div style={{ display: "block", margin: "auto" }}>
        <div className={style.pixelart} id="profile" ref={ref as null} />
      </div>
      <br />
      <br />
      <div>
        <div className={style.container}>
          <h2 className={style.title}>About me</h2>
          <p>
            I'm a self-taught front-end developer experienced in JavaScript,
            React and Next.js
          </p>
          <h2 className={style.title}>What i do</h2>
          <p>
            I enjoy creating user-friendly web apps, blending technology and
            creativity for visually appealing websites.
          </p>
          <Game />
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
    </>
  );
});
