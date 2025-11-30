import { ThumbnailsProps } from "../types/propTypes";

export default function Thumbnails({
  images = [],
  heroIndex,
  setHeroIndex,
}: ThumbnailsProps) {
  return (
    <div className="p-3 flex gap-3 overflow-auto">
      {images.map((src, i) => (
        <button
          key={i}
          onClick={() => setHeroIndex(i)}
          className={`w-20 h-20 rounded-md overflow-hidden border ${
            i === heroIndex
              ? "ring-2 ring-offset-2 ring-green-400"
              : "opacity-80"
          }`}
          aria-label={`عرض الصورة ${i + 1}`}
        >
          <img
            src={src}
            alt={`thumb-${i}`}
            className="w-full h-full object-cover"
            loading="lazy"
            width={200}
            height={200}
          />
        </button>
      ))}

      <div className="ml-auto text-xs text-slate-500 flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M7 8h10M7 12h6m2 8H5a2 2 0 01-2-2V6a2 2 0 012-2h7"
          />
        </svg>
        صور حقيقية من العملاء
      </div>
    </div>
  );
}
