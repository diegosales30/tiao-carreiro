import { BoxSearch } from "./style";

const SearchBox = () => {
  return (
    <BoxSearch>
      <label>Digite uma palavra-chave</label>
      <div>
        <input type="text" placeholder="pesquisar" />
        <button>Procurar</button>
      </div>
    </BoxSearch>
  );
};

export default SearchBox;
