import { FaInstagramSquare, FaTiktok } from "react-icons/fa";
// import {  } from "react-icons/tb";
import img from '../../assets/logo/minas_log.jpeg';
import './Navbar.css';


const Navbar = () => {

  const menuItems = <> 
              {/* <li><Link to="/">HOME</Link></li>
              <li><Link to="/Service">PROJECTS</Link></li>
              <li><Link to="/AllReveiw">BLOG</Link></li>
           <li><Link to="/AllReveiw">Review </Link></li> */}
          
        </>



    return (
<div id='Home' class="navbar mt-0 pt-0">
  <div class="navbar-start">
    <div class="dropdown">
      {/* <label tabindex="0" class="btn btn-ghost lg:hidden sm:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label> */}
    
    </div>
   <a href="https://linktr.ee/mjpixelvibe"><img className='w-10' src={img} alt="" /></a> 
    {/* <a href="https://www.linkedin.com/in/sharifulislm/?fbclid=IwAR26GK7V66g2pHPsxf65JHItfEFwQuHoNv7Ndj9xHwXsijO8rY4WzmgrLHs" target="_blank" rel="noreferrer" style={{color:"#19AB78"}} className="btn logostyles btn-ghost normal-case text-xl">MJ</a> */}
  </div>
  <div class="navbar-end  md: justify-end">
 {/* <a className='text-white text-3xl p-2 rounded md:order-first order-last' href="https://www.fiverr.com/mjpixelvibe?source=gig_page " target="_blank" rel="noreferrer"> <span className='text-white text-3xl p-2 rounded'>     <TbBrandFiverr></TbBrandFiverr></span>  </a> */}
    <a className='text-white text-3xl p-2 rounded' href="https://www.instagram.com/mjpixelvibe?igsh=dXpxZmM0NmxtMGV4" target="_blank" rel="noreferrer">  <span className='text-white text-3xl w-12 p-2 rounded'> <FaInstagramSquare></FaInstagramSquare > </span>  </a> 
      <a className='text-white text-3xl p-2 rounded' href="https://www.tiktok.com/@mjpixelvibe?_r=1&_t=ZS-93JOwfKeFI9" target="_blank" rel="noreferrer"> <span >  <FaTiktok > </FaTiktok></span> </a>

      <a href="#contactmeEmail" className="text-white" style={{color:"#19AB78"}} className="Connects order-first md:order-last invisible md:visible  text-white">Let's Connect</a>
  </div>
</div>
    );
};

export default Navbar;
