import { createFileRoute } from "@tanstack/react-router"
import { useState, useEffect } from "react"
import { X, Globe, Mail, LayoutGrid, GitGraph } from "lucide-react"
import { useLanguage } from "../context/LanguageContext"

export const Route = createFileRoute("/ecosystem")({ component: EcosystemPage })

/* ── Social links with specific branding colors ────────────────────────── */
const vnfLinks = [
  {
    id: "website",
    label: "WEBSITE",
    href: "https://www.vnfoods.vn",
    color: "#ffffff",
    hoverBg: "rgba(255,255,255,0.2)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
        <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    id: "linkedin",
    label: "LINKEDIN",
    href: "https://www.linkedin.com/company/vnf/",
    color: "#0077b5",
    hoverBg: "#0077b5",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    id: "facebook",
    label: "FACEBOOK",
    href: "https://www.facebook.com/vnfoods.vn",
    color: "#1877f2",
    hoverBg: "#1877f2",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    id: "youtube",
    label: "YOUTUBE",
    href: "https://youtube.com/@vietnamfood.offical",
    color: "#ff0000",
    hoverBg: "#ff0000",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-1.96C18.88 4 12 4 12 4s-6.88 0-8.6.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.94 1.95C5.12 20 12 20 12 20s6.88 0 8.6-.47a2.78 2.78 0 0 0 1.94-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
      </svg>
    ),
  },
  {
    id: "tiktok",
    label: "TIKTOK",
    href: "https://www.tiktok.com/@vietnamfood.mediachannel",
    color: "#ffffff",
    hoverBg: "#000000",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15.2 6.34 6.34 0 0 0 9.49 21.54a6.34 6.34 0 0 0 6.34-6.34V9.02a8.17 8.17 0 0 0 4.78 1.53V7.12a4.85 4.85 0 0 1-1.02-.43z" />
      </svg>
    ),
  },
  {
    id: "email",
    label: "EMAIL",
    href: "mailto:sales@vnfoods.vn",
    color: "#ffffff",
    hoverBg: "#1a3580",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
]

/* ── Tree mode data ──────────────────────────────────────────────────────── */
const treeData = {
  id: "vnf",
  name: "Vietnam Food",
  logo: "/logo_dark.png",
  color: "#1f5da0",
  description: "VNF specializes in upcycling shrimp co-products into high-value ingredients across multiple industries instead of treating them as waste.",
  social: { website: "https://vnfoods.vn", linkedin: "https://www.linkedin.com/company/vnf/", facebook: "https://www.facebook.com/vnfoods.vn", youtube: "https://youtube.com/@vietnamfood.offical", email: "mailto:sales@vnfoods.vn" },
  children: [
    {
      id: "agri",
      name: "Agriculture",
      color: "#2d7d46",
      logo: "/logo_dark.png",
      children: [
        { id: "vuon-xanh", name: "Vườn Xanh Việt Nam", logo: "/ecosystem/vuon_xanh.jpg", color: "#2d7d46", href: "https://www.facebook.com/VNFVuonXanh" },
        { id: "vat-nuoi", name: "Vật Nuôi Vui Khoẻ", logo: "/ecosystem/vat_nuoi.jpg", color: "#15803d", href: "https://www.facebook.com/VNFVatnuoivuikhoe" },
      ],
    },
    {
      id: "food-pet",
      name: "Food & Pet",
      color: "#be185d",
      logo: "/logo_dark.png",
      children: [
        { id: "tom4pet", name: "Tôm4Pet", logo: "/ecosystem/tom4pet.jpg", color: "#be185d", href: "https://www.facebook.com/VNFTom4Pet/" },
        { id: "tom-yummy", name: "Tôm Yummy", logo: "/ecosystem/tom_yummy.jpg", color: "#d97706", href: "https://www.facebook.com/VNFTomYummy/" },
      ],
    },
    {
      id: "industry",
      name: "Industry",
      color: "#0e7490",
      logo: "/logo_dark.png",
      children: [
        { id: "bio-in-shell", name: "Bio In Shell", logo: "/ecosystem/bio_in_shell.jpg", color: "#0e7490", href: "https://www.facebook.com/VNFBioInShell" },
        { id: "retriv", name: "RetriV", logo: "/ecosystem/retriv.jpg", color: "#0284c7", href: "https://www.facebook.com/retrivvnf" },
      ],
    },
    {
      id: "factory",
      name: "Factories",
      color: "#1e3a8a",
      logo: "/logo_dark.png",
      children: [
        { id: "vnf-cm", name: "Nhà máy Cà Mau", logo: "/ecosystem/vnf_cm.jpg", color: "#1e40af", href: "https://www.facebook.com/profile.php?id=100063618936458" },
        { id: "vnf-hg", name: "Nhà máy Hậu Giang", logo: "/ecosystem/vnf_hg.jpg", color: "#1e3a8a", href: "https://www.facebook.com/vnf.haugiang" },
      ],
    },
  ],
}

/* ── Components ──────────────────────────────────────────────────────────── */
function DetailPanel({ node, onClose }: { node: any; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.7)", backdropFilter: "blur(20px)" }} onClick={onClose}
    >
      <div className="w-full max-w-2xl rounded-[40px] overflow-hidden shadow-2xl relative border border-white/20 animate-in zoom-in duration-300"
        style={{ background: "linear-gradient(135deg, #1f5da0 0%, #1a3580 100%)" }} onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-8 right-8 z-10 bg-white/10 hover:bg-white/20 text-white rounded-full p-2.5 transition-all hover:rotate-90">
          <X className="w-6 h-6" />
        </button>
        <div className="p-12 space-y-8">
          <div className="flex items-center gap-8">
            <div className="w-24 h-24 rounded-3xl bg-white/15 flex items-center justify-center border border-white/20 shrink-0">
              <img src={node.logo} alt="" className="h-14 w-auto brightness-0 invert" />
            </div>
            <h2 style={{ fontFamily: "'Montserrat', sans-serif" }} className="text-4xl font-black text-white italic">{node.name}</h2>
          </div>
          <p style={{ fontFamily: "'Montserrat', sans-serif" }} className="text-white/85 leading-relaxed text-xl italic font-medium">{node.description}</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {Object.entries(node.social || {}).map(([key, url]: [string, any]) => (
              <a key={key} href={url} target={key !== "email" ? "_blank" : undefined} rel="noopener noreferrer"
                className="px-6 py-4 bg-white/10 border-2 border-white/10 text-white rounded-2xl text-[10px] font-bold uppercase tracking-widest hover:bg-white/20 hover:border-white transition-all flex items-center justify-center gap-2"
              >
                {key === "website" && <Globe className="w-4 h-4" />}
                {key === "email" && <Mail className="w-4 h-4" />}
                {key}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function TreeNode({ node, onSelect, level = 0 }: { node: any; onSelect: (n: any) => void; level?: number }) {
  const isRoot = level === 0
  const hasChildren = node.children && node.children.length > 0
  const handleClick = () => { if (isRoot) onSelect(node); else if (node.href) window.open(node.href, "_blank", "noopener,noreferrer") }

  return (
    <div className="flex flex-col items-center">
      <button onClick={handleClick}
        className={`relative z-10 flex flex-col items-center gap-1.5 rounded-2xl border-2 transition-all duration-300 hover:shadow-2xl active:scale-95 cursor-pointer bg-white ${isRoot ? "px-8 py-5 min-w-[180px] border-[#1f5da0]" : "px-3 py-3 min-w-[130px] h-[90px] border-gray-100 shadow-lg"}`}
        style={!isRoot ? { borderColor: node.color } : {}}
      >
        <div className={`rounded-xl overflow-hidden flex items-center justify-center bg-white ${isRoot ? "w-14 h-14" : "w-10 h-10 shrink-0"}`}>
          <img src={node.logo} alt="" className="w-full h-full object-contain" />
        </div>
        <div
          style={{ fontFamily: "'Montserrat', sans-serif" }}
          className={`font-black italic tracking-tighter text-center leading-none ${isRoot ? "text-lg text-[#1f5da0]" : "text-[11px] text-[#1f5da0]"}`}
        >
          {node.name}
        </div>
      </button>

      {hasChildren && (
        <div className="flex flex-col items-center w-full">
          <div className="w-0.5 h-8 bg-gray-300/40" />
          <div className="flex px-1">
            {node.children.map((child: any, idx: number) => (
              <div key={child.id} className="relative flex flex-col items-center">
                <div className={`absolute top-0 h-0.5 bg-gray-300/40 ${node.children.length === 1 ? "hidden" : ""} ${idx === 0 ? "left-1/2 right-0" : ""} ${idx === node.children.length - 1 ? "left-0 right-1/2" : ""} ${idx > 0 && idx < node.children.length - 1 ? "left-0 right-0" : ""}`} />
                <div className="w-0.5 h-8 bg-gray-300/40" />
                <div className="px-1.5">
                  <TreeNode node={child} onSelect={onSelect} level={level + 1} />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}


/* ── Page ────────────────────────────────────────────────────────────────── */
function EcosystemPage() {
  const { t, setLanguage } = useLanguage()
  const [viewMode, setViewMode] = useState<'list' | 'tree'>('list')
  const [showRootDetail, setShowRootDetail] = useState(false)

  useEffect(() => {
    // Force English when entering Ecosystem
    setLanguage('en');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('reveal-active') });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [viewMode]);

  return (
    <div className="min-h-screen relative" style={{
      fontFamily: "'Montserrat', sans-serif",
      backgroundImage: "url('/ecosystem/background_ecosystem.png')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    }}>

      {/* ════════ Hero ════════ */}
      <section className="relative w-full overflow-hidden">
        <img
          src="/ecosystem/header_ecosystem.png"
          alt="Ecosystem Header"
          className="w-full h-auto object-cover reveal scale-in"
        />
      </section>

      {/* ════════ About ════════ */}
      <section className="py-24 px-[6%] relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-20 items-center">
          <div className="lg:col-span-3 reveal">
            <div className="max-w-xs">
              <h2 className="text-[clamp(32px,3vw,48px)] font-black text-white italic leading-none mb-8">{t('about.title')}</h2>
              <p className="text-sm leading-relaxed text-white/90 italic">
                {t('about.description')}
              </p>
            </div>
          </div>
          <div className="lg:col-span-9 rounded-[30px] overflow-hidden border-4 border-white/20 shadow-3xl aspect-video bg-black reveal slide-right group">
            <video src="https://minio-tuan.ls01.vnfoods.vn/ecosystem/ASL%20Master%20Intro_Voice%20EN-Sub%20EN.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=6FnBbZwM4eqdmwd8axF4%2F20260327%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260327T070705Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=c76eb441bb6cdebcb44e8e2fdae5b094c0df78c287ed166cc9c65ac9ad2efacc"
              controls autoPlay muted loop className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700" />
          </div>
        </div>

        {/* Social Links Colored & Hover */}
        <div className="mt-16 flex flex-wrap justify-center gap-4 reveal">
          {vnfLinks.map(link => (
            <a key={link.id} href={link.href} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 border-2 border-white/20 rounded-full text-white font-bold tracking-widest text-xs transition-all duration-300 hover:scale-110"
              style={{ '--hover-bg': link.hoverBg } as any}
            >
              <span className="transition-colors group-hover:text-white" style={{ color: link.color }}>{link.icon}</span>
              {link.label}
            </a>
          ))}
        </div>
      </section>

      {/* ════════ Ecosystem ════════ */}
      <section className="py-24 px-[6%]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-[clamp(40px,5vw,72px)] font-black text-white italic mb-16 reveal scale-in uppercase">{t('ecosystem.title')}</h2>

          <div className="flex justify-center mb-16 reveal">
            <div className="bg-white/10 p-2 rounded-full border border-white/20 flex gap-2 backdrop-blur-xl">
              <button onClick={() => setViewMode('list')} className={`px-8 py-3 rounded-full font-bold text-xs tracking-widest transition-all flex items-center gap-3 ${viewMode === 'list' ? 'bg-white text-[#1a3580] shadow-xl' : 'text-white hover:bg-white/10'}`}>
                <LayoutGrid className="w-4 h-4" /> {t('ecosystem.list_view')}
              </button>
              <button onClick={() => setViewMode('tree')} className={`hidden xl:flex px-8 py-3 rounded-full font-bold text-xs tracking-widest transition-all items-center gap-3 ${viewMode === 'tree' ? 'bg-white text-[#1a3580] shadow-xl' : 'text-white hover:bg-white/10'}`}>
                <GitGraph className="w-4 h-4" /> {t('ecosystem.tree_view')}
              </button>
            </div>
          </div>

          <div className="min-h-[600px] reveal">
            {viewMode === 'list' ? (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {ecosystemList.map((item, idx) => (
                  <a key={item.id} href={item.href} target="_blank" rel="noopener noreferrer"
                    className="flex flex-col items-center p-8 bg-white/10 border-2 border-white/10 rounded-[32px] hover:bg-white/20 hover:border-white transition-all group reveal-item"
                    style={{ transitionDelay: `${idx * 100}ms` }}
                  >
                    <div className="w-28 h-28 rounded-2xl overflow-hidden bg-white/20 border-2 border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <img src={item.logo} alt="" className="w-full h-full object-cover" />
                    </div>
                    <div className="text-center">
                      <div className="text-white font-bold text-lg leading-tight mb-2 tracking-tighter italic">{item.name}</div>
                    </div>
                  </a>
                ))}
              </div>
            ) : (
              <div className="hidden xl:flex w-full justify-center p-4 overflow-hidden">
                <div className="tree-container transition-all duration-500">
                  <TreeNode node={treeData} onSelect={() => setShowRootDetail(true)} />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {showRootDetail && <DetailPanel node={treeData} onClose={() => setShowRootDetail(false)} />}

      <style>{`
        .scrollbar-none::-webkit-scrollbar { display: none; }
        .reveal { opacity: 0; transform: translateY(30px); transition: all 1s cubic-bezier(0.2, 0.8, 0.2, 1); }
        .reveal-active { opacity: 1 !important; transform: translateY(0) !important; }
        .slide-right { transform: translateX(50px); }
        .reveal-active.slide-right { transform: translateX(0) !important; }
        .scale-in { transform: scale(0.9); }
        .reveal-active.scale-in { transform: scale(1) !important; }
        
        .eco-social-btn:hover { background-color: var(--hover-bg) !important; border-color: transparent !important; }

        @keyframes bounce-slow { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-15px); } }
        @keyframes pulse-slow { 0%, 100% { opacity: 1; } 50% { opacity: 0.7; } }
        @keyframes float { 0% { transform: rotate(0deg) translate(0, 0); } 33% { transform: rotate(2deg) translate(5px, -5px); } 66% { transform: rotate(-2deg) translate(-5px, 5px); } 100% { transform: rotate(0deg) translate(0, 0); } }
        @keyframes spin-veryslow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        
        .animate-bounce-slow { animation: bounce-slow 4s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 3s ease-in-out infinite; }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-spin-veryslow { animation: spin-veryslow 20s linear infinite; }
      `}</style>
    </div>
  )
}

const ecosystemList = [
  { id: "vuon-xanh", name: "Vườn Xanh Việt Nam | Horticulture", logo: "/ecosystem/vuon_xanh.jpg", href: "https://www.facebook.com/VNFVuonXanh" },
  { id: "vat-nuoi", name: "Vật Nuôi Vui Khoẻ | Animal Farming", logo: "/ecosystem/vat_nuoi.jpg", href: "https://www.facebook.com/VNFVatnuoivuikhoe" },
  { id: "tom4pet", name: "Tôm4Pet | Pet Food & Pet Care", logo: "/ecosystem/tom4pet.jpg", href: "https://www.facebook.com/VNFTom4Pet/" },
  { id: "tom-yummy", name: "Tôm Yummy | Food Ingredient", logo: "/ecosystem/tom_yummy.jpg", href: "https://www.facebook.com/VNFTomYummy/" },
  { id: "bio-in-shell", name: "Bio In Shell | Industry", logo: "/ecosystem/bio_in_shell.jpg", href: "https://www.facebook.com/VNFBioInShell" },
  { id: "retriv", name: "RetriV | Nutrient Recovery", logo: "/ecosystem/retriv.jpg", href: "https://www.facebook.com/retrivvnf" },
  { id: "vnf-cm", name: "Nhà máy Cà Mau | Vietnam Food Ca Mau", logo: "/ecosystem/vnf_cm.jpg", href: "https://www.facebook.com/profile.php?id=100063618936458" },
  { id: "vnf-hg", name: "Nhà máy Hậu Giang | Vietnam Food Hau Giang", logo: "/ecosystem/vnf_hg.jpg", href: "https://www.facebook.com/vnf.haugiang" },
]
