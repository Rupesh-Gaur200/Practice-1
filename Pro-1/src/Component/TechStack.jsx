

const data =[
    {
        id:"1",
        img:"https://i.stack.imgur.com/kyKz5.png",
       } ,
    {
        id:"2",
        img:"https://i.stack.imgur.com/kyKz5.png",
    },

    {
        id:"2",
        img:"https://i.stack.imgur.com/kyKz5.png",
    },
    {
        id:"2",
        img:"https://i.stack.imgur.com/kyKz5.png",
    },{
        id:"2",
        img:"https://i.stack.imgur.com/kyKz5.png",
    }
];

function TechStack(){
    return (
          <>
             <div className=" w-full h-screen bg-[#0a192f] text-gray-300 pt-20">
                <div className=" flex justify-space-around">
                
                <h1 className="text-4xl font-bold inline border-b-4 border-purple-600 cursor-pointer hover:translate-x-(-5) hover:scale-125 duration-300">
                    TechStack
                </h1>

                </div>

                <div className="flex justify-between">
                  
                  {

                      data.map((d)=>{
                        return(
                            <div className=" bg-[#0a192f] " style={{width:"220px"}} key={d.id}>
                              <img src={d.img}></img>

                            </div>
                        )
                      })



                  }
                  </div>
                 






             </div>




          </>
    )
}

export default TechStack