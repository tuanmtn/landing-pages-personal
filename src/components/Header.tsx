import { Link } from "@tanstack/react-router"
import { Phone, ChevronDown } from "lucide-react"

export default function Header() {
  return (
    <header className="w-full flex flex-col font-sans">
      {/* Top Bar */}
      <div className="bg-[#1f5da0] text-white py-2 px-4 md:px-20 flex justify-end items-center gap-6 text-sm">
        <div className="flex items-center gap-2">
          <Phone className="w-4 h-4" />
          <span>Sales Hotline: (+84) 909.802.863</span>
        </div>
        <div className="flex items-center gap-1 cursor-pointer">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Vietnam.svg" 
            alt="VN Flag" 
            className="w-5 h-auto shadow-sm"
          />
        </div>
      </div>

      {/* Main Bar */}
      <div className="bg-white py-4 px-4 md:px-20 flex justify-between items-center shadow-sm">
        <div className="flex-shrink-0">
          <Link to="/">
            <img src="/logo_dark.png" alt="VNF Logo" className="h-16 w-auto" />
          </Link>
        </div>
        
        <nav className="hidden lg:flex items-center gap-8 text-[15px] font-bold text-gray-600 uppercase tracking-wide">
          <div className="flex items-center gap-1 cursor-pointer group hover:text-[#1f5da0] transition-colors">
            <span>About Us</span>
            <ChevronDown className="w-4 h-4" />
          </div>
          <div className="flex items-center gap-1 cursor-pointer group hover:text-[#1f5da0] transition-colors">
            <span>Products</span>
            <ChevronDown className="w-4 h-4" />
          </div>
          <div className="flex items-center gap-1 cursor-pointer group hover:text-[#1f5da0] transition-colors">
            <span>Advantages</span>
            <ChevronDown className="w-4 h-4" />
          </div>
          <div className="flex items-center gap-1 cursor-pointer group hover:text-[#1f5da0] transition-colors">
            <span>News & Media</span>
          </div>
          <div className="flex items-center gap-1 cursor-pointer group hover:text-[#1f5da0] transition-colors">
            <span>Contact</span>
          </div>
        </nav>

        {/* Mobile menu toggle could go here */}
      </div>
    </header>
  )
}
