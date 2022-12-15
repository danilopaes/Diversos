//sistema que calcula o retorno de um investimento
//o sistema deve receber o valor do investimento, a taxa de juros e o tempo de investimento
//o sistema deve calcular o valor do investimento com juros compostos
//o sistema deve calcular o valor do investimento com juros simples


//variáveis
var valorInvestimento = 0;
var taxaJuros = 0;
var tempoInvestimento = 0;
var valorJurosCompostos = 0;
var valorJurosSimples = 0;


//entrada de dados
valorInvestimento = prompt("Digite o valor do investimento: ");
taxaJuros = prompt("Digite a taxa de juros: ");
tempoInvestimento = prompt("Digite o tempo de investimento: ");

//processamento
valorJurosCompostos = valorInvestimento * Math.pow((1 + taxaJuros), tempoInvestimento);
valorJurosSimples = valorInvestimento * (1 + taxaJuros * tempoInvestimento);

//saída de dados
alert("O valor do investimento com juros compostos é: " + valorJurosCompostos);
alert("O valor do investimento com juros simples é: " + valorJurosSimples);

//fim do programa