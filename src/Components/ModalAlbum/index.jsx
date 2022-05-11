import axios from "axios";
import { TiDelete } from "react-icons/ti";
import { useState } from "react";
import { toast } from "react-toastify";
import { BoxInput, ContainerModal } from "./style";

const ModalAlbum = ({ modal, setModal, data, setData }) => {
  const [token] = useState("diegofelipesales23@gmail.com");

  const [name, setName] = useState();
  const [year, setYear] = useState();
  const [post, setPost] = useState();

  console.log(data);

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
        setData([...data]);
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
              <TiDelete />
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
