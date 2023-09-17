import { useEffect, useState } from "react";

enum Phase {
  Typing,
  Pausing,
  Deleting,
}

const TYPING_INTERVAL = 150;
const PAUSE_TIME = 1000;
const DELETING_INTERVAL = 50;

export const useTypewriter = (text: any) => {
  const [phase, setPhase] = useState(Phase.Typing);
  const [typeWriter, setTypeWriter] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  
  useEffect(() => {
    switch (phase) {
      case Phase.Typing: {
        const nextText = text[selectedIndex].slice(0, typeWriter.length + 1);

        if (nextText === typeWriter) {
          setPhase(Phase.Pausing);
          return;
        }

        const timeout = setTimeout(() => {
          setTypeWriter(nextText);
        }, TYPING_INTERVAL);

        return () => clearInterval(timeout);
      }

      case Phase.Deleting: {
        if (!typeWriter) {
          const nextIndex = selectedIndex + 1;
          setSelectedIndex(text[nextIndex] ? nextIndex : 0);
          setPhase(Phase.Typing);
          return;
        }

        const nextRemaining = text[selectedIndex].slice(
          0,
          typeWriter.length - 1
        );

        const timeout = setTimeout(() => {
          setTypeWriter(nextRemaining);
        }, DELETING_INTERVAL);

        return () => clearInterval(timeout);
      }
      case Phase.Pausing:
      default:
        const timeout = setTimeout(() => {
          setPhase(Phase.Deleting);
        }, PAUSE_TIME);

        return () => clearTimeout(timeout);
    }
  }, [text, typeWriter, phase, selectedIndex]);
  return typeWriter;
};
