    alert("Boas Vindas ao jogo do numero secreto!! "); 
    let numeroMaximo = 5000;
    let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
    console.log(numeroSecreto);
    let chute;     
    let tentativas = 1;  // variavel para contar as tentativas

while (chute != numeroSecreto) {
    chute = prompt(`Escolha um numero entre 1 e ${numeroMaximo}`);

    // coments
    if (chute == numeroSecreto)  {
        break;
       
    } else {
        if(chute > numeroSecreto) {
            alert(`Voce errou! O numero secreto é menor que ${chute}`); 
        } else {
            alert(`Voce errou! O numero secreto é maior que ${chute}`);
        }
        tentativas++;   //tentativas = tentaivas + 1
    }
}
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'; //operador ternario
    alert(`Parabens!! Voce descobriu o numero secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}. `); 

//if (tentativas > 1){
   // alert(`Parabens!! Voce descobriu o numero secreto ${numeroSecreto} com ${tentativas} tentativas. `); 
//} else {
   // alert(`Parabens!! Voce descobriu o numero secreto ${numeroSecreto} com ${tentativas} tentativa. `); 
//}
