import Image from "next/legacy/image";

function AboutInfo() {
  return (
    <div className="about-img">
      <div className="about-thumbnail">
        <Image
          src="/img/ken_eucker_boom_headshot.png"
          alt="ken_eucker_boom_headshot_cropped"
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
          />
        </a>
        <a
          href="https://www.upwork.com/freelancers/~01ff1e3b91571a0179"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src="/img/upwork-logo.png"
            alt="upwork-logo"
          />
        </a>
        <a
          href="https://github.com/KenEucker"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src="/img/Github.svg"
            alt="Github"
          />
        </a>
        <a
          href="https://linkedin.com/in/keneucker"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src="/img/Linkedin.svg"
            alt="linkedIn"
          />
        </a>
        <a
          href="https://www.couchsurfing.com/people/keneucker"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src="/img/cs-logo-reverse.png"
            alt="cs-logo-reverse"
          />
        </a>
        <a
          href="https://dev.to/KenEucker"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src="/img/devto-svg.svg"
            alt="devto"
          />
        </a>
      </div>
    </div>
  );
}

export default AboutInfo;
