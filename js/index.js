const cards = document.querySelector('#card-poke');
const templateCard = document.querySelector('#template-card').content;
const prevBtn = document.querySelector('#prev-btn');
const nextBtn = document.querySelector('#next-btn');
let prev, next;

document.addEventListener('DOMContentLoaded', () => {
    fetchData(); // Cargar la primera página inicialmente.
});

const fetchData = async (url) => {
    try {
        loadingData(true);
        const link = url ? url : 'https://pokeapi.co/api/v2/pokemon'; // URL base de la API de Pokémon
        const res = await fetch(link);
        const data = await res.json();
        console.log('Pokémon data => ', data);
        next = data.next;
        prev = data.previous;
        const pokemonData = await Promise.all(
            data.results.map(async (pokemon) => {
                const res = await fetch(pokemon.url);
                return res.json();
            })
        );
        drawCards(pokemonData);
        updateButtons();
    } catch (error) {
        console.error('Error => ', error);
    } finally {
        loadingData(false);
    }
};

const drawCards = (pokemons) => {
    const fragment = document.createDocumentFragment();
    cards.textContent = ''; // Limpiar el contenido anterior.
    pokemons.forEach((pokemon) => {
        const clone = templateCard.cloneNode(true);
        clone.querySelector('h5').textContent = pokemon.name;
        clone.querySelector('p').textContent = `Tipo: ${pokemon.types.map(type => type.type.name).join(', ')}`;
        clone.querySelector('img').setAttribute('src', pokemon.sprites.front_default);
        fragment.appendChild(clone);
    });
    cards.appendChild(fragment);
};

const updateButtons = () => {
    // Habilitar o deshabilitar botones según la existencia de las páginas.
    prevBtn.disabled = !prev;
    nextBtn.disabled = !next;
};

prevBtn.addEventListener('click', () => {
    if (prev) {
        fetchData(prev);
    }
});

nextBtn.addEventListener('click', () => {
    if (next) {
        fetchData(next);
    }
});

const loadingData = (state) => {
    const loading = document.querySelector('#loading');
    if (state) {
        loading.classList.remove('d-none');
    } else {
        loading.classList.add('d-none');
    }
};
