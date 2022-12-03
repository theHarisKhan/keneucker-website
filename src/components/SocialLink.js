import Image from "next/image";

function SocialLink(props) {
  return <>
    <a
      href={props?.href}
      target="_blank"
      className="social-links"
      rel="noreferrer"
    >
      <div className="contact-social--icon">
        <Image
          src={props?.src}
          alt={props?.alt ?? props?.src}
          width={30}
          height={30}
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
            objectFit: "cover",
            maxWidth: "100%",
            height: "auto"
          }} />
      </div>
    </a>
  </>;
}

export default SocialLink;
