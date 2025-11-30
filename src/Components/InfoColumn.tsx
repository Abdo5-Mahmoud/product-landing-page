import { InfoColProps } from "../types/propTypes";

export default function InfoColumn({
  product,
  setSelectedColor,
  selectedColor,
  onBuy,
}: InfoColProps) {
  return (
    <aside className="flex flex-col justify-between">
      <div>
        <h1 className="text-3xl font-extrabold mb-2">{product.name}</h1>
        <p className="text-slate-600 mb-4">{product.short}</p>

        {/* price + badges */}
        <div className="flex items-baseline gap-4 mb-4">
          <div className="text-3xl font-bold">
            {product.price} <span className="text-sm">{product.currency}</span>
          </div>
          {product.badges?.map((b, i) => (
            <div
              key={i}
              className="px-2 py-1 rounded-lg bg-white/40 border text-sm"
            >
              {b}
            </div>
          ))}
        </div>

        {/* benefits */}
        <ul className="space-y-2 mb-4">
          {product.benefits?.map((b, i) => (
            <li key={i} className="flex gap-3 items-start">
              <div className="text-green-600 mt-1">✓</div>
              <div>
                <div className="font-semibold">{b.title}</div>
                {b.subtitle && (
                  <div className="text-sm text-slate-600">{b.subtitle}</div>
                )}
              </div>
            </li>
          ))}
        </ul>

        {/* colors */}
        {product.colors && (
          <div className="mb-4">
            <h4 className="text-sm font-semibold mb-2">الألوان المتاحة</h4>
            <div className="flex gap-2">
              {product.colors.map((c, i) => {
                const isSelected = selectedColor === c;
                return (
                  <button
                    key={i}
                    onClick={() => setSelectedColor?.(c)}
                    aria-label="button for selecting the color of the broduct you want to buy"
                    className={
                      `px-3 py-2 rounded-md transition-transform duration-150 transform ` +
                      (isSelected
                        ? "bg-green-700 text-white shadow-lg scale-105 ring-2 ring-offset-2 ring-green-400"
                        : "bg-white border text-slate-700 hover:scale-105 hover:shadow-md")
                    }
                  >
                    {c}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* specs */}
        {product.specs && (
          <div className="mb-4">
            <h3 className="font-semibold mb-2">المواصفات الفنية</h3>
            <ul className="text-sm text-slate-600 list-disc list-inside">
              {product.specs.map((s, i) => (
                <li key={i}>
                  {s.key}: {s.value}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* returns */}
        {product.returns && (
          <div className="mt-4 text-sm text-slate-600">
            <strong>سياسة الاسترجاع: </strong>
            {product.returns}
          </div>
        )}

        {/* Buy buttons — ***THIS IS IMPORTANT*** */}
        <div className="flex gap-3 items-center mb-6 mt-6">
          <button
            onClick={() => onBuy()}
            className="px-6 py-3 bg-green-700 text-white rounded-lg shadow hover:scale-105 transition-transform"
          >
            اشترِ الآن
          </button>

          <button
            onClick={() => {
              const el = document.querySelector("details");
              if (el)
                el.scrollIntoView({ behavior: "smooth", block: "center" });
            }}
            className="px-4 py-2 border rounded-lg hover:bg-slate-100 transition"
          >
            المزيد من التفاصيل
          </button>
        </div>

        {/* FAQs */}
        {product.faqs && (
          <div className="mt-4 space-y-2">
            <h4 className="font-semibold">الأسئلة الشائعة</h4>
            {product.faqs.map((f, i) => (
              <details key={i} className="bg-white border rounded-lg p-3">
                <summary className="cursor-pointer">{f.q}</summary>
                <div className="mt-2 text-sm text-slate-600">{f.a}</div>
              </details>
            ))}
          </div>
        )}
      </div>

      <div className="mt-6 text-xs text-slate-500">
        {product.skuVisible && product.sku ? `رقم المنتج: ${product.sku}` : ""}
      </div>
    </aside>
  );
}
