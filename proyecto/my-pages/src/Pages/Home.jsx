import React from "react";
import Navbar from "./../General/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";

/**
 * @function Home - Componente de la página principal
 * @useEffect - Hook que se ejecuta cuando se monta el componente
 * @setSpells - Función que actualiza la lista de hechizos
 * @return {JSX.Element} - Componente de la página principal
*/
function Home(){
const [spells, setSpells] = useState([]);

useEffect(() => {
  axios.get("https://www.dnd5eapi.co/api/spells")
    .then((response) => {
      setSpells(response.data.results);
    })
    .catch((error) => {
      console.log(error);
    });
}, []);

  return (
    <>
      <div>
        <Navbar />
      </div>

      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold mb-6">Home</h1>
        {spells.map((spell) => (
          <div key={spell.index} className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold mb-6">{spell.name}</h1>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;