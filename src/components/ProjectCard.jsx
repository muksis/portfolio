function Card(props) {
  return (
    <div style={{backgroundImage: `url(${props.url})`}} className="group container flex justify-center items-center mx-auto content-div">
      {/* HoverEffects */}
      <div className="opacity-0 group-hover:opacity-100 text-center">
        <span className="text-2xl font-bold text-white tracking-wider">
          {props.name}
        </span>
        <div className="pt-8 text-center">
          <a href={props.demoRef}>
            <button className="text-center px-4 py-3 m-2 bg-white font-bold text-lg">Demo</button>
          </a>
          <a href={props.codeRef}>
            <button className="text-center px-4 py-3 m-2 bg-white font-bold text-lg">Code</button>
          </a>
          </div>
        </div>
      </div>
  );
}

export default Card;
