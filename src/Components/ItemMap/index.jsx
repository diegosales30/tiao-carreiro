import { useItens } from "../../Providers/itens";
import { TiDelete } from "react-icons/ti";

import { useListItens } from "../../Providers/ListItens";
import Loading from "../Loading";

const ItemMap = () => {
  const {
    modalFaixa,
    setModalFaixa,
    setId,
    handleRemoveAlbum,
    handleRemoveTrack,
  } = useListItens();
  const { data, loading } = useItens();

  return (
    <>
      {data.map((item) => (
        <main key={item.id}>
          <ul>
            <header>
              <h2>
                Album: {item.name},{item.year}
              </h2>
              <div>
                <button
                  onClick={() => {
                    setModalFaixa(!modalFaixa);
                    setId(item.id);
                  }}
                >
                  adicionar faixa
                </button>

                <button onClick={() => handleRemoveAlbum(item)}>
                  deletar album
                </button>
              </div>
            </header>

            {item.tracks.map((item) => (
              <section key={item.id}>
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
      {!loading && <Loading />}
    </>
  );
};
export default ItemMap;
