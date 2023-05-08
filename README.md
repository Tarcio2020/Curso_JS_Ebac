# Curso_JS_Ebac

/*Sintaxe do JavaScrip

É case sensitive: duas palavras escritas com o 
mesmo texto mas com a caixa diferente, são 
diferentes.
exemplo: nomeDoMeio != nomedomeio.

; ao final da sentença é OPCIONAL


Existência de palavras reservadas: existem 
algumas palavras que não podemos usar na hora 
de nomear variáveis ou criar funções, pois são 
reservados pelo interpretador do JavaScript.


Variáveis e constantes

Composição de uma variável:
let ou var NOME_DA_VARIAVEL = VALOR

exemplo:
let nome = "Tarcio Teles da Silva Farias"
ou
var nome = "Tarcio Teles da Silva Farias"

*/
 let nome = "Tarcio Teles da Silva"
 let frase = "ele se chama, "

 console.log = (nome + frase);
 /*
 
 TIPOS DE DADOS

 O JavaScript não é uma linguagem 
fortemente tipagem, isso quer dizer que 
na hora de declaramos uma variável por 
exemplo, não preciso informar que será 
um texto ou número, mas isso gera 
alguns problemas, como por exemplo, 
uma variável que originalmente era 
numérica em determinado momento do 
programa pode se tornar um número.


Os tipos de dados que temos disponíveis 
no JavaScript são:

• String: tipo literal, usado para textos e 
caracteres;

• Number: tipo numérico, usado tanto para 
números inteiros e reais;

• Boolean: tipo lógico, que indica se 
determinada afirmação é verdadeira ou falsa;

• Object: tipo mais básico do JavaScript, todos 
os tipos nasceram a partir do Object.


O tipo String, é usado quando 
trabalhamos com caracteres, até mesmo 
um espaço em branco é uma String.
Podem ser construídas ao envolver aspas.
var nome = “gian”
Nome = ‘gian’

Consideramos:


var nome = “JavaScript”

Contando o tamanho de uma String
nome.length 
// 10

Tornando todo o texto em caixa alta
nome.toLocaleUpperCase() 
// JAVASCRIPT

Procurando por uma letra ou palavra:
nome.search(‘v’) 
// 2

O 2 indica a posição da letra V em JavaScript, naturalmente seria 
3, mas a posição inicial é 0 e não 1
nome.slice(0, 2)
// Ja
Retorna um pedaço da String, 0 sendo a posição inicial e 2 o 
número de caracteres que queremos selecionar.


>>>CONCATENAÇÃO<<<
Unindo Strings
Podemos unir Strings + Strings ou Strings + Números, com 
o operador +

“Olá “ + nome 
// Olá JavaScript

nome + “ é “ + 10 + “!” 
// JavaScript é 10!
Chamamos essa união de concatenação

 */

/*LÓGICOS BOOLEANOS 

Os valores do tipo lógico são compostos 
por true ou false, através desses valores 
podemos mudar o fluxo de execução do 
software.

var foiConvidado = true
var podeEntrar = foiConvidad

No exemplo acima temos uma situação onde se 
pode entrar num local apenas se for convidado, a 
primeira variável diz se a pessoa foi convidada, e 
como o valor da segunda é condicionada a ela, 
podemos simples repassar seu valor, logo:

foiConvidado = true ENTÃO podeEntrar = true
foiConvidado = false ENTÃO podeEntrar = false

*/
/*
NUMÉRICO

Para criar uma variável do tipo numérico 
em JavaScript, basta atribuir o número 
ao valor. Apesar de tanto o número 
inteiro como o fracionado serem 
considerados ambos do tipo number, 
existe uma separação interna entre o tipo 
integer (inteiro) e float (fracionado):

var idade = 32 
// Number mas Integer

var altura = 1.72 
// Number mas Float


Com os números podemos fazer cálculos 
aritméticos:
var ano = 2022
var idade = 32
idade * 2 = 64
idade / 2 = 16
var anoDeNascimento = ano – idade
Podemos usar operações para atribuir o valor às variáveis.

Assim como nas Strings os elementos do 
tipo Number possuem alguns recursos 
especiais, como:
Verificar se um número é Integer.
Number.isInteger(10) // true
Number.isInteger(10.5) // false
Converter uma String para Float:
parseFloat(“10.5632”) // 10.5632
parseFloat(“10,5632”) // 10 – não devemos usar vírgula
Converter um Float para Integer:
parseInt(10.43) // 10 – o restante do número é descartado
*/

/*
>>>>>OBJECT<<<<<<

O tipo Object é o mais primitivo do 
JavaScript, através dele outros tipos 
nasceram. 
Um ponto importante é que o JavaScript
trata os vetores como objetos.
Vetores são conjuntos de dados, o 
conjunto é representado pelos símbolos 
de colchetes ([.....]), e seus itens são 
separados por vírgula.
Também são chamados de arrays.
*/

/*
OBJETOS ARRAY

Exemplo de um array de Strings
var nomes = [“gian”, “carlos”, “maria”] 
Por possuir uma fraca tipagem o 
JavaScript não nos obriga a adicionar 
itens do mesmo tipo em um conjunto, por 

exemplo:
nomes = [“gian”, “carlos”, “maria”, “joão”, 15, 32]
Para acessar um item do array usamos seu 
índice, onde o primeiro item possui o índice 0.
nomes[0] 
// gian
nomes[4] 
// 15 
*/
