


function About(){
    return (
        <div className=" w-full h-screen bg-[#0a192f] text-gray-300">
            <div className=" flex flex-col justify-centerout items-center w-full h-full">
               <div className="max-w-[800px] w-full px-4 grid grod-col-2 gap-8">
               <div className=" cursor-pointer hover:translate-x-(-5) hover:scale-125 duration-300 sm:text-right pb-8 pl-4">
                   <p className="  text-4xl font-bold inline border-b-4 border-purple-600">About</p>


               </div>
              
                        <div className="grid grid-cols-2 gap-8">

                            <div className="pt-20">
                          <p className="text-4xl font-bold">
                            Hi, I'm Rupesh , Nice to meet you,please take a look around!
                          </p>
                          </div>
                
                          <div className="pt-20 pl-10">
                          <p className="text-2xl text-gray-400">Seeking a position in the field of 
Computer Science to utilize my skills 
to further work towards personal and 
professional development and to 
pursue a career in any reputable 
organization to get a chance to 
learn, grow and contribute towards 
the prosperity of the organization</p>
                          </div>
                        </div>
                 </div>

            </div>
        </div>
    )
}
export default About;