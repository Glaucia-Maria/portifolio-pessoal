import React from "react";
import heroImg from "../assets/glau-boneca.png";

const HeroSection = () => {
    return (
        <section className="relative w-full bg-[#111827] pt-12 pb-16" data-aos="zoom-in-up">
            <div className="absolute -left-20 top-0 w-72 h-72 rounded-full bg-gradient-to-br from-[#fc8979] to-[#FFAF9E] opacity-30 blur-3xl pointer-events-none" ></div>

            <div className="w-full px-5 sm:px-8 md:px-12 lg:px-8 max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    <div className="relative flex justify-center lg:justify-start mt-8 lg:mt-0">
                        <img src={heroImg} alt="Ilustração" className="w-95 sm:w-95 md:w-96 lg:w-[32rem] object-contain" />
                    </div>

                    <div className="text-center lg:text-left">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                            DESENVOLVEDORA & <span className="text-primary">ESTRATEGISTA DIGITAL</span>
                        </h1>

                        <p className="mt-4 text-gray-300 max-w-xl mx-auto lg:mx-0">
                            Estudante de Sistemas de Informação e freelancer na área de marketing digital. Desenvolvo aplicações e também atuo na criação de conteúdo, produção audiovisual e cobertura de eventos, unindo tecnologia e criatividade em cada projeto.
                        </p>

                        <div className="mt-6 flex justify-center lg:justify-start gap-3">
                            <a href="#about" className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg shadow hover-bg-primary">
                                Sobre mim
                            </a>
                            <a href="#projects" className="inline-flex items-center px-6 py-3 border border-white/20 text-white rounded-lg">
                                Ver projetos
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;