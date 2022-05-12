import axios from "axios";
import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import { useItens } from "./itens";

const ListItensContext = createContext();

export const ListItensProvider = ({ children }) => {
  const { update, setUpdate, token } = useItens();
  const [modal, setModal] = useState(false);
  const [modalFaixa, setModalFaixa] = useState(false);
  const [album_id, setId] = useState(0);

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
    <ListItensContext.Provider
      value={{
        modal,
        setModal,
        modalFaixa,
        setModalFaixa,
        album_id,
        setId,
        handleRemoveAlbum,
        handleRemoveTrack,
      }}
    >
      {children}
    </ListItensContext.Provider>
  );
};
export default ListItensProvider;

export const useListItens = () => useContext(ListItensContext);
