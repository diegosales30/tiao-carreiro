import { BoxInput, ContainerModal } from "./style";
import { CgClose } from "react-icons/cg";
import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

const ModalFaixa = ({ ModalFaixa, setModalFaixa, data, setData }) => {
  const [token] = useState("diegofelipesales23@gmail.com");
  const [album_id, setAlbumId] = useState();
  const [title, setTitle] = useState();
  const [number, setNumber] = useState();
  const [duration, setDuration] = useState();
  const [post, setPost] = useState();

  console.log(post);

  const handlePostFaixa = () => {
    axios
      .post("https://tiao.supliu.com.br/api/track", post, {
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
    setPost({ album_id, title, number, duration });
  };
  return (
    <ContainerModal>
      <div>
        <BoxInput>
          <h3>Adicionar Faixa</h3>
          <aside>
            <button onClick={() => setModalFaixa()}>
              <CgClose />
            </button>
          </aside>
          <form onSubmit={handleChange}>
            <input
              type="number"
              placeholder="id do Album"
              onChange={(e) => setAlbumId(e.target.value)}
            />
            <input
              type="number"
              placeholder="Numero da faixa  ex: 1"
              onChange={(e) => setNumber(e.target.value)}
            />
            <input
              type="text"
              placeholder="Nome da faixa"
              onChange={(e) => setTitle(e.target.value)}
            />

            <input
              type="number"
              placeholder="Duração  ex: 195"
              onChange={(e) => setDuration(e.target.value)}
            />
            <button type="submit" onClick={handlePostFaixa}>
              Adicionar
            </button>
          </form>
        </BoxInput>
      </div>
    </ContainerModal>
  );
};
export default ModalFaixa;
