import Image from "next/image";

function ProjectCard(props) {
  return (
    <div className="project-card">
      <div className="pct-thumbnail">
        <Image
          src={props?.img}
          alt={props?.img}
          fill={true} />
      </div>
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
                  fill={true}
                  style={{
                    maxWidth: "20px"
                  }} />
              </span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
