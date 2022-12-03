import Image from "next/image";

function SkillStars(props) {
  const starCount = props.count ?? 1;
  const getStars = () => {
    let content = [];
    for (let i = 0; i < starCount; ++i) {
      content.push(<span key={`star-${i}`}>
        <Image 
            src="/img/star-icon.svg"
            alt="skill-star-icon"
            width={10}
            height={10}
          />
      </span>);
    }
    return content;
  };

  return <div className="skill-stars">
      {props?.years ? (<span className="skill-years">{props.years}</span>) : ''}
      {getStars()}
    </div>;
}

export default SkillStars;
