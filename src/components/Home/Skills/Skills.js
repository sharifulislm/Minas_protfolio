import skillsPhotsmain from '../../../assets/skills-icon/skillsPhotsmain.png';
import './Skills.css';
import SkillsItem from './SkillsItem';


const Skills = () => {
const skillss = [
    {

      "id": 1,
      "name1": "WebApplication",
      "img1": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeyIEirsm9ozDvwhP--ldqggqf6Yz-gVBLxg&s",
      "name2": "Mobile App",
      "img2": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjtTrVvTGj9XFzxZQdTaHmNocXygw72C5HJQ&s",
      "name3": "Oracle ",
      "img3": "https://github.com/sharifulislm/Minas_protfolio/blob/main/src/assets/logo/download%20(5).png?raw=true",
      "name4": "Security Management ",
      "img4": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4J9SRxswvqp80A8qnEZ_6P6a8oyASxOx8rQ&s",
      "name5": "UI Design",
      "img5": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1dU_3RJlKWqAA1ibIfEsXDdmRMGIHZJLBWQ&s",
    
    },
{
  "id": 2,
  "name1": "Promt Engeniring ",
  "img1": "https://images.seeklogo.com/logo-png/46/1/chatgpt-logo-png_seeklogo-465219.png",

  "name2": "agentic AI Automation",
  "img2": "https://raw.githubusercontent.com/sharifulislm/Minas_protfolio/refs/heads/main/src/assets/logo/download%20(3).jfif",

  "name3": "Img/Vdo Generator ",
  "img3": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAtQct7BNfjT_A1NIRLg6BVMrT9GBkzgQBPQ&s",

  "name4": "JavaScript",
  "img4": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSod7CJvOSEFdtFtmH1pbaPYSW8M4gXMwsmWA&s",

  "name5": "Open AI ",
  "img5": "https://images.seeklogo.com/logo-png/46/1/chatgpt-logo-png_seeklogo-465219.png",
}
,
{
  "id": 3,
  "name1": "Deployment & Hosting",
  "img1": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMbsiUl1OIAieg4-SY9qh4jFKwj5rV1QAlMg&s",

  "name2": "Usr Authentication ",
  "img2": "https://github.com/sharifulislm/Minas_protfolio/blob/main/src/assets/logo/download%20(4).png?raw=true",

  "name3": "API Integration/Security",
  "img3": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0CiQhQoS9s991HHae9eb74TxiRwiG0m-m0g&s",

    "name4": "UI Design",
  "img4": "https://raw.githubusercontent.com/sharifulislm/Minas_protfolio/refs/heads/main/src/assets/logo/download%20(2).jfif",

  "name5": "Firebase",
  "img5": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7iaSsAwCkQDsgn_WxZhC5OW-apJBRVP3wHw&s"
},

    // {
    //   "id": 4,
    //   "name1": "Vs Studio Code",
    //   "img1": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp1bFwS4rOJgaNvb1xLMNpvRHJK6WEkgbV9A&usqp=CAU",
    //   "name2": "Chrome Tools",
    //   "img2": "https://github.com/sharifulislm/Protfolio-/blob/main/skills-icon/skills-icon%20(1).png?raw=true",
    //   "name3": "Wordpress",
    //   "img3": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzvB7zu5BqUfaCqgAdsqI5NfkPL1-n0Jx1LA&s",
    //   "name4": "Stripe",
    //   "img4": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlnfaLYnjLtsJ7BuV8aYJ2tUNzSvztoahLZA&s",
    //   "name5": "DaisyUI",
    //   "img5": "https://azim-profile.netlify.app/static/media/dui.f3c5220288ff2b6eedcd.png",
    // }


  ]
  

    return (
        <div className=' skills p-5 mt-9'>
        <div id='Skills'><h1 style={{color:"#19AB78"}} className='text-3xl mt-5 m-auto text-center'>My Skills</h1>
            <div style={{backgroundColor:"#19AB78"}} className='m-auto w-40 mb-5 mt-1 h-1 '></div>
            </div>
       <div  className='mb-5 grid grid-cols-2 lg:grid-cols-4  mt-7 gap-1  sm:mb-20 '>

      <div>
      <div 
           data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="3000"
             className='flex items-end md:order-first order-last'><img src={skillsPhotsmain} alt="" /> </div>
      </div>

            {
                skillss.map(skills=><SkillsItem skills={skills} key={skills.id}></SkillsItem> )
            }
        </div>
        {/* <h1 className='text-xl justify-start align-text-lift'>- Tools </h1>
     <div className='flex  justify-center'>
      <TolsSkills></TolsSkills>
     </div> */}
        </div>
    );
};

export default Skills;