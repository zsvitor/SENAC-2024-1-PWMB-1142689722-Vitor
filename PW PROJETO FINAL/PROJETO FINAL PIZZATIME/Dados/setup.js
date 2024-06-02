const clientes = [
  {
    emailCliente: "Vitor@gmail.com",
    senhaCliente: "senha123",
    nomeCliente: "Vitor",
    cpfCliente: "123.456.789-00",
    urlAvatarCliente: "https://cdn.icon-icons.com/icons2/2859/PNG/512/avatar_face_man_boy_male_profile_smiley_happy_people_icon_181657.png",
    nomeArquivoAvatarCliente: "perfil.png",
    enderecoCliente: "Rua A, 123, Bairro B, Cidade C, CEP 12345-678",
  },
  {
    emailCliente: "Nicolas@gmail.com",
    senhaCliente: "senha123",
    nomeCliente: "Nicolas",
    cpfCliente: "987.654.321-00",
    urlAvatarCliente: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh-C6XlLDyom3ZA-YU98RZsMIx50qwU8xzlmtiK261de3VveBy0QBgOsFNac3Yb69WsBU&usqp=CAU",
    nomeArquivoAvatarCliente: "perfil.png",
    enderecoCliente: "Avenida X, 456, Bairro Y, Cidade Z, CEP 87654-321",
  },
];

const funcionarios = [
  {
    emailFuncionario: "funcionario@gmail.com",
    senhaFuncionario: "senha123",
    nomeFuncionario: "Funcionário",
    cargoFuncionario: "Geral",
  },
];

const produtos = [
  {
    idProduto: 1,
    nomeProduto: "Mussarela",
    descricaoProduto: "Mussarela, molho e orégano.",
    valorUnitarioProduto: 29.99,
    urlImgProduto: "/assets/itens/mussarela.png",
    nomeArquivoImgProduto: "mussarela.png",
  },
  {
    idProduto: 2,
    nomeProduto: "Frango com Catupiry",
    descricaoProduto: "Frango coberta com catupiry, molho e orégano.",
    valorUnitarioProduto: 29.99,
    urlImgProduto: "/assets/itens/frango_catupiry.png",
    nomeArquivoImgProduto: "frango_catupiry.png",
  },
  {
    idProduto: 3,
    nomeProduto: "Calabresa com Cebola",
    descricaoProduto: "Calabresa coberta com cebola, molho e orégano.",
    valorUnitarioProduto: 29.99,
    urlImgProduto: "/assets/itens/calabresa_cebola.png",
    nomeArquivoImgProduto: "calabresa_cebola.png",
  },
  {
    idProduto: 4,
    nomeProduto: "Dois Queijos",
    descricaoProduto: "Catupiry coberto com mussarela, molho e orégano.",
    valorUnitarioProduto: 29.99,
    urlImgProduto: "/assets/itens/dois_queijos.png",
    nomeArquivoImgProduto: "dois_queijos.png",
  },
  {
    idProduto: 5,
    nomeProduto: "Escarola",
    descricaoProduto: "Escarola coberta com mussarela.",
    valorUnitarioProduto: 29.99,
    urlImgProduto: "/assets/itens/escarola.png",
    nomeArquivoImgProduto: "escarola.png",
  },
  {
    idProduto: 6,
    nomeProduto: "Calabresa com Catupiry",
    descricaoProduto: "Calabresa coberta com catupiry, molho e orégano.",
    valorUnitarioProduto: 29.99,
    urlImgProduto: "/assets/itens/calabresa_catupiry.png",
    nomeArquivoImgProduto: "calabresa_catupiry.png",
  },
  {
    idProduto: 7,
    nomeProduto: "Portuguesa",
    descricaoProduto:
      "Presunto, ervilha, milho coberto com mussarela, molho e orégano.",
    valorUnitarioProduto: 29.99,
    urlImgProduto: "/assets/itens/portuguesa.png",
    nomeArquivoImgProduto: "portuguesa.png",
  },
  {
    idProduto: 8,
    nomeProduto: "Brócolis",
    descricaoProduto: "Brócolis coberto com mussarela, molho e orégano.",
    valorUnitarioProduto: 29.99,
    urlImgProduto: "/assets/itens/brocolis.png",
    nomeArquivoImgProduto: "brocolis.png",
  },
  {
    idProduto: 9,
    nomeProduto: "Chocolate com Morango",
    descricaoProduto: "Chocolate com morangos.",
    valorUnitarioProduto: 31.99,
    urlImgProduto: "/assets/itens/chocolate.png",
    nomeArquivoImgProduto: "chocolate.png",
  },
  {
    idProduto: 10,
    nomeProduto: "Romeu e Julieta",
    descricaoProduto: "Mussarela coberta com goiabada.",
    valorUnitarioProduto: 31.99,
    urlImgProduto: "/assets/itens/romeu_julieta.png",
    nomeArquivoImgProduto: "romeu_julieta.png",
  },
  {
    idProduto: 11,
    nomeProduto: "Coca Cola",
    descricaoProduto: "Refrigerante Coca Cola 2L.",
    valorUnitarioProduto: 11.99,
    urlImgProduto: "/assets/itens/cocacola.png",
    nomeArquivoImgProduto: "cocacola.png",
  },
  {
    idProduto: 12,
    nomeProduto: "Guaraná Antarctica",
    descricaoProduto: "Refrigerante Guaraná Antarctica 2L.",
    valorUnitarioProduto: 11.99,
    urlImgProduto: "/assets/itens/guarana-logo.png",
    nomeArquivoImgProduto: "guarana-logo.png",
  },
  {
    idProduto: 13,
    nomeProduto: "Pepsi",
    descricaoProduto: "Refrigerante Pepsi 2L.",
    valorUnitarioProduto: 11.99,
    urlImgProduto: "/assets/itens/pepsi-logo.jpg",
    nomeArquivoImgProduto: "pepsi-logo.jpg",
  },
  {
    idProduto: 14,
    nomeProduto: "Sprite",
    descricaoProduto: "Refrigerante Sprite 2L.",
    valorUnitarioProduto: 11.99,
    urlImgProduto: "/assets/itens/sprite-logo.png",
    nomeArquivoImgProduto: "sprite-logo.pngg",
  },
];

localStorage.setItem("Clientes", JSON.stringify(clientes));
localStorage.setItem("Funcionarios", JSON.stringify(funcionarios));
localStorage.setItem("Produtos", JSON.stringify(produtos));
