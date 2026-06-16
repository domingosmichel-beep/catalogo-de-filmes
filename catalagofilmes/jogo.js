const serie = [
    {
      
    "titulo": "Minecraft",
    "imagem": "https://exemplo.com/minecraft.jpg",
    "descricao": "Jogo de construção e sobrevivência em mundo aberto."
  },
  {
    "titulo": "Fortnite",
    "imagem": "https://exemplo.com/fortnite.jpg",
    "descricao": "Battle royale com construção e eventos ao vivo."
  },
  {
    "titulo": "Dark Souls",
    "imagem": "https://upload.wikimedia.org/wikipedia/en/8/8d/Dark_Souls_Cover_Art.jpg",
    "descricao": "RPG de ação conhecido por sua dificuldade elevada, combates estratégicos e ambientação sombria em um mundo de fantasia decadente."
  },
  {
    "titulo": "Fortnite",
    "imagem": "https://cdn2.unrealengine.com/fortnite-og-social-1920x1080-4e84fddf7f29.jpg",
    "descricao": "Battle Royale multiplayer onde jogadores competem para ser o último sobrevivente, com construção, exploração e eventos ao vivo."
  },
  {
    "titulo": "Ruined King: A League of Legends Story",
    "imagem": "https://cdn.cloudflare.steamstatic.com/steam/apps/1276790/header.jpg",
    "descricao": "RPG por turnos ambientado no universo de League of Legends, acompanhando campeões em uma aventura contra a Névoa Negra." 
  },
  {
    "titulo": "Roblox",
    "imagem": "https://upload.wikimedia.org/wikipedia/commons/7/7e/Roblox_Logo_2022.jpg",
    "descricao": "Plataforma de jogos e criação onde milhões de usuários podem desenvolver, compartilhar e jogar experiências criadas pela comunidade."
  },
  {
    "titulo": "PUBG: Battlegrounds",
    "imagem": "https://cdn.cloudflare.steamstatic.com/steam/apps/578080/header.jpg",
    "descricao": "Battle Royale tático em que até 100 jogadores disputam a sobrevivência em mapas extensos com armas, veículos e equipamentos."
  },
  {
    "titulo": "League of Legends",
    "imagem": "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news_live/f69f6e4f8f1d0db1f2fd56edb116c7bcf5f4a2d9-1920x1080.jpg",
    "descricao": "MOBA competitivo onde equipes de cinco jogadores controlam campeões com habilidades únicas para destruir a base adversária."
  }

];
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