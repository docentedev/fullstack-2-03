import { useParams, Link } from "wouter";
import { findProduct } from "./ProductDetail.utils";
import styles from "./ProductDetail.module.css";

const ProductDetail = () => {
  const params = useParams<{ id: string }>();
  const product = findProduct(params.id);

  // Estado: Producto no encontrado
  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] text-center px-4">
        <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl max-w-md w-full shadow-xl">
          <h2 className="text-2xl font-bold text-slate-100 mb-2">
            Producto no encontrado
          </h2>
          <p className="text-slate-400 text-sm mb-6">
            El recurso que buscas no existe o fue removido del catálogo.
          </p>
          <Link
            href="/products"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl text-sm font-medium bg-sky-500 hover:bg-sky-600 text-white transition-all shadow-lg shadow-sky-500/20"
          >
            Volver al catálogo
          </Link>
        </div>
      </div>
    );
  }

  // Estado: Producto encontrado (Vista de Detalle)
  return (
    <div
      className={`max-w-5xl mx-auto rounded-3xl border border-slate-800 bg-slate-900/60 p-6 sm:p-10 ${styles.detailGlow}`}
    >
      {/* Botón de retorno */}
      <div className="mb-6">
        <Link
          href="/products"
          className="inline-flex items-center text-sm font-medium text-slate-400 hover:text-sky-400 transition-colors gap-2"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Volver a productos
        </Link>
      </div>

      {/* Grid Principal del Detalle */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Imagen del Producto */}
        <div
          className={`relative overflow-hidden rounded-2xl bg-slate-950 border border-slate-800 ${styles.imageShadow}`}
        >
          <img
            src={product.imgUrl}
            alt={product.name}
            className="w-full h-auto object-cover aspect-video lg:aspect-square transform hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-900/80 text-sky-400 backdrop-blur-md border border-slate-700">
              ID: #{product.id}
            </span>
          </div>
        </div>

        {/* Información del Producto */}
        <div className="flex flex-col justify-center space-y-6">
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {product.tags.map((tag, index) => (
              <span
                key={index}
                className="text-xs font-semibold tracking-wider uppercase px-2.5 py-1 rounded-lg bg-sky-500/10 text-sky-400 border border-sky-500/20"
              >
                {tag.name}
              </span>
            ))}
          </div>

          {/* Título */}
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight leading-tight">
            {product.name}
          </h1>

          {/* Descripción Extendida */}
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            {product.description}
          </p>

          <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row gap-4">
            <button
              onClick={() =>
                alert(`¡Recurso "${product.name}" adquirido con éxito!`)
              }
              className="flex-1 px-6 py-3 rounded-xl font-medium bg-sky-500 hover:bg-sky-600 text-white transition-all shadow-lg shadow-sky-500/25 active:scale-95 text-center"
            >
              Obtener recurso
            </button>
            <Link
              href="/"
              className="px-6 py-3 rounded-xl font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 transition-all text-center border border-slate-700"
            >
              Ver más opciones
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
