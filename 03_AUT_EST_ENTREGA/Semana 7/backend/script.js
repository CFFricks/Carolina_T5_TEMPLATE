const professionalExperiencesBox = document.querySelector("#professional-experiences");

const settings = {
    "url": "http://127.0.0.1:3022/api/v1/contato",
    "method": "GET",
    "timeout": 0,
  };
  
$.ajax(settings).done(function (response) {
    response.forEach(item => {
        contatoBox.innerHTML += `
        <div class="contato" id="${item.id}">
            <div class="box-header">
                <h2 class="telefone">${item.titulo}</h2>
              
            </div>
            <div class="box-content">
                <p class="moradia-idade-email">${item.local} | ${item.idade} | ${item.email}</p>
            <p class="telefone-nacionalidade">${item.telefone} | ${item.nacionalidade}</p>
            </div>
        </div>`
    })
})