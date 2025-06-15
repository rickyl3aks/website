import { useEffect, useRef } from "react";
import Header from "./header/Header";
import Navigation from "./navigation/Navigation";
import Section from "./section/Section";
import { Footer } from "./footer/Footer";
import { Timeline } from "./timeline/Timeline";

export const App = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cloud.umami.is/script.js";
    script.async = true;
    script.defer = true;
    script.setAttribute("data-website-id", "f9049523-b62e-4461-a06d-8df6f010c25f");
    document.head.appendChild(script);
  }, []);
  const resultRef = useRef(null as unknown);
  return (
    <div>
      <Navigation resultRef={resultRef} />
      <div style={{ minHeight: "50vh" }}>
        <Header />
      </div>
      <Timeline ref={resultRef} />
      <Section ref={resultRef} />
      <Footer ref={resultRef} />
    </div>
  );
};
