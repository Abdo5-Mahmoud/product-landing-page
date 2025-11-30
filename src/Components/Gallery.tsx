import { GalleryProps } from "../types/propTypes";

export default function Gallery({ images = [] }: GalleryProps) {
  return (
    <div className="grid grid-cols-3 gap-2">
      {images.slice(1, 4).map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`usage-${i}`}
          className="w-full h-28 object-cover rounded-md shadow-sm"
        />
      ))}
    </div>
  );
}
