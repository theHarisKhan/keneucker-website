import SocialLink from "./SocialLink";

function SocialLinks() {
  return (
    <div className="social-links">
      <SocialLink
        href="https://www.patreon.com/keneucker"
        src="/img/patreon-logo-new.png"
        alt="patreon-logo"
        />
      <SocialLink
        href="https://www.upwork.com/freelancers/~01ff1e3b91571a0179"
        src="/img/upwork-logo.png"
        alt="upwork-logo"
        />
      <SocialLink
        href="https://github.com/KenEucker"
        src="/img/Github.svg"
        alt="Github"
      />
      <SocialLink
        href="https://linkedin.com/in/keneucker"
        src="/img/Linkedin.svg"
        alt="linkedIn"
        />
      <SocialLink
        href="https://www.couchsurfing.com/people/keneucker"
        src="/img/cs-logo-reverse.png"
        alt="cs-logo-reverse"
      />
      <SocialLink
        href="https://dev.to/KenEucker"
        src="/img/devto-svg.svg"
        alt="devto"
      />
    </div>
  );
}

export default SocialLinks;
