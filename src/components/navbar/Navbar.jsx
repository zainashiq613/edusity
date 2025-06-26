import { useEffect, useState } from 'react';
import logo from '../../assets/logo.png';
import Button from '../Button';
import { Link } from 'react-scroll';
import { FaBars } from 'react-icons/fa';

function Navbar() {
  const [sticky, setSticky] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  return (
    <>
      <nav
        className={`${
          sticky ? 'bg-[#212ea0]' : 'bg-[#212ea0]'
        } w-full lg:px-[80px] xl:px-[120px] px-[20px] transition duration-500 py-2 fixed top-0 left-0 flex items-center justify-between z-10 text-white`}
      >
        <img src={logo} alt="" className="w-[180px]" />
        <ul className="md:flex items-center gap-6 hidden">
          <li className="text-base md:text-[14px]">
            <Link to="hero" smooth offset={0} duration={500}>
              Home
            </Link>
          </li>
          <li className="text-base md:text-[14px]">
            <Link to="programs" smooth offset={-260} duration={500}>
              Program
            </Link>
          </li>
          <li className="text-base md:text-[14px]">
            <Link to="about" smooth offset={-150} duration={500}>
              About Us
            </Link>
          </li>
          <li className="text-base md:text-[14px]">
            <Link to="campus" smooth offset={-260} duration={500}>
              Campus
            </Link>
          </li>
          <li className="text-base md:text-[14px]">
            <Link to="testimonials" smooth offset={-200} duration={500}>
              Testimonials
            </Link>
          </li>
          <li className="text-base md:text-[14px]">
            <Link to="contact" smooth offset={-260} duration={500}>
              <Button text={'Contact Us'} cn={'!rounded-[25px]'} />
            </Link>
          </li>
        </ul>
        <FaBars
          onClick={() => {
            setShowMobileNav(!showMobileNav);
          }}
          className="md:hidden"
          size={28}
        />
      </nav>
      {showMobileNav && (
        <ul className="flex md:hidden bg-[#212ea0] text-white left-0 top-[53px] z-10 relative h-[100vh] w-[100%] flex-col items-center gap-6">
          <li className="text-base mt-[10px] border-b w-full text-center">
            <Link
              onClick={() => {
                setShowMobileNav(false);
              }}
              to="hero"
              smooth
              offset={-0}
              duration={500}
            >
              Home
            </Link>
          </li>
          <li className="text-base border-b w-full text-center">
            <Link
              onClick={() => {
                setShowMobileNav(false);
              }}
              to="programs"
              smooth
              offset={-260}
              duration={500}
            >
              Program
            </Link>
          </li>
          <li className="text-base border-b w-full text-center">
            <Link
              onClick={() => {
                setShowMobileNav(false);
              }}
              to="about"
              smooth
              offset={-150}
              duration={500}
            >
              About Us
            </Link>
          </li>
          <li className="text-base border-b w-full text-center">
            <Link
              onClick={() => {
                setShowMobileNav(false);
              }}
              to="campus"
              smooth
              offset={-260}
              duration={500}
            >
              Campus
            </Link>
          </li>
          <li className="text-base border-b w-full text-center">
            <Link
              onClick={() => {
                setShowMobileNav(false);
              }}
              to="testimonials"
              smooth
              offset={-260}
              duration={500}
            >
              Testimonials
            </Link>
          </li>
          <li className="text-base">
            <Link
              onClick={() => {
                setShowMobileNav(false);
              }}
              to="contact"
              smooth
              offset={-260}
              duration={500}
            >
              <Button text={'Contact Us'} cn={'!rounded-[25px]'} />
            </Link>
          </li>
        </ul>
      )}
    </>
  );
}

export default Navbar;
