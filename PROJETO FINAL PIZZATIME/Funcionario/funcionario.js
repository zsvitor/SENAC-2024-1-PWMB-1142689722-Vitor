document.addEventListener("DOMContentLoaded", function () {
  const pedidosContainer = document.getElementById("pedidos");
  const clientesContainer = document.getElementById("clientes");
  const pedidos = JSON.parse(localStorage.getItem("Pedidos")) || [];
  const clientes = JSON.parse(localStorage.getItem("Clientes")) || [];

  function renderPedidos() {
    if (pedidos.length === 0) {
      pedidosContainer.innerHTML =  `<p class="avisopedido">Nenhum pedido disponível.</p>`;
      return;
    }

    let pedidosContent =
      "<table><tr><th>PEDIDO</th><th>CLIENTE</th><th>ITENS</th><th>TOTAL</th><th>STATUS</th></tr>";

    pedidos.forEach((pedido) => {
      const itens = pedido.itens
        .map(
          (item) =>
            `${item.nomeProduto} (Quantidade: ${item.quantidade}, Total: R$${(
              item.valorUnitarioProduto * item.quantidade
            ).toFixed(2)})`
        )
        .join("<br>");
      pedidosContent += `<tr>
            <td>${pedido.id}</td>
            <td>${pedido.cliente.nome}</td>
            <td>${itens}</td>
            <td>R$${pedido.total.toFixed(2)}</td>
            <td>${pedido.status}</td>
            <td>
              <div class="action-buttons">
                ${
                  pedido.status === "Pendente"
                    ? `<button data-id="${pedido.id}" class="concluir">Concluir</button>`
                    : " "
                }
                <button data-id="${pedido.id}" class="excluir">Excluir</button>
              </div>
            </td>
        </tr>`;
    });
    pedidosContent += "</table>";

    pedidosContainer.innerHTML = pedidosContent;

    document.querySelectorAll(".concluir").forEach((button) => {
      button.addEventListener("click", function () {
        const id = parseInt(this.getAttribute("data-id"));
        const pedidoIndex = pedidos.findIndex((p) => p.id === id);
        if (pedidoIndex !== -1) {
          pedidos[pedidoIndex].status = "Concluído";
          localStorage.setItem("Pedidos", JSON.stringify(pedidos));
          renderPedidos();
        }
      });
    });

    document.querySelectorAll(".excluir").forEach((button) => {
      button.addEventListener("click", function () {
        const id = parseInt(this.getAttribute("data-id"));
        const pedidoIndex = pedidos.findIndex((p) => p.id === id);
        if (pedidoIndex !== -1) {
          pedidos.splice(pedidoIndex, 1);
          localStorage.setItem("Pedidos", JSON.stringify(pedidos));
          renderPedidos();
        }
      });
    });
  }

  function renderClientes() {
    if (clientes.length === 0) {
      clientesContainer.innerHTML = `<p class="avisocliente">Nenhum cliente disponível.</p>`;
      return;
    }

    let clientesContent = "<table><tr><th>NOME</th><th>CPF</th><th>EMAIL</th><th>ENDEREÇO</th><th>PERFIL</th></tr>";

    clientes.forEach((cliente) => {
      clientesContent += `<tr>
            <td>${cliente.nomeCliente}</td>
            <td>${cliente.cpfCliente}</td>
            <td>${cliente.emailCliente}</td>
            <td>${cliente.enderecoCliente}</td>
            <td><img class = "foto-perfil" src="${cliente.urlAvatarCliente}" alt="Avatar"></td>
        </tr>`;
    });
    clientesContent += "</table>";

    clientesContainer.innerHTML = clientesContent;
  }

  renderPedidos();
  renderClientes();

  const limparPedidosBtn = document.getElementById("limparPedidos");
  limparPedidosBtn.addEventListener("click", function () {
    if (confirm("Você tem certeza que deseja limpar todos os pedidos?")) {
      localStorage.removeItem("Pedidos");
      pedidos.length = 0;
      renderPedidos();
    }
  });

  const sairBtn = document.getElementById("sair");
  sairBtn.addEventListener("click", function () {
    window.location.href = "/Inicio/inicio.html";
  });
});
