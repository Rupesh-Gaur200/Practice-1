

const data =[
    {
        id:"1",
        img:"https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png",
        Title:"React js"
       } ,
    {
        id:"3",
        img:"https://i.stack.imgur.com/kyKz5.png",
        Title:"React js"

    },

    {
        id:"4",
        img:"https://i.stack.imgur.com/kyKz5.png",
        Title:"React js"
    },
    {
        id:"5",
        img:"https://i.stack.imgur.com/kyKz5.png",
        Title:"React js"
    },{
        id:"6",
        img:"https://i.stack.imgur.com/kyKz5.png",
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
                              <img src={d.img}></img>
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