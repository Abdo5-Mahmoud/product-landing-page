import { VisualColProps } from "../types/propTypes";
import Gallery from "./Gallery";
import Thumbnails from "./Thumbnails";

export default function VisualColumn({
  product,
  heroIndex,
  setHeroIndex,
  modelViewerLoaded,
}: VisualColProps) {
  return (
    <section className="space-y-4">
      <div className="relative rounded-xl overflow-hidden bg-white shadow-lg">
        <div className="w-full bg-slate-100 flex items-center justify-center">
          {product.modelUrl && modelViewerLoaded ? (
            // <model-viewer
            //   src={product.modelUrl}
            //   alt={product.name}
            //   auto-rotate
            //   camera-controls
            //   interaction-prompt="auto"
            //   poster={product.images[0]}
            //   style={{
            //     width: "100%",
            //     height: "520px",
            //     background: "transparent",
            //   }}
            // />
            ""
          ) : (
            <img
              src={product.images[heroIndex]}
              alt={product.name}
              className="w-full h-[520px] object-contain"
              fetchPriority="high"
              height={650}
            />
          )}
        </div>

        <Thumbnails
          images={product.images}
          heroIndex={heroIndex}
          setHeroIndex={setHeroIndex}
        />
      </div>

      <Gallery images={product.images} />
    </section>
  );
}
