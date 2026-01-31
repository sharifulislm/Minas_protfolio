
const SkillsItem = ({skills}) => {
    return (
    
            <div  className='sm:m-auto order-first md:order-last ' data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="3000">
             
               <div  className='flex items-center  mb-5 '><img className='w-9 mr-2' src={skills.img1} alt="" /> <span className='uppercase ' class='line-clamp-1 md:line-clamp-none line-clamp-1 md:line-clamp-none'>{skills.name1}</span></div> 
               <div className='flex  items-center  mb-5 '><img className='w-9 mr-2' src={skills.img2} alt="" /> <span className='uppercase 'class='line-clamp-1 md:line-clamp-none line-clamp-1 md:line-clamp-none'>{skills.name2}</span></div> 
               <div className='flex items-center  mb-5 '><img className='w-9 mr-2' src={skills.img3} alt="" /> <span className='uppercase 'class='line-clamp-1 md:line-clamp-none line-clamp-1 md:line-clamp-none'>{skills.name3}</span></div> 
               <div className='flex items-center  mb-5 '><img className='w-9 mr-2' src={skills.img4} alt="" /> <span className='uppercase 'class='line-clamp-1 md:line-clamp-none line-clamp-1 md:line-clamp-none'>{skills.name4}</span></div> 
               {/* <div className='flex items-center  mb-5 '><img className='w-9 mr-2' src={skills.img5} alt="" /> <span className='uppercase'>{skills.name5}</span></div>  */}
               

   
             
            </div>
            
     
    );
};

export default SkillsItem;