document.addEventListener("DOMContentLoaded", function () {
    const loginCliente = JSON.parse(localStorage.getItem("LoginCliente"));
    const produtos = JSON.parse(localStorage.getItem("Produtos"));
    const vitrine = document.getElementById("vitrine");
  
    let vitrineContent =
      "<table><tr><th>NOME</th><th>DESCRIÇÃO</th><th>PREÇO</th><th></th></tr>";
    produtos.forEach((produto) => {
      vitrineContent += `<tr>
            <td>${produto.nomeProduto}</td>
            <td>${produto.descricaoProduto}</td>
            <td>${produto.valorUnitarioProduto.toFixed(2)}</td>
            <td><img src="${produto.urlImgProduto}" alt="${
        produto.nomeProduto
      }"></td>
        </tr>`;
    });
  
    vitrineContent += "</table>";
  
    vitrine.innerHTML = vitrineContent;
  });
  