// declarando variáveis
let a = 2019
let v1 = 10
let v2 = 11
let v3 = 12
let v4 = 15
let v5 = 16
let v6 = 17
let v7 = 500
let v8 = 19
let v9 = 20
let v10 = 21
let v11 = 22
let v12 = 23
let m = [ v1, v2, v3, v4, v5, v6, v7, v8, v9, v10, v11, v12]
var c = 0
// realizando a soma de c
for (let chave in m) {
    c += m[chave]
}
// retorno de resultados
m.sort()
console.log(`O maior valor é:  ${m[m.length-1]}`)
console.log(c)
console.log(c/12)

