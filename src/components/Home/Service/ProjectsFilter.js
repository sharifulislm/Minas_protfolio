import React from 'react';

const ProjectsFilter = ({Alldata,serviceId}) => {

//   const [filterData,setFilterData]=useState

    console.log(serviceId)
    const filtered = Alldata.find(employee => {
        return employee.country === 'Canada';
      });
      console.log(filtered)

    return (
        <div>
            <h1>{serviceId}</h1>
        </div>
    );
};

export default ProjectsFilter;