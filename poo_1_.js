const carroJoao = {
    modelo: 'fiesta',
    fabricante: 'ford',
    anoModelo: 2020,
    anoFabricacao: 2019,
    acelerar: function() {
        console.log('vrumm');
    }
}

const carroMaria = {
    modelo: 'Ka',
    fabricante: 'ford',
    anoModelo: 2008,
    anoFabricacao: 2008,
    acelerar: function() {
        console.log('vrumm');
    }
}

//função construtora//
function carro(modelo, fabricante, anoModelo, anoFabricacao) {
    this.modelo = modelo;
    this.fabricante = fabricante;
    this.anoModelo = anoModelo;
    this.anoFabricacao = anoFabricacao;
    console.log('acelerar')
}

const carroJoao2 = new carro('Ferrari', 'f1 2023', 2020, 2015);
const carroMaria2 = new carro('gol', 'Wv', 2000, 1998);

console.log(carroJoao)
console.log(carroMaria)
console.log(carroJoao2)
console.log(carroMaria2)


const nome = 'Tarcio Teles';
const idade = 28;
const maiorDeIdade = true;
const conhecimentos = ['html', 'css', 'js', 'sass', 'less', 'bootstrap5',]


const pessoa = {
    nome: nome,
    idade: idade,
    maiorDeIdade: maiorDeIdade,
    conhecimentos: conhecimentos,
}

console.log(typeof nome);
console.log(typeof idade);
console.log(typeof maiorDeIdade);
console.log(typeof conhecimentos);
console.log(typeof carroMaria2);

//verificar qual o tipo da instância criada a partir de uma função construtora.
console.log(carroMaria2 instanceof carro);
console.log(conhecimentos instanceof Array);


//Acesando os Atributos

console.log(pessoa.nome)
console.log(pessoa['nome'])

function exibeAtributo (nomeAtributo) {
    console.log(pessoa[nomeAtributo])
}
exibeAtributo("nome")

if (pessoa.sobreNome) {
    console.log('a pessoa tem um sobre nome')
} else {
    console.log('não tem')
}

//inserindo um atributo ao Object

pessoa.sobreNome = 'Silva Farias';

if (pessoa.sobreNome) {
    console.log('a pessoa tem um sobre nome')
} else {
    console.log('não tem')
}


// Verificar se o Atributo Existe usando >>>in<<<

if ('sobreNome' in pessoa) {
    console.log("existe")
} else {
    console.log("Não Existe")
}

//Podemos Mudar um valor de um atributo 

pessoa.nome = 'Teles Tarcioooo!!';
console.log(pessoa.nome);
console.log(pessoa[nome]);

// Para não haver mudançãs de valores nos atributos podemos usar//
Object.freeze(pessoa);
//os atributos ficam imutáveis//

//Para saber todos os elementos do Objeto//
console.log(Object.keys(pessoa))
//Aqui iremos obter a qtd de valores no Objeto//
console.log(Object.keys(pessoa).length)


//________________Herança____________________//

