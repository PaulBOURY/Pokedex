// {pokemonIndex > 0 && <button type="button" onClick={handleClickMoins}>Précédent</button>}
// {pokemonIndex <pokemonList.length -1 && <button type="button" onClick={handleClickPlus}>Suivant</button>}

function NavBar({pokemonList, setPokemonIndex, pokemonIndex}) { 
  
    {pokemonIndex === 3 && alert("pika pikachu !!!")}


    return (
    <>
        {pokemonList.map((article, pokemonIndex) => (
            <button key={article.name} onClick={() => setPokemonIndex(pokemonIndex)}>{article.name}</button>
        ))}
    </>
    )
}

export default NavBar;