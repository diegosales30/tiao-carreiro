import { BoxItens, BoxList, ContainerList } from "./style";

const ListItens = () => {
  return (
    <ContainerList>
      <BoxList>
        <h4>logo</h4>
        <button>Adicionar Album</button>
      </BoxList>
      <>
        <BoxItens>
          <div>
            <h2>Album: Rei do gado,1961</h2>
            <div>
              <button>adicionar faixa</button>
              <button>deletar album</button>
            </div>
          </div>
          <section>
            <div>
              <div>
                <p>N*</p>
                <p>11</p>
              </div>
              <div>
                <p>Faixa</p>
                <p>Minas Gerais</p>
              </div>
            </div>
            <aside>
              <div>
                <p>Duração</p>
                <p>11:11</p>
              </div>
              <div>
                <button>editar</button>
                <button>deletar</button>
              </div>
            </aside>
          </section>
          <section>
            <div>
              <div>
                <p>N*</p>
                <p>11</p>
              </div>
              <div>
                <p>Faixa</p>
                <p>Minas Gerais</p>
              </div>
            </div>
            <aside>
              <div>
                <p>Duração</p>
                <p>11:11</p>
              </div>
              <div>
                <button>editar</button>
                <button>deletar</button>
              </div>
            </aside>
          </section>
        </BoxItens>
        <BoxItens>
          <div>
            <h2>Album: Rei do gado,1961</h2>
            <div>
              <button>adicionar faixa</button>
              <button>deletar album</button>
            </div>
          </div>
          <section>
            <div>
              <div>
                <p>N*</p>
                <p>11</p>
              </div>
              <div>
                <p>Faixa</p>
                <p>Minas Gerais</p>
              </div>
            </div>
            <aside>
              <div>
                <p>Duração</p>
                <p>11:11</p>
              </div>
              <div>
                <button>editar</button>
                <button>deletar</button>
              </div>
            </aside>
          </section>
        </BoxItens>
      </>
    </ContainerList>
  );
};

export default ListItens;
