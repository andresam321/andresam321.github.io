import React from "react";

const experienceContent = [
  {
    year: "2022 - Present",
    position: "Full-Stack Software Engineer (AeroSkyOps Aviation)",
    companyName: "Rabbit Aviation",
    details: `I built a full-stack airplane management system designed to modernize aircraft operations for small to mid-sized airports. The system digitizes manual workflows, improving efficiency and reducing errors. Employees can dynamically assign and unassign aircraft parking spots, ensuring accurate record-keeping and historical tracking for better space utilization.

To enhance fuel management, I developed a fuel request system that allows employees to send, track, and update fuel requests with statuses like “en route,” “complete,” and “done.” I also integrated the FlightAware AeroAPI and Weather API, providing real-time access to airport weather conditions and aircraft statuses for improved operational decision-making. Additionally, I implemented a fuel tank monitoring system with visual gauges to track fuel levels, trigger refill alerts, and optimize inventory management.

For scalability and performance, I migrated the database from MongoDB to PostgreSQL, leveraging SQLAlchemy to improve relational data handling. The system also utilizes AWS S3 for secure image storage, and I containerized the application using Docker, deploying it on AWS EC2 with Nginx & TLS encryption to ensure security and high availability.

On the frontend, I integrated Redux to optimize state management, reducing unnecessary re-renders and enhancing UI responsiveness. The user interface, built with React & CSS, delivers a seamless experience with intuitive workflows.

🚀 Impact: This system transformed airport operations, eliminating manual tracking, reducing errors, and improving overall efficiency, resulting in a more structured and streamlined aviation management solution.`
  },
  {
    year: "2023 - 2024",
    position: "Full-Stack Software Engineer (Wuber Eats)",
    companyName: "Personal Project",
    details: `Wuber Eats is a full-stack web application inspired by Uber Eats, allowing users to browse restaurants, view menus, add items to their cart, and leave reviews. Users can also create and manage restaurant listings, offering a dynamic restaurant discovery and management experience.

The backend was built using a RESTful API with Flask, handling restaurant data, user authentication, and order processing. The frontend features a Redux-managed shopping cart, enabling smooth item additions, updates, and removals. For data storage, I implemented PostgreSQL, optimizing query performance and ensuring structured data management.

This project was developed in an Agile team environment, where we conducted daily sprints, stand-up meetings, and iterative development cycles to continuously refine features and resolve blockers. I collaborated closely with teammates to ensure seamless backend-to-frontend integration, conducted code reviews, and contributed to feature planning.

To enhance the user experience, I integrated Cloudinary for optimized image storage, reducing load times and ensuring seamless performance. The application was designed with a fully responsive UI using React and CSS, making it mobile-friendly and intuitive.

🚀 Impact: Wuber Eats showcases my ability to develop interactive, scalable web applications in a collaborative Agile environment, combining efficient backend processing with a seamless user experience.`
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
