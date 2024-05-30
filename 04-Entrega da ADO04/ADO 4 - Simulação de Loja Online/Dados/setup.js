const clientes = [
  {
    emailCliente: "cliente1@example.com",
    senhaCliente: "senha123",
    nomeCliente: "Cliente Um",
    urlAvatarCliente: "/Assets/perfil.jpg",
    nomeArquivoAvatarCliente: "perfil.jpg",
  },
  {
    emailCliente: "cliente2@example.com",
    senhaCliente: "senha123",
    nomeCliente: "Cliente Dois",
    urlAvatarCliente: "/Assets/perfil.jpg",
    nomeArquivoAvatarCliente: "perfil.jpg",
  },
];

const produtos = [
  {
    idProduto: 1,
    nomeProduto: "Smartphone X",
    descricaoProduto: "Smartphone de última geração",
    valorUnitarioProduto: 2999.99,
    qtdEstoqueProduto: 50,
    urlImgProduto: "/Assets/celular.jpg",
    nomeArquivoImgProduto: "celular.jpg",
  },
  {
    idProduto: 2,
    nomeProduto: "Televisão X",
    descricaoProduto: "Televisão de última geração",
    valorUnitarioProduto: 3999.99,
    qtdEstoqueProduto: 50,
    urlImgProduto: "/Assets/tv.jpg",
    nomeArquivoImgProduto: "tv.jpg",
  },
  {
    idProduto: 3,
    nomeProduto: "Fone Bluetooth X",
    descricaoProduto: "Fone Bluetooth de última geração",
    valorUnitarioProduto: 89.99,
    qtdEstoqueProduto: 50,
    urlImgProduto: "/Assets/fone.jpg",
    nomeArquivoImgProduto: "fone.jpg",
  },
  {
    idProduto: 4,
    nomeProduto: "Mouse X",
    descricaoProduto: "Mouse de última geração",
    valorUnitarioProduto: 199.99,
    qtdEstoqueProduto: 50,
    urlImgProduto: "/Assets/mouse.jpg",
    nomeArquivoImgProduto: "mouse.jpg",
  },
  {
    idProduto: 5,
    nomeProduto: "Carregador X",
    descricaoProduto: "Carregador de última geração",
    valorUnitarioProduto: 49.99,
    qtdEstoqueProduto: 50,
    urlImgProduto: "/Assets/carregador.jpg",
    nomeArquivoImgProduto: "carregador.jpg",
  },
];

localStorage.setItem("Clientes", JSON.stringify(clientes));
localStorage.setItem("Produtos", JSON.stringify(produtos));