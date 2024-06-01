import { DiAtom } from "react-icons/di"; // Icon
import { AiOutlineClose } from 'react-icons/ai'; // Close icon for the menu
import { HiMenuAlt1 } from 'react-icons/hi'; // Menu icon for opening the menu
import { useState } from 'react'; // For state management

const Nav = () => {
  const [toggle, setToggle] = useState(false);

  function openMenu() {
    setToggle(true);
  }

  function closeMenu() {
    setToggle(false);
  }

  return (
    <>
      <div className="flex items-center justify-between p-6 lg:flex-row bg-black">
        <div>
          <a href="#home" className="text-white font-bold text-3xl tracking-wider flex items-center">
            <DiAtom /> PORTFOLIO
          </a>
        </div>
        <div className="flex-grow"></div>
        <div className="space-x-4 flex">
          <div className='ssm:hidden lg:block space-x-2'>
            <a href="#services" className="text-white font-bold hover:bg-white rounded-full px-5 py-2 text-xl">Services</a>
            <a href="#projects" className="text-white font-bold hover:bg-white rounded-full px-5 py-2 text-xl">Projects</a>
            <a href="#contact" className="text-white font-bold hover:bg-white rounded-full px-5 py-2 text-xl">Contact</a>
          </div>
        </div>
        <div className='ssm:block lg:hidden'>
          {toggle ? (
            <AiOutlineClose onClick={closeMenu} size={30} className='text-white cursor-pointer font-bold' /> 
          ) : (
            <HiMenuAlt1 onClick={openMenu} size={30} className='text-white cursor-pointer font-bold' />
          )}
        </div>
      </div>

      <div className='ssm:block lg:hidden'>
        {toggle ? (
          <div className='flex justify-between ml-10'>
            <ul>
              <li><a href="#home" className='text-grey font-bold hover:bg-black rounded-full text-xl px-10 mb-2 cursor-pointer'>Home</a></li>
              <li><a href="#projects" className='text-grey font-bold hover:bg-black rounded-full text-xl px-10 mb-2 cursor-pointer'>Projects</a></li>
              <li><a href="#services" className='text-grey font-bold hover:bg-black rounded-full text-xl px-10 mb-2 cursor-pointer'>Services</a></li>
              <li><a href="#contact" className='text-grey font-bold hover:bg-black rounded-full text-xl px-10 mb-2 cursor-pointer'>Contact</a></li>
            </ul>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Nav;
