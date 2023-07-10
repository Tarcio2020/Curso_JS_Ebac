//Laços For and For in While


let names = ["Maria", "José", "João"]

Names[1]

Names[2]

names[99]


for (let i = 0; i < names.length; i++) {
    console.log("O nome é; " + names [i])
}



for (indiceAtual in names) {
    console.log("o nome é ; " + names[indiceAtual])
}


let saudações = 0

while(saudações < names.length) {
    console.log("O nome é; " + names[saudações]);

}



do {
    console.log("O nome é; " + names[saudações]);
    saudações++
} while (saudações < names.length);
