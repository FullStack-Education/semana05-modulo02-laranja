//================= Trecho de código atendento aos requisitos do card-2 =================

let nomeAluno = prompt('Qual o nome do aluno?')
let idadeAluno = prompt('Qual a idade do aluno?')
let serieAluno = prompt('Qual a série do aluno?')
let nomeEscola = prompt('Qual o nome da escola')
let materiaFavorita = prompt('Qual a sua matéria favorita?')

let confirmacao = confirm('Você confirma os dados inseridos?')

// =================================  Fim do card-2 =====================================

//================= Trecho de código atendento aos requisitos do card-3 =================

let imprimeNomeAluno = document.getElementById('nome-aluno')
let imprimeidadeAluno = document.getElementById('idade-aluno')
let imprimeSerieAluno = document.getElementById('serie-aluno')
let imprimeNomeEscola = document.getElementById('escola')
let imprimeMateriaFavorita = document.getElementById('materia-favorita')

if (confirmacao) {
  imprimeNomeAluno.innerText = nomeAluno
  imprimeidadeAluno.innerText = idadeAluno + ' anos'
  imprimeSerieAluno.innerText = serieAluno
  imprimeNomeEscola.innerText = nomeEscola
  imprimeMateriaFavorita.innerText = materiaFavorita
} else {
  imprimeNomeAluno.innerText = 'Informação não confirmada.'
  imprimeidadeAluno.innerText = 'Informação não confirmada.'
  imprimeSerieAluno.innerText = 'Informação não confirmada.'
  imprimeNomeEscola.innerText = 'Informação não confirmada.'
  imprimeMateriaFavorita.innerText = 'Informação não confirmada.'
}

// =================================  Fim do card-3 =====================================

//================= Trecho de código atendento aos requisitos do card-4 =================

var i_linha = window.document.querySelector('#id_notas_materias')
i_linha.innerHTML = ``

var i_botao = window.document.querySelector(`button#id_botao`)
i_botao.addEventListener('click', f_inserirDados)

function f_inserirDados() {
  var media = 0
  var notas = []
  var materiaNotas = {
    nomeMateria: '',
    notas: ''
  }
  let index = 0
  let materia = window.prompt('Informe a matéria: ')
  while (notas.length < 4) {
    let nota = parseFloat(window.prompt(`Informe a ${index + 1}° nota: `))
    if (!isNaN(nota)) {
      if (nota >= 0 && nota <= 10) {
        notas.push(nota)
        index++
      } else {
        alert('Informe uma nota válida para matéria. A nota deve ser maior ou igual a 0.0 e menor ou igual a 10!')  
      }      
    } else {
      alert('Por favor, insira um valor numérico.')
    }
  }
  materiaNotas.nomeMateria = materia
  materiaNotas.notas = notas
  media = f_media(notas)

  f_novaLinha(materiaNotas, media)
  calcularMediaGeral()

  //================= Trecho de código atendento aos requisitos dos cards 7  =================
  const todasAsNotasCadastradas = document.querySelectorAll('#id_notas_materias tr')  
  let mediasCadastradas = []

  for (const notas of todasAsNotasCadastradas) {    
    let media = parseFloat(notas.cells[5].innerText)

    if (!isNaN(media)) {
      mediasCadastradas.push(media)
    }
  }
    
  let maiorMedia = maiorMediaDasMaterias(mediasCadastradas)  
  document.getElementById('maior-media-materias').innerText = maiorMedia.toFixed(1)
  // =================================  Fim do card 7 =====================================
  
  return materiaNotas
}

function f_media(notas) {
  let soma = 0
  for (let index = 0; index < notas.length; index++) {
    soma += parseFloat(notas[index])
  }
  return soma / notas.length
}

function f_novaLinha(materiaNotas, media) {
  var i_linha = window.document.querySelector('#id_notas_materias')
  i_linha.innerHTML += `<tr>
    <td>${materiaNotas.nomeMateria}</td>
    <td>${materiaNotas.notas[0].toFixed(1)}</td>
    <td>${materiaNotas.notas[1].toFixed(1)}</td>
    <td>${materiaNotas.notas[2].toFixed(1)}</td>
    <td>${materiaNotas.notas[3].toFixed(1)}</td>
    <td>${media.toFixed(1)}</td>
  </tr>`
}

// =================================  Fim do card-4 =====================================

//================= Trecho de código atendento aos requisitos dos cards 5 e 6  =================

function calcularMediaGeral() {
  let linhas = document.querySelectorAll('#id_notas_materias tr')
  let somaMedias = 0
  linhas.forEach(linha => {
    let media = parseFloat(linha.cells[5].innerText)
    somaMedias += media
  })
  let mediaGeral = somaMedias / linhas.length
  document.getElementById('media-geral-aluno').innerText = mediaGeral.toFixed(1)
}

// =================================  Fim dos cards 5 e 6 =====================================

//================= Trecho de código atendento aos requisitos dos cards 7  =================

function maiorMediaDasMaterias(medias) {
  return medias.reduce((anterior, atual) => {
    if (atual > anterior) {
      return atual
    } else {
      return anterior
    }
  }, medias[0])
}

// =================================  Fim do card 7 =====================================