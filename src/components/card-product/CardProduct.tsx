import { Link } from "wouter";
import type { Product } from "../../data/products";
import styles from "./CardProduct.module.css";

interface CardProductProps {
  product: Product;
}

const CardProduct = ({ product }: CardProductProps) => {
  return (
    <article
      className={`bg-slate-900/80 border border-slate-800 rounded-2xl overflow-hidden flex flex-col ${styles.cardGlow}`}
    >
      {/* Contenedor de Imagen con efecto zoom al hacer hover */}
      <div className="relative w-full h-48 overflow-hidden bg-slate-950">
        <img
          src={product.imgUrl}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* Cuerpo de la Tarjeta */}
      <div className="p-5 flex flex-col flex-1 justify-between gap-4">
        <div>
          {/* Tags / Etiquetas */}
          <div className="flex flex-wrap gap-1.5 mb-2">
            {product.tags.map((tag, index) => (
              <span
                key={index}
                className="text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-md bg-sky-500/10 text-sky-400 border border-sky-500/20"
              >
                {tag.name}
              </span>
            ))}
          </div>

          {/* Título */}
          <h2 className="text-lg font-bold text-slate-100 tracking-tight line-clamp-1">
            {product.name}
          </h2>

          {/* Descripción */}
          <p className="text-sm text-slate-400 mt-1 line-clamp-2 leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Botón / Enlace de Detalle con Wouter */}
        <div className="pt-2 border-t border-slate-800/60 flex items-center justify-between">
          <span className="text-xs text-slate-500">ID: #{product.id}</span>
          <Link
            href={`/products/${product.id}`}
            className="inline-flex items-center justify-center px-4 py-2 text-xs font-medium text-white bg-sky-500 hover:bg-sky-600 rounded-xl transition-all shadow-md shadow-sky-500/20 active:scale-95"
          >
            Ver detalle
          </Link>
        </div>
      </div>
    </article>
  );
};

export default CardProduct;
