import Image from "next/legacy/image";

function ProjectCard(props) {
  return (
    <div className="project-card">
      <div className="pct-thumbnail">
        <Image
          src={props?.img}
          alt={props?.img}
          fill={true} 
          />
      </div>
      {props?.preview && <>
        <h3>{props?.title}</h3>
      </>}
      {!props?.preview && <>
        <div className="project-card-info">
          <h3>{props?.title}</h3>
          <div className="project-tech">{props?.techs}</div>
          <p>{props?.description}</p>
          <div className="project-btns">
            <a href={props?.Github} target="_blank" rel="noreferrer">
            <button className="push-btn">
                <span className="btn-front">
                  <span>Github</span>
                </span>
              </button>
            </a>
            <a href={props?.LiveLink} target="_blank" rel="noreferrer">
              <button className="push-btn">
                <span className="btn-front">
                  <span>Live</span>
                  <Image
                    src="/img/icons8-linking.svg"
                    alt="icons8-linking"
                    objectFit="cover"
                    width={150}
                    height={100}
                  />
                </span>
              </button>
            </a>
          </div>
        </div>
      </>}
    </div>
  );
}

export default ProjectCard;
