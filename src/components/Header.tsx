import { Link } from "@tanstack/react-router"
import { Phone, LayoutGrid, Leaf } from "lucide-react"
import { useLanguage } from "../context/LanguageContext"

export default function Header() {
  const { language, setLanguage, t } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'vi' : 'en')
  }

  return (
    <header className="w-full flex flex-col font-sans border-b border-white/10 shadow-lg sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-[#1a3a8a] text-white/80 py-2 px-4 md:px-20 flex justify-end items-center gap-6 text-xs font-bold tracking-widest uppercase">
        <div className="flex items-center gap-2">
          <Phone className="w-3.5 h-3.5" />
          <span>{t('header.hotline')}: (+84) 909.802.863</span>
        </div>
        <button 
          onClick={toggleLanguage}
          className="flex items-center gap-2 hover:opacity-80 transition-opacity bg-white/10 px-3 py-1 rounded-full border border-white/5"
        >
          <img 
            src={language === 'en' ? "https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Vietnam.svg" : "https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg"} 
            alt="Flag" 
            className="w-4 h-auto shadow-sm"
          />
          <span className="text-[10px]">{language === 'en' ? 'VI' : 'EN'}</span>
        </button>
      </div>

      {/* Main Bar */}
      <div className="bg-[#214399] py-4 px-4 md:px-20 flex justify-between items-center">
        <div className="ml-[-8px]">
          <Link to="/">
            <img src="/logo_dark.png" alt="VNF Logo" className="h-10 w-auto brightness-0 invert" />
          </Link>
        </div>
        
        <nav className="hidden lg:flex items-center gap-10 text-[11px] font-black text-white italic uppercase tracking-widest">
          <Link to="/ecosystem" className="flex items-center gap-1.5 cursor-pointer group hover:text-white/70 transition-colors">
            <Leaf className="w-3.5 h-3.5" />
            <span>{t('header.ecosystem')}</span>
          </Link>
          <a href="https://chitosan-valley.vnfoods.vn/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 cursor-pointer group hover:text-white/70 transition-colors">
            <LayoutGrid className="w-3.5 h-3.5" />
            <span>{t('header.chitosan_hub')}</span>
          </a>
        </nav>
      </div>
    </header>
  )
}

