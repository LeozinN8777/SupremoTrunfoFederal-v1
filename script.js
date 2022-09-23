var carta1 = {
  nome: "Bolsonaro",
  imagem: "https://pbs.twimg.com/media/EqbHa7NXUAIWSxd.jpg",
  atributos: {
    Liberal: 80,
    Corrupcao: 40,
    SexAppeal: 100,
    Lábia: 13
  }
};

var carta2 = {
  nome: "Lula",
  imagem:
    "https://extra.globo.com/incoming/18847929-4b9-f67/w976h550-PROP/lula-meme.jpg",
  atributos: {
    Liberal: 25,
    Corrupcao: 100,
    SexAppeal: 22,
    Lábia: 85
  }
};

var carta3 = {
  nome: "Ciro gomes",
  imagem: "https://c.tenor.com/hxfzxdDLHaIAAAAC/ciro-gomes-cirao.gif",
  atributos: {
    Liberal: 40,
    Corrupcao: 10,
    SexAppeal: 5,
    Lábia: 70
  }
};

var carta4 = {
  nome: "Edurado Leite",
  imagem: "https://istoe.com.br/wp-content/uploads/2016/01/as_3374149447230605.jpg",
  atributos: {
    Liberal: 75,
    Corrupcao: 0,
    SexAppeal: 85,
    Lábia: 50
  }
};

var carta5 = {
  nome: "Tebet",
  imagem: "https://midias.correiobraziliense.com.br/_midias/jpg/2022/09/19/675x450/1_tebet_em_sabatina_do_estadao_1909-26463837.jpg?20220919165510?20220919165510",
  atributos: {
    Liberal: 30,
    Corrupcao: 5,
    SexAppeal: 55,
    Lábia: 75
  }
};

var carta6 = {
  nome: "Mamãe Falei",
  imagem: "https://c.tenor.com/h-R7tzNDh6AAAAAC/mouseeasy-oyote.gif",
  atributos: {
    Liberal: 90,
    Corrupcao: 15,
    SexAppeal: 88,
    Lábia: 0
  }
};

var carta7 = {
  nome: "Kim Kataguiri",
  imagem: "https://cdn.discordapp.com/attachments/761354124804751381/1021993507163996230/unknown.png",
  atributos: {
    Liberal: 83,
    Corrupcao: 6,
    SexAppeal: 3,
    Lábia: 72
  }
};

var carta8 = {
  nome: "Soraya",
  imagem: "https://veja.abril.com.br/wp-content/uploads/2022/08/000_32H98JR.jpg",
  atributos: {
    Liberal: 10,
    Corrupcao: 3,
    SexAppeal: 51,
    Lábia: 35
  }
};

var carta9 = {
  nome: "Maria do rosário",
  imagem: "https://feijoadasimulator.top/br/sources/492.png",
  atributos: {
    Liberal: 13,
    Corrupcao: 87,
    SexAppeal: 3,
    Lábia: 4
  }
};

var carta10 = {
  nome: "Manuela D'ávila",
  imagem: "https://veja.abril.com.br/wp-content/uploads/2018/08/brasil-eleicoes-manuela-davila-pcdob-20180305-0003.jpg",
  atributos: {
    Liberal: 9,
    Corrupcao: 56,
    SexAppeal: 78,
    Lábia: 32
  }
};

var carta11 = {
  nome: "Onyx",
  imagem: "https://imagens.ebc.com.br/wkNISpPeS5PhHPQ68ntfy-uXD0A=/390x240/smart/https://agenciabrasil.ebc.com.br/sites/default/files/thumbnails/image/vac_abr_0802220073.jpg?itok=7QqT-tHX",
  atributos: {
    Liberal: 43,
    Corrupcao: 69,
    SexAppeal: -1,
    Lábia: 5
  }
};

var carta12 = {
  nome: "Lourdes Melo",
  imagem: "https://classic.exame.com/wp-content/uploads/2022/08/lourdesmelopcodebate.jpg?quality=70&strip=info&w=1024",
  atributos: {
    Liberal: 3,
    Corrupcao: 51,
    SexAppeal: -2,
    Lábia: 21
  }
};

var carta13 = {
  nome: "Nikolas Ferreira",
  imagem: "https://s.yimg.com/ny/api/res/1.2/eCtZA1hOIX0eXVRjMnv77A--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQ3NA--/https://s.yimg.com/os/creatr-uploaded-images/2022-07/aba5f8b0-fd1e-11ec-ade0-300339cdd781",
  atributos: {
    Liberal: 68,
    Corrupcao: 48,
    SexAppeal: 17,
    Lábia: 74
  }
};

var carta14 = {
  nome: "Michel Temer",
  imagem: "https://images.uncyc.org/pt/a/ad/Temer_Conde_Dr%C3%A1cula.jpg",
  atributos: {
    Liberal: 32,
    Corrupcao: 82,
    SexAppeal: 3,
    Lábia: 2
  }
};

var carta15 = {
  nome: "Eduardo Cunha",
  imagem: "https://www.infomoney.com.br/wp-content/uploads/2019/06/eduardo-cunha-3.jpg?fit=900%2C599&quality=50&strip=all",
  atributos: {
    Liberal: 11,
    Corrupcao: 95,
    SexAppeal: 4,
    Lábia: 73
  }
};

var carta16 = {
  nome: "Cabo Daciolo",
  imagem: "https://spnoticia.com.br/uploads/3a4023a1e78b28740a16abeeda63640a.jpg",
  atributos: {
    Liberal: 33,
    Corrupcao: 8,
    SexAppeal: 9, // Gabriel **JESUS**
    Lábia: 65
  }
};

var cartas = [carta1, carta2, carta3, carta4, carta5, carta6, carta7, carta8, carta9, carta10, carta11, carta12, carta13, carta14, carta15, carta16];
var cartasJogador = [];
var cartasMaquina = [];
var cartaMaquina;
var cartaJogador;

function iniciar() {
  for (var i = 0; i < cartas.length; i++) {
    var dado = parseInt(Math.random() * 2);
    if (dado == 0) {
      cartasJogador.push(cartas[i]);
    } else {
      cartasMaquina.push(cartas[i]);
    }
  }

  while (cartasMaquina.length > cartasJogador.length) {
    cartasJogador.push(cartasMaquina[0]);
    cartasMaquina.splice(0, 1);
  }
  while (cartasMaquina.length < cartasJogador.length) {
    cartasMaquina.push(cartasJogador[0]);
    cartasJogador.splice(0, 1);
  }

  document.getElementById("btnSortear").disabled = false;
  document.getElementById("btnJogar").disabled = true;
}

function exibirCartaJogador() {
  var divCartaJogador = document.getElementById("carta-jogador");
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
  var moldura =
    '<img src="https://cdn.discordapp.com/attachments/764118871640637491/1022615899263475793/unknown.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div i='opcoes' class='carta-status'>";

  var opcoesTxt = "";
  for (var atributo in cartaJogador.atributos) {
    opcoesTxt +=
      "<input type='radio' id='" +
      atributo +
      "' name='atributo' value='" +
      atributo +
      "'> <label for='" +
      atributo +
      "'> " +
      atributo +
      "" +
      " </label> <br>";
  }
  var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;

  divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTxt + "</div>";
}

function exibirCartaMaquina() {
  var divCartaMaquina = document.getElementById("carta-maquina");
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
  var moldura =
    '<img src="https://cdn.discordapp.com/attachments/764118871640637491/1022615899263475793/unknown.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div i='opcoes' class='carta-status'>";

  var opcoesTxt = "";
  for (var atributo in cartaMaquina.atributos) {
    opcoesTxt +=
      "<p name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaMaquina.atributos[atributo] +
      "</p>";
  }
  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;

  divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTxt + "</div>";

  // exibir valores dos atributos do jogador;

  var divCartaJogador = document.getElementById("carta-jogador");
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
  var moldura =
    '<img src="https://cdn.discordapp.com/attachments/764118871640637491/1022615899263475793/unknown.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div i='opcoes' class='carta-status'>";

  var opcoesTxt = "";
  for (var atributo in cartaJogador.atributos) {
    opcoesTxt +=
      "<input type='radio' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaJogador.atributos[atributo] +
      "<br>";
  }
  var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;

  divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTxt + "</div>";
}

function sortearCarta() {
  finalizar()
  restartRound();
  var iCartaMaquina = parseInt(Math.random() * cartasMaquina.length - 1);
  cartaMaquina = cartasMaquina[iCartaMaquina];

  var iCartaJogador = parseInt(Math.random() * cartasJogador.length - 1);
  cartaJogador = cartasJogador[iCartaJogador];

  console.log(cartaJogador);
  console.log(cartaMaquina);
  exibirCartaJogador();
  playerCards();

  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;
}

function obterAtributo() {
  var radioAtributos = document.getElementsByName("atributo");
  for (var i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked == true) {
      return radioAtributos[i].value;
    }
  }
}

function ganhou() {
  var indexCartaMaquina = cartasMaquina.indexOf(cartaMaquina)

  cartasJogador.push(cartaMaquina);
  cartasMaquina.splice(indexCartaMaquina, 1);
  
  console.log(`Ganhou Jogador.length=${cartasJogador.length}`);
  playerCards()

  document.getElementById("btnSortear").disabled = false;
}

function perdeu() {
  var indexCartaJogador = cartasJogador.indexOf(cartaJogador)

  cartasMaquina.push(cartaJogador);
  cartasJogador.splice(indexCartaJogador, 1);
  
  console.log(`Perdeu Maquina.length=${cartasMaquina.length}`);
  playerCards()

  document.getElementById("btnSortear").disabled = false;
}

function jogar() {
  var atributoSelecionado = obterAtributo();
  var divResultado = document.getElementById("resultado");

  var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
  var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];

  if (valorCartaJogador > valorCartaMaquina) {
    htmlResultado =
      "<p class='resultado-final'>Venceu, agora a carta da máquina é sua! *Sorteie uma nova carta.</>";
    ganhou();
    divResultado.innerHTML = htmlResultado;
    document.getElementById("btnJogar").disabled = true;
    exibirCartaMaquina();
  } else if (valorCartaMaquina > valorCartaJogador) {
    htmlResultado =
      "<p class='resultado-final'>Perdeu, agora a sua carta é da máquina. *Sorteie uma nova carta.</>";
    perdeu();
    divResultado.innerHTML = htmlResultado;
    document.getElementById("btnJogar").disabled = true;
    exibirCartaMaquina();
  } else {
    alert("Selecione um atributo para jogar.")
  }
}

function finalizar() {
  if (cartasJogador == 0) {
    alert("Suas cartas acabaram e voce perdeu :( CLIQUE OK PARA JOGAR NOVAMENTE");
    location.reload();
  } else if (cartasMaquina == 0) {
    alert("Parabens, as cartas da máquina acabaram e voce venceu :D CLIQUE OK PARA JOGAR NOVAMENTE");
    location.reload();
  }
}

function restartRound() {
  var divCartaMaquina = document.getElementById("carta-maquina");
  divCartaMaquina.style.backgroundImage = `url()`;
  var tagHTML = "<div i='opcoes' class='carta-status'>";
  var opcoesTxt = "";
  var nome = `<p class="carta-subtitle"></p>`;
  var moldura =
    '<img src="https://cdn.discordapp.com/attachments/764118871640637491/1022615899263475793/unknown.png" style=" width: inherit; height: inherit; position: absolute;">';

  divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTxt + "</div>";

  //

  var divCartaJogador = document.getElementById("carta-jogador");
  divCartaJogador.style.backgroundImage = `url()`;
  var tagHTML = "<div i='opcoes' class='carta-status'>";
  var opcoesTxt = "";
  var nome = `<p class="carta-subtitle"></p>`;
  var moldura =
    '<img src="https://cdn.discordapp.com/attachments/764118871640637491/1022615899263475793/unknown.png" style=" width: inherit; height: inherit; position: absolute;">';

  divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTxt + "</div>";

}

function playerCards() {
  let title = "<h4> Suas Cartas; </h4>"
  let yourCards = ""
  var divPlayerCards = document.getElementById("playerCards");
  for (let i= 0; i < cartasJogador.length; i++) {
    yourCards = yourCards + cartasJogador[i].nome + "<br>" ;
  }

  divPlayerCards.innerHTML = title + `<h5> ${yourCards} </h5>`;

}

iniciar();

// adc regras, bug duplicadas, 
