import React from "react";

const experienceContent = [
  {
    year: "2022 - Present",
    position: "Full-Stack Software Engineer (AeroSkyOps Aviation)",
    companyName: "Rabbit Aviation",
    details: `I built AeroSkyOps Aviation, a full-stack airplane management system designed to streamline aircraft operations for small to mid-sized airports. The system digitizes manual workflows, improving efficiency and reducing errors. Employees can dynamically assign and unassign aircraft parking spots, ensuring accurate record-keeping and better space utilization.

To enhance fuel management, I developed a fuel request system that allows employees to send, track, and update requests with statuses like “en route,” “complete,” and “done.” I also integrated the FlightAware AeroAPI and Weather API, providing real-time airport weather conditions and aircraft statuses for improved operational decision-making. Additionally, I implemented a fuel tank monitoring system where users manually log fuel levels, which visually displays remaining capacity and triggers alerts when refills are needed.

For scalability and performance, I migrated the database from MongoDB to PostgreSQL, leveraging SQLAlchemy for structured data handling. The system also utilizes AWS S3 for secure image storage, and I containerized the application using Docker, deploying it on AWS EC2 with Nginx & TLS encryption for security and high availability. On the frontend, I integrated Redux to optimize state management, reducing unnecessary re-renders and improving UI responsiveness.

This system replaces manual tracking with a centralized digital workflow, improving accuracy and operational efficiency.`
  },
  {
    year: "2023 - 2024",
    position: "Full-Stack Software Engineer (Wuber Eats – App Academy Project)",
    companyName: "Personal Project",
    details: `Wuber Eats is a full-stack web application inspired by Uber Eats, designed as part of my App Academy training to enhance my skills in full-stack development and Agile collaboration.

Users can browse restaurants, view menus, add items to their cart, and leave reviews. The system allows restaurant owners to manage their own listings, update menus, and receive customer feedback, providing a dynamic restaurant discovery and management experience.

On the backend, I built a Flask REST API to handle restaurant data, user authentication, and order processing, while PostgreSQL ensures structured and optimized data storage. 
The frontend uses Redux for a smooth shopping cart experience, allowing real-time item additions, updates, and removals. I also integrated Cloudinary for optimized image storage, reducing load times and improving performance.

This project was developed in an Agile environment, where I collaborated with a team, participating in daily sprints, stand-up meetings, and iterative development cycles to continuously refine features and resolve blockers.

`
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
