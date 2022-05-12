import { useState } from "react";

import ModalAlbum from "../ModalAlbum";
import ModalFaixa from "../ModalFaixa";
import { BoxItens, BoxList, ContainerList, Main } from "./style";

import { TiDelete } from "react-icons/ti";
import { FaHatCowboy } from "react-icons/fa";
import { toast } from "react-toastify";

import { useItens } from "../../Providers/itens";
import axios from "axios";

const ListItens = () => {
  const [modal, setModal] = useState(false);
  const [modalFaixa, setModalFaixa] = useState(false);
  const { data, update, setUpdate, token } = useItens();

  console.log(data);

  //função para deletar um album
  const handleRemoveAlbum = (current) => {
    axios
      .delete(`https://tiao.supliu.com.br/api/album/${current.id}`, {
        headers: {
          Authorization: "Bearer" + token,
          "Content-Type": "application/json",
        },
      })
      .then((_) => {
        toast.success("deletado");
        setUpdate(!update);
      })
      .catch((error) => {
        toast.error("erro ao deletar");
        console.log(error);
      });
  };

  const handleRemoveTrack = (current) => {
    axios
      .delete(`https://tiao.supliu.com.br/api/track/${current.id}`, {
        headers: {
          Authorization: "Bearer" + token,
          "Content-Type": "application/json",
        },
      })
      .then((_) => {
        toast.success("Faixa deletada");
        setUpdate(!update);
      })
      .catch((error) => {
        toast.error("erro ao deletar");
        console.log(error);
      });
  };

  return (
    <ContainerList>
      {modal && <ModalAlbum setModal={setModal} modal={modal} />}
      <BoxList>
        <h4>
          <FaHatCowboy />
        </h4>
        <button onClick={() => setModal(!modal)}>Adicionar Album</button>
      </BoxList>
      <Main>
        {modalFaixa && (
          <ModalFaixa setModalFaixa={setModalFaixa} modalFaixa={modalFaixa} />
        )}
        <BoxItens>
          {data.map((item) => (
            <main>
              <ul key={item.id}>
                <header>
                  <h2>
                    Album: {item.name},{item.year}
                  </h2>
                  <div>
                    <button onClick={() => setModalFaixa(!modalFaixa)}>
                      adicionar faixa
                    </button>
                    <button onClick={() => handleRemoveAlbum(item)}>
                      deletar album
                    </button>
                  </div>
                </header>
                {item.tracks.map((item) => (
                  <section>
                    <div>
                      <div>
                        <p>N°</p>
                        <p>{item.number}</p>
                      </div>
                      <div>
                        <p>Faixa</p>
                        <p>{item.title}</p>
                      </div>
                    </div>
                    <aside>
                      <div>
                        <p>Duração</p>
                        <p>
                          {new Date(1.79 * 559 * item.duration)

                            .toISOString()
                            .substr(11, 8)}
                        </p>
                      </div>
                      <div>
                        <button onClick={() => handleRemoveTrack(item)}>
                          <TiDelete />
                        </button>
                      </div>
                    </aside>
                  </section>
                ))}
              </ul>
            </main>
          ))}
        </BoxItens>
      </Main>
    </ContainerList>
  );
};

export default ListItens;
