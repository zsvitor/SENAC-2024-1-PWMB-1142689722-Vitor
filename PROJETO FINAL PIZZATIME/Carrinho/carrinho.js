document.addEventListener("DOMContentLoaded", function () {
  const carrinho = JSON.parse(localStorage.getItem("CarrinhoCompras")) || [];
  const carrinhoContainer = document.getElementById("carrinho");
  const loginCliente = JSON.parse(localStorage.getItem("LoginCliente"));

  let carrinhoContent =
    "<table><tr><th>ID</th><th>NOME</th><th>VALOR UNITÁRIO</th><th>QUANTIDADE</th><th>TOTAL</th><th></th></tr>";
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
  carrinhoContent += `<tr><td colspan="4">TOTAL</td><td>${totalCompra.toFixed(
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
      if (totalCompra < 29.99) {
        alert(
          "O total do pedido deve ser de pelo menos R$29,99 para finalizar a compra."
        );
        return;
      }

      const numeroCartao = prompt("Informe o número do cartão de crédito");
      const senhaCartao = prompt("Informe a senha do cartão de crédito");
      if (numeroCartao && senhaCartao) {
        alert("Compra efetuada com sucesso");
        const pedidos = JSON.parse(localStorage.getItem("Pedidos")) || [];
        const novoPedido = {
          id: pedidos.length + 1,
          cliente: {
            nome: loginCliente.nomeCliente,
          },
          itens: carrinho,
          total: totalCompra,
          status: "Pendente",
        };
        pedidos.push(novoPedido);
        localStorage.setItem("Pedidos", JSON.stringify(pedidos));

        localStorage.removeItem("CarrinhoCompras");
        window.location.href = "/Cardapio/cardapio.html";
      }
    });

  document
    .getElementById("voltarVitrine")
    .addEventListener("click", function () {
      window.location.href = "/Cardapio/cardapio.html";
    });
});
