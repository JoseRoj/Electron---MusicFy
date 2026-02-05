import React, { useEffect, useState } from "react";
import { Button } from "../../components/shared";
import { Auth, Aliexpress } from "../../api";
import { Link } from "react-router-dom";

const auth = new Auth();
const aliexpress = new Aliexpress();

export function Home() {
  const [dataArticulo, setDataArticulo] = useState<any[]>([]); // arreglo vacío por defecto
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticulos = async () => {
      try {
        const response: any = await aliexpress.articulosTiendaN1();
        // extraemos la lista de artículos
        setDataArticulo(response?.result?.resultList || []);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticulos();
  }, []);

  if (loading) return <div>Cargando artículos...</div>;

  return (
    <div className="p-4 flex flex-wrap gap-4 justify-center">
      {dataArticulo.map((articulo, index) => (
        <Link
          to={`/artist/${articulo.item.itemId}`}
          key={index}
          className="border rounded-lg p-4 w-60 flex flex-col items-center hover:shadow-lg hover:shadow-sky-400 transition-transform duration-300 ease-in-out  hover:scale-105 cursor-pointer"
        >
          <img
            src={articulo.item.image}
            alt={articulo.title}
            className="w-40 h-40 object-contain mb-2"
          />
          <h2 className="text-xs! font-semibold text-center mb-1 line-clamp-2">
            {articulo.item.title}
          </h2>
          <p className="text-lg font-bold text-green-600">
            ${articulo.item.sku.def.price || "N/A"}
          </p>
        </Link>
      ))}
    </div>
  );
}
