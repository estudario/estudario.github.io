/* Ciências — 4º ano — 3º bimestre
   Módulos 10 a 13: microrganismos, higiene, resíduos, antibióticos e vacinas.
   Para criar outra matéria, copie este arquivo e troque o cabeçalho e as rodadas. */
QUIZ.registrar({
  id: "4ano-ciencias-3bim",
  ano: "4º ano",
  materia: "Ciências",
  emoji: "🔬",
  bimestre: "3º bimestre",
  tema: "Microrganismos, resíduos, antibióticos e vacinas",
  qtdAquecimento: 8,
  qtdTeste: 15,
  rodadas: [
{
  id:"r1", tipo:"aquecimento", emoji:"🔬",
  nome:"Rodada 1 — Os microrganismos",
  desc:"Módulo 10: o que são, onde vivem e como os cientistas estudam eles.",
    resumo:[
    "Microrganismos são seres tão pequenos que não dá para ver a olho nu: bactérias, vírus e alguns tipos de fungos.",
    "Eles estão em quase todo lugar — ar, água, solo, objetos, alimentos e no nosso corpo (mãos, boca, intestino).",
    "O mofo (bolor) é um FUNGO e cresce em ambientes úmidos. Comer alimento com mofo pode causar vômitos, alergias e diarreia.",
    "Cárie = BACTÉRIAS da boca, que produzem uma substância ácida ao comer restos de alimento. Gripe, resfriado, covid-19, dengue, sarampo e caxumba = VÍRUS.",
    "Nem todo microrganismo é vilão: os lactobacilos vivem no intestino e ajudam no funcionamento dele.",
    "Para estudar microrganismos, os cientistas os cultivam em placas de Petri ou tubos de ensaio com MEIO DE CULTURA (substância cheia de nutrientes). Os aglomerados que se formam são as COLÔNIAS: fungos parecem algodão, bactérias parecem pontinhos.",
    "A análise é feita no MICROSCÓPIO: ocular (onde se olha), objetivas (lentes que ampliam) e platina (onde fica o material).",
    "Com amostras perigosas, o cientista usa avental com touca, óculos, máscara e luvas — e o tubo com vírus fica tampado e refrigerado."
  ],
  questoes:[
    {p:"O que são microrganismos?",
     alt:["Seres tão pequenos que não conseguimos ver a olho nu","Animais pequenos que enxergamos com uma lupa","Apenas os bichos que vivem no lixo","Plantas muito pequenas"],
     c:0, exp:"Microrganismos são seres tão pequenos que não somos capazes de enxergá-los a olho nu. Para vê-los é preciso microscópio.",
     err:{1:"Se dá para ver com lupa comum, não é microrganismo. Eles precisam de microscópio.",2:"Eles estão em quase todo lugar: ar, água, solo, objetos, alimentos e até no nosso corpo."}},

    {p:"Quais destes grupos são microrganismos, segundo o livro?",
     alt:["Bactérias, vírus e alguns tipos de fungos","Só as bactérias","Vírus e insetos","Fungos e minhocas"],
     c:0, exp:"O livro cita bactérias, vírus e alguns tipos de fungos, entre outros organismos.",
     err:{2:"Insetos, como baratas e moscas, não são microrganismos — eles carregam microrganismos.",3:"Minhoca dá para ver a olho nu, então não é microrganismo."}},

    {p:"Onde encontramos microrganismos?",
     alt:["Em quase todos os lugares: ar, água, solo, objetos, alimentos e no nosso corpo","Só em hospitais","Só em lugares sujos","Só dentro do laboratório"],
     c:0, exp:"Eles estão no ar, na água, no solo, nos objetos, nos alimentos e vivem no corpo de outros seres — inclusive nas nossas mãos, unhas, boca e intestino.",
     err:{2:"Lugar sujo tem mais, mas eles existem em todo lugar, até em lugares limpos."}},

    {p:"O mofo (bolor) que cresce nos alimentos é um tipo de:",
     alt:["Fungo","Bactéria","Vírus","Verme"],
     c:0, exp:"O mofo é um tipo de fungo e se desenvolve em ambientes úmidos.",
     err:{1:"Bactérias formam colônias em pontinhos; o mofo tem aspecto aveludado, de fungo.",2:"Vírus nem conseguem crescer sozinhos no pão — eles precisam infectar um ser vivo."}},

    {p:"Em que tipo de ambiente o mofo se desenvolve melhor?",
     alt:["Ambientes úmidos","Ambientes secos e ensolarados","Ambientes congelados","Ambientes sem nenhum ar"],
     c:0, exp:"O mofo é um fungo e se desenvolve em ambientes úmidos, como embaixo da pia."},

    {p:"O que pode acontecer se alguém comer um alimento com mofo?",
     alt:["Vômitos, alergias, diarreia e dores abdominais","Nada, o mofo é sempre inofensivo","Fica imune a doenças","Melhora a digestão"],
     c:0, exp:"A ingestão de alimentos contaminados por esses fungos pode causar vômitos, alergias, diarreia e dores abdominais."},

    {p:"A cárie é causada por:",
     alt:["Bactérias que vivem na boca","Vírus da gripe","Fungos do ar","Falta de vitamina"],
     c:0, exp:"A cárie é causada por bactérias que vivem na boca."},

    {p:"Como as bactérias da boca acabam estragando o dente?",
     alt:["Consomem restos de alimento e produzem uma substância ácida que corrói os dentes","Fazem um buraco com os dentinhos delas","Deixam o dente amarelo e ele cai","Comem o esmalte diretamente, sem produzir nada"],
     c:0, exp:"Ao consumirem os restos de alimento que ficam entre os dentes, as bactérias produzem uma substância ácida que corrói os dentes. Por isso: escovar bem e ir ao dentista."},

    {p:"Gripe e resfriado são doenças causadas por:",
     alt:["Vírus","Bactérias","Fungos","Poeira"],
     c:0, exp:"Gripe e resfriado são doenças respiratórias altamente contagiosas causadas por vírus que se espalham pelo ar. São vírus diferentes, mas os sintomas são parecidos.",
     err:{1:"Se fosse bactéria, o antibiótico resolveria — e antibiótico não funciona contra gripe."}},

    {p:"Qual destas doenças NÃO é causada por vírus?",
     alt:["Cárie","Covid-19","Dengue","Sarampo"],
     c:0, exp:"Covid-19, dengue, sarampo e caxumba são causadas por vírus. A cárie é causada por bactérias da boca."},

    {p:"O que é uma virose?",
     alt:["Qualquer doença ou infecção provocada por vírus","Uma doença só de criança","Uma infecção causada por bactéria","Uma alergia a alimentos"],
     c:0, exp:"Virose é qualquer doença ou infecção provocada por vírus."},

    {p:"No glossário, prevenção quer dizer:",
     alt:["Conjunto de medidas adotadas com antecedência para evitar algum dano ou mal","Remédio tomado depois que a pessoa adoece","Ir ao médico quando aparece febre","Espalhar a doença sem querer"],
     c:0, exp:"Prevenção é o conjunto de medidas adotadas com antecedência para evitar algum dano ou mal. O que espalha é propagar.",
     err:{3:"Espalhar é o significado de propagar, não de prevenção."}},

    {p:"No glossário, propagar significa:",
     alt:["Espalhar","Curar","Evitar","Investigar"],
     c:0, exp:"Propagar significa espalhar. Quem está com uma virose deve tomar medidas de prevenção para não propagar a doença."},

    {p:"Existem microrganismos benéficos? O livro dá qual exemplo?",
     alt:["Sim: os lactobacilos, que vivem no intestino humano e ajudam no bom funcionamento desse órgão","Não, todos os microrganismos fazem mal","Sim: o vírus da gripe, que fortalece o corpo","Sim: as bactérias da cárie, que limpam os dentes"],
     c:0, exp:"Apesar de os microrganismos geralmente terem fama de vilões, existem muitos benéficos. As bactérias do grupo dos lactobacilos vivem no intestino humano e ajudam no bom funcionamento desse órgão."},

    {p:"Por que baratas, ratos, moscas e formigas são um problema para a nossa saúde?",
     alt:["Carregam milhares de microrganismos que podem contaminar utensílios e alimentos","Porque comem muito","Porque são microrganismos","Porque fazem barulho na cozinha"],
     c:0, exp:"Esses animais vivem próximos aos seres humanos e carregam milhares de microrganismos que podem contaminar utensílios e alimentos. Por isso é importante manter a higiene do ambiente.",
     err:{2:"Eles não são microrganismos — dá para vê-los a olho nu. Eles transportam microrganismos."}},

    {p:"O que fungos e bactérias precisam para se manter vivos, diferente dos vírus?",
     alt:["Obter energia por meio do alimento","Ficar no escuro","Água salgada","Ar gelado"],
     c:0, exp:"Diferentemente dos vírus, os fungos e as bactérias precisam obter energia também por meio do alimento para se manterem vivos."},

    {p:"O que é o meio de cultura?",
     alt:["Substância com nutrientes que favorece o crescimento e a multiplicação de microrganismos","Um remédio que mata bactérias","O vidro da placa de Petri","Um tipo de microscópio"],
     c:0, exp:"Meio de cultura é a substância que contém nutrientes que favorecem o crescimento e a multiplicação dos microrganismos.",
     err:{1:"Isso é antibiótico. O meio de cultura faz o contrário: ajuda os microrganismos a crescerem."}},

    {p:"Quais utensílios os cientistas usam para cultivar microrganismos no laboratório?",
     alt:["Placas de Petri e tubos de ensaio","Panelas e frigideiras","Copos de plástico comuns","Potes de vidro fechados a vácuo"],
     c:0, exp:"Para cultivar amostras em laboratório, os cientistas usam utensílios como placas de Petri ou tubos de ensaio, com um meio de cultura dentro."},

    {p:"A placa de Petri pode ser feita de:",
     alt:["Vidro ou material plástico","Só de vidro","Só de metal","Papelão resistente"],
     c:0, exp:"A placa de Petri é feita de vidro ou de material plástico, e pode ser usada aberta ou com tampa."},

    {p:"O que é uma colônia?",
     alt:["Um aglomerado de microrganismos formado quando eles se reproduzem","Um tipo de microscópio","O nome do líquido da placa","Uma doença causada por bactérias"],
     c:0, exp:"Ao se reproduzirem, as bactérias formam aglomerados chamados colônias. Algumas dessas colônias são visíveis a olho nu."},

    {p:"Numa placa de Petri, as colônias de fungos têm que aspecto?",
     alt:["Aveludado, parecido com algodão","Pontinhos amarelados e lisos","Transparente como água","Formato de estrela"],
     c:0, exp:"As colônias de fungos ficam com aspecto aveludado, parecido com algodão. Já as colônias de bactérias costumam aparecer como pontinhos, muitas vezes amarelados.",
     err:{1:"Pontinhos amarelados e lisos são o aspecto típico das colônias de bactérias."}},

    {p:"Qual aparelho é usado para analisar os microrganismos?",
     alt:["Microscópio","Telescópio","Termômetro","Estetoscópio"],
     c:0, exp:"As análises dos microrganismos são feitas usando microscópio. Existem microscópios que ampliam dezenas de vezes e outros, milhares de vezes.",
     err:{1:"Telescópio serve para olhar coisas muito longe, como estrelas."}},

    {p:"No microscópio, a parte por onde a pessoa olha chama-se:",
     alt:["Ocular","Platina","Objetiva","Lâmina"],
     c:0, exp:"A ocular é a parte do microscópio por onde a pessoa olha. A platina é onde fica o material observado, e as objetivas são as lentes que dão diferentes ampliações."},

    {p:"No microscópio, onde fica o material que está sendo observado?",
     alt:["Na platina","Na ocular","Na objetiva","No pé do aparelho"],
     c:0, exp:"A platina é a parte onde fica o material ou organismo que está sendo observado."},

    {p:"Que equipamentos um cientista deve usar para se proteger ao pegar uma amostra de vírus?",
     alt:["Avental descartável com touca, óculos de proteção, máscara e luvas","Só luvas","Avental e chinelo","Máscara e boné"],
     c:0, exp:"Quando o microrganismo pode causar doenças, é necessário usar equipamentos que ofereçam mais segurança: avental descartável com touca, óculos de proteção, máscara e luvas."},

    {p:"Como deve ser guardado o tubo de ensaio com a amostra de vírus?",
     alt:["Com tampa e mantido refrigerado","Aberto, em cima da mesa","Dentro do bolso do avental","Ao sol, para aquecer"],
     c:0, exp:"Nesses casos o tubo precisa ter tampa e a amostra tem de ser mantida refrigerada."}
  ]
},
{
  id:"r2", tipo:"aquecimento", emoji:"🧼",
  nome:"Rodada 2 — Higiene, lixo e resíduos",
  desc:"Módulos 11 e 12: lavar as mãos, lixo x resíduo, lixão, aterro e compostagem.",
    resumo:[
    "As mãos tocam superfícies e o rosto o tempo todo. Lavar com água e sabão evita covid-19, gripes, resfriados, conjuntivite e infecções gastrointestinais.",
    "Conjuntivite = infecção dos OLHOS (vírus ou bactéria). Infecções gastrointestinais = ESTÔMAGO e INTESTINO (dor, náusea, vômito, diarreia).",
    "LIXO (rejeito) = não serve mais para nada: papel sujo, esponja, fralda, chiclete. RESÍDUO pode ser reaproveitado.",
    "Resíduos RECICLÁVEIS: vidro, plástico, papel e metal — viram matéria-prima de produtos novos (antes: coleta seletiva e separação).",
    "Resíduos ORGÂNICOS: origem biológica (vieram de um ser vivo) — cascas, restos de fruta, borra de café. Viram ADUBO pela COMPOSTAGEM. Mais da metade do resíduo das casas é orgânico.",
    "LIXÃO: lixo jogado a céu aberto; atrai moscas, baratas, ratos e urubus e contamina o solo, os rios e as águas subterrâneas (aquíferos).",
    "ATERRO SANITÁRIO: lugar preparado especialmente para o lixo, reduzindo a poluição e afastando os animais transmissores de doenças.",
    "Reciclar papel economiza água: ~2 mil litros por tonelada, contra ~100 mil na fabricação tradicional."
  ],
  questoes:[
    {p:"Por que a higienização das mãos merece atenção redobrada?",
     alt:["Porque as mãos estão constantemente em contato com superfícies e com o rosto","Porque as mãos suam muito","Porque a pele das mãos é fina","Porque as mãos ficam frias"],
     c:0, exp:"As mãos estão sempre em contato com superfícies e com o rosto — ao tossir, espirrar, coçar o nariz e os olhos. Por isso lavá-las merece atenção redobrada."},

    {p:"Lavar as mãos com água e sabão evita o contágio de quais doenças, segundo o livro?",
     alt:["Covid-19, gripes, resfriados, conjuntivite e infecções gastrointestinais","Só a covid-19","Cárie e dor de dente","Alergia a pelo de gato"],
     c:0, exp:"Lavar as mãos com água e sabão evita o contágio e a transmissão de muitas doenças causadas por microrganismos: covid-19, gripes e resfriados, conjuntivite e infecções gastrointestinais, entre outras."},

    {p:"A conjuntivite é uma infecção de qual parte do corpo?",
     alt:["Dos olhos","Do estômago","Da garganta","Dos pulmões"],
     c:0, exp:"A conjuntivite é uma infecção dos olhos e pode ser causada por vírus ou bactéria. É bastante contagiosa e deixa os olhos vermelhos, inchados e doloridos."},

    {p:"As infecções gastrointestinais afetam quais órgãos?",
     alt:["Estômago e intestino","Coração e pulmão","Olhos e ouvidos","Pele e unhas"],
     c:0, exp:"As infecções gastrointestinais afetam o estômago e o intestino, e podem causar dores abdominais, náuseas, vômitos e diarreia. Podem ser causadas por bactérias, fungos ou vírus."},

    {p:"Quando as mãos ficam realmente livres de microrganismos?",
     alt:["Quando são bem lavadas, de forma cuidadosa, com água e quantidade adequada de sabão","Quando passamos a mão na roupa","Quando molhamos rapidinho na torneira","Quando usamos só água quente"],
     c:0, exp:"As mãos somente estarão livres de microrganismos se forem bem lavadas de forma cuidadosa, com quantidade adequada de sabão e água. Também é importante manter as unhas curtas e limpas."},

    {p:"O que o livro chama de lixo (rejeito)?",
     alt:["Tudo o que é descartado e não tem mais nenhuma utilidade","Tudo o que jogamos fora, sem exceção","Só o que é reciclável","Só restos de comida"],
     c:0, exp:"Lixo (ou rejeito) é tudo aquilo que é descartado e não tem mais nenhuma utilidade. Ao contrário do lixo, os resíduos podem ser reaproveitados.",
     err:{1:"Muito do que chamamos de lixo é, na verdade, resíduo — e resíduo pode ser reaproveitado."}},

    {p:"Qual destes é exemplo de lixo (rejeito)?",
     alt:["Fralda usada","Garrafa de vidro","Casca de banana","Caixa de papelão"],
     c:0, exp:"São exemplos de lixo: papéis sujos, esponja de lavar louça, fraldas e chicletes. Vidro e papelão são recicláveis; casca de banana é resíduo orgânico.",
     err:{1:"Vidro é resíduo reciclável.",2:"Casca de banana é resíduo orgânico e pode virar adubo.",3:"Papelão é resíduo reciclável."}},

    {p:"Quais são exemplos de resíduos recicláveis?",
     alt:["Vidro, plástico, papel e metal","Fralda, chiclete e esponja de louça","Casca de ovo e borra de café","Folhas secas e restos de fruta"],
     c:0, exp:"Vidro, plástico, papel e metal são exemplos de resíduos recicláveis. Eles podem ser usados como matéria-prima para a fabricação de novos produtos.",
     err:{2:"Casca de ovo e borra de café são resíduos orgânicos.",3:"Folhas secas e restos de fruta são resíduos orgânicos."}},

    {p:"Qual é a diferença principal entre lixo e resíduo?",
     alt:["O resíduo pode ser reaproveitado; o lixo não tem mais utilidade","Não existe diferença, é só o nome","O lixo é seco e o resíduo é molhado","O resíduo é o que fica na rua"],
     c:0, exp:"Ao contrário do lixo (rejeito), que não tem mais nenhuma utilidade, os resíduos podem ser reaproveitados."},

    {p:"O que são resíduos orgânicos?",
     alt:["Aqueles que contêm uma origem biológica, como restos de frutas, borra de café e cascas de ovos","Aqueles feitos de plástico","Aqueles que vêm de fábricas","Aqueles que não podem ser jogados fora"],
     c:0, exp:"Resíduos orgânicos são os que contêm uma origem biológica: restos de frutas e hortaliças, borra de café, sachês de chá, cascas de ovos, entre outros."},

    {p:"Ter origem biológica significa que:",
     alt:["Se originou de um ser vivo","Foi feito em laboratório","É colorido","Não faz mal à natureza"],
     c:0, exp:"Ter origem biológica significa que se originou de um ser vivo."},

    {p:"Quem decompõe grande parte dos resíduos orgânicos?",
     alt:["Os microrganismos","O sol","A chuva","Os caminhões de lixo"],
     c:0, exp:"Muitos desses materiais são decompostos por microrganismos."},

    {p:"Os resíduos orgânicos podem virar adubo por meio de qual processo?",
     alt:["Compostagem","Reciclagem","Coleta seletiva","Incineração"],
     c:0, exp:"Os resíduos orgânicos podem ser transformados em adubo por meio de um processo chamado compostagem.",
     err:{1:"Reciclagem é o que se faz com vidro, plástico, papel e metal.",2:"Coleta seletiva é a separação dos materiais antes de irem para a indústria."}},

    {p:"Segundo as pesquisas citadas no livro, mais da metade do resíduo produzido nas residências é:",
     alt:["Orgânico","De plástico","De vidro","De metal"],
     c:0, exp:"Pesquisas mostram que mais da metade de todo o resíduo produzido nas residências é orgânico."},

    {p:"O que é um lixão?",
     alt:["Um grande espaço a céu aberto onde o lixo é despejado, formando montes","Um lugar preparado para receber lixo sem contaminar","Uma fábrica de reciclagem","Um caminhão grande de lixo"],
     c:0, exp:"O lixão é um grande espaço a céu aberto onde o lixo é despejado, formando montes.",
     err:{1:"Esse é o aterro sanitário, que é preparado para reduzir a poluição."}},

    {p:"Quais animais o lixo acumulado do lixão costuma atrair?",
     alt:["Moscas, baratas, ratos e urubus","Só passarinhos","Peixes e tartarugas","Nenhum animal"],
     c:0, exp:"Esse lixo acumulado atrai muitos animais que dele se alimentam, como moscas, baratas, ratos e urubus, que podem transmitir várias doenças."},

    {p:"O que é um aterro sanitário?",
     alt:["Um lugar preparado especialmente para colocar o lixo e reduzir o nível de poluição ambiental","Um lixão maior","Um buraco qualquer no chão","Um depósito de material reciclável"],
     c:0, exp:"Aterros sanitários são lugares preparados especialmente para colocar o lixo e, desse modo, reduzir o nível de poluição ambiental. Neles também se evita a presença de animais que transmitem doenças."},

    {p:"O que o lixão pode contaminar?",
     alt:["Rios, córregos e águas subterrâneas (aquíferos)","Só o ar","Somente o próprio terreno","Nada, se estiver longe da cidade"],
     c:0, exp:"No lixão os resíduos são jogados diretamente sobre o solo, podendo contaminar rios, córregos e águas subterrâneas (aquíferos)."},

    {p:"Por que está cada vez mais difícil encontrar áreas para novos aterros sanitários?",
     alt:["Por causa do aumento da população e do crescimento das áreas urbanas","Porque ninguém quer trabalhar neles","Porque o lixo acabou","Porque as leis proibiram os aterros"],
     c:0, exp:"Com o aumento da população e o crescimento das áreas urbanas, é cada vez mais difícil encontrar novas áreas para aterro sanitário. Por isso é preciso reduzir a quantidade de resíduos."},

    {p:"O que acontece quando os resíduos não são descartados corretamente?",
     alt:["Podem ir para córregos, rios e oceanos, causando enchentes, doenças e prejuízos à fauna e à flora","Eles desaparecem sozinhos","Viram adubo automaticamente","Apenas ficam feios na rua"],
     c:0, exp:"Eles podem acabar indo para córregos, rios e oceanos, trazendo enchentes no período de chuvas, proliferação de doenças causadas por microrganismos e prejuízos para a fauna e a flora."},

    {p:"Quanta água se usa para fabricar uma tonelada de papel do jeito tradicional?",
     alt:["Cerca de 100 mil litros","Cerca de 2 mil litros","Cerca de 100 litros","Cerca de 1 milhão de litros"],
     c:0, exp:"Na fabricação tradicional utilizam-se cerca de 100 mil litros de água por tonelada. Já com papel reciclado, cerca de 2 mil litros — muito menos.",
     err:{1:"2 mil litros é o gasto do papel reciclado, que economiza recursos naturais."}},

    {p:"O que precisa acontecer antes de os recicláveis irem para a indústria de reciclagem?",
     alt:["A coleta seletiva e a separação do material","Nada, vai tudo junto","Precisam ser queimados","Precisam ficar um ano guardados"],
     c:0, exp:"Antes de ir para as indústrias que fazem a reciclagem, é preciso que ocorram a coleta seletiva e a separação do material."},

    {p:"Uma folha seca varrida do quintal é qual tipo de resíduo?",
     alt:["Resíduo orgânico","Resíduo reciclável","Lixo (rejeito)","Não é resíduo"],
     c:0, exp:"Folhas secas têm origem biológica, ou seja, vieram de um ser vivo: são resíduo orgânico e podem virar adubo por compostagem."},

    {p:"Uma esponja usada de lavar louça é:",
     alt:["Lixo (rejeito)","Resíduo reciclável","Resíduo orgânico","Material de compostagem"],
     c:0, exp:"A esponja de lavar louça aparece no livro como exemplo de lixo (rejeito), junto com papéis sujos, fraldas e chicletes: não tem mais utilidade nem pode ser reaproveitada."},

    {p:"Compare duas cozinhas: uma com lixo aberto, gato no balcão e mofo na parede; outra limpa, com lixo fechado e cozinheiro de touca e avental. Por que a segunda é a melhor para preparar comida?",
     alt:["Está limpa, sem animais, sem lixo aberto e o cozinheiro usa touca e avental","Porque é maior","Porque tem um gato para caçar ratos","Porque a comida fica mais bonita"],
     c:0, exp:"Na cozinha limpa não há gato circulando, o lixo está fechado, não há mofo na parede nem louça suja acumulada, e o cozinheiro usa touca e avental. Tudo isso reduz a contaminação do alimento por microrganismos.",
     err:{2:"O gato na cozinha é um problema: animais carregam microrganismos que contaminam os alimentos."}},

    {p:"Por que é importante manter a higiene do ambiente da casa?",
     alt:["Porque animais como baratas, ratos e moscas espalham microrganismos que contaminam alimentos e utensílios","Porque a casa fica bonita","Porque economiza água","Porque evita cárie"],
     c:0, exp:"Esses animais vivem próximos aos humanos e carregam milhares de microrganismos. A higiene do ambiente é uma das formas de prevenir doenças."}
  ]
},
{
  id:"r3", tipo:"aquecimento", emoji:"💉",
  nome:"Rodada 3 — Antibióticos e vacinas",
  desc:"Módulo 13: Fleming, a penicilina, o sistema imunológico e as vacinas.",
    resumo:[
    "ANTIBIÓTICO trata infecção causada por BACTÉRIA: ele mata ou impede a multiplicação delas. Contra VÍRUS (gripe, covid) ele NÃO funciona.",
    "Quem indica o antibiótico e por quanto tempo é o profissional de saúde — exame de sangue, urina ou fezes identifica a bactéria. Automedicar-se (tomar remédio sem recomendação) é errado e perigoso.",
    "Alexander Fleming descobriu a penicilina em 1928, em Londres: esqueceu placas com a bactéria Staphylococcus aureus, elas mofaram, e ele viu uma ÁREA TRANSPARENTE ao redor do mofo — o fungo Penicillium notatum SECRETAVA (produzia) uma substância que matava as bactérias.",
    "A penicilina virou remédio porque matava várias bactérias E não era tóxica para o corpo humano. Na 2ª Guerra Mundial salvou milhões de soldados; pneumonia e tuberculose deixaram de ser fatais. Pode causar alergia, mas ainda é o antibiótico mais usado no mundo.",
    "SISTEMA IMUNOLÓGICO: conjunto de células, órgãos e proteínas que trabalham juntos defendendo o corpo dos microrganismos.",
    "VACINA: coloca no corpo uma pequena parte do microrganismo — não causa a doença, mas ativa o sistema imunológico. É PREVENÇÃO, não cura.",
    "Vacina existe para TODAS as idades (o calendário de vacinação diz quando; a carteira registra idade e doses) e também para ANIMAIS.",
    "Antes de chegar até você, a vacina passa por 3 etapas: pesquisa do microrganismo → testes em amostras e voluntários → aprovação dos órgãos de saúde.",
    "Os microrganismos também PRODUZEM coisas boas: pães, pizzas e bebidas alcoólicas, o combustível etanol e os antibióticos."
  ],
  questoes:[
    {p:"Os antibióticos são medicamentos usados para tratar infecções causadas por:",
     alt:["Bactérias","Vírus","Fungos","Alergias"],
     c:0, exp:"Os antibióticos são medicamentos utilizados para tratar infecções causadas por bactérias.",
     err:{1:"Contra vírus o antibiótico não funciona. Gripe e covid-19, por exemplo, são causadas por vírus."}},

    {p:"Como os antibióticos agem no organismo?",
     alt:["Matando ou impedindo a multiplicação das bactérias","Deixando o corpo mais quente","Fazendo o corpo produzir vitaminas","Bloqueando a entrada de ar dos vírus"],
     c:0, exp:"Eles agem matando ou impedindo a multiplicação de bactérias causadoras de doenças no organismo."},

    {p:"Tomar antibiótico resolve uma gripe?",
     alt:["Não, porque a gripe é causada por vírus e o antibiótico age sobre bactérias","Sim, sempre resolve","Sim, mas demora mais","Só se for tomado com suco"],
     c:0, exp:"Antibiótico trata infecções causadas por bactérias. A gripe é causada por vírus, então o antibiótico não resolve — e quem indica qualquer remédio é o profissional de saúde."},

    {p:"A palavra antibiótico vem do grego e significa:",
     alt:["Contra a vida — no caso, a vida das bactérias","A favor da vida","Contra a dor","Remédio forte"],
     c:0, exp:"A palavra antibiótico vem do grego e significa contra a vida — não contra a nossa vida, mas contra a vida das bactérias."},

    {p:"Como o médico descobre qual bactéria está causando a infecção?",
     alt:["Coletando uma amostra de sangue, urina ou fezes e enviando ao laboratório para análise","Olhando a garganta da pessoa","Perguntando os sintomas e chutando","Medindo a febre"],
     c:0, exp:"É preciso coletar uma amostra de sangue, de urina ou fezes da pessoa e encaminhar ao laboratório, onde será feita a análise para identificar a bactéria e decidir qual antibiótico usar."},

    {p:"Quem deve indicar qual antibiótico tomar e por quanto tempo?",
     alt:["O profissional de saúde","A pessoa doente","O farmacêutico do bairro, sem receita","Um parente que já tomou o mesmo remédio"],
     c:0, exp:"É o profissional de saúde que indicará qual antibiótico deverá ser tomado e por quanto tempo."},

    {p:"O que significa automedicar-se?",
     alt:["Ingerir medicamentos sem recomendação ou acompanhamento de um profissional de saúde","Tomar o remédio sozinho, sem ajuda para engolir","Tomar remédio na hora errada","Tomar vitamina todos os dias"],
     c:0, exp:"Automedicar-se é ingerir medicamentos sem recomendação ou acompanhamento de um profissional de saúde. Ninguém deve fazer isso."},

    {p:"Qual foi o primeiro antibiótico usado com sucesso no tratamento de infecções causadas por bactérias?",
     alt:["A penicilina","A vacina","O soro","O álcool em gel"],
     c:0, exp:"A penicilina foi o primeiro antibiótico usado com sucesso no tratamento de infecções causadas por bactérias."},

    {p:"Quem descobriu a penicilina e em que ano?",
     alt:["Alexander Fleming, em 1928","Merlin Pryce, em 1955","Louis Pasteur, em 1900","Alexander Fleming, em 1881"],
     c:0, exp:"Alexander Fleming foi o cientista que descobriu a penicilina, em 1928, enquanto trabalhava num hospital de Londres, na Inglaterra.",
     err:{1:"Merlin Pryce era o antigo assistente que entrou no laboratório e fez Fleming pegar as placas de novo. 1955 é o ano da morte de Fleming.",3:"1881 é o ano de nascimento de Fleming."}},

    {p:"O que Fleming esqueceu em cima da mesa do laboratório antes de sair de férias?",
     alt:["Placas de cultura da bactéria Staphylococcus aureus","Tubos de ensaio com vírus","Um pedaço de pão com mofo","Frascos de penicilina"],
     c:0, exp:"Ele esqueceu placas de cultura de uma bactéria responsável, na época, por graves infecções no corpo humano: a Staphylococcus aureus. Ao voltar, semanas depois, elas estavam contaminadas com mofo."},

    {p:"O que Fleming observou em uma das placas de Petri contaminadas?",
     alt:["Uma área transparente ao redor do mofo, indicando que ali não havia bactérias","Que o mofo tinha sumido","Que as bactérias tinham crescido mais","Que a placa estava quebrada"],
     c:0, exp:"Ele percebeu que, em uma das placas, havia uma área transparente ao redor do mofo, indicando que não havia bactérias naquela região."},

    {p:"Qual foi a conclusão de Fleming ao ver aquela área transparente?",
     alt:["Que o fungo do mofo estava secretando uma substância que matava as bactérias","Que as bactérias tinham fugido da placa","Que o mofo tinha comido as bactérias","Que a placa não tinha meio de cultura"],
     c:0, exp:"Aparentemente, o fungo que tinha causado o mofo estava secretando uma substância que matava as bactérias."},

    {p:"O que significa secretar?",
     alt:["Produzir um tipo específico de substância","Guardar em segredo","Absorver alimento","Multiplicar-se rapidamente"],
     c:0, exp:"Secretar é produzir um tipo específico de substância."},

    {p:"Qual era o nome do fungo identificado por Fleming?",
     alt:["Penicillium notatum","Staphylococcus aureus","Escherichia coli","Salmonella typhi"],
     c:0, exp:"Fleming identificou esse fungo como Penicillium notatum e, por isso, chamou a substância produzida por ele de penicilina.",
     err:{1:"Staphylococcus aureus é a bactéria que estava nas placas, não o fungo.",2:"Escherichia coli e Salmonella typhi são bactérias patogênicas mostradas em outra página."}},

    {p:"Por que a penicilina pôde ser usada como medicamento?",
     alt:["Porque matava vários tipos de bactérias e não era tóxica para o corpo humano","Porque tinha gosto bom","Porque era barata de fabricar","Porque matava também os vírus"],
     c:0, exp:"Descobriu-se que a penicilina matava também outros tipos de bactérias e, o melhor: não era tóxica para o corpo humano, o que significava que poderia ser usada como medicamento.",
     err:{3:"Antibiótico não age contra vírus."}},

    {p:"O que a penicilina fez durante a Segunda Guerra Mundial?",
     alt:["Salvou a vida de milhões de soldados feridos nos campos de batalha","Foi proibida","Serviu para limpar armas","Foi descoberta pela primeira vez"],
     c:0, exp:"Durante a Segunda Guerra Mundial, a penicilina salvou a vida de milhões de soldados feridos nos campos de batalha.",
     err:{3:"A descoberta foi antes, em 1928, e Fleming já tinha sido médico militar na Primeira Guerra."}},

    {p:"Quais doenças deixaram de ser fatais graças aos antibióticos?",
     alt:["Pneumonia, sífilis, gonorreia, febre reumática e tuberculose","Dengue, covid-19 e sarampo","Cárie e conjuntivite alérgica","Alergia e diabetes"],
     c:0, exp:"Graças aos antibióticos, doenças causadas por bactérias como pneumonia, sífilis, gonorreia, febre reumática e tuberculose deixaram de ser fatais.",
     err:{1:"Essas são causadas por vírus, e antibiótico não age sobre vírus."}},

    {p:"O que se sabe hoje sobre a penicilina?",
     alt:["Pode provocar reações alérgicas sérias em algumas pessoas, mas ainda é o antibiótico mais usado no mundo","Não é mais usada em lugar nenhum","Nunca causa problema nenhum","Passou a ser usada contra vírus"],
     c:0, exp:"Hoje sabe-se que a penicilina também pode provocar reações alérgicas sérias e, inclusive, levar à morte. Apesar disso, ainda é o antibiótico mais usado em todo o mundo."},

    {p:"Os nomes científicos das bactérias, como Escherichia coli, estão escritos em qual língua?",
     alt:["Latim","Grego","Inglês","Espanhol"],
     c:0, exp:"Esses nomes estão em latim e são usados pelos cientistas para melhor estudar cada grupo."},

    {p:"O que é o sistema imunológico?",
     alt:["Um conjunto de células, órgãos e proteínas especiais que trabalham juntos para eliminar os microrganismos capazes de causar doenças","Um órgão do corpo parecido com o coração","Um tipo de vacina","Um remédio produzido no laboratório"],
     c:0, exp:"O corpo humano tem um conjunto de células, órgãos e proteínas especiais que trabalham juntos para eliminar os microrganismos capazes de causar doenças: é o nosso sistema imunológico."},

    {p:"Qual é a função das vacinas?",
     alt:["Ajudar o sistema imunológico a defender o corpo de doenças graves causadas por vírus ou bactérias","Matar bactérias como o antibiótico","Curar a pessoa que já está doente","Substituir a higiene pessoal"],
     c:0, exp:"A função das vacinas é ajudar o sistema imunológico a defender o corpo de doenças graves causadas por vírus ou bactérias.",
     err:{1:"Isso é o antibiótico. A vacina não mata a bactéria: ela prepara a defesa do corpo.",2:"A vacina age antes, como prevenção."}},

    {p:"O que é colocado dentro do corpo quando alguém é vacinado?",
     alt:["Uma pequena parte do microrganismo, que não causa a doença mas ativa o sistema imunológico","O microrganismo inteiro e vivo, causando a doença","Um antibiótico bem forte","Apenas água com açúcar"],
     c:0, exp:"Uma pequena parte do microrganismo é introduzida no corpo, de tal forma que não cause a doença, mas que seja suficiente para ativar o sistema imunológico.",
     err:{1:"A vacina é preparada justamente para não causar a doença."}},

    {p:"Apenas seres humanos podem ser vacinados?",
     alt:["Não, os animais também podem ser vacinados","Sim, só humanos","Sim, e só adultos","Só humanos e cachorros"],
     c:0, exp:"Quando as pessoas — ou mesmo os animais — são vacinadas, uma pequena parte do microrganismo é introduzida no corpo. Ou seja, animais também são vacinados."},

    {p:"As vacinas devem ser tomadas apenas na infância?",
     alt:["Não: existem vacinas específicas para cada fase da vida","Sim, depois dos 12 anos não precisa mais","Sim, só bebês tomam vacina","Só idosos precisam de vacina"],
     c:0, exp:"Existem vacinas específicas para cada fase da vida: crianças, adolescentes, mulheres grávidas, idosos etc."},

    {p:"Qual destas frases sobre vacinas está CORRETA?",
     alt:["Ao tomar a vacina, a pessoa corre menos risco de adoecer da doença contra a qual está sendo imunizada","As vacinas devem ser tomadas apenas na infância","Apenas os seres humanos podem ser vacinados","A vacina cura quem já está doente"],
     c:0, exp:"As outras frases estão erradas porque existem vacinas para todas as fases da vida e porque os animais também podem ser vacinados."},

    {p:"Quantas e quais são as etapas antes de uma vacina chegar à população?",
     alt:["Três: pesquisa do microrganismo, fases de testagem em amostras e voluntários, e aprovação pelos órgãos de saúde do governo","Duas: fabricar e vender","Uma: aprovação do governo","Quatro: pesquisa, fabricação, propaganda e venda"],
     c:0, exp:"1. Pesquisadores estudam o microrganismo patogênico; 2. há várias fases de testagem, tanto em amostras quanto em voluntários; 3. a vacina é aprovada pelos órgãos de saúde do governo para ser oferecida aos cidadãos."},

    {p:"Por que uma vacina passa por várias etapas antes de ser liberada?",
     alt:["Para garantir que trará benefícios às pessoas e não causará danos ao organismo","Para deixá-la mais barata","Para escolher a cor do frasco","Para durar mais tempo na geladeira"],
     c:0, exp:"Isso é necessário para garantir que ela trará benefícios às pessoas e não causará danos ao organismo."},

    {p:"Para que serve o calendário de vacinação?",
     alt:["Indica quando cada vacina deve ser tomada, para que ela seja eficaz","Mostra os feriados de saúde","Serve para marcar consulta no dentista","Indica quais remédios tomar"],
     c:0, exp:"Para que uma vacina seja eficaz, é preciso que ela seja tomada na época certa. Por isso as pessoas devem seguir o calendário de vacinação."},

    {p:"O que está indicado na carteira de vacinação?",
     alt:["A idade na qual cada vacina deve ser tomada e a quantidade de doses","O nome do médico da família","O tipo sanguíneo","As alergias da pessoa"],
     c:0, exp:"Todo brasileiro deve ter uma carteira de vacinação. Nela estão indicadas a idade na qual cada vacina deve ser tomada e a quantidade de doses."},

    {p:"Os microrganismos participam da produção de um combustível chamado:",
     alt:["Etanol","Gasolina","Querosene","Carvão"],
     c:0, exp:"Os microrganismos participam da produção de alimentos e bebidas, de combustível (o etanol) e de medicamentos."},

    {p:"Quais alimentos e bebidas são produzidos com a participação de microrganismos?",
     alt:["Pães, pizzas e bebidas alcoólicas","Arroz, feijão e carne","Frutas e verduras","Sal e açúcar"],
     c:0, exp:"Pães, pizzas e bebidas alcoólicas são produzidos com a ajuda de microrganismos (a fermentação)."},

    {p:"As doenças causadas por microrganismos podem ser prevenidas com:",
     alt:["Vacinas, higiene pessoal e higiene do ambiente","Somente antibióticos","Somente vacinas","Somente compostagem"],
     c:0, exp:"As três formas de prevenção são: vacinas, higiene pessoal e higiene do ambiente. Os antibióticos entram no tratamento das infecções bacterianas, e não na prevenção.",
     err:{1:"Antibiótico é usado no tratamento de infecções bacterianas, não na prevenção."}},

    {p:"Os medicamentos produzidos com a participação de microrganismos são os antibióticos, usados no tratamento de:",
     alt:["Infecções bacterianas","Viroses","Alergias","Cáries"],
     c:0, exp:"Os antibióticos, produzidos com a ajuda de fungos e bactérias, são usados no tratamento de infecções bacterianas."}
  ]
}
  ]
});
