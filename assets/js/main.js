


function convertPokemonToLi(pokemon){
    return `
        <li class="pokemon">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>
            <div class="detail">
                <ul class="types">
                    
                    ${pokemon.types.map((type) => `<li class="type">${type}</li>`).join('')}
                </ul>
                <img src="${pokemon.photo}" alt="${pokemon.name}">
            </div>
        </li>
    `
}

const pokemonList = document.getElementById('pokemonList');

    PokeAPI.getPokemons().then((pokemons = []) => {
        const newHtml = pokemons.map(convertPokemonToLi).join('');
        pokemonList.innerHTML += newHtml;

    }) 


        // const listItems = []
        // for (let i = 0; i < pokemons.length; i++) {
        //     const pokemon = pokemons[i];
        //     listItems.push(convertPokemonToLi(pokemon))
        // }
        // console.log(listItems);