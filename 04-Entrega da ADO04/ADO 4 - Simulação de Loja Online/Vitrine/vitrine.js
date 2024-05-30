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

  if (loginCliente) {
    vitrineContent += `
          <div class="profile-container">
              <img class = "foto-perfil" src="${
                loginCliente.urlAvatarCliente
              }" alt="${loginCliente.nomeCliente}">
              <p>${loginCliente.nomeCliente}</p>
          </div>
          <select id="selecionarProduto">
              ${produtos
                .map(
                  (produto) =>
                    `<option value="${produto.idProduto}">${produto.nomeProduto}</option>`
                )
                .join("")}
          </select>
          <input type="number" id="quantidade" min="1" max="100">
          <button id="adicionarCarrinho">Adicionar ao Carrinho de Compras</button>
      `;
  }

  vitrine.innerHTML = vitrineContent;

  document
    .getElementById("adicionarCarrinho")
    .addEventListener("click", function () {
      const idProduto = parseInt(
        document.getElementById("selecionarProduto").value
      );
      const quantidade = parseInt(document.getElementById("quantidade").value);
      const produto = produtos.find((p) => p.idProduto === idProduto);
      const carrinho =
        JSON.parse(localStorage.getItem("CarrinhoCompras")) || [];
      carrinho.push({ ...produto, quantidade });
      localStorage.setItem("CarrinhoCompras", JSON.stringify(carrinho));
      window.location.href = "/Carrinho/carrinho.html";
    });
});
