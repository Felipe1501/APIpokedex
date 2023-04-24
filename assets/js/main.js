const pokemonList = document.getElementById('pokemonList');

const loadMoreBtn = document.getElementById('loadMoreButton');

const limit = 5;
let offset = 0;



function loadPokemonItems(offset , limit ){
    PokeAPI.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map((pokemon) =>  `
                <li class="pokemon ${pokemon.type}">
                    <span class="number">#${pokemon.number}</span>
                    <span class="name">${pokemon.name}</span>
                    <div class="detail">
                        <ul class="types">
                            
                            ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                        </ul>
                        <img src="${pokemon.photo}" alt="${pokemon.name}">
                    </div>
                </li>
            `).join('');
        pokemonList.innerHTML += newHtml;

    }) 
}

loadPokemonItems(offset, limit)

loadMoreBtn.addEventListener('click', () => {
    offset += limit
    loadPokemonItems(offset, limit)
})


        // const listItems = []
        // for (let i = 0; i < pokemons.length; i++) {
        //     const pokemon = pokemons[i];
        //     listItems.push(convertPokemonToLi(pokemon))
        // }
        // console.log(listItems);