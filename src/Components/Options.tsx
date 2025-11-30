import { OptionsProps } from "../types/propTypes";

export default function Options({
  selectedColor,
  setSelectedColor,
}: OptionsProps) {
  return (
    <div className="space-y-3 mb-4">
      <label className="block text-sm text-slate-700">اللون</label>
      <div className="flex gap-2">
        <button
          onClick={() => setSelectedColor("green")}
          className={`px-3 py-2 border rounded-md ${
            selectedColor === "green"
              ? "ring-2 ring-offset-2 ring-green-400"
              : ""
          }`}
        >
          أخضر داكن
        </button>
        <button
          onClick={() => setSelectedColor("light")}
          className={`px-3 py-2 border rounded-md ${
            selectedColor === "light"
              ? "ring-2 ring-offset-2 ring-green-400"
              : ""
          }`}
        >
          أخضر فاتح
        </button>
        <button
          onClick={() => setSelectedColor("mixed")}
          className={`px-3 py-2 border rounded-md ${
            selectedColor === "mixed"
              ? "ring-2 ring-offset-2 ring-green-400"
              : ""
          }`}
        >
          مُختلط
        </button>
      </div>
    </div>
  );
}
