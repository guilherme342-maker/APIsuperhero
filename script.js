let imagem = document.getElementById("imagem");

function base() {
    let DisplayID = document.getElementById('DisplayID').value;

    fetch('https://superheroapi.com/api/663825772334914/' + DisplayID)
        .then(data => {
            return data.json();
        })
        .then(persona => {
            imagem.src = persona.image.url;
            console.log(persona)

            let namePersona = document.getElementById('namePersona').textContent = `nome: ${persona.name}`;
            let powerPersona = document.getElementById('powerPersona');
            
            
        });
}