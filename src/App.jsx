import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyTitle from './MyTitle'
import PokemonCard from './components/PokemonCard'


const pokemonList = [
  {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);

  const handleClickPlus = () => {
    setPokemonIndex(pokemonIndex + 1)
  }
  const handleClickMoins = () => {
    setPokemonIndex(pokemonIndex - 1)
  }
 
  return (
    <>
      <MyTitle />
      <section>
        {pokemonIndex > 0 && 
          <button type="button" onClick={handleClickMoins}>Précédent</button>
          }
        <PokemonCard pokemon={pokemonList[pokemonIndex]} />
        {pokemonIndex <pokemonList.length -1 &&
        <button type="button" onClick={handleClickPlus}>Suivant</button>
        }
      </section>
    </>
  )
}

export default App
