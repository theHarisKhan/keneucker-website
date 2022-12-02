import Image from "next/image";

function SocialLinks() {
  return (
    <div className="social-links">
      <a
        href="https://www.patreon.com/keneucker"
        target="_blank"
        rel="noreferrer"
      >
        <Image
          src="/img/patreon-logo-new.png"
          alt="patreon-logo"
          height={30}
          width={30}
          style={{
            maxWidth: "100%",
            height: "auto",
            objectFit: "cover"
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
          height={30}
          width={30}
          style={{
            maxWidth: "100%",
            height: "auto",
            objectFit: "cover"
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
          height={30}
          width={30}
          style={{
            maxWidth: "100%",
            height: "auto",
            objectFit: "cover"
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
          height={30}
          width={30}
          style={{
            maxWidth: "100%",
            height: "auto",
            objectFit: "cover"
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
          height={30}
          width={30}
          style={{
            maxWidth: "100%",
            height: "auto",
            objectFit: "cover"
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
          height={30}
          width={30}
          style={{
            maxWidth: "100%",
            height: "auto",
            objectFit: "cover"
          }} />
      </a>
    </div>
  );
}

export default SocialLinks;
