import logo from '../assets/logo.png'
import {FaBars ,FaTimes} from 'react-icons/fa'
function Navbar(){
    return(
        <>
        <div className=" w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
           <div>
           <img src={logo} alt='logo image' style={{width:"220px"}}></img>

            </div>
         {/* menu */}
           <div>
            <ul className='flex'>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Work</li>
            </ul>
           </div>

         {/* hamburger */}

          {/* <div>
             <FaBars></FaBars>
            </div> */}

        {/* Social icons */}
        <div className='hidden'>

        </div>



        </div>
        </>
    )
}

export default Navbar