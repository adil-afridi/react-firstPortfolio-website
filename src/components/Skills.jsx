import React from "react";
import skill from "./data/skills.json";

const Skills = () => {
  return (
    <>
      <div className="container skills" id="skill">
        <h1>SKILLS</h1>
        <div className="items">
          {skill.map((data) => {
            return (
              <>
                <div
                  className="item"
                  key={data.id}
                  data-aos="flip-left"
                  data-aos-duration="1000"
                >
                  <img src={`/images/${data.imageSrc}`} alt="" />
                  <h5>{data.title}</h5>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Skills;
