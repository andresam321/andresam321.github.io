import React from "react";

const skillsContent = [
  { skillClass: "p90", skillPercent: "90", skillName: "PYTHON" },
  { skillClass: "p88", skillPercent: "88", skillName: "JAVASCRIPT" },
  { skillClass: "p85", skillPercent: "85", skillName: "REACT + VITE" },
  { skillClass: "p85", skillPercent: "85", skillName: "REDUX" },
  { skillClass: "p80", skillPercent: "80", skillName: "POSTGRESQL" },
  { skillClass: "p75", skillPercent: "75", skillName: "MYSQL" },
  { skillClass: "p75", skillPercent: "75", skillName: "SQLite" },
  { skillClass: "p65", skillPercent: "65", skillName: "MONGODB" },
  { skillClass: "p78", skillPercent: "78", skillName: "AWS (S3, EC2)" },
  { skillClass: "p70", skillPercent: "70", skillName: "DOCKER" },
  { skillClass: "p90", skillPercent: "90", skillName: "GITHUB" },
  { skillClass: "p85", skillPercent: "85", skillName: "POSTMAN" },
  { skillClass: "p72", skillPercent: "72", skillName: "FLASK" },
  { skillClass: "p75", skillPercent: "75", skillName: "SQLAlchemy" },
  { skillClass: "p70", skillPercent: "70", skillName: "HTML & CSS" }
];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="col-6 col-md-3 mb-3 mb-sm-5" key={i}>
          <div className={`c100 ${val.skillClass}`}>
            <span>{val.skillPercent}%</span>
            <div className="slice">
              <div className="bar"></div>
              <div className="fill"></div>
            </div>
          </div>
          <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
            {val.skillName}
          </h6>
        </div>
      ))}
    </>
  );
};

export default Skills;
