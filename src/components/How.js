import Image from "next/image";

export default function How(props) {
  return (
    <div className="how-section">
      <h2 className="bold">How</h2>

      {props?.availabilty}

      <div className="btn-container">
      {props?.button1?.href && 
        <a href={props?.button1.href} target="_blank" rel="noreferrer">
          <button className="push-btn" style={{ background: props?.button1.bg ?? "#90390c" }}>
            <span className="btn-front" style={{ background:  props?.button1.fg ?? "#FF813F" }}>
              <span>{props?.button1.text}</span>
              <Image
                src={props?.button1.imgSrc}
                alt={props?.button1.imgAlt ?? props?.button1.text}
                height={20}
                width={25}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  objectFit: "cover"
                }} />
            </span>
          </button>
        </a>}
      {props?.button2?.href && 
        <a href={props?.button2.href} target="_blank" rel="noreferrer">
          <button className="push-btn" style={{ background: props?.button2.bg ?? "#90390c" }}>
            <span className="btn-front" style={{ background:  props?.button2.fg ?? "#FF813F" }}>
              <span>{props?.button2.text}</span>
              <Image
                src={props?.button2.imgSrc}
                alt={props?.button2.imgAlt ?? props?.button2.text}
                height={20}
                width={25}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  objectFit: "cover"
                }} />
            </span>
          </button>
        </a>}
      </div>

      {props?.sponsor?.href && 
        <a
            className="sponsor-link"
            href={props?.sponsor.href}
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src={props?.sponsor.imgSrc}
              alt={props?.sponsor.imgAlt}
              height={150}
              width={150}
              style={{
                maxWidth: "100%",
                height: "auto",
                objectFit: "cover"
              }} />
            <span>{props?.sponsor.text}</span>
          </a>}
      
    </div>
  );
}
