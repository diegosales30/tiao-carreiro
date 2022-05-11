import Header from "../Header";
import ListItens from "../ListItens";
import ModalAlbum from "../ModalAlbum";
import SearchBox from "../SearchBox";
import { ContainerHome } from "./style";

const Home = () => {
  return (
    <ContainerHome>
      <Header />
      <SearchBox />
      {/* <ModalAlbum /> */}
      <ListItens />
    </ContainerHome>
  );
};

export default Home;
