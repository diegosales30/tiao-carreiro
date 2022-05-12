import axios from "axios";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { BoxInput, ContainerModal } from "./style";
import { toast } from "react-toastify";
import { CgClose } from "react-icons/cg";

import { useItens } from "../../Providers/itens";

const ModalAlbum = ({ modal, setModal }) => {
  const { update, setUpdate, token } = useItens();

  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    year: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = ({ name, year }) => {
    const post = { name, year };
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              placeholder="Digite o nome do Album"
              {...register("name")}
              error={errors.name?.message}
              required
            />
            <input
              type="text"
              placeholder="Ano, ex: 1961"
              {...register("year")}
              error={errors.year?.message}
              required
            />

            <button type="submit">Adicionar</button>
          </form>
        </BoxInput>
      </div>
    </ContainerModal>
  );
};

export default ModalAlbum;
