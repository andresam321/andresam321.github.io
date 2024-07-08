import React from "react";

const educationContent = [
  {
    year: "2024",
    course: "Software Engineer",
    institute: "App Academy",
    details: `App Academy is a well-known coding bootcamp that offers a 
comprehensive software engineering program. The curriculum is designed to turn students 
into full-stack developers within a short period. The program covers various topics, 
including JavaScript, Python, SQL, HTML, CSS, and multiple frameworks. Students engage in 
hands-on projects, pair programming, and real-world coding challenges. 
The bootcamp emphasizes practical experience and job-ready skills, 
preparing graduates like myself to enter the tech industry immediately.`,
  },
  {
    year: "2022",
    course: "Software Engineer",
    institute: "Coding Dojo",
    details: `Coding Dojo is a global technology education company that offers 
immersive coding bootcamps. Their software engineering program teaches 
three full technology stacks, including MERN 
(MongoDB, Express, React, Node.js), Python, and Java. 
This approach gives students a well-rounded foundation in different programming languages and 
frameworks. The bootcamp focuses on hands-on learning, algorithms, data structures, 
and problem-solving skills. Graduates of Coding Dojo are well-prepared 
to tackle complex coding tasks and contribute effectively in various tech roles.`,
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
