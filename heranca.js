//________________Herança____________________//

function Pessoa(nome) {
    this.nome = nome;
    this.dizOi = function() {
        console.log(this.nome + 'diz olá!');
}
}

function Funcionarios(nome, cargo, salario) {
    this.cargo = cargo;
    this.salario = salario;
    this.dizCargo = function() {
        console.log(this.cargo)
    }

//Essa função não tem o nome, então pegamos da função Pessoa//
    Pessoa.call(this, nome);
}

const pessoa1 = new Pessoa('Maria')
const Funcionarios1 = new Funcionarios ("Maria", 'Dev. Java', 10000);

console.log(pessoa1);
console.log(Funcionarios1);

Funcionarios1.dizOi();
Funcionarios1.dizCargo();



