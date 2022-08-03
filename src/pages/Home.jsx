import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';

const Home = () => {
  const handleClick = () => {};

  return (
    <div className='w-full h-screen'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold'>Mariia Sergeeva.</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#6d6d6d]'>
          I'm a Full Stack Developer.
        </h2>
        <p className='text-[#6d6d6d] py-4 max-w-[700px]'>
          Currently, I speciazile in building full-stack web applications.
        </p>
        <div>
          <Link to='/projects'>
            <button
              onClick={handleClick}
              className='border-black group border-2 px-6 py-3 my-2 flex items-center'
            >
              <Typewriter
                options={{
                  strings: ['View Projects'],
                  autoStart: true,
                  loop: true,
                  pauseFor: 5000,
                }}
              />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
