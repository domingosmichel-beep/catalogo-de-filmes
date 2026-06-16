const filmes = [
    {
        titulo: "Backroms",
       imagem:"https://www.themoviedb.org/t/p/w600_and_h900_face/a1pgQeEge47xrS4jGlDwIHiieVK.jpg",
        descricao:"Um não lugar",

 },
    {
        titulo: "spider-noir",
        imagem:"https://www.themoviedb.org/t/p/w600_and_h900_face/rfrzXSaiuvRMLo8PRQds0TfFrZC.jpg",
        descricao:"miranha gotico",

 },
    {
        titulo: "O mandaloriano",
       imagem:"https://www.themoviedb.org/t/p/w600_and_h900_face/dNwaS0tnwgQRaQFPY5MbGxdmYXr.jpg",
        descricao:"e grogu",

 },
    {
        titulo: "mortal kombat",
        imagem:"https://www.themoviedb.org/t/p/w600_and_h900_face/iILiJSRViTEcF23MHhGCbVm3mfW.jpg",
         descricao:"2",
 },
    {
  
        titulo: "John Carter",
        imagem:"https://www.themoviedb.org/t/p/w600_and_h900_face/ujB1v2jvEjq7euYPkx3zUgFBCbb.jpg",
        descricao:"Entre dois mundos",
   
    },
]

const listaFilmes = document.getElementById
("listaFilmes");
function mostrarFilmes(lista){
    listaFilmes.innerHTML = ""
    lista.forEach(filme => {
        listaFilmes.innerHTML += `
            <div class="col-md-4">
                <div class="card card-filme h-100">
                    <img src="${filme.imagem}" class="card-img-top">
                        <div class="card-body">
                         <h3>${filme.titulo}</h3>
                         <p>${filme.descricao}</p>
                         <button class="btn btn-dark" onclick="verDetalhes('${filme.titulo}')">Ver detalhes</button>
                        </div>
                </div>
            </div> 
        `
    });
}

mostrarFilmes(filmes)

function verDetalhes(titulo) {
    Swal.fire({
        title: titulo,
        text: "Mais informções do filme",
        icon: "info"
    })
}