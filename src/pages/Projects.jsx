import ProjectCard from '../components/ProjectCard';
import exterior_1 from '../assets/exterior_1.jpeg';
import exterior_2 from '../assets/exterior_2.jpeg';
import exterior_3 from '../assets/exterior_3.jpeg';

const Projects = () => {
  return (
    <div className='w-full md:h-screen'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-black'>
            Projects
          </p>
          <p className='py-6'>// These are some of my recent projects</p>
        </div>
        {/* Projects container*/}
        <div className='grid md:grid-cols-2 gap-4'>
          <ProjectCard
            url={exterior_1}
            name='Project 1'
            demoRef='/'
            codeRef='/'
          />
          <ProjectCard
            url={exterior_2}
            name='Project 2'
            demoRef='/'
            codeRef='/'
          />
          <ProjectCard
            url={exterior_3}
            name='Project 3'
            demoRef='/'
            codeRef='/'
          />
          <ProjectCard
            url={exterior_3}
            name='Project 4'
            demoRef='/'
            codeRef='/'
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
