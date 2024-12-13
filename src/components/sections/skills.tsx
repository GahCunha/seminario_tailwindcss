import {
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaDocker,
} from "react-icons/fa";
import { SiTypescript, SiPostgresql } from "react-icons/si";
import { CardSkill } from "../cardSkill";

export function Skills() {
  const skills = [
    { name: "Git", icon: FaGitAlt },
    { name: "HTML", icon: FaHtml5 },
    { name: "CSS", icon: FaCss3Alt },
    { name: "JavaScript", icon: FaJs },
    { name: "React", icon: FaReact },
    { name: "Node.js", icon: FaNodeJs },
    { name: "Python", icon: FaPython },
    { name: "TypeScript", icon: SiTypescript },
    { name: "Docker", icon: FaDocker },
    { name: "PostgreSQL", icon: SiPostgresql },
  ];

  return (
    <section className="mt-4 p-4 lg:p-12">
      <h2 className="mb-8 text-center text-4xl lg:text-5xl">
        My <span className="font-bold">Skills</span>
      </h2>
      <div className="mt-6 flex flex-wrap justify-center gap-6">
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <CardSkill
              key={index}
              className={`${index > 5 ? "hidden sm:flex" : "flex"
                } flex-col items-center justify-center`}
            >
              <Icon className="text-4xl" />
              <p className="text-center text-lg font-semibold">{skill.name}</p>
            </CardSkill>
          );
        })}
      </div>
    </section>
  );
}
