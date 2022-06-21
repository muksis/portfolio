import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div className="w-full h-screen">

      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p>Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold">Mariia Sergeeva.</h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#6d6d6d]">I'm a Full Stack Developer.</h2>
        <p className="text-[#6d6d6d] py-4 max-w-[700px]">Currently, I speciazile in building full-stack web application.</p>
        <div>
          <button className="border-black group border-2 px-6 py-3 my-2 flex items-center">
            View Projects
            <span className="group-hover:rotate-90 duration-500">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
  
export default Home;
  