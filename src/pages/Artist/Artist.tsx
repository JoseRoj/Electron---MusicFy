import React, { useEffect, useState, type ReactNode } from "react";
import { Auth, Aliexpress } from "../../api";
import { useParams } from "react-router-dom";
const aliexpress = new Aliexpress();

interface Artist {}

export const Artist: React.FC<Artist> = ({}) => {
  const [articulo, setDataArticulo] = useState<any>(null); // arreglo vacío por defecto
  const { id } = useParams(); // id viene de la ruta
  useEffect(() => {
    const fetchArticulos = async () => {
      try {
        const response: any = await aliexpress.articulo("1005005244562338");
        // extraemos la lista de artículos
        console.log(response.result);
        setDataArticulo(response?.result.item || null);
      } catch (error) {
        console.error(error);
      } finally {
      }
    };

    fetchArticulos();
  }, []);

  return (
    <div className="p-4 mx-auto">
      <div className="bg-zinc-900 rounded-xl  shadow-lg p-4">
        <img
          src={articulo?.images[0] ?? ""}
          alt={articulo?.title ?? ""}
          className="w-full  h-64 object-contain rounded-md mb-4"
        />
        <h1 className="text-md! font-bold text-white mb-2">
          {articulo?.title ?? ""}
        </h1>
        <p className="font-bold">{articulo?.sku.def.price ?? ""}</p>
        <p className="font-bold">
          {" "}
          Stock : {articulo?.sku.def.quantity ?? ""}{" "}
        </p>
      </div>
    </div>
  );
};
