import { Phone, Mail, MapPin } from "lucide-react"
import { useLanguage } from "../context/LanguageContext"

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="w-full bg-[#1a3a8a] text-white/70 font-sans border-t border-white/10">
      <div className="px-4 md:px-20 pt-16 pb-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Brand Column */}
          <div className="lg:col-span-6 flex flex-col gap-8">
            <div>
              <img src="/logo_dark.png" alt="VNF Logo" className="h-10 w-auto brightness-0 invert mb-4" />
              <p className="text-[10px] text-white/40 tracking-[0.3em] uppercase italic font-bold">{t('footer.sustaining')}</p>
            </div>

            <div className="space-y-4 text-xs font-medium">
              <p className="text-white font-black italic uppercase text-[10px] tracking-widest mb-4 opacity-50">{t('footer.contact_sales')}</p>

              <a href="tel:+842839112183" className="flex items-start gap-3 hover:text-white transition-colors group">
                <Phone className="w-3.5 h-3.5 mt-0.5 opacity-50 shrink-0" />
                <div className="flex flex-col leading-relaxed italic">
                  <span>(+84) 28 3911 2183 (ext.204 for BN; ext.301 for FI&BP)</span>
                  <span>(+84) 909.802.863 (Mobile, Viber, Zalo, WhatsApp, FB Messenger)</span>
                </div>
              </a>

              <a href="mailto:sales@vnfoods.vn" className="flex items-center gap-3 hover:text-white transition-colors">
                <Mail className="w-3.5 h-3.5 opacity-50 shrink-0" />
                <span className="italic">sales@vnfoods.vn</span>
              </a>
            </div>
          </div>

          {/* Links columns */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <p className="text-white font-black italic uppercase text-[10px] tracking-widest opacity-50">{t('footer.information')}</p>
            <ul className="space-y-3 text-[11px] font-bold uppercase tracking-wider italic">
              {["BioPolymers Products", "Food Ingredients Products", "BioNutrients Products", "About Us", "Privacy Policy"].map(item => (
                <li key={item}>
                  <a href="#" className="hover:text-white transition-all duration-200 block">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <p className="text-white font-black italic uppercase text-[10px] tracking-widest opacity-50">{t('footer.locations')}</p>
            <div className="space-y-4 text-[10px] italic leading-relaxed">
              {[
                { label: "Headquarters", address: "2A Phan Ke Binh, Tan Dinh Ward, Ho Chi Minh City" },
                { label: "Ca Mau Factory", address: "Hoa Trung Industrial Zone, Luong The Tran Commune, Ca Mau" },
                { label: "Hau Giang Factory", address: "Song Hau Industrial Park, Chau Thanh Commune, Can Tho City" },
              ].map(({ label, address }) => (
                <div key={label} className="flex items-start gap-3">
                  <MapPin className="w-3.5 h-3.5 mt-0.5 opacity-30 shrink-0" />
                  <div>
                    <span className="text-white font-black uppercase">{label}: </span>
                    <span className="opacity-80 font-medium">{address}, Viet Nam</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5 px-4 md:px-20 py-8 bg-[#162a6d]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[10px] text-white/30 font-bold tracking-widest uppercase">{t('footer.copyright')}</p>
          <div className="flex items-center gap-8">
            <a href="https://facebook.com/vnfoods.vn" target="_blank" rel="noopener noreferrer"
              className="text-white/40 hover:text-white transition-all transform hover:scale-125" title="Facebook">
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a href="https://youtube.com/@vietnamfood.offical" target="_blank" rel="noopener noreferrer"
              className="text-white/40 hover:text-white transition-all transform hover:scale-125" title="Youtube">
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-1.96C18.88 4 12 4 12 4s-6.88 0-8.6.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.94 1.95C5.12 20 12 20 12 20s6.88 0 8.6-.47a2.78 2.78 0 0 0 1.94-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
                <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/company/vnf/" target="_blank" rel="noopener noreferrer"
              className="text-white/40 hover:text-white transition-all transform hover:scale-125" title="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
