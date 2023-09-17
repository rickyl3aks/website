import { useRef } from "react";
import Header from "./header/Header";
import Navigation from "./navigation/Navigation";
import Section from "./section/Section";
import { Footer } from "./footer/Footer";
import { Timeline } from "./timeline/Timeline";

export const App = () => {
  const resultRef = useRef(null as unknown);
  return (
    <div>
      <Navigation resultRef={resultRef} />
      <Header />
      <Timeline ref={resultRef} />
      <Section ref={resultRef} />
      <Footer ref={resultRef} />
    </div>
  );
};
