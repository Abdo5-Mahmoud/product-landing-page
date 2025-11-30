import Joi from "joi";
import { useState } from "react";
import { Errors, QuickBuyModalProps } from "../types/propTypes";

export default function QuickBuyModal({
  product,
  isOpen,
  onClose,
  showToast,
}: QuickBuyModalProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);

  const schema = Joi.object({
    name: Joi.string()
      .pattern(/^[\p{L}\s]{2,}$/u)
      .required()
      .messages({
        "string.empty": "الاسم مطلوب",
        "string.pattern.base": "الاسم يجب أن يحتوي حروف ومسافة على الأقل",
      }),
    phone: Joi.string()
      .pattern(/^01[0125][0-9]{8}$/)
      .required()
      .messages({
        "string.empty": "رقم الهاتف مطلوب",
        "string.pattern.base": "رقم الهاتف غير صحيح. مثال: 01012345678",
      }),
  });

  const validateField = (field: "name" | "phone", value: string) => {
    try {
      const sub = schema.extract(field);
      const { error } = sub.validate(value);
      setErrors((prev) => ({
        ...prev,
        [field]: error ? error.message : undefined,
      }));
    } catch {
      // fallback: validate whole and extract
      const { error } = schema.validate({ name, phone }, { abortEarly: false });
      const newErrors: Errors = {};
      if (error) {
        for (const d of error.details) {
          newErrors[d.path[0] as "name" | "phone"] = d.message;
        }
      }
      setErrors(newErrors);
    }
  };

  // validate whole form
  const validateForm = (): boolean => {
    const { error } = schema.validate({ name, phone }, { abortEarly: false });
    if (!error) {
      setErrors({});
      return true;
    }
    const newErrors: Errors = {};
    for (const d of error.details) {
      newErrors[d.path[0] as "name" | "phone"] = d.message;
    }
    setErrors(newErrors);
    return false;
  };

  const handleConfirmAndPay = () => {
    if (submitting) return;
    if (!validateForm()) return;
    setSubmitting(true);

    // هنا مكان استدعاء الباك اند لإنشاء طلب/تحويل للدفع
    // مؤقتاً نعرض النوتيفيكيشن وبعدها نغلق المودال
    showToast(`شكراً يا ${name.trim()}! جاري توجيهك لصفحة الدفع...`);
    // simulated delay
    setTimeout(() => {
      setSubmitting(false);
      onClose();
    }, 900);
  };

  const handleCod = () => {
    if (!validateForm()) return;
    // الدفع عند الاستلام
    showToast(
      `أهلاً ${name.trim()}! تم اختيار الدفع عند الاستلام. سنتواصل على ${phone.trim()}`
    );
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black/40" onClick={onClose}></div>
      <div className="relative bg-white rounded-xl shadow-xl max-w-md w-full p-6 z-10">
        <button
          onClick={onClose}
          className="absolute top-3 left-3 text-slate-600"
          aria-label="إغلاق"
        >
          ✕
        </button>
        <h3 className="text-lg font-bold mb-2">تأكيد الطلب</h3>
        <p className="text-sm text-slate-600 mb-4">
          {product.name} • السعر{" "}
          <strong>
            {product.price.toLocaleString()} {product.currency}
          </strong>
        </p>

        <label className="block text-sm text-slate-700">الاسم</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          onBlur={() => validateField("name", name)}
          className={`w-full border rounded-md p-2 mb-1 ${
            errors.name ? "border-red-500" : ""
          }`}
          placeholder="اسمك"
          aria-describedby={errors.name ? "name-error" : undefined}
        />
        {errors.name && (
          <p id="name-error" className="text-red-500 text-xs mb-3">
            {errors.name}
          </p>
        )}

        {/* phone */}
        <label className="block text-sm text-slate-700">الهاتف</label>
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          onBlur={() => validateField("phone", phone)}
          className={`w-full border rounded-md p-2 mb-1 ${
            errors.phone ? "border-red-500" : ""
          }`}
          placeholder="01012345678"
          aria-describedby={errors.phone ? "phone-error" : undefined}
        />
        {errors.phone && (
          <p id="phone-error" className="text-red-500 text-xs mb-3">
            {errors.phone}
          </p>
        )}

        <div className="flex gap-3 items-center">
          <button
            onClick={handleConfirmAndPay}
            className="flex-1 px-4 py-2 bg-green-700 text-white rounded-lg"
          >
            {submitting ? "جارٍ التحويل..." : "تأكيد وادفع"}
          </button>
          <button
            onClick={handleCod}
            disabled={submitting}
            className="flex-1 px-4 py-2 border rounded-lg"
          >
            الدفع عند الاستلام
          </button>
        </div>
      </div>
    </div>
  );
}
