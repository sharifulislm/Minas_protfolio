import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectNav.css';
const ProjectNav = () => {

    return (
    <div className=' mb-8' >

<div id='Projects'><h1 style={{color:"#3F86C1"}} className='text-5xl mt-5 m-auto text-center'>What I Do</h1>
            <div style={{backgroundColor:"#3F86C1",fontFamily:"system-ui"}} className='w-64 m-auto mb-8 mt-3 h-1 '></div>
            </div>
  <div className='flex m-auto gap-8 justify-center'>
  <Link to="/ProjectNav/Service">
  <div class="card w-100 bg-neutral text-neutral-content">
  <div class="card-body items-center text-center">
    <h2 class="card-title">Web Applications</h2>
    <p>Web Application Design and Development</p>
  
  </div>
</div>
</Link>
<Link to="/ProjectNav/MobailApp">
 <div class="card w-100 bg-neutral text-neutral-content">
  <div class="card-body items-center text-center">
    <h2 class="card-title">Mobile Applications</h2>
    <p>Mobile Application Design and Development</p>

  </div>
</div>
</Link>
  </div>


    </div>
    );
};

export default ProjectNav;