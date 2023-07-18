//  Ex. 01
// for (let i = 1; i <= 10 ; i++) {
//     console.log(i)

// } 

// Ex. 02
// for (let i = 1; i <= 20; i++) {
//     if (i % 2 == 0) {
//         console.log(i)
//     }
// }

// Ex. 03
// var c = 0
// for (var i = 0; i <= 100; i++) {
//     c= c+i
// }
// console.log(c)

// Ex. 04
// for (let i = 10; i >= 0; i--){
//     console.log(i)
// }

// Ex. 05
// for (let i = 1; i <= 10; i++) {
//     console.log(i*5)
// }
 
// Ex. 06
// let a = [1, 2, 3, 4, 5]
// for (let i in a) {
//     console.log(a[i])
// }

// ex. 07
// let a = ["maçã", "banana", "laranja", "morango"]

// for (let i in a) {
//     console.log(a[i])
// }

// Ex. 08
let a = [10, 20, 30, 40, 50]
let c = 0
for (var i in a) {
    c += a[i]
}
console.log(c/a.length)
console.log(a.length)
console.log(c)

// ex. 09 
// let objeto = { nome: "João", idade: 25, cidade: "São Paulo" }
// for (let chave in objeto) {
//     console.log( chave + ": " + objeto[chave])
// }

// ex. 10
// let a = "Hello World!"
// for (let i in a) {
//     console.log(a[i])
// }