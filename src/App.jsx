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

const products = [
  {
    name: "Hamilton",
    code: "YT-60A",
    category: "melamin",
    image: "/images/applications/hamilton-yt-60a-app.jpg",
    app: "/images/applications/hamilton-yt-60a-app.jpg",
    sourceUrl: "https://www.yildizentegre.com/en/products/melamine-faced-mdfpb/hamilton-yt-60a",
    desc: {
      ar: "درجة خشبية أنيقة بطابع عصري، مناسبة للمطابخ والخزائن والطاولات والديكور العملي.",
      tr: "Modern karakterli şık ahşap tonu; mutfak, dolap, masa ve dekoratif kullanım için uygundur.",
    },
  },
  {
    name: "Kaman Ceviz",
    code: "VT-810",
    category: "melamin",
    image: "/images/applications/kaman-ceviz-vt-810-app.jpg",
    app: "/images/applications/kaman-ceviz-vt-810-app.jpg",
    sourceUrl: "https://www.yildizentegre.com/urunler/mdflam-suntalam/kaman-ceviz-vt-810",
    desc: {
      ar: "لون جوز دافئ وفخم يعطي المطابخ والخزائن مظهر خشب طبيعي قوي وراقي.",
      tr: "Mutfak ve dolaplara doğal, güçlü ve prestijli ceviz görünümü kazandıran sıcak ton.",
    },
  },
  {
    name: "Atlantik Cam",
    code: "VT-657",
    category: "melamin",
    image: "/images/applications/atlantik-cam-vt-657-app.jpg",
    app: "/images/applications/atlantik-cam-vt-657-app.jpg",
    sourceUrl: "https://www.yildizentegre.com/urunler/mdflam-suntalam/atlantik-cam-vt-657",
    desc: {
      ar: "نقشة خشب طبيعية وعملية، مناسبة للأثاث العصري، المطابخ، الخزائن، وغرف النوم.",
      tr: "Modern mobilyalar, mutfaklar, dolaplar ve yatak odaları için doğal ve kullanışlı ahşap dokusu.",
    },
  },
  {
    name: "Atlantis",
    code: "VT-293",
    category: "melamin",
    image: "/images/applications/atlantis-vt-293-app.jpg",
    app: "/images/applications/atlantis-vt-293-app.jpg",
    sourceUrl: "https://www.yildizentegre.com/urunler/mdflam-suntalam/atlantis-vt-293",
    desc: {
      ar: "لون خشبي فاتح وهادئ يفتح المساحة ويعطي الخزائن وغرف النوم لمسة ناعمة.",
      tr: "Mekanı ferah gösteren, dolap ve yatak odalarına yumuşak bir görünüm veren açık ahşap tonu.",
    },
  },
  {
    name: "Vario Vizon",
    code: "VT-265",
    category: "highGloss",
    image: "/images/applications/vario-vizon-vt-265-app.jpg",
    app: "/images/applications/vario-vizon-vt-265-app.jpg",
    sourceUrl: "https://www.yildizentegre.com/urunler/mdflam-suntalam/vario-vizon-vt-265",
    desc: {
      ar: "لون فيزون هادئ بلمسة فخمة، مناسب للمطابخ الحديثة والخزائن ذات الطابع الراقي.",
      tr: "Modern mutfaklar ve prestijli dolap tasarımları için sakin, zarif ve lüks vizon tonu.",
    },
  },
  {
    name: "Sedef Krem",
    code: "VT-568",
    category: "highGloss",
    image: "/images/applications/sedef-krem-vt-568-app.jpg",
    app: "/images/applications/sedef-krem-vt-568-app.jpg",
    sourceUrl: "https://www.yildizentegre.com/urunler/mdflam-suntalam/sedef-krem-vt-568",
    desc: {
      ar: "كريمي لؤلؤي أنيق يضيف إضاءة ونعومة للمطابخ، الخزائن، والمكاتب.",
      tr: "Mutfak, dolap ve ofis alanlarına aydınlık ve zarafet katan inci krem tonu.",
    },
  },
  {
    name: "Silves",
    code: "YT-Z39",
    category: "lakPanel",
    image: "/images/applications/silves-yt-z39-app.jpg",
    app: "/images/applications/silves-yt-z39-app.jpg",
    sourceUrl: "https://www.yildizentegre.com/urunler/mdflam-suntalam/silves-yt-z39",
    desc: {
      ar: "ملمس حجري فاخر مناسب للجدران الديكورية، الطاولات، والتصاميم المميزة.",
      tr: "Dekoratif duvarlar, masalar ve özel tasarımlar için lüks taş dokulu yüzey.",
    },
  },
  {
    name: "Metalik Gri",
    code: "VT-344",
    category: "lakPanel",
    image: "/images/applications/metalik-gri-vt-344-app.jpg",
    app: "/images/applications/metalik-gri-vt-344-app.jpg",
    sourceUrl: "https://www.yildizentegre.com/urunler/mdflam-suntalam/metalik-gri-vt-344",
    desc: {
      ar: "رمادي معدني عصري يعطي المشاريع الحديثة مظهر قوي، هادئ، وفخم.",
      tr: "Modern projelere güçlü, sade ve prestijli bir görünüm kazandıran metalik gri.",
    },
  },
  {
    name: "Metalik Antrasit",
    code: "YT-36C",
    category: "lakPanel",
    image: "/images/applications/metalik-antrasit-yt-36c-app.jpg",
    app: "/images/applications/metalik-antrasit-yt-36c-app.jpg",
    sourceUrl: "https://www.yildizentegre.com/urunler/mdflam-suntalam/metalik-antrasit-yt-36c",
    desc: {
      ar: "أنثراسيت معدني فاخر يعطي المطابخ والخزائن قوة وأناقة ولمسة VIP.",
      tr: "Mutfak ve dolaplara güçlü, zarif ve VIP bir metalik antrasit görünüm kazandırır.",
    },
  },
];

const translations = {
  ar: {
    dir: "rtl",
    nav: ["الرئيسية", "الفئات", "الألوان", "التطبيقات", "تواصل"],
    badge: "الوكيل الحصري لشركة الواحة يلدز للأخشاب والملمين التركي",
    heroTop: "ألواح YILDIZ التركية",
    heroMain: "فخامة عملية للمطابخ، الخزائن، والطاولات العصرية",
    heroSub:
      "ملمين، هاي غلوس، ولاك بانيل بجودة تركية، ضغط عالي جداً، قص وحرف ماكينة، وخبرة نجارة 29 سنة.",
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
    colorsSub: "اختَر اللون وشاهد مباشرة كيف يظهر داخل مطبخ، خزائن، طاولة أو ديكور.",
    appLabel: "معاينة تطبيق واقعي",
    colorLabel: "Renk Kodu",
    categoryLabel: "الفئة",
    productInfo: "وصف اللون",
    source: "صفحة المنتج الرسمية",
    orderColor: "اطلب هذا اللون",
    finalTitle: "جاهز تختار خامتك؟",
    finalSub: "تواصل معنا للكتالوج، الأسعار، القص، الحرف، وتفصيل المشاريع.",
    whatsapp: "تواصل واتساب",
    socialTitle: "السوشال ميديا",
    categories: {
      all: ["الكل", "كل الألوان"],
      melamin: ["ملمين", "280×210", "ضغط عالي، عملي، مقاوم، مناسب للمطابخ، الخزائن، الأبواب، غرف النوم والطاولات."],
      highGloss: ["هاي غلوس", "280×122", "سطح مرآة فاخر، لمعان عصري، مثالي للمطابخ والخزائن والمكاتب الحديثة."],
      lakPanel: ["لاك بانيل", "280×210", "قلب MDF متين، طبقات ديكور وبرايمر، حماية UV، مقاومة للخدش والرطوبة والحرارة."],
    },
  },
  tr: {
    dir: "ltr",
    nav: ["Ana Sayfa", "Kategoriler", "Renkler", "Uygulamalar", "İletişim"],
    badge: "Al-Waha, YILDIZ Türk ahşap ve melamin panellerinin özel bayisi",
    heroTop: "YILDIZ Türk Panelleri",
    heroMain: "Mutfak, dolap, masa ve modern mobilyalar için premium yüzeyler",
    heroSub:
      "Melamin, high gloss ve lak panel seçenekleri; çok yüksek pres kalitesi, makine kesim, kenar bantlama ve 29 yıllık marangozluk deneyimi.",
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
      ["29+", "Yıllık marangozluk deneyimi"],
      ["280×210", "Melamin / Lak Panel"],
      ["280×122", "High Gloss"],
    ],
    services: ["Makine kesim + kenar bantlama", "İtalyan makine sistemi", "Çok yüksek pres kalitesi"],
    categoryTitle: "Ürün Kategorileri",
    categorySub: "Kullanıma, parlaklığa, dayanıklılığa ve son görünüme göre doğru yüzeyi seçin.",
    colorsTitle: "Renkler ve Uygulamalar",
    colorsSub: "Rengi seçin; mutfak, dolap, masa veya dekor içinde nasıl göründüğünü inceleyin.",
    appLabel: "Gerçek Uygulama Önizlemesi",
    colorLabel: "Renk Kodu",
    categoryLabel: "Kategori",
    productInfo: "Renk Açıklaması",
    source: "Resmi ürün sayfası",
    orderColor: "Bu Rengi İste",
    finalTitle: "Projeniz için doğru paneli seçmeye hazır mısınız?",
    finalSub: "Katalog, fiyat, kesim, kenar bantlama ve proje detayları için bize ulaşın.",
    whatsapp: "WhatsApp",
    socialTitle: "Sosyal Medya",
    categories: {
      all: ["Tümü", "Tüm renkler"],
      melamin: ["Melamin", "280×210", "Yüksek pres kalitesi; mutfak, dolap, kapı, yatak odası ve masa için pratik yüzey."],
      highGloss: ["High Gloss", "280×122", "Ayna parlaklığında modern ve lüks yüzey; mutfak, dolap ve ofisler için ideal."],
      lakPanel: ["Lak Panel", "280×210", "Sağlam MDF, dekor ve primer katmanlar, UV koruma, çizilme, nem ve ısı dayanımı."],
    },
  },
};

const categoryKeys = ["all", "melamin", "highGloss", "lakPanel"];

function SocialIcon({ type = "whatsapp" }) {
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
          <img src="/images/applications/logos.png" alt="YILDIZ Logo" />
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
            <img src={selected.app} alt={`${selected.name} ${selected.code}`} />
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
                <img src={selected.app} alt={`${selected.name} ${selected.code}`} />
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

                <div className="hero-actions">
                  <a className="btn main" href="https://wa.me/0000000000" target="_blank" rel="noreferrer">
                    {t.orderColor}
                  </a>

                  <a className="btn ghost" href={selected.sourceUrl} target="_blank" rel="noreferrer">
                    {t.source}
                  </a>
                </div>
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
                    <img src={product.image} alt={`${product.name} ${product.code}`} />
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
            <a className="btn main" href="https://wa.me/0000000000" target="_blank" rel="noreferrer">
              <SocialIcon /> {t.whatsapp}
            </a>

            <div className="social-block">
              <h3>{t.socialTitle}</h3>
              <div className="social-row">
                <a href="#" target="_blank" rel="noreferrer"><SocialIcon type="pinterest" /></a>
                <a href="#" target="_blank" rel="noreferrer"><SocialIcon type="instagram" /></a>
                <a href="#" target="_blank" rel="noreferrer"><SocialIcon type="twitter" /></a>
                <a href="#" target="_blank" rel="noreferrer"><SocialIcon type="youtube" /></a>
                <a href="#" target="_blank" rel="noreferrer"><SocialIcon type="facebook" /></a>
                <a href="#" target="_blank" rel="noreferrer"><SocialIcon type="linkedin" /></a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div>
          <a className="footer-logo" href="#home">
            <img src="/images/applications/logos.png" alt="YILDIZ Logo" />
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
          <a href="https://wa.me/0000000000" target="_blank" rel="noreferrer">{t.whatsapp}</a>
          <a href="#">Instagram</a>
          <a href="#">Facebook</a>
          <a href="#">TikTok</a>
        </div>

        <div className="footer-bottom">© 2026 YILDIZ Al-Waha</div>
      </footer>

      <a className="float-whatsapp" href="https://wa.me/0000000000" target="_blank" rel="noreferrer">
        <SocialIcon />
      </a>
    </div>
  );
}