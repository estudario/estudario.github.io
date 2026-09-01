/* Química — 8º ano — 3º bimestre
   Técnicas de separação de misturas heterogêneas. */
QUIZ.registrar({
  id:"8ano-quimica-3bim", ano:"8º ano", materia:"Química", emoji:"⚗️",
  bimestre:"3º bimestre", tema:"Separação de misturas",
  qtdAquecimento:8, qtdTeste:12,
  rodadas:[
{ id:"r1", emoji:"🧲", nome:"Rodada 1 — Separando sólidos",
  desc:"Catação, imantação, ventilação, flutuação e flotação.",
  resumo:[
    "Na natureza as substâncias vêm MISTURADAS. Para usá-las, aplicamos as técnicas de separação de misturas — o conjunto de processos físicos chamado ANÁLISE IMEDIATA.",
    "A escolha do método depende das PROPRIEDADES FÍSICAS dos componentes: temperatura de fusão (TF), de ebulição (TE), densidade (d) e solubilidade (S).",
    "CATAÇÃO: separar sólidos com a mão ou pinça — escolher feijão, separar latas/plásticos/vidros/papéis na esteira da coleta seletiva.",
    "IMANTAÇÃO: o ímã atrai o componente magnético (limalha de ferro) e deixa o resto.",
    "VENTILAÇÃO: uma corrente de ar arrasta o componente mais leve (como bolinhas de isopor).",
    "FLUTUAÇÃO: adiciona-se um líquido de densidade INTERMEDIÁRIA que não dissolve os sólidos — o menos denso flutua, o mais denso afunda (serragem × areia).",
    "FLOTAÇÃO: bolhas de ar são introduzidas na suspensão; as partículas aderem às bolhas e formam uma espuma que é removida.",
    "Mistura do livro (isopor + milho + sal + areia): catação (milho) → ventilação (isopor) → dissolver o sal em água e filtrar (areia) → evaporação (recupera o sal)."
  ],
  questoes:[
    {p:"Por que precisamos das técnicas de separação de misturas?", alt:["Porque na natureza as substâncias não são encontradas puras","Porque as substâncias puras são perigosas","Só por curiosidade científica","Porque misturas não existem na indústria"], c:0, exp:"Para usar uma substância no laboratório ou na indústria, é preciso separá-la das outras — usando a análise imediata (processos físicos)."},
    {p:"De que depende a escolha do método de separação?", alt:["Das propriedades físicas dos componentes: TF, TE, densidade e solubilidade","Da cor da mistura","Do preço dos ingredientes","Do tamanho do recipiente"], c:0, exp:"Cada técnica explora uma diferença física: densidade na flutuação, solubilidade na dissolução, magnetismo na imantação..."},
    {p:"Escolher feijão, tirando as pedrinhas com a mão, é um exemplo de:", alt:["Catação","Flotação","Destilação","Decantação"], c:0, exp:"Catação = separar sólidos com a mão (ou pinça). Também é o que se faz nas esteiras da coleta seletiva, separando latas, plásticos, vidros e papéis."},
    {p:"Como separar a limalha de ferro de uma mistura com areia?", alt:["Imantação, com um ímã","Evaporação","Catação com a mão","Adicionando água"], c:0, exp:"O ferro é atraído pelo ímã; a areia não. É a imantação — usada na questão do esquema do livro."},
    {p:"Que técnica usa uma corrente de ar para levar o componente mais leve da mistura?", alt:["Ventilação","Imantação","Decantação","Filtração"], c:0, exp:"Na questão do livro, a ventilação separa as bolinhas de isopor, levíssimas, dos outros componentes."},
    {p:"Na flutuação, como deve ser o líquido adicionado à mistura de sólidos?", alt:["De densidade intermediária entre os sólidos, sem dissolvê-los","O mais denso possível","Um líquido que dissolva os dois","Sempre água quente"], c:0, exp:"Com densidade no meio do caminho, o sólido menos denso flutua (serragem) e o mais denso afunda (areia)."},
    {p:"O que caracteriza a flotação?", alt:["Bolhas de ar aderem às partículas e formam uma espuma que é removida","Uso de ímã","Aquecimento até ferver","Separação com peneira"], c:0, exp:"As partículas grudam nas bolhas, sobem como espuma e são retiradas — flotação, com T."},
    {p:"Mistura de bolinhas de isopor, grãos de milho, sal e areia (questão do livro). Qual sequência separa tudo?", alt:["Catação (milho) → ventilação (isopor) → dissolver o sal em água e filtrar (areia) → evaporação (recupera o sal)","Só evaporação resolve tudo","Imantação para tudo","Colocar no congelador"], c:0, exp:"Cada componente sai por uma propriedade: tamanho (catação), leveza (ventilação), insolubilidade (filtração da areia) e solubilidade (evaporar a água devolve o sal)."},
    {p:"Qual é o nome do conjunto de processos físicos usados na separação de misturas?", alt:["Análise imediata","Síntese química","Reação em cadeia","Titulação"], c:0, exp:"Análise imediata é o nome que o livro dá ao conjunto das técnicas físicas de separação."}
  ]},
{ id:"r2", emoji:"⛏️", nome:"Rodada 2 — Líquidos, filtração e o garimpo",
  desc:"Decantação, filtração a vácuo, o mercúrio do garimpo e o hemograma.",
  resumo:[
    "SEDIMENTAÇÃO: o sólido mais denso se deposita no fundo do recipiente. DECANTAÇÃO: o líquido é então transferido para outro recipiente.",
    "Sal DISSOLVIDO na água não filtra: recupera-se por EVAPORAÇÃO (a água evapora, o sal cristaliza).",
    "FILTRAÇÃO A VÁCUO: funil de Büchner + kitassato. A bomba retira parte do ar interno; com a pressão interna menor, a PRESSÃO ATMOSFÉRICA 'empurra' o líquido através do filtro — o sólido fica retido.",
    "Detalhe do livro: a retirada do ar é PARCIAL — não se forma vácuo de verdade (ausência de matéria), apesar do nome.",
    "GARIMPO: a DRAGA aspira os sedimentos do fundo do rio por uma mangueira; o principal problema ambiental é o ASSOREAMENTO, que prejudica a água, o equilíbrio ambiental e a navegação.",
    "O MERCÚRIO tem afinidade química com o ouro e forma uma AMÁLGAMA; aquecida, o mercúrio vaporiza e sobra o ouro (não 100% puro). O vapor de mercúrio é tóxico: segundo a OMS, afeta os sistemas NERVOSO, DIGESTIVO e IMUNOLÓGICO.",
    "Aplicação em saúde: no hemograma, comparamos os resultados com VALORES DE REFERÊNCIA (glóbulos vermelhos: 4,5 a 5,9 milhões/mm³)."
  ],
  questoes:[
    {p:"Na sedimentação seguida de decantação, o que acontece?", alt:["O sólido mais denso se deposita no fundo e o líquido é transferido para outro recipiente","O líquido evapora","Tudo é filtrado com papel","O sólido flutua"], c:0, exp:"A areia sedimenta no fundo; depois a água é decantada (transferida com cuidado) para outro recipiente."},
    {p:"O sal dissolvido na água é recuperado por qual processo?", alt:["Evaporação","Catação","Imantação","Peneiração"], c:0, exp:"A água evapora e o sal, que estava dissolvido, cristaliza e fica no recipiente."},
    {p:"Na filtração a vácuo, o que 'empurra' o líquido para dentro do kitassato?", alt:["A pressão atmosférica, maior que a pressão interna reduzida pela bomba","Um ímã gigante","A gravidade da Lua","O calor do fogo"], c:0, exp:"A bomba retira parte do ar do kitassato; com a pressão interna menor, a pressão atmosférica externa empurra o líquido através do filtro — e o sólido fica retido no funil de Büchner."},
    {p:"A filtração a vácuo forma vácuo de verdade?", alt:["Não: a retirada do ar interno é parcial","Sim, vácuo total como no espaço","Sim, mas só no inverno","Não existe filtração a vácuo"], c:0, exp:"O nome engana: não há ausência total de matéria, apenas uma redução da pressão interna."},
    {p:"Quais vidrarias formam o conjunto da filtração a vácuo?", alt:["Funil de Büchner e kitassato","Proveta e pipeta","Béquer e balança","Tubo de ensaio e conta-gotas"], c:0, exp:"O funil de Büchner segura o filtro com o sólido; o kitassato recebe o líquido, com a bomba ligada à sua saída lateral."},
    {p:"Como funciona a draga usada no garimpo de ouro?", alt:["Aspira os sedimentos do fundo do rio por uma mangueira e os processa para separar ouro e areia","Pesca o ouro com rede","Derrete o rio inteiro","Filtra o ar da região"], c:0, exp:"Os motores puxam o sedimento do fundo; o material sem interesse é descartado — e um dos principais problemas é o assoreamento do rio."},
    {p:"Qual é um dos principais problemas ambientais do uso das dragas?", alt:["O assoreamento dos rios, que prejudica a água, o equilíbrio ambiental e a navegação","O barulho dos motores apenas","O consumo de gasolina","Nenhum problema"], c:0, exp:"O sedimento revirado assoreia o rio: piora a qualidade da água e limita a navegação."},
    {p:"Qual é o papel do mercúrio na extração do ouro?", alt:["Forma uma amálgama com o ouro; aquecida, o mercúrio vaporiza e sobra o ouro","Dissolve a areia","Deixa o ouro brilhante","Esfria o material"], c:0, exp:"A afinidade química entre os dois metais forma a amálgama mercúrio-ouro. O problema: o vapor de mercúrio escapa para o ambiente."},
    {p:"Segundo a OMS, o vapor de mercúrio afeta negativamente quais sistemas do corpo?", alt:["Nervoso, digestivo e imunológico","Apenas a pele","Somente os ossos","Nenhum, é inofensivo"], c:0, exp:"Por isso o uso de mercúrio no garimpo é tão perigoso — para quem trabalha e para quem vive perto dos rios contaminados."},
    {p:"O ouro obtido pelo método da amálgama sai 100% puro?", alt:["Não: elimina a maior parte das impurezas, mas não todas","Sim, sempre perfeito","Sai misturado com areia apenas","Vira ouro branco"], c:0, exp:"O processo elimina a maior parte das impurezas, mas o resultado não é ouro totalmente puro."},
    {p:"Num hemograma, os valores de referência dos glóbulos vermelhos vão de 4,5 a 5,9 milhões/mm³. Um indivíduo com 2,5 milhões/mm³ está:", alt:["Abaixo do valor de referência","Acima do valor de referência","Dentro do valor de referência","Sem glóbulos vermelhos"], c:0, exp:"2,5 é menor que o mínimo de 4,5 — está abaixo da referência. Já 6,5 estaria acima, e 4,5 estaria dentro do intervalo."}
  ]}
]});
