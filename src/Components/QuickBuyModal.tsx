import { useEffect, useState } from "react";
import { QuickBuyModalProps } from "../types/propTypes";

export default function QuickBuyModal({
  product,
  isOpen,
  onClose,
  onConfirm,
  onDeliver,
}: QuickBuyModalProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    if (isOpen) {
      setName("");
      setPhone("");
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black/40" onClick={onClose}></div>
      <div className="relative bg-white rounded-xl shadow-xl max-w-md w-full p-6 z-10">
        <button
          onClick={onClose}
          className="absolute top-3 left-3 text-slate-600"
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
          className="w-full border rounded-md p-2 mb-3"
          placeholder="اسمك"
        />

        <label className="block text-sm text-slate-700">الهاتف</label>
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full border rounded-md p-2 mb-3"
          placeholder="010xxxxxxx"
        />

        <div className="flex gap-3 items-center">
          <button
            onClick={() => onConfirm({ name, phone })}
            className="flex-1 px-4 py-2 bg-green-700 text-white rounded-lg"
          >
            تأكيد وادفع
          </button>
          <button
            onClick={() => onDeliver({ name, phone })}
            className="flex-1 px-4 py-2 border rounded-lg"
          >
            الدفع عند الاستلام
          </button>
        </div>
      </div>
    </div>
  );
}
