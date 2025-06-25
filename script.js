// script.js
const filmes = {
  genero1: [
    {
      nome: "Encanto",
      imagem: "https://upload.wikimedia.org/wikipedia/pt/9/9e/Encanto_poster.jpg",
      classificacao: "Livre",
      ano: 2021,
      duracao: "1h39min",
      sinopse: "Encanto conta a história da família Madrigal, que vive escondida nas montanhas da Colômbia, em uma casa mágica. Cada criança recebe um dom mágico — exceto Mirabel, que precisa encontrar seu lugar na família.",
      trailer: "https://www.youtube.com/embed/CaimKeDcudo"
    },
    { nome: 'Filme 2', imagem: 'imagem2.jpg', classificacao: '10', ano: 2021, duracao: '1h45min', sinopse: 'Sinopse do Filme 2', trailer: 'linkfilme2' },
    { nome: 'Filme 3', imagem: 'imagem3.jpg', classificacao: '12', ano: 2019, duracao: '2h', sinopse: 'Sinopse do Filme 3', trailer: 'linkfilme3' },
    { nome: 'Filme 4', imagem: 'imagem4.jpg', classificacao: '14', ano: 2022, duracao: '1h40min', sinopse: 'Sinopse do Filme 4', trailer: 'linkfilme4' },
    { nome: 'Filme 5', imagem: 'imagem5.jpg', classificacao: '16', ano: 2023, duracao: '1h50min', sinopse: 'Sinopse do Filme 5', trailer: 'linkfilme5' }
  ],
  genero2: [
    { nome: 'Filme 6', imagem: 'imagem6.jpg', classificacao: 'Livre', ano: 2020, duracao: '1h30min', sinopse: 'Sinopse do Filme 6', trailer: 'linkfilme6' },
    { nome: 'Filme 7', imagem: 'imagem7.jpg', classificacao: '10', ano: 2021, duracao: '1h45min', sinopse: 'Sinopse do Filme 7', trailer: 'linkfilme7' },
    { nome: 'Filme 8', imagem: 'imagem8.jpg', classificacao: '12', ano: 2019, duracao: '2h', sinopse: 'Sinopse do Filme 8', trailer: 'linkfilme8' },
    { nome: 'Filme 9', imagem: 'imagem9.jpg', classificacao: '14', ano: 2022, duracao: '1h40min', sinopse: 'Sinopse do Filme 9', trailer: 'linkfilme9' },
    { nome: 'Filme 10', imagem: 'imagem10.jpg', classificacao: '16', ano: 2023, duracao: '1h50min', sinopse: 'Sinopse do Filme 10', trailer: 'linkfilme10' }
  ],
  genero3: [
    { nome: 'Filme 11', imagem: 'imagem11.jpg', classificacao: 'Livre', ano: 2020, duracao: '1h30min', sinopse: 'Sinopse do Filme 11', trailer: 'linkfilme11' },
    { nome: 'Filme 12', imagem: 'imagem12.jpg', classificacao: '10', ano: 2021, duracao: '1h45min', sinopse: 'Sinopse do Filme 12', trailer: 'linkfilme12' },
    { nome: 'Filme 13', imagem: 'imagem13.jpg', classificacao: '12', ano: 2019, duracao: '2h', sinopse: 'Sinopse do Filme 13', trailer: 'linkfilme13' },
    { nome: 'Filme 14', imagem: 'imagem14.jpg', classificacao: '14', ano: 2022, duracao: '1h40min', sinopse: 'Sinopse do Filme 14', trailer: 'linkfilme14' },
    { nome: 'Filme 15', imagem: 'imagem15.jpg', classificacao: '16', ano: 2023, duracao: '1h50min', sinopse: 'Sinopse do Filme 15', trailer: 'linkfilme15' }
  ]
};

let idadeUsuario = 0;

function inserirNome() {
  let nomeUsuario = prompt("Qual o seu nome?");
  let elemento = document.querySelector("#nome-usuario");
  elemento.textContent = `Olá, ${nomeUsuario}! Espero te ajudar a escolher um filme!`;
}

function validarIdade() {
  const input = document.getElementById('idade');
  idadeUsuario = parseInt(input.value);
  if (!isNaN(idadeUsuario) && idadeUsuario >= 0) {
    document.getElementById('menu-generos').classList.remove('oculto');
  } else {
    alert('Por favor, digite uma idade válida.');
  }
}

function mostrarFilmes(genero) {
  const container = document.getElementById('conteudo-filmes');
  container.innerHTML = '';

  filmes[genero].forEach(filme => {
    if (verificarClassificacao(filme.classificacao)) {
      const div = document.createElement('div');
      div.classList.add('filme');

      div.innerHTML = `
        <h2>${filme.nome}</h2>
        <img src="${filme.imagem}" alt="${filme.nome}" />
        <p><strong>Classificação:</strong> ${filme.classificacao} anos</p>
        <p><strong>Ano:</strong> ${filme.ano}</p>
        <p><strong>Duração:</strong> ${filme.duracao}</p>
        <p><strong>Sinopse:</strong> ${filme.sinopse}</p>
        <iframe src="${filme.trailer}" allowfullscreen></iframe>
      `;

      container.appendChild(div);
    }
  });
}

function verificarClassificacao(classificacao) {
  if (classificacao === 'Livre') return true;
  return idadeUsuario >= parseInt(classificacao);
}

inserirNome();
