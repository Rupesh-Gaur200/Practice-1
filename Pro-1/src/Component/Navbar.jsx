import logo from '../assets/logo.png'

import{BsFillPersonLinesFill} from 'react-icons/bs'
import { FaGithub,FaLinkedinIn } from 'react-icons/fa'
import{HiOutlineMail} from 'react-icons/hi'

function Navbar(){
    return(
        <>
        <div className=" w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
           <div>
           <img src={logo} alt='logo image' style={{width:"250px"}}></img>

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
        <div className='flex fixed flex-col top-[35%] left-0'>
              <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                    <a  className="flex justify-between items-center w-full text-gray-300"href='/'>
                        LinkedIn <FaLinkedinIn size={30}></FaLinkedinIn>
                    </a>

                </li>

                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-sky-600'>
                    <a  className="flex justify-between items-center w-full text-gray-300"href='/'>
                        Github <FaGithub   size={30}></FaGithub>
                    </a>

                </li>

                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-violet-600'>
                    <a  className="flex justify-between items-center w-full text-gray-300"href='/'>
                        Resume <BsFillPersonLinesFill size={30}></BsFillPersonLinesFill>
                    </a>

                </li>

                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-green-600'>
                    <a  className="flex justify-between items-center w-full text-gray-300"href='/'>
                        Gmail <HiOutlineMail size={30}></HiOutlineMail>
                    </a>

                </li>
              </ul>



        </div>



        </div>
        </>
    )
}

export default Navbar