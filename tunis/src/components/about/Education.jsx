import React from "react";

const educationContent = [
  {
    year: "2024",
    course: "Software Engineer",
    institute: "App Academy",
    details: `App Academy is a renowned coding bootcamp that transforms students 
into full-stack developers through an intensive and immersive program. The curriculum 
covers JavaScript, Python, SQL, HTML, CSS, and frameworks like React and Redux. 
The program emphasizes collaboration through pair programming and group projects, 
mirroring real-world team dynamics. I dedicated myself fully to this rigorous training, 
leaving behind my previous career to pursue my passion for software development. This 
experience equipped me with the technical and interpersonal skills needed to thrive in 
the tech industry.`,
  },
  {
    year: "2022",
    course: "Software Engineer",
    institute: "Coding Dojo",
    details: `Coding Dojo is a global technology education company that offers 
immersive coding bootcamps. During their program, I mastered three full technology 
stacks: MERN (MongoDB, Express, React, Node.js), Python, and Java. This well-rounded 
approach provided a strong foundation in programming languages, frameworks, and 
problem-solving techniques. The bootcamp emphasized hands-on learning, algorithms, 
and data structures, preparing me to tackle complex coding tasks. My time at Coding 
Dojo instilled adaptability and perseverance, which I carry into every development 
project.`,
  },
];

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.degree}
            <span className="place open-sans-font">{val.institute}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Education;
