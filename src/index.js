import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar image="images/nature.jpg" />
      <div className="data">
        <Intro
          name="Bharat Dua"
          description="a full stack developer with good knowlege on the client side technologies i.e. HTML,CSS,JS,REACT,BOOTSTRAP,TAILWIND,MUI as well as on the server side technologies i.e. Node.js,Express.js,MongoDB,Postman,JWT"
        />
        {/* {skills.map((skill) => (
          <SkillList key={skill.skill} skill={skill} />
        ))} */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar(props) {
  return <img src={props.image} className="avatar" alt="avatar" />;
}
function Intro(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.description}</p>
    </div>
  );
}
function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill
          key={skill.skill}
          skill={skill.skill}
          color={skill.color}
          level={skill.level}
        />
      ))}
      {/* <Skill skill={skill.skill} emoji="💪" color={skill.color} /> */}
      {/* <Skill skill="HTML+CSS" emoji="💪" color="orange" />
      <Skill skill="JavaScript" emoji="💪" color="yellow" />
      <Skill skill="Node.js" emoji="👶" color="orangered" /> */}
    </div>
  );
}
function Skill({ skill, color, level }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "beginner" && "👶"}
        {level === "intermediate" && "👍"}
        {level === "advanced" && "💪"}
      </span>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
