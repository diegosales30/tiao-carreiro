import { useEffect, useState } from "react";
import ModalAlbum from "../ModalAlbum";
import ModalFaixa from "../ModalFaixa";
import { BoxItens, BoxList, ContainerList } from "./style";
import { TiDelete } from "react-icons/ti";
import { FaHatCowboy } from "react-icons/fa";
import axios from "axios";
import { toast } from "react-toastify";

const ListItens = () => {
  const [modal, setModal] = useState(false);
  const [modalFaixa, setModalFaixa] = useState(false);
  const [data, setData] = useState([]);
  const [token] = useState("diegofelipesales23@gmail.com");

  console.log(data);

  //função para buscar os dados do banco e listar na tela
  useEffect(() => {
    axios
      .get("https://tiao.supliu.com.br/api/album", {
        headers: {
          Authorization: "Bearer" + token,
          "Content-Type": "application/json",
        },
      })
      .then((res) => setData(res.data.data))
      .catch((error) => console.log(error));
  }, [data]);

  //função para deletar um album
  const handleRemove = (current) => {
    axios
      .delete(`https://tiao.supliu.com.br/api/album/${current.id}`, {
        headers: {
          Authorization: "Bearer" + token,
          "Content-Type": "application/json",
        },
      })
      .then((_) => {
        toast.success("deletado");
        setData([...data]);
      })
      .catch((error) => toast.error("erro ao deletar"));
  };

  return (
    <ContainerList>
      {modal && (
        <ModalAlbum
          data={data}
          setData={setData}
          setModal={setModal}
          modal={modal}
        />
      )}
      <BoxList>
        <h4>
          <FaHatCowboy />
        </h4>
        <button onClick={() => setModal(!modal)}>Adicionar Album</button>
      </BoxList>
      <>
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
                    <button onClick={() => handleRemove(item)}>
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
                        <button>
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
      </>
    </ContainerList>
  );
};

export default ListItens;
