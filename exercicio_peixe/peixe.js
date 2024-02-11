var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,

    scene: {
        preload: preload,
        create: create,
        update: update
     }
};

var game = new Phaser.Game(config);

//Pergunta para nota adicional
var pergunta = "Você já programou antes? Como foi?";

// Resposta para a nota adicional
// Dúvida: Como eu escrevo uma string em mais de uma linha?
var resposta ='Sim, ja tinha programado. Estudei html, css e python. Foi a primeira vez com JS. Gostei bastante de ver tudo funcionando';

//Adicionando no console
console.log(pergunta);
console.log(resposta);

//Bonequinhos que vão ficar no mouse
var peixe_rosa;
var peixe_azul;

//Adicionando as imagens ao arquivo
function preload() {
    this.load.image ('mar', 'assets/bg_azul-claro.png');

    this.load.image('logo', 'assets/logo-inteli_azul.png');

    this.load.image('peixe_rosa', 'assets/peixes/peixe_rosa.png');

    this.load.image('peixe_azul', 'assets/peixes/peixinho_azul.png');
}

//Criando os objetos
function create() {
    this.add.image(400, 300, 'mar');

    this.add.image(400, 525, 'logo').setScale(0.5);

    peixe_rosa = this.add.image(400, 300, 'peixe_rosa');

    peixe_rosa.setFlip(true, false);

    peixe_azul = this.add.image(400, 300, 'peixe_azul').setScale(0.75);

    peixe_azul.setFlip(true, false);
}

//Função pros objetos andarem junto com o mouse
function update() {

    peixe_rosa.x = this.input.x;
    peixe_rosa.y = this.input.y;

    peixe_azul.x = this.input.x + 130;
    peixe_azul.y = this.input.y;
}