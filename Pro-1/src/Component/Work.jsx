
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
                
                <div className=" cursor-pointer hover:scale-125 duration-300 pb-8 pl-4 pr-8">
                <h1 className=" text-4xl font-bold inline border-b-4 border-purple-600 duration-300 ">Work</h1>
            </div>
            </div>
          
               <div className="w-full h-screen flex justify-center items-center ">

                  
                        {

                          data2.map((t)=>{
                            return(
                                <div className="w-56 h-56" key={t.id}>
                                   <div>
                                    <img src={t.img} ></img>
                                    </div>  
                                  <div>
                                        <h1>{t.tiltle}</h1>

                                  </div>


                                  <div>
                                    <button>See more..</button>
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