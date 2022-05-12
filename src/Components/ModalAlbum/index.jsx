import { useState } from "react";
import axios from "axios";

import { BoxInput, ContainerModal } from "./style";
import { toast } from "react-toastify";
import { CgClose } from "react-icons/cg";

import { useItens } from "../../Providers/itens";

const ModalAlbum = ({ modal, setModal }) => {
  const [name, setName] = useState();
  const [year, setYear] = useState();
  const [post, setPost] = useState();

  const { update, setUpdate, token } = useItens();

  const handlePost = () => {
    axios
      .post("https://tiao.supliu.com.br/api/album", post, {
        headers: {
          Authorization: "Bearer" + token,
          "Content-Type": "application/json",
        },
      })
      .then(() => {
        toast.success("cadastrado com sucesso!");

        setUpdate(!update);
      })
      .catch(() => {
        toast.error("erro ao adicionar!");
      });
  };

  const handleChange = (e) => {
    e.preventDefault();
    setPost({ name, year });
  };

  return (
    <ContainerModal>
      <div>
        <BoxInput>
          <h3>Adicionar Album</h3>
          <aside>
            <button onClick={() => setModal(!modal)}>
              <CgClose />
            </button>
          </aside>
          <form onSubmit={handleChange}>
            <input
              required
              type="text"
              placeholder="Digite o nome do Album"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              required
              type="text"
              placeholder="Ano, ex: 1961"
              onChange={(e) => setYear(e.target.value)}
            />

            <button type="submit" onClick={handlePost}>
              Adicionar
            </button>
          </form>
        </BoxInput>
      </div>
    </ContainerModal>
  );
};

export default ModalAlbum;
