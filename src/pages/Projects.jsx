import ProjectCard from '../components/ProjectCard';
import portfolio from '../assets/portfolio.png';
import zenDiary from '../assets/zenDiary.png';
import movies from '../assets/movies.png';
import zeroWaste from '../assets/zeroWaste.png';

const Projects = () => {
  return (
    <div className='w-full md:h-screen pt-[100px]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col md:justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-black'>
            Projects
          </p>
          <p className='py-6'>// These are some of my recent projects</p>
        </div>
        {/* Projects container*/}
        <div className='grid md:grid-cols-2 gap-4'>
          <ProjectCard
            url={portfolio}
            name='Portfolio'
            demoRef='https://mariia-io.herokuapp.com'
            codeRef='https://github.com/muksis/portfolio'
          />
          <ProjectCard
            url={zenDiary}
            name='Zen Diary'
            demoRef='https://zen-diary.herokuapp.com'
            codeRef='https://github.com/muksis/zen-diary'
          />
          <ProjectCard
            url={movies}
            name='Movies'
            demoRef='https://movies-mariia-io.herokuapp.com'
            codeRef='https://github.com/muksis/movies'
          />
          <ProjectCard
            url={zeroWaste}
            name='Zero Waste'
            demoRef='https://zero-waste-mariia-io.herokuapp.com'
            codeRef='https://github.com/muksis/zero-waste'
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
