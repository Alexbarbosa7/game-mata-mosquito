
var altura = 0   //variaveis globais
var largura = 0
var vidas = 1
var tempo = 10
var nivel = window.location.search //recuperando o parametro pela url a propriedade search retorna tudo que é string inclusive o ponto de interrogação
 //alert(nivel) ultilizar o metodo replace para tirar o ponto de interrogação

 var criaMosquitoTempo = 1500
 nivel = nivel.replace('?', '')
 
   //criar logica para escolha do nivel
   if(nivel === 'normal'){
	  //1500
	  criaMosquitoTempo = 1500
   } else if (nivel === 'dificil'){
	  //1000
	  criaMosquitoTempo = 1000
   }else if (nivel === 'chucknorris'){
	 //750
	 criaMosquitoTempo = 750
   }

      //ajustar o tamanho do palco usando o BOM BROWSER OBECT MODEL,ESTE ELEMENTO CAPTA O TAMANHO DA TELA
function ajustaTamanhoPalcoJogo() {
	altura = window.innerHeight // ESTE ELEMENTO CAPTA A ALTURA DA TELA 
	largura = window.innerWidth //ESTE ELEMENTO CAPTA O TAMANHO DA LARGURA

	console.log(largura, altura)
}

ajustaTamanhoPalcoJogo() //INVOCANDO A FUNÇÃO

//ajustando cronometro
var cronometro = setInterval(function(){
     
	tempo -= 1 //a cada 1 segundo vai decrementar 1

	//tpomar uma ação para o cronometro não ficar negativo
	if(tempo < 0){
		clearInterval(cronometro)//isso é para limpar a função do cronometro para não travar
		clearInterval(mosquito)//isso limpa a função do cria mosquito
		//alert('vitoria você ganhou gostoso')
		//LINK PARA DIRECIONAR PARA PAGINA VITORIA USANO O BOM
		window.location.href = 'vitoria.html'

	}else{
		document.getElementById('cronometro').innerHTML = tempo
	}

},1000)


function posicaoRandomica() {  //FUNÇÃO PARA ANIMAR O ELEMENTO DEIXA-LO ALEATORIO

	//remover o mosquito anterior (caso exista)
	if(document.getElementById('mosquito')){ 
		document.getElementById('mosquito').remove()
		//aqui nesta condição usamos para também afetar a vidas do mosquito caso demore para clicar
		 
		//criar uma condição para ele parar quando afetar a terceira vida se não o loop continua o v4 v5 esses ids não existe são apenas 3

		if(vidas > 3){
			//alert('game over')
			//usar o BOM para direcionar o link para a page game over
			window.location.href = 'fim_de_jogo.html' 
		}else{

		//selecionar o id do elemento vida
		document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png"
      
		      vidas++ //incremento a cada incremento ele seleciona um id
		}
	}
    
	//CRIANDO A POSIÇÃO DO ELEMENTO USANDO A MATH.RANDOM VEZES A ALTURA E LARGURA COLOCAR -90 PARA ELE NÃO DESAPARECER DA TELA
	var posicaoX = Math.floor(Math.random() * largura) - 90 
	var posicaoY = Math.floor(Math.random() * altura) - 90

	//(CONDIÇÃO TERNARIO)
	posicaoX = posicaoX < 0 ? 0 : posicaoX
	posicaoY = posicaoY < 0 ? 0 : posicaoY

	console.log(posicaoX, posicaoY)

	//criar o elemento html
	var mosquito = document.createElement('img')
	mosquito.src = 'imagens/mosquito.png'
	mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
	mosquito.style.left = posicaoX + 'px'
	mosquito.style.top = posicaoY + 'px'
	mosquito.style.position = 'absolute'
	mosquito.id = 'mosquito'
	mosquito.onclick = function(){
	
		this.remove()
	}

	document.body.appendChild(mosquito)

}

function tamanhoAleatorio() {
	var classe = Math.floor(Math.random() * 3)
	
	switch(classe) {
		case 0:
			return 'mosquito1'
		
		case 1:
			return 'mosquito2'

		case 2:
			return 'mosquito3'
	}
}

function ladoAleatorio() {
	var classe = Math.floor(Math.random() * 2)
	
	switch(classe) {
		case 0:
			return 'ladoA'
		
		case 1:
			return 'ladoB'
	}
}
