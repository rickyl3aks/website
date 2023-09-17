import { forwardRef } from "react";
import { AiOutlineGithub } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";

import style from "./footer.module.css";

export const Footer = forwardRef((props, ref) => {
  return (
    <div ref={ref as null}>
      <footer>
        <svg viewBox="0 0 1440 320">
          <path
            fill="aliceblue"
            fillOpacity="1"
            d="M0,192L80,197.3C160,203,320,213,480,192C640,171,800,117,960,128C1120,139,1280,213,1360,250.7L1440,288L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
        <div id="contacts" className={style.infos}>
          <ul className={style.listIcons}>
            <li className={style.listMail}>
              <a
                href="mailto:rconsolandi@gmail.com"
                rel="noreferrer"
                target="_blank"
              >
                <i className={style.tooltip}>
                  <HiOutlineMail />
                  <span className={style.tooltipmail}>
                    rconsolandi@gmail.com
                  </span>
                </i>
              </a>
            </li>
            <li className={style.listGithub}>
              <a
                href="https://github.com/rickyl3aks"
                rel="noreferrer"
                target="_blank"
              >
                <i className={style.tooltip}>
                  <AiOutlineGithub />
                  <span className={style.tooltiptext}>rickyl3aks</span>
                </i>
              </a>
            </li>
          </ul>
          <p>
            ©{new Date().getFullYear()} by Riccardo Consolandi | All Rights
            Reserved
          </p>
        </div>
      </footer>
    </div>
  );
});
