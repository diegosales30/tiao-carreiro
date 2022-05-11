import Header from "../Header";
import ListItens from "../ListItens";
import SearchBox from "../SearchBox";
import { ContainerHome } from "./style";

const Home = () => {
  return (
    <ContainerHome>
      <Header />
      <SearchBox />
      <ListItens />
    </ContainerHome>
  );
};

export default Home;
