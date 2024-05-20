document.addEventListener("DOMContentLoaded", function () {
  const carrinho = JSON.parse(localStorage.getItem("CarrinhoCompras")) || [];
  const carrinhoContainer = document.getElementById("carrinho");

  let carrinhoContent =
    "<table><tr><th>ID</th><th>Nome</th><th>Valor Unitário</th><th>Quantidade</th><th>Total</th><th>Remover</th></tr>";
  let totalCompra = 0;
  carrinho.forEach((item, index) => {
    const totalItem = item.valorUnitarioProduto * item.quantidade;
    totalCompra += totalItem;
    carrinhoContent += `<tr>
          <td>${item.idProduto}</td>
          <td>${item.nomeProduto}</td>
          <td>${item.valorUnitarioProduto.toFixed(2)}</td>
          <td>${item.quantidade}</td>
          <td>${totalItem.toFixed(2)}</td>
          <td><button data-index="${index}" class="remover">Remover</button></td>
      </tr>`;
  });
  carrinhoContent += `<tr><td colspan="4">Total</td><td>${totalCompra.toFixed(
    2
  )}</td><td></td></tr></table>`;

  carrinhoContainer.innerHTML = carrinhoContent;

  document.querySelectorAll(".remover").forEach((button) => {
    button.addEventListener("click", function () {
      const index = this.getAttribute("data-index");
      carrinho.splice(index, 1);
      localStorage.setItem("CarrinhoCompras", JSON.stringify(carrinho));
      window.location.reload();
    });
  });

  document
    .getElementById("finalizarCompra")
    .addEventListener("click", function () {
      const numeroCartao = prompt("Informe o número do cartão de crédito");
      const senhaCartao = prompt("Informe a senha do cartão de crédito");
      if (numeroCartao && senhaCartao) {
        alert("Compra efetuada com sucesso");
        localStorage.removeItem("CarrinhoCompras");
        window.location.href = "vitrine.html";
      }
    });

  document
    .getElementById("voltarVitrine")
    .addEventListener("click", function () {
      window.location.href = "vitrine.html";
    });
});
