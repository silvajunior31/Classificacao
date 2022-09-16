//           chave.  valor.
var rafa = {
  nome: "Rafa",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0,
  zerar: 0
};
var paulo = {
  nome: "Paulo",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0,
  zerar: 0
};
var josé = { nome: "José", vitorias: 0, empates: 0, derrotas: 0, pontos: 0 };
//var zerar = { nome: "Zerar", vitorias: 0, empates: 0, derrotas: 0, pontos: 0, zerar: 0 };

function calculaPontos(jogador) {
  var pontos = jogador.vitorias * 3 + jogador.empates;
  return pontos;
  //var zerar = jogador.zerar * 3 + jogador.empates;
  //return pontos;
}

rafa.pontos = calculaPontos(rafa);
paulo.pontos = calculaPontos(paulo);
josé.pontos = calculaPontos(josé);
//zerar.pontos = calculaPontos(zerar);

var jogadores = [rafa, paulo, josé];

function exibeJogadoresNaTela(jogadores) {
  var elemento = "";
  for (var i = 0; i < jogadores.length; i++) {
    elemento += "<tr><td>" + jogadores[i].nome + "</td>";
    elemento += "<td>" + jogadores[i].vitorias + "</td>";
    elemento += "<td>" + jogadores[i].empates + "</td>";
    elemento += "<td>" + jogadores[i].derrotas + "</td>";
    elemento += "<td>" + jogadores[i].pontos + "</td>";

    //elemento += "<td>" + jogadores[i].zerar + "</td>";

    elemento +=
      "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
    elemento +=
      "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>";
    elemento +=
      "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>";
    elemento +=
      "<td><button onClick='zerarPontos(" + i + ")'>Pontos</button></td>";
    elemento += "</tr>";
  }

  var tabelaJogadores = document.getElementById("tabelaJogadores");
  tabelaJogadores.innerHTML = elemento;
}

exibeJogadoresNaTela(jogadores);

function adicionarVitoria(i) {
  var jogador = jogadores[i];
  jogador.vitorias++;
  jogador.pontos = calculaPontos(jogador);
  exibeJogadoresNaTela(jogadores);
}

function adicionarEmpate(i) {
  var jogador = jogadores[i];
  jogador.empates++;
  jogador.pontos = calculaPontos(jogador);
  exibeJogadoresNaTela(jogadores);
}

function adicionarDerrota(i) {
  var jogador = jogadores[i];
  jogador.derrotas++;
  exibeJogadoresNaTela(jogadores);
}

function zerarPontos(i) {
  jogadores[i].vitorias = 0;
  jogadores[i].derrotas = 0;
  jogadores[i].empates = 0;
  jogadores[i].pontos = 0;
  exibeJogadoresNaTela(jogadores);
}
// var zerar = jogador.vitorias * 0 + jogador.empates;
// return pontos;
// rafa.pontos = 0;
// paulo.pontos = 0;
// josé.pontos = 0;
// var jogador = jogadores[i];
// jogador.zerar++;
//exibeJogadoresNaTela(jogadores);
//}