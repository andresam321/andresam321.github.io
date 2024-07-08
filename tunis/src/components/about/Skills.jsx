import React from "react";

const skillsContent = [
  { skillClass: "p80", skillPercent: "80", skillName: "PYTHON" },
  { skillClass: "p83", skillPercent: "83", skillName: "JAVASCRIPT" },
  { skillClass: "p81", skillPercent: "81", skillName: "REACT + VITE" },
  { skillClass: "p80", skillPercent: "80", skillName: "REDUX" },
  { skillClass: "p74", skillPercent: "74", skillName: "POSTGRES" },
  { skillClass: "p70", skillPercent: "70", skillName: "MYSQL" },
  { skillClass: "p73", skillPercent: "73", skillName: "SQLite" },
  { skillClass: "p64", skillPercent: "64", skillName: "MONGODB" },
  { skillClass: "p70", skillPercent: "70", skillName: "AWS" },
  { skillClass: "p60", skillPercent: "60", skillName: "DOCKER" },
  { skillClass: "p89", skillPercent: "89", skillName: "GITHUB" },
  { skillClass: "p88", skillPercent: "88", skillName: "POSTMAN" }

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
