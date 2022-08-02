import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const handleClick = () => setShowNav(!showNav);

  const location = useLocation();

  const pathMatchRoute = (route) => {
    if (route === location.pathname) {
      return true;
    }
  };

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#fff]'>
      <div>
        <img src={logo} alt='Logo' style={{ width: '50px' }} />
      </div>

      {/* Menu */}
      <ul className='hidden md:flex'>
        <li className='hover:border-transparent hover:bg-black hover:text-white'>
          <Link to='/' className={pathMatchRoute('/') ? 'underline' : ''}>
            Home
          </Link>
        </li>
        <li className='hover:border-transparent hover:bg-black hover:text-white'>
          <Link
            to='/about'
            className={pathMatchRoute('/about') ? 'underline' : ''}
          >
            About
          </Link>
        </li>
        <li className='hover:border-transparent hover:bg-black hover:text-white'>
          <Link
            to='/skills'
            className={pathMatchRoute('/skills') ? 'underline' : ''}
          >
            Skills
          </Link>
        </li>
        <li className='hover:border-transparent hover:bg-black hover:text-white'>
          <Link
            to='/projects'
            className={pathMatchRoute('/projects') ? 'underline' : ''}
          >
            Projects
          </Link>
        </li>
        <li className='hover:border-transparent hover:bg-black hover:text-white'>
          <Link
            to='/contact'
            className={pathMatchRoute('/contact') ? 'underline' : ''}
          >
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!showNav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      <ul
        className={
          !showNav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#fff] flex flex-col justify-center items-center'
        }
      >
        <li className='py-6 text-4xl hover:scale-125 duration-500'>
          <Link to='/' onClick={handleClick}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl hover:scale-125 duration-500'>
          <Link to='/about' onClick={handleClick}>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl hover:scale-125 duration-500'>
          <Link to='/skills' onClick={handleClick}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl hover:scale-125 duration-500'>
          <Link to='/projects' onClick={handleClick}>
            Projects
          </Link>
        </li>
        <li className='py-6 text-4xl hover:scale-125 duration-500'>
          <Link to='/contact' onClick={handleClick}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] right-0'>
        <ul>
          <li className='w-[60px] h-[40px] flex items-center hover:scale-125 duration-500'>
            <a
              className='flex'
              href='https://www.linkedin.com/in/muksiscat/'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[60px] h-[40px] flex items-center hover:scale-125 duration-500'>
            <a
              className='flex'
              href='https://github.com/muksis'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[60px] h-[40px] flex items-center hover:scale-125 duration-500'>
            <Link to='/contact' className='flex'>
              <HiOutlineMail size={30} />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
