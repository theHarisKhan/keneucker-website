/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

function Home() {
  return (
    <div className="home-section">
      <div className="hs-wrapper">
        <div className="hs-content">
          <h1 className="display">
            Ken <span>Eucker</span>
          </h1>
          <p>
            Hello, I'm Ken Eucker. I love to design applications, write poetry,
            ride my bicycle, hike to hot springs, backpack through forests, take
            candid photographs, and talk about the intersection of technology
            and psychology.
          </p>
          <a href="/Ken_Eucker_Resume_2022.pdf" download={true}>
            <button className="push-btn" style={{"background": 'hsl(0deg 95% 25%)'}}>
              <span className="btn-front" style={{"background": '#ff0000'}}>
                <span>Resume</span>
                <Image src="/img/pdf-icon.svg" alt="pdf icon" width={100} height={100}/>
              </span>
            </button>
          </a>
        </div>
        <div className="hs-thumbnail">
          <div className="hs-bolb">
            <Image
              src="/img/ken_eucker_boom_headshot_cropped-removebg.png"
              alt="Ken Eucker Profile Image"
              width={100}
              height={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
