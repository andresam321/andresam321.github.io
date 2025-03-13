import React from "react";

const experienceContent = [
  {
    year: "2022 - Present",
    position: "Full-Stack Software Engineer (AeroSkyOps Project)",
    companyName: "Rabbit Aviation",
    details: `While working as a line service technician at Rabbit Aviation, I identified inefficiencies in how aircraft assignments, fuel requests, and owner information were managed. Recognizing an opportunity to improve operational efficiency, I designed and developed AeroSkyOps, a full-stack aviation management system to replace outdated manual workflows with a structured, digital solution. The system enhances efficiency, improves record-keeping, and reduces errors in key airport operations. Employees can dynamically assign and unassign aircraft parking spots, ensuring accurate tracking and optimized space utilization. To improve fuel management, I built a fuel request system that allows staff to submit, track, and update orders with status changes such as “En Route,” “Complete,” and “Done,” which are dynamically reflected in the UI to improve coordination for airport staff. Additionally, I integrated the FlightAware AeroAPI and Weather API, providing near-live flight tracking and real-time weather updates to support better operational decision-making.

To further optimize fuel operations, I implemented a fuel tank monitoring system where users manually log fuel levels, visually displaying remaining capacity and triggering alerts when refills are needed. I also developed an aircraft parking history system, enabling employees to review and reference past assignments efficiently. For scalability and performance, I migrated the database from MongoDB to PostgreSQL, leveraging SQLAlchemy for structured data handling and improved data integrity. The system utilizes AWS S3 for secure image storage, and I containerized the application using Docker, deploying it on AWS EC2 with Nginx and TLS encryption for security and high availability. On the frontend, I integrated Redux to optimize state management, reducing unnecessary re-renders and improving UI responsiveness.

Over the past two years, I have continuously refined AeroSkyOps, adding new features and improving its architecture to enhance efficiency and modernize airport operations. Currently, I am working on integrating a QR Code system that will allow pilots to scan a code to quickly access and submit fuel request forms, as well as implementing role-based access control (RBAC) to enhance security and access management.
`
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
