import React from "react";

const experienceContent = [
  {
    year: "   2024 - Present",
    position: "Full-Stack Developer (SkyHighOps Aviation)",
    compnayName: "Personal Project",
    details: `Developed a web application to streamline aircraft management. 
The system allows employees to efficiently assign and unassign planes from parking spots, 
add and manage plane owners, and send fuel requests to line service technicians, 
improving operational efficiency and organization.`,
  },
  {
    year: "2023 - 2024",
    position: "Full-Stack Developer (Wuber Eats)",
    compnayName: "Personal Project",
    details: `Wuber Eats is a full-stack clone inspired by Uber Eats, 
offering users the ability to explore a variety of restaurants, 
create new restaurant listings, browse menus, add items to their cart, and leave reviews.`,
  }
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
