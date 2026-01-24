import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ProjectsFilter from './ProjectsFilter';

const Projects = () => {
    const {serviceId}=useParams();
    console.log(serviceId);
    // const [service]=useProduct(serviceId)
    const[service,setService] =useState([])
    // const filtered2 = service.filter(employee => {
    //     return employee.id === serviceId;
    //   });
    //   setService(filtered2)
    //   console.log(filtered2);
 
    console.log(service)

//   useEffect(()=> {
//     fetch('https://raw.githubusercontent.com/sharifulislm/Protfolio-/main/data/data.json')
//     .then(res => res.json())
//     .then(data => setService(data));

//   },[])

const Alldata = [
    {
      "id": 1,
      "images": "https://github.com/sharifulislm/Protfolio-/blob/main/projects-photo/Screenshot%20(2).png?raw=true",
      "Role": "FULLStack",
      "name": "HR management System ",
      "description": "Intelclick on view more for more details",
      "Live": "https://tool-manufacturer.netlify.app/",
      "Githup": "https://github.com/sharifulislm/manufacturer-prats"
    },
    // {
    //   "id": 2,
    //   "images": "https://github.com/sharifulislm/Protfolio-/blob/main/projects-photo/Screenshot%20(149).png?raw=true",
    //   "Role": "FULLStack",
    //   "name": "s",
    //   "description": "Warehouse management website which can manage various products.",
    //   "Live": "https://warehouse-management-a16cc.web.app/",
    //   "Githup": "https://github.com/sharifulislm/warehouse-management"
    // },
    // {
    //   "id": 3,
    //   "images": "https://github.com/sharifulislm/Protfolio-/blob/main/projects-photo/Screenshot%20(152).png?raw=true",
    //   "name": "TeachingAcademy",
    //   "Role": "FULLStack",
    //   "description": "Users can signin, signup, signout and see all Course.",
    //   "Live": "teacheracademy-20bb9.web.app/",
    //   "Githup": "https://github.com/sharifulislm/TeachingAcademy"
    // },
    // {
    //   "id": 4,
    //   "quantity": "100",
    //   // "images": "https://github.com/sharifulislm/Protfolio-/blob/main/projects-photo/Image%201.png?raw=true",
    //   "price": 350,
    //   "name": "Money calculation",
    //   "Role": "Small ",
    //   "description": "html,css, javascript",
    //   "Live": "https://eager-jackson-8365cf.netlify.app/",
    //   "Githup": "https://github.com/Porgramming-Hero-web-course/money-master-sharifulislm?fbclid=IwAR3cnkI1q3Gn2reUwM8t0uVyCn7iy_gVgtrk9mixF-flzoCjZCf4eKVhMJg"
    // },
    // {
    //   "id": 5,
    //   "images": "https://github.com/sharifulislm/Protfolio-/blob/main/projects-photo/Screenshot%20(150).png?raw=true",
    //   "price": 25,
    //   // "Role": "Small",
    //   "name": "Search your anything",
    //   "description": "ENJOLA Lorem ipsum, dolor sit amet consectetur adipisicing elit. A rerum exercitationem ipsum voluptatibus magni, optio architecto. Sint voluptatum consequatur eveniet delectus, quasi quaerat similique doloribus numquam fugit facilis eius architecto.",
    //   "Live": "eager-hugle-92b7d1.netlify.app/",
    //   "Githup": "https://github.com/sharifulislm/find-product-with-search"
    // },
    {
      "id": 2,
      "images": "https://github.com/sharifulislm/Protfolio-/blob/main/projects-photo/Screenshot%20(151).png?raw=true",
      "price": 350,
      // "Role": "Small",
      "name": "Guest House Center",
  
      "description": "Useing only html, css ,Bootstrap",
      "Live": "https://lucid-rosalind-9191e1.netlify.app/",
      "Githup": "https://github.com/Porgramming-Hero-web-course/convention-center-sharifulislm"
    },
    {
      "id": 3,
      "quantity": "100",
      "availableQuantity": "5000",
      "images": "https://www.sincoole.com/Uploads/20211102/9480829056181010c53e44.jpg",
      "price": 350,
      "name": "Mara French",
  
      "description": " Lorem ipsum, dolor sit amet consectetur adipisicing elit. A rerum exercitationem ipsum voluptatibus magni, optio architecto. Sint voluptatum consequatur eveniet delectus, quasi quaerat similique doloribus numquam fugit facilis eius architecto."
    },
    {
      "id": 4,
      "quantity": "100",
      "availableQuantity": "1000",
      "images": "https://amigos-themes.com/profix/assets/images/service/service.jpg",
      "price": 350,
      "name": "Roy Carlson",
      "description": "XIIX Lorem ipsum, dolor sit amet consectetur adipisicing elit. A rerum exercitationem ipsum voluptatibus magni, optio architecto. Sint voluptatum consequatur eveniet delectus, quasi quaerat similique doloribus numquam fugit facilis eius architecto."
    }
  ]
  


   


    return (
        <div className='Details-box m-auto'>

            <h1 className='m-auto'> Our best Courses  {serviceId.length}</h1>
            <h3 className='mt-3'>Do you want to Continue{Alldata.name}</h3>


            {
           service.slice(0,6 ).map(Projects=> <ProjectsFilter key={Projects._id} serviceId={serviceId} Alldata={Alldata} Projects={Projects}></ProjectsFilter>)
            }
            <Link to="/CheckOut"> <button className='btn btn-primary'> Continue </button> </Link>
            
        </div>
    );
};

export default Projects;