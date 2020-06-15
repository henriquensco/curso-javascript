let valores = [5, 8, 2, 9, 3]

//console.log(valores)
/*
console.log(valores[0])
console.log(valores[1])
console.log(valores[2]) ...

for(pos = 0; pos<valores.length; pos++) {
  console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}*/

for(let pos in valores) {
  console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}


//Buscar valores dentro do vetor
let buscar = valores.indexOf(5)
console.log(buscar)
