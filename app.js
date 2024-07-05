let titulo = document.querySelectorAll('h1');
titulo.innerHTML = 'Hora do Desafio';

function botaoClicado() {
    console.log('O botao foi clicado');
}

function botaoAlerta() {
    alert('Eu amo JS');
}

function botaoPrompt(){
    let cidade = prompt("Digite o nome de uma cidade do Brasil:");
    if (cidade!== null && cidade!== "") {
        alert(`Estive em ${cidade} e lembrei de você.`);
    }   
}

function botaoSoma(){
    let num1 = parseFloat(prompt("Digite um número:"));
    let num2 = parseFloat(prompt("Digite outro número:"));
    if (!isNaN(num1) &&!isNaN(num2)) {
        alert(`A soma de ${num1} e ${num2} é ${num1 + num2}`);
    } else {
        alert("Você digitou algo inválido.");
    }
}