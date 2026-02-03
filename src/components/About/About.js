import { FaAward, FaUsers } from 'react-icons/fa';
import { VscFolderLibrary } from "react-icons/vsc";
import img from "../../assets/img/menasphot (3).png";
import './About.css';

const About = () => {
    return (
      <section id="about">
        <div id='ContactMe'><h1 style={{color:"#19AB78"}} className='text-3xl mt-5 mb-3 m-auto text-center'>About Me</h1>
            <div style={{backgroundColor:"#19AB78"}} className='m-auto w-40 mb-8 mt-1 h-1 '></div>
            </div>
        <div className="container about_container">
          <div 
         data-aos="fade-up"
         data-aos-anchor-placement="top-bottom"
         data-aos-duration="1500"
          className="about_me ">
            <div  className="about_me-image">
              <img src={img} alt="About" />
            </div>
          </div>
          <div className="about_content  " >
            <div 
             data-aos="fade-up"
             data-aos-anchor-placement="top-bottom"
             data-aos-duration="1500"
            className="about_cards mt-20">
              <article 
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              className="about_card">
                <FaAward className="about_icon" />
                <h5>Experience</h5>
                <small>15+ Years Working</small>
              </article>
              <article
               data-aos="flip-left"
               data-aos-easing="ease-out-cubic"
               data-aos-duration="2000"
              className="about_card">
                <FaUsers className="about_icon" />
                <h5>Clients</h5>
                <small>12 Worldwide</small>
              </article>
              <article
               data-aos="flip-left"
               data-aos-easing="ease-out-cubic"
               data-aos-duration="2000"
              className="about_card">
                <VscFolderLibrary className="about_icon" />
                <h5>Projects</h5>
                <small>50+ Completed</small>
              </article>
            </div>
            <p className='text-left' 
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="1500"
            >
Im MJ  
A versatile technology professional with experience in IT support, software development, AI-based solutions, digital content creation, prompt engineering, and digital marketing. Skilled in delivering efficient, high-quality solutions, managing time effectively, and adapting to different project requirements. Committed to continuous learning, problem-solving, and providing reliable services that add real value to businesses and clients. <br />
 let me know via Phone call, whatsapp or email.
               </p>
            
            <a href="#contactmeEmail" className="text-white">
            <button style={{backgroundColor:"#19AB78",color:"white",border:"none"}}
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="1200"
            className="btn btn-primary text-white">
         Let's Talk
         {/* <small className='ml-1 inline-block'><GrContact/></small> */}
            </button>
            </a>

           
          </div>
        </div>
      </section>
    );
};

export default About;