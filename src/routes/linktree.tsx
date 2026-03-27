import { createFileRoute } from "@tanstack/react-router"
import { useState } from "react"
import { X, Globe, Mail } from "lucide-react"

export const Route = createFileRoute("/linktree")({ component: LinktreePage })

/* ─── Data ──────────────────────────────────────────────────────────────── */
const treeData = {
  id: "vnf",
  name: "Vietnam Food",
  logo: "/logo_dark.png",
  color: "#1f5da0",
  description: "VNF specializes in upcycling shrimp co-products into high-value ingredients.",
  social: { website: "https://vnfoods.vn", email: "mailto:sales@vnfoods.vn" },
  children: [
    {
      id: "agri",
      name: "Agriculture",
      color: "#2d7d46",
      logo: "/logo_dark.png",
      children: [
        {
          id: "vuon-xanh",
          name: "Vươn Xanh Việt Nam | Horticulture",
          logo: "/ecosystem/vuon_xanh.jpg",
          color: "#2d7d46",
          description: "Vươn Xanh Việt Nam cung cấp phân bón sinh học và giải pháp trồng trọt từ phụ phẩm tôm.",
          social: { website: "https://vuonxanh.vnfoods.vn", email: "mailto:vuonxanh@vnfoods.vn" },
        },
        {
          id: "vat-nuoi",
          name: "Vật Nuôi Vui Khoẻ | Animal Farming",
          logo: "/ecosystem/vat_nuoi.jpg",
          color: "#15803d",
          description: "Vật Nuôi Vui Khoẻ cung cấp thức ăn và dinh dưỡng chăn nuôi từ nguồn phụ phẩm sạch.",
          social: { website: "https://vatnuoi.vnfoods.vn", email: "mailto:vatnuoi@vnfoods.vn" },
        },
      ],
    },
    {
      id: "food-pet",
      name: "Food & Pet",
      color: "#be185d",
      logo: "/logo_dark.png",
      children: [
        {
          id: "tom4pet",
          name: "Tôm4Pet | Pet Food & Pet Care",
          logo: "/ecosystem/tom4pet.jpg",
          color: "#be185d",
          description: "Tôm4Pet là thương hiệu thức ăn thú cưng cao cấp, giàu protein từ tôm.",
          social: { website: "https://tom4pet.vnfoods.vn", email: "mailto:tom4pet@vnfoods.vn" },
        },
        {
          id: "tom-yummy",
          name: "Tôm Yummy | Food Ingredient",
          logo: "/ecosystem/tom_yummy.jpg",
          color: "#d97706",
          description: "Tôm Yummy cung cấp thành phần thực phẩm chế biến từ tôm chất lượng cao.",
          social: { website: "https://tomyummy.vnfoods.vn", email: "mailto:tomyummy@vnfoods.vn" },
        },
      ],
    },
    {
      id: "industry",
      name: "Industry",
      color: "#0e7490",
      logo: "/logo_dark.png",
      children: [
        {
          id: "bio-in-shell",
          name: "Bio In Shell | Industry",
          logo: "/ecosystem/bio_in_shell.jpg",
          color: "#0e7490",
          description: "Bio In Shell khai thác tiềm năng vỏ tôm cao cấp.",
          social: { website: "https://bioinshell.vnfoods.vn", email: "mailto:bioinshell@vnfoods.vn" },
        },
        {
          id: "retriv",
          name: "RetriV | Nutrient Recovery",
          logo: "/ecosystem/retriv.jpg",
          color: "#0284c7",
          description: "RetriV tập trung vào các giải pháp thu hồi dinh dưỡng.",
          social: { website: "https://vnfoods.vn", email: "mailto:info@vnfoods.vn" },
        },
      ],
    },
    {
      id: "factory",
      name: "Factories",
      color: "#1e3a8a",
      logo: "/logo_dark.png",
      children: [
        {
          id: "vnf-cm",
          name: "Nhà máy Cà Mau | Ca Mau",
          logo: "/ecosystem/vnf_cm.jpg",
          color: "#1e40af",
          description: "Nhà máy VNF tại Cà Mau là cơ sở sản xuất chiến lược.",
          social: { website: "https://vnfoods.vn", email: "mailto:camau@vnfoods.vn" },
        },
        {
          id: "vnf-hg",
          name: "Nhà máy Hậu Giang | Hau Giang",
          logo: "/ecosystem/vnf_hg.jpg",
          color: "#1e3a8a",
          description: "Nhà máy VNF tại Hậu Giang là trung tâm R&D hiện đại.",
          social: { website: "https://vnfoods.vn", email: "mailto:haugiang@vnfoods.vn" },
        },
      ],
    },
  ],
}

/* ─── Types ──────────────────────────────────────────────────────────────── */
type Node = {
  id: string
  name: string
  logo: string
  color: string
  description: string
  social: Record<string, string>
  children?: Node[]
}

/* ─── Detail Panel ───────────────────────────────────────────────────────── */
function DetailPanel({ node, onClose }: { node: Node; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.55)", backdropFilter: "blur(8px)" }}
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl relative"
        style={{ background: node.color }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-white/20 hover:bg-white/30 text-white rounded-full p-2 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-8 space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-xl bg-white/15 flex items-center justify-center border border-white/20 shrink-0">
              <img src={node.logo} alt="" className="h-10 w-auto brightness-0 invert" />
            </div>
            <h2 className="text-2xl font-bold text-white">{node.name.split('|')[0]}</h2>
          </div>

          <p className="text-white/80 leading-relaxed text-sm">{node.description}</p>

          <div className="flex flex-wrap gap-3 pt-2">
            {Object.entries(node.social).map(([key, url]) => (
              <a
                key={key}
                href={url}
                target={key !== "email" ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="px-5 py-2 border-2 border-white/40 text-white rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white/20 transition-colors flex items-center gap-1.5"
              >
                {key === "website" && <Globe className="w-3 h-3" />}
                {key === "email" && <Mail className="w-3 h-3" />}
                {key}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

/* ─── Tree Node ──────────────────────────────────────────────────────────── */
function TreeNode({ node, onSelect, level = 0 }: { node: any; onSelect: (n: any) => void; level?: number }) {
  const isRoot = level === 0
  const hasChildren = node.children && node.children.length > 0

  return (
    <div className="flex flex-col items-center">
      {/* Node Card */}
      <button
        onClick={() => onSelect(node)}
        className={`
          relative z-10 flex flex-col items-center gap-2 rounded-2xl border-2 transition-all duration-300
          hover:shadow-xl active:scale-95 cursor-pointer bg-white
          ${isRoot ? "px-8 py-4 min-w-[160px] border-[#1f5da0]" : "px-3 py-3 min-w-[130px] h-[100px] border-gray-100 shadow-sm"}
        `}
        style={!isRoot ? { borderColor: node.color } : {}}
      >
        <div className={`rounded-xl overflow-hidden flex items-center justify-center bg-white ${isRoot ? "w-14 h-14" : "w-10 h-10 shrink-0"}`}>
          <img src={node.logo} alt="" className="w-full h-full object-contain" />
        </div>
        <div className="text-center flex-grow flex flex-col justify-center">
          <div className={`font-black tracking-tight leading-none ${isRoot ? "text-base text-[#1f5da0]" : "text-[10px] text-[#1f5da0]"}`}>
            {node.name.split('|')[0]}
          </div>
          {node.name.includes('|') && (
            <div className="text-[9px] text-gray-400 font-bold uppercase tracking-widest mt-1">
              {node.name.split('|')[1]}
            </div>
          )}
        </div>
      </button>

      {/* Connectors & Children */}
      {hasChildren && (
        <div className="flex flex-col items-center w-full">
          {/* Stem down from parent */}
          <div className="w-0.5 h-10 bg-gray-300" />

          {/* Children container with horizontal line logic */}
          <div className="flex px-4">
            {node.children.map((child: any, idx: number) => (
              <div key={child.id} className="relative flex flex-col items-center">
                {/* Horizontal line logic (Gold standard) */}
                <div
                  className={`absolute top-0 h-0.5 bg-gray-300 
                    ${node.children.length === 1 ? "hidden" : ""}
                    ${idx === 0 ? "left-1/2 right-0" : ""}
                    ${idx === node.children.length - 1 ? "left-0 right-1/2" : ""}
                    ${idx > 0 && idx < node.children.length - 1 ? "left-0 right-0" : ""}
                  `}
                />
                {/* Stem down to child */}
                <div className="w-0.5 h-10 bg-gray-300" />
                <div className="px-2">
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

/* ─── Page ───────────────────────────────────────────────────────────────── */
function LinktreePage() {
  const [selected, setSelected] = useState<any | null>(null)

  return (
    <div className="min-h-screen flex flex-col items-center py-20 px-4 bg-[#f9fafb]">
      {/* Header */}
      <div className="mb-24 text-center">
        <h1 className="text-3xl font-black text-[#1f5da0] mb-2 tracking-tighter uppercase tracking-[0.2em]">VNF Ecosystem</h1>
        <p className="text-gray-400 text-[10px] font-black uppercase tracking-[0.4em]">Sustaining Our Future</p>
      </div>

      {/* The Tree - Wide Horizontal Org Chart layout */}
      <div className="w-full flex justify-center overflow-x-auto pb-40 scrollbar-hide px-6">
        <div className="min-w-max flex justify-center origin-top scale-[0.8] md:scale-[0.9] lg:scale-100 transition-transform duration-500">
          <TreeNode node={treeData} onSelect={setSelected} />
        </div>
      </div>

      {/* Footer */}
      <div className="mt-20 text-center opacity-30 select-none pb-20">
        <p className="text-[#1f5da0] text-[9px] font-black uppercase tracking-[0.6em]">
          Vietnam Food Joint Stock Company
        </p>
      </div>

      {selected && <DetailPanel node={selected} onClose={() => setSelected(null)} />}
    </div>
  )
}
