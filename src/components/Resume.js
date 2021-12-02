import resume from "../assets/docs/SeanCraigResume.pdf";
const Resume = () => {
  const frontEndSkills = [
    { id: 1, name: "HTML" },
    { id: 2, name: "CSS" },
    { id: 3, name: "JavaScript" },
    { id: 4, name: "jQuery" },
    { id: 5, name: "React" },
    { id: 6, name: "Bootstrap" },
  ];
  const backEndSkills = [
    { id: 1, name: "Node" },
    { id: 2, name: "Express" },
    { id: 3, name: "MySql, Sequelize" },
    { id: 4, name: "MongoDB, Mongoose" },
    { id: 5, name: "RESTful APIs" },
    { id: 6, name: "GraphQL" },
  ];

  return (
    <div>
      <h1>Resume</h1>
      <a href={resume} download="SeanCraigResume">
        Download My Resume (PDF)
      </a>
      <div>
        <h3>Front End Skills</h3>
        <ul>
          {frontEndSkills.map((skill) => (
            <li key={skill.id}>{skill.name}</li>
          ))}
        </ul>
        <h3>Back End Skills</h3>
        <ul>
          {backEndSkills.map((skill) => (
            <li key={skill.id}>{skill.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Resume;
