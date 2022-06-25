function SkillCard(props) {
  return (
    <div className="hover:scale-110 duration-500">
      {props.icon}
      <p>{props.name}</p>
    </div>
  );
}

export default SkillCard;