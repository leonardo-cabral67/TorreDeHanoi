// Você precisa fazer o jogador clicar duas vezes para cada movimento: primeiro para selecionar a torre de origem, e depois para selecionar a torre de destino. Use uma variável para registrar qual modo o jogador está.

// Adicione um handler de clique em cada uma das três torres. Use event.currentTarget dentro do handler de evento para determinar qual torre foi clicada.

// Use a propriedade DOM childElementCount para saber quantos discos estão em uma torre.

// Use a propriedade DOM lastElementChild para saber qual é o disco no topo da torre.

// Use o método DOM appendChild() para adicionar um disco a uma torre . Observe que quando você usa appendChild em um elemento que já tem um pai, ele é automaticamente removido do pai anterior e adicionado no novo.
// Use a propriedade Element.clientWidth para pegar o tamanho dos discos.

// ------------------------------------------------

// 1. primeiro click é para selecionar meu disco e o segundo para selecionar a torre de destino;
// 2. Enquanto eu seguro o mouse, eu posso arrastá-lo pela box e quando eu soltar, entrar na tower mais próxima
// 3. Se na torre o último elemento for um disco com largura menor, a ação não pode ser completada;

//  primeiro para selecionar a torre de origem, e depois para selecionar a torre de destino

//  Adicione um handler de clique em cada uma das três torres. Use event.currentTarget dentro do handler de evento para determinar qual torre foi clicada.

// Resolução:
// Adicionar o elemento clicado ao array. no Próximo click adicionar a torre no array.
// Quando o array tiver o length 2, ou seja, o disco e a torre. Fazer a comparação se o disco tem  largura menor que o ultimo filho da torre.
// Se tiver, adicionar e zerar o array
// Se não tiver, apenas zerar o array.

const towersBox = document.getElementById("towersBox");

const tower1 = document.getElementById("tower1");
const tower2 = document.getElementById("tower2");
const tower3 = document.getElementById("tower3");

const disc1 = document.createElement("div");
disc1.className = "disc m1";
const disc2 = document.createElement("div");
disc2.className = "disc m2";
const disc3 = document.createElement("div");
disc3.className = "disc m3";
const disc4 = document.createElement("div");
disc4.className = "disc m4";

tower1.appendChild(disc4);
tower1.appendChild(disc3);
tower1.appendChild(disc2);
tower1.appendChild(disc1);

let arrDisc = [];

tower1.addEventListener("click", selectDisc);
tower2.addEventListener("click", selectDisc);
tower3.addEventListener("click", selectDisc);

function selectDisc(event) {
  arrDisc.push(event.currentTarget);
  if (arrDisc.length === 1) {
    event.currentTarget.lastElementChild.style.marginBottom = "30px";
  }
  if (arrDisc[0] === arrDisc[1]) {
    arrDisc[0].lastElementChild.style.marginBottom = "0";
  }
  if (arrDisc.length === 2) {
    if (arrDisc[1].lastElementChild === null) {
      arrDisc[0].lastElementChild.style.marginBottom = "0";
      arrDisc[1].appendChild(arrDisc[0].lastElementChild);
      arrDisc.length = 0;
    } else if (
      arrDisc[0].lastElementChild.clientWidth <=
      arrDisc[1].lastElementChild.clientWidth
    ) {
      arrDisc[0].lastElementChild.style.marginBottom = "0";
      arrDisc[1].appendChild(arrDisc[0].lastElementChild);
      arrDisc.length = 0;
    } else if (
      arrDisc[0].lastElementChild.clientWidth >
      arrDisc[1].lastElementChild.clientWidth
    ) {
      arrDisc[0].lastElementChild.style.marginBottom = "0";
      arrDisc.length = 0;
    }
  }
  if (tower3.children.length === 4) {
    alert("parabéns, você conseguiu!");
  }
}
