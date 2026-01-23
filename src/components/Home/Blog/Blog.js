import React from 'react';

const Blog = () => {
    return (
        <div   className=" container  ">
     <div id='ContactMe'><h1 style={{color:"#19AB78"}} className='text-3xl mt-8 m-auto text-center'>My Blog</h1>
            <div style={{backgroundColor:"#19AB78"}} className='m-auto w-40 mb-8 mt-1 h-1 '></div>
            </div>

        <div class=" lg:grid-cols-2 grid ju sm:grid-cols-1 text-white">

          <div 
             data-aos="fade-up"
             data-aos-anchor-placement="top-bottom"
             data-aos-duration="1500"
          class="w-3/4   bannerPhato ml-8 mt-6">
  
  
  <img className=' mt-4' src="https://azim-profile.netlify.app/static/media/Blog.b90738727416ba8e62dc.jpg" alt="" />
          

          </div>

          <div 
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="1500"
          class="w-3/4   bannerPhato ml-8 mt-6 ">
          <img className=' comeingGif' src="https://i.gifer.com/BuB5.gif" alt="" />
          </div>
        </div>
      </div>
    );
};

export default Blog;