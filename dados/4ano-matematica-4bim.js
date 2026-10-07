/* Matemática — 4º ano — 4º bimestre — Colégio Progresso
   Módulos 28, 30 e 33: frações, decimais na reta numérica, perímetro e área. */
QUIZ.registrar({
  id:"4ano-matematica-4bim", ano:"4º ano", materia:"Matemática", emoji:"🔢",
  bimestre:"4º bimestre", tema:"Frações, decimais na reta, perímetro e área",
  qtdAquecimento:8, qtdTeste:12,
  rodadas:[
{ id:"r1", emoji:"🍕", nome:"Rodada 1 — Frações: partes iguais de um todo",
  desc:"Todo-referência, numerador, denominador e a leitura das frações.",
  resumo:[
    "Os números naturais representam quantidades de objetos. Para representar a METADE de uma folha ou UM QUARTO de uma quantidade de laranjas usamos os números racionais na representação fracionária — as FRAÇÕES.",
    "O TODO ou TODO-REFERÊNCIA pode ser 1 folha de papel, 1 chocolate, 6 laranjas, 10 adesivos, etc., que serão divididos em PARTES IGUAIS ou GRUPOS IGUAIS.",
    "FRAÇÃO é um número que representa parte ou partes iguais do todo-referência.",
    "NUMERADOR (o de cima) indica quantas partes ou grupos foram CONSIDERADOS. DENOMINADOR (o de baixo) indica em quantas partes ou grupos iguais o todo-referência foi DIVIDIDO.",
    "Leituras: 1/2 um meio · 1/3 um terço · 1/4 um quarto · 1/5 um quinto · 1/6 um sexto · 1/7 um sétimo · 1/8 um oitavo (ou oitava parte) · 1/9 um nono · 1/10 um décimo (ou décima parte) · 2/5 dois quintos · 3/8 três oitavos.",
    "Denominadores MAIORES QUE 10 são lidos com a palavra AVOS: 3/11 lê-se três onze avos; 5/12 lê-se cinco doze avos; 1/13 lê-se um treze avos; 4/30 lê-se quatro trinta avos.",
    "O todo-referência também pode ser uma COLEÇÃO. Dividir 12 bolinhas em 4 grupos iguais dá 3 bolinhas por grupo; 1 grupo em relação aos 4 é 1/4 da coleção."
  ],
  questoes:[
    {p:"O que é o todo-referência numa fração?", alt:["O inteiro que será dividido em partes iguais ou grupos iguais","O resultado da divisão","O número de cima da fração","Sempre uma pizza"], c:0, exp:"Pode ser 1 folha de papel, 1 chocolate, 6 laranjas, 10 adesivos — qualquer inteiro que se divide igualmente."},
    {p:"O que o NUMERADOR de uma fração indica?", alt:["Quantas partes ou grupos foram considerados","Em quantas partes o todo foi dividido","O resto da divisão","O tamanho do todo"], c:0, exp:"Numerador é o número de cima. Quem indica em quantas partes o todo foi dividido é o denominador.", err:{1:"Essa é a função do DENOMINADOR, o número de baixo."}},
    {p:"O que o DENOMINADOR de uma fração indica?", alt:["Em quantas partes ou grupos iguais o todo-referência foi dividido","Quantas partes foram pintadas","Quantos inteiros existem","A soma das partes"], c:0, exp:"Em 3/8, o 8 diz que o todo foi dividido em 8 partes iguais, e o 3 diz que consideramos 3 delas."},
    {p:"Como se lê a fração 2/5?", alt:["Dois quintos","Dois cincos","Cinco dois","Dois sobre cinco avos"], c:0, exp:"Denominador 5 lê-se 'quintos'. Com numerador 2: dois quintos."},
    {p:"Como se lê a fração 3/11?", alt:["Três onze avos","Três onzes","Onze terços","Três décimos"], c:0, exp:"Denominadores MAIORES que 10 usam a palavra AVOS: três onze avos."},
    {p:"Como se lê a fração 5/12?", alt:["Cinco doze avos","Cinco doze","Doze quintos","Cinco décimos"], c:0, exp:"Mesma regra dos avos, porque 12 é maior que 10."},
    {p:"Como se lê a fração 1/8?", alt:["Um oitavo, ou oitava parte","Um oito avos","Oito inteiros","Um nono"], c:0, exp:"Denominadores até 10 têm nome próprio: meio, terço, quarto, quinto, sexto, sétimo, oitavo, nono, décimo."},
    {t:"num", p:"Um retângulo foi dividido em 3 partes iguais e 1 parte foi pintada. Que fração está pintada? Escreva no formato 1/3, 2/3...", r:"1/3", aceita:["1/3"], exp:"1 parte considerada (numerador) de 3 partes iguais (denominador): 1/3."},
    {t:"num", p:"Um retângulo foi dividido em 3 partes iguais e 2 delas foram pintadas de verde. Que fração está verde?", r:"2/3", aceita:["2/3"], exp:"2 partes consideradas de 3 partes iguais: 2/3. A parte branca é 1/3."},
    {t:"num", p:"Escreva a fração em que o numerador é 1 e o denominador é 6.", r:"1/6", aceita:["1/6"], exp:"1/6, que se lê um sexto."},
    {t:"num", p:"Escreva a fração em que o numerador é 3 e o denominador é 8.", r:"3/8", aceita:["3/8"], exp:"3/8, que se lê três oitavos."},
    {t:"num", p:"Uma coleção de 12 bolinhas de gude foi dividida em 4 grupos com a mesma quantidade. Quantas bolinhas há em cada grupo?", r:"3", aceita:["3"], exp:"12 ÷ 4 = 3 bolinhas por grupo. Cada grupo representa 1/4 da coleção."},
    {t:"num", p:"Na mesma coleção dividida em 4 grupos iguais, que fração representam os 4 grupos juntos? (escreva no formato 4/4)", r:"4/4", aceita:["4/4"], exp:"4 grupos de 4: 4/4, que é o todo-referência inteiro."},
    {p:"Numa imagem há 10 animais, sendo 2 gatos. Que fração representa os gatos?", alt:["2/10, lida como dois décimos","10/2","2/8","8/10"], c:0, exp:"Numerador = quantidade considerada (2 gatos); denominador = total do todo-referência (10 animais)."}
  ]},
{ id:"r2", emoji:"📏", nome:"Rodada 2 — Decimais na reta numérica",
  desc:"Dividir o intervalo em 10 partes: décimos, centésimos e a leitura dos números.",
  resumo:[
    "Na reta numérica, o comprimento do intervalo entre dois números é considerado como a UNIDADE.",
    "O intervalo entre 0 e 1 corresponde a 1 unidade (ou 1 inteiro). Ao dividi-lo em 10 PARTES IGUAIS, cada parte vale 0,1 (um décimo), pois 1 : 10 = 0,1.",
    "O intervalo entre 8 e 9 também vale 1 unidade; dividido em 10 partes, cada parte vale 0,1 — e a reta mostra 8,1 · 8,2 · 8,3 ... 8,9.",
    "Podemos continuar dividindo. O intervalo entre 8,2 e 8,3 vale 0,1. Ao dividir 0,1 em 10 partes iguais, cada parte vale 0,01, pois 0,1 : 10 = 0,01.",
    "Resumo: dividir uma unidade em 10 dá DÉCIMOS (0,1); dividir um décimo em 10 dá CENTÉSIMOS (0,01).",
    "Os números 7,5 e 7,50 ocupam o MESMO PONTO na reta: acrescentar um zero à direita, depois da vírgula, não muda o valor do número."
  ],
  questoes:[
    {p:"Na reta numérica, o que se considera como UNIDADE?", alt:["O comprimento do intervalo entre dois números","O número zero","O maior número da reta","A espessura do traço"], c:0, exp:"O intervalo entre 0 e 1, entre 8 e 9 ou entre 15 e 16: todos valem 1 unidade."},
    {t:"num", p:"O intervalo entre 0 e 1 foi dividido em 10 partes iguais. Quanto vale cada parte? (use vírgula)", r:"0,1", aceita:["0,1","0.1",",1"], exp:"1 : 10 = 0,1, que se lê um décimo."},
    {t:"num", p:"O intervalo entre 8,2 e 8,3 vale 0,1. Dividindo-o em 10 partes iguais, quanto vale cada parte?", r:"0,01", aceita:["0,01","0.01",",01"], exp:"0,1 : 10 = 0,01, que se lê um centésimo."},
    {p:"Na reta, o intervalo entre 15 e 16 foi dividido em 10 partes iguais. Qual é o intervalo e quanto mede?", alt:["Vai de 15 a 16 e mede 1 unidade","Vai de 15 a 16 e mede 10 unidades","Vai de 0 a 16 e mede 16 unidades","Vai de 1 a 5 e mede 4 unidades"], c:0, exp:"Entre dois números naturais seguidos há sempre 1 unidade — e, dividida em 10, cada parte vale 0,1."},
    {t:"num", p:"Numa reta de 15 a 16 dividida em 10 partes iguais, o ponto assinalado está na terceira marca depois do 15. Que número é esse?", r:"15,3", aceita:["15,3","15.3"], exp:"Cada marca vale 0,1: 15,1 · 15,2 · 15,3. Lê-se quinze inteiros e três décimos."},
    {t:"num", p:"O intervalo entre 7 e 8 foi dividido em 10 partes, e cada parte foi dividida em 10 outras. Em quantas partes iguais o intervalo total ficou dividido?", r:"100", aceita:["100"], exp:"10 × 10 = 100 partes, cada uma valendo 0,01."},
    {p:"Ao localizar 7,5 e 7,50 na reta numérica, o que se observa?", alt:["Eles ocupam o mesmo ponto, porque são o mesmo número","7,50 fica bem depois de 7,5","7,5 é dez vezes maior","Um deles não existe na reta"], c:0, exp:"O zero à direita, depois da vírgula, não altera o valor: 7,5 = 7,50.", err:{1:"O zero acrescentado não desloca o número; ele só muda a forma de escrever."}},
    {t:"num", p:"Entre 7,1 e 7,2, qual número fica exatamente no meio?", r:"7,15", aceita:["7,15","7.15"], exp:"O intervalo vale 0,1; a metade dele é 0,05. Então 7,1 + 0,05 = 7,15."},
    {t:"num", p:"Qual número está 2 centésimos depois de 7,06?", r:"7,08", aceita:["7,08","7.08"], exp:"Cada centésimo é 0,01: 7,06 + 0,02 = 7,08."},
    {p:"Como se lê o número 3,45?", alt:["Três inteiros e quarenta e cinco centésimos","Três e quarenta e cinco","Trezentos e quarenta e cinco","Três e quarenta e cinco décimos"], c:0, exp:"Duas casas depois da vírgula indicam centésimos."},
    {t:"num", p:"Na reta de 0 a 3, onde fica o número que está uma marca de 0,1 depois do 2,5?", r:"2,6", aceita:["2,6","2.6"], exp:"2,5 + 0,1 = 2,6."},
    {p:"Qual destes números é o MAIOR?", alt:["0,9","0,6","0,2","0,15"], c:0, exp:"Comparando os décimos: 9 décimos é mais que 6, que 2 e que 1 décimo e 5 centésimos.", err:{3:"Cuidado: 0,15 tem mais algarismos, mas vale só 1 décimo e meio — menos que 0,2."}}
  ]},
{ id:"r3", emoji:"🟧", nome:"Rodada 3 — Perímetro e área",
  desc:"Contorno e superfície, o tangram, o mosaico e as molduras da Marina.",
  resumo:[
    "PERÍMETRO é a medida do comprimento do CONTORNO de uma figura: o número de vezes que a unidade de medida de comprimento escolhida cabe no contorno.",
    "Num retângulo desenhado em malha de 1 cm, contar as unidades do contorno (20 unidades) dá o mesmo que medir os quatro lados com régua e somar (20 cm), porque cada quadradinho mede 1 cm de lado.",
    "ÁREA é a medida da superfície (o 'miolo') da figura. Numa malha quadriculada de 1 cm × 1 cm, cada quadradinho representa 1 cm².",
    "Quando não conhecemos a medida do lado de uma superfície, usamos u.c. (unidade de comprimento) e u.a. (unidade de área).",
    "TANGRAM: tomando o triângulo pequeno como 1 u.a., o quadrado vale 2 u.a., o triângulo médio 2 u.a., o paralelogramo 2 u.a. e o triângulo grande 4 u.a. Qualquer figura formada pelas 7 peças tem 16 u.a.",
    "Descoberta importante: figuras de MESMA ÁREA podem ter PERÍMETROS DIFERENTES, e figuras de mesmo perímetro podem ter áreas diferentes.",
    "Para saber quanta moldura comprar para um quadro, é preciso calcular o PERÍMETRO (o contorno). Num retângulo, perímetro = comprimento + altura + comprimento + altura.",
    "Para saber quanto espaço uma superfície ocupa, calcula-se a ÁREA. Num retângulo, área = comprimento × altura."
  ],
  questoes:[
    {p:"O que é o perímetro de uma figura?", alt:["A medida do comprimento do contorno da figura","A quantidade de quadradinhos dentro dela","O número de lados","A altura da figura"], c:0, exp:"Perímetro é quantas vezes a unidade de comprimento escolhida cabe no contorno.", err:{1:"Isso é a ÁREA — a medida da superfície."}},
    {p:"Numa malha quadriculada de 1 cm × 1 cm, cada quadradinho representa qual área?", alt:["1 cm²","1 cm","4 cm²","10 cm²"], c:0, exp:"Lado de 1 cm por 1 cm: a área de cada quadradinho é 1 cm²."},
    {t:"num", p:"Um retângulo na malha tem 4 quadradinhos de comprimento e 2 de altura. Qual é a área dele, em cm²?", r:"8", aceita:["8"], exp:"4 × 2 = 8 quadradinhos, ou seja, 8 cm²."},
    {t:"num", p:"Esse mesmo retângulo de 4 cm por 2 cm: qual é o perímetro, em cm?", r:"12", aceita:["12"], exp:"Somando os quatro lados: 4 + 2 + 4 + 2 = 12 cm."},
    {t:"num", p:"Um quadrado tem 5 cm de lado. Qual é o perímetro dele, em cm?", r:"20", aceita:["20"], exp:"São quatro lados iguais: 5 + 5 + 5 + 5 = 20 cm."},
    {t:"num", p:"E qual é a área desse quadrado de 5 cm de lado, em cm²?", r:"25", aceita:["25"], exp:"5 × 5 = 25 cm²."},
    {p:"Duas figuras têm a mesma área. Elas têm necessariamente o mesmo perímetro?", alt:["Não: figuras de mesma área podem ter perímetros diferentes","Sim, sempre","Só se forem quadrados","Só se forem triângulos"], c:0, exp:"É uma das grandes descobertas do módulo: área e perímetro são medidas independentes."},
    {p:"No tangram, tomando o triângulo pequeno como 1 u.a., qual é a área do quadrado?", alt:["2 u.a.","1 u.a.","4 u.a.","8 u.a."], c:0, exp:"O quadrado é formado por 2 triângulos pequenos. O triângulo médio e o paralelogramo também valem 2 u.a."},
    {t:"num", p:"No tangram, tomando o triângulo pequeno como 1 u.a., qual é a área do triângulo grande?", r:"4", aceita:["4"], exp:"O triângulo grande equivale a 4 triângulos pequenos: 4 u.a."},
    {t:"num", p:"Qual é a área de qualquer figura formada com as 7 peças do tangram, em u.a. (triângulo pequeno = 1 u.a.)?", r:"16", aceita:["16"], exp:"Somando as peças: 2 pequenos (2) + quadrado (2) + médio (2) + paralelogramo (2) + 2 grandes (8) = 16 u.a. A área não muda, qualquer que seja a figura montada."},
    {t:"num", p:"Marina tem um quadro de 35 cm de comprimento por 25 cm de altura. Quantos centímetros de moldura ele precisa no contorno?", r:"120", aceita:["120"], exp:"Perímetro = 35 + 25 + 35 + 25 = 120 cm."},
    {t:"num", p:"Outro quadro mede 30 cm de comprimento por 43 cm de altura. Qual é o perímetro dele, em cm?", r:"146", aceita:["146"], exp:"30 + 43 + 30 + 43 = 146 cm."},
    {t:"num", p:"O terceiro quadro mede 37 cm por 55 cm. Qual é o perímetro dele, em cm?", r:"184", aceita:["184"], exp:"37 + 55 + 37 + 55 = 184 cm."},
    {t:"num", p:"O mapa-múndi da Marina mede 120 cm de comprimento por 95 cm de altura. Qual é a área dele, em cm²?", r:"11400", aceita:["11400","11.400"], exp:"Área de retângulo = comprimento × altura: 120 × 95 = 11 400 cm²."},
    {p:"Marina quer saber quantos metros de moldura comprar. Que medida ela precisa obter?", alt:["O perímetro, porque a moldura fica no contorno do quadro","A área, porque cobre o quadro todo","A altura apenas","A diagonal"], c:0, exp:"Moldura contorna a figura — logo, é perímetro. Área seria o caso se ela quisesse cobrir a superfície."}
  ]}
]});
