import { useEffect, useState } from "react";
import CardProduct from "../../components/card-product/CardProduct";
import { PRODUCTS } from "../../data/products";
import useDocumentTitle from "../../hooks/useDocumentTitle";

const Products = () => {
  const [personajes, setPersonajes] = useState([]);
  const [llamarApi, setLlamarApi] = useState(false);

  useDocumentTitle("Productos");

  useEffect(() => {
    if (llamarApi) {
      fetch("https://swapi.dev/api/people").then(async (e) => {
        const res = await e.json();
        console.log(res);
        setPersonajes(res.results);
      });
    } else {
      setPersonajes([]);
    }

    return () => {
      console.log("Me voy!!!!!");
    };
  }, [llamarApi]);

  const handleLlamarPersonajesClick = () => {
    setLlamarApi(!llamarApi);
  };

  return (
    <section className="space-y-6">
      <button
        onClick={handleLlamarPersonajesClick}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        llamar personajes
      </button>
      {JSON.stringify(personajes)}
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
