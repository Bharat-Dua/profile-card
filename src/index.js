import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

function App() {
  return (
    <div className="card">
      <Avatar image="images/nature.jpg" />
      <div className="data">
        <Intro
          name="Bharat Dua"
          description="a full stack developer with good knowlege on the client side technologies i.e. HTML,CSS,JS,REACT,BOOTSTRAP,TAILWIND,MUI as well as on the server side technologies i.e. Node.js,Express.js,MongoDB,Postman,JWT"
        />
        <Skillset />
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
function Skillset(props) {
  return (
    <div className="skill-list">
      <Skill skill="React" emoji="💪" color="blue" />
      <Skill skill="HTML+CSS" emoji="💪" color="orange" />
      <Skill skill="JavaScript" emoji="💪" color="yellow" />
      <Skill skill="Node.js" emoji="👶" color="orangered" />
    </div>
  );
}
function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
