import {
  Leaf,
  ShieldAlert,
  Package,
  Droplets,
  Activity,
  Wheat,
  Utensils,
  FlaskConical,
  Heart,
  Atom,
  Sparkles,
  Zap,
  Microscope,
  Cpu,
  ShieldCheck,
  Search,
  Thermometer,
  Globe
} from "lucide-react";

export interface ProductItem {
  title: string;
  description?: string;
  isPrioritized?: boolean;
  platforms?: string[];
  industry?: string;
}

export interface ProductGroup {
  name: string;
  count: number;
  items: ProductItem[];
  iconPath: string;
}

export interface TranslatedContent {
  hero: {
    badge: string;
    title: string;
    description: string;
  };
  extraction: {
    title: string;
    description: string;
    features: string[];
  };
  products: {
    title: string;
    description?: string;
    items?: ProductItem[];
    groups?: ProductGroup[];
  };
  industries: {
    title: string;
    items: {
      title: string;
      description: string;
    }[];
  };
}

export interface PlatformData {
  id: string;
  images: {
    hero: string;
    lab: string;
  };
  icons: {
    products: any[];
    industries: any[];
  };
  en: TranslatedContent;
  vi: TranslatedContent;
}

export const platforms: Record<string, PlatformData> = {
  chitosan: {
    id: "chitosan",
    images: {
      hero: "/assets/platforms/chitosan-hero.png",
      lab: "/assets/platforms/chitosan-lab.png"
    },
    icons: {
      products: [Leaf, ShieldAlert, Package, Droplets, Activity],
      industries: [Wheat, Utensils, FlaskConical, Activity, Atom]
    },
    en: {
      hero: {
        badge: "Natural Biopolymer Innovation",
        title: "Chitin / Chitosan Platform",
        description: "The Chitin / Chitosan Platform focuses on the extraction, modification, and functionalization of chitin and chitosan biopolymers derived from shrimp shells. These natural biopolymers possess unique properties such as biodegradability, antimicrobial activity, biocompatibility, and film-forming capability, making them valuable across a wide range of industrial and biomedical applications."
      },
      extraction: {
        title: "Technology",
        description: "Our proprietary technology platform enables precise extraction, purification, and modification of chitin and chitosan biopolymers from shrimp shells.",
        features: [
          "Chitin extraction and purification",
          "Chitosan production and deacetylation",
          "Polymer modification and functionalization",
          "Biopolymer formulation and processing",
          "Nanostructured chitosan materials"
        ]
      },
      products: {
        title: "Products",
        description: "Our diverse portfolio of chitin and chitosan-derived products across six key application platforms.",
        groups: [
          {
            name: "Agriculture",
            count: 15,
            iconPath: "/assets/icons/platform/agri.png",
            items: [
              { title: "Chitosan bio stimulants", isPrioritized: true },
              { title: "Plant immune activators" },
              { title: "Seed coatings", isPrioritized: true },
              { title: "Foliar bioactive" },
              { title: "Root growth stimulants" },
              { title: "Antifungal crop protection inputs" },
              { title: "Soil microbiome stimulants" },
              { title: "Controlled-release fertilizer coatings" },
              { title: "Agricultural spray adjuvants" },
              { title: "Soil moisture retention polymers" },
              { title: "Super absorbent polymers (SAP)", isPrioritized: true },
              { title: "Bio-based soil conditioners" },
              { title: "Post-harvest fruit coatings" },
              { title: "Post-harvest vegetable coatings" },
              { title: "Edible preservation coatings" }
            ]
          },
          {
            name: "Aquaculture & Animal & Pet Health",
            count: 11,
            iconPath: "/assets/icons/platform/aqua.png",
            items: [
              { title: "Aquaculture immunostimulants" },
              { title: "Shrimp health additives" },
              { title: "Fish health additives" },
              { title: "Feed binders" },
              { title: "Antimicrobial aquaculture coatings" },
              { title: "Antibiotic alternative in livestock" },
              { title: "Methane emission reduction in ruminants" },
              { title: "Chronic Kidney Disease Supplements" },
              { title: "Obesity Supplements" },
              { title: "Oral health protection" },
              { title: "Pet food preservation", isPrioritized: true }
            ]
          },
          {
            name: "Materials & Industrial",
            count: 13,
            iconPath: "/assets/icons/platform/materials.png",
            items: [
              { title: "Biodegradable films" },
              { title: "Biopolymer composites" },
              { title: "Biodegradable plastic blends", isPrioritized: true },
              { title: "Super absorbent polymers (SAP)", isPrioritized: true },
              { title: "Antimicrobial coatings" },
              { title: "Textile antimicrobial finishes" },
              { title: "Cosmetic polymers" },
              { title: "Paper coatings" },
              { title: "Bio-based adhesives" },
              { title: "Fire-retardant biopolymers" },
              { title: "Chitosan nanoparticles", isPrioritized: true },
              { title: "Chitin nanofibers" },
              { title: "Chitin nanocrystals" }
            ]
          },
          {
            name: "Biomedical & Healthcare",
            count: 8,
            iconPath: "/assets/icons/platform/biomed.png",
            items: [
              { title: "Wound dressings", isPrioritized: true },
              { title: "Hemostatic dressings", isPrioritized: true },
              { title: "Antibacterial hydrogels" },
              { title: "Drug delivery carriers", isPrioritized: true },
              { title: "Gene delivery systems" },
              { title: "Vaccine delivery systems" },
              { title: "Tissue engineering scaffolds" },
              { title: "Injectable chitosan gels" }
            ]
          },
          {
            name: "Food & Packaging",
            count: 7,
            iconPath: "/assets/icons/platform/food.png",
            items: [
              { title: "Edible food coatings" },
              { title: "Antimicrobial food films", isPrioritized: true },
              { title: "Active packaging films", isPrioritized: true },
              { title: "Oxygen barrier films", isPrioritized: true },
              { title: "Shelf-life extension coatings" },
              { title: "Compostable food packaging" },
              { title: "Biodegradable packaging films" }
            ]
          },
          {
            name: "Water & Environmental",
            count: 6,
            iconPath: "/assets/icons/platform/water.png",
            items: [
              { title: "Water treatment flocculants", isPrioritized: true },
              { title: "Wastewater clarifiers" },
              { title: "Heavy metal adsorption materials", isPrioritized: true },
              { title: "Dye removal adsorbents" },
              { title: "Oil adsorption materials" },
              { title: "Antimicrobial filtration membranes" }
            ]
          }
        ]
      },
      industries: {
        title: "Industries",
        items: [
          { title: "Agriculture", description: "Plant health and biostimulants" },
          { title: "Food systems and packaging", description: "Sustainable packaging and food preservation" },
          { title: "Environmental technologies", description: "Water treatment and remediation" },
          { title: "Biomedical and healthcare materials", description: "Wound dressings and medical devices" },
          { title: "Advanced biomaterials", description: "High-performance composites" }
        ]
      }
    },
    vi: {
      hero: {
        badge: "Đổi Mới Biopolymer Tự Nhiên",
        title: "Nền Tảng Chitin / Chitosan",
        description: "Nền tảng Chitin / Chitosan tập trung vào việc chiết xuất, biến tính và chức năng hoá các biopolymer chitin và chitosan có nguồn gốc từ vỏ tôm. Các biopolymer tự nhiên này sở hữu những đặc tính độc đáo như khả năng phân hủy sinh học, hoạt tính kháng khuẩn, tương thích sinh học và khả năng tạo màng, khiến chúng trở nên giá trị trong nhiều ứng dụng công nghiệp và y sinh."
      },
      extraction: {
        title: "Công Nghệ",
        description: "Nền tảng công nghệ độc quyền của chúng tôi cho phép chiết xuất, tinh chế và biến tính chính xác biopolymer chitin và chitosan từ vỏ tôm.",
        features: [
          "Chiết xuất và tinh chế Chitin",
          "Sản xuất và khử acetyl Chitosan",
          "Biến tính và chức năng hóa polymer",
          "Công thức và chế biến biopolymer",
          "Vật liệu chitosan cấu trúc nano"
        ]
      },
      products: {
        title: "Sản phẩm",
        description: "Danh mục sản phẩm đa dạng từ chitin và chitosan của chúng tôi trên sáu nền tảng ứng dụng chính.",
        groups: [
          {
            name: "Nông nghiệp",
            count: 15,
            iconPath: "/assets/icons/platform/agri.png",
            items: [
              { title: "Chất kích thích sinh học chitosan", isPrioritized: true },
              { title: "Chất hoạt hóa miễn dịch thực vật" },
              { title: "Lớp phủ hạt giống", isPrioritized: true },
              { title: "Hoạt chất sinh học phun qua lá" },
              { title: "Chất kích thích sự phát triển của rễ" },
              { title: "Đầu vào bảo vệ cây trồng kháng nấm" },
              { title: "Chất kích thích hệ vi sinh vật đất" },
              { title: "Lớp phủ phân bón giải phóng có kiểm soát" },
              { title: "Tá dược phun nông nghiệp" },
              { title: "Polymer giữ ẩm đất" },
              { title: "Polymer siêu hấp thụ (SAP)", isPrioritized: true },
              { title: "Chất cải tạo đất gốc sinh học" },
              { title: "Lớp phủ trái cây sau thu hoạch" },
              { title: "Lớp phủ rau củ sau thu hoạch" },
              { title: "Lớp phủ bảo quản ăn được" }
            ]
          },
          {
            name: "Nuôi trồng thủy sản, Động vật & Thú cưng",
            count: 11,
            iconPath: "/assets/icons/platform/aqua.png",
            items: [
              { title: "Chất kích thích miễn dịch thủy sản" },
              { title: "Phụ gia sức khỏe tôm" },
              { title: "Phụ gia sức khỏe cá" },
              { title: "Chất kết dính thức ăn" },
              { title: "Lớp phủ kháng khuẩn trong thủy sản" },
              { title: "Thay thế kháng sinh trong chăn nuôi" },
              { title: "Giảm phát thải methane ở động vật nhai lại" },
              { title: "Thực phẩm hỗ trợ bệnh thận mãn tính" },
              { title: "Thực phẩm hỗ trợ béo phì" },
              { title: "Bảo vệ sức khỏe răng miệng" },
              { title: "Bảo quản thức ăn thú cưng", isPrioritized: true }
            ]
          },
          {
            name: "Vật liệu & Công nghiệp",
            count: 13,
            iconPath: "/assets/icons/platform/materials.png",
            items: [
              { title: "Màng phân hủy sinh học" },
              { title: "Composite biopolymer" },
              { title: "Hợp chất nhựa phân hủy sinh học", isPrioritized: true },
              { title: "Polymer siêu hấp thụ (SAP)", isPrioritized: true },
              { title: "Lớp phủ kháng khuẩn" },
              { title: "Chất hoàn tất kháng khuẩn dệt may" },
              { title: "Polymer mỹ phẩm" },
              { title: "Lớp phủ giấy" },
              { title: "Keo dán gốc sinh học" },
              { title: "Biopolymer chống cháy" },
              { title: "Hạt nano chitosan", isPrioritized: true },
              { title: "Sợi nano chitin" },
              { title: "Tinh thể nano chitin" }
            ]
          },
          {
            name: "Y sinh & Chăm sóc sức khỏe",
            count: 8,
            iconPath: "/assets/icons/platform/biomed.png",
            items: [
              { title: "Băng vết thương", isPrioritized: true },
              { title: "Băng cầm máu", isPrioritized: true },
              { title: "Hydrogel kháng khuẩn" },
              { title: "Chất vận chuyển dẫn truyền thuốc", isPrioritized: true },
              { title: "Hệ thống dẫn truyền gen" },
              { title: "Hệ thống dẫn truyền vaccine" },
              { title: "Giá thể kỹ thuật mô" },
              { title: "Gel chitosan dạng tiêm" }
            ]
          },
          {
            name: "Thực phẩm & Bao bì",
            count: 7,
            iconPath: "/assets/icons/platform/food.png",
            items: [
              { title: "Lớp phủ thực phẩm ăn được" },
              { title: "Màng thực phẩm kháng khuẩn", isPrioritized: true },
              { title: "Màng bao bì chủ động", isPrioritized: true },
              { title: "Màng ngăn oxy", isPrioritized: true },
              { title: "Lớp phủ kéo dài thời hạn sử dụng" },
              { title: "Bao bì thực phẩm có thể phân hủy" },
              { title: "Màng bao bì phân hủy sinh học" }
            ]
          },
          {
            name: "Nước & Môi trường",
            count: 6,
            iconPath: "/assets/icons/platform/water.png",
            items: [
              { title: "Chất keo tụ xử lý nước", isPrioritized: true },
              { title: "Chất làm trong nước thải" },
              { title: "Vật liệu hấp phụ kim loại nặng", isPrioritized: true },
              { title: "Chất hấp phụ loại bỏ thuốc nhuộm" },
              { title: "Vật liệu hấp phụ dầu" },
              { title: "Màng lọc kháng khuẩn" }
            ]
          }
        ]
      },
      industries: {
        title: "Ngành Hàng",
        items: [
          { title: "Nông nghiệp", description: "Sức khỏe cây trồng và kích thích sinh học" },
          { title: "Hệ thống thực phẩm và bao bì", description: "Bảo quản thực phẩm và bao bì bền vững" },
          { title: "Công nghệ môi trường", description: "Xử lý nước và phục hồi" },
          { title: "Vật liệu y sinh và chăm sóc sức khỏe", description: "Thiết bị y tế và băng gạc" },
          { title: "Vật liệu sinh học tiên tiến", description: "Composite hiệu suất cao" }
        ]
      }
    }
  },
  peptides: {
    id: "peptides",
    images: {
      hero: "/assets/platforms/chitosan-hero.png",
      lab: "/assets/platforms/chitosan-lab.png"
    },
    icons: {
      products: [Wheat, Heart, Activity, Utensils, Zap],
      industries: [Wheat, Utensils, Heart, Activity, Microscope]
    },
    en: {
      hero: {
        badge: "Bioactive Protein Excellence",
        title: "Protein / Peptide Platform",
        description: "The Protein / Peptide Platform utilizes enzymatic hydrolysis and bioprocessing technologies to convert shrimp-derived proteins into bioactive peptides and functional protein ingredients. These marine peptides possess nutritional and biological functions that support animal nutrition, human health, and industrial biotechnology applications."
      },
      extraction: {
        title: "Technology",
        description: "Our state-of-the-art enzymatic processes gently break down proteins into highly bioavailable peptides and essential amino acids.",
        features: [
          "Enzymatic hydrolysis of marine proteins",
          "Peptide fractionation and purification",
          "Bioactive peptide discovery and characterization",
          "Protein ingredient formulation"
        ]
      },
      products: {
        title: "Products",
        groups: [
          {
            name: "Materials & Industrial",
            count: 4,
            iconPath: "/assets/icons/platform/materials.png",
            items: [
              { title: "Fermentation media nutrients" },
              { title: "Microbial growth nutrients" },
              { title: "Cell culture media ingredients" },
              { title: "Precision fermentation nutrient inputs" }
            ]
          },
          {
            name: "Food & Packaging",
            count: 3,
            iconPath: "/assets/icons/platform/food.png",
            items: [
              { title: "Flavor enhancers from hydrolysates" },
              { title: "Functional beverage protein ingredients" },
              { title: "Clinical nutrition protein ingredients" }
            ]
          },
          {
            name: "Human Nutrition & Nutraceuticals",
            count: 10,
            iconPath: "/assets/icons/platform/nutrition.png",
            items: [
              { title: "Antioxidant peptides", isPrioritized: true },
              { title: "Immune-support peptides" },
              { title: "Sports nutrition peptides", isPrioritized: true },
              { title: "Metabolic health peptides" },
              { title: "Beauty-from-within marine peptides" },
              { title: "Joint health peptides" },
              { title: "Anti-inflammatory peptides" },
              { title: "Therapeutic peptides" },
              { title: "Antimicrobial peptides" },
              { title: "Tissue regeneration peptides" }
            ]
          },
          {
            name: "Aquaculture Health",
            count: 6,
            iconPath: "/assets/icons/platform/aqua.png",
            items: [
              { title: "Aquaculture feed peptides", isPrioritized: true },
              { title: "Shrimp immune stimulants", isPrioritized: true },
              { title: "Growth - promoting peptides", isPrioritized: true },
              { title: "Digestibility enhancers", isPrioritized: true },
              { title: "Feed palatability enhancers", isPrioritized: true },
              { title: "Larval nutrition ingredients" }
            ]
          },
          {
            name: "Animal Health",
            count: 3,
            iconPath: "/assets/icons/platform/animal.png",
            items: [
              { title: "Livestock feed hydrolysates" },
              { title: "Poultry digestibility enhancers" },
              { title: "Functional protein concentrates" }
            ]
          },
          {
            name: "Pet Health",
            count: 6,
            iconPath: "/assets/icons/platform/pets.png",
            items: [
              { title: "Marine protein ingredients for pet food", isPrioritized: true },
              { title: "Functional pet health additives" },
              { title: "Skin and coat health peptides" },
              { title: "Joint support peptides" },
              { title: "Petfood palatant" },
              { title: "Petfood hypoallergenic ingredients" }
            ]
          }
        ]
      },
      industries: {
        title: "Industries",
        items: [
          { title: "Aquaculture", description: "Functional feed and animal health" },
          { title: "Animal nutrition", description: "Livestock and poultry performance" },
          { title: "Pet nutrition", description: "Premium and functional pet food ingredients" },
          { title: "Human nutrition and nutraceuticals", description: "Supplements and functional foods" },
          { title: "Industrial biotechnology and fermentation", description: "Microbial growth and bioprocessing" }
        ]
      }
    },
    vi: {
      hero: {
        badge: "Tinh Hoa Protein Hoạt Tính",
        title: "Nền Tảng Protein / Peptide",
        description: "Nền tảng Protein / Peptide sử dụng công nghệ thủy phân enzyme và xử lý sinh học để chuyển đổi protein từ tôm thành các peptide hoạt tính sinh học và các thành phần protein chức năng. Các peptide biển này sở hữu các chức năng dinh dưỡng và sinh học hỗ trợ dinh dưỡng động vật, sức khỏe con người và các ứng dụng công nghệ sinh học công nghiệp."
      },
      extraction: {
        title: "Công Nghệ",
        description: "Quy trình enzyme hiện đại của chúng tôi nhẹ nhàng bẻ gãy protein thành các peptide và axit amin có độ khả dụng sinh học cao.",
        features: [
          "Thủy phân enzyme protein biển",
          "Phân tách và tinh chế peptide",
          "Khám phá và đặc tính hóa peptide hoạt tính",
          "Công thức thành phần protein"
        ]
      },
      products: {
        title: "Sản phẩm",
        groups: [
          {
            name: "Vật liệu & Công nghiệp",
            count: 4,
            iconPath: "/assets/icons/platform/materials.png",
            items: [
              { title: "Dinh dưỡng môi trường lên men" },
              { title: "Dinh dưỡng tăng trưởng vi sinh" },
              { title: "Thành phần môi trường nuôi cấy tế bào" },
              { title: "Đầu vào dinh dưỡng lên men chính xác" }
            ]
          },
          {
            name: "Thực phẩm & Bao bì",
            count: 3,
            iconPath: "/assets/icons/platform/food.png",
            items: [
              { title: "Chất tăng hương vị từ dịch thủy phân" },
              { title: "Thành phần protein thức uống chức năng" },
              { title: "Thành phần protein dinh dưỡng lâm sàng" }
            ]
          },
          {
            name: "Dinh dưỡng Con người & Dược phẩm",
            count: 10,
            iconPath: "/assets/icons/platform/nutrition.png",
            items: [
              { title: "Peptide chống oxy hóa", isPrioritized: true },
              { title: "Peptide hỗ trợ miễn dịch" },
              { title: "Peptide dinh dưỡng thể thao", isPrioritized: true },
              { title: "Peptide sức khỏe chuyển hóa" },
              { title: "Peptide làm đẹp từ bên trong" },
              { title: "Peptide sức khỏe xương khớp" },
              { title: "Peptide kháng viêm" },
              { title: "Peptide điều trị" },
              { title: "Peptide kháng khuẩn" },
              { title: "Peptide tái tạo mô" }
            ]
          },
          {
            name: "Sức khỏe Thủy sản",
            count: 6,
            iconPath: "/assets/icons/platform/aqua.png",
            items: [
              { title: "Peptide thức ăn thủy sản", isPrioritized: true },
              { title: "Chất kích thích miễn dịch tôm", isPrioritized: true },
              { title: "Peptide thúc đẩy tăng trưởng", isPrioritized: true },
              { title: "Chất tăng cường tiêu hóa", isPrioritized: true },
              { title: "Chất tăng độ ngon của thức ăn", isPrioritized: true },
              { title: "Thành phần dinh dưỡng ấu trùng" }
            ]
          },
          {
            name: "Sức khỏe Động vật",
            count: 3,
            iconPath: "/assets/icons/platform/animal.png",
            items: [
              { title: "Đạm thủy phân thức ăn chăn nuôi" },
              { title: "Chất tăng cường tiêu hóa gia cầm" },
              { title: "Protein tinh chất chức năng" }
            ]
          },
          {
            name: "Sức khỏe Thú cưng",
            count: 6,
            iconPath: "/assets/icons/platform/pets.png",
            items: [
              { title: "Thành phần protein biển cho thức ăn thú cưng", isPrioritized: true },
              { title: "Phụ gia sức khỏe thú cưng chức năng" },
              { title: "Peptide sức khỏe da và lông" },
              { title: "Peptide hỗ trợ xương khớp" },
              { title: "Chất tạo mùi vị thức ăn thú cưng" },
              { title: "Thành phần thức ăn thú cưng ít gây dị ứng" }
            ]
          }
        ]
      },
      industries: {
        title: "Ngành Hàng",
        items: [
          { title: "Nuôi trồng thủy sản", description: "Thức ăn chức năng và sức khỏe động vật" },
          { title: "Dinh dưỡng động vật", description: "Hiệu suất chăn nuôi gia súc, gia cầm" },
          { title: "Dinh dưỡng thú cưng", description: "Thành phần thức ăn thú cưng cao cấp" },
          { title: "Dinh dưỡng con người và dược phẩm", description: "Thực phẩm bổ sung và thực phẩm chức năng" },
          { title: "Công nghệ sinh học và lên men", description: "Phát triển vi sinh và quy trình sinh học" }
        ]
      }
    }
  },
  minerals: {
    id: "minerals",
    images: {
      hero: "/assets/platforms/chitosan-hero.png",
      lab: "/assets/platforms/chitosan-lab.png"
    },
    icons: {
      products: [Droplets, Zap, Wheat, Activity, ShieldCheck],
      industries: [Wheat, Package, Activity, Microscope]
    },
    en: {
      hero: {
        badge: "Inorganic Bio-Resource",
        title: "Mineral Platform",
        description: "The Mineral Platform focuses on the recovery and processing of calcium-rich mineral fractions from shrimp shells. These minerals, primarily calcium carbonate and hydroxyapatite, can be refined into high-value materials used in agriculture, industrial applications, and biomedical fields."
      },
      extraction: {
        title: "Technology",
        description: "Our chemical-free process isolates the mineral fraction of shrimp shells, preserving its natural structure and purity for specialized applications.",
        features: [
          "Mineral extraction and purification",
          "Calcium carbonate processing",
          "Nano-calcium material synthesis",
          "Hydroxyapatite biomaterial production"
        ]
      },
      products: {
        title: "Products",
        groups: [
          {
            name: "Agriculture",
            count: 2,
            iconPath: "/assets/icons/platform/agri.png",
            items: [
              { title: "Mineral soil amendments" },
              { title: "Calcium soil conditioners" }
            ]
          },
          {
            name: "Biomedical & Healthcare",
            count: 6,
            iconPath: "/assets/icons/platform/biomed.png",
            items: [
              { title: "Hydroxyapatite bone grafts", isPrioritized: true },
              { title: "Dental remineralization materials", isPrioritized: true },
              { title: "Bone regeneration scaffolds" },
              { title: "Orthopedic biomaterial fillers" },
              { title: "Implant coating materials" },
              { title: "Injectable bone repair materials" }
            ]
          },
          {
            name: "Cosmetics & Personal Care",
            count: 2,
            iconPath: "/assets/icons/platform/packaging.png",
            items: [
              { title: "Cosmetic mineral powders" },
              { title: "Tooth care mineral ingredients" }
            ]
          },
          {
            name: "Aquaculture & Animal Health",
            count: 2,
            iconPath: "/assets/icons/platform/aqua.png",
            items: [
              { title: "Aquaculture mineral supplements" },
              { title: "Livestock mineral premix ingredients" }
            ]
          },
          {
            name: "Water & Environmental",
            count: 2,
            iconPath: "/assets/icons/platform/water.png",
            items: [
              { title: "Water treatment mineral media" },
              { title: "Environmental remediation fillers" }
            ]
          },
          {
            name: "Materials & Industrial",
            count: 5,
            iconPath: "/assets/icons/platform/materials.png",
            items: [
              { title: "Purified calcium carbonate fillers", isPrioritized: true },
              { title: "Nano-calcium carbonate" },
              { title: "Specialty mineral additives" },
              { title: "Polymer composite fillers" },
              { title: "Paper and coating fillers" }
            ]
          }
        ]
      },
      industries: {
        title: "Industries",
        items: [
          { title: "Agriculture", description: "Soil health and plant nutrition" },
          { title: "Industrial materials", description: "Sustainable mineral fillers and additives" },
          { title: "Biomedical materials", description: "Osteogenic and orthopedic applications" },
          { title: "Dental and orthopedic applications", description: "Biocompatible mineral solutions" }
        ]
      }
    },
    vi: {
      hero: {
        badge: "Nguồn Khoáng Sinh Học",
        title: "Nền Tảng Khoáng Sản",
        description: "Nền tảng Khoáng Sản tập trung vào việc thu hồi và xử lý các thành phần khoáng giàu canxi từ vỏ tôm. Các khoáng chất này, chủ yếu là canxi cacbonat và hydroxyapatite, có thể được tinh chế thành các vật liệu có giá trị cao được sử dụng trong nông nghiệp, các ứng dụng công nghiệp và lĩnh vực y sinh."
      },
      extraction: {
        title: "Công Nghệ",
        description: "Quy trình không hóa chất của chúng tôi tách riêng phần khoáng của vỏ tôm, giữ nguyên cấu trúc tự nhiên và độ tinh khiết.",
        features: [
          "Chiết xuất và tinh chế khoáng sản",
          "Chế biến Canxi Cacbonat",
          "Tổng hợp vật liệu Nano-Canxi",
          "Sản xuất vật liệu sinh học Hydroxyapatite"
        ]
      },
      products: {
        title: "Sản phẩm",
        groups: [
          {
            name: "Nông nghiệp",
            count: 2,
            iconPath: "/assets/icons/platform/agri.png",
            items: [
              { title: "Phụ gia khoáng cải tạo đất" },
              { title: "Chất ổn định đất canxi" }
            ]
          },
          {
            name: "Y sinh & Chăm sóc sức khỏe",
            count: 6,
            iconPath: "/assets/icons/platform/biomed.png",
            items: [
              { title: "Xương ghép Hydroxyapatite", isPrioritized: true },
              { title: "Vật liệu tái khoáng nha khoa", isPrioritized: true },
              { title: "Giá thể tái tạo xương" },
              { title: "Chất độn vật liệu sinh học chỉnh hình" },
              { title: "Vật liệu phủ mô cấy" },
              { title: "Vật liệu sửa chữa xương dạng tiêm" }
            ]
          },
          {
            name: "Mỹ phẩm & Chăm sóc cá nhân",
            count: 2,
            iconPath: "/assets/icons/platform/packaging.png",
            items: [
              { title: "Bột khoáng mỹ phẩm" },
              { title: "Thành phần khoáng chăm sóc răng miệng" }
            ]
          },
          {
            name: "Nuôi trồng thủy sản & Sức khỏe Động vật",
            count: 2,
            iconPath: "/assets/icons/platform/aqua.png",
            items: [
              { title: "Thực phẩm bổ sung khoáng thủy sản" },
              { title: "Thành phần vi lượng khoáng cho chăn nuôi" }
            ]
          },
          {
            name: "Nước & Môi trường",
            count: 2,
            iconPath: "/assets/icons/platform/water.png",
            items: [
              { title: "Vật liệu khoáng xử lý nước" },
              { title: "Chất độn phục hồi môi trường" }
            ]
          },
          {
            name: "Vật liệu & Công nghiệp",
            count: 5,
            iconPath: "/assets/icons/platform/materials.png",
            items: [
              { title: "Chất độn Canxi cacbonat tinh khiết", isPrioritized: true },
              { title: "Canxi cacbonat Nano" },
              { title: "Phụ gia khoáng đặc chủng" },
              { title: "Chất độn composite polymer" },
              { title: "Chất độn giấy và lớp phủ" }
            ]
          }
        ]
      },
      industries: {
        title: "Ngành Hàng",
        items: [
          { title: "Nông nghiệp", description: "Sức khỏe đất và dinh dưỡng cây trồng" },
          { title: "Vật liệu công nghiệp", description: "Chất độn và phụ gia khoáng bền vững" },
          { title: "Vật liệu y sinh", description: "Ứng dụng trong chỉnh hình và tái tạo" },
          { title: "Ứng dụng nha khoa và chỉnh hình", description: "Giải pháp khoáng tương thích sinh học" }
        ]
      }
    }
  },
  carbon: {
    id: "carbon",
    images: {
      hero: "/assets/platforms/chitosan-hero.png",
      lab: "/assets/platforms/chitosan-lab.png"
    },
    icons: {
      products: [Atom, Sparkles, Droplets, Zap],
      industries: [Globe, Atom, Zap, Search]
    },
    en: {
      hero: {
        badge: "Nano-Carbon Innovation",
        title: "Carbon / Nanomaterial Platform",
        description: "The Carbon / Nanomaterial Platform explores the conversion of shrimp biomass into carbon-based nanomaterials and advanced functional materials. Through thermal and chemical transformation processes, shrimp-derived carbon structures can be engineered into materials with applications in sensing, environmental technologies, and energy systems."
      },
      extraction: {
        title: "Technology",
        description: "Utilizing high-pressure thermal processes to convert organic precursors into functionalized carbon nanostructures.",
        features: [
          "Biomass carbonization",
          "Carbon quantum dot synthesis",
          "Nanostructured carbon engineering",
          "Surface functionalization of carbon materials"
        ]
      },
      products: {
        title: "Products",
        groups: [
          {
            name: "Advanced Carbon Materials",
            count: 5,
            iconPath: "/assets/icons/platform/nanomaterial.png",
            items: [
              { title: "Nitrogen-doped carbon materials" },
              { title: "Graphene-like carbon materials" },
              { title: "Carbon aerogels" },
              { title: "Porous carbon materials" },
              { title: "Catalytic carbon materials" }
            ]
          },
          {
            name: "Biomedical & Agriculture",
            count: 3,
            iconPath: "/assets/icons/platform/biomed.png",
            items: [
              { title: "Drug delivery nanocarriers" },
              { title: "Nano-bio interface materials" },
              { title: "Carbon dots for plant growth stimulation" }
            ]
          },
          {
            name: "Water & Environmental",
            count: 3,
            iconPath: "/assets/icons/platform/water.png",
            items: [
              { title: "Carbon adsorbents for wastewater" },
              { title: "Gas purification adsorbents" },
              { title: "Environmental remediation catalysts" }
            ]
          },
          {
            name: "Nanomaterials, Energy & Sensors",
            count: 12,
            iconPath: "/assets/icons/platform/biomed-carbon.png",
            items: [
              { title: "Carbon quantum dots (CQDs)", isPrioritized: true },
              { title: "Fluorescent carbon dots" },
              { title: "Bioimaging probes" },
              { title: "Optical sensing materials" },
              { title: "Environmental monitoring sensors" },
              { title: "Water quality sensors" },
              { title: "Heavy metal sensors" },
              { title: "Food freshness sensors" },
              { title: "Supercapacitor electrode materials", isPrioritized: true },
              { title: "Battery precursor materials", isPrioritized: true },
              { title: "Fuel cell carbon materials" },
              { title: "Conductive carbon additives" }
            ]
          }
        ]
      },
      industries: {
        title: "Industries",
        items: [
          { title: "Environmental monitoring", description: "Detection and tracking of pollutants" },
          { title: "Advanced materials", description: "High-tech material engineering" },
          { title: "Energy storage technologies", description: "Enhanced battery and capacitor materials" },
          { title: "Smart sensing systems", description: "Next-gen industrial and medical sensors" }
        ]
      }
    },
    vi: {
      hero: {
        badge: "Đổi Mới Nano-Carbon",
        title: "Nền Tảng Nano / Vật Liệu Carbon",
        description: "Nền tảng Carbon / Vật liệu Nano khám phá việc chuyển đổi sinh khối tôm thành các vật liệu nano gốc carbon và vật liệu chức năng tiên tiến. Thông qua các quy trình chuyển đổi nhiệt và hóa học, cấu trúc carbon từ tôm có thể được thiết kế thành vật liệu ứng dụng trong cảm biến, công nghệ môi trường và hệ thống năng lượng."
      },
      extraction: {
        title: "Công Nghệ",
        description: "Sử dụng quy trình nhiệt áp suất cao để chuyển đổi tiền chất hữu cơ thành cấu trúc nano carbon chức năng.",
        features: [
          "Carbon hóa sinh khối",
          "Tổng hợp chấm lượng tử carbon",
          "Kỹ thuật carbon cấu trúc nano",
          "Chức năng hóa bề mặt vật liệu carbon"
        ]
      },
      products: {
        title: "Sản phẩm",
        groups: [
          {
            name: "Vật liệu Carbon Tiên tiến",
            count: 5,
            iconPath: "/assets/icons/platform/nanomaterial.png",
            items: [
              { title: "Vật liệu Carbon pha tạp Nitơ" },
              { title: "Vật liệu Carbon dạng Graphene" },
              { title: "Aerogel Carbon" },
              { title: "Vật liệu Carbon xốp" },
              { title: "Vật liệu Carbon xúc tác" }
            ]
          },
          {
            name: "Y sinh & Nông nghiệp",
            count: 3,
            iconPath: "/assets/icons/platform/biomed.png",
            items: [
              { title: "Hệ mang nano vận chuyển thuốc" },
              { title: "Vật liệu tương tác nano-sinh học" },
              { title: "Chấm Carbon kích thích tăng trưởng thực vật" }
            ]
          },
          {
            name: "Nước & Môi trường",
            count: 3,
            iconPath: "/assets/icons/platform/water.png",
            items: [
              { title: "Chất hấp phụ Carbon cho nước thải" },
              { title: "Chất hấp phụ làm sạch khí" },
              { title: "Xúc tác phục hồi môi trường" }
            ]
          },
          {
            name: "Vật liệu Nano, Năng lượng & Cảm biến",
            count: 12,
            iconPath: "/assets/icons/platform/biomed-carbon.png",
            items: [
              { title: "Chấm lượng tử Carbon (CQDs)", isPrioritized: true },
              { title: "Chấm Carbon huỳnh quang" },
              { title: "Đầu dò hình ảnh sinh học" },
              { title: "Vật liệu cảm biến quang học" },
              { title: "Cảm biến giám sát môi trường" },
              { title: "Cảm biến chất lượng nước" },
              { title: "Cảm biến kim loại nặng" },
              { title: "Cảm biến độ tươi thực phẩm" },
              { title: "Vật liệu điện cực siêu tụ điện", isPrioritized: true },
              { title: "Vật liệu tiền chất pin", isPrioritized: true },
              { title: "Vật liệu Carbon cho pin nhiên liệu" },
              { title: "Phụ gia Carbon dẫn điện" }
            ]
          }
        ]
      },
      industries: {
        title: "Ngành Hàng",
        items: [
          { title: "Giám sát môi trường", description: "Phát hiện và theo dõi các chất gây ô nhiễm" },
          { title: "Vật liệu tiên tiến", description: "Kỹ thuật vật liệu công nghệ cao" },
          { title: "Công nghệ lưu trữ năng lượng", description: "Vật liệu cải tiến cho pin và tụ điện" },
          { title: "Hệ thống cảm biến thông minh", description: "Cảm biến công nghiệp và y tế thế hệ mới" }
        ]
      }
    }
  },
  astaxanthin: {
    id: "astaxanthin",
    images: {
      hero: "/assets/platforms/chitosan-hero.png",
      lab: "/assets/platforms/chitosan-lab.png"
    },
    icons: {
      products: [Utensils, Heart, Activity, Sparkles],
      industries: [Wheat, Heart, Droplets, Activity]
    },
    en: {
      hero: {
        badge: "Premium Antioxidant Source",
        title: "Astaxanthin / Carotenoid Platform",
        description: "The Astaxanthin Platform focuses on the recovery and utilization of natural carotenoids present in shrimp by-products. Astaxanthin is a powerful antioxidant compound widely used in aquaculture nutrition, human health products, and cosmetic formulations."
      },
      extraction: {
        title: "Technology",
        description: "A gentle extraction method that preserves the biological activity and purity of natural carotenoids.",
        features: [
          "Carotenoid extraction and purification",
          "Microencapsulation and stabilization",
          "Nutraceutical ingredient formulation"
        ]
      },
      products: {
        title: "Products",
        groups: [
          {
            name: "Aquaculture & Animal Health",
            count: 5,
            iconPath: "/assets/icons/platform/aqua.png",
            items: [
              { title: "Salmon pigmentation additives" },
              { title: "Shrimp coloration additives" },
              { title: "Ornamental fish pigmentation" },
              { title: "Poultry pigmentation additives" },
              { title: "Egg yolk color enhancers" }
            ]
          },
          {
            name: "Human Nutrition & Nutraceuticals",
            count: 6,
            iconPath: "/assets/icons/platform/nutrition.png",
            items: [
              { title: "Antioxidant supplements", isPrioritized: true },
              { title: "Eye health ingredients" },
              { title: "Cardiovascular health ingredients" },
              { title: "Anti-inflammatory nutraceuticals" },
              { title: "Cognitive health supplements" },
              { title: "Healthy aging supplements" }
            ]
          },
          {
            name: "Food & Packaging",
            count: 5,
            iconPath: "/assets/icons/platform/food.png",
            items: [
              { title: "Antioxidant functional beverages" },
              { title: "Sports recovery drinks" },
              { title: "Nutrition bars" },
              { title: "Wellness gummies" },
              { title: "Astaxanthin for Food & Pet Food", isPrioritized: true }
            ]
          },
          {
            name: "Cosmetics & Personal Care",
            count: 4,
            iconPath: "/assets/icons/platform/mesh.png",
            items: [
              { title: "Anti-aging skincare actives" },
              { title: "UV protection formulations" },
              { title: "Dermal antioxidant ingredients" },
              { title: "Marine antioxidant serums" }
            ]
          },
          {
            name: "Pharmaceuticals & Drug Delivery",
            count: 3,
            iconPath: "/assets/icons/platform/pharmaceuticals.png",
            items: [
              { title: "Anti-inflammatory actives" },
              { title: "Neuroprotection research compounds" },
              { title: "Encapsulated astaxanthin systems" }
            ]
          },
          {
            name: "Pet Health",
            count: 3,
            iconPath: "/assets/icons/platform/pets.png",
            items: [
              { title: "Antioxidant" },
              { title: "Anti-aging" },
              { title: "Coat and skin supplements" }
            ]
          }
        ]
      },
      industries: {
        title: "Industries",
        items: [
          { title: "Aquaculture", description: "Natural coloration and shrimp health" },
          { title: "Human nutrition and pharmaceuticals", description: "Antioxidant supplements" },
          { title: "Cosmetics and personal care", description: "Skincare actives and protective formulations" },
          { title: "Functional health products", description: "High-performance bioactive solutions" }
        ]
      }
    },
    vi: {
      hero: {
        badge: "Nguồn Chống Oxy Hóa Cao Cấp",
        title: "Nền Tảng Astaxanthin / Carotenoid",
        description: "Nền tảng Astaxanthin tập trung vào việc thu hồi và sử dụng các carotenoid tự nhiên có trong phụ phẩm tôm. Astaxanthin là một hợp chất chống oxy hóa mạnh mẽ được sử dụng rộng rãi trong dinh dưỡng nuôi trồng thủy sản, các sản phẩm sức khỏe con người và các công thức mỹ phẩm."
      },
      extraction: {
        title: "Công Nghệ",
        description: "Phương pháp chiết xuất nhẹ nhàng giúp bảo tồn hoạt tính sinh học và độ tinh khiết của carotenoid tự nhiên.",
        features: [
          "Chiết xuất và tinh chế carotenoid",
          "Vi bao và ổn định hoạt chất",
          "Công thức thành phần dược phẩm"
        ]
      },
      products: {
        title: "Sản phẩm",
        groups: [
          {
            name: "Sức khỏe Thủy sản & Động vật",
            count: 5,
            iconPath: "/assets/icons/platform/aqua.png",
            items: [
              { title: "Phụ gia sắc tố cho cá hồi" },
              { title: "Phụ gia tạo màu cho tôm" },
              { title: "Sắc tố cho cá cảnh" },
              { title: "Phụ gia sắc tố gia cầm" },
              { title: "Chất tăng màu lòng đỏ trứng" }
            ]
          },
          {
            name: "Dinh dưỡng Con người & Thực phẩm chức năng",
            count: 6,
            iconPath: "/assets/icons/platform/nutrition.png",
            items: [
              { title: "Thực phẩm bổ sung chống oxy hóa", isPrioritized: true },
              { title: "Thành phần bổ mắt" },
              { title: "Thành phần sức khỏe tim mạch" },
              { title: "Dược phẩm dinh dưỡng kháng viêm" },
              { title: "Thực phẩm bổ sung trí não" },
              { title: "Thực phẩm bổ sung chống lão hóa" }
            ]
          },
          {
            name: "Thực phẩm & Bao bì",
            count: 5,
            iconPath: "/assets/icons/platform/food.png",
            items: [
              { title: "Đồ uống chức năng chống oxy hóa" },
              { title: "Đồ uống phục hồi thể thao" },
              { title: "Thanh dinh dưỡng" },
              { title: "Kẹo dẻo sức khỏe" },
              { title: "Astaxanthin cho Thực phẩm & Thức ăn Thú cưng", isPrioritized: true }
            ]
          },
          {
            name: "Mỹ phẩm & Chăm sóc cá nhân",
            count: 4,
            iconPath: "/assets/icons/platform/mesh.png",
            items: [
              { title: "Sơ chế hoạt chất dưỡng da chống lão hóa" },
              { title: "Công thức bảo vệ tia UV" },
              { title: "Thành phần chống oxy hóa da" },
              { title: "Serum chống oxy hóa biển" }
            ]
          },
          {
            name: "Dược phẩm & Hệ thống phân phối",
            count: 3,
            iconPath: "/assets/icons/platform/pharmaceuticals.png",
            items: [
              { title: "Hoạt chất kháng viêm" },
              { title: "Hợp chất nghiên cứu bảo vệ thần kinh" },
              { title: "Hệ thống astaxanthin vi bao" }
            ]
          },
          {
            name: "Sức khỏe Thú cưng",
            count: 3,
            iconPath: "/assets/icons/platform/pets.png",
            items: [
              { title: "Chống oxy hóa" },
              { title: "Chống lão hóa" },
              { title: "Bổ sung cho da và lông" }
            ]
          }
        ]
      },
      industries: {
        title: "Ngành Hàng",
        items: [
          { title: "Nuôi trồng thủy sản", description: "Tạo màu tự nhiên và sức khỏe tôm cá" },
          { title: "Dinh dưỡng con người và dược phẩm", description: "Thực phẩm bổ sung chống oxy hóa" },
          { title: "Mỹ phẩm và chăm sóc cá nhân", description: "Hoạt chất chăm sóc da và công thức bảo vệ" },
          { title: "Sản phẩm sức khỏe chức năng", description: "Các giải pháp sinh học hiệu suất cao" }
        ]
      }
    }
  },
  lipid: {
    id: "lipid",
    images: {
      hero: "/assets/platforms/chitosan-hero.png",
      lab: "/assets/platforms/chitosan-lab.png"
    },
    icons: {
      products: [Droplets, Heart, Utensils, Sparkles, ShieldCheck, Activity],
      industries: [Wheat, Heart, Sparkles, Utensils, FlaskConical]
    },
    en: {
      hero: {
        badge: "Marine Lipid Bioactives",
        title: "Lipid Platform",
        description: "The Lipid Platform focuses on the extraction, refinement, and functionalization of lipid fractions derived from shrimp by-products. These lipids include phospholipids, omega fatty acids, sterols, and other bioactive lipid compounds that possess high nutritional, functional, and biochemical value. Compared to protein and polysaccharide streams, lipid fractions offer high value density and bioactivity, enabling applications in nutrition, health, cosmetics, and advanced delivery systems."
      },
      extraction: {
        title: "Technology",
        description: "Our platform enables precise extraction, fractionation, and stabilization of high-value lipid bioactives from shrimp biomass.",
        features: [
          "Lipid extraction and fractionation",
          "Enzymatic and solvent-based lipid recovery",
          "Phospholipid and omega fatty acid purification",
          "Lipid stabilization and oxidation control",
          "Microencapsulation and delivery system design",
          "Functional lipid formulation"
        ]
      },
      products: {
        title: "Products",
        groups: [
          {
            name: "Aquaculture & Animal Health",
            count: 16,
            iconPath: "/assets/icons/platform/animal.png",
            items: [
              { title: "Shrimp oil feed ingredients" },
              { title: "Phospholipid-rich aquaculture additives" },
              { title: "Marine lipid energy supplements" },
              { title: "Broodstock reproductive lipid nutrition" },
              { title: "Larval nutrition lipid concentrates" },
              { title: "Stress-resilience lipid premixes" },
              { title: "Feed attractant lipid systems" },
              { title: "Omega-rich aquaculture lipid supplements" },
              { title: "Marine lipid digestion enhancers" },
              { title: "Functional aquaculture lipid emulsions" },
              { title: "Marine lipid feed additives" },
              { title: "Poultry energy lipid concentrates" },
              { title: "Reproductive performance lipid supplements" },
              { title: "Immune-support lipid ingredients" },
              { title: "Egg quality lipid enrichment ingredients" },
              { title: "Growth performance lipid premixes" }
            ]
          },
          {
            name: "Human Nutrition & Nutraceuticals",
            count: 9,
            iconPath: "/assets/icons/platform/nutrition.png",
            items: [
              { title: "Shrimp oil nutraceutical ingredients" },
              { title: "Marine phospholipid concentrates" },
              { title: "Omega-3 enriched marine lipid ingredients" },
              { title: "Brain health lipid supplements" },
              { title: "Cardiovascular support marine oils" },
              { title: "Healthy aging lipid formulations" },
              { title: "Lipid-based antioxidant delivery systems" },
              { title: "Soft gel nutraceutical oils" },
              { title: "Lipid encapsulated nutrition systems" }
            ]
          },
          {
            name: "Cosmetics & Personal Care",
            count: 6,
            iconPath: "/assets/icons/platform/packaging.png",
            items: [
              { title: "Marine lipid cosmetic actives" },
              { title: "Skin barrier repair lipids" },
              { title: "Moisturizing lipid complexes" },
              { title: "Anti-aging marine oil actives" },
              { title: "Lipid-based dermal delivery systems" },
              { title: "Hair and scalp nourishing marine oils" }
            ]
          },
          {
            name: "Pet Health",
            count: 6,
            iconPath: "/assets/icons/platform/pets.png",
            items: [
              { title: "Marine lipid ingredients for pet food" },
              { title: "Skin and coat health lipid supplements" },
              { title: "Cognitive support marine lipids" },
              { title: "Joint support lipid supplements" },
              { title: "Petfood palatability lipid systems" },
              { title: "Senior pet functional lipid supplements" }
            ]
          },
          {
            name: "Food & Packaging",
            count: 5,
            iconPath: "/assets/icons/platform/food.png",
            items: [
              { title: "Marine lipid flavor carriers" },
              { title: "Functional oil blends" },
              { title: "Lipid-based nutrient carriers" },
              { title: "Emulsified marine lipid ingredients" },
              { title: "Fortified nutrition oil systems" }
            ]
          },
          {
            name: "Pharmaceuticals & Drug Delivery",
            count: 5,
            iconPath: "/assets/icons/platform/pharmaceuticals.png",
            items: [
              { title: "Liposomal marine lipid systems" },
              { title: "Nano emulsion delivery systems" },
              { title: "Lipid-based drug delivery carriers" },
              { title: "Bioavailability-enhancing lipid carriers" },
              { title: "Encapsulated marine oil systems" }
            ]
          },
          {
            name: "Materials & Industrial",
            count: 4,
            iconPath: "/assets/icons/platform/materials.png",
            items: [
              { title: "Marine lipid emulsifiers" },
              { title: "Bio-based surfactant precursors" },
              { title: "Specialty marine oil fractions" },
              { title: "Lipid extracts for functional formulations" }
            ]
          }
        ]
      },
      industries: {
        title: "Industries",
        items: [
          { title: "Aquaculture and animal nutrition", description: "Lipid feeds for optimal growth and health" },
          { title: "Human nutrition and nutraceuticals", description: "Omega supplements and functional lipid ingredients" },
          { title: "Cosmetics and personal care", description: "Skin barrier and anti-aging lipid actives" },
          { title: "Functional foods and beverages", description: "Bioactive lipid enrichment for consumer products" },
          { title: "Pharmaceutical and delivery systems", description: "Lipid carriers for advanced drug and nutraceutical delivery" }
        ]
      }
    },
    vi: {
      hero: {
        badge: "Hoạt Chất Lipid Biển",
        title: "Nền Tảng Lipid",
        description: "Nền tảng Lipid tập trung vào việc chiết xuất, tinh chế và chức năng hoá các phần lipid có nguồn gốc từ phụ phẩm tôm. Các lipid này bao gồm phospholipid, axit béo omega, sterol và các hợp chất lipid hoạt tính sinh học khác có giá trị dinh dưỡng, chức năng và sinh hóa cao. So với các dạng protein và polysaccharide, phần lipid có mật độ giá trị và hoạt tính sinh học cao, cho phép ứng dụng trong dinh dưỡng, sức khỏe, mỹ phẩm và hệ thống phân phối tiên tiến."
      },
      extraction: {
        title: "Công Nghệ",
        description: "Nền tảng của chúng tôi cho phép chiết xuất, phân đoạn và ổn định chính xác các hoạt chất lipid giá trị cao từ sinh khối tôm.",
        features: [
          "Chiết xuất và phân đoạn lipid",
          "Thu hồi lipid bằng enzyme và dung môi",
          "Tinh chế phospholipid và axit béo omega",
          "Ổn định lipid và kiểm soát oxy hóa",
          "Thiết kế vi bao và hệ thống phân phối",
          "Công thức lipid chức năng"
        ]
      },
      products: {
        title: "Sản phẩm",
        groups: [
          {
            name: "Sức khỏe Thủy sản & Động vật",
            count: 16,
            iconPath: "/assets/icons/platform/animal.png",
            items: [
              { title: "Thành phần dầu tôm cho thức ăn" },
              { title: "Phụ gia thủy sản giàu Phospholipid" },
              { title: "Bổ sung năng lượng lipid biển" },
              { title: "Dinh dưỡng lipid sinh sản đàn bố mẹ" },
              { title: "Lipid cô đặc dinh dưỡng ấu trùng" },
              { title: "Hỗn hợp lipid tăng khả năng chống chịu" },
              { title: "Hệ thống lipid dẫn dụ thức ăn" },
              { title: "Bổ sung lipid thủy sản giàu Omega" },
              { title: "Chất tăng cường tiêu hóa lipid biển" },
              { title: "Nhũ tương lipid thủy sản chức năng" },
              { title: "Phụ gia thức ăn lipid biển" },
              { title: "Lipid năng lượng cô đặc cho gia cầm" },
              { title: "Bổ sung lipid hiệu suất sinh sản" },
              { title: "Thành phần lipid hỗ trợ miễn dịch" },
              { title: "Thành phần làm giàu lipid chất lượng trứng" },
              { title: "Hỗn hợp lipid hiệu suất tăng trưởng" }
            ]
          },
          {
            name: "Dinh dưỡng Con người & Thực phẩm chức năng",
            count: 9,
            iconPath: "/assets/icons/platform/nutrition.png",
            items: [
              { title: "Thành phần dược liệu dầu tôm" },
              { title: "Phospholipid biển cô đặc" },
              { title: "Thành phần lipid biển giàu Omega-3" },
              { title: "Bổ sung lipid sức khỏe não bộ" },
              { title: "Dầu biển hỗ trợ tim mạch" },
              { title: "Công thức lipid cho lão hóa khỏe mạnh" },
              { title: "Hệ thống phân phối chống oxy hóa nền lipid" },
              { title: "Dầu dược liệu dạng nang mềm" },
              { title: "Hệ thống dinh dưỡng vi bao lipid" }
            ]
          },
          {
            name: "Mỹ phẩm & Chăm sóc cá nhân",
            count: 6,
            iconPath: "/assets/icons/platform/packaging.png",
            items: [
              { title: "Hoạt chất mỹ phẩm lipid biển" },
              { title: "Lipid phục hồi hàng rào bảo vệ da" },
              { title: "Phức hợp lipid dưỡng ẩm" },
              { title: "Hoạt chất dầu biển chống lão hóa" },
              { title: "Hệ thống phân phối qua da nền lipid" },
              { title: "Dầu biển nuôi dưỡng tóc và da đầu" }
            ]
          },
          {
            name: "Sức khỏe Thú cưng",
            count: 6,
            iconPath: "/assets/icons/platform/pets.png",
            items: [
              { title: "Thành phần lipid biển cho thức ăn thú cưng" },
              { title: "Bổ sung lipid sức khỏe da và lông" },
              { title: "Lipid biển hỗ trợ nhận thức" },
              { title: "Bổ sung lipid hỗ trợ xương khớp" },
              { title: "Hệ thống lipid tăng độ ngon thức ăn thú cưng" },
              { title: "Bổ sung lipid chức năng cho thú cưng già" }
            ]
          },
          {
            name: "Thực phẩm & Bao bì",
            count: 5,
            iconPath: "/assets/icons/platform/food.png",
            items: [
              { title: "Chất mang hương vị lipid biển" },
              { title: "Hỗn hợp dầu chức năng" },
              { title: "Chất mang dưỡng chất nền lipid" },
              { title: "Thành phần lipid biển dạng nhũ tương" },
              { title: "Hệ thống dầu dinh dưỡng tăng cường" }
            ]
          },
          {
            name: "Dược phẩm & Hệ thống phân phối",
            count: 5,
            iconPath: "/assets/icons/platform/pharmaceuticals.png",
            items: [
              { title: "Hệ thống lipid biển liposome" },
              { title: "Hệ thống phân phối nhũ tương nano" },
              { title: "Chất mang phân phối thuốc nền lipid" },
              { title: "Chất mang lipid tăng sinh khả dụng" },
              { title: "Hệ thống dầu biển vi bao" }
            ]
          },
          {
            name: "Vật liệu & Công nghiệp",
            count: 4,
            iconPath: "/assets/icons/platform/materials.png",
            items: [
              { title: "Chất nhũ hóa lipid biển" },
              { title: "Tiền chất chất hoạt động bề mặt sinh học" },
              { title: "Phân đoạn dầu biển đặc chủng" },
              { title: "Chiết xuất lipid cho công thức chức năng" }
            ]
          }
        ]
      },
      industries: {
        title: "Ngành Hàng",
        items: [
          { title: "Nuôi trồng thủy sản và dinh dưỡng động vật", description: "Thức ăn lipid cho tăng trưởng và sức khỏe tối ưu" },
          { title: "Dinh dưỡng con người và thực phẩm chức năng", description: "Thực phẩm bổ sung omega và thành phần lipid chức năng" },
          { title: "Mỹ phẩm và chăm sóc cá nhân", description: "Hoạt chất lipid bảo vệ da và chống lão hóa" },
          { title: "Thực phẩm và đồ uống chức năng", description: "Làm giàu lipid hoạt tính sinh học cho sản phẩm tiêu dùng" },
          { title: "Dược phẩm và hệ thống phân phối", description: "Hệ mang lipid cho phân phối thuốc và thực phẩm chức năng tiên tiến" }
        ]
      }
    }
  },
  "cross-platform": {
    id: "cross-platform",
    images: {
      hero: "/assets/platforms/chitosan-hero.png",
      lab: "/products/cross-platform.png"
    },
    icons: {
      products: [Leaf, ShieldAlert, Package, Droplets, Activity, Wheat, Utensils, FlaskConical, Heart, Atom],
      industries: [Wheat, Utensils, FlaskConical, Activity, Atom]
    },
    en: {
      hero: {
        badge: "Integrated Technology Solutions",
        title: "Cross-Platform",
        description: "Our Cross-Platform approach combines multiple technology streams—Chitin, Protein, Minerals, Carbon, Astaxanthin, and Lipids—to create complex, high-performance solutions. By integrating these distinct material platforms, we unlock synergistic effects that address multi-dimensional challenges in agriculture, healthcare, and advanced industry."
      },
      extraction: {
        title: "Technology Synergy",
        description: "Combining multiple extraction and modification streams to create hybrid materials with enhanced functionalities.",
        features: [
          "Multi-platform material integration",
          "Functional synergy optimization",
          "Hybrid biopolymer composites",
          "Bioactive-material co-delivery systems"
        ]
      },
      products: {
        title: "Products",
        items: [
          { title: "FUNCTIONAL SHRIMP FEED", industry: "Aquaculture Health", platforms: ["peptides", "minerals", "astaxanthin"] },
          { title: "BIOMEDICAL COMPOSITE SCAFFOLDS", industry: "Biomedical & Healthcare", platforms: ["chitosan", "minerals"] },
          { title: "ANTIOXIDANT NUTRICOSMETICS", industry: "Human Nutrition & Nutraceuticals", platforms: ["peptides", "astaxanthin"] },
          { title: "ADVANCED BIODEGRADABLE PACKAGING", industry: "Food & Packaging", platforms: ["chitosan", "minerals", "astaxanthin"] },
          { title: "WATER TREATMENT COMPOSITE MEDIA", industry: "Water & Environmental", platforms: ["chitosan", "minerals", "carbon"] },
          { title: "SOIL AND PLANT HEALTH SYSTEMS", industry: "Agriculture", platforms: ["peptides", "minerals", "chitosan"] },
          { title: "SMART BIOACTIVE DELIVERY SYSTEMS", industry: "Biomedical & Healthcare", platforms: ["chitosan", "peptides", "astaxanthin"] },
          { title: "ASTAXANTHIN LIPID SOFTGEL SYSTEMS", industry: "Pet Health", platforms: ["astaxanthin", "lipid"] },
          { title: "MARINE NUTRICOSMETICS COMPLEXES", industry: "Human Nutrition & Nutraceuticals", platforms: ["peptides", "lipid", "astaxanthin"] },
          { title: "ASTAXANTHIN & PEPTIDES IN KOI FISH", industry: "Aquaculture Health", platforms: ["peptides", "astaxanthin"] },
        ]
      },
      industries: {
        title: "Industries",
        items: [
          { title: "Multi-sector Applications", description: "Solutions spanning across all major industries" }
        ]
      }
    },
    vi: {
      hero: {
        badge: "Giải Pháp Công Nghệ Tích Hợp",
        title: "Sức Mạnh Liên Nền Tảng",
        description: "Tiếp cận Liên nền tảng của chúng tôi kết hợp nhiều dòng công nghệ — Chitin, Protein, Khoáng chất, Carbon, Astaxanthin và Lipid — để tạo ra các giải pháp phức hợp, hiệu suất cao. Bằng cách tích hợp các nền tảng vật liệu riêng biệt này, chúng tôi mở khóa các hiệu ứng hiệp đồng nhằm giải quyết các thách thức đa chiều trong nông nghiệp, y tế và công nghiệp tiên tiến."
      },
      extraction: {
        title: "Hiệp Đồng Công Nghệ",
        description: "Kết hợp nhiều dòng chiết xuất và biến tính để tạo ra các vật liệu lai với chức năng được tăng cường.",
        features: [
          "Tích hợp vật liệu đa nền tảng",
          "Tối ưu hóa hiệp đồng chức năng",
          "Composite biopolymer lai",
          "Hệ thống đồng dẫn truyền vật liệu hoạt tính"
        ]
      },
      products: {
        title: "Sản phẩm",
        items: [
          { title: "THỨC ĂN TÔM CHỨC NĂNG", industry: "Aquaculture Health", platforms: ["peptides", "minerals", "astaxanthin"] },
          { title: "GIÁ THỂ COMPOSITE Y SINH", industry: "Biomedical & Healthcare", platforms: ["chitosan", "minerals"] },
          { title: "DƯỢC MỸ PHẨM CHỐNG OXY HÓA", industry: "Human Nutrition & Nutraceuticals", platforms: ["peptides", "astaxanthin"] },
          { title: "BAO BÌ SINH HỌC TIÊN TIẾN", industry: "Food & Packaging", platforms: ["chitosan", "minerals", "astaxanthin"] },
          { title: "VẬT LIỆU COMPOSITE XỬ LÝ NƯỚC", industry: "Water & Environmental", platforms: ["chitosan", "minerals", "carbon"] },
          { title: "HỆ THỐNG SỨC KHỎE ĐẤT VÀ CÂY TRỒNG", industry: "Agriculture", platforms: ["peptides", "minerals", "chitosan"] },
          { title: "HỆ THỐNG DẪN TRUYỀN HOẠT CHẤT THÔNG MINH", industry: "Biomedical & Healthcare", platforms: ["chitosan", "peptides", "astaxanthin"] },
          { title: "HỆ VIÊN NANG MỀM ASTAXANTHIN LIPID", industry: "Pet Health", platforms: ["astaxanthin", "lipid"] },
          { title: "PHỨC HỢP DƯỢC MỸ PHẨM BIỂN", industry: "Human Nutrition & Nutraceuticals", platforms: ["peptides", "lipid", "astaxanthin"] },
          { title: "ASTAXANTHIN & PEPTIDES CHO CÁ KOI", industry: "Aquaculture Health", platforms: ["peptides", "astaxanthin"] },
        ]
      },
      industries: {
        title: "Ngành Hàng",
        items: [
          { title: "Ứng dụng Đa ngành", description: "Các giải pháp trải dài trên tất cả các ngành công nghiệp chính" }
        ]
      }
    }
  }
};

