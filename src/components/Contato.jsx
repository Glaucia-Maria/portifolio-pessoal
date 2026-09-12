import React from "react";
import { Mail, MessageCircleMore, Phone } from "lucide-react";

const email = "glauciamariagnf2@gmail.com";
const whatsappNumber = "5598987452972";

const contatoItems = [
  {
    title: "E-mail",
    value: email,
    href: `mailto:${email}`,
    icon: Mail,
    accent: "mailto",
  },
  {
    title: "WhatsApp",
    value: "+55 98 987452972",
    href: `https://wa.me/${whatsappNumber}`,
    icon: MessageCircleMore,
    accent: "whatsapp",
  },
];

const Contato = () => {
  return (
    <footer
      id="contato"
      className="relative bg-[#111827] py-16 sm:py-20"
      data-aos="fade-up"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8 md:px-12 lg:px-8">
        <div className="mb-10 border-t border-white/10 pt-8" />

        <div className="text-center">
          <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-[3.1rem]">
            ENTRE EM <span className="text-primary">CONTATO.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg">
            Vamos conversar? Estou aberta a novas oportunidades, projetos e conexões na área de tecnologia.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {contatoItems.map(({ title, value, href, icon: Icon }) => (
            <a
              key={title}
              href={href}
              target={title === "WhatsApp" ? "_blank" : undefined}
              rel={title === "WhatsApp" ? "noreferrer" : undefined}
              className="group rounded-2xl border border-white/10 bg-[#0f2235]/90 p-5 text-left shadow-[0_10px_30px_rgba(0,0,0,0.18)] transition duration-300 hover:-translate-y-1 hover:border-[#ef8b7b]/70 hover:brightness-110 sm:p-6"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-primary transition group-hover:border-[#ef8b7b]/60">
                  <Icon size={20} />
                </span>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                    {title}
                  </p>
                  <p className="mt-1 text-base font-medium text-white sm:text-lg">{value}</p>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-slate-400">
          <p>© 2026 Glaucia Maria</p>
          <p className="mt-1">Desenvolvedora de Software</p>
        </div>
      </div>
    </footer>
  );
};

export default Contato;
