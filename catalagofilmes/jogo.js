const serie = [
    {
      
    
    
    
    }  
]

const listaJogos = document.getElementById
("listaJogos");
function mostrarJogos(lista){
    listaJogos.innerHTML = ""
    lista.forEach(jogo => {
        listaJogos.innerHTML += `
            <div class="col-md-4">
                <div class="card card-jogo h-100">
                    <img src="${jogo.imagem}" class="card-img-top">
                        <div class="card-body">
                         <h3>${jogo.titulo}</h3>
                         <p>${jogo.descricao}</p>
                         <buttjogoon class="btn btn-dark" onclick="verDetalhes('${jogo.titulo}')">Ver detalhes</button>
                        </div>
                </div>
            </div> 
        `
    });
}

mostrarJogos(jogo)

function verDetalhes(titulo) {
    Swal.fire({
        title: titulo,
        text: "Mais informções do jogo",
        icon: "info"
    })
}