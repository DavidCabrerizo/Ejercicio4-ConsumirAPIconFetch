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

