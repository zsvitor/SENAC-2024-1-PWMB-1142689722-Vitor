document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const clientes = JSON.parse(localStorage.getItem("Clientes"));
    const cliente = clientes.find(
      (c) => c.emailCliente === email && c.senhaCliente === password
    );

    if (cliente) {
      const loginCliente = {
        emailCliente: cliente.emailCliente,
        nomeCliente: cliente.nomeCliente,
        urlAvatarCliente: cliente.urlAvatarCliente,
        nomeArquivoAvatarCliente: cliente.nomeArquivoAvatarCliente,
      };
      localStorage.setItem("LoginCliente", JSON.stringify(loginCliente));
      window.location.href = "/Cardapio/cardapio.html";
    } else {
      const funcionarios = JSON.parse(localStorage.getItem("Funcionarios"));
      const funcionario = funcionarios.find(
        (f) => f.emailFuncionario === email && f.senhaFuncionario === password
      );

      if (funcionario) {
        window.location.href = "/Funcionario/funcionario.html";
      } else {
        alert("Atenção: Dados Inválidos ou não Cadastrados.");
      }
    }
  });
