let listaDeNumerosSorteados = [];
let numeroLimite = 250;
let numeroSecreto = numeroAleatorio();
let tentativas = 1

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
} 
function mensagemInicial() {
    exibirTextoNaTela('h1', 'Número Secreto');exibirTextoNaTela('p', 'Escolha um número entre 1 e 10.');
}
mensagemInicial();

function verificarChute(){
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto){
        exibirTextoNaTela ('h1', 'Acertou!');
        let palavraTentativa = tentativas>1? 'tentativas':'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto em ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('p', mensagemTentativas );
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else if (chute>numeroSecreto){
        exibirTextoNaTela('p', `O número é menor que ${chute}!`);
    } else {exibirTextoNaTela ('p', `O número é maior que ${chute}!`)
}
    tentativas++
    limparCampo();
}

function numeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random () *numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
    
    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = []};

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return numeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function botaoReiniciar(){
    numeroSecreto = numeroAleatorio();
    limparCampo();
    tentativas = 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);

}