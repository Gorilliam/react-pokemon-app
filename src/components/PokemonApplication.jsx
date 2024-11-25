import Pokemon from "./Pokemon";
import { useState, useEffect } from "react"

function PokemonApplication () {

    let [fetchedPokemon, setFetchedPokemon] = useState([]);
    let [pokemonUrl, setPokemonUrl] = useState(null);
    let [showPokemon, setShowPokemon] = useState(null);

    useEffect(() => {
        getPokemon('https://pokeapi.co/api/v2/pokemon?limit=151')
    }, [])

    const getPokemon = async (url) => {
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
        setFetchedPokemon(data.results)
    }

    const getPokemonData = async () => {
        if (!pokemonUrl) {
            alert('Please select pokemon')
            return
        }
        const response = await fetch(pokemonUrl)
        const data = await response.json()
        console.log(data)
        setShowPokemon(data)
        
    }
    return (
        <>
        <h2>Pokémon Selection</h2>
        <div className="pokeSelect">
        <select name="Pokemon" defaultValue="Default" onChange={(e) => setPokemonUrl(e.target.value)}>
            <option value="Default" disabled>Please select a Pokémon</option>
            {fetchedPokemon.map((pokemon, i) => <option key={i} value={pokemon.url}>{pokemon.name}</option>)}
        </select>
        <button onClick={getPokemonData}>Show data for selected Pokémon</button>
        </div>
        {showPokemon && <Pokemon data={showPokemon}/>}
       
        </>
    )
}

export default PokemonApplication;