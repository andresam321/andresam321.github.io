import React from "react";

const experienceContent = [
  {
    year: "   2022 - Present",
    position: "Full-Stack Developer (AeroSkyOps Aviation)",
    compnayName: "Rabbit Aviation",
    details: `Developed a comprehensive web application to streamline aircraft management and enhance 
operational workflows for small to mid-sized airports. The system allows employees to dynamically 
assign and unassign planes from parking spots, manage detailed information about aircraft owners, 
and send, track, and update fuel requests with statuses like “en route,” “complete,” or “done.” 
Integrated the FlightAware AeroAPI and Weather API to provide real-time airport weather conditions 
and aircraft flight statuses, improving planning and response times. 
Implemented a fuel tank monitoring system with visual gauges to track fuel levels and alert for refills, 
optimizing inventory management. Migrated the database from MongoDB to PostgreSQL, leveraging SQLAlchemy 
to enhance data integrity and scalability, and used AWS S3 for image uploads. 
Containerized the application with Docker to ensure reliable deployments and scalability. 
Redux was integrated into the frontend for efficient state management, and the user interface was 
built with React and styled using CSS to create a seamless and visually appealing experience. 
These enhancements significantly improve operational efficiency, reduce confusion, and streamline critical processes.`,
  },
  {
    year: "2023 - 2024",
    position: "Full-Stack Developer (Wuber Eats)",
    compnayName: "Personal Project",
    details: `Wuber Eats is a full-stack web application inspired by Uber Eats, allowing users to explore 
a wide range of restaurants, browse menus, add items to their cart, and leave reviews. Users can create 
new restaurant listings and manage menus, providing a dynamic platform for restaurant discovery and interaction. 
The project was developed using React with Redux for state management, Python with Flask for the backend, 
and PostgreSQL for the database. The application also incorporates a responsive and intuitive design using CSS`,
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
