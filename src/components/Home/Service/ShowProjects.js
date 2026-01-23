import React from 'react';
import { AiOutlineArrowRight } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';


import './ShowProjects.css';

const ShowProjects = ({Projects}) => {

  const navigate = useNavigate()
  const { id,Live,Githup,Role,name,images,description} =Projects;

  const navigateToProjectDetails = id => {
    navigate(`Projects/${id}`);
}

    return (
        <div id='protfolio' data-aos="zoom-in" data-aos-duration="2000" class="card card-compact w-80 m-auto mt-2 bg-neutral bordershow mb-6">
        <figure><img className='' src={images} alt="Shoes" /></figure>
    
       
        <div class="card-body mx-0  ">
        {/* <small className='role text-white btn-link'><a href={Role}> Backend-source </a></small> */}
        {Role ?<small className='role text-white btn-link'><a href={Role}>( Backend-source )</a></small> : '' }

        <h2 className='text-xl'>{name}</h2>
       
        <p className='text-lift'>{description.slice(0, 50)} </p>
   
  
      
      <div className='col-start-2 gap-4 col-span-4  mt-2 flex justify-between'>

<a href={Live} target="_blank" rel="noreferrer" style={{backgroundColor:"#19AB78",color:"white",border:"none"}} className='btn btn-sm p-0'>Live demo  <small className='m-auto inline-block'><AiOutlineArrowRight/></small>  </a>
<a href={Githup} target="_blank" rel="noreferrer" style={{backgroundColor:"#19AB78",color: "white",border:"none"}} className='btn btn-sm p-0'> See Details  <small className='m-auto inline-block'><AiOutlineArrowRight/></small>  </a>


      </div>
       
        
       
     
        </div>
      </div>
    );
};

export default ShowProjects;