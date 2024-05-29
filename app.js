let totalGeral = 0;
document.getElementById('lista-produtos').innerHTML = '';
document.getElementById('valor-total').innerHTML = '';
function adicionar() {

    let quantidade = document.getElementById('quantidade').value;
    if (quantidade>0) {
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario =produto.split('R$')[1];
    let preco = valorUnitario * quantidade;
    let carrinho = document.getElementById('lista-produtos');
    
    carrinho.innerHTML += `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
  </section>`;
    totalGeral += preco;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${totalGeral}`;
    } else {
        alert('Quantidade indefinida')
    }

}
function limpar() {
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').innerHTML = '';
    totalGeral = 0
}