import logo from '../assets/logo.png'

function Navbar(){
    return(
        <>
        <div className=" w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
        <div>
        <img src={logo} alt='logo image' style={{width:"220px"}}></img>

        </div>
        </div>
        </>
    )
}

export default Navbar