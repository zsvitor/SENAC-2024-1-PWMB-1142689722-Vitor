document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const clientes = JSON.parse(localStorage.getItem('Clientes'));
  const cliente = clientes.find(c => c.emailCliente === email && c.senhaCliente === password);

  if (cliente) {
      const loginCliente = {
          emailCliente: cliente.emailCliente,
          nomeCliente: cliente.nomeCliente,
          urlAvatarCliente: cliente.urlAvatarCliente,
          nomeArquivoAvatarCliente: cliente.nomeArquivoAvatarCliente
      };
      localStorage.setItem('LoginCliente', JSON.stringify(loginCliente));
      window.location.href = '/Vitrine/vitrine.html';
  } else {
      alert('Atenção: você ainda não possui cadastro.');
      window.location.href = '/Vitrine 2/vitrine2.html';
  }
});
