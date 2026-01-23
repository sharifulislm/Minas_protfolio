import React, { useEffect, useState } from 'react';

import ShowProjects from './ShowProjects';
import './ShowProjects.css';

const Service = () => {
    const [ Project , setProject] = useState([]);
    console.log(Project);
    useEffect(() => {
        fetch('data.json')
        .then(res=> res.json())
        .then(data => setProject(data))
    
       
       } ,[])
    return (
        <div className='container'>
         
         <div id='Projects'><h1 style={{color:"#19AB78"}} className='text-3xl mt-5 m-auto text-center'>My Project</h1>
            <div style={{backgroundColor:"#19AB78"}} className='m-auto w-40 mb-8 mt-1 h-1 '></div>
            </div>
         
        
        
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10  '>
                {
                    Project.slice(0,6 ).map(Projects=> <ShowProjects key={Projects._id} Projects={Projects}></ShowProjects>)
                }

            </div>
    
        
          {/* <Link to="/Service">See more <small className='m-auto inline-block'><AiOutlineArrowRight/></small>  </Link> */}
        </div>
    );
};

export default Service;