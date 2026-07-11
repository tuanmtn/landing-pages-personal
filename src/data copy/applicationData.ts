export interface ApplicationContent {
  description: string;
  solutionsTitle: string;
  solutions: string[];
  platformsTitle: string;
  platforms: string[];
}

export interface ApplicationData {
  id: string;
  title: { en: string; vi: string };
  images: string[];
  platformIds: string[];
  en: ApplicationContent;
  vi: ApplicationContent;
}

export const applications: Record<string, ApplicationData> = {
  agriculture: {
    id: "agriculture",
    title: { en: "Agriculture", vi: "Nông nghiệp" },
    images: ["/assets/application/Agriculture.png"],
    platformIds: ["chitosan", "minerals"],
    en: {
      description: "Agriculture is one of the most important application areas for biomaterials derived from shrimp shells. Chitosan-based biopolymers and mineral materials can enhance plant health, improve soil quality, and support more sustainable crop production systems.",
      solutionsTitle: "Solutions",
      solutions: ["Plant biostimulants", "Natural plant immune activators", "Seed coatings", "Root growth stimulants", "Soil microbiome enhancers"],
      platformsTitle: "Technology Platforms",
      platforms: ["Chitin / Chitosan Platform", "Mineral Platform"]
    },
    vi: {
      description: "Nông nghiệp là một trong những lĩnh vực ứng dụng quan trọng nhất đối với các vật liệu sinh học có nguồn gốc từ vỏ tôm. Các biopolymer gốc chitosan và vật liệu khoáng có thể tăng cường sức khỏe cây trồng, cải thiện chất lượng đất và hỗ trợ các hệ thống sản xuất trọt bền vững hơn.",
      solutionsTitle: "Giải pháp",
      solutions: ["Chất kích thích sinh học thực vật", "Chất hoạt hóa miễn dịch thực vật tự nhiên", "Lớp phủ hạt giống", "Chất kích thích rễ phát triển", "Chất tăng cường hệ vi sinh vật đất"],
      platformsTitle: "Nền tảng công nghệ",
      platforms: ["Nền tảng Chitin / Chitosan", "Nền tảng Khoáng sản"]
    }
  },
  aquaculture: {
    id: "aquaculture",
    title: { en: "Aquaculture & Animal Nutrition", vi: "Nuôi trồng Thủy sản & Dinh dưỡng Động vật" },
    images: ["/assets/application/Aqua & Animal Nutrition.png"],
    platformIds: ["peptides", "astaxanthin", "lipid"],
    en: {
      description: "Marine-derived proteins, peptides, and natural pigments from shrimp by-products support healthier and more efficient aquaculture and animal nutrition systems. These ingredients can improve digestion, immunity, and growth performance in aquaculture species and livestock.",
      solutionsTitle: "Solutions",
      solutions: ["Aquaculture feed peptides", "Shrimp immune stimulants", "Feed palatability enhancers", "Digestibility enhancers", "Natural pigmentation additives"],
      platformsTitle: "Technology Platforms",
      platforms: ["Protein / Peptide Platform", "Astaxanthin Platform", "Lipid Platform"]
    },
    vi: {
      description: "Các protein, peptide và sắc tố tự nhiên có nguồn gốc từ biển từ phụ phẩm tôm hỗ trợ các hệ thống nuôi trồng thủy sản và dinh dưỡng động vật khỏe mạnh và hiệu quả hơn. Những thành phần này có thể cải thiện tiêu hóa, miễn dịch và hiệu suất tăng trưởng ở các loài thủy sản và gia súc.",
      solutionsTitle: "Giải pháp",
      solutions: ["Peptide thức ăn thủy sản", "Chất kích thích miễn dịch cho tôm", "Chất tăng độ ngon miệng cho thức ăn", "Chất tăng cường khả năng tiêu hóa", "Phụ gia tạo màu tự nhiên"],
      platformsTitle: "Nền tảng công nghệ",
      platforms: ["Nền tảng Protein / Peptide", "Nền tảng Astaxanthin", "Nền tảng Lipid"]
    }
  },
  nutrition: {
    id: "nutrition",
    title: { en: "Human Nutrition & Nutraceuticals", vi: "Dinh dưỡng Con người & Thực phẩm Chức năng" },
    images: ["/assets/application/Human Nutrition & Nutraceuticals.png"],
    platformIds: ["peptides", "astaxanthin", "lipid"],
    en: {
      description: "Bioactive peptides and natural antioxidant compounds derived from shrimp biomass can be developed into ingredients for functional foods and nutraceutical products that support human health.",
      solutionsTitle: "Solutions",
      solutions: ["Functional nutrition ingredients", "Antioxidant nutraceuticals", "Bioactive peptide supplements", "Health and wellness formulations"],
      platformsTitle: "Technology Platforms",
      platforms: ["Protein / Peptide Platform", "Astaxanthin Platform", "Lipid Platform"]
    },
    vi: {
      description: "Các peptide hoạt tính sinh học và các hợp chất chống oxy hóa tự nhiên có nguồn gốc từ sinh khối tôm có thể được phát triển thành các thành phần cho thực phẩm chức năng và các sản phẩm dược phẩm hỗ trợ sức khỏe con người.",
      solutionsTitle: "Giải pháp",
      solutions: ["Thành phần dinh dưỡng chức năng", "Thực phẩm chức năng chống oxy hóa", "Thực phẩm bổ sung peptide hoạt tính", "Các công thức chăm sóc sức khỏe"],
      platformsTitle: "Nền tảng công nghệ",
      platforms: ["Nền tảng Protein / Peptide", "Nền tảng Astaxanthin", "Nền tảng Lipid"]
    }
  },
  packaging: {
    id: "packaging",
    title: { en: "Food Systems & Packaging", vi: "Hệ thống Thực phẩm & Bao bì" },
    images: ["/assets/application/Food Systems & Packaging.png"],
    platformIds: ["chitosan"],
    en: {
      description: "Chitosan-based biomaterials provide natural antimicrobial properties and film-forming capabilities that can improve food preservation and packaging sustainability.",
      solutionsTitle: "Solutions",
      solutions: ["Antimicrobial food coatings", "Active packaging materials", "Shelf-life extension technologies", "Biodegradable food packaging films"],
      platformsTitle: "Technology Platforms",
      platforms: ["Chitin / Chitosan Platform"]
    },
    vi: {
      description: "Vật liệu sinh học gốc chitosan cung cấp các đặc tính kháng khuẩn tự nhiên và khả năng tạo màng có thể cải thiện việc bảo quản thực phẩm và tính bền vững của bao bì.",
      solutionsTitle: "Giải pháp",
      solutions: ["Lớp phủ thực phẩm kháng khuẩn", "Vật liệu bao bì chủ động", "Công nghệ kéo dài thời hạn sử dụng", "Màng bao bì thực phẩm phân hủy sinh học"],
      platformsTitle: "Nền tảng công nghệ",
      platforms: ["Nền tảng Chitin / Chitosan"]
    }
  },
  biomedical: {
    id: "biomedical",
    title: { en: "Biomedical Materials", vi: "Vật liệu Y sinh" },
    images: ["/assets/application/Biomedical Materials.png"],
    platformIds: ["chitosan", "minerals", "lipid"],
    en: {
      description: "Biopolymers and mineral biomaterials derived from shrimp shells offer promising applications in healthcare and biomedical engineering due to their biocompatibility and functional properties.",
      solutionsTitle: "Solutions",
      solutions: ["Wound care biomaterials", "Tissue engineering scaffolds", "Hydroxyapatite bone graft materials", "Drug delivery carriers"],
      platformsTitle: "Technology Platforms",
      platforms: ["Chitin / Chitosan Platform", "Mineral Platform", "Lipid Platform"]
    },
    vi: {
      description: "Các biopolymer và vật liệu sinh học khoáng có nguồn gốc từ vỏ tôm mở ra các ứng dụng hứa hẹn trong chăm sóc sức khỏe và kỹ thuật y sinh nhờ tính tương thích sinh học và các đặc tính chức năng của chúng.",
      solutionsTitle: "Giải pháp",
      solutions: ["Vật liệu sinh học chăm sóc vết thương", "Giá thể kỹ thuật mô", "Vật liệu ghép xương Hydroxyapatite", "Chất dẫn truyền thuốc"],
      platformsTitle: "Nền tảng công nghệ",
      platforms: ["Nền tảng Chitin / Chitosan", "Nền tảng Khoáng sản", "Nền tảng Lipid"]
    }
  },
  environmental: {
    id: "environmental",
    title: { en: "Environmental Technologies", vi: "Công nghệ Môi trường" },
    images: ["/assets/application/Environmental Technologies.png"],
    platformIds: ["chitosan", "carbon"],
    en: {
      description: "Biomaterials derived from shrimp shells can support environmental protection by enabling efficient removal of contaminants and pollutants from water and industrial waste streams.",
      solutionsTitle: "Solutions",
      solutions: ["Water treatment flocculants", "Heavy metal adsorption materials", "Wastewater purification technologies", "Environmental remediation materials"],
      platformsTitle: "Technology Platforms",
      platforms: ["Chitin / Chitosan Platform", "Carbon / Nanomaterial Platform"]
    },
    vi: {
      description: "Vật liệu sinh học có nguồn gốc từ vỏ tôm có thể hỗ trợ bảo vệ môi trường bằng cách cho phép loại bỏ hiệu quả các chất gây ô nhiễm và chất gây ô nhiễm từ nước và các dòng thải công nghiệp.",
      solutionsTitle: "Giải pháp",
      solutions: ["Chất keo tụ xử lý nước", "Vật liệu hấp phụ kim loại nặng", "Công nghệ làm sạch nước thải", "Vật liệu phục hồi môi trường"],
      platformsTitle: "Nền tảng công nghệ",
      platforms: ["Nền tảng Chitin / Chitosan", "Nền tảng Carbon / Vật liệu Nano"]
    }
  },
  advanced: {
    id: "advanced",
    title: { en: "Advanced Materials", vi: "Vật liệu Tiên tiến" },
    images: ["/assets/application/Advanced Materials.png"],
    platformIds: ["carbon"],
    en: {
      description: "Emerging technologies based on shrimp-derived carbon materials and nanomaterials open new possibilities in advanced materials science, sensing technologies, and energy systems.",
      solutionsTitle: "Solutions",
      solutions: ["Carbon quantum dots (CQDs)", "Fluorescent sensing materials", "Carbon nano-adsorbents", "Energy-related carbon materials"],
      platformsTitle: "Technology Platforms",
      platforms: ["Carbon / Nanomaterial Platform"]
    },
    vi: {
      description: "Các công nghệ mới nổi dựa trên vật liệu carbon và vật liệu nano từ tôm mở ra những khả năng mới trong khoa học vật liệu tiên tiến, công nghệ cảm biến và hệ thống năng lượng.",
      solutionsTitle: "Giải pháp",
      solutions: ["Chấm lượng tử carbon (CQDs)", "Vật liệu cảm biến huỳnh quang", "Chất hấp phụ nano carbon", "Vật liệu carbon liên quan đến năng lượng"],
      platformsTitle: "Nền tảng công nghệ",
      platforms: ["Nền tảng Carbon / Vật liệu Nano"]
    }
  }
};
