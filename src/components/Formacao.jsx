import React from "react";
import {
  BookOpenText,
  BriefcaseBusiness,
  CalendarRange,
} from "lucide-react";
const destaques = [
  "Engenharia de Software",
  "Banco de Dados",
  "Desenvolvimento Web",
  "Estrutura de Dados",
  "Sistemas Operacionais",
  "Sistemas Integrados com Banco de Dados",
];

const cronograma = [
  "2024.2 - Início",
  "2026.2 - Atualmente (6º Semestre)",
  "2028 - Previsão de Formatura (8º Semestre)",
];

const segments = Array.from({ length: 8 }, (_, index) => index < 6);

const Formacao = () => {
  return (
    <main id="formacao" className="relative flex min-h-[calc(100vh-120px)] items-center justify-center overflow-hidden bg-[#111827] px-4 pb-10 pt-6 sm:px-6 lg:px-8" data-aos="fade-up">

      {/* Efeito de luz no fundo */}
      <div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-[#ef8b7b]/30 blur-3xl" />

      <div className="mx-auto w-full max-w-[1200px]">

        <div className="flex justify-center">

          {/* =========================
              INFORMAÇÕES
          ========================== */}
          <div className="order-1 w-full lg:max-w-[760px]">

            <div className="mb-5 flex justify-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#ef8b7b]/35 bg-[#ef8b7b]/10 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.2em] text-[#f7c4b9] shadow-[0_0_18px_rgba(239,139,123,0.12)]">
                <span className="h-2 w-2 rounded-full bg-[#ef8b7b] animate-pulse" />
                carregando especializações...
              </span>
            </div>

            <h1 className="text-center text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-center lg:text-[3.2rem] lg:tracking-[-0.05em]">
              FORMAÇÃO{" "}
              <span className="text-primary">ACADÊMICA.</span>
            </h1>

            <div className="mt-8 w-full rounded-2xl border border-white/10 bg-[#0f2235]/85 shadow-[0_10px_40px_rgba(0,0,0,0.2)] backdrop-blur-sm">

              {/* Cabeçalho */}
              <div className="flex items-center justify-between gap-3 border-b border-white/10 px-5 py-4 sm:px-6">

                <div className="flex items-center justify-center gap-3 text-sm font-semibold uppercase tracking-[0.12em] text-slate-200">

                  <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-primary">
                    <BookOpenText size={16} />
                  </span>

                  <span>
                    CEST - Centro Universitário Santa Terezinha
                  </span>

                </div>

                <span className="text-xs font-medium uppercase tracking-[0.15em] text-slate-400">
                  2026 - Presente
                </span>

              </div>

              {/* Conteúdo */}
              <div className="space-y-5 px-5 py-5 sm:px-6">

                <h2 className="text-2xl font-bold text-white sm:text-[2.1rem]">
                  Bacharelado em Sistemas de Informação
                </h2>

                {/* Período */}
                <div className="space-y-3">

                  <div className="flex items-center justify-center gap-3 text-base font-semibold text-slate-200 sm:justify-start">

                    <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-white/10 bg-white/5 text-primary">
                      <BriefcaseBusiness size={15} />
                    </span>

                    <span>
                      6º Período (Em Andamento)
                    </span>

                  </div>

                  {/* Barra dos semestres */}
                  <div className="flex items-center gap-2 sm:gap-3">

                    {segments.map((filled, index) => (
                      <span
                        key={index}
                        className={`h-2.5 rounded-full ${
                          filled
                            ? "w-10 bg-[#ef8b7b]"
                            : "w-10 border border-[#ef8b7b]/80 bg-transparent"
                        }`}
                      />
                    ))}

                  </div>

                  <p className="text-sm text-slate-300">
                    6/8 Semestres Completos. Conclusão prevista: 2028
                  </p>

                </div>

                {/* Destaques */}
                <div className="border-t border-white/10 pt-5">

                  <div className="mb-3 flex items-center justify-center gap-3 text-base font-semibold text-slate-200 sm:justify-start">

                    <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-white/10 bg-white/5 text-primary">
                      <CalendarRange size={15} />
                    </span>

                    <span>
                      Destaques do Curso:
                    </span>

                  </div>

                  <div className="flex flex-wrap gap-2">

                    {destaques.map((item, index) => (
                      <span
                        key={`${item}-${index}`}
                        className="rounded-full border border-[#ef8b7b]/60 bg-[#ef8b7b]/10 px-3 py-1.5 text-xs font-medium text-slate-200"
                      >
                        {item}
                      </span>
                    ))}

                  </div>

                </div>

                {/* Cronograma */}
                <div className="border-t border-white/10 pt-5">

                  <ul className="space-y-3 text-sm text-slate-200 sm:text-base">

                    {cronograma.map((item, index) => (
                      <li
                        key={item}
                        className="flex items-center gap-3"
                      >

                        <span
                          className={`h-2.5 w-2.5 shrink-0 rounded-full ${
                            index === 2
                              ? "bg-[#ef8b7b]"
                              : "bg-slate-500"
                          }`}
                        />

                        <span>
                          {item}
                        </span>

                      </li>
                    ))}

                  </ul>

                </div>

                {/* Botão */}
                <div className="flex justify-end pt-2">

                  <button
                    className="rounded-xl border border-[#ef8b7b]/80 bg-[#ef8b7b] px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_25px_rgba(239,139,123,0.34)] transition hover:brightness-110"
                  >
                    Ver Histórico Completo
                  </button>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
};

export default Formacao;