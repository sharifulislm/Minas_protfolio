// import { Typewriter } from 'react-simple-typewriter'
import { TypeAnimation } from 'react-type-animation';
import './TypeingStyle.css';
const Typewrite = () => {
    return (
        <div className='lg:mt-20 sm:mt-3 '>
        <h1 style={{margin: 'auto 0'}}>
          
            <small className='Typeings flex' > 
      
         <span className='FirstLiter Typeings' style={{color: 'white', fontWeight: 'bold', marginLeft:'0'}}>I'M </span>
        <TypeAnimation style={{color: 'red', fontWeight: 'bold', marginLeft: '0'}}
        
        sequence={[
         
            "IT Engineer ",
            5000,
            "Digital Content Creator",
            5000,
              "AI Development",
            5000,
            "Marketing Agency",
            5000,
               "Promt Engineering",
            5000,
               "AI Developer ",
            5000,
            "Minas Jean",
            5000,
        
          () => {
            console.log('Done typing!'); // Place optional callbacks anywhere in the array
          }
        ]}
        wrapper="div"
        cursor={true}
        repeat={Infinity}
        style={{ fontSize: '2em' }}
      />
            </small>


</h1>

</div>
    );
};

export default Typewrite;