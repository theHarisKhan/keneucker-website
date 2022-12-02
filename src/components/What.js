import Image from "next/legacy/image";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import { useState } from "react";

export default function How() {
  const [readMoreOpen, setReadMoreOpen] = useState(false);
  
  return (
    <div className="what-section">
      <Skills />
      {!readMoreOpen && (
          <>
            <Projects preview={true} />

            <button className="push-btn" onClick={() => setReadMoreOpen(!readMoreOpen)}>
              <span className="btn-front">
                <span>Read More</span>
              </span>
            </button>
          </>
          )}
      {readMoreOpen && (
        <>
        <Projects />
          <button className="push-btn" onClick={() => setReadMoreOpen(!readMoreOpen)}>
            <span className="btn-front">
              <span>Close</span>
            </span>
          </button>
        </>)}
    </div>
  );
}
