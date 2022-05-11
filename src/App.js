import { useState, useEffect } from "react";
import Home from "./Components/Home";
import { GlobalStyle } from "./Styles/global";

function App() {
  const [token] = useState("diegofelipesales23@gmail.com");

  useEffect(() => {
    fetch("https://tiao.supliu.com.br/api/album", {
      method: "GET",
      headers: {
        Authorization: "Bearer" + token,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      <GlobalStyle />
      <Home />
    </>
  );
}

export default App;
