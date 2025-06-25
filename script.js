// script.js
const filmes = {
  genero1: [
    { nome: 'Filme 1', imagem: 'imagem1.jpg', classificacao: 'Livre', ano: 2020, duracao: '1h30min', trailer: 'linkfilme1' },
    { nome: 'Filme 2', imagem: 'imagem2.jpg', classificacao: '10', ano: 2021, duracao: '1h45min', trailer: 'linkfilme2' },
    { nome: 'Filme 3', imagem: 'imagem3.jpg', classificacao: '12', ano: 2019, duracao: '2h', trailer: 'linkfilme3' },
    { nome: 'Filme 4', imagem: 'imagem4.jpg', classificacao: '14', ano: 2022, duracao: '1h40min', trailer: 'linkfilme4' },
    { nome: 'Filme 5', imagem: 'imagem5.jpg', classificacao: '16', ano: 2023, duracao: '1h50min', trailer: 'linkfilme5' },
  ],
  genero2: [
    { nome: 'Filme 6', imagem: 'imagem6.jpg', classificacao: 'Livre', ano: 2020, duracao: '1h30min', trailer: 'linkfilme6' },
    { nome: 'Filme 7', imagem: 'imagem7.jpg', classificacao: '10', ano: 2021, duracao: '1h45min', trailer: 'linkfilme7' },
    { nome: 'Filme 8', imagem: 'imagem8.jpg', classificacao: '12', ano: 2019, duracao: '2h', trailer: 'linkfilme8' },
    { nome: 'Filme 9', imagem: 'imagem9.jpg', classificacao: '14', ano: 2022, duracao: '1h40min', trailer: 'linkfilme9' },
    { nome: 'Filme 10', imagem: 'imagem10.jpg', classificacao: '16', ano: 2023, duracao: '1h50min', trailer: 'linkfilme10' },
  ],
  genero3: [
    { nome: 'Filme 11', imagem: 'imagem11.jpg', classificacao: 'Livre', ano: 2020, duracao: '1h30min', trailer: 'linkfilme11' },
    { nome: 'Filme 12', imagem: 'imagem12.jpg', classificacao: '10', ano: 2021, duracao: '1h45min', trailer: 'linkfilme12' },
    { nome: 'Filme 13', imagem: 'imagem13.jpg', classificacao: '12', ano: 2019, duracao: '2h', trailer: 'linkfilme13' },
    { nome: 'Filme 14', imagem: 'imagem14.jpg', classificacao: '14', ano: 2022, duracao: '1h40min', trailer: 'linkfilme14' },
    { nome: 'Filme 15', imagem: 'imagem15.jpg', classificacao: '16', ano: 2023, duracao: '1h50min', trailer: 'linkfilme15' },
  ]
};

let idadeUsuario = 0;

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
