import Image from "next/image";
import SkillStars from "./SkillStars";

function Skill(props) {
  return <div className="skill">
    <Image
      src={props?.img}
      alt={props?.text}
      width={15}
      height={15}
      sizes="100vw"
      style={{
        width: "100%",
        height: "auto",
        objectFit: "contain",
        maxWidth: "100%",
        height: "auto"
      }} />
      <SkillStars count={props?.stars} years={props?.years}/>
  </div>;
}

export default Skill;
