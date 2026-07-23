import { useState } from "react";
import {Menu, X} from "lucide-react"

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false); //setou dois valores pra falso

    const menuItems = [ //uma lista de dict
        {name: 'Sobre mim', href: '#sobre'},
        {name: 'Formação', href: '#formacao'},
        {name: 'Skill', href: '#skills'},
        {name: 'Certificações', href: '#certificacoes'},
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
    <header className="relative z-50 px-6 py-7">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
            {/*logo*/}
            <div className="text-white text-3xl font-black">
                PORTIFÓLIO<span className="text-primary">.</span>
            </div>
            {/*Navigation*/}
            <nav className="hidden md:flex items-center gap-10">
                <ul className="flex gap-8">
                    {menuItems.map((item) => (
                        <li key={item.name}>
                            <button onClick={() => scrollToSection(item.href)} className="text-gray-300 hover:text-white text-base font-medium transition-colors">
                                {item.name}
                            </button>
                        </li>
                    ))}
                </ul>
                <button onClick={() => scrollToSection('#contato')} className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-lg text-base font-semibold transition-all">
                    Entre em contato
                </button>
            </nav>
            {/*menu mobile*/}
            <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <X size = {32}/> : <Menu size={32}/>}
            </button>
        </div>
        {isMenuOpen && (
            <div className="fixed inset-0 bg-black/60 backdrop-blur-sm md:hidden
            " onClick={() => setIsMenuOpen(false)}>
            </div>
        )}
        <div className={`fixed top-0 right-0 h-full w-80 bg-[#111827] z-50 transition-transform duration-300 md:hidden ${
            isMenuOpen ? 'translate-x-0' : 'translate-full'  
        } p-8 flex flex-col`}>
            <button className="self-end text-white mb-10" onClick={() => setIsMenuOpen(false)}>
                <X size={32}/>
            </button>
            <ul className="flex flex-col gap-8">
                {menuItems.map((item) =>(
                    <li key={item.name}>
                        <button onClick={() => scrollToSection(item.href)} className="text-white text-xl font-semibold hover:text-primary">

                        </button>
                    </li>
                ))}
            </ul>

        </div>
    </header>
  )
}

export default Header