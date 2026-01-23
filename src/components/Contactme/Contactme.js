import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { BsWhatsapp } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { TbSend } from "react-icons/tb";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './Contactme.css';

const Contactme = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_hbyvycq', 'template_4sllcq9', e.target, 'HmDKt3gAaokdpNhzA')
          .then((result) => {
              console.log(result.text);
              toast.success("Message sent!");
          }, (error) => {
              console.log(error.text);
              toast.error("Something went work, please try again.");
              
          });
          e.target.reset();
      };

   
  
    return (
        <section className='mb-4' id="contact">
      <ToastContainer/>
 
      <div id='ContactMe'><h1 style={{color:"#19AB78"}} className='text-3xl  m-auto text-center'>Contact Me</h1>
            <div style={{backgroundColor:"#19AB78"}} className='m-auto w-40 mb-8 mt-1 h-1 '></div>
            </div>
      <div className="container contact_container">
        <div  className="contact_options mt-10">
          <article data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className="contact-option">
           <MdOutlineEmail className="contact_option_icon text-white m-auto" /> 
            <h4>Email</h4>
            <h5 className="email">sharif.hossain.p87@gmail.com</h5>
             <a href="mailto:sharif.hossain.p87@gmail.com"> Send a message</a>
          </article>
          <article
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className="contact-option">
          <RiMessengerLine className="contact_option_icon m-auto text-white" />
            <h4>Messenger</h4>
            <h5>Shariful islam</h5>
            <a
              href="https://m.me/shariful.islam.fb"
              target="_blank"
              rel="noreferrer"
            >
                Send a message
            </a>
          </article>
          <article
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className="contact-option">
         <BsWhatsapp className="contact_option_icon m-auto text-white" />
            <h4>WhatsApp</h4>
            <h5>+96551494820</h5>
            <a
              target="_blank"
              href="https://api.whatsapp.com/send?phone+96551494820"
              rel="noreferrer"
            >
                 Send a message
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}

  <form id='contactmeEmail' className='continer-from ' ref={form} onSubmit={sendEmail}>
          <input className=''
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="1500"
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input className=''
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="1500"
          type="email" name="email" placeholder="Your Email" required />
                   <input className=''
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="1500"
          type="number" name="number" placeholder="Your number" required />
          <textarea className=''
         data-aos="fade-up"
         data-aos-anchor-placement="top-bottom"
         data-aos-duration="1500"
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button className="fromBtn"  style={{backgroundColor:"#19AB78",color:"white",border:"none"}} 
       data-aos="fade-up"
       data-aos-anchor-placement="top-bottom"
       data-aos-duration="1500"
          type="submit" className="btn btn-primary">
            Send Message <small className='inline-block'><TbSend/></small>
          </button>
        </form>

      </div>
    </section>
    );
};

export default Contactme;