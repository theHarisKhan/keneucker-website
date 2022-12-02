import Image from "next/image";

function TimeLineBox(props) {
  return (
    <div className="timeline-box">
      <div className="atb-thumbnail">
        <Image
          src={props?.img}
          alt={props?.title}
          width={15}
          height={15}
          blurDataURL="data:..."
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
            objectFit: "contain"
          }} />
      </div>
      <div className="atb-info">
        <h3>{props?.title}</h3>
        <h4>{props?.position}</h4>
        <span className="atb-time">{props?.fromTo}</span>
        <div className="p">{props?.Desc}</div>
      </div>
    </div>
  );
}

export default TimeLineBox;
