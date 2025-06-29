import { useEffect, useRef, useState } from "react";
import style from "./game.module.css";
import Thunder from "../thunder/Thunder";

const Game = () => {
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      document.body.style.overflow = "visible";
      setIsDialogOpen(false);
    } else if (event.key === " ") {
      event.preventDefault();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const openDialog = () => {
    setIsDialogOpen(true);
    document.body.style.overflow = "hidden";
    dialogRef.current?.showModal();
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
    document.body.style.overflow = "visible";
    dialogRef.current?.close();
  };

  return (
    <div className={style.container}>
      <h1 className={style.title}>Play my mini game</h1>
      <div style={{ zIndex: "15", marginTop: "1rem", marginBottom: "2rem" }}>
        <p>I built a small JavaScript game from scratch, help the cat jump and hit the clouds!</p>
        <br />
        <button className={`${style.btn} ${style.outerBtn}`} onClick={openDialog} data-umami-event="clicked play game">
          Let's play
        </button>
      </div>
      <dialog className={style.modal} ref={dialogRef}>
        <Thunder isOpen={isDialogOpen} />
        <br />
        <button className={`${style.btn} ${style.innerBtn}`} onClick={closeDialog}>
          Close
        </button>
      </dialog>
    </div>
  );
};

export default Game;
