const botao = document.getElementById('botao')

botao.addEventListener("click", () => {
    exibeNaTela()
});


function exibeNaTela(){
    const nome = document.getElementById("nomeInput").value

    document.body.innerHTML = `
    <div class="agredecimento">
        <div class="agradecimento-texto">
            <img src="medalha2.jpg" alt="Foto da medalha" class="imagem">
            <h1 class="titulo-parabens">Parabéns!</h1>
            <h2 class="nomeDaPessoa">${nome.toUpperCase()}</h2>
            <h2 class="texto">VOCÊ PARTICIPOU DO TREINAMENTO DO APLICATIVO HEADSPACE</h2>
        </div>
    <a href="#" class="link">AVALIE AQUI</a>
    </div>
`
}