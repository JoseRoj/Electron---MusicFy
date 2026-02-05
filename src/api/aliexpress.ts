import axios from "axios";
export class Aliexpress {
  async articulosTiendaN1() {
    try {
      const res = await axios.get(
        "https://aliexpress-datahub.p.rapidapi.com/store_item_search?storeId=1102051418&sellerId=231651707&sort=default",
        {
          headers: {
            "x-rapidapi-host": "aliexpress-datahub.p.rapidapi.com",
            "x-rapidapi-key":
              "1cc93a740emshc54dc4038d25c3ep196a46jsnc2105445c7ff",
          },
        },
      );

      return res.data; // ✅ aquí sí se retorna correctamente
    } catch (err) {
      console.error(err);
      return null; // o [] si quieres un arreglo vacío por defecto
    }
  }

  async articulo(id: string) {
    try {
      const res = await axios.get(
        `https://aliexpress-datahub.p.rapidapi.com/item_detail_6?itemId=${id}`,
        {
          headers: {
            "x-rapidapi-host": "aliexpress-datahub.p.rapidapi.com",
            "x-rapidapi-key":
              "1cc93a740emshc54dc4038d25c3ep196a46jsnc2105445c7ff",
          },
        },
      );

      return res.data; // ✅ aquí sí se retorna correctamente
    } catch (err) {
      console.error(err);
      return null; // o [] si quieres un arreglo vacío por defecto
    }
  }
}
