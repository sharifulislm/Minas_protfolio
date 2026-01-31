import img from '../../assets/logo/minas_log.jpeg';
import './EasyContact.css';

const EasyContact = () => {
    return (
        <div className='EsyContact'>
  {/* <a href="https://www.instagram.com/direct/t/mjpixelvibe/" target="_blank" rel="noreferrer" >   </a> */}
     {/* <small className='messngers'> <RiMessengerLine/></small> */}
<a href="https://linktr.ee/mjpixelvibe"><img className='w-12 rounded-full' src={img} alt="" /></a> 
  
            
        </div>
    );
};

export default EasyContact;