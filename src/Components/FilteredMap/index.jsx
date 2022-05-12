import { TiDelete } from "react-icons/ti";

import { useListItens } from "../../Providers/ListItens";

const FilteredMap = ({ filter }) => {
  const {
    modalFaixa,
    setModalFaixa,
    setId,
    handleRemoveAlbum,
    handleRemoveTrack,
  } = useListItens();

  return (
    <>
      {filter.map((item) => (
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
    </>
  );
};
export default FilteredMap;
