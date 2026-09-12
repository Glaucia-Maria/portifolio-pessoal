import React from "react";
import heroImg from "../assets/glau-boneca.png";

const HeroSection = () => {
    return (
        <section className="relative w-full overflow-hidden bg-[#111827] py-12 sm:py-16 lg:py-20" data-aos="zoom-in-up">
            <div className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full bg-gradient-to-br from-[#fc8979] to-[#FFAF9E] opacity-30 blur-3xl" />
            <div className="pointer-events-none absolute right-10 top-14 h-32 w-32 rounded-full border border-white/10 bg-white/5 blur-2xl" />
            <div className="pointer-events-none absolute bottom-10 left-1/3 h-24 w-24 rounded-full border border-[#ef8b7b]/30 bg-[#ef8b7b]/10 blur-xl" />

            <div className="absolute inset-0 opacity-30" aria-hidden="true">
                <div className="absolute left-[12%] top-[18%] h-2 w-2 rounded-full bg-[#ef8b7b] shadow-[0_0_18px_rgba(239,139,123,0.8)]" />
                <div className="absolute right-[18%] top-[24%] h-2 w-2 rounded-full bg-white/70" />
                <div className="absolute bottom-[15%] right-[22%] h-2 w-2 rounded-full bg-[#ef8b7b] shadow-[0_0_16px_rgba(239,139,123,0.8)]" />
                <div className="absolute left-[20%] bottom-[18%] h-3 w-3 rounded-full border border-white/20 bg-transparent" />
            </div>

            <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8 md:px-12 lg:px-8">
                <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
                    <div className="relative order-2 flex justify-center lg:order-1 lg:justify-start" data-aos="fade-right" data-aos-delay="150">
                        <div className="relative">
                            <div className="absolute inset-10 rounded-full bg-[#ef8b7b]/10 blur-3xl" />
                            <div className="absolute -bottom-4 left-8 h-16 w-16 rounded-full border border-white/10 bg-[#0f2235]/70 shadow-[0_10px_30px_rgba(15,34,53,0.8)]" />
                            <div className="absolute -right-3 top-6 h-10 w-10 rounded-full border border-white/10 bg-white/5" />
                            <img
                                src={heroImg}
                                alt="Ilustração de Glaucia"
                                className="relative z-10 w-[18rem] object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.35)] sm:w-[20rem] md:w-[22rem] lg:w-[30rem]"
                            />
                        </div>
                    </div>

                    <div className="order-1 text-center lg:order-2 lg:text-left" data-aos="fade-left" data-aos-delay="200">
                        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.2em] text-slate-200 shadow-[0_0_18px_rgba(255,255,255,0.04)]">
                            <span className="h-2 w-2 rounded-full bg-[#ef8b7b] shadow-[0_0_12px_rgba(239,139,123,0.9)]" />
                            disponível para projetos
                        </div>

                        <h1 className="text-4xl font-black leading-[0.95] tracking-[-0.04em] text-white sm:text-5xl lg:text-[4rem]">
                            DESENVOLVEDORA <span className="text-primary">DE SOFTWARE</span>
                        </h1>

                        <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-gray-300 sm:text-lg lg:mx-0">
                            Estudante de Sistemas de Informação, apaixonada por tecnologia e desenvolvimento de soluções.
                            Tenho experiência com desenvolvimento web, bancos de dados e sistemas, buscando transformar
                            problemas em soluções funcionais e eficientes.
                        </p>

                        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
                            <a
                                href="#formacao"
                                className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_25px_rgba(239,139,123,0.38)] transition-all duration-300 hover:-translate-y-1 hover:brightness-110 hover:shadow-[0_16px_30px_rgba(239,139,123,0.45)]"
                            >
                                Formação
                            </a>

                            <a
                                href="#skills"
                                className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:border-[#ef8b7b]/60 hover:bg-[#ef8b7b]/10"
                            >
                                Ver skills
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;