


function Contact(){
    return (
        
        <div name="Contact" className="w-full h-screen bg-[#0a192f] text-gray-300 pt-10 " >
         <div className="flex justify-evenly cursor-pointer  ">
            <h1 className="text-4xl font-bold border-b-4 border-purple-600 duration-300  hover:scale-125">Connect With Me</h1>
         </div>

         <div className="flex justify-center pt-24 ">
              
              <div className="w-[800px] h-[500px]  flex justify-center pr-8 ">
                 <div className="  w-[625px] h-[450px] ml-8 mt-4">
                <form className=" flex flex-col gap-8">
                    
                    <input className="ml-3 mt-3  mr-3  h-8 pl-3"type="text" value="Name"></input>
                    <input className="ml-3 mt-3 mr-3  h-8 pl-3" type="text" value="Email"></input>
                    <textarea  className="ml-3 mt-3 mr-3 pl-3  h-[200px]"type="text" value="please drop your message here"></textarea>
                     
                      <button className="border-2 border-white w-[200px] ml-52 h-10  hover:bg-pink-500 hover:scale-110 duration-300">Let's Collabrate</button>
                   




                </form>
                </div>
              </div>
              </div>


         </div>
        
    )
}

export default Contact