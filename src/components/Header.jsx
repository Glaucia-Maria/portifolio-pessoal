import { useState } from "react";
import {Menu, X} from "lucide-react"

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false); //setou dois valores pra falso

    const menuItems = [ //uma lista de dict
        {name: 'Formação', href: '#formacao'},
        {name: 'Skills', href: '#skills'},
        {name: 'Projetos', href: '#projetos'},
        {name: 'Experiência', href: '#experiencia'},
        {name: 'Contato', href: '#contato'},
    ]

    const scrollToSection = (href) => { //percorre a lista --> parâmetro
        setIsMenuOpen(false);
        document.querySelector(href)?.scrollIntoView({
            behavior: 'smooth'
        })
    }

    return (
    <header className="relative z-50 px-5 pt-5 pb-2 sm:px-8 lg:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-[#0f2235]/70 px-4 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.18)] backdrop-blur-sm sm:px-5">
            <div className="text-2xl font-black tracking-[-0.05em] text-white sm:text-3xl">
                PORTIFÓLIO<span className="text-primary">.</span>
            </div>

            <nav className="hidden items-center gap-10 md:flex">
                <ul className="flex items-center gap-8">
                    {menuItems.map((item) => (
                        <li key={item.name}>
                            <button onClick={() => scrollToSection(item.href)} className="text-sm font-medium text-gray-300 transition-all duration-300 hover:text-white">
                                {item.name}
                            </button>
                        </li>
                    ))}
                </ul>
                <button onClick={() => scrollToSection('#contato')} className="rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-[0_10px_25px_rgba(239,139,123,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_12px_28px_rgba(239,139,123,0.38)]">
                    Entre em contato
                </button>
            </nav>

            <button className="inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/5 p-2 text-white transition-all duration-300 hover:border-[#ef8b7b]/60 hover:bg-[#ef8b7b]/10 md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <X size={28}/> : <Menu size={28}/>}
            </button>
        </div>
        {isMenuOpen && (
            <div className="fixed inset-0 bg-black/60 backdrop-blur-sm md:hidden" onClick={() => setIsMenuOpen(false)}>
            </div>
        )}
        <div className={`fixed right-0 top-0 z-50 flex h-full w-80 flex-col bg-[#111827] p-8 transition-transform duration-300 md:hidden ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
            <button className="mb-10 self-end text-white" onClick={() => setIsMenuOpen(false)}>
                <X size={30}/>
            </button>
            <ul className="flex flex-col gap-8">
                {menuItems.map((item) => (
                    <li key={item.name}>
                        <button onClick={() => scrollToSection(item.href)} className="text-left text-xl font-semibold text-gray-300 transition-colors hover:text-white">
                            {item.name}
                        </button>
                    </li>
                ))}
                <li className="pt-6">
                    <button onClick={() => scrollToSection('#contato')} className="w-full rounded-xl bg-primary px-5 py-4 text-lg font-bold text-white shadow-[0_10px_25px_rgba(239,139,123,0.25)] transition-all duration-300 hover:brightness-110">
                        Entre em contato
                    </button>
                </li>
            </ul>
        </div>
    </header>
  )
}

export default Header