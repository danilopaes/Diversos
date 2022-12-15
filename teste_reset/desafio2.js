//faca um algoritmo que retorne a posição em que um determinado dígito numérico aparece dentro de um intervalo informado

// para a entrada valorinicial = 0, valorfinal = 22 e digito = 0, o retorno será 0;
// para a entrada valorinicial = 0, valorfinal = 18 e digito = 0, o retorno será 9;
// para a entrada valorinicial = 1, valorfinal = 100 e digito = 0, o retorno será 4;



function desafio2(valorInicial, valorFinal, digito) {

    let valorInicial = 0;
    let valorFinal = 22;
    let digito = 0;

    for (let i = valorInicial; i <= valorFinal; i++) {
        if (i % 10 == digito) {
            console.log(i);
        }
    }



    return 0
}

module.exports = { desafio2 }