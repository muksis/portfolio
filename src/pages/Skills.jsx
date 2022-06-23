import { SiHtml5, SiCss3, SiJavascript, SiReact, SiGit, SiGithub, SiExpress, SiNodedotjs, SiMongodb, SiFirebase, SiBootstrap, SiTailwindcss, SiDocker, SiPostman } from "react-icons/si";

const Skills = () => {
    return (
      <div className="w-full h-screen">
        {/* Container */}
        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
          <div>
            <p className="text-4xl font-bold inline border-b-4 border-black">Skills</p>
            <p className="py-4">// These are the technologies I've worked with</p>
          </div>

          <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
            <div className="hover:scale-110 duration-500">
              <SiHtml5 className="w-20 mx-auto" />
              <p>HTML</p>
            </div>
            <div className="hover:scale-110 duration-500">
              <SiCss3 className="w-20 mx-auto" />
              <p>CSS</p>
            </div>
            <div className="hover:scale-110 duration-500">
              <SiJavascript className="w-20 mx-auto" />
              <p>JS</p>
            </div>
            <div className="hover:scale-110 duration-500">
              <SiReact className="w-20 mx-auto" />
              <p>ReactJS</p>
            </div>
            <div className="hover:scale-110 duration-500">
              <SiGit className="w-20 mx-auto" />
              <p>Git</p>
            </div>
            <div className="hover:scale-110 duration-500">
              <SiGithub className="w-20 mx-auto" />
              <p>GitHub</p>
            </div>
            <div className="hover:scale-110 duration-500">
              <SiExpress className="w-20 mx-auto" />
              <p>Express</p>
            </div>
            <div className="hover:scale-110 duration-500">
              <SiNodedotjs className="w-20 mx-auto" />
              <p>Node.js</p>
            </div>
            <div className="hover:scale-110 duration-500">
              <SiMongodb className="w-20 mx-auto" />
              <p>MongoDB</p>
            </div>
            <div className="hover:scale-110 duration-500">
              <SiFirebase className="w-20 mx-auto" />
              <p>Firebase</p>
            </div>
            <div className="hover:scale-110 duration-500">
              <SiBootstrap className="w-20 mx-auto" />
              <p>Bootstrap</p>
            </div>
            <div className="hover:scale-110 duration-500">
              <SiTailwindcss className="w-20 mx-auto" />
              <p>Tailwind CSS</p>
            </div>
            <div className="hover:scale-110 duration-500">
              <SiDocker className="w-20 mx-auto" />
              <p>Docker</p>
            </div>
            <div className="hover:scale-110 duration-500">
              <SiPostman className="w-20 mx-auto" />
              <p>Postman</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
      
  export default Skills;
      