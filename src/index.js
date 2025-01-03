import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <img className="avatar" src="Anders_Hejlsberg.jpg" alt="Anders Hejlsberg" />
  );
}

function Intro() {
  return (
    <div>
      <h1>Anders Hejlsberg </h1>
      <p>
        Anders Hejlsberg (/ˈhaɪlzbɜːrɡ/, born 2 December 1960) is a Danish
        software engineer who co-designed several programming languages and
        development tools. He was the original author of Turbo Pascal and the
        chief architect of Delphi. He currently works for Microsoft as the lead
        architect of C# and is a core developer on TypeScript.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skillName="Typescript" emoji="🧑‍💻" color="blue" />
      <Skill skillName="Javascript" emoji="💪" color="orange" />
      <Skill skillName="C#" emoji="❤️" color="green" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skillName}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
