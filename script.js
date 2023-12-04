function getCharacters(done) {

    const results = fetch("https://rickandmortyapi.com/api/character");
    results
        .then(response => response.json())
        .then(data => {
            done(data)
        })
    .catch(error =>{
        console.log('Error: la API no se ha cargado bien', error);
    })
}

getCharacters(data => {

    data.results.forEach(personaje => {
        const article = document.createRange().createContextualFragment(/*html*/`
        <article>
        <div class="image-container">
            <img src="${personaje.image}" alt="${personaje.name}">
        </div>
        <h2>${personaje.name}</h2>
        <span>${personaje.status}</span>
        </article>

        
        
        `);

        const main = document.querySelector("main");

        main.append(article)



    });

})

//Busqueda

function getCharacters(done, searchTerm = "") {
    let url = "https://rickandmortyapi.com/api/character";
    
    // Añadir término de búsqueda si se proporciona
    if (searchTerm) {
        url += `?name=${searchTerm}`;
    }

    const results = fetch(url);
    results
        .then(response => response.json())
        .then(data => {
            done(data);
        })
        .catch(error => {
            console.log('Error: la API no se ha cargado bien', error);
        });
}

function searchCharacters() {
    const searchInput = document.getElementById("searchInput");
    const searchTerm = searchInput.value.trim();

    // Limpiar el contenido actual en el main
    const main = document.querySelector("main");
    main.innerHTML = "";

    getCharacters(data => {
        data.results.forEach(personaje => {
            const article = document.createRange().createContextualFragment(/*html*/`
                <article>
                    <div class="image-container">
                        <img src="${personaje.image}" alt="${personaje.name}">
                    </div>
                    <h2>${personaje.name}</h2>
                    <span>${personaje.status}</span>
                </article>
            `);

            main.append(article);
        });
    }, searchTerm);
}

// Cargar personajes al cargar la página
searchCharacters();


