import React from "react";
import {
  Code2,
  Database,
  Settings2,
  BrainCircuit,
  Users,
  Sparkles,
} from "lucide-react";

const categories = [
  {
    title: "Desenvolvimento",
    icon: Code2,
    skills: [
      "Python",
      "Web — HTML, CSS e JavaScript (básico)",
      "React (básico)",
      "Node.js / Express (básico)",
    ],
  },
  {
    title: "Banco de Dados",
    icon: Database,
    skills: [
      "SQL",
      "Modelagem de dados",
      "PostgreSQL",
      "SQL Server",
      "Consultas e relatórios",
    ],
  },
  {
    title: "Sistemas",
    icon: Settings2,
    skills: [
      "TOTVS RM",
      "Scriptcase",
      "Integração de sistemas e banco de dados",
      "Manutenção de sistemas",
    ],
  },
];

const softSkills = [
  "Resolução de problemas",
  "Raciocínio lógico",
  "Aprendizado contínuo",
  "Organização",
  "Trabalho em equipe",
  "Comunicação",
  "Proatividade",
  "Adaptabilidade",
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative bg-[#111827] py-16 sm:py-20"
      data-aos="fade-up"
    >
      <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-[#ef8b7b]/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 md:px-12 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-[3.1rem]">
            SKILLS<span className="text-primary">.</span>
          </h2>
        </div>

        <div className="space-y-8">
          <div className="grid gap-6 lg:grid-cols-3">
            {categories.map(({ title, icon: Icon, skills }) => (
              <article
                key={title}
                className="rounded-2xl border border-white/10 bg-[#0f2235]/90 p-5 shadow-[0_10px_30px_rgba(0,0,0,0.18)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-[#ef8b7b]/40"
              >
                <div className="mb-5 flex items-center gap-3 border-b border-white/10 pb-4">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-primary">
                    <Icon size={18} />
                  </span>
                  <h3 className="text-xl font-semibold text-white">{title}</h3>
                </div>

                <ul className="space-y-3">
                  {skills.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-start gap-3 text-sm text-slate-200 sm:text-[15px]"
                    >
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-[#ef8b7b]" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#0f2235]/90 p-5 shadow-[0_10px_30px_rgba(0,0,0,0.18)] backdrop-blur-sm sm:p-6">
            <div className="mb-5 flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-primary">
                <BrainCircuit size={18} />
              </span>
              <h3 className="text-xl font-semibold text-white">Soft Skills</h3>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {softSkills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-[#ef8b7b]/40 bg-[#ef8b7b]/10 px-3 py-2 text-sm font-medium text-slate-100 transition hover:border-[#ef8b7b]/70 hover:bg-[#ef8b7b]/15"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
