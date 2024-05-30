document.addEventListener("DOMContentLoaded", function () {
  const loginCliente = JSON.parse(localStorage.getItem("LoginCliente"));
  const produtos = JSON.parse(localStorage.getItem("Produtos"));
  const vitrine = document.getElementById("vitrine");

  let vitrineContent =
    "<table><tr><th>Nome</th><th>Descrição</th><th>Preço</th><th>Estoque</th><th>Imagem</th></tr>";
  produtos.forEach((produto) => {
    vitrineContent += `<tr>
          <td>${produto.nomeProduto}</td>
          <td>${produto.descricaoProduto}</td>
          <td>${produto.valorUnitarioProduto.toFixed(2)}</td>
          <td>${produto.qtdEstoqueProduto}</td>
          <td><img src="${produto.urlImgProduto}" alt="${
      produto.nomeProduto
    }"></td>
      </tr>`;
  });
  vitrineContent += "</table>";
  vitrine.innerHTML = vitrineContent;
});
