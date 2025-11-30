export default function StickyMobileCTA({ openModal }) {
  return (
    <div className="sm:hidden fixed left-0 right-0 bottom-4 z-50 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white p-3 rounded-2xl shadow-lg flex items-center justify-between">
          <div>
            <div className="text-sm font-semibold">اشترِ شجرة أورق الآن</div>
            <div className="text-xs text-slate-500">
              شحن مجاني • ضمان 12 شهر
            </div>
          </div>
          <button
            onClick={openModal}
            className="px-4 py-2 bg-green-700 text-white rounded-lg"
          >
            اشترِ الآن
          </button>
        </div>
      </div>
    </div>
  );
}
