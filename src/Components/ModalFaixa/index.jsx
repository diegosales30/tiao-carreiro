import { BoxInput, ContainerModal } from "./style";
import { CgClose } from "react-icons/cg";
import { toast } from "react-toastify";
import axios from "axios";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useItens } from "../../Providers/itens";

const ModalFaixa = ({ ModalFaixa, setModalFaixa, album_id }) => {
  const { data, setData, update, setUpdate, token } = useItens();

  const schema = yup.object().shape({
    number: yup.number().required("Campo obrigatório"),
    title: yup.string().required("Campo obrigatório"),
    duration: yup.number().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = ({ title, number, duration }) => {
    const tracks = { album_id, title, number, duration };
    axios
      .post("https://tiao.supliu.com.br/api/track", tracks, {
        headers: {
          Authorization: "Bearer" + token,
          "Content-Type": "application/json",
        },
      })
      .then(() => {
        toast.success("cadastrado com sucesso!");
        setData([...data]);
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
          <h3>Adicionar Faixa</h3>
          <aside>
            <button onClick={() => setModalFaixa()}>
              <CgClose />
            </button>
          </aside>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="number"
              placeholder="Numero da faixa  ex: 1"
              {...register("number")}
              error={errors.number?.message}
              required
            />
            <input
              type="text"
              placeholder="Nome da faixa"
              {...register("title")}
              error={errors.title?.message}
              required
            />

            <input
              type="number"
              placeholder="Duração em segundos  ex: 195"
              {...register("duration")}
              error={errors.duration?.message}
              required
            />
            <button type="submit">Adicionar</button>
          </form>
        </BoxInput>
      </div>
    </ContainerModal>
  );
};
export default ModalFaixa;
