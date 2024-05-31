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
      <div className="flex items-center justify-between p-6 lg:flex-row bg-blue-700">
        <div>
          <a href="#" className="text-white font-bold text-3xl tracking-wider flex items-center">
            <DiAtom /> PORTOFOLIO
          </a>
        </div>
        <div className="flex-grow"></div>
        <div className="space-x-4 flex">
          <div className='ssm:hidden lg:block space-x-2'>
            <a href="#" className="text-white font-bold hover:bg-blue-900 rounded-full px-5 py-2 text-xl">Skills</a>
            <a href="#" className="text-white font-bold hover:bg-blue-900 rounded-full px-5 py-2 text-xl">Projects</a>
            <a href="#" className="text-white font-bold hover:bg-blue-900 rounded-full px-5 py-2 text-xl">Testimonials</a>
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
              <li className='text-white text-xl px-10 mb-2 cursor-pointer'>Skills</li>
              <li className='text-white text-xl px-10 mb-2 cursor-pointer'>Projects</li>
              <li className='text-white text-xl px-10 mb-2 cursor-pointer'>Testimonials</li>
            </ul>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </>
  );
};

export default Nav;
