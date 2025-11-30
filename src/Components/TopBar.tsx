import { brandData } from "../data/productData";
import { TopBarProps } from "../types/propTypes";

export default function TopBar({ shipping, returns }: TopBarProps) {
  const { brandName, brandLogo, tagline } = brandData;

  return (
    <header className="max-w-6xl mx-auto p-4 flex items-center justify-between ">
      <div className="flex items-center gap-3">
        {/* brand logo */}
        {"img" in brandLogo ? (
          <img
            className="w-10 h-10 rounded-md bg-green-600 flex items-center justify-center text-white font-bold object-cover rounded-xl"
            src={brandLogo.img}
            aria-label="logo image for the brand"
            alt="logo image for the brand"
          />
        ) : (
          <div
            className="w-10 h-10 rounded-md bg-green-600 flex items-center justify-center text-white font-bold object-cover rounded-xl"
            aria-label="logo  for the brand"
          >
            {brandLogo.text}
          </div>
        )}
        {/* brand name */}
        <div>
          {brandName && (
            <a href="#" className="text-lg font-semibold">
              {brandName}
            </a>
          )}
          {/* tag line */}
          {tagline && <div className="text-xs text-slate-500">{tagline}</div>}
        </div>
      </div>
      <div className="hidden sm:flex gap-4 items-center">
        {shipping && <div className="text-sm text-slate-600">{shipping}</div>}
        {returns && (
          <div className="text-sm text-slate-600">{returns}</div>
        )}{" "}
      </div>
    </header>
  );
}
