import { useState } from "react";
import { useItens } from "../../Providers/itens";
import Header from "../Header";
import ListItens from "../ListItens";

import SearchBox from "../SearchBox";
import { ContainerHome } from "./style";

const Home = () => {
  const { data } = useItens();
  const [filter, setFilter] = useState("");

  const showItens = (search) => {
    const filtered = data.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilter(filtered);
  };

  return (
    <ContainerHome>
      <Header />
      <SearchBox showItens={showItens} />
      <ListItens filter={filter} />
    </ContainerHome>
  );
};

export default Home;
