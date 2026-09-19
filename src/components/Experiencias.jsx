import React from "react";
import {
  BriefcaseBusiness,
  Building2,
  GraduationCap,
  Megaphone,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const experiencias = [
  {
    empresa: "CEST",
    cargo: "Analista de Suporte / NTI",
    periodo: "Set/2026 – Atual",
    destaque: true,
    tipo: "Tecnologia",
    icon: BriefcaseBusiness,
    descricao:
      "Atuação no suporte e manutenção de sistemas, com foco em TOTVS RM, SQL Server e demandas de usuários.",
    atividades: [
      "Suporte e manutenção de sistemas utilizando TOTVS RM",
      "Consultas e análise de dados utilizando SQL Server",
      "Desenvolvimento e manutenção de consultas e relatórios",
      "Apoio aos usuários em demandas relacionadas aos sistemas",
      "Análise e resolução de problemas relacionados aos sistemas",
      "Aprendizado e atuação com os módulos e estrutura do TOTVS RM",
    ],
  },
  {
    empresa: "APAE / CAEE Eney Santana",
    cargo: "Estagiária de Tecnologia",
    periodo: "Out/2025 – Set/2026",
    destaque: true,
    tipo: "Desenvolvimento",
    icon: Building2,
    descricao:
      "Manutenção e evolução do sistema do CAEE Eney Santana, com desenvolvimento em Scriptcase e SQL, além de suporte direto aos usuários.",
    atividades: [
      "Manutenção e evolução do sistema do CAEE Eney Santana",
      "Desenvolvimento e ajustes utilizando Scriptcase e SQL",
      "Criação e manutenção de relatórios",
      "Alteração e criação de campos e funcionalidades",
      "Ajustes de permissões, acessos e regras de visualização",
      "Manutenção de funcionalidades relacionadas ao atendimento educacional especializado",
      "Interação direta com usuários, especialmente coordenação e professores",
      "Levantamento de demandas e resolução de problemas do sistema",
      "Trabalho com consultas envolvendo múltiplas tabelas e relacionamentos",
    ],
  },
  {
    empresa: "Kadoo Education",
    cargo: "Head de Marketing e Comunicação",
    periodo: "Jan/2026 - Abr/2026",
    destaque: false,
    tipo: "Comunicação",
    icon: Megaphone,
    descricao:
      "Liderança da área de Marketing e Comunicação, com foco em estratégias, conteúdo e gestão da comunicação da startup.",
    atividades: [
      "Liderança da área de Marketing e Comunicação",
      "Planejamento de estratégias de comunicação",
      "Criação e gestão de conteúdo",
      "Gestão de redes sociais",
      "Organização da comunicação da startup",
    ],
  },
  {
    empresa: "LUMINA",
    cargo: "Diretora de Marketing e Comunicação",
    periodo: "Nov/2025 - Atual",
    destaque: false,
    tipo: "Organização",
    icon: GraduationCap,
    descricao:
      "Atuação na primeira liga acadêmica de Sistemas de Informação do Maranhão, com foco em comunicação institucional e divulgação.",
    atividades: [
      "Diretora de Marketing e Comunicação",
      "Atuação na primeira liga acadêmica de Sistemas de Informação do Maranhão",
      "Planejamento de comunicação e identidade da organização",
      "Divulgação de projetos, eventos e iniciativas",
      "Organização da comunicação institucional",
    ],
  },
];

const Experiencias = () => {
  return (
    <section
      id="experiencia"
      className="relative bg-[#111827] py-16 sm:py-20"
      data-aos="fade-up"
    >
      <div className="absolute -right-16 top-10 h-72 w-72 rounded-full bg-[#ef8b7b]/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 md:px-12 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-[3.1rem]">
            EXPERIÊNCIAS<span className="text-primary">.</span>
          </h2>
        </div>

        <div className="relative mx-auto max-w-5xl">
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-white/10 lg:block" />

          <div className="space-y-8">
            {experiencias.map(({ empresa, cargo, periodo, descricao, atividades, destaque, tipo, icon: Icon }) => (
              <article
                key={`${empresa}-${cargo}`}
                className={`relative rounded-2xl border border-white/10 bg-[#0f2235]/90 p-5 shadow-[0_10px_30px_rgba(0,0,0,0.18)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-[#ef8b7b]/40 sm:p-6 ${
                  destaque ? "lg:ml-0 lg:mr-0" : ""
                }`}
              >
                <div className="absolute left-1/2 top-7 hidden h-4 w-4 -translate-x-1/2 rounded-full border-4 border-[#111827] bg-[#ef8b7b] lg:block" />

                <div className={`lg:grid lg:grid-cols-[1fr_1fr] lg:gap-6 ${destaque ? "" : ""}`}>
                  <div className={`${destaque ? "lg:pr-8" : "lg:pr-8"}`}>
                    <div className="mb-4 flex items-center gap-3">
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-primary">
                        <Icon size={18} />
                      </span>

                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#f7c4b9]">
                          {tipo}
                        </p>
                        <h3 className="text-xl font-bold text-white sm:text-2xl">{empresa}</h3>
                      </div>
                    </div>

                    <div className="mb-4">
                      <p className="text-base font-semibold text-slate-200">{cargo}</p>
                      <p className="mt-1 text-sm text-slate-400">{periodo}</p>
                    </div>

                    <p className="text-sm leading-6 text-slate-300 sm:text-[15px]">{descricao}</p>
                  </div>

                  <div className="mt-5 lg:mt-0">
                    <div className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-slate-200">
                      <Sparkles size={14} className="text-primary" />
                      Principais atividades
                    </div>

                    <ul className="space-y-2.5">
                      {atividades.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm text-slate-200 sm:text-[15px]">
                          <span className="mt-1.5 inline-block h-2 w-2 shrink-0 rounded-full bg-[#ef8b7b]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiencias;
