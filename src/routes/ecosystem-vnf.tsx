import { createFileRoute } from "@tanstack/react-router"
import { useEffect, useRef, useState } from "react"
import type { ReactNode } from "react"

export const Route = createFileRoute("/ecosystem-vnf")({ component: EcosystemVnfPage })

/* ── Media (uploaded to MinIO) ──────────────────────────────────────────── */
const MEDIA_BASE = "https://minio-tuan.ls01.vnfoods.vn/video-management/ecosystem-vnf"
const LOGO_BASE = "/ecosystem-vnf/logos"
const BG_URL = "https://minio-tuan.ls01.vnfoods.vn/eco-media/bg_01.png"

const MINIO_BASE_URL = "https://minio-tuan.ls01.vnfoods.vn/eco-media/"
const VI_ORG = `${MINIO_BASE_URL}vi.mp4`
const EN_ORG = `${MINIO_BASE_URL}en.mp4`

const VI_ZH = `${MINIO_BASE_URL}vi_zh.mp4`
const EN_ZH = `${MINIO_BASE_URL}en_zh.mp4`

const VI_FR = `${MINIO_BASE_URL}vi_fr.mp4`
const EN_FR = `${MINIO_BASE_URL}en_fr.mp4`

const VI_THAI = `${MINIO_BASE_URL}vi_thai.mp4`
const EN_THAI = `${MINIO_BASE_URL}en_thai.mp4`

const VI_KR = `${MINIO_BASE_URL}vi_kr.mp4`
const EN_KR = `${MINIO_BASE_URL}en_kr.mp4`

const VI_JA = `${MINIO_BASE_URL}vi_ja.mp4`
const EN_JA = `${MINIO_BASE_URL}en_ja.mp4`


const HERO_POSTER = { vi: `${MEDIA_BASE}/vi_vnf.jpg`, en: `${MEDIA_BASE}/en_vnf.jpg` }

type Lang = "vi" | "en"

/* ── Hero video variants: (page language × subtitle language) ────────────── */
type SubLang = "org" | "thai" | "zh" | "kr" | "ja" | "fr"

const HERO_VIDEOS: Record<Lang, Record<SubLang, string>> = {
  vi: { org: VI_ORG, thai: VI_THAI, zh: VI_ZH, kr: VI_KR, ja: VI_JA, fr: VI_FR },
  en: { org: EN_ORG, thai: EN_THAI, zh: EN_ZH, kr: EN_KR, ja: EN_JA, fr: EN_FR },
}

const SUB_LANGS: ReadonlyArray<{ id: SubLang; label: Record<Lang, string> }> = [
  { id: "org", label: { vi: "Việt", en: "English" } },
  { id: "thai", label: { vi: "Thái", en: "Thai" } },
  { id: "zh", label: { vi: "Trung", en: "Chinese" } },
  { id: "kr", label: { vi: "Hàn", en: "Korean" } },
  { id: "ja", label: { vi: "Nhật", en: "Japanese" } },
  { id: "fr", label: { vi: "Pháp", en: "French" } },
]

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
      "Vietnam Food (VNF) tiên phong chuyển hóa\nphụ phẩm tôm thành các nguyên liệu hoạt tính sinh học có giá trị.",
    heroLead1b:
      "Với mô hình sản xuất độc quyền ứng dụng công nghệ sinh học theo định hướng sản xuất không chất thải (zero-waste), chúng tôi tối ưu hóa việc thu hồi dinh dưỡng và giảm thiểu\ncác tác động môi trường.",
    heroLead2: "Từ các nguyên liệu này, chúng tôi phát triển nhiều\nứng dụng khác nhau tạo nên Hệ sinh thái VNF.",
    ctaExplore: "Khám phá hệ sinh thái",
    ctaContact: "Liên hệ hợp tác",
    socialHead: "Kết nối & theo dõi VNF tại đây",
    socialWebsite: "Trang chủ VNF",
    socialWebsiteGroup: "Nhà máy",
    socialSocialGroup: "Mạng xã hội",
    socialEmail: "Email",
    socialEmailGroup: "Email",
    socialCaMau: "Nhà Máy Cà Mau",
    socialHauGiang: "Nhà Máy Hậu Giang",
    ecoEyebrow: "HỆ SINH THÁI VNF",
    ecoTitlePrefix: "Chào mừng bạn đến với hệ sinh thái VNF,",
    ecoTitleRest: "nơi kiến tạo các giải pháp hoạt tính sinh học",
    swipeMore: "Lướt để xem thêm >>>",
    fbLink: "Xem Facebook",
    liLink: "Xem LinkedIn",
    followEyebrow: "KẾT NỐI CÙNG VNF",
    followText:
      "Theo dõi các kênh của Hệ sinh thái VNF [br-m]để không bỏ lỡ những câu chuyện, [br-d]giải pháp, [br-m]và sáng kiến mới nhất của chúng tôi.",
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
      "Vietnam Food (VNF) is a pioneer in valorizing\nshrimp-byproducts into valuable bioactive ingredients.",
    heroLead1b:
      "By applying proprietary biotechnological\nzero-waste production model, we maximize\nnutrient recovery & minimize environmental impacts.",
    heroLead2: "From these ingredients, we develop various applications that together form the VNF Ecosystem.",
    ctaExplore: "Explore the Ecosystem",
    ctaContact: "Get in touch",
    socialHead: "Connect & follow VNF",
    socialWebsite: "VNF Homepage",
    socialWebsiteGroup: "Website",
    socialSocialGroup: "Social Media",
    socialEmail: "Email",
    socialEmailGroup: "Email",
    socialCaMau: "Ca Mau Factory",
    socialHauGiang: "Hau Giang Factory",
    ecoEyebrow: "VNF ECOSYSTEM",
    ecoTitlePrefix: "Welcome to the VNF Ecosystem,",
    ecoTitleRest: "where bioactive innovation begins",
    swipeMore: "Swipe for more >>>",
    fbLink: "Visit Facebook",
    liLink: "Visit LinkedIn",
    followEyebrow: "STAY CONNECTED",
    followText:
      "Follow the VNF Ecosystem channels [br-m]to keep up with our latest stories, [br-d]solutions, [br-m]and initiatives.",
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
      name: "VUON XANH VIETNAM (EcoBlossom)",
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
      name: "VAT NUOI VUI KHOE (Happy Animals)",
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
      name: "TOM4PET",
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
      name: "TOM YUMMY",
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
      name: "BIOINSHELL",
      cat: "Công nghiệp",
      long: "BIOINSHELL là mảng kinh doanh sáng tạo tập trung phát triển các giải pháp bio-polymer từ tôm ứng dụng trong nhiều ngành như nhựa sinh học, vật liệu sinh học, và xử lý nước. Những vật liệu này được biết đến với tính tương thích sinh học, phân hủy sinh học, khả năng kháng khuẩn và tạo màng, hướng tới thay thế các hóa chất và polymer có nguồn gốc hóa thạch.",
    },
    en: {
      name: "BIOINSHELL",
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
      name: "RETRIV™",
      cat: "Giải pháp thu hồi dưỡng chất",
      long: "RETRIV™ là giải pháp công nghệ tiên phong, biến “dòng nước thải” của các nhà máy chế biến thực phẩm thành “dòng tài nguyên” bằng cách thu hồi dinh dưỡng, giảm ô nhiễm và tạo ra các sản phẩm giá trị gia tăng theo hướng kinh tế tuần hoàn. Giải pháp cung cấp trọn bộ từ hoạt chất đến hệ thiết bị vận hành.",
    },
    en: {
      name: "RETRIV™",
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
        <symbol id="eco2-i-facebook" viewBox="0 0 48 48">
          <path fill="#4460A0" d="M25.638355,48 L2.649232,48 C1.185673,48 0,46.813592 0,45.350603 L0,2.649211 C0,1.18585 1.185859,0 2.649232,0 L45.350955,0 C46.813955,0 48,1.18585 48,2.649211 L48,45.350603 C48,46.813778 46.813769,48 45.350955,48 L33.119305,48 L33.119305,29.411755 L39.358521,29.411755 L40.292755,22.167586 L33.119305,22.167586 L33.119305,17.542641 C33.119305,15.445287 33.701712,14.01601 36.70929,14.01601 L40.545311,14.014333 L40.545311,7.535091 C39.881886,7.446808 37.604784,7.24957 34.955552,7.24957 C29.424834,7.24957 25.638355,10.625526 25.638355,16.825209 L25.638355,22.167586 L19.383122,22.167586 L19.383122,29.411755 L25.638355,29.411755 L25.638355,48 L25.638355,48 Z" />
        </symbol>
        <symbol id="eco2-i-facebook-btn" viewBox="0 0 48 48">
          <g transform="translate(-200, -160)">
            <path fill="currentColor" d="M225.638355,208 L202.649232,208 C201.185673,208 200,206.813592 200,205.350603 L200,162.649211 C200,161.18585 201.185859,160 202.649232,160 L245.350955,160 C246.813955,160 248,161.18585 248,162.649211 L248,205.350603 C248,206.813778 246.813769,208 245.350955,208 L233.119305,208 L233.119305,189.411755 L239.358521,189.411755 L240.292755,182.167586 L233.119305,182.167586 L233.119305,177.542641 C233.119305,175.445287 233.701712,174.01601 236.70929,174.01601 L240.545311,174.014333 L240.545311,167.535091 C239.881886,167.446808 237.604784,167.24957 234.955552,167.24957 C229.424834,167.24957 225.638355,170.625526 225.638355,176.825209 L225.638355,182.167586 L219.383122,182.167586 L219.383122,189.411755 L225.638355,189.411755 L225.638355,208 L225.638355,208 Z" />
          </g>
        </symbol>
        <symbol id="eco2-i-linkedin" viewBox="0 0 382 382">
          <path style={{ fill: "#0077B7" }} d="M347.445,0H34.555C15.471,0,0,15.471,0,34.555v312.889C0,366.529,15.471,382,34.555,382h312.889 C366.529,382,382,366.529,382,347.444V34.555C382,15.471,366.529,0,347.445,0z M118.207,329.844c0,5.554-4.502,10.056-10.056,10.056 H65.345c-5.554,0-10.056-4.502-10.056-10.056V150.403c0-5.554,4.502-10.056,10.056-10.056h42.806 c5.554,0,10.056,4.502,10.056,10.056V329.844z M86.748,123.432c-22.459,0-40.666-18.207-40.666-40.666S64.289,42.1,86.748,42.1 s40.666,18.207,40.666,40.666S109.208,123.432,86.748,123.432z M341.91,330.654c0,5.106-4.14,9.246-9.246,9.246H286.73 c-5.106,0-9.246-4.14-9.246-9.246v-84.168c0-12.556,3.683-55.021-32.813-55.021c-28.309,0-34.051,29.066-35.204,42.11v97.079 c0,5.106-4.139,9.246-9.246,9.246h-44.426c-5.106,0-9.246-4.14-9.246-9.246V149.593c0-5.106,4.14-9.246,9.246-9.246h44.426 c5.106,0,9.246,4.14,9.246,9.246v15.655c10.497-15.753,26.097-27.912,59.312-27.912c73.552,0,73.131,68.716,73.131,106.472 L341.91,330.654L341.91,330.654z" />
        </symbol>
        <symbol id="eco2-i-linkedin-btn" viewBox="0 0 16 16">
          <path fill="currentColor" d="M12.225 12.225h-1.778V9.44c0-.664-.012-1.519-.925-1.519-.926 0-1.068.724-1.068 1.47v2.834H6.676V6.498h1.707v.783h.024c.348-.594.996-.95 1.684-.925 1.802 0 2.135 1.185 2.135 2.728l-.001 3.14zM4.67 5.715a1.037 1.037 0 01-1.032-1.031c0-.566.466-1.032 1.032-1.032.566 0 1.031.466 1.032 1.032 0 .566-.466 1.032-1.032 1.032zm.889 6.51h-1.78V6.498h1.78v5.727zM13.11 2H2.885A.88.88 0 002 2.866v10.268a.88.88 0 00.885.866h10.226a.882.882 0 00.889-.866V2.865a.88.88 0 00-.889-.864z"></path>
        </symbol>
        <symbol id="eco2-i-youtube" viewBox="0 0 461.001 461.001">
          <path style={{ fill: "#F61C0D" }} d="M365.257,67.393H95.744C42.866,67.393,0,110.259,0,163.137v134.728 c0,52.878,42.866,95.744,95.744,95.744h269.513c52.878,0,95.744-42.866,95.744-95.744V163.137 C461.001,110.259,418.135,67.393,365.257,67.393z M300.506,237.056l-126.06,60.123c-3.359,1.602-7.239-0.847-7.239-4.568V168.607 c0-3.774,3.982-6.22,7.348-4.514l126.06,63.881C304.363,229.873,304.298,235.248,300.506,237.056z" />
        </symbol>
        <symbol id="eco2-i-tiktok" viewBox="0 0 38.51 38.51">
          <defs>
            <linearGradient id="tiktok-grad-a" x1="3.65" x2="34.85" y1=".66" y2="37.84" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#323232"></stop>
              <stop offset="1"></stop>
            </linearGradient>
            <linearGradient id="tiktok-grad-b" x1="3.85" x2="35.05" y1=".5" y2="37.68" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#646464"></stop>
              <stop offset=".43" stopColor="#1d1d1d"></stop>
              <stop offset=".6"></stop>
            </linearGradient>
          </defs>
          <g style={{ isolation: 'isolate' }}>
            <g>
              <g>
                <g>
                  <rect width="38.51" height="38.51" fill="url(#tiktok-grad-a)" rx="6.97" ry="6.97"></rect>
                  <g>
                    <path fill="url(#tiktok-grad-b)" d="M38.51,31.54v-11.64c-2.31-2.35-4.72-4.62-6.98-7.03-.45,0-.9-.05-1.33-.14v3.59c-2.37,0-4.56-.75-6.35-2.03v9.3c0,4.65-3.77,8.42-8.43,8.42-1.74,0-3.35-.52-4.69-1.42,2.69,2.67,5.27,5.27,7.92,7.92h12.9c3.83,0,6.97-3.14,6.97-6.97Z"></path>
                    <path fill="#ff1753" d="M38.51,31.54v-11.64c-2.31-2.35-4.72-4.62-6.98-7.03-.45,0-.9-.05-1.33-.14v3.59c-2.37,0-4.56-.75-6.35-2.03v9.3c0,4.65-3.77,8.42-8.43,8.42-1.74,0-3.35-.52-4.69-1.42,2.69,2.67,5.27,5.27,7.92,7.92h12.9c3.83,0,6.97-3.14,6.97-6.97Z" style={{ mixBlendMode: 'multiply' }}></path>
                  </g>
                  <g>
                    <g>
                      <path fill="#ff1753" fillRule="evenodd" d="M26.82,10.8c-.92-1-1.52-2.29-1.65-3.72v-.59h-1.26c.32,1.81,1.4,3.37,2.91,4.31h0ZM13.66,27.02c-.51-.67-.79-1.49-.79-2.33,0-2.13,1.73-3.85,3.86-3.85.4,0,.79.06,1.17.18v-4.66c-.44-.06-.89-.09-1.33-.08v3.63c-.38-.12-.77-.18-1.17-.18-2.13,0-3.86,1.73-3.86,3.85,0,1.5.86,2.81,2.12,3.44Z" opacity=".8"></path>
                      <path fill="#fff" fillRule="evenodd" d="M23.84,14.29c1.79,1.28,3.99,2.03,6.35,2.03v-3.59c-1.32-.28-2.49-.97-3.37-1.93-1.51-.94-2.59-2.49-2.91-4.31h-3.32v18.2c0,2.12-1.73,3.84-3.86,3.84-1.25,0-2.36-.6-3.07-1.52-1.26-.63-2.12-1.94-2.12-3.44,0-2.13,1.73-3.85,3.86-3.85.41,0,.8.06,1.17.18v-3.63c-4.57.09-8.25,3.83-8.25,8.42,0,2.29.92,4.37,2.4,5.89,1.34.9,2.96,1.42,4.69,1.42,4.65,0,8.43-3.77,8.43-8.42v-9.3Z"></path>
                      <path fill="#00c9d0" fillRule="evenodd" d="M30.19,12.73v-.97c-1.19,0-2.36-.33-3.37-.96.9.98,2.08,1.66,3.37,1.93ZM23.91,6.49c-.03-.17-.05-.35-.07-.52v-.59h-4.59v18.2c0,2.12-1.73,3.84-3.86,3.84-.62,0-1.21-.15-1.73-.41.7.92,1.82,1.52,3.07,1.52,2.12,0,3.85-1.72,3.86-3.84V6.49h3.32ZM16.57,16.28v-1.03c-.38-.05-.77-.08-1.16-.08-4.66,0-8.43,3.77-8.43,8.42,0,2.92,1.48,5.49,3.74,7-1.49-1.52-2.4-3.6-2.4-5.89,0-4.59,3.68-8.33,8.25-8.42h0Z"></path>
                    </g>
                    <path fill="#ff1753" fillRule="evenodd" d="M25.17,15.4c1.79,1.28,3.99,2.03,6.35,2.03v-4.56c-.45,0-.9-.05-1.33-.14v3.59c-2.37,0-4.56-.75-6.35-2.03v9.3c0,4.65-3.77,8.42-8.43,8.42-1.74,0-3.35-.52-4.69-1.42,1.53,1.56,3.66,2.53,6.03,2.53,4.66,0,8.43-3.77,8.43-8.42v-9.3h0Z" opacity=".8"></path>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </symbol>
        <symbol id="eco2-i-mail" viewBox="0 0 1024 1024">
          <path fill="#FFFFFF" d="M262.8 139.5l497.4-2.5v219.2s59.7 25.8 66.9 30.5c21.6 14.3 53.6 20 53.6 92.3v323.7c0 41.2-33.4 74.5-74.5 74.5H216.4c-41.2 0-74.5-33.4-74.5-74.5V497c0-5.4 0.6-15.2 0-27-1.3-25.8 3.7-51.1 29.7-70.2 15.1-11.1 34.5-18.5 51-25.9 22.4-10.1 40.2-17.9 40.2-17.9V139.5z" />
          <path fill="#E6E6E6" d="M262.8 399.8l-38.7 17.3-0.4 0.2c-16.2 6.4-26.4 12.4-32.6 18.5l71.8 38.8v-74.8zM797.8 416.7L760.2 400v74.4l70.6-38.2c-6.5-5.6-16.9-11.5-33-19.5z" />
          <path fill="#4e78c6" d="M252.6 753.6V560.7c0-5.5-4.5-10-10-10s-10 4.5-10 10v192.9c0 19.5 15.9 35.4 35.4 35.4h298.8c5.5 0 10-4.5 10-10s-4.5-10-10-10H267.9c-8.4-0.1-15.3-7-15.3-15.4z" />
          <path fill="#4e78c6" d="M302.8 368.6zM878 437.7c0 0.2 0.1 0.3 0.1 0.4 0-0.1-0.1-0.3-0.1-0.4zM607.2 475.5c15.4-8.5 27.6-20.2 35.1-33.4 2.4-2.2 3.8-5.1 4-8.3 0.3-0.8 0.7-1.7 1-2.5h-1c-0.2-6.8-5.9-12.2-12.8-12.2-6.6 0-12.1 5-12.7 11.6h-0.2c-9.9 12.4-23 21.1-39.2 27.3-16.2 6.2-35.6 10.2-58.2 10.2-23.4 0-42.8-4.6-61-12-17.9-7.2-33-19.9-43.2-36.2-10-16.1-15-33.3-15-53 0-20.2 5.1-39.6 14.1-58.3 8.7-18.3 22.8-33.4 40.4-43.4 17.8-10.3 38.2-15.6 63.7-15.6 30.1 0 53.6 7.9 70.4 23.3 16.8 15.4 21.8 34.6 21.8 57.5 0 12.8-1.6 25.1-7.5 37-5.9 11.9-11.7 18.4-21.3 25.5-7.1 5.4-23.1 11.7-27.7 11.7-1.5 0-2.8-0.6-3.9-1.8-1.1-1.1-1.6-2.9-1.6-5.2 0.3-4.3 1-8.6 2-12.9l21-80.3c1-1.8 1.8-3.7 1.8-5.9l-0.1-0.6 0.1-0.4h-0.1v-0.1c0-6.7-5.6-12.2-12.4-12.2-3.3 0-6.4 1.2-8.8 3.5-2.3 2.3-3.7 5.4-3.7 8.7l0.1 1.1c0 0.8 0.3 1.5 0.5 2.2l-1.3 4.7c-8-12.7-26.8-20.5-43.7-20.5-14.3 0-35.7 9.9-50.3 32.2-10.8 17.1-17 36.7-17.8 56.8-0.6 17.7 4.7 33.4 15 44 10.3 10.6 23 13.7 30.9 13.7 14.5 0 27.4-5.3 38.5-15.9 1.1 4.8 3.9 9 7.9 11.8 3.9 2.7 9.8 4.1 17.7 4.1 29.1 0 55.9-15.2 70.7-35.6 12.7-17.3 19.8-40.6 19.8-64.3 0-19.9-3.2-38.3-13-55.1-9.8-16.8-22.4-29.8-40.9-38.9-18.5-9.1-39.6-13.7-63.4-13.7-28 0-53 5.7-74.8 17-21.8 11.3-39 28.3-51.5 50.8-12.6 22.6-18.9 46.9-18.9 73.1-0.2 23.1 5.5 45.8 16.6 66.1 11.2 20.9 29 37.4 50.6 47.2 22.7 10.4 49.5 15.6 80.7 15.6 32 0 59.3-6.1 81.6-18.4zM530 368.6c-3.7 10.9-8 19.2-13 24.9-3.5 4-7.1 6.9-10.6 8.8-4.7 2.6-8.2 4.6-13.6 4.6-7.2 0-16.3-2.8-21.1-8.4-4.9-5.6-7.3-14.3-7.3-26.1 0-8.8 4.6-19 8.1-30.4 3.5-11.4 8.7-17.2 15.6-23.4 6.9-6.2 13.2-7.9 21.3-7.9 7.6 0 15.6 2.2 20.5 7.8 5 5.6 8.1 10 8.1 20.5 0.1 9.3-4.4 18.7-8 29.6z" />
          <path fill="#4e78c6" d="M878.1 438.1c0-0.2-0.1-0.3-0.1-0.4-8.7-30.2-37.2-44.3-62.8-57l-0.4-0.2-54.6-24.4V137l-497.4 2.5V356l-54.2 24.2c-31.1 12.3-66.7 32.3-66.7 77.5v345.1c0 41 33.4 74.4 74.4 74.4h590c41 0 74.4-33.4 74.4-74.4V457.7c0-7.2-0.9-13.7-2.6-19.6zM760.2 400l37.6 16.8c16.2 8 26.5 13.9 33 19.4l-70.6 38.2V400z m-457.4-31.4V179.3l417.4-2.1V496l-199 107.7c-6.1 3.3-13.5 3.3-19.6 0L302.8 496.2V368.6z m-40 31.2v74.8L191 435.7c6.2-6.1 71.8-35.9 71.8-35.9z m577.9 403c0 19-15.4 34.4-34.4 34.4h-590c-19 0-34.4-15.4-34.4-34.4V476.3L482.4 639c9 4.9 18.9 7.3 28.9 7.3 9.9 0 19.8-2.4 28.9-7.3l300.5-162.7v326.5z" />
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

type SocialTreeNodeData = {
  id: string
  name: string
  color: string
  href?: string
  logo?: string
  icon?: string
  children?: Array<SocialTreeNodeData>
}

function SocialTreeNode({
  node,
  level = 0,
}: {
  node: SocialTreeNodeData
  level?: number
}) {
  const isRoot = level === 0
  const isGroup = level === 1
  const hasChildren = Boolean(node.children?.length)
  const isLeaf = !hasChildren

  const content: ReactNode = (
    <>
      <div className={`social-tree-logo ${isRoot ? "social-tree-logo--root" : ""}`}>
        {node.logo ? <img src={node.logo} alt="" /> : <svg><use href={`#eco2-${node.icon}`} /></svg>}
      </div>
      <div className="social-tree-name">{node.name}</div>
    </>
  )

  return (
    <div className="social-tree-node">
      {node.href ? (
        <a
          className={`social-tree-card ${isRoot ? "social-tree-card--root" : ""} ${isGroup ? "social-tree-card--group" : ""} ${isLeaf ? "social-tree-card--leaf" : ""}`}
          href={node.href}
          target={node.href.startsWith("mailto:") ? undefined : "_blank"}
          rel={node.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
          style={{ borderColor: node.color, color: node.color }}
          data-id={node.id}
          data-group={isGroup ? node.id : undefined}
        >
          {content}
        </a>
      ) : (
        <div
          className={`social-tree-card ${isGroup ? "social-tree-card--group" : ""} ${isLeaf ? "social-tree-card--leaf" : ""}`}
          style={{ borderColor: node.color, color: node.color }}
          data-group={isGroup ? node.id : undefined}
        >
          {content}
        </div>
      )}

      {hasChildren && (
        <div className="social-tree-children">
          <div className="social-tree-stem" />
          <div className="social-tree-child-list">
            {node.children?.map((child, index) => (
              <div key={child.id} className="social-tree-child">
                {node.children && node.children.length > 1 && (
                  <div
                    className={`social-tree-branch ${index === 0 ? "social-tree-branch--first" : ""} ${index === node.children.length - 1 ? "social-tree-branch--last" : ""}`}
                  />
                )}
                <div className="social-tree-stem" />
                <SocialTreeNode node={child} level={level + 1} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

/* ── Page ────────────────────────────────────────────────────────────────── */
function EcosystemVnfPage() {
  const [lang, setLang] = useState<Lang>("vi")
  const [subLang, setSubLang] = useState<SubLang>("org")
  const [appIndex, setAppIndex] = useState(0)
  const [showAppScrollHint, setShowAppScrollHint] = useState(false)
  const [activeSection, setActiveSection] = useState<"home" | "ecosystem">("home")
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [isHiding, setIsHiding] = useState(false)
  const ecoTitleRef = useRef<HTMLHeadingElement>(null)
  const appInfoRef = useRef<HTMLDivElement>(null)
  const appListRef = useRef<HTMLDivElement>(null)
  const heroVideoRef = useRef<HTMLVideoElement>(null)
  const heroSubtabsRef = useRef<HTMLDivElement>(null)
  const heroSkipFirstAutoPlayRef = useRef(true)
  const heroFirstAnimSkipRef = useRef(true)
  const t = T[lang]
  const active = ECOSYSTEM[appIndex]
  const ecoTitleFull = `${t.ecoTitlePrefix}\n${t.ecoTitleRest}`

  // Auto-scroll app-list on phone - REMOVED (now manual scroll only)
  // useEffect(() => {
  //   ... previous auto-scroll code removed ...
  // }, [])

  // socialTree — DOM order là DFS visit: root → YouTube → Facebook → TikTok → LinkedIn → CàMau → Email → HậuGiang
  // Phone 2-col grid (placement điều khiển qua CSS [data-id] selector):
  //   → Cột trái:  Website · Facebook · LinkedIn · Cà Mau
  //   → Cột phải:  Email    · YouTube   · TikTok    · Hậu Giang
  // Desktop/Tablet (flat grid 4 cột, group bị ẩn): Website · LinkedIn · Facebook · Email / YouTube · TikTok · Cà Mau · Hậu Giang
  const socialTree: SocialTreeNodeData = {
    id: "vnf",
    name: t.socialWebsite,
    color: "#1f5da0",
    href: "https://www.vnfoods.vn",
    logo: `${LOGO_BASE}/vnf.png`,
    children: [
      // interleaved so DFS index alternates L/R correctly on phone
      {
        id: "youtube-group",
        name: "YouTube",
        color: "#FF0000",
        icon: "i-youtube",
        children: [
          { id: "youtube", name: "YouTube", color: "#FF0000", href: "https://youtube.com/@vietnamfood.offical", icon: "i-youtube" },
        ],
      },
      {
        id: "facebook-group",
        name: "Facebook",
        color: "#1877F2",
        icon: "i-facebook",
        children: [
          { id: "facebook", name: "Facebook", color: "#1877F2", href: "https://www.facebook.com/vnfoods.vn", icon: "i-facebook" },
        ],
      },
      {
        id: "tiktok-group",
        name: "TikTok",
        color: "#010101",
        icon: "i-tiktok",
        children: [
          { id: "tiktok", name: "TikTok", color: "#010101", href: "https://www.tiktok.com/@vietnamfood.mediachannel", icon: "i-tiktok" },
        ],
      },
      {
        id: "linkedin-group",
        name: "LinkedIn",
        color: "#0A66C2",
        icon: "i-linkedin",
        children: [
          { id: "linkedin", name: "LinkedIn", color: "#0A66C2", href: "https://www.linkedin.com/company/vnf/", icon: "i-linkedin" },
        ],
      },
      {
        id: "websites",
        name: t.socialWebsiteGroup,
        color: "#0e7490",
        logo: `${LOGO_BASE}/vnf.png`,
        children: [
          { id: "ca-mau", name: t.socialCaMau, color: "#0e7490", href: "https://www.facebook.com/profile.php?id=100063618936458", logo: `${LOGO_BASE}/ca-mau.png` },
        ],
      },
      {
        id: "email-group",
        name: t.socialEmailGroup,
        color: "#4e78c6",
        logo: `${LOGO_BASE}/vnf.png`,
        children: [
          { id: "email", name: t.socialEmail, color: "#4e78c6", href: "mailto:sales@vnfoods.vn", icon: "i-mail" },
        ],
      },
      {
        id: "hau-giang-group",
        name: t.socialHauGiang,
        color: "#0e7490",
        logo: `${LOGO_BASE}/hau-giang.png`,
        children: [
          { id: "hau-giang", name: t.socialHauGiang, color: "#0e7490", href: "https://www.facebook.com/vnf.haugiang", logo: `${LOGO_BASE}/hau-giang.png` },
        ],
      },
    ],
  }

  useEffect(() => {
    const el = appInfoRef.current
    if (!el) return
    el.classList.remove("app-fade-in")
    void el.offsetWidth
    el.classList.add("app-fade-in")
  }, [appIndex])

  useEffect(() => {
    const el = appListRef.current
    if (!el) return

    const updateScrollHint = () => {
      setShowAppScrollHint(el.scrollWidth > el.clientWidth + 1)
    }

    updateScrollHint()
    const resizeObserver = new ResizeObserver(updateScrollHint)
    resizeObserver.observe(el)
    return () => resizeObserver.disconnect()
  }, [lang])

  // Auto-play the hero video whenever the user switches subtitle or page language
  // (skipped on the very first mount so the video doesn't auto-play on page load).
  useEffect(() => {
    if (heroSkipFirstAutoPlayRef.current) {
      heroSkipFirstAutoPlayRef.current = false
      return
    }
    const v = heroVideoRef.current
    if (!v) return
    const p = v.play()
    if (p && typeof p.catch === "function") p.catch(() => { /* autoplay blocked, ignore */ })
  }, [lang, subLang])

  // Re-run the same fade-in animation on both the video and the subtitle tab list
  // whenever lang/subLang changes, so they animate in sync.
  useEffect(() => {
    if (heroFirstAnimSkipRef.current) {
      heroFirstAnimSkipRef.current = false
      return
    }
    const targets = [
      heroVideoRef.current?.parentElement, // .hero-video
      heroSubtabsRef.current,              // .hero-subtabs
    ].filter(Boolean) as HTMLElement[]
    targets.forEach(t => {
      t.classList.remove("hero-fade-in")
      // Cancel any in-flight animation to guarantee a fresh re-trigger
      t.getAnimations().forEach(a => a.cancel())
      void t.offsetWidth // force reflow so the animation re-triggers
      t.classList.add("hero-fade-in")
    })
  }, [lang, subLang])

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

    // Show/hide back to top button based on scroll position
    const handleScroll = () => {
      const shouldShow = window.scrollY > 400

      if (!shouldShow && showBackToTop) {
        // Scrolled back to top - trigger hide animation first
        setIsHiding(true)
        setTimeout(() => {
          setShowBackToTop(false)
          setIsHiding(false)
        }, 300) // Match animation duration
      } else if (shouldShow && !showBackToTop) {
        // Scrolled down - show button
        setShowBackToTop(true)
        setIsHiding(false)
      }
    }
    window.addEventListener('scroll', handleScroll)

    return () => {
      spy.disconnect()
      reveal.disconnect()
      window.removeEventListener('scroll', handleScroll)
    }
  }, [showBackToTop])

  const showApp = (i: number) => setAppIndex((i + ECOSYSTEM.length) % ECOSYSTEM.length)
  const lockRatio = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    const v = e.currentTarget
    if (v.videoWidth && v.videoHeight) v.style.aspectRatio = `${v.videoWidth} / ${v.videoHeight}`
  }
  const scrollToTop = () => {
    // Trigger hide animation before scrolling
    setIsHiding(true)
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 150)
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
            </div>
            <div className="langtoggle">
              <button className={lang === "vi" ? "active" : ""} onClick={() => setLang("vi")}>VN</button>
              <button className={lang === "en" ? "active" : ""} onClick={() => setLang("en")}>EN</button>
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
              <span className="hero-title-prefix">{t.heroTitlePrefix}</span>
              <span className="accent">{t.heroTitleAccent}{t.heroTitleSuffix}</span>
            </h1>
            <p className="lead">
              {t.heroLead1}
              <br /><br />
              {t.heroLead1b}
              <br /><br />
              {t.heroLead2}
            </p>
            <div className="hero-ctas">
              <a href="#ecosystem" className="btn btn-ghost">{t.ctaExplore}</a>
              <a href="mailto:sales@vnfoods.vn" className="btn btn-ghost">{t.ctaContact}</a>
            </div>
          </div>
          <div className="hero-media">
            <div className="hero-video reveal">
              <video
                key={`hero-${lang}-${subLang}`}
                ref={heroVideoRef}
                controls
                preload="metadata"
                playsInline
                poster={HERO_POSTER[lang]}
                src={HERO_VIDEOS[lang][subLang]}
                onLoadedMetadata={lockRatio}
              />
            </div>
            <div ref={heroSubtabsRef} className="hero-subtabs" role="tablist" aria-label={lang === "vi" ? "Ngôn ngữ phụ đề" : "Subtitle language"}>
              {SUB_LANGS.map(s => (
                <button
                  key={s.id}
                  type="button"
                  role="tab"
                  aria-selected={subLang === s.id}
                  aria-label={s.label[lang]}
                  className={`hero-subtab ${subLang === s.id ? "active" : ""}`}
                  onClick={() => setSubLang(s.id)}
                >
                  {s.label[lang]}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ SECTION 2: SOCIAL / CONNECT TREE ============ */}
      <div className="social-bar" id="social">
        <div className="wrap">
          <div className="social-bar-head reveal">{t.socialHead}</div>
        </div>
        <div className="social-tree-wrap reveal">
          <SocialTreeNode node={socialTree} />
        </div>
      </div>

      {/* ============ ECOSYSTEM (team spotlight) ============ */}
      <section id="ecosystem">
        <div className="wrap">
          <div className={`section-head section-head--${lang} reveal`}>
            <div className="eyebrow">{t.ecoEyebrow}</div>
            <h2 ref={ecoTitleRef}>
              {ecoTitleFull.split("\n").map((line, i, arr) => (
                <span key={i}>{line}{i < arr.length - 1 ? <br /> : null}</span>
              ))}
            </h2>
          </div>
          <div className="app-layout">
            {/* Single scrollable list for all devices */}
            <div ref={appListRef} className="app-list reveal">
              {ECOSYSTEM.map((e, i) => (
                <div key={e.fb} className={`app-item ${i === appIndex ? "active" : ""}`} onClick={() => showApp(i)}>
                  <div className="mini"><img src={e.logo[lang]} alt="" /></div>
                  <span>{e[lang].name}</span>
                </div>
              ))}
            </div>
            {showAppScrollHint && <div className="app-list-hint">{t.swipeMore}</div>}
            <div className="app-panel reveal" data-app-index={appIndex}>
              <div ref={appInfoRef} className="app-fade-in app-content">
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
              <div className="app-nav-section">
                <div className="app-links">
                  <a
                    className="btn btn-outline-navy"
                    href={active.fb}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ borderColor: "rgba(255,255,255,.5)", color: "var(--eco2-white)" }}
                  >
                    <svg style={{ width: 16, height: 16, fill: "currentColor" }}><use href="#eco2-i-facebook-btn" /></svg>
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
                      <svg style={{ width: 16, height: 16, fill: "currentColor" }}><use href="#eco2-i-linkedin-btn" /></svg>
                      {t.liLink}
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FOLLOW CTA ============ */}
      <section className="follow-cta follow-cta-glow">
        <div className="wrap">
          <div className="follow-cta-inner reveal">
            <div className="eyebrow">{t.followEyebrow}</div>
            <p>
              {t.followText.split(/(\[br-m\]|\[br-d\])/).map((part, i) => {
                if (part === "[br-m]") return <br key={i} className="mobile-br" />
                if (part === "[br-d]") return <br key={i} className="desktop-br" />
                return part
              })}
            </p>
          </div>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer>
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

      {/* ============ BACK TO TOP BUTTON (Desktop only) ============ */}
      {showBackToTop && (
        <button
          className={`back-to-top ${isHiding ? 'hiding' : 'show'}`}
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 19V5M5 12l7-7 7 7" />
          </svg>
        </button>
      )}

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
/* Smooth scroll behavior for anchor links */
html{
  scroll-behavior: smooth;
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

/* Eyebrow in ecosystem section - larger size */
.vnf-eco2-page #ecosystem .eyebrow{
  font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Noto Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
  font-size:15px; letter-spacing:.15em; padding-bottom:8px; margin-bottom:16px; border-bottom-width:3px;
}
@media(min-width:720px){ 
  .vnf-eco2-page #ecosystem .eyebrow{font-size:17px; letter-spacing:.18em;} 
}
@media(min-width:960px){ 
  .vnf-eco2-page #ecosystem .eyebrow{font-size:19px; letter-spacing:.20em;} 
}

/* on dark (primary-colored) sections, swap the eyebrow to a light flat tone for legibility */
.vnf-eco2-page .hero .eyebrow{color:var(--eco2-white); border-bottom-color:rgba(255,255,255,.55);}
/* company identity line in the hero acts as a Subheading — bigger & bolder than a standard eyebrow tag */
.vnf-eco2-page .brand-id{
  display:flex; align-items:center; gap:10px; font-size:clamp(20px,3.4vw,30px); font-weight:800;
  letter-spacing:.06em; color:var(--eco2-white); text-transform:uppercase; margin-bottom:18px; opacity:.92;
}
.vnf-eco2-page .brand-id::before{content:''; width:8px; height:8px; border-radius:50%; background:var(--eco2-white); flex:0 0 auto;}

.vnf-eco2-page h1, .vnf-eco2-page h2, .vnf-eco2-page h3{color:var(--eco2-primary); font-weight:700; line-height:1.18;}
.vnf-eco2-page h4, .vnf-eco2-page h5{color:var(--eco2-primary); font-weight:800; line-height:1.3;}
.vnf-eco2-page .section-head{max-width:760px; margin:0 auto 44px; text-align:center;}
.vnf-eco2-page .section-head h2{font-size:clamp(18px,4.5vw,42px); font-weight:700; text-wrap:balance;}
.vnf-eco2-page #ecosystem .section-head h2{font-size:clamp(12px,4.2vw,40px);}
.vnf-eco2-page #ecosystem .section-head h2 span{display:block; white-space:nowrap;}
.vnf-eco2-page .section-head p{margin-top:18px; font-size:17px; line-height:1.7; color:var(--eco2-text-soft); text-wrap:pretty;}
@media(min-width:720px){
  .vnf-eco2-page .section-head--vi{max-width:900px;}
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


/* ===== HEADER — logo left, nav links centered, language toggle right (single row at every breakpoint) ===== */
.vnf-eco2-page header{position:sticky; top:0; z-index:200; background:var(--eco2-white);}
.vnf-eco2-page .header-main{background:var(--eco2-white); border-bottom:1px solid var(--eco2-border); box-shadow:0 2px 14px rgba(23,73,127,.06);}
.vnf-eco2-page nav{
  max-width:var(--eco2-maxw); margin:0 auto; padding:10px var(--eco2-gutter);
  display:flex; align-items:center; flex-wrap:nowrap; gap:8px;
}
.vnf-eco2-page .logo{display:flex; align-items:center; flex:0 0 auto; min-width:0;}
.vnf-eco2-page .logo img{height:52px; width:auto; display:block;}
@media(min-width:400px){ .vnf-eco2-page .logo img{height:60px;} }
@media(min-width:640px){ .vnf-eco2-page .logo img{height:68px;} }
@media(min-width:960px){ .vnf-eco2-page .logo img{height:80px;} }
.vnf-eco2-page .foot-logo{height:46px; width:auto; margin-bottom:20px; display:block;}
@media(min-width:640px){ .vnf-eco2-page .foot-logo{height:56px; margin-bottom:24px;} }
.vnf-eco2-page .app-item .mini{overflow:hidden;}
.vnf-eco2-page .app-item .mini img{width:100%; height:100%; object-fit:cover; border-radius:8px;}
.vnf-eco2-page .app-head{display:flex; align-items:center; gap:12px;}
.vnf-eco2-page .app-logo{width:48px; height:48px; border-radius:8px; object-fit:cover; background:var(--eco2-white); flex:0 0 auto;}
@media(min-width:640px){ .vnf-eco2-page .app-logo{width:56px; height:56px;} }
.vnf-eco2-page .nav-links{
  display:flex; align-items:center; gap:2px; flex:1 1 auto; justify-content:center; min-width:0;
}
.vnf-eco2-page .nav-links a{
  display:inline-flex; align-items:center; justify-content:center; min-height:36px;
  color:var(--eco2-primary); font-weight:700; font-size:12px; padding:7px 9px;
  border-radius:8px; transition:background .2s ease, color .2s ease; position:relative;
  white-space:nowrap;
}
.vnf-eco2-page .nav-links a:hover{background:var(--eco2-primary-light);}
.vnf-eco2-page .nav-links a.active{background:var(--eco2-primary); color:var(--eco2-white);}
.vnf-eco2-page .langtoggle{
  display:flex; align-items:center; background:var(--eco2-white); border:1px solid var(--eco2-border); border-radius:999px; padding:3px;
  flex:0 0 auto;
}
.vnf-eco2-page .langtoggle button{
  border:none; background:transparent; color:var(--eco2-text-soft); font-weight:700; font-size:11px;
  padding:6px 9px; min-height:30px; border-radius:999px; cursor:pointer; transition:all .2s ease; font-family:var(--eco2-font);
}
.vnf-eco2-page .langtoggle button.active{background:var(--eco2-primary); color:var(--eco2-white);}
@media(min-width:400px){
  .vnf-eco2-page .nav-links a{font-size:13px; padding:8px 12px;}
  .vnf-eco2-page .langtoggle button{font-size:12px; padding:7px 11px; min-height:32px;}
}
@media(min-width:640px){
  .vnf-eco2-page nav{padding:12px var(--eco2-gutter); gap:16px;}
  .vnf-eco2-page .nav-links{gap:4px;}
  .vnf-eco2-page .nav-links a{font-size:15.5px; padding:9px 16px; min-height:40px;}
  .vnf-eco2-page .langtoggle button{font-size:13px; padding:8px 14px; min-height:36px;}
}
@media(min-width:960px){
  .vnf-eco2-page nav{padding:14px var(--eco2-gutter); gap:24px;}
}

/* ===== HERO (mobile-first: single column, video under text) ===== */
.vnf-eco2-page .hero{
  position:relative; overflow:hidden; padding:64px 0 56px;
}
.vnf-eco2-page .hero::before{
  content:''; position:absolute; inset:0; z-index:0;
  background:url('${BG_URL}') center/cover no-repeat;
  opacity:.75;
}
.vnf-eco2-page .hero::after{
  content:''; position:absolute; inset:0; z-index:1;
  background:linear-gradient(135deg, rgba(30,92,166,.78), rgba(23,73,127,.85));
}
.vnf-eco2-page .hero-grid{
  position:relative; z-index:2; display:flex; flex-direction:column; gap:36px;
}
.vnf-eco2-page .hero h1{color:var(--eco2-white); font-size:clamp(26px,5vw,38px); font-weight:600; letter-spacing:-.01em; text-wrap:balance;}
.vnf-eco2-page .hero h1 .hero-title-prefix{white-space:nowrap;}
.vnf-eco2-page .hero h1 .accent{color:var(--eco2-white); font-weight:800; border-bottom:3px solid rgba(255,255,255,.6); display:block; width:fit-content; margin-top:.35em;}
.vnf-eco2-page .hero p.lead{color:rgba(255,255,255,.92); font-size:17px; margin:20px 0 30px; max-width:540px; line-height:1.75; text-wrap:pretty; white-space:pre-line;}
.vnf-eco2-page .hero-ctas{display:flex; flex-direction:column; gap:14px;}
.vnf-eco2-page .hero-media{display:flex; flex-direction:column; gap:14px; width:100%;}
.vnf-eco2-page .hero-video{
  position:relative; border-radius:8px; overflow:hidden; width:100%;
  background:var(--eco2-primary-dark);
  border:1px solid rgba(255,255,255,.15);
  display:flex; align-items:center; justify-content:center;
  box-shadow:0 20px 50px rgba(0,0,0,.22);
}
.vnf-eco2-page .hero-subtabs{
  display:flex; flex-wrap:nowrap; gap:8px; justify-content:center;
}
.vnf-eco2-page .hero-subtab{
  position:relative; z-index:2;
  display:inline-flex; align-items:center; justify-content:center;
  padding:7px 16px;
  background:transparent;
  border:1.5px solid rgba(255,255,255,.55);
  border-radius:999px; cursor:pointer;
  color:var(--eco2-white);
  font-size:13.5px; font-weight:600; letter-spacing:.02em; line-height:1.2;
  -webkit-tap-highlight-color:transparent;
  transition:background .2s ease, color .2s ease, border-color .2s ease, transform .2s ease;
  flex:0 0 auto;
}
.vnf-eco2-page .hero-subtab:hover{
  background:rgba(255,255,255,.15);
  border-color:rgba(255,255,255,.9);
}
.vnf-eco2-page .hero-subtab.active{
  z-index:3;
  background:var(--eco2-white);
  color:var(--eco2-primary); /* looks like a "cutout" of the hero blue */
  border-color:var(--eco2-white);
}
@media(max-width:639px){
  .vnf-eco2-page .hero-subtabs{
    display:grid; grid-template-columns:repeat(3, minmax(0, 1fr)); gap:8px; justify-content:center;
  }
  .vnf-eco2-page .hero-subtab{width:100%; padding-left:8px; padding-right:8px;}
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

/* ===== Reveal animation (scroll-triggered) ===== */
.vnf-eco2-page .reveal{opacity:0; transform:translateY(24px); transition:opacity .7s ease, transform .7s ease;}
.vnf-eco2-page .reveal.in{opacity:1; transform:translateY(0);}
.vnf-eco2-page .app-panel.reveal{transition-delay:.12s;}

/* ===== SECTION 2 — SOCIAL TREE ===== */
.vnf-eco2-page .social-bar{
  padding:36px 0 42px; background:#f9fafb; border-bottom:1px solid var(--eco2-border); overflow-x:auto;
}
.vnf-eco2-page .social-bar-head{
  text-align:center; font-weight:800; letter-spacing:.1em; font-size:clamp(20px,2.6vw,30px); text-transform:uppercase; color:var(--eco2-primary); margin-bottom:28px;
}
.vnf-eco2-page .social-tree-wrap{display:flex; justify-content:center; min-width:max-content; padding:0 28px 8px;}
.vnf-eco2-page .social-tree-node{display:flex; flex-direction:column; align-items:center;}
.vnf-eco2-page .social-tree-card{
  position:relative; z-index:1; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:9px;
  width:160px; height:92px; padding:10px; border:2px solid; border-radius:16px; background:var(--eco2-white);
  color:var(--eco2-primary); text-align:center; box-shadow:var(--eco2-shadow-sm); transition:transform .22s ease, box-shadow .22s ease;
}
.vnf-eco2-page a.social-tree-card:hover, .vnf-eco2-page a.social-tree-card:focus-visible{
  animation:eco2-node-pop .5s cubic-bezier(.34,1.56,.64,1) forwards;
  box-shadow:var(--eco2-shadow-md);
  z-index:5;
}
.vnf-eco2-page a.social-tree-card:active{
  animation:none;
  transform:scale(.93) translateY(-2px);
  transition:transform .12s ease;
  box-shadow:var(--eco2-shadow-sm);
}
@keyframes eco2-node-pop{
  0%{ transform:scale(1) translateY(0); }
  45%{ transform:scale(1.14) translateY(-8px); }
  70%{ transform:scale(.96) translateY(-2px); }
  100%{ transform:scale(1.06) translateY(-5px); }
}
@media (prefers-reduced-motion: reduce){
  .vnf-eco2-page a.social-tree-card:hover, .vnf-eco2-page a.social-tree-card:focus-visible, .vnf-eco2-page a.social-tree-card:active{
    animation:none; transform:translateY(-3px);
  }
}
.vnf-eco2-page .social-tree-card--root{width:156px; height:108px; padding:12px 16px;}
.vnf-eco2-page .social-tree-logo{display:flex; align-items:center; justify-content:center; width:34px; height:34px;}
.vnf-eco2-page .social-tree-logo--root{width:46px; height:46px;}
.vnf-eco2-page .social-tree-card--leaf .social-tree-logo{width:46px; height:46px;}
.vnf-eco2-page .social-tree-logo img{width:100%; height:100%; object-fit:contain;}
.vnf-eco2-page .social-tree-logo:not(.social-tree-logo--root) img{border-radius:50%;}
.vnf-eco2-page .social-tree-logo svg{width:31px; height:31px; fill:currentColor;}
.vnf-eco2-page .social-tree-name{font-size:12px; font-weight:800; line-height:1.2; text-wrap:balance;}
.vnf-eco2-page .social-tree-card--root .social-tree-name{font-size:16px;}
.vnf-eco2-page .social-tree-children{display:flex; flex-direction:column; align-items:center; width:100%;}
.vnf-eco2-page .social-tree-stem{width:2px; height:20px; background:#d1d5db;}
.vnf-eco2-page .social-tree-child-list{display:flex; padding:0 12px;}
.vnf-eco2-page .social-tree-child{position:relative; display:flex; flex-direction:column; align-items:center; padding:0 10px;}
.vnf-eco2-page .social-tree-branch{position:absolute; top:0; height:2px; background:#d1d5db;}
.vnf-eco2-page .social-tree-branch--first{left:50%; right:0;}
.vnf-eco2-page .social-tree-branch--last{left:0; right:50%;}
.vnf-eco2-page .social-tree-child-list > .social-tree-child:not(:first-child):not(:last-child) > .social-tree-branch{left:0; right:0;}
.vnf-eco2-page .social-tree-child > .social-tree-stem{height:20px;}
.vnf-eco2-page .social-tree-child-list > .social-tree-child > .social-tree-node > .social-tree-children > .social-tree-child-list{padding:0;}
.vnf-eco2-page .social-tree-child-list > .social-tree-child > .social-tree-node > .social-tree-children > .social-tree-child-list > .social-tree-child{padding:0 6px;}
.vnf-eco2-page .social-tree-child-list > .social-tree-child > .social-tree-node > .social-tree-children > .social-tree-child-list .social-tree-card{width:160px; height:108px;}

/* ── Flat card layout for tablet/desktop (replaces branching tree at ≥640px) ── */
.vnf-eco2-page .social-tree-wrap{display:flex; justify-content:center; min-width:0; padding:0 12px 8px;}
.vnf-eco2-page .social-tree-node{flex-direction:row; align-items:flex-start;}
.vnf-eco2-page .social-tree-card--root{align-self:center; flex-shrink:0;}
.vnf-eco2-page .social-tree-children{flex-direction:row; align-items:flex-start; width:auto;}
.vnf-eco2-page .social-tree-child-list{flex-direction:column; padding:0; gap:10px;}
.vnf-eco2-page .social-tree-child{flex-direction:row; align-items:flex-start; padding:0;}
.vnf-eco2-page .social-tree-branch{display:none;}
.vnf-eco2-page .social-tree-stem{display:none;}
.vnf-eco2-page .social-tree-child > .social-tree-node{flex-direction:column; align-items:flex-start;}
.vnf-eco2-page .social-tree-card--group{width:84px; height:58px; padding:5px; font-size:9px; border-radius:8px; margin-bottom:3px; flex-shrink:0;}
.vnf-eco2-page .social-tree-card--group .social-tree-logo{width:22px; height:22px;}
.vnf-eco2-page .social-tree-card--group .social-tree-logo img,
.vnf-eco2-page .social-tree-card--group .social-tree-logo svg{width:20px; height:20px;}
.vnf-eco2-page .social-tree-card--group .social-tree-name{font-size:9px;}
.vnf-eco2-page .social-tree-child > .social-tree-node > .social-tree-children{flex-direction:column; margin-left:0;}
.vnf-eco2-page .social-tree-child > .social-tree-node > .social-tree-children > .social-tree-child-list{flex-direction:column; padding:0; gap:4px;}
.vnf-eco2-page .social-tree-child > .social-tree-node > .social-tree-children > .social-tree-child-list > .social-tree-child{padding:0;}
.vnf-eco2-page .social-tree-child > .social-tree-node > .social-tree-children > .social-tree-child-list .social-tree-card{width:170px; height:40px; flex-direction:row; gap:8px; border-radius:8px; justify-content:flex-start; padding:6px 10px;}
.vnf-eco2-page .social-tree-child > .social-tree-node > .social-tree-children > .social-tree-child-list .social-tree-card .social-tree-logo{width:22px; height:22px;}
.vnf-eco2-page .social-tree-child > .social-tree-node > .social-tree-children > .social-tree-child-list .social-tree-card .social-tree-logo svg,
.vnf-eco2-page .social-tree-child > .social-tree-node > .social-tree-children > .social-tree-child-list .social-tree-card .social-tree-logo img{width:20px; height:20px;}
.vnf-eco2-page .social-tree-child > .social-tree-node > .social-tree-children > .social-tree-child-list .social-tree-card .social-tree-name{font-size:11px;}

/* ── Phone (≤639px): 2-column flat grid, logo above text, no decorative lines ── */
@media(max-width:639px){
  .vnf-eco2-page .social-bar{padding:24px 0 28px;}
  .vnf-eco2-page .social-bar-head{font-size:18px; margin-bottom:18px;}

  .vnf-eco2-page .social-tree-wrap{
    position:relative; display:grid; grid-template-columns:repeat(2,1fr); grid-template-rows:repeat(4,auto);
    column-gap:14px; row-gap:14px; width:100%; max-width:480px; margin:0 auto; padding:10px 14px 16px;
    min-width:0;
  }
  .vnf-eco2-page .social-tree-node{display:contents;}
  .vnf-eco2-page .social-tree-children{display:contents;}
  .vnf-eco2-page .social-tree-child-list{display:contents;}
  .vnf-eco2-page .social-tree-child{display:contents;}
  .vnf-eco2-page .social-tree-stem{display:none;}
  .vnf-eco2-page .social-tree-branch{display:none;}
  .vnf-eco2-page .social-tree-card,
  .vnf-eco2-page .social-tree-child > .social-tree-node > .social-tree-children > .social-tree-child-list .social-tree-card{
    width:100% !important; height:130px !important; min-height:130px !important; padding:14px 10px !important; border:1.5px solid !important; border-radius:12px !important;
    background:var(--eco2-white) !important; box-shadow:0 1px 3px rgba(23,73,127,.06) !important; gap:10px !important; margin:0 !important;
    display:flex !important; flex-direction:column !important; align-items:center !important; justify-content:center !important; text-align:center !important;
    overflow:hidden !important;
  }
  /* Tắt hover và animation trên phone */
  .vnf-eco2-page a.social-tree-card:hover,
  .vnf-eco2-page a.social-tree-card:focus-visible,
  .vnf-eco2-page a.social-tree-card:active {
    animation: none !important;
    transform: none !important;
    box-shadow: 0 1px 3px rgba(23,73,127,.06) !important;
    z-index: 1 !important;
  }
  .vnf-eco2-page .social-tree-card .social-tree-logo,
  .vnf-eco2-page .social-tree-child > .social-tree-node > .social-tree-children > .social-tree-child-list .social-tree-card .social-tree-logo{display:flex !important; width:56px !important; height:56px !important; flex-shrink:0 !important;}
  .vnf-eco2-page .social-tree-card .social-tree-logo img,
  .vnf-eco2-page .social-tree-card .social-tree-logo svg,
  .vnf-eco2-page .social-tree-child > .social-tree-node > .social-tree-children > .social-tree-child-list .social-tree-card .social-tree-logo img,
  .vnf-eco2-page .social-tree-child > .social-tree-node > .social-tree-children > .social-tree-child-list .social-tree-card .social-tree-logo svg{width:100% !important; height:100% !important;}
  .vnf-eco2-page .social-tree-card .social-tree-name,
  .vnf-eco2-page .social-tree-child > .social-tree-node > .social-tree-children > .social-tree-child-list .social-tree-card .social-tree-name{font-size:13px !important; font-weight:700 !important; line-height:1.25 !important; overflow:hidden !important; text-overflow:ellipsis !important; display:-webkit-box !important; -webkit-line-clamp:2 !important; -webkit-box-orient:vertical !important; text-align:center !important;}
  .vnf-eco2-page .social-tree-card--group{display:none !important;}

  /* Phone 2-col grid (logo above text, like desktop):
     col-left  = Website(R1) · Facebook(R2) · LinkedIn(R3) · Cà Mau(R4)
     col-right = Email(R1)   · YouTube(R2)  · TikTok(R3)   · Hậu Giang(R4) */
  .vnf-eco2-page [data-id="vnf"]       { grid-column:1; grid-row:1; }
  .vnf-eco2-page [data-id="email"]     { grid-column:2; grid-row:1; }
  .vnf-eco2-page [data-id="facebook"]  { grid-column:1; grid-row:2; }
  .vnf-eco2-page [data-id="youtube"]   { grid-column:2; grid-row:2; }
  .vnf-eco2-page [data-id="linkedin"]  { grid-column:1; grid-row:3; }
  .vnf-eco2-page [data-id="tiktok"]    { grid-column:2; grid-row:3; }
  .vnf-eco2-page [data-id="ca-mau"]    { grid-column:1; grid-row:4; }
  .vnf-eco2-page [data-id="hau-giang"] { grid-column:2; grid-row:4; }
}

/* ── Tablet (640px–1199px): flat grid 4 columns ── */
@media(min-width:640px){
  .vnf-eco2-page .social-bar{padding:40px 0 46px;}
  .vnf-eco2-page .social-bar-head{font-size:22px; margin-bottom:28px;}
  .vnf-eco2-page .social-tree-wrap{display:grid; grid-template-columns:repeat(4,1fr); grid-template-rows:repeat(2,auto); gap:16px; width:100%; max-width:760px; margin:0 auto; padding:0 24px 12px;}
  .vnf-eco2-page .social-tree-node{display:contents;}
  .vnf-eco2-page .social-tree-children{display:contents;}
  .vnf-eco2-page .social-tree-child-list{display:contents;}
  .vnf-eco2-page .social-tree-child{display:contents;}
  .vnf-eco2-page .social-tree-stem{display:none;}
  .vnf-eco2-page .social-tree-branch{display:none;}
  .vnf-eco2-page .social-tree-card,
  .vnf-eco2-page .social-tree-child > .social-tree-node > .social-tree-children > .social-tree-child-list .social-tree-card{
    width:100% !important; height:130px !important; padding:16px !important; border:1.5px solid !important; border-radius:14px !important;
    background:var(--eco2-white) !important; box-shadow:0 2px 8px rgba(23,73,127,.08) !important; gap:10px !important; margin:0 !important;
    display:flex !important; flex-direction:column !important; align-items:center !important; justify-content:center !important; text-align:center !important;
    overflow:hidden !important;
  }
  .vnf-eco2-page .social-tree-card .social-tree-logo,
  .vnf-eco2-page .social-tree-child > .social-tree-node > .social-tree-children > .social-tree-child-list .social-tree-card .social-tree-logo{display:flex !important; width:46px !important; height:46px !important; flex-shrink:0 !important;}
  .vnf-eco2-page .social-tree-card .social-tree-logo img,
  .vnf-eco2-page .social-tree-card .social-tree-logo svg,
  .vnf-eco2-page .social-tree-child > .social-tree-node > .social-tree-children > .social-tree-child-list .social-tree-card .social-tree-logo img,
  .vnf-eco2-page .social-tree-child > .social-tree-node > .social-tree-children > .social-tree-child-list .social-tree-card .social-tree-logo svg{width:100% !important; height:100% !important;}
  .vnf-eco2-page .social-tree-card .social-tree-name,
  .vnf-eco2-page .social-tree-child > .social-tree-node > .social-tree-children > .social-tree-child-list .social-tree-card .social-tree-name{font-size:14.5px !important; font-weight:700 !important; line-height:1.25 !important; overflow:hidden !important; text-overflow:ellipsis !important; display:-webkit-box !important; -webkit-line-clamp:2 !important; -webkit-box-orient:vertical !important;}
  .vnf-eco2-page .social-tree-card--group{display:none !important;}

  /* Desktop/Tablet row layout (DOM order: Website,YouTube,Facebook,TikTok,LinkedIn,CàMau,Email,HậuGiang)
     Hàng 1: Website(col1) · Email(col2) · LinkedIn(col3) · Facebook(col4)
     Hàng 2: YouTube(col1) · TikTok(col2)   · Cà Mau(col3)  · Hậu Giang(col4) */
  .vnf-eco2-page [data-id="vnf"]       { grid-column:1; grid-row:1; }
  .vnf-eco2-page [data-id="email"]     { grid-column:2; grid-row:1; }
  .vnf-eco2-page [data-id="linkedin"]  { grid-column:3; grid-row:1; }
  .vnf-eco2-page [data-id="facebook"]  { grid-column:4; grid-row:1; }
  .vnf-eco2-page [data-id="youtube"]   { grid-column:1; grid-row:2; }
  .vnf-eco2-page [data-id="tiktok"]    { grid-column:2; grid-row:2; }
  .vnf-eco2-page [data-id="ca-mau"]    { grid-column:3; grid-row:2; }
  .vnf-eco2-page [data-id="hau-giang"] { grid-column:4; grid-row:2; }
}

/* ── Desktop (≥1200px): same 4-column grid, sized up ── */
@media(min-width:1024px) and (max-width:1199px){
  .vnf-eco2-page .social-bar{padding:48px 0 56px;}
  .vnf-eco2-page .social-bar-head{font-size:26px; margin-bottom:32px;}
  .vnf-eco2-page .social-tree-wrap{grid-template-columns:repeat(4,1fr); grid-template-rows:repeat(2,auto); max-width:820px; gap:18px; padding:0 24px 12px;}
  .vnf-eco2-page .social-tree-card,
  .vnf-eco2-page .social-tree-child > .social-tree-node > .social-tree-children > .social-tree-child-list .social-tree-card{
    height:140px !important; padding:12px 8px !important; border-radius:14px !important; gap:10px !important;
  }
  .vnf-eco2-page .social-tree-card .social-tree-logo,
  .vnf-eco2-page .social-tree-child > .social-tree-node > .social-tree-children > .social-tree-child-list .social-tree-card .social-tree-logo{width:50px !important; height:50px !important;}
  .vnf-eco2-page .social-tree-card .social-tree-name,
  .vnf-eco2-page .social-tree-child > .social-tree-node > .social-tree-children > .social-tree-child-list .social-tree-card .social-tree-name{
    font-size:12px !important; line-height:1.3 !important; 
    padding:0 !important; text-align:center !important;
  }
}

@media(min-width:1200px){
  .vnf-eco2-page .social-bar{padding:56px 0 64px;}
  .vnf-eco2-page .social-bar-head{font-size:30px; margin-bottom:36px;}
  .vnf-eco2-page .social-tree-wrap{grid-template-columns:repeat(4,1fr); grid-template-rows:repeat(2,auto); max-width:900px; gap:22px; padding:0 24px 12px;}
  .vnf-eco2-page .social-tree-card,
  .vnf-eco2-page .social-tree-child > .social-tree-node > .social-tree-children > .social-tree-child-list .social-tree-card{
    height:158px !important; padding:16px 10px !important; border-radius:16px !important; gap:12px !important;
  }
  .vnf-eco2-page .social-tree-card .social-tree-logo,
  .vnf-eco2-page .social-tree-child > .social-tree-node > .social-tree-children > .social-tree-child-list .social-tree-card .social-tree-logo{width:56px !important; height:56px !important;}
  .vnf-eco2-page .social-tree-card .social-tree-name,
  .vnf-eco2-page .social-tree-child > .social-tree-node > .social-tree-children > .social-tree-child-list .social-tree-card .social-tree-name{
    font-size:14.5px !important; line-height:1.3 !important;
    padding:0 !important; text-align:center !important;
  }
}


/* ===== ECOSYSTEM (team spotlight) — mobile-first stacked ===== */
.vnf-eco2-page #ecosystem{padding:68px 0; background:var(--eco2-primary-light);}
.vnf-eco2-page .app-layout{display:flex; flex-direction:column; gap:18px;}
.vnf-eco2-page .app-list-hint{
  align-self:flex-start; color:#6b7280; font-size:16px; font-style:italic; font-weight:400; text-align:left;
  border:1.5px solid #9ca3af; border-radius:999px; padding:6px 18px;
}
@media(max-width:639px){
  .vnf-eco2-page #ecosystem .wrap{padding-left:8px; padding-right:8px;}
}

/* ── Single app-list for all devices (manual scroll only) ── */
.vnf-eco2-page .app-list{
  display:flex; flex-direction:row; gap:8px; overflow-x:auto; -webkit-overflow-scrolling:touch;
  padding:2px 2px 10px; scroll-snap-type:x mandatory;
  scroll-behavior:smooth;
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

/* Hero re-animation when user switches subtitle or page language.
   Mirrors the .reveal/in reveal (fade + slide up 24px) so the sub bar visibly animates
   in lockstep with the video. */
.vnf-eco2-page .hero-fade-in{animation:eco2-hero-fade-in .5s cubic-bezier(.2,.8,.2,1) both;}
@keyframes eco2-hero-fade-in{ from{opacity:0; transform:translateY(24px);} to{opacity:1; transform:translateY(0);} }
@keyframes eco2-item-pop{ 0%{transform:scale(1);} 45%{transform:scale(1.04);} 100%{transform:scale(1);} }
.vnf-eco2-page .app-head{display:flex; align-items:center; gap:14px; margin-bottom:16px;}
/* Category acts as the primary section header inside each panel — bigger & bolder than the product name */
.vnf-eco2-page .app-panel .cat{
  color:var(--eco2-white); opacity:1; font-weight:800; font-size:clamp(16px,2.8vw,20px);
  letter-spacing:.05em; text-transform:uppercase; line-height:1.25;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Noto Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
}
@media(max-width:639px){
  .vnf-eco2-page .app-panel{padding-left:16px; padding-right:16px;}
  .vnf-eco2-page .app-head{gap:10px;}
  .vnf-eco2-page .app-panel .cat{font-size:12px; letter-spacing:.02em; line-height:1.2; white-space:nowrap;}
}
@media(min-width:640px) and (max-width:959px){
  .vnf-eco2-page .app-panel .cat{font-size:15px; letter-spacing:.03em;}
}
@media(min-width:960px){
  .vnf-eco2-page .app-panel .cat{font-size:16px; letter-spacing:.03em; white-space:nowrap;}
}
.vnf-eco2-page .app-panel h3{
  color:rgba(255,255,255,.82); font-weight:600; font-size:clamp(18px,3vw,23px); margin:0 0 18px; font-style:normal; text-wrap:balance;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Noto Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
}
.vnf-eco2-page .app-desc-card{
  background:rgba(255,255,255,.09); border:1px solid rgba(255,255,255,.15); border-radius:8px;
  padding:20px 22px;
}
/* Extra padding for first item (Nông nghiệp bền vững) to balance with video height */
.vnf-eco2-page .app-panel[data-app-index="0"] .app-desc-card{
  padding:40px 22px;
}
@media(min-width:640px){
  .vnf-eco2-page .app-panel[data-app-index="0"] .app-desc-card{
    padding:52px 22px;
  }
}
@media(min-width:900px){
  .vnf-eco2-page .app-panel[data-app-index="0"] .app-desc-card{
    padding:60px 22px;
  }
}
.vnf-eco2-page .app-panel p{
  color:rgba(255,255,255,.92); font-size:16px; line-height:1.8; max-width:640px; text-wrap:pretty;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Noto Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
}
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
.vnf-eco2-page .app-nav-section{display:flex; flex-direction:column; width:100%; gap:14px;}
.vnf-eco2-page .app-links{display:flex; flex-wrap:wrap; gap:10px; width:100%; justify-content:center;}
.vnf-eco2-page .app-nav-arrows{display:flex; justify-content:space-between; width:100%; gap:14px;}
.vnf-eco2-page .app-arrows{display:flex; gap:10px;}
.vnf-eco2-page .arrow-btn{
  width:44px; height:44px; border-radius:50%; border:1.5px solid rgba(255,255,255,.35); display:flex;
  align-items:center; justify-content:center; cursor:pointer; transition:all .22s ease; background:transparent; flex:0 0 auto;
}
.vnf-eco2-page .arrow-btn-prev{flex:0 0 auto;}
.vnf-eco2-page .arrow-btn-next{flex:0 0 auto;}
.vnf-eco2-page .arrow-btn:hover, .vnf-eco2-page .arrow-btn:focus-visible{background:rgba(255,255,255,.16); border-color:var(--eco2-white); transform:translateY(-2px);}
.vnf-eco2-page .arrow-btn svg{width:17px; height:17px; fill:var(--eco2-white);}
@media(min-width:640px){
  .vnf-eco2-page #ecosystem{padding:96px 0;}
  .vnf-eco2-page .app-item span{white-space:normal;}
  .vnf-eco2-page .app-panel{padding:38px;}
  
  /* Tablet/Desktop: tabs on top, content below in 2x2 grid */
  .vnf-eco2-page .app-list{
    flex-direction:row; overflow-x:auto; padding:2px 2px 10px;
    justify-content:flex-start; /* Fallback for browsers that don't support safe center */
    justify-content:safe center;
  }
  .vnf-eco2-page .app-panel{
    display:grid; 
    grid-template-columns:1fr 1fr; 
    grid-template-rows:1fr auto;
    gap:24px 32px; 
    align-items:end;
  }
  .vnf-eco2-page .app-content{
    /* Row 1, Column 1: title + content */
    grid-column:1; 
    grid-row:1;
    display:flex; 
    flex-direction:column; 
    gap:0;
    align-self:end;
  }
  .vnf-eco2-page .app-video{
    /* Row 1, Column 2: video */
    grid-column:2; 
    grid-row:1;
    align-self:end;
  }
  .vnf-eco2-page .app-nav-section{
    /* Row 2, spans both columns */
    grid-column:1 / -1;
    grid-row:2;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    width:100%;
  }
  .vnf-eco2-page .app-nav-arrows{
    width:auto;
    justify-content:flex-end;
  }
  .vnf-eco2-page .app-links{
    flex:0 0 auto;
    width:auto;
    justify-content:flex-start;
  }
}
@media(min-width:640px) and (max-width:1120px){
  .vnf-eco2-page .app-list{justify-content:flex-start;}
}
@media(min-width:900px){
  .vnf-eco2-page #ecosystem{padding:124px 0;}
  .vnf-eco2-page .app-panel{padding:44px; gap:32px 40px; min-height:480px;}
}

/* ===== FOLLOW CTA (between Ecosystem and Footer) ===== */
.vnf-eco2-page .follow-cta{
  background:transparent;  /* actual bg lives on .follow-cta-glow below */
  padding:72px 0; text-align:center; border:none;
}
.vnf-eco2-page .follow-cta-inner{max-width:720px; margin:0 auto;}
.vnf-eco2-page .follow-cta .eyebrow{
  color:var(--eco2-white); border-bottom:none; display:inline-block;
  font-size:clamp(18px,3vw,24px); letter-spacing:.18em; padding-bottom:0; margin-bottom:20px;
}
.vnf-eco2-page .follow-cta-inner p{color:rgba(255,255,255,.92); font-size:clamp(17px,3.2vw,21px); line-height:1.7; font-weight:400; margin-top:10px; text-wrap:pretty;}
.vnf-eco2-page .desktop-br{display:none;}
.vnf-eco2-page .mobile-br{display:inline;}
@media(min-width:960px){
  .vnf-eco2-page .desktop-br{display:inline;}
  .vnf-eco2-page .mobile-br{display:none;}
}
@media(min-width:640px){
  .vnf-eco2-page .follow-cta{padding:92px 0;}
  .vnf-eco2-page .follow-cta .eyebrow{font-size:clamp(22px,3.5vw,28px);}
}

/* ===== FOOTER (mobile-first stacked, corporate — uses BG_FOOTER_URL as background image) ===== */
.vnf-eco2-page footer{
  background:#0f3456 url("https://minio-tuan.ls01.vnfoods.vn/eco-media/bg-footer.jpg") center/cover no-repeat;
  padding:48px 0 28px; color:rgba(255,255,255,.72); position:relative; overflow:hidden;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Noto Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
}
.vnf-eco2-page footer .wrap{position:relative; z-index:1;}
.vnf-eco2-page .foot-top{display:flex; flex-direction:column; align-items:flex-start; text-align:left; gap:32px; padding-bottom:28px;}
.vnf-eco2-page .foot-brand{display:flex; flex-direction:column; align-items:flex-start; margin-bottom:8px;}
.vnf-eco2-page .foot-contact-grid{display:grid; grid-template-columns:1fr; gap:24px; text-align:left; width:100%;}
.vnf-eco2-page .foot-contact-block{padding:0; text-align:left;}
.vnf-eco2-page .foot-contact-block h5{color:var(--eco2-white); font-size:17px; letter-spacing:.08em; margin-bottom:12px; font-weight:800; text-transform:uppercase;}
.vnf-eco2-page .foot-contact-block p{font-size:17.5px; line-height:1.85; color:rgba(255,255,255,.75); word-break:break-word; text-wrap:pretty;}
.vnf-eco2-page .foot-contact-block a{color:rgba(255,255,255,.95); font-weight:700; transition:color .2s ease; white-space:nowrap;}
.vnf-eco2-page .foot-contact-block a:hover{color:var(--eco2-white); text-decoration:underline;}
.vnf-eco2-page .foot-contact-block .foot-note{color:rgba(255,255,255,.6); font-weight:400;}
.vnf-eco2-page .foot-bottom{display:flex; flex-direction:column; gap:10px; padding-top:20px; font-size:16px; text-align:left;}
.vnf-eco2-page .foot-bottom a:hover{color:var(--eco2-white); text-decoration:underline;}
@media(min-width:640px){
  .vnf-eco2-page footer{padding:64px 0 32px;}
  .vnf-eco2-page .foot-top{flex-direction:row; align-items:flex-start; justify-content:space-between; gap:48px; padding-bottom:32px;}
  .vnf-eco2-page .foot-brand{margin-bottom:0; flex:0 0 auto;}
  .vnf-eco2-page .foot-contact-grid{grid-template-columns:repeat(2,1fr); gap:20px 48px; flex:1 1 auto; max-width:640px;}
  .vnf-eco2-page .foot-contact-block h5{font-size:18px;}
  .vnf-eco2-page .foot-contact-block p{font-size:18px;}
  .vnf-eco2-page .foot-bottom{flex-direction:row; justify-content:space-between; text-align:left; font-size:16.5px;}
}

/* Safety net: nothing is ever allowed to force horizontal scroll */
.vnf-eco2-page{max-width:100%; overflow-x:hidden;}
.vnf-eco2-page *{min-width:0;}

/* ===== BACK TO TOP BUTTON (Desktop only) ===== */
.vnf-eco2-page .back-to-top{
  position:fixed; bottom:32px; right:32px; z-index:100;
  width:56px; height:56px; border-radius:50%;
  background:var(--eco2-primary); color:var(--eco2-white);
  border:none; box-shadow:var(--eco2-shadow-lg);
  display:none; align-items:center; justify-content:center;
  cursor:pointer; 
  transition:opacity .3s ease, transform .3s ease, background .3s ease, box-shadow .3s ease;
  opacity:0;
  pointer-events:none;
}
.vnf-eco2-page .back-to-top.show{
  opacity:1;
  pointer-events:auto;
  animation:eco2-fade-in-up .3s ease;
}
.vnf-eco2-page .back-to-top.hiding{
  animation:eco2-fade-out-down .3s ease forwards;
}
.vnf-eco2-page .back-to-top:hover{
  background:var(--eco2-primary-dark); transform:translateY(-4px);
  box-shadow:0 12px 28px rgba(23,73,127,.25);
}
.vnf-eco2-page .back-to-top svg{
  width:24px; height:24px;
}
@keyframes eco2-fade-in-up{
  from{ opacity:0; transform:translateY(20px); }
  to{ opacity:1; transform:translateY(0); }
}
@keyframes eco2-fade-out-down{
  from{ opacity:1; transform:translateY(0); }
  to{ opacity:0; transform:translateY(20px); }
}
/* Show only on desktop (≥1200px, matching section 2 breakpoints) */
@media(min-width:1200px){
  .vnf-eco2-page .back-to-top{
    display:flex;
  }
}
@media (prefers-reduced-motion: reduce){
  .vnf-eco2-page .back-to-top{
    animation:none;
    transition:opacity .3s ease;
  }
}

/* ===== FOLLOW CTA — hero image (BG_URL) + blue overlay (mirrors .hero treatment) ===== */
.vnf-eco2-page .follow-cta-glow{
  position:relative;
  overflow:hidden;
  background:#0f3456;  /* fallback color while image loads */
}
.vnf-eco2-page .follow-cta-glow::before{
  content:'';
  position:absolute; inset:0; z-index:0; pointer-events:none;
  background:url('${BG_URL}') center/cover no-repeat;
  opacity:.75;
}
.vnf-eco2-page .follow-cta-glow::after{
  content:'';
  position:absolute; inset:0; z-index:1; pointer-events:none;
  background:linear-gradient(135deg, rgba(30,92,166,.78), rgba(23,73,127,.85));
}
.vnf-eco2-page .follow-cta-glow .wrap{position:relative; z-index:3;}

`
