import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const ItensContext = createContext();

const ItensProvider = ({ children }) => {
  const [token] = useState("diegofelipesales23@gmail.com");
  const [data, setData] = useState([]);
  const [update, setUpdate] = useState(false);
  const [loading, setLoading] = useState(false);

  const getData = () => {
    axios
      .get("https://tiao.supliu.com.br/api/album", {
        headers: {
          Authorization: "Bearer" + token,
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setData(res.data.data);
        setLoading(true);
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    getData();
  }, [update]);

  return (
    <ItensContext.Provider
      value={{ data, setData, update, setUpdate, token, loading, setLoading }}
    >
      {children}
    </ItensContext.Provider>
  );
};
export default ItensProvider;

export const useItens = () => useContext(ItensContext);
