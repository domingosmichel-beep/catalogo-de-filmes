const serie = [
    {
        titulo: "Game of Thrones",
       imagem:"https://www.themoviedb.org/t/p/w600_and_h900_face/eDn8XWA0a4U3zOhd1gh7HExdt4Y.jpg",
        descricao:"Em uma terra onde os verões podem durar vários anos e o inverno toda uma vida, sete nobres famílias lutam pelo controle da mítica terra de Westeros, dividida depois de uma guerra. Num cenário que lembra a Europa medieval, reis, rainhas, cavaleiros e renegados usam todos os meios possíveis em um jogo político pela disputa do Trono de Ferro, o símbolo do poder absoluto.",

 },
    {
        titulo: "Jujutsu Kaisen",
        imagem:"https://www.themoviedb.org/t/p/w600_and_h900_face/8R1mMSC1gX1cg5ed7ns49JOEqw3.jpg",
        descricao:"Sofrimento, arrependimento, vergonha: os sentimentos negativos dos humanos tornam-se Maldições, causando terríveis acidentes que podem levar até mesmo à morte. E pra piorar, Maldições só podem ser exorcizadas por outras Maldições. Certo dia, para salvar amigos que estavam sendo atacados por Maldições, Yuji Itadori engole o dedo do Ryomen-Sukuna, absorvendo sua Maldição. Ele então decide se matricular no Colégio Técnico de Feitiçaria de Tóquio, uma organização que combate as Maldições... e assim começa a heróica lenda do garoto que tornou-se uma Maldição para exorcizar uma Maldição.",

 },
    {
        titulo: "DAN DA DAN",
       imagem:"https://www.themoviedb.org/t/p/w600_and_h900_face/vtQug1eOyeU2VXIpNoDF1lTlcH4.jpg",
        descricao:"Quando a estudante do ensino médio Momo – que vem de uma família de médiuns e não acredita em alienígenas – encontra Okarun, um garoto obcecado por ocultismo que acredita em extraterrestres, a rivalidade entre os dois coloca a dupla diante de ameaças paranormais reais. Momo descobre seus poderes espirituais, enquanto Okarun ganha habilidades ao ser possuído por uma maldição, o que faz com que se unam para lutar contra yokai, OVNIs e caos de outros mundos.",

 },
    {
        titulo: "BUCCHIGIRI?!",
        imagem:"https://www.themoviedb.org/t/p/w600_and_h900_face/bhtkmLdMleHtGTq267VqhePgp5S.jpg",
         descricao:"O reencontro de Arajin Tomoshibi com seu antigo amigo Matakara Asamine toma um rumo inesperado quando eles se envolvem em uma briga com os caras mais durões da cidade. E quando pensamos que as coisas não poderiam ficar mais esquisitas, um gigantesco gênio decide aparecer. Prepare-se para o confronto final. É a colisão entre o estilo e a magia!",
 },
    {
  
        titulo: "Tokio Revengers",
        imagem:"https://www.themoviedb.org/t/p/w600_and_h900_face/XbjlgUJknGCv7cNuinxdaFUFNt.jpg",
        descricao:"Takemichi Hanagaki é um desempregado que sobrevive de bicos e está na fossa. Ele descobriu que Hinata Tachibana, sua primeira e última namorada, com quem namorou no fundamental, foi morta pela impiedosa Gangue Manji de Tóquio. No dia seguinte à notícia, ele está na beira da plataforma do trem e é empurrado pela multidão. Ele fecha os olhos se preparando para morrer, mas ao abrir, ele voltou no tempo para quando tinha 12 anos de idade. Agora que ele está na melhor época de sua vida, Takemichi decide se vingar de sua vida, salvando sua namorada e parando de fugir de si mesmo.",
   
    },
]

const listaSeries = document.getElementById
("listaSeries");
function mostrarSeries(lista){
    listaSeries.innerHTML = ""
    lista.forEach(serie => {
        listaSeries.innerHTML += `
            <div class="col-md-4">
                <div class="card card-serie h-100">
                    <img src="${serie.imagem}" class="card-img-top">
                        <div class="card-body">
                         <h3>${serie.titulo}</h3>
                         <p>${serie.descricao}</p>
                         <buttserieon class="btn btn-dark" onclick="verDetalhes('${serie.titulo}')">Ver detalhes</button>
                        </div>
                </div>
            </div> 
        `
    });
}

mostrarSeries(serie)

function verDetalhes(titulo) {
    Swal.fire({
        title: titulo,
        text: "Mais informções do serie",
        icon: "info"
    })
}