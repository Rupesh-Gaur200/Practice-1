import { HiArrowNarrowRight } from "react-icons/hi";
function Home(){
  return(
    <div className=" w-full h-screen bg-[#0a192f]">

      <div className=" max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">

         <p className="text-pink-600">Hi ! My Name is </p>
        <h1 className="text-4xl font-bold text-gray-300 ">Rupesh Gaur</h1>
        <h2 className="text-4xl text-gray-200">I am Frontend Developer</h2>
         <p className="text-gray-400 py-4 ">Web Developer | Proficient in JavaScript, HTML, CSS, and Masterful with React Library | Ardent MERN Stack Enthusiast 🌐|Passionate Explorer of the IoT Domain</p>


      </div>


      <div>
        <button>View Work <HiArrowNarrowRight></HiArrowNarrowRight></button>
      </div>






    </div>
  )
}

export default Home;