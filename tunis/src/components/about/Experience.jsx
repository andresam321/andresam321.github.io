import React from "react";

const experienceContent = [
  {
    year: "   2022 - Present",
    position: "Full-Stack Developer (SkyHighOps Aviation)",
    compnayName: "Rabbit Aviation",
    details: `Developed a comprehensive web application to streamline aircraft management and enhance 
operational workflows for small to mid-sized airports. The system allows employees to dynamically 
assign and unassign planes from parking spots, add and manage detailed information about aircraft owners, 
and send, track, and update fuel requests with statuses like “en route,” “complete,” or “done.” 
Integrated the FlightAware AeroAPI and Weather API to provide real-time airport weather conditions 
and aircraft flight statuses, improving planning and response times. 
Additionally, implemented a fuel tank monitoring system with visual gauges to track fuel levels 
and alert for refills, optimizing inventory management. Migrated the database from MongoDB to PostgreSQL 
to enhance data integrity and scalability, leveraging SQLAlchemy and AWS for efficient cloud-based workflows. 
These enhancements significantly improve operational efficiency, reduce confusion, and streamline critical processes.`,
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
