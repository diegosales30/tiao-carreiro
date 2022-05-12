import ModalAlbum from "../ModalAlbum";
import ModalFaixa from "../ModalFaixa";
import { BoxItens, BoxList, ContainerList, Main } from "./style";

import { FaHatCowboy } from "react-icons/fa";

import { useListItens } from "../../Providers/ListItens";
import ItemMap from "../ItemMap";
import FilteredMap from "../FilteredMap";

const ListItens = ({ filter }) => {
  const { modal, setModal, modalFaixa, setModalFaixa, album_id } =
    useListItens();

  return (
    <ContainerList>
      {modal && <ModalAlbum setModal={setModal} modal={modal} />}
      {modalFaixa && (
        <ModalFaixa
          setModalFaixa={setModalFaixa}
          modalFaixa={modalFaixa}
          album_id={album_id}
        />
      )}
      <BoxList>
        <h4>
          <FaHatCowboy />
        </h4>
        <button onClick={() => setModal(!modal)}>Adicionar Album</button>
      </BoxList>
      <Main>
        <BoxItens>
          {filter.length === 0 ? (
            <>
              <ItemMap />
            </>
          ) : (
            <>
              <FilteredMap filter={filter} />
            </>
          )}
        </BoxItens>
      </Main>
    </ContainerList>
  );
};

export default ListItens;
