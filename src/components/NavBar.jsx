

function NavBar({handleClickMoins, handleClickPlus, pokemonIndex, pokemonList}) { 
  
  


    return (
    <>
            {pokemonIndex > 0 && <button type="button" onClick={handleClickMoins}>Précédent</button>}
            {pokemonIndex <pokemonList.length -1 && <button type="button" onClick={handleClickPlus}>Suivant</button>}
    </>
    )
}

export default NavBar;