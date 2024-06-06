//================= Trecho de código atendento aos requisitos do card-4 =================

var media = 0;
var notas = [];
var materiaNotas = {
    nomeMateria:"",
    notas:""
}
var i_botao = window.document.querySelector(`button#id_botao`);

i_botao.addEventListener("click", f_inserirDados);

function f_inserirDados() {

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

// =================================  Fim do card-4 ====================================