
import csslogo from '../assets/csslogo.png'
import Htmllogo from '../assets/Htmllogo.png'
import JavaScriptlogo from '../assets/JavaScriptlogo.png'
import MongoDblogo from '../assets/MongoDblogo.png'
import ReactLogo from '../assets/reactlogo.png'
const data =[
    {
        id:"1",
        img:csslogo,
        Title:"Css"
       } ,
    {
        id:"3",
        img:Htmllogo,
        Title:"Html5"

    },

    {
        id:"4",
        img:JavaScriptlogo,
        Title:"JavaScript"
    },
    {
        id:"5",
        img:MongoDblogo,
        Title:"MongoDb"
    },{
        id:"6",
        img:ReactLogo,
        Title:"React js"
    }
];

function TechStack(){
    return (
         
             <div name="Tech Stack"className=" w-full h-screen bg-[#0a192f] text-gray-300 pt-20">
                    <div className=" flex justify-center mb-28">
                     <h1 className="text-4xl font-bold inline border-b-4 border-purple-600 cursor-pointer hover:translate-x-(-5) hover:scale-125 duration-300">
                    TechStack
                     </h1>

                     </div>
                 


                 <div className="flex justify-center  max-w-[100%] border-blue-700 border-solid">
               
               
                           <div className="flex gap-8 justify-center ">
                  
                       {

                         data.map((d)=>{
                          return(
                            <div className="  bg-[#0a192f] " style={{width:"220px"}} key={d.id} >
                              <img  className=" w-32 ml-12 "  src={d.img}></img>
                              <div className="flex justify-center mt-6 ">
                              <h1 className="text-2xl font-semibold font-gray-300">{d.Title}</h1>
                             </div>
                            </div>
                        )
                         })



                       }
                            </div>
                    </div>






             </div>




         
    )
}

export default TechStack