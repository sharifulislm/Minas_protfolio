import skillsPhotsmain from '../../../assets/skills-icon/skillsPhotsmain.png';
import './Skills.css';
import SkillsItem from './SkillsItem';


const Skills = () => {
const skillss = [
    {

      "id": 1,
      "name1": "Website",
      "img1": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeyIEirsm9ozDvwhP--ldqggqf6Yz-gVBLxg&s",
      "name2": "Mobile App",
      "img2": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjtTrVvTGj9XFzxZQdTaHmNocXygw72C5HJQ&s",
      "name3": "Oracle System ",
      "img3": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsf_k03KRdC4NkZaZ5esQz8sGlxwBJ-xX9sw&s",
      "name4": "WebApplication",
      "img4": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4J9SRxswvqp80A8qnEZ_6P6a8oyASxOx8rQ&s",
      "name5": "CCTV / security system",
      "img5": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1dU_3RJlKWqAA1ibIfEsXDdmRMGIHZJLBWQ&s",
    
    },
    {
      "id": 2,
      "name1": "Html 5",
      "img1": "https://azim-profile.netlify.app/static/media/html.508b267241d25229c7a8.png",
      "name2": "Bootstrap",
      "img2": "https://azim-profile.netlify.app/static/media/bootstrap.eb4bbd494473eb1d52ca.png",
      "name3": "JavaScript",
      "img3": "https://azim-profile.netlify.app/static/media/html.508b267241d25229c7a8.png",
      "name4": "React js",
      "img4": "https://azim-profile.netlify.app/static/media/react.3977ddbe7f665b2c0aee.png",
      "name5": "React Bootstrap",
      "img5": "https://azim-profile.netlify.app/static/media/rb.c583c04000d30b085623.png",
    },
    {
      "id": 3,
      "name1": "Node.js",
      "img1": "https://azim-profile.netlify.app/static/media/node.593013e5018ed329d3f4.png",
      "name2": "MongoDB",
      "img2": "https://azim-profile.netlify.app/static/media/mongoDB.2341c8f8e37584b40f41.png",
      "name3": "Express.js",
      "img3": "https://azim-profile.netlify.app/static/media/express.213bce8758c3b770c1b2.png",
      "name4": "Firebase",
      "img4": "https://azim-profile.netlify.app/static/media/firebase.d19d58ab5b56ed09d654.png",
      "name5": "React Hook",
      "img5": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC5RY46Qm-MPuv62Xv5asvMF03s1d_ep1mIDPa-8Aaw5el4TJ6wW_RBRuQN3mdO__21Ik&usqp=CAU",

    },
    {
      "id": 4,
      "name1": "Vs Studio Code",
      "img1": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp1bFwS4rOJgaNvb1xLMNpvRHJK6WEkgbV9A&usqp=CAU",
      "name2": "Chrome Tools",
      "img2": "https://github.com/sharifulislm/Protfolio-/blob/main/skills-icon/skills-icon%20(1).png?raw=true",
      "name3": "Heroku",
      "img3": "https://camo.githubusercontent.com/8274f7df75bac91a2ac39f668c78df0817428ec3e465c7d1b899c664a60f701e/68747470733a2f2f656e637279707465642d74626e302e677374617469632e636f6d2f696d616765733f713d74626e3a414e643947635456736f7838767542314e73596d3969454f455f2d776473734f4b6d56654d765167387726757371703d434155",
      "name4": "Stripe",
      "img4": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsr7nmbrdidXzM6O88ufEGcoHt-ol51Zzzow&usqp=CAU",
      "name5": "DaisyUI",
      "img5": "https://azim-profile.netlify.app/static/media/dui.f3c5220288ff2b6eedcd.png",
    }


  ]
  

    return (
        <div className=' skills p-5 mt-9'>
        <div id='Skills'><h1 style={{color:"#19AB78"}} className='text-3xl mt-5 m-auto text-center'>My Skills</h1>
            <div style={{backgroundColor:"#19AB78"}} className='m-auto w-40 mb-5 mt-1 h-1 '></div>
            </div>
       <div  className='mb-5 grid grid-cols-2 lg:grid-cols-5  mt-7 gap-1  sm:mb-20 '>

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