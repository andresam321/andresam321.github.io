import React from "react";

const skillsContent = [
  { skillClass: "p70", skillPercent: "70", skillName: "PYTHON" },
  { skillClass: "p75", skillPercent: "75", skillName: "JAVASCRIPT" },
  { skillClass: "p79", skillPercent: "79", skillName: "REACT + VITE" },
  { skillClass: "p70", skillPercent: "70", skillName: "REDUX" },
  { skillClass: "p68", skillPercent: "68", skillName: "POSTGRES" },
  { skillClass: "p65", skillPercent: "65", skillName: "MYSQL" },
  { skillClass: "p70", skillPercent: "70", skillName: "SQLite" },
  { skillClass: "p45", skillPercent: "45", skillName: "MONGODB" },
  { skillClass: "p60", skillPercent: "60", skillName: "AWS" },
  { skillClass: "p84", skillPercent: "84", skillName: "GITHUB" },
  { skillClass: "p85", skillPercent: "85", skillName: "POSTMAN" },
  { skillClass: "p1", skillPercent: "1", skillName: "RUST" },
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
