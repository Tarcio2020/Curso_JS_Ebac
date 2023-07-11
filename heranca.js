//________________Herança____________________//

function Pessoa(nome) {
    this.nome = nome;
    this.dizOi = function() {
        console.log(this.nome + 'diz olá!');
}
}

function Funcionarios(nome, cargo, salario) {
    this.cargo = cargo;
    //this.salario = salario;

    //Getters e Setters
    this.getSalario = function() {
        return `O salario de ${nome} é ${_salario}`
    }

    this.setSalario = function(valor) {
        if(typeof valor === 'number') {
        _salario = valor;
        }
    }

    this.dizCargo = function() {
        console.log(this.cargo)
    }

//Essa função não tem o nome, então pegamos da função Pessoa//
    Pessoa.call(this, nome);
}

const pessoa1 = new Pessoa('Maria')
const Funcionarios1 = new Funcionarios ("Maria", 'Dev. Java', 155844854);

console.log(pessoa1);
console.log(Funcionarios1);

Funcionarios1.dizOi();
Funcionarios1.dizCargo();

//_________________Encapsulamento________________//

//Abaixo coonseguimos mudar o salário pq o objeto é publico//
//Funcionarios1.salario = 1000;
console.log(Funcionarios1);

//Para deixarmos o atributo privado passamos uma variável ao invés do this.atributo//
//Atributo privado não é acessivel atraves do ponto....só através de uma função//
Funcionarios1.atribuiSalario('mil');


console.log(Funcionarios1.getSalarioSalario());



;
