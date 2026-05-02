import { useMemo, useState } from "react";
import {
  FaPinterestP,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const BASE = import.meta.env.BASE_URL;

const products = [
  {
    name: "Kaman Ceviz",
    code: "VT-810",
    category: "melamin",
    image: BASE + "images/products/kaman-ceviz-vt-810.jpg",
    app: BASE + "images/applications/kaman-ceviz-vt-810-app.jpg",
    desc: {
      ar: "لون خشبي دافئ يمنح المطابخ والخزائن إحساساً طبيعياً وفاخراً.",
      tr: "Mutfak ve dolaplara sıcak, doğal ve şık bir ahşap görünümü kazandırır.",
    },
  },
  {
    name: "Atlantik Cam",
    code: "VT-657",
    category: "melamin",
    image: BASE + "images/products/atlantik-cam-vt-657.jpg",
    app: BASE + "images/applications/atlantik-cam-vt-657-app.jpg",
    desc: {
      ar: "نقشة خشب طبيعية مناسبة للأثاث العصري والمساحات العملية.",
      tr: "Modern mobilyalar ve kullanışlı yaşam alanları için doğal ahşap dokusu.",
    },
  },
  {
    name: "Atlantis",
    code: "VT-293",
    category: "melamin",
    image: BASE + "images/products/atlantis-vt-293.jpg",
    app: BASE + "images/applications/atlantis-vt-293-app.jpg",
    desc: {
      ar: "خامة هادئة بلون خشبي فاتح تناسب غرف النوم والخزائن والديكور.",
      tr: "Yatak odası, dolap ve dekoratif alanlar için sakin ve açık ahşap yüzey.",
    },
  },
  {
    name: "Vario Vizon",
    code: "VT-265",
    category: "highGloss",
    image: BASE + "images/products/vario-vizon-vt-265.jpg",
    app: BASE + "images/applications/vario-vizon-vt-265-app.jpg",
    desc: {
      ar: "لون هادئ وفخم يعطي المساحات مظهراً ناعماً وحديثاً.",
      tr: "Mekanlara yumuşak, modern ve zarif bir görünüm kazandıran özel ton.",
    },
  },
  {
    name: "Sedef Krem",
    code: "VT-568",
    category: "highGloss",
    image: BASE + "images/products/sedef-krem-vt-568.jpg",
    app: BASE + "images/applications/sedef-krem-vt-568-app.jpg",
    desc: {
      ar: "درجة كريمية أنيقة تضيف إضاءة ونعومة للمطابخ والخزائن.",
      tr: "Mutfak ve dolaplara aydınlık, zarif ve yumuşak bir krem görünüm verir.",
    },
  },
  {
    name: "Silves",
    code: "YT-Z39",
    category: "lakPanel",
    image: BASE + "images/products/silves-yt-z39.jpg",
    app: BASE + "images/applications/silves-yt-z39-app.jpg",
    desc: {
      ar: "ملمس حجري فاخر مناسب للجدران الديكورية والتصاميم المميزة.",
      tr: "Dekoratif duvarlar ve özel tasarımlar için lüks taş dokusu.",
    },
  },
  {
    name: "Metalik Gri",
    code: "VT-344",
    category: "lakPanel",
    image: BASE + "images/products/metalik-gri-vt-344.jpg",
    app: BASE + "images/applications/metalik-gri-vt-344-app.jpg",
    desc: {
      ar: "رمادي معدني عصري يناسب المشاريع الحديثة والألوان الهادئة.",
      tr: "Modern projeler ve sade renk paletleri için çağdaş metalik gri.",
    },
  },
  {
    name: "Metalik Antrasit",
    code: "YT-36C",
    category: "lakPanel",
    image: BASE + "images/products/metalik-antrasit-yt-36c.jpg",
    app: BASE + "images/applications/metalik-antrasit-yt-36c-app.jpg",
    desc: {
      ar: "أنثراسيت فاخر يعطي التصميم قوة وأناقة ولمسة عصرية.",
      tr: "Tasarıma güçlü, modern ve prestijli bir antrasit görünüm kazandırır.",
    },
  },
];

const translations = {
  ar: {
    dir: "rtl",
    nav: ["الرئيسية", "الفئات", "الألوان", "التطبيقات", "تواصل"],
    badge: "الوكيل الحصري لشركة الواحة يلدز للأخشاب والملمين التركي",
    heroTop: "ألواح YILDIZ التركية",
    heroMain: "فخامة عملية للمطابخ، الخزائن، والأثاث العصري",
    heroSub:
      "ملمين، هاي غلوس، ولاك بانيل بقياسات عملية وجودة عالية وتشطيبات تليق بالمشاريع الحديثة.",
    ctaColors: "استعرض الألوان",
    ctaApps: "شاهد التطبيقات",
    ctaCatalog: "اطلب كتالوج",
    numbersTitle: "YILDIZ بالأرقام",
    numbers: [
      ["2,077,000", "متر مربع مساحة إنتاج قائمة"],
      ["14,000", "متر مكعب قدرة إنتاج يومية للألواح"],
      ["80+", "دولة تصدير حول العالم"],
      ["134", "عاماً من الخبرة"],
    ],
    stats: [
      ["29+", "سنة خبرة نجارة"],
      ["280×210", "ملمين / لاك بانيل"],
      ["280×122", "هاي غلوس"],
    ],
    services: ["قص + حرف ماكينة", "شريون وماكينة إيطالي", "ضغط عالي جداً"],
    categoryTitle: "فئات المنتجات",
    categorySub: "اختَر الخامة المناسبة حسب الاستخدام، اللمعة، المتانة، والمظهر النهائي.",
    colorsTitle: "الألوان والتطبيقات",
    colorsSub: "اختَر اللون وشاهد مباشرة كيف يظهر داخل المساحات.",
    appLabel: "معاينة تطبيق واقعي",
    colorLabel: "كود اللون",
    categoryLabel: "الفئة",
    productInfo: "وصف اللون",
    orderColor: "اطلب هذا اللون",
    finalTitle: "جاهز تختار خامتك؟",
    finalSub: "تواصل معنا للكتالوج، الأسعار، القص، الحرف، وتفصيل المشاريع.",
    whatsapp: "تواصل واتساب",
    socialTitle: "السوشال ميديا",
    categories: {
      all: ["الكل", "كل الألوان"],
      melamin: ["ملمين", "280×210", "خامة عملية بضغط عالي مناسبة للمطابخ، الخزائن، الأبواب، وغرف النوم."],
      highGloss: ["هاي غلوس", "280×122", "سطح مرآة فاخر ولمعة عصرية ترفع قيمة أي مساحة."],
      lakPanel: ["لاك بانيل", "280×210", "قلب MDF متين، طبقات برايمر، حماية UV، مقاومة للخدش والرطوبة والحرارة."],
    },
  },
  tr: {
    dir: "ltr",
    nav: ["Ana Sayfa", "Kategoriler", "Renkler", "Uygulamalar", "İletişim"],
    badge: "Al-Waha, YILDIZ Türk ahşap ve melamin panellerinin özel bayisi",
    heroTop: "YILDIZ Türk Panelleri",
    heroMain: "Mutfak, dolap ve modern mobilyalar için premium yüzeyler",
    heroSub:
      "Melamin, high gloss ve lak panel seçenekleri; modern projeler için kaliteli ölçüler ve güçlü yüzeyler.",
    ctaColors: "Renkleri İncele",
    ctaApps: "Uygulamaları Gör",
    ctaCatalog: "Katalog İste",
    numbersTitle: "Rakamlarla YILDIZ",
    numbers: [
      ["2.077.000", "Metrekare alana kurulu üretim"],
      ["14.000", "Metreküp günlük levha üretim kapasitesi"],
      ["80+", "Fazla ülkeye ihracat"],
      ["134", "Yıllık geçmiş"],
    ],
    stats: [
      ["29+", "Yıllık deneyim"],
      ["280×210", "Melamin / Lak Panel"],
      ["280×122", "High Gloss"],
    ],
    services: ["Makine kesim + kenar bantlama", "İtalyan makine sistemi", "Çok yüksek pres kalitesi"],
    categoryTitle: "Ürün Kategorileri",
    categorySub: "Kullanıma, parlaklığa, dayanıklılığa ve son görünüme göre doğru yüzeyi seçin.",
    colorsTitle: "Renkler ve Uygulamalar",
    colorsSub: "Rengi seçin ve mekanda nasıl göründüğünü anında görün.",
    appLabel: "Gerçek Uygulama Önizlemesi",
    colorLabel: "Renk Kodu",
    categoryLabel: "Kategori",
    productInfo: "Renk Açıklaması",
    orderColor: "Bu Rengi İste",
    finalTitle: "Projeniz için doğru paneli seçmeye hazır mısınız?",
    finalSub: "Katalog, fiyat, kesim, kenar bantlama ve proje detayları için bize ulaşın.",
    whatsapp: "WhatsApp",
    socialTitle: "Sosyal Medya",
    categories: {
      all: ["Tümü", "Tüm renkler"],
      melamin: ["Melamin", "280×210", "Mutfak, dolap, kapı ve günlük kullanım için güçlü ve pratik yüzey."],
      highGloss: ["High Gloss", "280×122", "Ayna parlaklığında modern, lüks ve dikkat çekici yüzey."],
      lakPanel: ["Lak Panel", "280×210", "Sağlam MDF, primer katmanlar, UV koruma, nem, ısı ve çizilme dayanımı."],
    },
  },
};

const categoryKeys = ["all", "melamin", "highGloss", "lakPanel"];

function SocialIcon({ type }) {
  switch (type) {
    case "pinterest":
      return <FaPinterestP />;
    case "instagram":
      return <FaInstagram />;
    case "facebook":
      return <FaFacebookF />;
    case "linkedin":
      return <FaLinkedinIn />;
    case "youtube":
      return <FaYoutube />;
    case "twitter":
      return <BsTwitterX />;
    case "whatsapp":
      return <FaWhatsapp />;
    default:
      return <FaWhatsapp />;
  }
}

export default function App() {
  const [lang, setLang] = useState("ar");
  const [activeCategory, setActiveCategory] = useState("all");
  const [selected, setSelected] = useState(products[0]);

  const t = translations[lang];

  const filteredProducts = useMemo(() => {
    if (activeCategory === "all") return products;
    return products.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  function changeCategory(key) {
    setActiveCategory(key);
    const first = key === "all" ? products[0] : products.find((p) => p.category === key);
    if (first) setSelected(first);
  }

  return (
    <div className="site" dir={t.dir}>
      <header className="header">
        <a className="logo logo-image" href="#home">
          <img src={BASE + "images/applications/logos.png"} alt="YILDIZ Logo" />
        </a>

        <nav className="nav">
          <a href="#home">{t.nav[0]}</a>
          <a href="#categories">{t.nav[1]}</a>
          <a href="#colors">{t.nav[2]}</a>
          <a href="#colors">{t.nav[3]}</a>
          <a href="#contact">{t.nav[4]}</a>
        </nav>

        <button className="lang" onClick={() => setLang(lang === "ar" ? "tr" : "ar")}>
          {lang === "ar" ? "TR" : "AR"}
        </button>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-bg">
            <img src={selected.app} alt={selected.name} />
          </div>
          <div className="hero-overlay"></div>

          <div className="hero-content">
            <span className="badge">{t.badge}</span>

            <h1 className="hero-title">
              <span>{t.heroTop}</span>
              <strong>{t.heroMain}</strong>
            </h1>

            <p>{t.heroSub}</p>

            <div className="hero-actions">
              <a className="btn main" href="#colors">{t.ctaColors}</a>
              <a className="btn light" href="#colors">{t.ctaApps}</a>
              <a className="btn ghost" href="#contact">{t.ctaCatalog}</a>
            </div>
          </div>
        </section>

        <section className="brand-numbers">
          <div className="numbers-title">{t.numbersTitle}</div>
          <div className="numbers-grid">
            {t.numbers.map(([number, label]) => (
              <div key={label}>
                <strong>{number}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="stats">
          {t.stats.map(([number, label]) => (
            <div key={label}>
              <strong>{number}</strong>
              <span>{label}</span>
            </div>
          ))}
        </section>

        <section className="services">
          {t.services.map((item) => (
            <div key={item}>{item}</div>
          ))}
        </section>

        <section className="categories" id="categories">
          <div className="section-head">
            <span>YILDIZ ENTEGRE</span>
            <h2>{t.categoryTitle}</h2>
            <p>{t.categorySub}</p>
          </div>

          <div className="category-grid">
            {["melamin", "highGloss", "lakPanel"].map((key, index) => (
              <article
                key={key}
                className={`category-card ${activeCategory === key ? "active" : ""}`}
                onClick={() => changeCategory(key)}
              >
                <span className="number">0{index + 1}</span>
                <h3>{t.categories[key][0]}</h3>
                <p>{t.categories[key][2]}</p>
                <small>{t.categories[key][1]}</small>
              </article>
            ))}
          </div>
        </section>

        <section className="colors-combo" id="colors">
          <div className="section-head">
            <span>YILDIZ COLLECTION</span>
            <h2>{t.colorsTitle}</h2>
            <p>{t.colorsSub}</p>
          </div>

          <div className="combo-layout">
            <div className="combo-preview">
              <div className="preview-image">
                <img src={selected.app} alt={selected.name} />
              </div>

              <div className="preview-info">
                <span>{t.appLabel}</span>
                <h3>{selected.name}</h3>
                <p>{t.colorLabel}: {selected.code}</p>
                <p>{t.categoryLabel}: {t.categories[selected.category][0]}</p>

                <div className="product-desc">
                  <b>{t.productInfo}</b>
                  <small>{selected.desc[lang]}</small>
                </div>

                <a className="btn main" href="https://wa.me/0000000000" target="_blank">
                  {t.orderColor}
                </a>
              </div>
            </div>

            <div className="combo-products">
              <div className="filter-bar">
                {categoryKeys.map((key) => (
                  <button
                    key={key}
                    className={activeCategory === key ? "active" : ""}
                    onClick={() => changeCategory(key)}
                  >
                    <strong>{t.categories[key][0]}</strong>
                    <span>{t.categories[key][1]}</span>
                  </button>
                ))}
              </div>

              <div className="mini-grid">
                {filteredProducts.map((product) => (
                  <article
                    key={product.code}
                    className={`mini-card ${selected.code === product.code ? "active" : ""}`}
                    onClick={() => setSelected(product)}
                  >
                    <img src={product.image} alt={product.name} />
                    <div>
                      <h4>{product.name}</h4>
                      <p>{t.colorLabel}: {product.code}</p>
                      <small>{product.desc[lang]}</small>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="final-cta" id="contact">
          <div>
            <span>YILDIZ CONTACT</span>
            <h2>{t.finalTitle}</h2>
            <p>{t.finalSub}</p>
          </div>

          <div className="cta-box">
            <a className="btn main" href="https://wa.me/0000000000" target="_blank">
              <SocialIcon type="whatsapp" /> {t.whatsapp}
            </a>

            <div className="social-block">
              <h3>{t.socialTitle}</h3>
              <div className="social-row">
                <a href="#" target="_blank"><SocialIcon type="pinterest" /></a>
                <a href="#" target="_blank"><SocialIcon type="instagram" /></a>
                <a href="#" target="_blank"><SocialIcon type="twitter" /></a>
                <a href="#" target="_blank"><SocialIcon type="youtube" /></a>
                <a href="#" target="_blank"><SocialIcon type="facebook" /></a>
                <a href="#" target="_blank"><SocialIcon type="linkedin" /></a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div>
          <a className="footer-logo" href="#home">
            <img src={BASE + "images/applications/logos.png"} alt="YILDIZ Logo" />
          </a>
          <p>{t.heroSub}</p>
        </div>

        <div>
          <h4>{t.nav[1]}</h4>
          <a href="#categories">{t.categories.melamin[0]}</a>
          <a href="#categories">{t.categories.highGloss[0]}</a>
          <a href="#categories">{t.categories.lakPanel[0]}</a>
        </div>

        <div>
          <h4>{t.nav[4]}</h4>
          <a href="https://wa.me/0000000000" target="_blank">{t.whatsapp}</a>
          <a href="#">Instagram</a>
          <a href="#">Facebook</a>
          <a href="#">TikTok</a>
        </div>

        <div className="footer-bottom">© 2026 YILDIZ</div>
      </footer>

      <a className="float-whatsapp" href="https://wa.me/0000000000" target="_blank">
        <SocialIcon type="whatsapp" />
      </a>
    </div>
  );
}