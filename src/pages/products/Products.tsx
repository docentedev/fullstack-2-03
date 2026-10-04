import CardProduct from "../../components/card-product/CardProduct";
import { PRODUCTS } from "../../data/products";

const Products = () => {
  return (
    <section className="space-y-6">
      {/* Encabezado de la sección */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-slate-800 pb-4">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-600 tracking-tight">
            Catálogo de Productos
          </h1>
          <p className="text-sm text-slate-400 mt-1">
            Explora nuestra selección completa de recursos y herramientas
            tecnológicas ({PRODUCTS.length} disponibles).
          </p>
        </div>
      </div>

      {/* Grilla Responsiva de Productos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {PRODUCTS.map((product) => (
          <CardProduct key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Products;
