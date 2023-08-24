
const data2 =[

        {
            id:1,
            img: "https://images.pexels.com/photos/925786/pexels-photo-925786.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-925786.jpg&fm=jpg",
            tiltle:"Work1"
        },
        
        {
            id:2,
            img:"https://images.pexels.com/photos/925786/pexels-photo-925786.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-925786.jpg&fm=jpg",
            tiltle:"Work1"
        },
        
        {
            id:3,
            img:"https://images.pexels.com/photos/925786/pexels-photo-925786.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-925786.jpg&fm=jpg",
            tiltle:"Work1"
        },
        {
            id:4,
            img:"https://images.pexels.com/photos/925786/pexels-photo-925786.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-925786.jpg&fm=jpg",
            tiltle:"Work1"
        },
        {
            id:5,
            img:"https://images.pexels.com/photos/925786/pexels-photo-925786.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-925786.jpg&fm=jpg",
            tiltle:"Work1"
        }

]



function Work(){
    return(
        <div name="Work" className="w-full h-screen bg-[rgb(10,25,47)] text-gray-300 pt-12">
    
            <div className="flex justify-start pl-56  duration-300  " >
                
                <div className=" cursor-pointer hover:scale-125 duration-300  pl-4 pr-8 pb-8 mb-32">
                <h1 className=" text-4xl font-bold inline border-b-4 border-purple-600 duration-300 ">Work</h1>
            </div>
            </div>
          
               <div className="w-full h-screen flex justify-center items-start
                gap-8 ">

                  
                        {

                          data2.map((t)=>{
                            return(
                                <div className=" border rounded-lg border-none 2 hover:scale-110 duration-300 w-56 h-72 flex flex-col gap-3 items-center bg-[rgb(75,90,111)] "  key={t.id}>
                                   <div className="border border-none rounded-lg">
                                    <img  className="shadow-inner rounded-lg"src={t.img} ></img>
                                    </div>  
                                  <div >
                                        <h1>{t.tiltle}</h1>

                                  </div>


                                  <div className=" group hover:bg-purple-600     mt-8">
                                    <a className="group-hover:cursor-pointer border-2 hover:bg-purple-600 pl-1 pr-1 pt- pb-1" >See more</a>
                                  </div>

                                </div>
                            )
                          })


                        }
                    

               </div>


            </div>
    )
}
export default Work