import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const ItensContext = createContext();

const ItensProvider = ({ children }) => {
  const [token] = useState("diegofelipesales23@gmail.com");
  const [date, setData] = useState([]);
  const [update, setUpdate] = useState(false);

  //   useEffect(() => {
  //     axios
  //       .get("https://tiao.supliu.com.br/api/album", {
  //         headers: {
  //           Authorization: "Bearer" + token,
  //           "Content-Type": "application/json",
  //         },
  //       })
  //       .then((res) => setData(res.data.data))
  //       .catch((error) => console.log(error));
  //   }, []);

  const getData = () => {
    axios
      .get("https://tiao.supliu.com.br/api/album", {
        headers: {
          Authorization: "Bearer" + token,
          "Content-Type": "application/json",
        },
      })
      .then((res) => setData(res.data.data))
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    getData();
  }, [update]);

  return (
    <ItensContext.Provider value={{ date, setData, update, setUpdate, token }}>
      {children}
    </ItensContext.Provider>
  );
};
export default ItensProvider;

export const useItens = () => useContext(ItensContext);
