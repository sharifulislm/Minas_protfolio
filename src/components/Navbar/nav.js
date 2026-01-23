import { BsFacebook, BsGithub } from "react-icons/bs";
import img from "../../assets/logo/logo (1).jpeg";
import './Navbar.css';



const Navbar = () => {

  const menuItems = <> 
              {/* <li><Link to="/">HOME</Link></li>
              <li><Link to="/Service">PROJECTS</Link></li>
              <li><Link to="/AllReveiw">BLOG</Link></li>
           <li><Link to="/AllReveiw">Review </Link></li> */}
          
        </>



    return (
        <div className="navbar text-white font-bold ">
          
        <div className="navbar">
          <img className='w-16' src={img} alt="" />
          <div className="dropdown">
          
            <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 font-bold text-xl rounded-box w-52">
                  {menuItems}
            </ul>
    
          </div>
          {/* <a className="btn btn-ghost normal-case text-xl"></a> */}

        </div>
     

        <div className="navbar-center hidden lg:flex">
   
           <ul className="menu menu-horizontal p-0 font-bold text-xl">
           {menuItems}
  

          </ul>
          <span className='text-white text-3xl p-2 rounded'>  <BsFacebook ></BsFacebook></span>  
       <span className='text-white text-3xl w-12 p-2 rounded'>  <img src="https://i.pinimg.com/736x/b1/d4/5f/b1d45f86aa764cc035f057cb7d61a7b7.jpg" alt="" /></span>  
       <span className='text-white text-3xl p-2 rounded'>  <BsGithub ></BsGithub></span> 
       <a class="Connects text-white">Let's Connect</a>

        </div>
        <div class="dropdown">
        <label tabindex="0" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow text-withe font-bold text-xl rounded-box w-52">
                  {menuItems}
            </ul>
      </div>
      </div>
    );
};

export default Navbar;
