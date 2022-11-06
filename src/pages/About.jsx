const About = () => {
  return (
    <div className='w-full h-screen pt-[100px]'>
      <div className='flex flex-col md:justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-black'>
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-4xl font-bold'>
            <p>Hi. I'm Mariia, nice to meet you!</p>
          </div>
          <div>
            <p>
              I am a full-stack (MERN) web developer, and I love coding. I have a 10-year background in business development, both in a large international company and a small start-up. During those years, I worked closely
              with IT businesses and was always interested in finding out what
              was under the hood, so I finally got under the hood. Now I am an
              MIT program graduate and I am really excited about making my
              career in coding.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
