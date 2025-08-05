const apiUrl = 'http://localhost:3006/produtos'; // ajuste a porta se necessário

const form = document.getElementById('produto-form');
const tabela = document.getElementById('tabela-produtos');

function carregarProdutos() {
  fetch(apiUrl)
    .then(res => res.json())
    .then(produtos => {
      tabela.innerHTML = '';
      produtos.forEach(p => {
        const linha = document.createElement('tr');
        linha.innerHTML = `
          <td>${p.id}</td>
          <td>${p.nome}</td>
          <td>${p.preco}</td>
          <td>${p.estoque}</td>
          <td>
            <button onclick="editar(${p.id}, '${p.nome}', '${p.preco}', '${p.estoque}')">✏️</button>
            <button onclick="excluir(${p.id})">🗑️</button>
          </td>
        `;
        tabela.appendChild(linha);
      });
    });
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const id = document.getElementById('produto-id').value;
  const nome = document.getElementById('nome').value;
  const preco = document.getElementById('preco').value;
  const estoque = document.getElementById('estoque').value;

  const produto = { nome, preco, estoque };

  const metodo = id ? 'PUT' : 'POST';
  const url = id ? `${apiUrl}/${id}` : apiUrl;

  fetch(url, {
    method: metodo,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(produto)
  })
    .then(() => {
      form.reset();
      carregarProdutos();
    });
});

function editar(id, nome, preco, estoque) {
  document.getElementById('produto-id').value = id;
  document.getElementById('nome').value = nome;
  document.getElementById('preco').value = preco;
  document.getElementById('estoque').value = estoque;
}

function excluir(id) {
  if (confirm('Tem certeza que deseja excluir?')) {
    fetch(`${apiUrl}/${id}`, {
      method: 'DELETE'
    }).then(() => carregarProdutos());
  }
}

carregarProdutos();