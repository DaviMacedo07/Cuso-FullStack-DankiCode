let clientes = [
    {name: 'Davi', age:19 },
    {name: 'Marcia', age:29 },
    {name: 'Pedro', age:15 },
    {name: 'Geová', age:76 },
    {name: 'Matheus', age:24 },
    {name: 'Fernando', age:68 },
    {name: 'Pietra', age:12},
]

let classifica = clientes.forEach(function(item,index){
    if(item.age < 18) {
        console.log(`O cliente ${item.name}, é menor de idade `)
    } 
})