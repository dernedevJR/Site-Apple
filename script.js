const imagemVisualizacao = document.querySelector("#visualizacao img");
const tituloProduto = document.querySelector("h1")
const opcoesTamanho = ["41 mm" , "45 mm"]
const opcoescor = [
   "Verde-cipreste",
   "Azul-inverno",
   "Meia-Noite", 
   "Estelar",
   "Rosa-Claro"
]

let tamanhoCaixa = ""
let numImagemSelecionada = 1;
let numTamanhoSelecionado = 1;
let numCorSelecionada = 1;

function atualizarImagemSelecionada(){
   const opcaoimagemSelecionada = document.querySelector('[name="opcao-imagem"]:checked').id.charAt(0)
   numImagemSelecionada = opcaoimagemSelecionada  
   imagemVisualizacao.src = './imagens/opcoes-cores/imagens-azul-inverno/imagem-'+ numImagemSelecionada +'.jpeg'
}

function atualizarTamanho(){
 const opcaoTamanhoSelecionado = document.querySelector('[name="opcao-tamanho"]:checked').id.charAt(0)
 numTamanhoSelecionado = opcaoTamanhoSelecionado
 tamanhoCaixa = opcoesTamanho[numTamanhoSelecionado]
 tituloProduto.innerText = `Pulseira loop esportiva azul-inverno para caixa de ${tamanhoCaixa}`
 console.log(numTamanhoSelecionado);
 if(tamanhoCaixa === "41 mm"){
    imagemVisualizacao.classList.add("caixa-pequena")
 }else{
    imagemVisualizacao.classList.remove("caixa-pequena")
 }
}

function atualizarCorSelecionada(){
  const corSelecionada = document.querySelector('[name="opcao-cor"]:checked').id.charAt(0)
  numCorSelecionada = corSelecionada
  let cor = opcoescor[(numCorSelecionada)]
  tituloProduto.innerText = `Pulseira loop esportiva ${cor.toLowerCase()} para caixa de ${tamanhoCaixa}`
  console.log(cor);

}