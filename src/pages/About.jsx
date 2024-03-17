// About.js
import React from 'react';
import ProfileCard from '../components/Aboutpage/ProfileCard';
import ProfileCard2 from '../components/Aboutpage/ProfileCard2';
import ProfileCard3 from '../components/Aboutpage/ProfileCard3';
import mash from "../../Assets/images/about/me.jpg";
import sarah from "../../Assets/images/about/sarah.jpg";
import bijon from "../../Assets/images/about/bjon.png";
import joe from "../../Assets/images/about/joe.jpg";

let profileData = [
  {
    index: 11,
    image: mash,
    name: "Mashiour Rahman",
    goal: "Becoming a food businessman ",
    expertise: `
    Frontend Developer
    `,
    techstack: `
    HTML | CSS | JAVASCRIPT | RESPONSIVE WEB DESIGN | REACT.JS | NODE.JS | SQL | NOSQL | POSTMAN
    `,
    education: "Graduated, CSE, IIUC",
    linkedin: "",
    github: ""
  },
  {
    index: 12,
    image: bijon,
    name: "Bijon Talukder",
    goal: "Becoming a Backend and Devops Dev & Solving 1000 problems in codeforces",
    expertise: "Fullstack Developer",
    techstack: `
    C | C++ | HTML  CSS | JAVASCRIPT | RESPONSIVE WEB DESIGN | NODE.JS | SQL | JAVA | ANDROID | NOSQL | POSTMAN
    `,
    education: "Graduated, CSE, BGCT",
    linkedin: "",
    github: ""
  },

  {
    index: 13,
    image: joe,
    name: "Joseph Armstrong",
    goal: "Calculating Pi",
    expertise: "Backend Developer",
    techstack: `
    C | C++ | JAVA | JAVASCRIPT | REACT | SQL | PYTORCH | TENSORFLOW | CNN | POSTMAN | UNITY | TABLEAU | JUPYTER | WEB SCRAPING | MACHINE LEARNING  
    `,
    education: "Graduated, CS, UCSB",
    linkedin: "",
    github: ""
  },

  {
    index: 14,
    image: sarah,
    name: "Sarah Armstrong",
    goal: "Having a pet turtle",
    expertise: "Data Science",
    techstack: `
    PYTHON | C++ | HTML | JAVASCRIPT | REACT | MACHINE LEARNING
    `,
    education: "Student, CS, UCR",
    linkedin: "",
    github: ""
  },

]
function About() {
  return (
    <div className='about-section row '>

      {
        profileData.map( (data,index)=> <ProfileCard3 key={index} index = {index} data={data} className="col-12 col-xl-3 col-lg-3 col-md-6 col-sm-12"/>)
      }
      
      
    </div>
  );
}

export default About;
