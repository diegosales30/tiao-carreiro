import { ContainerHeader } from "./style";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <ContainerHeader>
      <img src={logo} alt="logo" />
      <h1>DISCOGRAFIA</h1>
    </ContainerHeader>
  );
};
export default Header;
