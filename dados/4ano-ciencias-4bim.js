/* Ciências — 4º ano — 4º bimestre — Colégio Progresso
   Módulos 14, 15 e 16: misturas e soluções, técnicas de separação,
   estados físicos da água e o ciclo da água. */
QUIZ.registrar({
  id:"4ano-ciencias-4bim", ano:"4º ano", materia:"Ciências", emoji:"🔬",
  bimestre:"4º bimestre", tema:"Misturas, separação e o ciclo da água",
  qtdAquecimento:8, qtdTeste:12,
  rodadas:[
{ id:"r1", emoji:"🥤", nome:"Rodada 1 — Misturas e soluções",
  desc:"Homogênea ou heterogênea? E quem é o soluto, quem é o solvente.",
  resumo:[
    "Numa MISTURA HOMOGÊNEA os componentes se misturam TOTALMENTE e não dá para distinguir um do outro: os gases no ar, a tinta dissolvida na água, o açúcar mexido no copo de água.",
    "Numa MISTURA HETEROGÊNEA os componentes NÃO se misturam totalmente e dá para vê-los separadamente: os minerais numa rocha, a areia da praia, um copo com água, óleo e areia (cada um fica numa camada).",
    "Uma mistura homogênea também pode ser chamada de SOLUÇÃO QUÍMICA. Para haver solução, um componente tem de se DISSOLVER TOTALMENTE em outro.",
    "O componente que DISSOLVE chama-se SOLVENTE. O componente que É DISSOLVIDO chama-se SOLUTO. A mistura dos dois é a SOLUÇÃO.",
    "A ÁGUA é considerada o SOLVENTE UNIVERSAL por dissolver uma grande variedade de componentes: açúcar, sal, tintas, álcool, algumas vitaminas.",
    "Exemplo do livro: anilina em pó (corante) é o SOLUTO; a água é o SOLVENTE; a mistura dos dois é a SOLUÇÃO — homogênea, porque o corante se dissolve totalmente."
  ],
  questoes:[
    {p:"O que é uma mistura homogênea?", alt:["Aquela em que os componentes se misturam totalmente e não dá para distingui-los","Aquela em que dá para ver cada componente","Uma mistura só de líquidos","Uma mistura que não se separa nunca"], c:0, exp:"O açúcar dissolvido na água é o exemplo clássico: depois de mexer, você não vê mais os grãos."},
    {p:"E o que é uma mistura heterogênea?", alt:["Aquela em que os componentes não se misturam totalmente e podem ser distinguidos","Aquela que tem só dois componentes","Qualquer mistura com água","Uma mistura invisível"], c:0, exp:"Água, óleo e areia num copo formam camadas distintas — dá para ver cada componente."},
    {p:"Uma colher de açúcar foi dissolvida num copo de água. Que tipo de mistura se formou?", alt:["Homogênea","Heterogênea","Nenhuma, pois açúcar não é mistura","Depende da cor do açúcar"], c:0, exp:"O açúcar se dissolveu totalmente: mistura homogênea, também chamada de solução."},
    {p:"Num copo foram colocados água, óleo e areia. Que tipo de mistura se formou?", alt:["Heterogênea, porque nem o óleo nem a areia se dissolvem na água","Homogênea","Uma solução","Nenhuma mistura"], c:0, exp:"É o exemplo B do livro: formam-se camadas visíveis de óleo, água e areia."},
    {p:"A areia da praia, vista de perto, é que tipo de mistura?", alt:["Heterogênea, pois dá para ver grãos de tamanhos e cores diferentes","Homogênea","Uma solução química","Não é mistura"], c:0, exp:"Cada grãozinho é distinguível dos outros — exatamente o que define a mistura heterogênea."},
    {p:"Como também pode ser chamada uma mistura homogênea?", alt:["Solução química","Suspensão","Liga metálica","Composto heterogêneo"], c:0, exp:"Para ser solução, um componente precisa se dissolver TOTALMENTE no outro."},
    {p:"Numa solução, como se chama o componente que DISSOLVE o outro?", alt:["Solvente","Soluto","Solução","Sedimento"], c:0, exp:"Solvente dissolve; soluto é dissolvido. A mistura dos dois é a solução."},
    {p:"E como se chama o componente que É DISSOLVIDO?", alt:["Soluto","Solvente","Solução","Mistura"], c:0, exp:"No exemplo da anilina: o corante em pó é o soluto, a água é o solvente."},
    {p:"Por que a água é chamada de solvente universal?", alt:["Porque dissolve uma grande variedade de componentes, como açúcar, sal, tintas e álcool","Porque existe no mundo todo","Porque é transparente","Porque é a única substância líquida"], c:0, exp:"Essa propriedade faz da água o solvente mais importante da natureza — e do nosso corpo."},
    {p:"Numa mistura de água com corante em pó, quem é o soluto?", alt:["O corante em pó","A água","O copo","A mistura inteira"], c:0, exp:"O corante é dissolvido (soluto); a água dissolve (solvente); o resultado é a solução."},
    {p:"Um suco verde é feito com água, couve, limão, hortelã e maçã batidos. Por que ele é considerado uma mistura?", alt:["Porque é formado por mais de um componente juntos","Porque é verde","Porque foi batido no liquidificador","Porque tem água"], c:0, exp:"Toda vez que dois ou mais componentes estão juntos temos uma mistura — e o suco verde ainda deixa ver pedacinhos, o que o torna heterogêneo."}
  ]},
{ id:"r2", emoji:"🧂", nome:"Rodada 2 — Técnicas de separação de misturas",
  desc:"Evaporação, catação, peneiração, filtração e separação magnética.",
  resumo:[
    "Na natureza os componentes do ambiente já estão quase sempre na forma de MISTURAS, que muitas vezes precisam ser separadas — no dia a dia e na indústria. O gás de cozinha, a gasolina e o querosene, por exemplo, são separados do petróleo.",
    "Alguns métodos: EVAPORAÇÃO, CATAÇÃO, PENEIRAÇÃO, FILTRAÇÃO e SEPARAÇÃO MAGNÉTICA.",
    "EVAPORAÇÃO: a maior parte do sal de cozinha vem do mar. Como o sal está DISSOLVIDO na água, a água é levada para depósitos abertos chamados TANQUES RASOS; sob a ação do Sol e dos ventos ela evapora e o sal se deposita no fundo. Depois o sal passa por limpeza e trituração e é embalado.",
    "A região NORDESTE produz a maior parte do sal do Brasil, porque o litoral tem MENOS CHUVAS durante o ano, constante incidência de VENTOS e TEMPERATURA ELEVADA na maior parte do ano — tudo o que acelera a evaporação.",
    "CATAÇÃO: os materiais são separados MANUALMENTE por tamanho e composição — recicláveis num centro de reciclagem, impurezas dos grãos de café.",
    "PENEIRAÇÃO: usa uma PENEIRA para separar componentes de TAMANHOS DIFERENTES. O que for menor que a malha passa; o que for maior fica retido (farinha, composto orgânico).",
    "FILTRAÇÃO SIMPLES: um FILTRO separa componentes que estão em ESTADOS FÍSICOS DIFERENTES — água líquida e pó de café sólido no coador; ar gasoso e impurezas sólidas no filtro do ar-condicionado.",
    "SEPARAÇÃO MAGNÉTICA: usa um ÍMÃ para separar material magnético, como o ferro, de materiais não magnéticos. Grandes ímãs acionados por eletricidade são usados em depósitos de ferro para reciclagem."
  ],
  questoes:[
    {p:"Por que é necessário separar misturas?", alt:["Porque na natureza os componentes já estão misturados e muitas vezes precisamos de um deles isolado","Porque misturas fazem mal","Para economizar água","Porque é proibido usar misturas"], c:0, exp:"Uma mineradora quer só um mineral da rocha; o gás de cozinha, a gasolina e o querosene são separados do petróleo."},
    {p:"Qual técnica separa o sal da água do mar?", alt:["Evaporação","Catação","Separação magnética","Peneiração"], c:0, exp:"A água é levada a tanques rasos e, sob o Sol e os ventos, evapora, deixando o sal depositado no fundo."},
    {p:"Como se chamam os depósitos abertos onde a água do mar evapora para a produção de sal?", alt:["Tanques rasos","Represas","Cisternas","Aquários"], c:0, exp:"Rasos justamente para que a água fique bem espalhada e evapore mais rápido."},
    {p:"Por que o Nordeste produz a maior parte do sal do Brasil?", alt:["Menos chuvas durante o ano, ventos constantes e temperatura elevada aceleram a evaporação","Porque tem mais praias","Porque a água do mar é mais salgada lá","Porque tem mais fábricas"], c:0, exp:"Os três fatores somados fazem a água evaporar mais depressa do que nos litorais do Sudeste e do Sul."},
    {p:"Separar manualmente os materiais recicláveis numa esteira é um exemplo de qual técnica?", alt:["Catação","Filtração","Evaporação","Separação magnética"], c:0, exp:"Na catação os materiais são separados com as mãos, por tamanho e composição."},
    {p:"Qual técnica usa uma peneira para separar componentes de tamanhos diferentes?", alt:["Peneiração","Catação","Evaporação","Filtração"], c:0, exp:"O que é menor que a malha passa; o que é maior fica retido — como ao peneirar farinha ou composto."},
    {p:"O coador de papel do café realiza qual técnica de separação?", alt:["Filtração simples","Catação","Peneiração","Separação magnética"], c:0, exp:"O filtro separa componentes em estados físicos diferentes: a água líquida passa e o pó sólido fica retido."},
    {p:"Qual é a condição para a filtração simples funcionar, segundo o livro?", alt:["Os componentes precisam estar em estados físicos diferentes","Os componentes precisam ser magnéticos","A mistura precisa ser aquecida","O filtro precisa ser de metal"], c:0, exp:"Água (líquido) e pó de café (sólido); ar (gasoso) e impurezas (sólido) no filtro do ar-condicionado."},
    {p:"Como separar limalha de ferro misturada a outros materiais não magnéticos?", alt:["Separação magnética, com um ímã","Evaporação","Peneiração","Catação com as mãos"], c:0, exp:"Grandes ímãs acionados por eletricidade fazem isso em depósitos de ferro para reciclagem."},
    {p:"Por que a filtração NÃO separa o sal já dissolvido na água?", alt:["Porque o sal dissolvido atravessa o filtro junto com a água","Porque o sal derrete o filtro","Porque o sal é magnético","Porque o filtro é pequeno demais"], c:0, exp:"Dissolvido, o sal está espalhado em partículas minúsculas — por isso a saída é evaporar a água."},
    {p:"No experimento de separar sal e água, por que o recipiente deve ficar exposto ao Sol e não tomar chuva?", alt:["O calor do Sol acelera a evaporação, e a chuva acrescentaria água de novo","Porque o sal precisa de luz para existir","Para o sal mudar de cor","Porque a chuva é suja"], c:0, exp:"A evaporação é lenta e depende da temperatura, da presença de ventos e da umidade do ar."},
    {p:"Por que algumas pessoas colocam grãos de arroz dentro do saleiro?", alt:["Os grãos absorvem parte da umidade e deixam o sal mais seco e solto","Para dar sabor ao sal","Para enfeitar","Para pesar mais"], c:0, exp:"Em dias úmidos o sal absorve a umidade do ar, empelota e entope o saleiro — o arroz ajuda a evitar isso."}
  ]},
{ id:"r3", emoji:"💧", nome:"Rodada 3 — A água e o seu ciclo",
  desc:"Estados físicos, evaporação, ebulição, condensação, transpiração e o ciclo da água.",
  resumo:[
    "A água existe em três ESTADOS FÍSICOS: LÍQUIDO, SÓLIDO e GASOSO (vapor de água).",
    "À temperatura ambiente a água está no estado líquido. A cerca de 0 °C (zero grau Celsius) ela congela e torna-se sólida (gelo).",
    "A água passa ao estado gasoso de duas formas: EVAPORAÇÃO, quando o líquido passa LENTAMENTE para vapor; e EBULIÇÃO, quando a água FERVE e passa RAPIDAMENTE para vapor — o que geralmente ocorre a 100 °C.",
    "A água no estado gasoso é INVISÍVEL. 'Umidade relativa do ar' é justamente a quantidade de vapor de água presente na atmosfera: mais vapor, mais umidade.",
    "CONDENSAÇÃO: processo em que a água no estado gasoso PERDE CALOR e passa ao estado líquido — as gotas na garrafa que saiu da geladeira, as gotinhas na tampa da panela.",
    "VAPORIZAÇÃO: processo em que a água líquida GANHA CALOR e passa ao estado gasoso.",
    "TRANSPIRAÇÃO VEGETAL: a perda de água pelas folhas das plantas na forma de vapor. A água entra pela raiz, sobe pelo caule e chega às folhas.",
    "CICLO DA ÁGUA: 1) o calor do Sol e os ventos evaporam a água de rios, mares e lagos, e as plantas liberam água por transpiração; 2) o vapor sobe para a atmosfera; 3) o vapor se resfria em contato com o ar mais frio e origina gotinhas; 4) as gotinhas formam as nuvens e, quando muitas se unem, caem como chuva (ou neve, se a temperatura for muito baixa).",
    "PRECIPITAÇÃO é qualquer forma de queda de água a partir da atmosfera, incluindo chuva, neve ou granizo.",
    "Curiosidade: uma única árvore de grande porte da Amazônia pode liberar cerca de 500 LITROS de água por dia na forma de vapor. A samaúma (Ceiba pentandra) pode chegar a 70 metros de altura."
  ],
  questoes:[
    {p:"Quais são os três estados físicos da água?", alt:["Líquido, sólido e gasoso","Quente, morno e frio","Doce, salgado e mineral","Parado, corrente e congelado"], c:0, exp:"Na chuva a água é líquida; na neve, sólida; no ar ao nosso redor, gasosa (e invisível)."},
    {t:"num", p:"A que temperatura, aproximadamente, a água congela e se torna sólida? (em °C)", r:"0", aceita:["0"], exp:"A cerca de 0 °C (zero grau Celsius) a água vira gelo."},
    {t:"num", p:"A que temperatura a água geralmente entra em ebulição? (em °C)", r:"100", aceita:["100"], exp:"A 100 °C a água ferve e passa rapidamente para o estado de vapor."},
    {p:"Qual é a diferença entre evaporação e ebulição?", alt:["Na evaporação o líquido passa lentamente a vapor; na ebulição a água ferve e passa rapidamente","Evaporação acontece só no mar","Ebulição deixa a água sólida","Não há diferença"], c:0, exp:"São as duas formas de a água passar ao estado gasoso — a diferença está na velocidade e na temperatura."},
    {p:"A água no estado gasoso é visível?", alt:["Não, o vapor de água é invisível","Sim, é a fumaça branca","Sim, é a nuvem","Só à noite"], c:0, exp:"O que vemos saindo da panela já são gotículas de água líquida formadas pela condensação."},
    {p:"O que é a umidade relativa do ar?", alt:["A quantidade de vapor de água presente na atmosfera","A quantidade de chuva do mês","A temperatura do ar","A força do vento"], c:0, exp:"Mais vapor, mais umidade; menos vapor, ar mais seco."},
    {p:"Como se chama o processo em que a água no estado gasoso perde calor e passa ao estado líquido?", alt:["Condensação","Vaporização","Solidificação","Evaporação"], c:0, exp:"É o que acontece na tampa da panela e na garrafa gelada tirada da geladeira."},
    {p:"E o processo em que a água líquida ganha calor e passa ao estado gasoso?", alt:["Vaporização","Condensação","Solidificação","Precipitação"], c:0, exp:"Ao entrar em ebulição, a água ganha calor e vira vapor — isso é vaporização."},
    {p:"Por que aparecem gotinhas na tampa da panela quando a água ferve?", alt:["O vapor sobe, encontra a tampa mais fria e se condensa, voltando ao estado líquido","A tampa produz água","O vapor é feito de gotas","A panela vaza"], c:0, exp:"Vaporização na água fervendo, condensação na tampa fria: os dois processos na mesma panela."},
    {p:"O que é a transpiração vegetal?", alt:["A perda de água pelas folhas das plantas na forma de vapor","A planta absorvendo água pela raiz","A chuva caindo sobre as folhas","O orvalho da manhã"], c:0, exp:"A água entra pela raiz, sobe pelo caule e sai pelas folhas como vapor — e isso alimenta o ciclo da água."},
    {p:"Qual é a ordem correta das etapas do ciclo da água?", alt:["Evaporação e transpiração → o vapor sobe → condensação em gotinhas → precipitação","Precipitação → evaporação → nuvens → condensação","Condensação → chuva → evaporação → nuvens","Transpiração → granizo → evaporação → nuvens"], c:0, exp:"O ciclo é como um vaivém: a água evapora, condensa-se formando nuvens e se precipita como chuva, voltando ao estado líquido."},
    {p:"O que é precipitação?", alt:["Qualquer forma de queda de água a partir da atmosfera: chuva, neve ou granizo","Apenas a chuva","O vapor subindo","A água do rio correndo"], c:0, exp:"Chuva, neve e granizo são formas diferentes de precipitação."},
    {p:"Por que as nuvens se formam?", alt:["O vapor se resfria no ar mais frio, vira gotinhas minúsculas e muitas delas juntas formam a nuvem","Porque o vento sopra o ar para cima","Porque a fumaça sobe","Porque o Sol esquenta o céu"], c:0, exp:"Quando muitas dessas gotinhas se unem e ficam pesadas, elas caem: é a chuva."},
    {p:"Quanto de água uma única árvore de grande porte da Amazônia pode liberar por dia, na forma de vapor?", alt:["Cerca de 500 litros","Cerca de 5 litros","Cerca de 50 mil litros","Menos de 1 litro"], c:0, exp:"Multiplicado por milhares de árvores, isso explica por que a Floresta Amazônica é responsável por grande parte das chuvas do país."},
    {p:"Por que o ar que sai da boca parece uma 'fumacinha' num dia muito frio?", alt:["O vapor de água da respiração se condensa ao encontrar o ar frio, virando gotículas visíveis","Porque o corpo produz fumaça","Porque o ar frio é branco","Porque falta oxigênio"], c:0, exp:"É condensação: o vapor quente que sai dos pulmões perde calor rapidamente e volta ao estado líquido."}
  ]}
]});
