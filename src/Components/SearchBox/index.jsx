import { useState } from "react";

import { BoxSearch } from "./style";

const SearchBox = ({ showItens }) => {
  const [search, setSearch] = useState("");

  return (
    <BoxSearch>
      <label>Digite uma palavra-chave</label>
      <div>
        <input
          type="text"
          placeholder="pesquisar"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={() => showItens(search)}>Procurar</button>
      </div>
    </BoxSearch>
  );
};

export default SearchBox;
