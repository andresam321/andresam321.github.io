import React from "react";

const skillsContent = [
  { skillClass: "p80", skillPercent: "84", skillName: "PYTHON" },
  { skillClass: "p83", skillPercent: "85", skillName: "JAVASCRIPT" },
  { skillClass: "p81", skillPercent: "83", skillName: "REACT + VITE" },
  { skillClass: "p80", skillPercent: "84", skillName: "REDUX" },
  { skillClass: "p74", skillPercent: "77", skillName: "POSTGRES" },
  { skillClass: "p70", skillPercent: "73", skillName: "MYSQL" },
  { skillClass: "p73", skillPercent: "75", skillName: "SQLite" },
  { skillClass: "p64", skillPercent: "65", skillName: "MONGODB" },
  { skillClass: "p70", skillPercent: "72", skillName: "AWS" },
  { skillClass: "p60", skillPercent: "62", skillName: "DOCKER" },
  { skillClass: "p89", skillPercent: "90", skillName: "GITHUB" },
  { skillClass: "p88", skillPercent: "90", skillName: "POSTMAN" }

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
