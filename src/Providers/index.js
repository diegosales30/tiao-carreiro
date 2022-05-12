import ItensProvider from "./itens";
import ListItensProvider from "./ListItens";

const Providers = ({ children }) => {
  return (
    <ItensProvider>
      <ListItensProvider>{children}</ListItensProvider>
    </ItensProvider>
  );
};
export default Providers;
