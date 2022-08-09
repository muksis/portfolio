import SkillCard from '../components/SkillCard';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiGit,
  SiGithub,
  SiRedux,
  SiNextdotjs,
  SiExpress,
  SiNodedotjs,
  SiMongodb,
  SiFirebase,
  SiBootstrap,
  SiTailwindcss,
  SiDocker,
  SiPostman,
  SiJest,
} from 'react-icons/si';

const Skills = () => {
  return (
    <div className='w-full h-screen pt-[100px]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col md:justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-black'>
            Skills
          </p>
          <p className='py-4'>// These are the technologies I've worked with</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
          <SkillCard icon={<SiHtml5 className='w-20 mx-auto' />} name='HTML' />
          <SkillCard icon={<SiCss3 className='w-20 mx-auto' />} name='CSS' />
          <SkillCard
            icon={<SiJavascript className='w-20 mx-auto' />}
            name='JS'
          />
          <SkillCard
            icon={<SiReact className='w-20 mx-auto' />}
            name='ReactJS'
          />
          <SkillCard
            icon={<SiGithub className='w-20 mx-auto' />}
            name='GitHub'
          />
          <SkillCard icon={<SiGit className='w-20 mx-auto' />} name='Git' />
          <SkillCard icon={<SiRedux className='w-20 mx-auto' />} name='Redux' />
          <SkillCard
            icon={<SiNextdotjs className='w-20 mx-auto' />}
            name='Next.js'
          />
          <SkillCard
            icon={<SiExpress className='w-20 mx-auto' />}
            name='Express'
          />
          <SkillCard
            icon={<SiNodedotjs className='w-20 mx-auto' />}
            name='Node.js'
          />
          <SkillCard
            icon={<SiMongodb className='w-20 mx-auto' />}
            name='MongoDB'
          />
          <SkillCard
            icon={<SiFirebase className='w-20 mx-auto' />}
            name='Firebase'
          />
          <SkillCard
            icon={<SiBootstrap className='w-20 mx-auto' />}
            name='Bootstrap'
          />
          <SkillCard
            icon={<SiTailwindcss className='w-20 mx-auto' />}
            name='Tailwind CSS'
          />
          <SkillCard
            icon={<SiDocker className='w-20 mx-auto' />}
            name='Docker'
          />
          <SkillCard
            icon={<SiPostman className='w-20 mx-auto' />}
            name='Postman'
          />
          <SkillCard icon={<SiJest className='w-20 mx-auto' />} name='Jest' />
        </div>
      </div>
    </div>
  );
};

export default Skills;
