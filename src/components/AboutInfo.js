import Image from "next/image";

function AboutInfo() {
  return (
    <div className="about-img">
      <div className="about-thumbnail">
        <Image
          src="/img/ken_eucker_boom_headshot.png"
          alt="ken_eucker_boom_headshot"
          fill={true}
        />
      </div>
      <h2>Ken Eucker</h2>
      <div className="about-social-links">
        <a
          href="https://www.patreon.com/keneucker"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src="/img/patreon-logo-new.png"
            alt="patreon-logo"
            fill={true} 
            style={{
              maxWidth: "20px"
            }} />
        </a>
        <a
          href="https://www.upwork.com/freelancers/~01ff1e3b91571a0179"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src="/img/upwork-logo.png"
            alt="upwork-logo"
            fill={true} 
            style={{
              maxWidth: "20px"
            }} />
        </a>
        <a
          href="https://github.com/KenEucker"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src="/img/Github.svg"
            alt="Github"
            fill={true} 
            style={{
              maxWidth: "20px"
            }} />
        </a>
        <a
          href="https://linkedin.com/in/keneucker"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src="/img/Linkedin.svg"
            alt="linkedIn"
            fill={true} 
            style={{
              maxWidth: "20px"
            }} />
        </a>
        <a
          href="https://www.couchsurfing.com/people/keneucker"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src="/img/cs-logo-reverse.png"
            alt="cs-logo-reverse"
            fill={true} 
            style={{
              maxWidth: "20px"
            }} />
        </a>
        <a
          href="https://dev.to/KenEucker"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src="/img/devto-svg.svg"
            alt="devto"
            fill={true} 
            style={{
              maxWidth: "20px"
            }} />
        </a>
      </div>
    </div>
  );
}

export default AboutInfo;
