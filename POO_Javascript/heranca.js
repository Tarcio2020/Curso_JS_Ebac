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
    let _salario = salario;
    //Getters e Setters
    //getters retorna 
    //setters atribui 
    this.getSalario = function() {
        return salario = _salario;
    }

    this.setSalario = function(valor) {
        if(typeof valor === 'number') {
        _salario = valor;
        }
    }



    this.aumentoSalario = function (){
        const aumento = _salario * 1.10;
        console.log(aumento)
        _salario = aumento;
    }

    this.dizCargo = function() {
        console.log(this.cargo)
    }

//Essa função não tem o nome, então pegamos da função Pessoa//
    Pessoa.call(this, nome);

    
    
}
    
    function DevC(nome) {
        Funcionarios.call(this, nome, "DevC", 2000);
        
        this.aumentoSalario = function (){
            const aumento = this.getSalario() * 1.07;
            this.setSalario(aumento)
        }

}

const Funcionarios1 = new Funcionarios ("Maria", 'Dev. Java', 155844854);
const Funcionarios2 = new DevC("Tarcio");


//console.log(pessoa1);
//console.log(Funcionarios1);

Funcionarios1.dizOi();
Funcionarios1.dizCargo();

//_________________Encapsulamento________________//

//Abaixo coonseguimos mudar o salário pq o objeto é publico//
//Funcionarios1.salario = 1000;
//console.log(Funcionarios1);

//Para deixarmos o atributo privado passamos uma variável ao invés do this.atributo//
//Atributo privado não é acessivel atraves do ponto....só através de uma função//
Funcionarios1.setSalario(10000);
console.log(Funcionarios1.getSalario());
Funcionarios1.aumentoSalario();

console.log(Funcionarios2.getSalario());
Funcionarios2.aumentoSalario();
