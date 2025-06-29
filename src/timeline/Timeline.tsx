import { forwardRef } from "react";
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
            I'm a self-taught front-end developer with experience in JavaScript, React, and Next.js. I focus on creating responsive, accessible, and
            visually polished web interfaces
          </p>
          <h2 className={style.title}>What i do</h2>
          <p>
            I design and build user-friendly web applications, combining creativity with modern front-end technologies to craft smooth, interactive
            experiences
          </p>
         
          <br />
          <br />
          <br />
          <br />
          <div className={style.scroll}>↓</div>
        </div>
      </div>
    </>
  );
});
