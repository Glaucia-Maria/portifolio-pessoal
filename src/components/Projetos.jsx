import React from "react";
import { ExternalLink, Sparkles } from "lucide-react";
import pwaImage from "../assets/pwa.png";

const projetos = [
  {
    title: "PWA — Solar Explorer",
    description:
      "Uma aplicação web desenvolvida como uma Progressive Web App (PWA) sobre o Sistema Solar. O projeto apresenta informações e imagens dos planetas de forma responsiva e foi desenvolvido para funcionar também offline, utilizando Service Worker e cache de arquivos.",
    technologies: ["HTML", "CSS", "JavaScript", "PWA", "Service Worker"],
    image: pwaImage,
    link: "https://glaucia-maria.github.io/pwa/",
  },
];

const Projetos = () => {
  return (
    <section
      id="projetos"
      className="relative bg-[#111827] py-16 sm:py-20"
      data-aos="fade-up"
    >
      <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-[#ef8b7b]/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 md:px-12 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-[3.1rem]">
            PROJETOS<span className="text-primary">.</span>
          </h2>
        </div>

        <div className="mx-auto max-w-5xl">
          {projetos.map((projeto, index) => (
            <article
              key={projeto.title}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-[#0f2235]/90 shadow-[0_10px_30px_rgba(0,0,0,0.18)] transition-all duration-300 hover:-translate-y-1 hover:border-[#ef8b7b]/60"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="grid gap-0 lg:grid-cols-[1.05fr_1.35fr]">
                <div className="flex min-h-[220px] items-center justify-center border-b border-white/10 bg-gradient-to-br from-[#0f2235] via-[#11263d] to-[#111827] p-5 lg:min-h-full lg:border-b-0 lg:border-r">
                  {projeto.image ? (
                    <img
                      src={projeto.image}
                      alt={projeto.title}
                      className="h-full w-full rounded-xl object-cover shadow-[0_12px_30px_rgba(0,0,0,0.25)]"
                    />
                  ) : (
                    <div className="flex h-full min-h-[180px] w-full items-center justify-center rounded-xl border border-dashed border-white/15 bg-[#111827]/60 text-center">
                      <div className="space-y-3 px-6">
                        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-[#ef8b7b]/40 bg-[#ef8b7b]/10 text-primary">
                          <Sparkles size={20} />
                        </div>
                        <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
                          Thumbnail em breve
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex flex-col justify-between p-5 sm:p-6">
                  <div>

                    <h3 className="text-2xl font-bold text-white sm:text-[2rem]">
                      {projeto.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-[15px]">
                      {projeto.description}
                    </p>
                  </div>

                  <div className="mt-5">
                    <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
                      <Sparkles size={14} className="text-primary" />
                      Tecnologias
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {projeto.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6">
                    <a
                      href={projeto.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_25px_rgba(239,139,123,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_12px_30px_rgba(239,139,123,0.38)]"
                    >
                      Ver projeto
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projetos;
