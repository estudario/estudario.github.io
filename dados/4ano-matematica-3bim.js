/* Matemática — 4º ano — 3º bimestre
   Multiplicação e tabuadas, quadriláteros, números decimais e educação financeira. */
QUIZ.registrar({
  id:"4ano-matematica-3bim", ano:"4º ano", materia:"Matemática", emoji:"✖️",
  bimestre:"3º bimestre", tema:"Tabuadas, quadriláteros e números decimais",
  qtdAquecimento:8, qtdTeste:15,
  rodadas:[
{ id:"r1", emoji:"🔢", nome:"Rodada 1 — Multiplicação e tabuadas",
  desc:"Os truques da Minovaca: tabuadas do 1, do 5 e do 10, pares e ímpares, multiplicar por 10, 100 e 1.000.",
  resumo:[
    "Tabuada do 1: todo número multiplicado por 1 é ele mesmo — por isso ela pode ser “eliminada” do tabuleiro.",
    "Tabuada do 10: basta acrescentar um zero ao número (7×10 = 70).",
    "Truque do 5: o resultado da tabuada do 5 é a METADE do resultado da tabuada do 10 (8×10 = 80, então 8×5 = 40).",
    "Quando um dos fatores é PAR, o produto é sempre PAR. Nas colunas do 2, 4, 6, 8 e 10 do quadro só aparecem números pares.",
    "Multiplicar por 10, 100 ou 1.000: faça a conta pequena e acrescente os zeros. 6×8 = 48 → 6×80 = 480 → 6×800 = 4.800 → 6×8.000 = 48.000.",
    "O resultado da multiplicação chama-se PRODUTO; os números multiplicados são os FATORES."
  ],
  questoes:[
    {p:"Por que a Minovaca disse que a tabuada do 1 pode ser eliminada do tabuleiro?", alt:["Porque todo número multiplicado por 1 é ele mesmo","Porque ninguém usa o número 1","Porque 1 não é um número","Porque a resposta é sempre 1"], c:0, exp:"Multiplicar por 1 não muda o número: 7×1 = 7, 25×1 = 25. Não precisa decorar.", err:{3:"A resposta não é sempre 1: é sempre o OUTRO fator. 9×1 = 9."}},
    {p:"E por que a tabuada do 10 também pode ser eliminada?", alt:["Porque basta acrescentar um zero ao número","Porque o 10 é muito grande","Porque ela é igual à do 5","Porque ninguém multiplica por 10"], c:0, exp:"Para multiplicar por 10, é só acrescentar um zero: 7×10 = 70, 32×10 = 320."},
    {p:"Quanto é 7×10?", alt:["70","17","7","700"], c:0, exp:"Multiplicar por 10 = acrescentar um zero: 7 vira 70."},
    {p:"Qual é a relação entre a tabuada do 5 e a do 10?", alt:["O resultado do ×5 é a metade do resultado do ×10","O resultado do ×5 é o dobro do ×10","Não existe relação","O ×5 sempre termina em zero"], c:0, exp:"5 é a metade de 10. Então 8×5 = metade de 8×10 = metade de 80 = 40.", err:{1:"É o contrário: o ×10 é o dobro do ×5."}},
    {p:"Usando o truque da metade, quanto é 6×5?", alt:["30","60","35","25"], c:0, exp:"6×10 = 60, e a metade de 60 é 30. Então 6×5 = 30."},
    {p:"Quando um dos fatores da multiplicação é PAR, o produto é:", alt:["Sempre par","Sempre ímpar","Às vezes par, às vezes ímpar","Sempre terminado em 5"], c:0, exp:"Foi a conclusão do quadro da tabuada: basta um fator par para o produto ser par. 3×4 = 12 (par)."},
    {p:"Quando multiplicamos qualquer número por 2, 4, 6, 8 ou 10, os resultados são sempre:", alt:["Só números pares","Só números ímpares","Pares e ímpares misturados","Só números terminados em zero"], c:0, exp:"Como um dos fatores é par, todos os produtos são pares."},
    {p:"E multiplicando por 3 ou por 7, que tipos de resultados aparecem?", alt:["Números pares e ímpares, alternados","Só pares","Só ímpares","Só múltiplos de 10"], c:0, exp:"Com fator ímpar, o resultado depende do outro fator: 3×2 = 6 (par), 3×3 = 9 (ímpar). Por isso pares e ímpares se alternam."},
    {p:"Quanto é 6×8?", alt:["48","42","54","46"], c:0, exp:"6×8 = 48. É a base para calcular 6×80, 6×800 e assim por diante."},
    {p:"Se 6×8 = 48, quanto é 6×80?", alt:["480","4.800","488","408"], c:0, exp:"6×80 é 10 vezes maior que 6×8: acrescenta um zero → 480."},
    {p:"Quanto é 7×400?", alt:["2.800","280","28.000","740"], c:0, exp:"7×4 = 28, e 400 tem dois zeros: 28 + dois zeros = 2.800."},
    {p:"Quanto é 9×6.000?", alt:["54.000","5.400","540","54"], c:0, exp:"9×6 = 54, e 6.000 tem três zeros: 54.000."},
    {p:"Quanto é 4×7?", alt:["28","24","32","21"], c:0, exp:"4×7 = 28 — a mesma resposta de 7×4: a ordem dos fatores não muda o produto."},
    {p:"Como se chama o resultado de uma multiplicação?", alt:["Produto","Soma","Quociente","Fator"], c:0, exp:"O resultado da multiplicação é o produto; os números multiplicados são os fatores.", err:{2:"Quociente é o resultado da DIVISÃO."}},
    {p:"Quanto é 3×9?", alt:["27","21","36","24"], c:0, exp:"3×9 = 27. Dica: 3×10 = 30, tira um grupo de 3 → 27."}
  ]},
{ id:"r2", emoji:"🔷", nome:"Rodada 2 — Quadriláteros",
  desc:"Polígonos de 4 lados: trapézios, paralelogramos, retângulos, losangos e quadrados.",
  resumo:[
    "QUADRILÁTERO é o polígono de 4 lados. Todo quadrilátero é polígono, mas nem todo polígono é quadrilátero — o triângulo, por exemplo, é polígono e não é quadrilátero.",
    "TRAPÉZIO: quadrilátero com PELO MENOS UM par de lados paralelos.",
    "PARALELOGRAMO: trapézio que possui DOIS pares de lados paralelos.",
    "RETÂNGULO: paralelogramo com os QUATRO ÂNGULOS RETOS. Nem todo paralelogramo tem ângulo reto; quando tem, tem os quatro.",
    "LOSANGO: paralelogramo com os quatro LADOS DE MESMA MEDIDA.",
    "QUADRADO: tem os quatro ângulos retos E os quatro lados iguais — é retângulo e losango ao mesmo tempo.",
    "O ângulo reto é marcado com um quadradinho no canto, e usamos o instrumento “ângulo reto” para conferir.",
    "Piet Mondrian (1872–1944), pintor holandês, fazia quadros com retângulos e quadrados: “o mínimo era o máximo”."
  ],
  questoes:[
    {p:"O que é um quadrilátero?", alt:["Um polígono de quatro lados","Qualquer figura com lados","Um polígono de três lados","Uma figura redonda"], c:0, exp:"Quadrilátero = polígono de 4 lados. Quadrado, retângulo, trapézio e losango são exemplos.", err:{2:"Polígono de três lados é o triângulo."}},
    {p:"Complete: “Todo quadrilátero é polígono, mas...”", alt:["nem todo polígono é quadrilátero","todo polígono é quadrilátero","nenhum polígono é quadrilátero","só o quadrado é polígono"], c:0, exp:"O triângulo prova isso: é polígono (tem lados retos e é fechado) mas tem 3 lados, não 4."},
    {p:"O triângulo é um quadrilátero?", alt:["Não: ele é polígono, mas tem só 3 lados","Sim, porque é uma figura fechada","Sim, porque tem ângulos","Não, porque não é polígono"], c:0, exp:"Quadrilátero precisa de 4 lados. O triângulo tem 3: é polígono, mas não é quadrilátero.", err:{3:"O triângulo É polígono — só não é quadrilátero."}},
    {p:"Qual é a característica que define o trapézio?", alt:["Ter pelo menos um par de lados paralelos","Ter os quatro lados iguais","Ter quatro ângulos retos","Ter os lados curvos"], c:0, exp:"Trapézio é o quadrilátero com pelo menos um par de lados paralelos."},
    {p:"O que é um paralelogramo, segundo o livro?", alt:["Um trapézio que possui dois pares de lados paralelos","Qualquer figura com lados paralelos","Um trapézio com um ângulo reto","Um polígono de cinco lados"], c:0, exp:"O paralelogramo é um trapézio especial: em vez de um par, tem DOIS pares de lados paralelos."},
    {p:"Todos os paralelogramos possuem ângulo reto?", alt:["Não — só alguns, como o retângulo e o quadrado","Sim, todos","Não, nenhum tem","Só os que têm lados iguais"], c:0, exp:"A maioria dos paralelogramos não tem ângulo reto; retângulo e quadrado são os que têm."},
    {p:"Quantos ângulos retos, no máximo, um paralelogramo pode ter?", alt:["4","1","2","8"], c:0, exp:"Quando um paralelogramo tem ângulo reto, ele tem os quatro — e aí ele é um retângulo."},
    {p:"O que é um retângulo?", alt:["Um paralelogramo com os quatro ângulos retos","Um quadrilátero com lados curvos","Um trapézio sem lados paralelos","Um polígono de seis lados"], c:0, exp:"Retângulo = paralelogramo cujos quatro ângulos são retos."},
    {p:"O que é um losango?", alt:["Um paralelogramo com os quatro lados de mesma medida","Um quadrilátero sem lados paralelos","Um triângulo esticado","Um retângulo com lados diferentes"], c:0, exp:"Medindo com a régua: se os quatro lados do paralelogramo têm a mesma medida, ele é um losango."},
    {p:"Por que o quadrado é um retângulo?", alt:["Porque tem os quatro ângulos retos, com os quatro lados de mesma medida","Porque tem lados curvos","Ele não é um retângulo","Porque tem só dois ângulos retos"], c:0, exp:"O quadrado cumpre a regra do retângulo (4 ângulos retos) e ainda tem os 4 lados iguais — por isso também é losango."},
    {p:"Que símbolo é usado para marcar um ângulo reto em um desenho geométrico?", alt:["Um quadradinho no canto do ângulo","Uma estrela","Um círculo completo","Uma seta"], c:0, exp:"O quadradinho no canto indica que aquele ângulo é reto."},
    {p:"Quantos pares de lados paralelos tem um quadrado?", alt:["2","1","4","Nenhum"], c:0, exp:"O quadrado é paralelogramo: os lados opostos formam 2 pares paralelos."},
    {p:"Quem foi Piet Mondrian?", alt:["Um pintor holandês que pintava com formas geométricas, como retângulos e quadrados","Um matemático que inventou o trapézio","Um escultor brasileiro","O inventor da régua"], c:0, exp:"Mondrian (1872–1944) decompunha paisagens em traços básicos. Para ele, “o mínimo era o máximo” — e dá para achar quadrados e retângulos nas obras dele."},
    {p:"Um paralelogramo sem nenhum ângulo reto e com lados vizinhos de medidas diferentes é um...", alt:["Paralelogramo comum (não é retângulo, nem losango, nem quadrado)","Quadrado","Retângulo","Triângulo"], c:0, exp:"Sem ângulo reto não é retângulo; sem os 4 lados iguais não é losango; logo é só um paralelogramo.", err:{1:"Quadrado exige 4 ângulos retos e 4 lados iguais.",2:"Retângulo exige os 4 ângulos retos."}},
    {p:"Qual instrumento simples serve para conferir se um ângulo é reto?", alt:["O instrumento “ângulo reto” construído no caderno anterior","Uma balança","Um copo de água","Uma calculadora"], c:0, exp:"Um “ângulo reto” de papel (ou um esquadro) serve como unidade de medida: encaixa no canto do ângulo e compara."}
  ]},
{ id:"r3", emoji:"💰", nome:"Rodada 3 — Decimais e dinheiro",
  desc:"Décimos, centésimos, a vírgula, e problemas de compras, descontos e economia.",
  resumo:[
    "Dividir 1 por 10 dá 0,1 — o DÉCIMO. A unidade foi repartida em 10 partes iguais.",
    "A VÍRGULA separa a parte INTEIRA da parte DECIMAL do número.",
    "Dividir 1 por 100 dá 0,01 — o CENTÉSIMO.",
    "Escrita: sete décimos = 0,7 · sete inteiros e dois décimos = 7,2 · setenta e dois centésimos = 0,72.",
    "0,1 é menor que 1. Somando 0,1 dez vezes, chegamos em 1. A metade da unidade é 0,5.",
    "Dinheiro usa decimais: R$ 99,90 são 99 reais e 90 centavos.",
    "DESCONTO é quanto o preço diminuiu: de R$ 99,90 por R$ 93,00 → desconto de R$ 6,90.",
    "Comparar formas de pagamento: some as parcelas do cartão e compare com o valor à vista do boleto. Frete grátis = não pagar pela entrega."
  ],
  questoes:[
    {p:"Ao dividir 1 por 10 na calculadora, que número aparece no visor?", alt:["0,1","10","0,01","1,1"], c:0, exp:"1÷10 = 0,1, o décimo: a unidade repartida em 10 partes iguais.", err:{2:"0,01 é o resultado de 1÷100 — o centésimo."}},
    {p:"Como se chama o número 0,1?", alt:["Um décimo","Um centésimo","Uma dezena","Um inteiro"], c:0, exp:"0,1 = um décimo = uma das 10 partes iguais da unidade."},
    {p:"Para que serve a vírgula em um número como 7,2?", alt:["Separar a parte inteira da parte decimal","Enfeitar o número","Mostrar que o número é grande","Separar as classes dos milhares"], c:0, exp:"À esquerda da vírgula fica a parte inteira (7); à direita, a parte decimal (2 décimos)."},
    {p:"Quanto é 1 dividido por 100?", alt:["0,01","0,1","100","0,001"], c:0, exp:"1÷100 = 0,01, o centésimo: a unidade repartida em 100 partes iguais."},
    {p:"Como se escreve “sete décimos” com números?", alt:["0,7","7,0","0,07","70"], c:0, exp:"Sete décimos = 7 partes de 0,1 = 0,7.", err:{2:"0,07 é sete CENTÉSIMOS."}},
    {p:"Como se escreve “sete inteiros e dois décimos”?", alt:["7,2","2,7","7,02","72"], c:0, exp:"Parte inteira 7, parte decimal 2 décimos: 7,2."},
    {p:"Como se escreve “setenta e dois centésimos”?", alt:["0,72","72,0","0,072","7,2"], c:0, exp:"72 centésimos = 72 partes de 0,01 = 0,72.", err:{3:"7,2 é sete inteiros e dois décimos — bem maior que 0,72."}},
    {p:"0,1 é menor ou maior do que 1?", alt:["Menor: é só uma das 10 partes de 1","Maior, porque tem mais algarismos","São iguais","Depende do dia"], c:0, exp:"0,1 é um pedacinho da unidade. Precisamos de dez 0,1 para formar 1."},
    {p:"Somando 0,1 dez vezes, qual é o resultado?", alt:["1","0,10","10","0,2"], c:0, exp:"Dez décimos formam uma unidade inteira: 0,1×10 = 1."},
    {p:"Qual número decimal corresponde à metade da unidade?", alt:["0,5","0,2","5,0","0,05"], c:0, exp:"Metade de 1 = 5 décimos = 0,5."},
    {p:"Um tênis custava R$ 99,90 e saiu por R$ 93,00 no boleto. De quanto foi o desconto?", alt:["R$ 6,90","R$ 9,90","R$ 3,00","R$ 7,90"], c:0, exp:"99,90 − 93,00 = 6,90. Conte: de 93 até 99 são 6 reais, mais 90 centavos."},
    {p:"Na Loja 2, o tênis custava 104 reais e saiu por 96 no boleto. Qual foi o desconto?", alt:["8 reais","10 reais","96 reais","4 reais"], c:0, exp:"104 − 96 = 8. A Loja 2 deu desconto maior, mas o preço final dela (96) ainda ficou acima dos 93 da Loja 1."},
    {p:"Loja 1: R$ 93 no boleto ou 3 parcelas de R$ 32 no cartão. Qual forma sai mais barata?", alt:["O boleto: 3×32 = 96, três reais a mais que os 93","O cartão, porque parcela","As duas custam igual","O cartão: 3×32 = 90"], c:0, exp:"3×32 = 96. Pagando à vista no boleto (93), economiza R$ 3.", err:{3:"3×32 = 96, não 90."}},
    {p:"O que significa “frete grátis”?", alt:["Não pagar nada pela entrega do produto","O produto é de graça","Pagar a metade da entrega","Buscar o produto na loja"], c:0, exp:"Frete é o valor da entrega. Frete grátis = a loja entrega sem cobrar por isso."},
    {p:"Lucas gastava 135 litros de água num banho de 15 minutos. Baixando para 5 minutos, quantos litros gasta aproximadamente?", alt:["45 litros","90 litros","135 litros","15 litros"], c:0, exp:"5 minutos é a terça parte de 15. Então gasta a terça parte da água: 135÷3 = 45 litros — uma economia de 90 litros por banho!", err:{1:"90 litros é quanto ele ECONOMIZA (135−45), não quanto gasta."}}
  ]}
]});
