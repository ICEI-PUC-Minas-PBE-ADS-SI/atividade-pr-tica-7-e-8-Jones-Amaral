const dados = [{
    "id": 1,
    "titulo": "Alien, o 8.º Passageiro",
    "descricao": "Uma nave espacial, ao retornar para Terra, recebe estranhos sinais vindos de um asteróide. Ao investigarem o local, um dos tripulantes é atacado por um estranho ser. O que parecia ser um ataque isolado se transforma em um terror constante, pois o tripulante atacado levou para dentro da nave o embrião de um alienígena, que não para de crescer e tem como meta matar toda a tripulação.",
    "genero": "Gênero: Terror",
    "diretor": "Diretor: Ridley Scott",
    "imagem": "img/filme-alien.jpg",
    "banner": "banner-alien.jpg"
},
{
    "id": 2,
    "titulo": "Trem Bala",
    "descricao": "Em Trem-Bala, Ladybug (Brad Pitt) é um assassino azarado, determinado a fazer seu trabalho pacificamente depois de muitas missões saírem dos trilhos. Quase desistindo de sua carreira, ele é recrutado por Maria Beetle (Sandra Bullock) para coletar uma maleta em um trem-bala indo de Tóquio para Morioka.",
    "genero": "Gênero: Ação / Comédia",
    "diretor": "Diretor: David Leitch",
    "imagem": "img/filme-trem-bala.jpeg",
    "banner": "banner-trem-bala.png"
},
{
    "id": 3,
    "titulo": "Nobody",
    "descricao": "Bob Odenkirk estrela como Hutch Mansell, um pai e marido subestimado e esquecido, que aguenta as injustiças da vida e nunca recua. Um anônimo. Quando dois ladrões invadem sua casa uma noite, Hutch se recusa a defender a si mesmo ou sua família, na esperança de evitar violência grave. Seu filho adolescente, Blake, está desapontado com ele e sua esposa, Becca, parece se afastar ainda mais.",
    "genero": "Gênero: Ação",
    "diretor": "Diretor: Ilya Naishuller",
    "imagem": "img/filme-nobody.jpg",
    "banner": "banner-nobody.jpg"
},
{
    "id": 4,
    "titulo": "John Wick",
    "descricao": "John Wick (Keanu Reeves) já foi um dos assassinos mais temidos da cidade de Nova York, trabalhando em parceria com a máfia russa. Um dia, ele decide se aposentar, e neste período tem que lidar com a triste morte de sua esposa. Vítima de uma doença grave, ela já previa a sua própria morte, e deu de presente ao marido um cachorro para cuidar em seu período de luto. No entanto, poucos dias após o funeral, o cachorro é morto por ladrões que roubam o seu carro. John Wick parte em busca de vingança contra estes homens que ele já conhecia muito bem, e que roubaram o último símbolo da mulher que ele amava.",
    "genero": "Gênero: Ação",
    "diretor": "Diretor:  David Leitch, Chad Stahelski",
    "imagem": "img/filme-john-wick.jpeg",
    "banner": "banner-john-wick.jpg"
},
{
    "id": 5,
    "titulo": "Invincible",
    "descricao": "Quando Mark Grayson herda superpoderes ao completar 17 anos, ele se une a seu pai como um dos maiores heróis da Terra. Todos os seus sonhos se tornam realidade - até que um evento chocante muda tudo.",
    "genero": "Gênero: Animação / Comédia",
    "diretor": "Diretor: Jeff Allen, Robert Valley, Haeyoung Jung, Paul Furminger, Youngsoo Kim, Hanhyung Lee, Cory Evans, Osamu Tsuruyama, Jay Baker, Jae Harm, Vinton Heuck, Minsoo Kim, William Ruzicka",
    "imagem": "img/serie-invincible.jpeg",
    "banner": "banner-invincible.png"
},
{
    "id": 6,
    "titulo": "Fallout",
    "descricao": "218 anos após o apocalipse, uma habitante pacífica de um agradável refúgio é forçada a se aventurar na superfície e fica chocada quando descobre a terra devastada que a espera.",
    "genero": "Gênero: Ação / Aventura",
    "diretor": "Diretor: Jonathan Nolan, Clare Kilner, Frederick E.O. Toye, Wayne Che Yip",
    "imagem": "img/serie-fallout.jpg",
    "banner": "banner-fallout.jpeg"
},
{
    "id": 7,
    "titulo": "The Batman",
    "descricao": "Após dois anos espreitando as ruas como Batman, Bruce Wayne se encontra nas profundezas mais sombrias de Gotham City. Com poucos aliados confiáveis, o vigilante solitário se estabelece como a personificação da vingança para a população.",
    "genero": "Gênero: Ação, Suspense",
    "diretor": "Diretor: Matt Reeves",
    "imagem": "img/filme-batman.jpeg",
    "banner": "banner-batman-jpg"
},
{
    "id": 8,
    "titulo": "Entre Montanhas",
    "descricao": "Dois agentes altamente treinados se aproximam à distância após serem enviados para proteger lados opostos de um desfiladeiro misterioso. Quando um mal emerge, eles precisam trabalhar juntos para sobreviver ao que está lá dentro.",
    "genero": "Gênero: Ação, Suspense",
    "diretor": "Diretor: Scott Derrickson",
    "imagem": "img/filme-entre-montanhas.jpg",
    "banner": "banner-entre-montanhas.jpg"
},

]

function carregaFilmes() {
    const containerDestaque = document.getElementById("destaque");
    const containerParaVoce = document.getElementById("paraVoce");

    containerDestaque.innerHTML = "";
    containerParaVoce.innerHTML = "";

    const metade = Math.ceil(dados.length / 2);
    const destaque = dados.slice(0, metade);
    const paraVoce = dados.slice(metade);

    function criarCard(filme) {
        const card = document.createElement("div");
        card.classList.add("col-12", "col-md-3", "d-flex", "justify-content-center", "m-0", "mb-4");

        card.innerHTML = `
            <div class="card border border-0 card-fixo" style="width: 17rem;">
                <a href="pag-detalhes.html?id=${filme.id}" target="blank">
                    <img src="${filme.imagem}" class="card-img-top" style="height: 350px" alt="${filme.titulo}">
                </a>
                <div class="card-body bg-dark">
                    <h2 class="card-title text-danger">${filme.titulo}</h2>
                    <p class="card-text descricao-limitada">${filme.descricao}</p>
                </div>
            </div>
        `;
        return card;
    }

    destaque.forEach(filme => containerDestaque.appendChild(criarCard(filme)));
    paraVoce.forEach(filme => containerParaVoce.appendChild(criarCard(filme)));
}

if (window.location.pathname.includes("index.html") || window.location.pathname === "/" ) {
    carregaFilmes();
}

if (window.location.pathname.includes("pag-detalhes.html")) {
    carregaDetalhes();
}
function carregaDetalhes() {
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get("id"));

    const filme = dados.find(item => item.id === id);

    if (!filme) {
        console.error("Filme não encontrado!");
        return;
    }

    document.getElementById("titulo").textContent = filme.titulo;
    document.getElementById("descricao").textContent = filme.descricao;
    document.getElementById("banner").src = "img/" + filme.banner;
    document.getElementById("banner").alt = filme.titulo + " - banner";
    document.getElementById("genero").textContent = filme.genero || "Gênero não informado";
    document.getElementById("diretor").textContent = filme.diretor || "Diretor não informado";
}