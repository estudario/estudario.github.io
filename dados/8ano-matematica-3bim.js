/* Matemática — 8º ano — 3º bimestre
   Equações do 1º grau com duas incógnitas, pares ordenados, classificação de
   equações, divisão de frações e porcentagem com equações. */
QUIZ.registrar({
  id:"8ano-matematica-3bim", ano:"8º ano", materia:"Matemática", emoji:"📐",
  bimestre:"3º bimestre", tema:"Equações com duas incógnitas, sistemas e porcentagem",
  qtdAquecimento:8, qtdTeste:14,
  rodadas:[
{ id:"r1", emoji:"📊", nome:"Rodada 1 — Equações com duas incógnitas",
  desc:"Pares ordenados, o plano cartesiano, soluções e a classificação das equações.",
  resumo:[
    "Uma equação do 1º grau com DUAS incógnitas, como x + y = 5, tem soluções em forma de PAR ORDENADO (x, y): o primeiro número é a ABSCISSA (x) e o segundo, a ORDENADA (y).",
    "Para achar soluções, atribua um valor a uma incógnita e calcule a outra: se x = 2, então y = 3, e o par (2, 3) satisfaz a equação.",
    "A representação gráfica de uma equação do 1º grau com duas incógnitas, no sistema de eixos coordenados, é uma RETA.",
    "Para verificar se um par é solução, SUBSTITUA os valores na equação: (2, −5) em 4x + y = 3 → 4·2 + (−5) = 3 ✔.",
    "Classificação num conjunto universo U: DETERMINADA (uma única solução), IMPOSSÍVEL (nenhuma solução) e INDETERMINADA (infinitas soluções).",
    "INVERSO de um número: aquele que multiplicado por ele dá 1 (inverso de 2/3 é 3/2). Para DIVIDIR frações: multiplique a primeira pelo inverso da segunda.",
    "O jogo batalha-naval usa o mesmo conhecimento: localizar posições por coordenadas, como os pares ordenados."
  ],
  questoes:[
    {p:"Como se chama a dupla de valores (x, y) que é solução de uma equação com duas incógnitas?", alt:["Par ordenado","Fração","Dízima","Par perfeito"], c:0, exp:"Cada solução de x + y = 5 é um par ordenado (x, y), que pode ser marcado no plano cartesiano."},
    {p:"No par ordenado (x, y), como se chamam o primeiro e o segundo números?", alt:["Abscissa (x) e ordenada (y)","Ordenada (x) e abscissa (y)","Numerador e denominador","Base e altura"], c:0, exp:"Primeiro vem a abscissa, no eixo x (horizontal); depois a ordenada, no eixo y (vertical).", err:{1:"É o contrário: a abscissa é o primeiro número, a ordenada é o segundo."}},
    {t:"num", p:"Na equação x + y = 5, se x = 2, quanto vale y?", r:"3", exp:"Substituindo: 2 + y = 5 → y = 5 − 2 = 3. O par (2, 3) é uma solução."},
    {t:"num", p:"Na equação x + y = 5, se x = −1, quanto vale y?", r:"6", exp:"−1 + y = 5 → y = 5 + 1 = 6. O par (−1, 6) também é solução: a equação tem infinitas!"},
    {p:"A representação gráfica de uma equação do 1º grau com duas incógnitas é:", alt:["Uma reta","Um círculo","Um único ponto","Um quadrado"], c:0, exp:"Marcando os pares ordenados que são soluções no sistema de eixos, todos ficam alinhados: formam uma reta."},
    {p:"O par (2, −5) é solução de 4x + y = 3?", alt:["Sim: 4·2 + (−5) = 8 − 5 = 3 ✔","Não, porque tem número negativo","Não: 4·2 + (−5) = 13","Impossível saber"], c:0, exp:"Verificar é substituir: 4·2 = 8; 8 + (−5) = 3. Bate com o lado direito, então é solução.", err:{1:"Números negativos podem ser solução normalmente — o que importa é a igualdade fechar."}},
    {p:"Uma equação que tem UMA ÚNICA solução no conjunto universo é chamada de:", alt:["Determinada","Impossível","Indeterminada","Imprópria"], c:0, exp:"Determinada = uma única solução; impossível = nenhuma; indeterminada = infinitas."},
    {p:"Uma equação que NÃO tem solução no conjunto universo é:", alt:["Impossível","Determinada","Indeterminada","Equilibrada"], c:0, exp:"Se nenhum valor do universo serve, a equação é impossível naquele conjunto. Ex.: x + 3 = 1 com U = N (naturais) — daria x = −2, que não é natural."},
    {p:"E uma equação com INFINITAS soluções é:", alt:["Indeterminada","Impossível","Determinada","Ilimitada"], c:0, exp:"x + y = 5 sozinha é indeterminada: (0,5), (1,4), (2,3), (−1,6)... infinitos pares servem."},
    {t:"num", p:"Resolva: 5p + 3 = p − 17 (U = ℤ). Quanto vale p?", r:"-5", exp:"5p − p = −17 − 3 → 4p = −20 → p = −5. Confira: 5·(−5)+3 = −22 e (−5)−17 = −22 ✔"},
    {t:"num", p:"Calcule o número cujo triplo é igual à sua metade somada com 35.", r:"14", exp:"3x = x/2 + 35 → 3x − x/2 = 35 → 5x/2 = 35 → x = 14. Confira: triplo = 42; metade + 35 = 7 + 35 = 42 ✔"},
    {t:"num", p:"Numa classe, 1/3 dos alunos gosta de futebol, 1/4 prefere cinema, 1/6 gosta de música e os 12 restantes preferem leitura. Quantos alunos tem a classe?", r:"48", exp:"x/3 + x/4 + x/6 + 12 = x → (4x+3x+2x)/12 + 12 = x → 9x/12 + 12 = x → 12 = 3x/12 → x = 48. Confira: 16 + 12 + 8 + 12 = 48 ✔"},
    {t:"num", p:"Numa turma, 50% gostam de rock, 35% gostam de rap e os 6 alunos restantes gostam de pagode. Quantos alunos tem a turma?", r:"40", exp:"50% + 35% = 85%, então os 6 do pagode são os 15% restantes: 0,15x = 6 → x = 40."},
    {p:"O que é o inverso de um número?", alt:["O número que, multiplicado por ele, dá 1","O número com sinal trocado","O dobro dele","O número dividido por 2"], c:0, exp:"Inverso de 2/3 é 3/2, porque 2/3 × 3/2 = 1. Todo racional diferente de zero tem inverso.", err:{1:"Trocar o sinal dá o OPOSTO (−5 é o oposto de 5), não o inverso."}},
    {t:"num", p:"Qual é o inverso de 5? (pode responder em fração ou decimal)", r:"0.2", aceita:["1/5","0,2"], exp:"O inverso de 5 é 1/5 = 0,2, pois 5 × 1/5 = 1."},
    {p:"Qual é a regra prática para dividir frações?", alt:["Multiplicar a primeira fração pelo inverso da segunda","Somar os numeradores","Dividir numerador por numerador sempre","Inverter a primeira fração"], c:0, exp:"a/b ÷ c/d = a/b × d/c. O outro caminho do livro é reduzir ao mesmo denominador e dividir os numeradores.", err:{3:"Quem é invertida é a SEGUNDA fração (o divisor), não a primeira."}},
    {p:"Que conhecimento matemático usamos para jogar batalha-naval?", alt:["Localização por coordenadas, como os pares ordenados","Frações equivalentes","Porcentagem","Raiz quadrada"], c:0, exp:"Cada tiro é um par (coluna, linha) — o mesmo princípio do sistema de eixos coordenados do plano cartesiano."}
  ]},
{ id:"r2", emoji:"💸", nome:"Rodada 2 — Porcentagem com equações",
  desc:"Multa, desconto e mensalidade: montando a equação certa para cada situação.",
  resumo:[
    "Porcentagem em decimal: 5% = 0,05 · 15% = 0,15 · 20% = 0,20 · 100% = 1.",
    "MULTA de 5%: paga-se 100% + 5% = 105% do valor → equação 1,05x = valor pago.",
    "DESCONTO de 15%: paga-se 100% − 15% = 85% → equação 0,85x = valor pago.",
    "Exemplo da multa: 1,05x = 216,30 → x = 216,30 ÷ 1,05 = 206,00 (valor original da conta).",
    "Exemplo do desconto: 0,85x = 125,80 → x = 148,00 (preço sem desconto).",
    "Desconto sobre desconto se calcula em etapas: 20% e depois mais 2% → multiplica por 0,80 e depois por 0,98 (não é 22% de uma vez).",
    "PIX: meio eletrônico e instantâneo de pagamentos e transferências criado pelo Banco Central do Brasil em 2020."
  ],
  questoes:[
    {p:"Como se escreve 5% na representação decimal?", alt:["0,05","0,5","5,0","0,005"], c:0, exp:"5% = 5/100 = 0,05.", err:{1:"0,5 é 50%!"}},
    {p:"Francisco pagou a conta de água com multa de 5%. Que porcentagem do valor original ele pagou?", alt:["105%","95%","5%","100%"], c:0, exp:"Multa soma: 100% + 5% = 105%, que em decimal é 1,05.", err:{1:"95% seria um DESCONTO de 5%."}},
    {p:"Qual equação resolve o problema da multa, se ele pagou R$ 216,30?", alt:["1,05x = 216,30","0,95x = 216,30","x + 5 = 216,30","5x = 216,30"], c:0, exp:"x é a conta original; com 5% de multa vira 1,05x, que é igual ao valor pago."},
    {t:"num", p:"Resolva: 1,05x = 216,30. Qual era o valor original da conta (em reais)?", r:"206", aceita:["206,00","206.00"], exp:"x = 216,30 ÷ 1,05 = 206,00. Confira: 206 + 5% de 206 (10,30) = 216,30 ✔"},
    {p:"Uma loja dá 15% de desconto. Que fração decimal do preço o cliente paga?", alt:["0,85","0,15","1,15","0,50"], c:0, exp:"100% − 15% = 85% = 0,85. A equação do problema fica 0,85x = preço pago.", err:{1:"0,15 é o desconto, não o que se paga."}},
    {t:"num", p:"Paula pagou R$ 125,80 num tênis com 15% de desconto. Qual era o preço sem desconto (em reais)?", r:"148", aceita:["148,00","148.00"], exp:"0,85x = 125,80 → x = 125,80 ÷ 0,85 = 148,00."},
    {t:"num", p:"A escola dá 20% de desconto no pagamento antecipado. Com o desconto, Paulo pagou R$ 24.000 por filho. Qual era a anuidade sem desconto (em reais)?", r:"30000", aceita:["30.000","30000,00"], exp:"0,80x = 24.000 → x = 24.000 ÷ 0,80 = 30.000."},
    {t:"num", p:"Se a anuidade sem desconto é R$ 30.000 e são 12 mensalidades, qual é o valor de cada mensalidade (em reais)?", r:"2500", aceita:["2.500","2500,00"], exp:"30.000 ÷ 12 = 2.500 por mês."},
    {t:"num", p:"O segundo filho teve mais 2% de desconto sobre os R$ 24.000. Quanto Paulo pagou pela anuidade dele (em reais)?", r:"23520", aceita:["23.520","23520,00"], exp:"Desconto em etapa: 24.000 × 0,98 = 23.520. Repare que não é o mesmo que dar 22% de uma vez sobre 30.000."},
    {t:"num", p:"Quanto é 15% de 200?", r:"30", exp:"0,15 × 200 = 30."},
    {t:"num", p:"Um produto de R$ 150 teve aumento de 10%. Qual é o novo preço (em reais)?", r:"165", aceita:["165,00"], exp:"Aumento: 1,10 × 150 = 165."},
    {p:"O que é o Pix?", alt:["Meio eletrônico e instantâneo de pagamentos criado pelo Banco Central do Brasil em 2020","Um cartão de crédito internacional","Uma moeda estrangeira","Um imposto sobre compras"], c:0, exp:"O Pix permite transações e transferências instantâneas, e foi criado pelo Banco Central do Brasil em 2020."},
    {p:"Qual é a grande estratégia para resolver problemas de porcentagem?", alt:["Escrever a porcentagem como decimal e montar uma equação com o valor desconhecido","Chutar valores até acertar","Sempre dividir por 100 no final","Usar régua e compasso"], c:0, exp:"Transformar 105% em 1,05 (ou 85% em 0,85) e montar a equação 1,05x = valor pago é o método que resolve qualquer problema desses."},
    {p:"Desconto de 20% e depois mais 2% é o mesmo que 22% de uma vez?", alt:["Não: os descontos em etapas se calculam multiplicando 0,80 e depois 0,98","Sim, sempre dá igual","Sim, se o valor for redondo","Não, dá sempre mais barato que 22%"], c:0, exp:"0,80 × 0,98 = 0,784 → desconto total de 21,6%, um pouco menor que 22%, porque o segundo desconto incide sobre um valor já reduzido."}
  ]}
]});
