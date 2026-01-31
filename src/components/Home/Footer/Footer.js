import { FaInstagramSquare, FaTiktok } from "react-icons/fa";
// import img from '../../assets/logo/minas_log.jpeg';

import { BsWhatsapp } from "react-icons/bs";
import { Link } from 'react-router-dom';
// import img from '../../../assets/logo/FullLogo_NoBuffer.jpg';

const Footer = () => {
    return (
       <>
       <footer id='footers' class="footer p-10 bg-black text-white">
  

  <div className='m-auto'>
  <a href="https://linktr.ee/mjpixelvibe" target="_blank" rel="noreferrer" style={{color:"white"}} className="btn logostyles btn-ghost normal-case text-xl">POD</a>
  <div class=" flex">
   {/* <a href="https://www.fiverr.com/mjpixelvibe?source=gig_page"><img className='w-10' src={img} alt="" /></a>  */}
    {/* <a href="https://www.linkedin.com/in/sharifulislm/?fbclid=IwAR26GK7V66g2pHPsxf65JHItfEFwQuHoNv7Ndj9xHwXsijO8rY4WzmgrLHs" target="_blank" rel="noreferrer" style={{color:"#19AB78"}} className="btn logostyles btn-ghost normal-case text-xl">MJ</a> */}
  </div>
  <div class="navbar-end  md: justify-end">
 {/* <a className='text-white text-3xl p-2 rounded md:order-first order-last' href="https://linktr.ee/mjpixelvibe" target="_blank" rel="noreferrer"> <span className='text-white text-3xl p-2 rounded'>     <img className='w-8' src={img} alt="" /></span>  </a> */}
    <a className='text-white text-3xl p-2 rounded' href="https://www.instagram.com/mjpixelvibe?igsh=dXpxZmM0NmxtMGV4" target="_blank" rel="noreferrer">  <span className='text-white text-3xl w-12 p-2 rounded'> <FaInstagramSquare></FaInstagramSquare > </span>  </a> 
      <a className='text-white text-3xl p-2 rounded' href="https://www.tiktok.com/@mjpixelvibe?_r=1&_t=ZS-93JOwfKeFI9" target="_blank" rel="noreferrer"> <span >  <FaTiktok > </FaTiktok></span> </a>
  </div>
  </div> 
  <div className='text-left m-auto text-white'>
  <span class=" text-center  text-white">Contact info </span> 
<ul className='text-white'>

<li ><Link className='text-white' to="/">Mjpixelvibe@gmail.com</Link></li>
<li><Link className='text-white' to="/Service">+96555776433</Link></li>
 <li><Link className='text-white' to="/AllReveiw">Kuwait city</Link></li>
</ul>

  </div> 
  <div className='m-auto '>
    <span class=" text-white ">Social</span> 
    <div class=" flex">
 <a className='text-white text-3xl p-2 rounded' href="https://api.whatsapp.com/send?phone+96551494820" target="_blank" rel="noreferrer"> <span className='text-white text-3xl p-2 rounded'>  <BsWhatsapp></BsWhatsapp></span>  </a>
    {/* <a className='text-white text-3xl p-2 rounded' href="mailto:sharif.hossain.p87@gmail.com " target="_blank" rel="noreferrer">  <span className='text-white text-3xl w-12 p-2 rounded'> <AiOutlineMail></AiOutlineMail> </span>  </a> 
    <a className='text-white text-3xl p-2 rounded' href="https://twitter.com/sharif26630" target="_blank" rel="noreferrer">  <span className='text-white text-3xl w-12 p-2 rounded'> <AiOutlineTwitter></AiOutlineTwitter> </span>  </a>  */}
  </div>
  </div>
  <div className='text-left invisible  md:visible '>

<ul className=''>
<li className='mb-2'><Link className='text-white' to="/">HOME</Link></li>
<li className='mb-2'><Link className='text-white' to="/Service">PROJECTS</Link></li>
 <li className='mb-2'><Link className='text-white' to="/AllReveiw">BLOG</Link></li>
 <li className='mb-2'><Link className='text-white' to="/ABOUT">ABOUT</Link></li>

</ul>

  </div> 
</footer>
       </>
    );
};

export default Footer;