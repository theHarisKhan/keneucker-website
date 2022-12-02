/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

function Intro() {
  return (
    <div className="intro-section">
      <div className="hs-wrapper">
        <div className="hs-content">
          <h1 className="display">
            Ken <span>Eucker</span>
          </h1>
          <p>
            Hello, I'm Ken Eucker. I love to design applications, write poetry,
            ride my bicycle, hike to hot springs, backpack through forests, take
            candid photographs, and talk about the intersection of technology
            and psychology. I also volunteer my time and energy to various projects 
            throughout the year.
          </p>
          <a href="/doc/Ken_Eucker_Resume_2022.pdf" download={true}>
            <button className="push-btn" style={{"background": 'hsl(0deg 95% 25%)'}}>
              <span className="btn-front" style={{"background": '#ff0000'}}>
                <span>Resume</span>
                <Image
                  src="/img/pdf-icon.svg"
                  alt="pdf icon"
                  objectFit="cover"
                  width={20}  
                  height={25}  
                />
              </span>
            </button>
          </a>
        </div>
        <div className="hs-thumbnail">
          <div className="hs-bolb">
            <Image
              src="/img/ken_eucker_boom_headshot_cropped-removebg.png"
              alt="Ken Eucker Profile Image"
              fill={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
