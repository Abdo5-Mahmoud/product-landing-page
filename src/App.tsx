import { useEffect, useState } from "react";
import "./App.css";

import InfoColumn from "./Components/InfoColumn";
import QuickBuyModal from "./Components/QuickBuyModal";
import TopBar from "./Components/TopBar";
import VisualColumn from "./Components/VisualColumn";
import { productData } from "./data/productData";
import { BuyPayload } from "./types/propTypes";
import Toast from "./ui/Toast";

export default function App() {
  // state used by child components:

  // أي صورة في الجاليري
  const [heroIndex, setHeroIndex] = useState(0);

  // اللون المختار (لو هتستخدمه)
  const [selectedColor, setSelectedColor] = useState("green");

  // فتح/غلق المودال
  const [isModalOpen, setModalOpen] = useState(false);

  // تحميل سكربت model-viewer
  const [modelViewerLoaded, setModelViewerLoaded] = useState(false);

  // Load model-viewer script ONCE
  useEffect(() => {
    const existing = document.querySelector("script[data-model-viewer]");
    if (existing) {
      setModelViewerLoaded(true);
      return;
    }

    const s = document.createElement("script");
    s.type = "module";
    s.src = "https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js";
    s.setAttribute("data-model-viewer", "1");
    s.onload = () => setModelViewerLoaded(true);
    document.head.appendChild(s);
  }, []);

  function openModal() {
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
  }
  const [toast, setToast] = useState("");

  function confirmBuy({ name, phone }: BuyPayload) {
    setToast(`شكراً يا ${name}! هنكلمك على ${phone}`);
    closeModal();
    setTimeout(() => setToast(""), 2500); // auto-hide after 2.5 sec
    return;
  }
  function onDeliver({ name, phone }: BuyPayload) {
    setToast(
      `اهلا ${name} تم اختيار الدفع عند الاستلام. سيتم التواصل معك على رقم ${phone} لتأكيد الطلب `
    );
    closeModal();
    setTimeout(() => setToast(""), 2500); // auto-hide after 2.5 sec
    return;
  }

  return (
    <div dir="rtl" className="min-h-screen bg-slate-50 text-slate-900">
      <TopBar returns={productData.returns} shipping={productData.shipping} />

      <main className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 max-w-6xl mx-auto">
        <VisualColumn
          product={productData}
          heroIndex={heroIndex}
          setHeroIndex={setHeroIndex}
          modelViewerLoaded={modelViewerLoaded}
        />

        <InfoColumn
          product={productData}
          onBuy={() => openModal()}
          setSelectedColor={setSelectedColor}
          selectedColor={selectedColor}
        />
      </main>

      {/* <StickyMobileCTA openModal={openModal} /> */}

      <QuickBuyModal
        product={productData}
        isOpen={isModalOpen}
        onClose={closeModal}
        onConfirm={confirmBuy}
        onDeliver={onDeliver}
      />

      <Toast toast={toast} />
    </div>
  );
}
