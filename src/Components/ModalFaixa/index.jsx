import { BoxInput, ContainerModal } from "./style";

const ModalFaixa = ({ ModalFaixa, setModalFaixa }) => {
  return (
    <ContainerModal>
      <div>
        <BoxInput>
          <aside>
            <button onClick={() => setModalFaixa()}>x</button>
          </aside>
          <form>
            <input type="text" placeholder="Nome da faixa" />
            <input type="number" placeholder="Numero da faixa  ex: 1" />
            <button>Adicionar</button>
          </form>
        </BoxInput>
      </div>
    </ContainerModal>
  );
};
export default ModalFaixa;
