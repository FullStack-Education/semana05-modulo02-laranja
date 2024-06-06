//================= Trecho de código atendento aos requisitos do card-2 =================

let nomeAluno = prompt("Qual o nome do aluno?");
let idadeAluno = prompt("Qual a idade do aluno?");
let serieAluno = prompt("Qual a série do aluno?");
let nomeEscola = prompt("Qual o nome da escola");
let materiaFavorita = prompt("Qual a sua matéria favorita?");

let confirmacao = confirm("Você confirma os dados inseridos?");

// =================================  Fim do card-2 =====================================

//================= Trecho de código atendento aos requisitos do card-3 =================

if(confirmacao){
  let imprimeNomeAluno = document.getElementById("nome-aluno");
  imprimeNomeAluno.innerHTML = ``;
  imprimeNomeAluno.innerHTML += `${nomeAluno}`;
  
  let imprimeidadeAluno = document.getElementById("idade-aluno");
  imprimeidadeAluno.innerHTML = ``;
  imprimeidadeAluno.innerHTML += `${idadeAluno} anos`;

  let imprimeSerieAluno = document.getElementById("serie-aluno");
  imprimeSerieAluno.innerHTML = ``;
  imprimeSerieAluno.innerHTML += `${serieAluno}`;

  let imprimeNomeEscola = document.getElementById("escola");
  imprimeNomeEscola.innerHTML = ``;
  imprimeNomeEscola.innerHTML = `${nomeEscola}`;

  let imprimeMateriaFavorita = document.getElementById("materia-favorita");
  imprimeMateriaFavorita.innerHTML = ``;
  imprimeMateriaFavorita.innerHTML = `${materiaFavorita}`;
  
} else{
  let imprimeNomeAluno = document.getElementById("nome-aluno");
  imprimeNomeAluno.innerHTML = `Informação não confirmada.`;
  
  
  let imprimeidadeAluno = document.getElementById("idade-aluno");
  imprimeidadeAluno.innerHTML = `Informação não confirmada.`;

  let imprimeSerieAluno = document.getElementById("serie-aluno");
  imprimeSerieAluno.innerHTML = `Informação não confirmada.`;

  let imprimeNomeEscola = document.getElementById("escola");
  imprimeNomeEscola.innerHTML = `Informação não confirmada.`;

  let imprimeMateriaFavorita = document.getElementById("materia-favorita");
  imprimeMateriaFavorita.innerHTML = `Informação não confirmada.`;
}

// =================================  Fim do card-3 =====================================

//================= Trecho de código atendento aos requisitos do card-4 =================

var i_linha = window.document.querySelector('#id_notas_materias');
i_linha.innerHTML = ``; 

var i_botao = window.document.querySelector(`button#id_botao`);

i_botao.addEventListener("click", f_inserirDados);

function f_inserirDados() {
  var media = 0;
  var notas = [];
  var materiaNotas = {
      nomeMateria:"",
      notas:""
  }
  let index = 0;
  let materia = window.prompt("Informe a matéria: ");
  while (!(notas.length == 4)) {
      notas[index] = window.prompt(`Informe a ${index + 1}° nota: `);
      index++;
  }
  materiaNotas.nomeMateria = materia;
  materiaNotas.notas = notas;
  media = f_media(notas);

  f_novaLinha(materiaNotas, media);

  return materiaNotas;

}

function f_media(notas) {
  let soma = 0;
  for (let index = 0; index < notas.length; index++) {
      soma += parseInt(notas[index]);   
  }
  return soma/notas.length;
}

function f_novaLinha(materiaNotas, media) {
  var i_linha = window.document.querySelector('#id_notas_materias');
  i_linha.innerHTML += `<tr>
                      <td>${materiaNotas.nomeMateria}</td>
                      <td>${parseFloat(materiaNotas.notas[0]).toFixed(1)}</td>
                      <td>${parseFloat(materiaNotas.notas[1]).toFixed(1)}</td>
                      <td>${parseFloat(materiaNotas.notas[2]).toFixed(1)}</td>
                      <td>${parseFloat(materiaNotas.notas[3]).toFixed(1)}</td>
                      <td>${parseFloat(media).toFixed(1)}</td>
                    </tr>`
}

// =================================  Fim do card-4 =====================================