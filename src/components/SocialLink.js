import Image from "next/legacy/image";

function SocialLink(props) {
  return <>
    <a
      href={props?.link}
      target="_blank"
      className="social-links"
      rel="noreferrer"
    >
      <div className="contact-social--icon">
        <Image
          src={props?.imgsrc}
          alt={props?.imgsrc}
          width={15}
          height={15}
          blurDataURL="data:..."
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
            objectFit: "cover"
          }} />
      </div>
    </a>
  </>;
}

export default SocialLink;
