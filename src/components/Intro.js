/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

function Intro(props) {
  return (
    <div className="intro-section">
      <div className="hs-wrapper">
        <div className="hs-content">
          <h1 className="display">
          {props?.firstName} <span>{props?.lastName}</span>
          </h1>
          {props?.content}
          <a href={props?.resumeFile} download={true}>
            <button className="push-btn" style={{"background": 'hsl(0deg 95% 25%)'}}>
              <span className="btn-front" style={{"background": '#ff0000'}}>
                <span>Resume</span>
                <Image
                  src="/img/pdf-icon.svg"
                  alt="pdf icon"
                  width={20}
                  height={25}
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                    objectFit: "cover"
                  }} />
              </span>
            </button>
          </a>
        </div>
        <div className="hs-thumbnail">
          <div className="hs-bolb">
            <Image
              src={props?.srcHeader}
              alt={props?.altHeader}
              width={props?.headerWidth ?? 200}
              height={props?.headerHeight ?? 300}
              style={{
                maxWidth: "100%",
                height: "auto",
                objectFit: "cover"
              }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
