import { Brand, Product } from "../types/product";
import thubnail1 from "../assets/thumbnail1.jpg";
import thubnail2 from "../assets/thumbnail2.jpg";
import thubnail3 from "../assets/thumbnail3.jpg";
import thubnail4 from "../assets/thumbnail4.jpg";
import logo from "../assets/logo.jpg";
export const brandData: Brand = {
  brandName: "ArtiFlora",
  brandLogo: {
    img: logo,
  },
  tagline: "decoration site",
};

export const productData: Product = {
  name: "بوكيه ورد أورق - تصميم فاخر",
  short:
    "باقة ورد صناعية عالية الجودة بألوان متعددة ولمسة واقعية تناسب جميع المناسبات.",
  price: 650,
  currency: "ج.م",

  images: [thubnail1, thubnail2, thubnail3, thubnail4],
  modelUrl: null,
  sku: "FLOWER-ORQ-2025",
  skuVisible: true,
  badges: ["شحن سريع", "ضمان 6 شهور"],
  benefits: [
    { title: "ألوان متعددة", subtitle: "أحمر • وردي • أبيض • أصفر" },
    { title: "خامة ممتازة", subtitle: "تفاصيل دقيقة ومظهر واقعي" },
  ],
  shipping: "توصيل خلال 1-3 أيام",
  returns: "إرجاع خلال 14 يومًا مع استرداد كامل عند عدم الرضا",
  colors: ["أحمر", "وردي", "أبيض", "أصفر"],
  specs: [
    { key: "الارتفاع", value: "40 سم" },
    { key: "الوزن", value: "0.6 كجم" },
    { key: "الخامة", value: "قماش بوليستر مع قاعدة معدنية" },
  ],
  faqs: [
    { q: "هل يمكن تنظيفها بسهولة؟", a: "نعم — يُنصح بمسحها بقطعة مبللة بلطف." },
    {
      q: "هل الألوان ثابتة؟",
      a: "نعم، تم اختبارها لتقاوم بهتان الألوان عند التعرض العادي.",
    },
  ],
};
