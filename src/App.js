import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

const App = () => {

  const [novateva, setNovateva] = useState([]);

  useEffect(() => {
    const petNovatevaApi = async () => {
      const url = "https://swapi.dev/api/people/";
      const respuesta = await axios.get(url);
      console.log(respuesta);
      setNovateva(respuesta.data.results);
    };
    petNovatevaApi();
  }, []);

  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>Peticiones</h1>
      <ul>
        {novateva.length === 0 && <p>Loading...</p>}
        {novateva.map((colomb, i) => {
          return (
            <li key={i} style={{ margin: 70 }}>
              <h3>{colomb.name}</h3>
              <h3>{colomb.mass}</h3>
              <h3>{colomb.skin_color}</h3>
              <h3>{colomb.films}</h3>
             
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default App;
