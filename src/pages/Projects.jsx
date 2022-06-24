import ProjectCard from "../components/ProjectCard";
import exterior_1 from "../assets/exterior_1.jpeg";
import exterior_2 from "../assets/exterior_2.jpeg";
import exterior_3 from "../assets/exterior_3.jpeg";

const Projects = () => {
  return (
    <div className="w-full md:h-screen">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-black">Projects</p>
          <p className="py-6">// These are some of my recent projects</p>
        </div>
        {/* Projects container*/}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Card */}
          <div style={{backgroundImage: `url(${exterior_1})`}} className="group container flex justify-center items-center mx-auto content-div">

            {/* HoverEffects */}
            <div className="opacity-0 group-hover:opacity-100 text-center">
              <span className="text-2xl font-bold text-white tracking-wider">
                Project 1
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center px-4 py-3 m-2 bg-white font-bold text-lg">Demo</button>
                </a>
                <a href="/">
                  <button className="text-center px-4 py-3 m-2 bg-white font-bold text-lg">Code</button>
                </a>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}
  
export default Projects;
  