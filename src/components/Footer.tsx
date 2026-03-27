import { Phone, Mail, MapPinned } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full bg-[#113f7c] text-[#e0e0e0] font-sans pt-16 pb-8 px-4 md:px-20 relative overflow-hidden">
      {/* Optional: Add a world map background pattern if available */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/simple-world-map.png')]"></div>
      
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto">
        {/* Company Info & Logo */}
        <div className="col-span-1 lg:col-span-2 space-y-8">
          <div className="flex flex-col gap-2">
            <img src="/logo_dark.png" alt="VNF Logo" className="h-20 w-auto brightness-0 invert" />
            <p className="text-sm font-semibold text-white tracking-widest mt-2 uppercase">vietnam food<br/>SUSTAINING OUR FUTURE</p>
          </div>

          <div className="space-y-4 text-sm mt-8">
            <div className="flex flex-col gap-2">
              <span className="font-bold text-white text-base">Contact Sales:</span>
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-1 text-white" />
                <div className="flex flex-col">
                  <span>(+84) 28 3911 2183 (ext.204 for BN; ext.301 for FI&BP)</span>
                  <span>(+84) 909.802.863 (Mobile, Viber, Zalo, WhatsApp, FB Messenger)</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-white" />
                <span>sales@vnfoods.vn</span>
              </div>
            </div>

            <div className="space-y-4 mt-6">
              <div className="flex items-start gap-3">
                <MapPinned className="w-5 h-5 mt-1 text-white" />
                <div className="flex flex-col">
                  <span className="font-bold text-white">Headquarters:</span>
                  <span>2A Phan Ke Binh, Tan Dinh Ward, Ho Chi Minh City, Viet Nam</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPinned className="w-5 h-5 mt-1 text-white" />
                <div className="flex flex-col">
                  <span className="font-bold text-white">R&D Center:</span>
                  <span>82/2/29 Dinh Bo Linh, Binh Thanh Ward, Ho Chi Minh City , Viet Nam</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPinned className="w-5 h-5 mt-1 text-white" />
                <div className="flex flex-col">
                  <span className="font-bold text-white">Ca Mau Factory:</span>
                  <span>Hoa Trung Industrial Zone, Hoa Trung Hamlet, Luong The Tran Commune, Ca Mau Province, Viet Nam</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPinned className="w-5 h-5 mt-1 text-white" />
                <div className="flex flex-col">
                  <span className="font-bold text-white">Hau Giang Factory:</span>
                  <span>Song Hau Industrial Park, Chau Thanh Commune, Can Tho City, Viet Nam</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 mt-8 font-bold text-xs">
            <span className="cursor-pointer hover:text-white transition-colors">Facebook</span>
            <span className="cursor-pointer hover:text-white transition-colors">Youtube</span>
            <span className="cursor-pointer hover:text-white transition-colors">Linkedin</span>
          </div>
        </div>

        {/* Information Table 1 */}
        <div className="flex flex-col gap-6">
          <h3 className="text-white font-bold text-lg uppercase tracking-wider relative after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-16 after:h-[2px] after:bg-gray-400">Information</h3>
          <ul className="space-y-3 mt-4 text-sm font-medium">
            <li className="cursor-pointer hover:text-white hover:translate-x-1 transition-all">BioPolymers Products</li>
            <li className="cursor-pointer hover:text-white hover:translate-x-1 transition-all">Food Ingredients Products</li>
            <li className="cursor-pointer hover:text-white hover:translate-x-1 transition-all">BioNutrients Products</li>
            <li className="cursor-pointer hover:text-white hover:translate-x-1 transition-all">About Us</li>
            <li className="cursor-pointer hover:text-white hover:translate-x-1 transition-all">Privacy Policy</li>
          </ul>
        </div>

        {/* Information Table 2 */}
        <div className="flex flex-col gap-6">
          <h3 className="text-white font-bold text-lg uppercase tracking-wider relative after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-16 after:h-[2px] after:bg-gray-400">THÔNG TIN</h3>
          <ul className="space-y-3 mt-4 text-sm font-medium">
            <li className="cursor-pointer hover:text-white hover:translate-x-1 transition-all">BioPolymers Products</li>
            <li className="cursor-pointer hover:text-white hover:translate-x-1 transition-all">Food Ingredients Products</li>
            <li className="cursor-pointer hover:text-white hover:translate-x-1 transition-all">BioNutrients Products</li>
            <li className="cursor-pointer hover:text-white hover:translate-x-1 transition-all">About Us</li>
            <li className="cursor-pointer hover:text-white hover:translate-x-1 transition-all">Privacy Policy</li>
          </ul>
          
          <div className="flex items-center gap-4 mt-8">
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Vietnam.svg" className="w-6 h-auto cursor-pointer shadow-sm border border-gray-100/10" alt="VN Flag" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_Kingdom.svg" className="w-6 h-auto cursor-pointer shadow-sm border border-gray-100/10" alt="UK Flag" />
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-20 pt-6 border-t border-white/10 text-center text-xs text-gray-400">
        <p>Copyright © 2020 Vietnam Food JSC. - All Rights Reserved.</p>
      </div>
    </footer>
  )
}
