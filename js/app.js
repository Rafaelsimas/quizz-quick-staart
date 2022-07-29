function revelarResposta(){
const resposta = document.querySelector('#resposta')
resposta.classList.toggle('blur')
   
}

function proximaPergunta(proximaPergunta){
    const pergunta = document.querySelector('#cardContainer')

    pergunta.innerHTML = ''
   
    let cardDiv = document.createElement('div') 
    cardDiv.classList.add('card', 'animate__animated', 'animate__backInRight')

    cardDiv.innerHTML = `
    
    <!-- Container da direita -->
      <div class="card-cabecalho centralizar">
        <h1 class="card-titulo">${proximaPergunta.title}</h1>
      </div>

      <!-- card resposta -->
      <div id="resposta" class="card-conteudo blur">
        <P>${proximaPergunta.description}</P>
      </div>
   
    
    `
  
   pergunta.appendChild(cardDiv)
  
}

function buscarInformação(){
    fetch('https://flash.quickstaart.com/random')
    .then(function(resultado) {
        return resultado.json()
    })
    .then(function(resultadoJson){
        proximaPergunta(resultadoJson)
    })
}

window.addEventListener('load', buscarInformação)


