function Pokemon ({data}) {
    return (
        <div className="pokeDisplay">
        <h3>Name: {data.name}</h3>
        <img src={data.sprites.front_default} alt={data.name} />
        <div className="pokeType">
        <p>Types:</p>
        <ul>
        {data.types.map((type, i) => <li key={i}>
            {type.type.name}
        </li>)}
        </ul>
        </div>
        <p>Weigth: {data.weight}</p>
        <p>Height: {data.height}</p>
        </div>
    )
}

export default Pokemon;