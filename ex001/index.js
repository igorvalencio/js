let num = [5, 3, 4, , 7, 9]
valores.sort()

/*num.sort()
num.push()
console.log(num)
console.log(`o vetor tem ${num.lenght} posições`)
console.log(` o primeiro valor do vetor é ${num[0]}`) * /


let valores = [3, 5, 4, 1, 7, 9, 9]
for (let pos = 0; pos < valores.length; pos++) {
    console.log(`a posição ${pos}
    tem o valor ${valores[pos]}`)

}
*/

//mais facil abaixo
for (let pos in valores)
    console.log(`a posição ${pos} tem o valor ${valores[pos]}`)
let pos = num.indexOf(4)
if (pos == -1) {
    console.log(' o valores não foi encontrado')
    else {
        console.log(`o valor está em ${pos}`)
    }
}