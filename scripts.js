// Exercicio 01 Semana 03
let notas = [10,10,5,7];

function calculaMediaNotas(notas){
  let soma = 0;
  for(let i = 0; i < notas.length; i++){
    soma += notas[i];
  }
  let media = soma/notas.length;
  console.log(soma)
  return media;
}

let media = calculaMediaNotas(notas);
console.log(media);

// Exercicio 02 Semana 03
function mediaAluno(media){
  if(media >= 7){
    document.write("Parabéns, você passou na média!")
  }else {
    document.write("Infelizmente você está de recuperação!")
  }
}

mediaAluno(media);

// Exercicio 03 Semana 03
let nomesAlunos = ["Andre", "Pedro", "Maria", "Lana", "Catarina"];

function exibeNomesAlunos(nomes){
  nomes.forEach((nome) => document.write("</br>" +nome));
}

exibeNomesAlunos(nomesAlunos);

// Exercicio 04 Semana 03
for(let i = 0; i <= 10; i++){
  document.write("</br> 8 x " + i + " = " + 8*i);
}

// Exercicio 05 Semana 03
let nomeAluno = prompt("Qual o nome do aluno?");
let idadeAluno = prompt("Qual a idade do aluno?");
let serieAluno = prompt("Qual a série do aluno?");
let nomeEscola = prompt("Qual o nome da escola");
let materiaFavorita = prompt("Qual a sua matéria favorita?");

let confirmacao = confirm("Você confirma os dados inseridos?");

if(confirmacao){
  document.write("</br>" + "Nome do aluno: " +nomeAluno + "</br>Idade do aluno: " +idadeAluno + "</br>Série do aluno:" +serieAluno + "</br>Nome da escola: " +nomeEscola + "</br>Matéria favorita: " + materiaFavorita);
} else{
  document.write("</br>Os dados do aluno não foram confirmados")
}


// Exercicio 06 Semana 03
/*
let nomeDaMateria = prompt("Nome da matéria")
let notasMateria =[]
let contador = 0;

while(contador < 4){
  let nota = prompt("Nota:");
  notasMateria.push(+nota)
  contador++
}

const materiaNotas = {
  nomeMateria: nomeDaMateria,
  notas: notasMateria
}

let mediaMateria = calculaMediaNotas(materiaNotas.notas);
console.log(mediaMateria);
*/

// Exercicio 07 Semana 03
let n = [9,10,3,5,55,23,89,11,9,1]; 

function maiorNumero(numeros){
  return numeros.reduce((ant, atual) => {
    if (atual > ant) {
      return atual; 
    } else {
      return ant;
    }
  }, numeros[0]); 
}

console.log(maiorNumero(n));