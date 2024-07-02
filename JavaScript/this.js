const person = {
    name: 'Davi',
    pegarNome:  function () {
       return this.name
    }
}

console.log(person.pegarNome())

console.log(8)


function Animal (nome,peso){
    this.nome = nome;
    this.peso = peso;
     if (nome = undefined) {
        nome = 'Cachorro'
    } 
    if (peso = undefined) {
        peso = '5kg'
    }
}

console.log(Animal.nome)
console.log(Animal.peso)