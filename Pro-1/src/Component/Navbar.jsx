import logo4 from '../assets/logo4.png'

import{BsFillPersonLinesFill} from 'react-icons/bs'
import { FaGithub,FaLinkedinIn } from 'react-icons/fa'
import{HiOutlineMail} from 'react-icons/hi'

import { Link } from 'react-scroll'

function Navbar(){
    return(
        <>
        <div className=" w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
           <div>
           <img   src={logo4} alt='logo image' style={{width:"250px"}}></img>

            </div>
         {/* menu */}
           <div>
            <ul className='flex gap-8'>
                <Link to="/" spy={true} smooth={true} offset={50} duration={500} className='hover:scale-125 duration-300 cursor-pointer'>Home</Link>
                <Link to="About"  spy={true} smooth={true} offset={50} duration={500} className='hover:scale-125 duration-300 cursor-pointer'>About</Link>
                <Link  to="Tech Stack" spy={true} smooth={true} offset={50} duration={500} className='hover:scale-125 duration-300 cursor-pointer'>Tech Stack</Link>
                {/* <Link to="Contact" spy={true} smooth={true} offset={50} duration={500} className='hover:scale-125 duration-300 cursor-pointer'>Contact</Link>
                <Link to="Work" spy={true} smooth={true} offset={50} duration={500} className='hover:scale-125 duration-300 cursor-pointer'>Work</Link> */}

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
                    <a  className="flex justify-between items-center w-full text-gray-300" href='https://www.linkedin.com/in/rupesh-gaur-5304b01b7/' target='_blank'>
                        LinkedIn <FaLinkedinIn size={30}></FaLinkedinIn>
                    </a>

                </li>

                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-sky-600'>
                    <a  className="flex justify-between items-center w-full text-gray-300"href='https://github.com/Rupesh-Gaur200' target='_blank'>
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