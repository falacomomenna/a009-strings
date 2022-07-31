//Crie a const para a frase aqui
const fraseJorge =
  'Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"'
console.log(fraseJorge)

//atividade b
const novaFrase = fraseJorge.replace('verde', 'rosa').replace('azul', 'laranja')
console.log(novaFrase)

//atividade c
console.log(novaFrase.includes('verde') && novaFrase.includes('laranja'))
