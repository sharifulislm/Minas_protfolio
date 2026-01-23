import { ImArrowDown } from "react-icons/im";
import myResume from '../../../assets/CV/SHARIF-frontend-developer-1[5].pdf';
import img from '../../../assets/img/menas.jpeg';
import './Banner.css';
import Typewrite from './Typewrite';

const Banner = () => {
  // const url = 'https://drive.google.com/file/d/1PhUwmgIvnamfQLackrm7zuFUUziN09q6/view?usp=sharing';
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch(myResume).then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'Download CV.pdf';
            alink.click();
        })
    })
}

    return (
        <div   className=" container  ">
        <div class=" lg:grid-cols-2 grid justify-between sm:grid-cols-1 text-white">

          <div 
             data-aos="fade-up"
             data-aos-anchor-placement="top-bottom"
             data-aos-duration="1500"
          class="md:order-first order-last md:mt-5 w-4/5">

           <Typewrite></Typewrite>

            <p className="text-left justify-center mt-1"> 
    I’m an AI-focused digital creator who builds smart, creative, and meaningful digital content.
I combine technology, design, and AI tools to turn ideas into real-world solutions.
  
          <br></br>
         
            <button onClick={onButtonClick} style={{backgroundColor:"#19AB78",color:"white",border:"none"}} className='btn mt-2 '>
            Download CV <small className='inline-block'><ImArrowDown/></small>  </button>
            </p>

          </div>
          <div 
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="1500"
          class="w-3/4 order-first md:order-last  bannerPhato ml-8 mt-6 ">
          <img className='bannerPhoto' src={img} alt="" />
          </div>
        </div>
      </div>
    );
};

export default Banner;