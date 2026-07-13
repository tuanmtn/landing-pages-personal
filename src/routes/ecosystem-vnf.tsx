import { createFileRoute } from "@tanstack/react-router"
import { useEffect, useRef, useState } from "react"

export const Route = createFileRoute("/ecosystem-vnf")({ component: EcosystemVnfPage })

/* ── Media (uploaded to MinIO) ──────────────────────────────────────────── */
const MEDIA_BASE = "https://minio-tuan.ls01.vnfoods.vn/video-management/ecosystem-vnf"
const LOGO_BASE = "/ecosystem-vnf/logos"

const HERO_VIDEO = { vi: `${MEDIA_BASE}/vi_vnf.mp4`, en: `${MEDIA_BASE}/en_vnf.mp4` }
const HERO_POSTER = { vi: `${MEDIA_BASE}/vi_vnf.jpg`, en: `${MEDIA_BASE}/en_vnf.jpg` }

type Lang = "vi" | "en"

/* ── Static copy ─────────────────────────────────────────────────────────── */
const T = {
  vi: {
    navHome: "Trang chủ",
    navEcosystem: "Hệ sinh thái",
    brandId: "VIETNAM FOOD JSC",
    heroTitlePrefix: "Khám phá và kết nối cùng ",
    heroTitleAccent: "Hệ sinh thái VNF",
    heroTitleSuffix: "",
    heroLead1:
      "Vietnam Food (VNF) tiên phong chuyển hóa phụ phẩm tôm thành các nguyên liệu hoạt tính sinh học có giá trị. Với mô hình sản xuất độc quyền ứng dụng công nghệ sinh học theo định hướng sản xuất không chất thải (zero-waste), chúng tôi tối ưu hóa việc thu hồi dinh dưỡng và giảm thiểu các tác động môi trường.",
    heroLead2: "Từ các nguyên liệu này, chúng tôi phát triển nhiều ứng dụng khác nhau tạo nên Hệ sinh thái VNF.",
    ctaExplore: "Khám phá hệ sinh thái",
    ctaContact: "Liên hệ hợp tác",
    socialHead: "Kết nối & theo dõi VNF",
    socialWebsite: "Website",
    socialEmail: "Email",
    socialCaMau: "Nhà Máy Cà Mau",
    socialHauGiang: "Nhà Máy Hậu Giang",
    ecoEyebrow: "HỆ SINH THÁI VNF",
    ecoTitlePrefix: "Chào mừng bạn đến với",
    ecoTitleRest: "hệ sinh thái VNF – nơi kiến tạo các giải pháp hoạt tính sinh học",
    fbLink: "Xem Facebook",
    liLink: "Xem LinkedIn",
    followEyebrow: "KẾT NỐI CÙNG VNF",
    followText:
      "Theo dõi các kênh của Hệ sinh thái VNF để không bỏ lỡ những câu chuyện, giải pháp, và sáng kiến mới nhất của chúng tôi.",
    footSalesTitle: "LIÊN HỆ KINH DOANH",
    footSalesNote1: "(Bộ phận Kinh doanh: ext.204; Bộ phận FI&BP: ext.301)",
    footSalesNote2: "(Mobile, Viber, Zalo, WhatsApp, Facebook Messenger)",
    footHeadTitle: "TRỤ SỞ CHÍNH",
    footAddress: "2A Phan Kế Bính, Phường Tân Định, Thành phố Hồ Chí Minh, Việt Nam",
    footCopyright: "Copyright © 2026 Vietnam Food JSC. - Bảo lưu mọi quyền.",
  },
  en: {
    navHome: "Home",
    navEcosystem: "Ecosystem",
    brandId: "VIETNAM FOOD JSC",
    heroTitlePrefix: "Let's explore the ",
    heroTitleAccent: "VNF Ecosystem",
    heroTitleSuffix: "!",
    heroLead1:
      "Vietnam Food (VNF) is a pioneer in valorizing shrimp-byproducts into valuable bioactive ingredients. By applying proprietary biotechnological zero-waste production model, we maximize nutrient recovery and minimize environmental impacts.",
    heroLead2: "From these ingredients, we develop various applications that together form the VNF Ecosystem.",
    ctaExplore: "Explore the Ecosystem",
    ctaContact: "Get in touch",
    socialHead: "Connect & follow VNF",
    socialWebsite: "Website",
    socialEmail: "Email",
    socialCaMau: "Ca Mau Factory",
    socialHauGiang: "Hau Giang Factory",
    ecoEyebrow: "VNF ECOSYSTEM",
    ecoTitlePrefix: "Welcome to the",
    ecoTitleRest: "VNF Ecosystem, where bioactive innovation begins",
    fbLink: "Visit Facebook",
    liLink: "Visit LinkedIn",
    followEyebrow: "STAY CONNECTED",
    followText: "Follow the VNF Ecosystem channels to keep up with our latest stories, solutions, and initiatives.",
    footSalesTitle: "SALES CONTACT",
    footSalesNote1: "(Business Dept.: ext.204; FI & BP Dept.: ext.301)",
    footSalesNote2: "(Mobile, Viber, Zalo, WhatsApp, Facebook Messenger)",
    footHeadTitle: "HEAD OFFICE",
    footAddress: "2A Phan Ke Binh Street, Tan Dinh Ward, Ho Chi Minh City, Vietnam",
    footCopyright: "Copyright © 2026 Vietnam Food JSC. - All Rights Reserved.",
  },
} as const

/* ── Ecosystem spotlight data ────────────────────────────────────────────── */
const ECOSYSTEM = [
  {
    icon: "i-leaf",
    fb: "https://www.facebook.com/VNFVuonXanh",
    logo: { vi: `${LOGO_BASE}/ho_vi.png`, en: `${LOGO_BASE}/ho_en.png` },
    video: { vi: `${MEDIA_BASE}/vi_ho.mp4`, en: `${MEDIA_BASE}/en_ho.mp4` },
    poster: { vi: `${MEDIA_BASE}/vi_ho.jpg`, en: `${MEDIA_BASE}/en_ho.jpg` },
    vi: {
      name: "Vươn Xanh Việt Nam",
      cat: "Nông nghiệp bền vững",
      long: "VƯƠN XANH VIỆT NAM giới thiệu giải pháp nông nghiệp từ phụ phẩm tôm. Các chế phẩm sinh học giúp tái tạo đất, tăng năng suất cây trồng, bảo quản sau thu hoạch...hướng đến mô hình canh tác xanh, tự nhiên, và bền vững.",
    },
    en: {
      name: "Vươn Xanh Việt Nam (EcoBlossom)",
      cat: "Sustainable Agriculture",
      long: "VUON XANH VIETNAM (ECOBLOSSOM) introduces agricultural solutions derived from shrimp by-products. Its bio-solutions help regenerate soils, increase crop yields and support post-harvest preservation, all towards a green, natural and sustainable farming model.",
    },
  },
  {
    icon: "i-paw",
    fb: "https://www.facebook.com/VNFVatnuoivuikhoe",
    logo: { vi: `${LOGO_BASE}/an_vi.png`, en: `${LOGO_BASE}/an_en.png` },
    video: { vi: `${MEDIA_BASE}/vi_an.mp4`, en: `${MEDIA_BASE}/en_an.mp4` },
    poster: { vi: `${MEDIA_BASE}/vi_an.jpg`, en: `${MEDIA_BASE}/en_an.jpg` },
    vi: {
      name: "Vật Nuôi Vui Khoẻ",
      cat: "Chăn nuôi và nuôi trồng thuỷ sản",
      long: "VẬT NUÔI VUI KHỎE cung cấp giải pháp dinh dưỡng tuần hoàn cho chăn nuôi và nuôi trồng thủy sản từ phụ phẩm tôm. Các chế phẩm sinh học giúp vật nuôi ăn khỏe, lớn nhanh, kháng bệnh tốt, đồng thời tối ưu chi phí trong bối cảnh giá vật tư tăng cao và nguồn cung nhập khẩu biến động.",
    },
    en: {
      name: "Vật Nuôi Vui Khoẻ (Happy Animals)",
      cat: "Livestock and Aquaculture",
      long: "VAT NUOI VUI KHOE (HAPPY ANIMALS) introduces circular nutrition solutions for livestock and aquaculture, derived from shrimp by-products. Its bio-solutions help animals eat well, grow fast and resist diseases, while optimizing costs for farmers, especially in the context of rising input prices and disrupted import supply chains.",
    },
  },
  {
    icon: "i-cat",
    fb: "https://www.facebook.com/VNFTom4Pet/",
    logo: { vi: `${LOGO_BASE}/pet_vi.png`, en: `${LOGO_BASE}/pet_en.png` },
    video: { vi: `${MEDIA_BASE}/vi_pet.mp4`, en: `${MEDIA_BASE}/en_pet.mp4` },
    poster: { vi: `${MEDIA_BASE}/vi_pet.jpg`, en: `${MEDIA_BASE}/en_pet.jpg` },
    vi: {
      name: "Tôm4Pet",
      cat: "Dinh dưỡng và chăm sóc thú cưng",
      long: "TÔM4PET giới thiệu các giải pháp dinh dưỡng và chăm sóc thú cưng. Ngoài việc mang đến những bữa ăn đậm hương vị tôm, các giải pháp còn hỗ trợ phòng ngừa bệnh mãn tính (thận, đường ruột, cholesterol...) và nâng cao sức khỏe toàn diện cho thú cưng.",
    },
    en: {
      name: "Tôm4Pet",
      cat: "Pet Nutrition and Care",
      long: "TOM4PET introduces pet nutrition and care solutions. Beyond delivering enjoyable shrimp-based palatability, its solutions help prevent chronic conditions (kidney, gut, cholesterol, etc.) and support overall health for our companions.",
    },
  },
  {
    icon: "i-bowl",
    fb: "https://www.facebook.com/VNFTomYummy/",
    logo: { vi: `${LOGO_BASE}/yummy_vi.png`, en: `${LOGO_BASE}/yummy_en.png` },
    video: { vi: `${MEDIA_BASE}/vi_fi.mp4`, en: `${MEDIA_BASE}/en_fi.mp4` },
    poster: { vi: `${MEDIA_BASE}/vi_fi.jpg`, en: `${MEDIA_BASE}/en_fi.jpg` },
    vi: {
      name: "Tôm Yummy",
      cat: "Nguyên liệu thực phẩm",
      long: "TÔM YUMMY giới thiệu nhóm nguyên liệu thực phẩm mang hương vị tôm tự nhiên & thơm ngon, cùng nhóm nguyên liệu chức năng hỗ trợ bổ sung dinh dưỡng. Giải pháp hướng tới đáp ứng nhu cầu thực phẩm sạch, an toàn, và bền vững hơn.",
    },
    en: {
      name: "Tôm Yummy",
      cat: "Food Ingredients",
      long: "TOM YUMMY introduces Food Ingredient lines that deliver natural & delicious shrimp flavour, together with Functional Ingredient lines that support nutritional enrichment. The solutions are designed to meet the growing demand for cleaner, safer, and more sustainable food.",
    },
  },
  {
    icon: "i-flask",
    fb: "https://www.facebook.com/VNFBioInShell",
    logo: { vi: `${LOGO_BASE}/bio_vi.png`, en: `${LOGO_BASE}/bio_en.png` },
    video: { vi: `${MEDIA_BASE}/bio_shared.mp4`, en: `${MEDIA_BASE}/bio_shared.mp4` },
    poster: { vi: `${MEDIA_BASE}/bio_shared.jpg`, en: `${MEDIA_BASE}/bio_shared.jpg` },
    vi: {
      name: "BioInShell",
      cat: "Công nghiệp",
      long: "BIOINSHELL là mảng kinh doanh sáng tạo tập trung phát triển các giải pháp bio-polymer từ tôm ứng dụng trong nhiều ngành như nhựa sinh học, vật liệu sinh học, và xử lý nước. Những vật liệu này được biết đến với tính tương thích sinh học, phân hủy sinh học, khả năng kháng khuẩn và tạo màng, hướng tới thay thế các hóa chất và polymer có nguồn gốc hóa thạch.",
    },
    en: {
      name: "BioInShell",
      cat: "Industry",
      long: "BIOINSHELL is an innovative business line specializing in shrimp-based bio-polymers, serving various industries such as bioplastics, biomaterials, water treatment. These materials are known for their biocompatibility, biodegradability, anti-microbial activity and film-forming properties, and are designed to replace fossil-based polymers and chemicals.",
    },
  },
  {
    icon: "i-recycle",
    fb: "https://www.facebook.com/retrivvnf",
    linkedin: "https://www.linkedin.com/company/retriv/posts/?feedView=all",
    logo: { vi: `${LOGO_BASE}/retriv.png`, en: `${LOGO_BASE}/retriv.png` },
    video: { vi: `${MEDIA_BASE}/vi_retriv.mp4`, en: `${MEDIA_BASE}/en_retriv.mp4` },
    poster: { vi: `${MEDIA_BASE}/vi_retriv.jpg`, en: `${MEDIA_BASE}/en_retriv.jpg` },
    vi: {
      name: "RetriV™",
      cat: "Giải pháp thu hồi dưỡng chất",
      long: "RETRIV™ là giải pháp công nghệ tiên phong, biến “dòng nước thải” của các nhà máy chế biến thực phẩm thành “dòng tài nguyên” bằng cách thu hồi dinh dưỡng, giảm ô nhiễm và tạo ra các sản phẩm giá trị gia tăng theo hướng kinh tế tuần hoàn. Giải pháp cung cấp trọn bộ từ hoạt chất đến hệ thiết bị vận hành.",
    },
    en: {
      name: "RetriV™",
      cat: "Nutrient Recovery Solutions",
      long: "RETRIV™ is a pioneering technology solution that transforms \"wastewater streams\" from food-processing plants into \"resource streams\" by recovering nutrients, reducing pollution and generating value-added products within a circular economy model. The solution offers a complete package, from treatment bio-agents to modular equipment.",
    },
  },
] as const

/* ── SVG icon sprite (inline, matches original <symbol> defs) ────────────── */
function IconSprite() {
  return (
    <svg width="0" height="0" style={{ position: "absolute" }}>
      <defs>
        <symbol id="eco2-i-facebook" viewBox="0 0 24 24">
          <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V8c0-.9.25-1.5 1.55-1.5H16.7V3.7C16.4 3.66 15.4 3.57 14.24 3.57c-2.4 0-4.05 1.47-4.05 4.17V9.9H7.5V13h2.69v8h3.31Z" />
        </symbol>
        <symbol id="eco2-i-linkedin" viewBox="0 0 24 24">
          <path d="M6.94 8.5H4V20h2.94V8.5Zm-1.47-4.7A1.71 1.71 0 1 0 5.5 7.2a1.71 1.71 0 0 0-.03-3.4ZM20 20h-2.94v-6.02c0-1.44-.03-3.28-2-3.28-2 0-2.31 1.56-2.31 3.17V20H9.8V8.5h2.82v1.57h.04c.4-.74 1.35-1.53 2.79-1.53 2.98 0 3.53 1.96 3.53 4.52V20Z" />
        </symbol>
        <symbol id="eco2-i-youtube" viewBox="0 0 24 24">
          <path d="M21.6 7.2s-.21-1.5-.86-2.16c-.82-.87-1.74-.87-2.16-.92C15.6 4 12 4 12 4h0s-3.6 0-6.58.12c-.42.05-1.34.05-2.16.92C2.61 5.7 2.4 7.2 2.4 7.2S2.2 8.94 2.2 10.68v1.63c0 1.74.2 3.48.2 3.48s.21 1.5.86 2.16c.82.87 1.9.84 2.38.93 1.73.17 7.36.22 7.36.22s3.6-.01 6.58-.13c.42-.05 1.34-.05 2.16-.92.65-.66.86-2.16.86-2.16s.2-1.74.2-3.48v-1.63c0-1.74-.2-3.48-.2-3.48ZM9.98 14.6V8.9l5.2 2.86-5.2 2.84Z" />
        </symbol>
        <symbol id="eco2-i-tiktok" viewBox="0 0 24 24">
          <path d="M16.6 3h-3v12.2a2.6 2.6 0 1 1-2-2.53v-3.05a5.6 5.6 0 1 0 5 5.57V9.3a7.3 7.3 0 0 0 4.4 1.47V7.7a4.3 4.3 0 0 1-4.4-4.7Z" />
        </symbol>
        <symbol id="eco2-i-mail" viewBox="0 0 24 24">
          <path d="M3 5.5h18a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1Zm.7 1.9v.1l8.3 5.98L20.3 7.5v-.1H3.7ZM4 8.9v8.1h16V8.9l-8 5.77L4 8.9Z" />
        </symbol>
        <symbol id="eco2-i-globe" viewBox="0 0 24 24">
          <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm7.93 9h-3.13a15.9 15.9 0 0 0-1.14-5.4A8 8 0 0 1 19.93 11ZM12 4.05c.86 1.15 1.9 3.2 2.06 6.95H9.94C10.1 7.25 11.14 5.2 12 4.05ZM9.94 13h4.12c-.16 3.75-1.2 5.8-2.06 6.95-.86-1.15-1.9-3.2-2.06-6.95ZM8.34 5.6A15.9 15.9 0 0 0 7.2 11H4.07a8 8 0 0 1 4.27-5.4ZM4.07 13H7.2a15.9 15.9 0 0 0 1.14 5.4A8 8 0 0 1 4.07 13Zm11.32 5.4A15.9 15.9 0 0 0 16.8 13h3.13a8 8 0 0 1-4.54 5.4Z" />
        </symbol>
        <symbol id="eco2-i-play" viewBox="0 0 24 24">
          <path d="M8 5v14l11-7L8 5Z" />
        </symbol>
        <symbol id="eco2-i-arrow-r" viewBox="0 0 24 24">
          <path d="M13 5l7 7-7 7-1.4-1.4L16.2 13H4v-2h12.2l-4.6-4.6Z" />
        </symbol>
        <symbol id="eco2-i-arrow-l" viewBox="0 0 24 24">
          <path d="M11 19l-7-7 7-7 1.4 1.4L7.8 11H20v2H7.8l4.6 4.6Z" />
        </symbol>
        <symbol id="eco2-i-leaf" viewBox="0 0 24 24">
          <path d="M20 4c-7 0-13 3-13 10 0 2 .5 3.5 1.3 4.7L4 23l1.4 1.4 4.3-4.3C10.9 20.9 12.4 21 14 21c7 0 10-6 10-13 0-1.4-.1-2.6-.3-3.7C22.6 4.1 21.4 4 20 4ZM9.2 17.1C8.4 15.9 8 14.6 8 13c0-4.6 3.6-6.9 7.9-7.5-3 1.7-6.2 5-6.7 11.6Z" />
        </symbol>
        <symbol id="eco2-i-paw" viewBox="0 0 24 24">
          <circle cx="6" cy="10" r="2.2" />
          <circle cx="11" cy="7" r="2.2" />
          <circle cx="16.5" cy="7.6" r="2.2" />
          <circle cx="20" cy="11.5" r="2.1" />
          <path d="M13 12c3 0 6 2.1 6 5.2 0 2.1-1.7 3.3-3.7 3.3-1.2 0-2.1-.6-3-.6s-1.9.6-3.1.6c-2 0-3.7-1.2-3.7-3.3C5.5 14.1 8.7 12 13 12Z" />
        </symbol>
        <symbol id="eco2-i-cat" viewBox="0 0 24 24">
          <path d="M6 3 8 9h8L18 3l-3 4.2A9 9 0 0 0 6 3Zm6 6a7 7 0 1 0 .01 0Zm-2.6 4.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm5.2 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm-2.6 2.4c.9 0 1.7.3 1.7.9s-.8 1.2-1.7 1.2-1.7-.6-1.7-1.2.8-.9 1.7-.9Z" />
        </symbol>
        <symbol id="eco2-i-bowl" viewBox="0 0 24 24">
          <path d="M3 12h18a9 9 0 0 1-18 0Zm2.3-2A6.7 6.7 0 0 1 12 4a6.7 6.7 0 0 1 6.7 6H5.3ZM10 3v3H9V3h1Zm3.5 0v3h-1V3h1Z" />
        </symbol>
        <symbol id="eco2-i-flask" viewBox="0 0 24 24">
          <path d="M9 2h6v2h-1v5.2l4.6 8.4A2 2 0 0 1 16.85 21H7.15A2 2 0 0 1 5.4 17.6L10 8.2V4H9V2Zm2 2v4.6L7.9 14h8.2L13 8.6V4h-2Z" />
        </symbol>
        <symbol id="eco2-i-recycle" viewBox="0 0 24 24">
          <path d="M10.5 3.3 13 7.6l-1.7 1-1.6-2.8-1.8 3.1-1.7-1L8.8 3a1 1 0 0 1 1.7.3ZM4.2 15.9 6 12.7l1.7 1-1 1.8h3.6v2H6.7l1 1.8-1.7 1-1.8-3.1a1 1 0 0 1 0-1.3Zm15.6-1.1-1.8 3.1-1.7-1 1-1.8h-3.5v-2h3.5l-1-1.8 1.7-1 1.8 3.1a1 1 0 0 1 0 1.4Z" />
        </symbol>
      </defs>
    </svg>
  )
}

/* ── Page ────────────────────────────────────────────────────────────────── */
function EcosystemVnfPage() {
  const [lang, setLang] = useState<Lang>("vi")
  const [appIndex, setAppIndex] = useState(0)
  const [activeSection, setActiveSection] = useState<"home" | "ecosystem">("home")
  const [typedLen, setTypedLen] = useState(0)
  const ecoTitleRef = useRef<HTMLHeadingElement>(null)
  const appInfoRef = useRef<HTMLDivElement>(null)
  const t = T[lang]
  const active = ECOSYSTEM[appIndex]
  const ecoTitleFull = `${t.ecoTitlePrefix}\n${t.ecoTitleRest}`

  useEffect(() => {
    const el = appInfoRef.current
    if (!el) return
    el.classList.remove("app-fade-in")
    void el.offsetWidth
    el.classList.add("app-fade-in")
  }, [appIndex])

  useEffect(() => {
    setTypedLen(0)
    const el = ecoTitleRef.current
    if (!el) return
    let timer: ReturnType<typeof setInterval>
    const obs = new IntersectionObserver(
      entries => {
        if (!entries[0].isIntersecting) return
        let i = 0
        timer = setInterval(() => {
          i++
          setTypedLen(i)
          if (i >= ecoTitleFull.length) clearInterval(timer)
        }, 32)
        obs.disconnect()
      },
      { threshold: 0.4 }
    )
    obs.observe(el)
    return () => {
      obs.disconnect()
      clearInterval(timer)
    }
  }, [lang])

  useEffect(() => {
    const spy = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveSection(entry.target.id as "home" | "ecosystem")
        })
      },
      { rootMargin: "-45% 0px -50% 0px" }
    )
    document.querySelectorAll("#home, #ecosystem").forEach(el => spy.observe(el))

    const reveal = new IntersectionObserver(
      entries => entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add("in") }),
      { threshold: 0.15 }
    )
    document.querySelectorAll(".vnf-eco2-page .reveal").forEach(el => reveal.observe(el))

    return () => {
      spy.disconnect()
      reveal.disconnect()
    }
  }, [])

  const showApp = (i: number) => setAppIndex((i + ECOSYSTEM.length) % ECOSYSTEM.length)
  const lockRatio = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    const v = e.currentTarget
    if (v.videoWidth && v.videoHeight) v.style.aspectRatio = `${v.videoWidth} / ${v.videoHeight}`
  }

  return (
    <div className="vnf-eco2-page">
      <IconSprite />

      {/* ============ HEADER / NAV ============ */}
      <header>
        <div className="header-main">
          <nav>
            <a href="#home" className="logo"><img src={`${LOGO_BASE}/vnf.png`} alt="Vietnam Food" /></a>
            <div className="nav-links">
              <a href="#home" className={activeSection === "home" ? "active" : ""}>{t.navHome}</a>
              <a href="#ecosystem" className={activeSection === "ecosystem" ? "active" : ""}>{t.navEcosystem}</a>
              <div className="langtoggle">
                <button className={lang === "vi" ? "active" : ""} onClick={() => setLang("vi")}>VN</button>
                <button className={lang === "en" ? "active" : ""} onClick={() => setLang("en")}>EN</button>
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* ============ HOME / HERO ============ */}
      <section id="home" className="hero">
        <div className="wrap hero-grid">
          <div>
            <div className="brand-id">{t.brandId}</div>
            <h1>
              {t.heroTitlePrefix}
              <span className="accent">{t.heroTitleAccent}</span>
              {t.heroTitleSuffix}
            </h1>
            <p className="lead">
              {t.heroLead1}
              <br /><br />
              {t.heroLead2}
            </p>
            <div className="hero-ctas">
              <a href="#ecosystem" className="btn btn-primary">{t.ctaExplore}</a>
              <a href="mailto:sales@vnfoods.vn" className="btn btn-ghost">{t.ctaContact}</a>
            </div>
          </div>
          <div className="hero-video reveal">
            <video
              key={`hero-${lang}`}
              controls
              preload="metadata"
              playsInline
              poster={HERO_POSTER[lang]}
              src={HERO_VIDEO[lang]}
              onLoadedMetadata={lockRatio}
            />
          </div>
        </div>
      </section>

      <div className="social-bar" id="social">
        <div className="wrap">
          <div className="social-bar-head reveal">{t.socialHead}</div>
        </div>
        <div className="wrap social-row">
          <a className="social-pill social-pill--website reveal" href="https://www.vnfoods.vn" target="_blank" rel="noopener noreferrer">
            <svg><use href="#eco2-i-globe" /></svg><span>{t.socialWebsite}</span>
          </a>
          <a className="social-pill social-pill--linkedin reveal" href="https://www.linkedin.com/company/vnf/" target="_blank" rel="noopener noreferrer">
            <svg><use href="#eco2-i-linkedin" /></svg><span>LinkedIn</span>
          </a>
          <a className="social-pill social-pill--facebook reveal" href="https://www.facebook.com/vnfoods.vn" target="_blank" rel="noopener noreferrer">
            <svg><use href="#eco2-i-facebook" /></svg><span>Facebook</span>
          </a>
          <a className="social-pill social-pill--youtube reveal" href="https://youtube.com/@vietnamfood.offical" target="_blank" rel="noopener noreferrer">
            <svg><use href="#eco2-i-youtube" /></svg><span>YouTube</span>
          </a>
          <a className="social-pill social-pill--tiktok reveal" href="https://www.tiktok.com/@vietnamfood.mediachannel" target="_blank" rel="noopener noreferrer">
            <svg><use href="#eco2-i-tiktok" /></svg><span>TikTok</span>
          </a>
          <a className="social-pill social-pill--email reveal" href="mailto:sales@vnfoods.vn">
            <svg><use href="#eco2-i-mail" /></svg><span>{t.socialEmail}</span>
          </a>
          <a className="social-pill social-pill--factory reveal" href="https://www.facebook.com/profile.php?id=100063618936458" target="_blank" rel="noopener noreferrer">
            <img src={`${LOGO_BASE}/ca-mau.png`} alt="" /><span>{t.socialCaMau}</span>
          </a>
          <a className="social-pill social-pill--factory reveal" href="https://www.facebook.com/vnf.haugiang" target="_blank" rel="noopener noreferrer">
            <img src={`${LOGO_BASE}/hau-giang.png`} alt="" /><span>{t.socialHauGiang}</span>
          </a>
        </div>
      </div>

      {/* ============ ECOSYSTEM (team spotlight) ============ */}
      <section id="ecosystem">
        <div className="wrap">
          <div className="section-head reveal">
            <div className="eyebrow">{t.ecoEyebrow}</div>
            <h2 ref={ecoTitleRef} className="typewriter">
              {ecoTitleFull.slice(0, typedLen).split("\n").map((line, i, arr) => (
                <span key={i}>{line}{i < arr.length - 1 ? <br /> : null}</span>
              ))}
              {typedLen > 0 && typedLen < ecoTitleFull.length && <span className="typewriter-caret" aria-hidden="true" />}
            </h2>
          </div>
          <div className="app-layout">
            <div className="app-list reveal">
              {ECOSYSTEM.map((e, i) => (
                <div key={e.fb} className={`app-item ${i === appIndex ? "active" : ""}`} onClick={() => showApp(i)}>
                  <div className="mini"><img src={e.logo[lang]} alt="" /></div>
                  <span>{e[lang].name}</span>
                </div>
              ))}
            </div>
            <div className="app-panel reveal">
              <div ref={appInfoRef} className="app-fade-in">
                <div className="app-head">
                  <img className="app-logo" src={active.logo[lang]} alt="" />
                  <div className="cat">{active[lang].cat}</div>
                </div>
                <h3>{active[lang].name}</h3>
                <div className="app-desc-card"><p>{active[lang].long}</p></div>
              </div>
              <div className="app-video">
                <video
                  key={`ap-${appIndex}-${lang}`}
                  controls
                  preload="metadata"
                  playsInline
                  poster={active.poster[lang]}
                  src={active.video[lang]}
                  onLoadedMetadata={lockRatio}
                />
              </div>
              <div className="app-nav">
                <div className="app-links">
                  <a
                    className="btn btn-outline-navy"
                    href={active.fb}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ borderColor: "rgba(255,255,255,.5)", color: "var(--eco2-white)" }}
                  >
                    <svg style={{ width: 16, height: 16, fill: "currentColor" }}><use href="#eco2-i-facebook" /></svg>
                    {t.fbLink}
                  </a>
                  {"linkedin" in active && active.linkedin && (
                    <a
                      className="btn btn-outline-navy"
                      href={active.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ borderColor: "rgba(255,255,255,.5)", color: "var(--eco2-white)" }}
                    >
                      <svg style={{ width: 16, height: 16, fill: "currentColor" }}><use href="#eco2-i-linkedin" /></svg>
                      {t.liLink}
                    </a>
                  )}
                </div>
                <div className="app-arrows">
                  <div className="arrow-btn" onClick={() => showApp(appIndex - 1)}><svg><use href="#eco2-i-arrow-l" /></svg></div>
                  <div className="arrow-btn" onClick={() => showApp(appIndex + 1)}><svg><use href="#eco2-i-arrow-r" /></svg></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FOLLOW CTA ============ */}
      <section className="follow-cta">
        <div className="wrap">
          <div className="follow-cta-inner reveal">
            <div className="eyebrow">{t.followEyebrow}</div>
            <p>{t.followText}</p>
          </div>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer>
        <div className="foot-pattern" aria-hidden="true" />
        <div className="wrap">
          <div className="foot-top">
            <div className="foot-brand">
              <img className="foot-logo" src={`${LOGO_BASE}/vnf_white.png`} alt="Vietnam Food" />
            </div>
            <div className="foot-contact-grid">
              <div className="foot-contact-block">
                <h5>{t.footSalesTitle}</h5>
                <p>
                  <a href="tel:+842839112183">(+84) 28 3911 2183</a>{" "}
                  <span className="foot-note">{t.footSalesNote1}</span>
                  <br />
                  <a href="tel:+84909802863">(+84) 909 802 863</a>{" "}
                  <span className="foot-note">{t.footSalesNote2}</span>
                  <br />
                  <a href="mailto:sales@vnfoods.vn">sales@vnfoods.vn</a>
                </p>
              </div>
              <div className="foot-contact-block">
                <h5>{t.footHeadTitle}</h5>
                <p><span>{t.footAddress}</span></p>
              </div>
            </div>
          </div>
          <div className="foot-bottom">
            <span>{t.footCopyright}</span>
            <a href="https://www.vnfoods.vn" target="_blank" rel="noopener noreferrer">www.vnfoods.vn</a>
          </div>
        </div>
      </footer>

      <style>{ECO2_CSS}</style>
    </div>
  )
}

const ECO2_CSS = `
.vnf-eco2-page{
  /* ===== Minimalist 2-color palette — White + Blue only ==========================
     PRIMARY BLUE #1E5CA6 — verified heading/link color used site-wide on vnfoods.vn
     WHITE #FFFFFF        — the only other brand color; all UI is built from these two.
     Everything below is a flat, single, solid value — no gradients, no glow,
     no glass effects, no extra hues. --eco2-primary-dark/--eco2-primary-light are plain
     lighter/darker shades of the SAME blue (for hover states / subtle section
     tinting), not new colors. --eco2-text is a neutral ink used only for body copy,
     since pure blue/white body text would be unreadable. */
  --eco2-primary:#1E5CA6;
  --eco2-primary-dark:#17497F;   /* darker shade of primary — hover states only */
  --eco2-primary-light:#EAF1F8;  /* lighter tint of primary — alt section backgrounds */
  --eco2-white:#FFFFFF;
  --eco2-border:#DCE6F0;         /* pale blue-tinted hairline divider */
  --eco2-text:#333333;           /* neutral ink for body copy (legibility only) */
  --eco2-text-soft:#5B6674;      /* secondary/caption ink */
  --eco2-font: Calibri, Carlito, "Segoe UI", Tahoma, sans-serif; /* Calibri everywhere per brand guide; Carlito is the metric-compatible, Vietnamese-safe fallback on non-Windows systems */
  --eco2-maxw: 1180px;
  --eco2-gutter: 18px;
  --eco2-shadow-sm: 0 4px 16px rgba(23,73,127,.08);
  --eco2-shadow-md: 0 10px 30px rgba(23,73,127,.12);
  --eco2-shadow-lg: 0 18px 46px rgba(23,73,127,.16);
  --eco2-radius-card: 8px;
}
.vnf-eco2-page *, .vnf-eco2-page *::before, .vnf-eco2-page *::after{box-sizing:border-box;}
.vnf-eco2-page *{margin:0; padding:0;}
.vnf-eco2-page{
  font-family: var(--eco2-font);
  color:var(--eco2-text);
  background:var(--eco2-white);
  overflow-x:hidden;
  width:100%;
  -webkit-font-smoothing:antialiased;
  font-size:17px; line-height:1.65;
}
.vnf-eco2-page a{color:inherit; text-decoration:none;}
.vnf-eco2-page img, .vnf-eco2-page svg{display:block; max-width:100%;}
.vnf-eco2-page button, .vnf-eco2-page input{font-family:inherit;}
.vnf-eco2-page :focus-visible{outline:2.5px solid var(--eco2-primary); outline-offset:3px; border-radius:4px;}
.vnf-eco2-page .hero :focus-visible, .vnf-eco2-page .app-panel :focus-visible, .vnf-eco2-page .follow-cta :focus-visible, .vnf-eco2-page footer :focus-visible, .vnf-eco2-page header :focus-visible{outline-color:var(--eco2-white);}

/* container: fluid on mobile, capped + padded on larger screens */
.vnf-eco2-page .wrap{width:100%; max-width:var(--eco2-maxw); margin:0 auto; padding:0 var(--eco2-gutter);}
@media(min-width:720px){ .vnf-eco2-page{ --eco2-gutter:28px; } }

/* ===== Typography hierarchy: Heading -> Subheading -> Body -> Caption ===== */
.vnf-eco2-page .eyebrow{
  display:inline-block; font-weight:800; letter-spacing:.13em; font-size:12.5px;
  color:var(--eco2-primary); text-transform:uppercase; margin-bottom:14px;
  border-bottom:2px solid var(--eco2-primary); padding-bottom:6px;
}
@media(min-width:720px){ .vnf-eco2-page .eyebrow{letter-spacing:.16em; font-size:13.5px;} }
/* on dark (primary-colored) sections, swap the eyebrow to a light flat tone for legibility */
.vnf-eco2-page .hero .eyebrow{color:var(--eco2-white); border-bottom-color:rgba(255,255,255,.55);}
/* company identity line in the hero acts as a Subheading — bigger & bolder than a standard eyebrow tag */
.vnf-eco2-page .brand-id{
  display:flex; align-items:center; gap:10px; font-size:clamp(15px,2.2vw,18px); font-weight:800;
  letter-spacing:.06em; color:var(--eco2-white); text-transform:uppercase; margin-bottom:18px; opacity:.92;
}
.vnf-eco2-page .brand-id::before{content:''; width:8px; height:8px; border-radius:50%; background:var(--eco2-white); flex:0 0 auto;}

.vnf-eco2-page h1, .vnf-eco2-page h2, .vnf-eco2-page h3{color:var(--eco2-primary); font-weight:700; line-height:1.18;}
.vnf-eco2-page h4, .vnf-eco2-page h5{color:var(--eco2-primary); font-weight:800; line-height:1.3;}
.vnf-eco2-page .section-head{max-width:760px; margin:0 auto 44px; text-align:center;}
.vnf-eco2-page .section-head h2{font-size:clamp(26px,5.5vw,42px); font-weight:700; text-wrap:balance;}
.vnf-eco2-page .section-head h2.typewriter{text-wrap:pretty;}
.vnf-eco2-page .section-head p{margin-top:18px; font-size:17px; line-height:1.7; color:var(--eco2-text-soft); text-wrap:pretty;}
.vnf-eco2-page .typewriter-caret{
  display:inline-block; width:3px; height:.9em; margin-left:3px; background:currentColor;
  vertical-align:-.1em; animation:eco2-caret-blink 1s steps(1) infinite;
}
@keyframes eco2-caret-blink{0%,49%{opacity:1;} 50%,100%{opacity:0;}}
@media(min-width:720px){
  .vnf-eco2-page .section-head{margin:0 auto 60px;}
  .vnf-eco2-page .section-head p{font-size:18px;}
}
.vnf-eco2-page section{position:relative; width:100%; overflow:hidden;}

.vnf-eco2-page .btn{
  display:inline-flex; align-items:center; justify-content:center; gap:10px; font-weight:700; font-size:15.5px;
  padding:15px 26px; border-radius:999px; cursor:pointer; border:2px solid transparent;
  transition:transform .22s ease, background .22s ease, color .22s ease, box-shadow .22s ease;
  white-space:normal; text-align:center; width:100%; min-height:48px;
}
@media(min-width:480px){ .vnf-eco2-page .btn{width:auto; white-space:nowrap;} }
.vnf-eco2-page .btn-primary{background:var(--eco2-primary); color:var(--eco2-white); box-shadow:var(--eco2-shadow-sm);}
.vnf-eco2-page .btn-primary:hover{background:var(--eco2-primary-dark); transform:translateY(-2px); box-shadow:var(--eco2-shadow-md);}
.vnf-eco2-page .btn-ghost{border-color:rgba(255,255,255,.6); color:var(--eco2-white);}
.vnf-eco2-page .btn-ghost:hover{background:rgba(255,255,255,.12); transform:translateY(-2px);}
.vnf-eco2-page .btn-outline-navy{border-color:var(--eco2-primary); color:var(--eco2-primary);}
.vnf-eco2-page .btn-outline-navy:hover{background:var(--eco2-primary); color:var(--eco2-white); transform:translateY(-2px);}


/* ===== HEADER — white logo area + thin utility bar, matches vnfoods.vn ===== */
.vnf-eco2-page header{position:sticky; top:0; z-index:200; background:var(--eco2-white);}
.vnf-eco2-page .header-main{background:var(--eco2-white); border-bottom:1px solid var(--eco2-border); box-shadow:0 2px 14px rgba(23,73,127,.06);}
.vnf-eco2-page nav{
  max-width:var(--eco2-maxw); margin:0 auto; padding:16px var(--eco2-gutter);
  display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:12px 18px;
}
.vnf-eco2-page .logo{display:flex; align-items:center;}
.vnf-eco2-page .logo img{height:101px; width:auto; display:block;}
@media(min-width:640px){ .vnf-eco2-page .logo img{height:117px;} }
.vnf-eco2-page .foot-logo{height:46px; width:auto; margin-bottom:20px; display:block;}
@media(min-width:640px){ .vnf-eco2-page .foot-logo{height:56px; margin-bottom:24px;} }
.vnf-eco2-page .app-item .mini{overflow:hidden;}
.vnf-eco2-page .app-item .mini img{width:100%; height:100%; object-fit:cover; border-radius:8px;}
.vnf-eco2-page .app-head{display:flex; align-items:center; gap:12px;}
.vnf-eco2-page .app-logo{width:48px; height:48px; border-radius:8px; object-fit:cover; background:var(--eco2-white); flex:0 0 auto;}
@media(min-width:640px){ .vnf-eco2-page .app-logo{width:56px; height:56px;} }
.vnf-eco2-page .nav-links{
  display:flex; gap:4px; flex-wrap:wrap; order:3; width:100%; justify-content:center;
}
.vnf-eco2-page .nav-links a{
  display:inline-flex; align-items:center; min-height:44px;
  color:var(--eco2-primary); font-weight:700; font-size:15px; padding:10px 16px;
  border-radius:8px; transition:background .2s ease, color .2s ease; position:relative;
}
.vnf-eco2-page .nav-links a:hover{background:var(--eco2-primary-light);}
.vnf-eco2-page .nav-links a.active{background:var(--eco2-primary); color:var(--eco2-white);}
.vnf-eco2-page .langtoggle{
  display:flex; align-items:center; background:var(--eco2-white); border:1px solid var(--eco2-border); border-radius:999px; padding:3px;
  flex:0 0 auto; margin-left:8px;
}
.vnf-eco2-page .langtoggle button{
  border:none; background:transparent; color:var(--eco2-text-soft); font-weight:700; font-size:13px;
  padding:8px 14px; min-height:40px; border-radius:999px; cursor:pointer; transition:all .2s ease; font-family:var(--eco2-font);
}
.vnf-eco2-page .langtoggle button.active{background:var(--eco2-primary); color:var(--eco2-white);}
@media(min-width:640px){
  .vnf-eco2-page .nav-links a{font-size:15.5px; padding:11px 18px;}
}
@media(min-width:960px){
  .vnf-eco2-page nav{flex-wrap:nowrap; gap:24px; padding:20px var(--eco2-gutter);}
  .vnf-eco2-page .nav-links{order:0; width:auto; margin-left:auto; justify-content:flex-start;}
}

/* ===== HERO (mobile-first: single column, video under text) ===== */
.vnf-eco2-page .hero{
  background:linear-gradient(135deg, rgba(30,92,166,.90), rgba(23,73,127,.94)), url('/ecosystem-vnf/logos/hero-bg.jpg') center/cover no-repeat;
  position:relative; overflow:hidden; padding:64px 0 56px;
}
.vnf-eco2-page .hero-grid{
  position:relative; z-index:2; display:flex; flex-direction:column; gap:36px;
}
.vnf-eco2-page .hero h1{color:var(--eco2-white); font-size:clamp(26px,6vw,44px); font-weight:600; letter-spacing:-.01em; text-wrap:balance;}
.vnf-eco2-page .hero h1 .accent{color:var(--eco2-white); font-weight:800; border-bottom:3px solid rgba(255,255,255,.6);}
.vnf-eco2-page .hero p.lead{color:rgba(255,255,255,.92); font-size:17px; margin:20px 0 30px; max-width:540px; line-height:1.75; text-wrap:pretty;}
.vnf-eco2-page .hero-ctas{display:flex; flex-direction:column; gap:14px;}
.vnf-eco2-page .hero-video{
  position:relative; border-radius:8px; overflow:hidden; width:100%;
  background:var(--eco2-primary-dark);
  border:1px solid rgba(255,255,255,.15);
  display:flex; align-items:center; justify-content:center;
  box-shadow:0 20px 50px rgba(0,0,0,.22);
}
.vnf-eco2-page .play-btn{
  position:absolute; top:50%; left:50%; transform:translate(-50%,-50%);
  width:64px; height:64px; border-radius:50%; background:rgba(255,255,255,.16);
  border:2px solid rgba(255,255,255,.55); display:flex; align-items:center; justify-content:center;
  cursor:pointer; transition:transform .2s ease, background .2s ease;
}
.vnf-eco2-page .play-btn:hover{background:rgba(255,255,255,.26);}
.vnf-eco2-page .play-btn svg{width:22px; height:22px; margin-left:3px; fill:var(--eco2-white);}
.vnf-eco2-page .video-caption{
  position:absolute; left:14px; bottom:12px; display:flex; align-items:center; gap:8px;
  color:rgba(255,255,255,.85); font-size:11.5px; font-weight:bold;
}
.vnf-eco2-page .lang-pill{
  background:var(--eco2-white); color:var(--eco2-primary); font-size:11px; font-weight:bold; padding:4px 10px;
  border-radius:999px; letter-spacing:.05em;
}
@media(min-width:480px){ .vnf-eco2-page .hero-ctas{flex-direction:row; flex-wrap:wrap;} }
@media(min-width:640px){
  .vnf-eco2-page .hero{padding:84px 0 68px;}
  .vnf-eco2-page .hero p.lead{font-size:18.5px;}
  .vnf-eco2-page .play-btn{width:76px; height:76px;}
  .vnf-eco2-page .play-btn svg{width:24px; height:24px; margin-left:4px;}
}
@media(min-width:960px){
  .vnf-eco2-page .hero{padding:100px 0 84px;}
  .vnf-eco2-page .hero-grid{display:grid; grid-template-columns:1.05fr .95fr; gap:64px; align-items:center;}
}

/* ===== social bar — enlarged, high-contrast primary CTAs ===== */
.vnf-eco2-page .social-bar{
  padding:44px 0 40px; background:var(--eco2-white); border-bottom:1px solid var(--eco2-border);
}
.vnf-eco2-page .social-bar-head{
  text-align:center; font-weight:800; letter-spacing:.1em; font-size:13px; text-transform:uppercase;
  color:var(--eco2-primary); margin-bottom:24px;
}
.vnf-eco2-page .social-row{display:flex; justify-content:center; flex-wrap:wrap; gap:12px;}
.vnf-eco2-page .social-pill{
  display:flex; align-items:center; gap:10px; padding:13px 20px; border-radius:999px;
  border:1.5px solid var(--eco2-border); background:var(--eco2-primary-light);
  font-size:14.5px; font-weight:800; color:var(--eco2-primary);
  transition:transform .22s cubic-bezier(.2,.8,.2,1), background .22s ease, color .22s ease, box-shadow .22s ease, border-color .22s ease;
  min-height:48px;
}
.vnf-eco2-page .social-pill svg{width:19px; height:19px; fill:var(--eco2-primary); flex:0 0 auto; transition:fill .22s ease, transform .32s cubic-bezier(.34,1.56,.64,1);}
.vnf-eco2-page .social-pill img{width:19px; height:19px; border-radius:50%; object-fit:cover; flex:0 0 auto; transition:transform .32s cubic-bezier(.34,1.56,.64,1);}
.vnf-eco2-page .social-pill:hover svg, .vnf-eco2-page .social-pill:focus-visible svg,
.vnf-eco2-page .social-pill:hover img, .vnf-eco2-page .social-pill:focus-visible img{
  animation:eco2-icon-wiggle .5s cubic-bezier(.34,1.56,.64,1);
}
.vnf-eco2-page .social-pill--website svg{fill:#2563eb;}
.vnf-eco2-page .social-pill--linkedin svg{fill:#0A66C2;}
.vnf-eco2-page .social-pill--facebook svg{fill:#1877F2;}
.vnf-eco2-page .social-pill--youtube svg{fill:#FF0000;}
.vnf-eco2-page .social-pill--tiktok svg{fill:#010101;}
.vnf-eco2-page .social-pill--email svg{fill:#64748b;}
.vnf-eco2-page .social-pill:hover, .vnf-eco2-page .social-pill:focus-visible{
  border-color:var(--eco2-primary); background:var(--eco2-primary); color:var(--eco2-white);
  transform:translateY(-2px); box-shadow:var(--eco2-shadow-md);
}
.vnf-eco2-page .social-pill:hover svg, .vnf-eco2-page .social-pill:focus-visible svg{fill:var(--eco2-white);}
.vnf-eco2-page .social-pill:active{transform:translateY(0);}
/* entrance uses its own animation (not the shared reveal transition) so hover timing stays untouched */
.vnf-eco2-page .social-pill.reveal{
  transform:translateY(16px);
  transition:transform .22s cubic-bezier(.2,.8,.2,1), background .22s ease, color .22s ease, box-shadow .22s ease, border-color .22s ease;
}
.vnf-eco2-page .social-pill.reveal.in{animation:eco2-pill-in .5s cubic-bezier(.2,.8,.2,1) both;}
.vnf-eco2-page .social-row .social-pill:nth-child(1){animation-delay:0s;}
.vnf-eco2-page .social-row .social-pill:nth-child(2){animation-delay:.06s;}
.vnf-eco2-page .social-row .social-pill:nth-child(3){animation-delay:.12s;}
.vnf-eco2-page .social-row .social-pill:nth-child(4){animation-delay:.18s;}
.vnf-eco2-page .social-row .social-pill:nth-child(5){animation-delay:.24s;}
.vnf-eco2-page .social-row .social-pill:nth-child(6){animation-delay:.30s;}
.vnf-eco2-page .social-row .social-pill:nth-child(7){animation-delay:.36s;}
.vnf-eco2-page .social-row .social-pill:nth-child(8){animation-delay:.42s;}
@keyframes eco2-pill-in{ from{opacity:0; transform:translateY(16px);} to{opacity:1; transform:translateY(0);} }
@keyframes eco2-icon-wiggle{
  0%{transform:scale(1) rotate(0);}
  35%{transform:scale(1.22) rotate(-10deg);}
  65%{transform:scale(1.1) rotate(8deg);}
  100%{transform:scale(1.12) rotate(0);}
}
@media(min-width:640px){
  .vnf-eco2-page .social-bar{padding:56px 0 50px;}
  .vnf-eco2-page .social-bar-head{font-size:14px; margin-bottom:28px;}
  .vnf-eco2-page .social-row{gap:14px;}
  .vnf-eco2-page .social-pill{padding:15px 26px; font-size:16px;}
  .vnf-eco2-page .social-pill svg{width:21px; height:21px;}
  .vnf-eco2-page .social-pill img{width:21px; height:21px;}
}

/* ===== ECOSYSTEM (team spotlight) — mobile-first stacked ===== */
.vnf-eco2-page #ecosystem{padding:68px 0; background:var(--eco2-primary-light);}
.vnf-eco2-page .app-layout{display:flex; flex-direction:column; gap:18px;}
.vnf-eco2-page .app-list{
  display:flex; flex-direction:row; gap:8px; overflow-x:auto; -webkit-overflow-scrolling:touch;
  padding:2px 2px 10px; scroll-snap-type:x proximity;
}
.vnf-eco2-page .app-item{
  display:flex; align-items:center; gap:12px; padding:13px 16px; border-radius:8px; cursor:pointer;
  border:1.5px solid transparent; transition:border-color .2s ease, box-shadow .2s ease, background .2s ease, transform .15s ease; background:var(--eco2-white);
  flex:0 0 auto; scroll-snap-align:start; box-shadow:var(--eco2-shadow-sm);
}
.vnf-eco2-page .app-item:hover{border-color:var(--eco2-primary); box-shadow:var(--eco2-shadow-md);}
.vnf-eco2-page .app-item:active{transform:scale(.96);}
.vnf-eco2-page .app-item.active{background:var(--eco2-primary); border-color:var(--eco2-primary); box-shadow:var(--eco2-shadow-md); animation:eco2-item-pop .3s cubic-bezier(.34,1.56,.64,1);}
.vnf-eco2-page .app-item .mini{width:36px; height:36px; border-radius:8px; background:var(--eco2-primary-light); display:flex; align-items:center; justify-content:center; flex:0 0 auto;}
.vnf-eco2-page .app-item.active .mini{background:rgba(255,255,255,.16);}
.vnf-eco2-page .app-item .mini svg{width:17px; height:17px; fill:var(--eco2-primary);}
.vnf-eco2-page .app-item.active .mini svg{fill:var(--eco2-white);}
.vnf-eco2-page .app-item span{font-size:14.5px; font-weight:700; color:var(--eco2-primary); white-space:nowrap;}
.vnf-eco2-page .app-item.active span{color:var(--eco2-white);}
.vnf-eco2-page .app-panel{
  background:var(--eco2-primary); border-radius:var(--eco2-radius-card); padding:28px 24px; color:var(--eco2-white);
  position:relative; overflow:hidden; display:flex; flex-direction:column; justify-content:space-between; gap:24px;
  box-shadow:var(--eco2-shadow-lg);
}
.vnf-eco2-page .app-fade-in{animation:eco2-app-fade-in .45s cubic-bezier(.2,.8,.2,1) both;}
@keyframes eco2-app-fade-in{ from{opacity:.5; transform:translateY(10px);} to{opacity:1; transform:translateY(0);} }
@keyframes eco2-item-pop{ 0%{transform:scale(1);} 45%{transform:scale(1.04);} 100%{transform:scale(1);} }
.vnf-eco2-page .app-head{display:flex; align-items:center; gap:14px; margin-bottom:16px;}
/* Category acts as the primary section header inside each panel — bigger & bolder than the product name */
.vnf-eco2-page .app-panel .cat{
  color:var(--eco2-white); opacity:1; font-weight:800; font-size:clamp(16px,2.8vw,20px);
  letter-spacing:.05em; text-transform:uppercase; line-height:1.25;
}
.vnf-eco2-page .app-panel h3{color:rgba(255,255,255,.82); font-weight:600; font-size:clamp(18px,3vw,23px); margin:0 0 18px; font-style:normal; text-wrap:balance;}
.vnf-eco2-page .app-desc-card{
  background:rgba(255,255,255,.09); border:1px solid rgba(255,255,255,.15); border-radius:8px;
  padding:20px 22px;
}
.vnf-eco2-page .app-panel p{color:rgba(255,255,255,.92); font-size:16px; line-height:1.8; max-width:640px; text-wrap:pretty;}
.vnf-eco2-page .app-video{
  border-radius:8px; background:rgba(255,255,255,.08);
  border:1px solid rgba(255,255,255,.18); display:flex; align-items:center; justify-content:center; position:relative;
}
.vnf-eco2-page .app-video .play-btn{width:52px; height:52px;}
.vnf-eco2-page .app-video .play-btn svg{width:17px; height:17px; margin-left:2px;}
.vnf-eco2-page .hero-video video{width:100%; height:auto; max-height:100%; display:block; background:#000;}
.vnf-eco2-page .app-video{overflow:hidden;}
.vnf-eco2-page .app-video video{width:100%; height:auto; max-height:100%; display:block; background:#000;}
.vnf-eco2-page .app-nav{display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:14px;}
.vnf-eco2-page .app-links{display:flex; flex-wrap:wrap; gap:10px;}
.vnf-eco2-page .app-arrows{display:flex; gap:10px;}
.vnf-eco2-page .arrow-btn{
  width:44px; height:44px; border-radius:50%; border:1.5px solid rgba(255,255,255,.35); display:flex;
  align-items:center; justify-content:center; cursor:pointer; transition:all .22s ease; background:transparent; flex:0 0 auto;
}
.vnf-eco2-page .arrow-btn:hover, .vnf-eco2-page .arrow-btn:focus-visible{background:rgba(255,255,255,.16); border-color:var(--eco2-white); transform:translateY(-2px);}
.vnf-eco2-page .arrow-btn svg{width:17px; height:17px; fill:var(--eco2-white);}
@media(min-width:640px){
  .vnf-eco2-page #ecosystem{padding:96px 0;}
  .vnf-eco2-page .app-item span{white-space:normal;}
  .vnf-eco2-page .app-panel{padding:38px;}
}
@media(min-width:900px){
  .vnf-eco2-page #ecosystem{padding:124px 0;}
  .vnf-eco2-page .app-layout{display:grid; grid-template-columns:280px 1fr; gap:32px;}
  .vnf-eco2-page .app-list{flex-direction:column; overflow-x:visible; max-height:600px; overflow-y:auto; padding:0 6px 0 0;}
  .vnf-eco2-page .app-item{scroll-snap-align:none;}
  .vnf-eco2-page .app-panel{padding:44px; min-height:480px;}
}

/* ===== FOLLOW CTA (between Ecosystem and Footer) ===== */
.vnf-eco2-page .follow-cta{background:var(--eco2-primary-dark); padding:72px 0; text-align:center;}
.vnf-eco2-page .follow-cta-inner{max-width:620px; margin:0 auto;}
.vnf-eco2-page .follow-cta .eyebrow{color:var(--eco2-white); border-bottom-color:rgba(255,255,255,.4); display:inline-block;}
.vnf-eco2-page .follow-cta-inner p{color:rgba(255,255,255,.92); font-size:clamp(17px,3.2vw,21px); line-height:1.7; font-weight:400; margin-top:10px; text-wrap:pretty;}
@media(min-width:640px){
  .vnf-eco2-page .follow-cta{padding:92px 0;}
}

/* ===== FOOTER (mobile-first stacked, corporate — flat blue + dot-map texture) ===== */
.vnf-eco2-page footer{background:var(--eco2-primary); padding:64px 0 32px; color:rgba(255,255,255,.72); position:relative; overflow:hidden;}
/* decorative low-opacity dotted texture — purely visual, never above text, never blocks interaction */
.vnf-eco2-page .foot-pattern{
  position:absolute; inset:0; z-index:0; pointer-events:none;
  background-image:radial-gradient(circle, rgba(255,255,255,.16) 1.4px, transparent 1.4px);
  background-size:22px 22px;
  -webkit-mask-image:radial-gradient(ellipse 85% 80% at 50% 40%, rgba(0,0,0,.9), transparent 75%);
  mask-image:radial-gradient(ellipse 85% 80% at 50% 40%, rgba(0,0,0,.9), transparent 75%);
}
.vnf-eco2-page footer .wrap{position:relative; z-index:1;}
.vnf-eco2-page .foot-top{display:flex; flex-direction:column; align-items:flex-start; text-align:left; gap:40px; padding-bottom:36px; border-bottom:1px solid rgba(255,255,255,.14);}
.vnf-eco2-page .foot-brand{display:flex; flex-direction:column; align-items:flex-start; margin-bottom:8px;}
.vnf-eco2-page .foot-contact-grid{display:grid; grid-template-columns:1fr; gap:30px; text-align:left; width:100%;}
.vnf-eco2-page .foot-contact-block{padding:0; text-align:left;}
.vnf-eco2-page .foot-contact-block h5{color:var(--eco2-white); font-size:14px; letter-spacing:.08em; margin-bottom:14px; font-weight:800; text-transform:uppercase;}
.vnf-eco2-page .foot-contact-block p{font-size:14.5px; line-height:2; color:rgba(255,255,255,.75); word-break:break-word; text-wrap:pretty;}
.vnf-eco2-page .foot-contact-block a{color:rgba(255,255,255,.95); font-weight:700; transition:color .2s ease; white-space:nowrap;}
.vnf-eco2-page .foot-contact-block a:hover{color:var(--eco2-white); text-decoration:underline;}
.vnf-eco2-page .foot-contact-block .foot-note{color:rgba(255,255,255,.6); font-weight:400;}
.vnf-eco2-page .foot-bottom{display:flex; flex-direction:column; gap:10px; padding-top:22px; font-size:13px; text-align:left;}
.vnf-eco2-page .foot-bottom a:hover{color:var(--eco2-white); text-decoration:underline;}
@media(min-width:640px){
  .vnf-eco2-page footer{padding:80px 0 36px;}
  .vnf-eco2-page .foot-top{flex-direction:row; align-items:flex-start; justify-content:space-between; gap:56px; padding-bottom:40px;}
  .vnf-eco2-page .foot-brand{margin-bottom:0; flex:0 0 auto;}
  .vnf-eco2-page .foot-contact-grid{grid-template-columns:repeat(2,1fr); gap:20px 56px; flex:1 1 auto; max-width:640px;}
  .vnf-eco2-page .foot-bottom{flex-direction:row; justify-content:space-between; text-align:left; font-size:13.5px;}
}

.vnf-eco2-page .reveal{opacity:0; transform:translateY(24px); transition:opacity .7s ease, transform .7s ease;}
.vnf-eco2-page .reveal.in{opacity:1; transform:translateY(0);}
.vnf-eco2-page .app-panel.reveal{transition-delay:.12s;}

/* Safety net: nothing is ever allowed to force horizontal scroll */
.vnf-eco2-page{max-width:100%; overflow-x:hidden;}
.vnf-eco2-page *{min-width:0;}
`
