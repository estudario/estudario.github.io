/* Língua Portuguesa — 4º ano — 3º bimestre
   Texto dramático (Viravez, o cortês), ortografia (z/s), encontro consonantal,
   sílaba tônica e acentuação, pronomes de retomada e texto de opinião. */
QUIZ.registrar({
  id:"4ano-portugues-3bim", ano:"4º ano", materia:"Português", emoji:"📚",
  bimestre:"3º bimestre", tema:"Texto dramático, ortografia, acentuação e texto de opinião",
  qtdAquecimento:8, qtdTeste:15,
  rodadas:[
{ id:"r1", emoji:"🎭", nome:"Rodada 1 — Texto dramático",
  desc:"A peça “Viravez, o cortês”: como funciona um texto feito para ser encenado.",
  resumo:[
    "O TEXTO DRAMÁTICO é escrito para ser ENCENADO por atores no palco (como a peça “Viravez, o cortês”).",
    "Diferente dos textos narrativos, ele geralmente NÃO TEM NARRADOR: a história é contada pelas FALAS dos personagens.",
    "O leitor identifica quem está falando pelo NOME DO PERSONAGEM escrito antes de cada fala.",
    "As RUBRICAS (marcações de fala e de cena) indicam como o autor imaginou a encenação: gestos, tom de voz, movimentos. Elas aparecem com destaque ou letra diferente.",
    "As rubricas NÃO são faladas pelos atores — servem para orientar a encenação.",
    "O texto dramático também traz marcações de TEMPO e de LUGAR em que a cena acontece."
  ],
  questoes:[
    {p:"Para que serve um texto dramático?", alt:["Para ser encenado por atores","Para ser lido em silêncio, como um romance","Para dar notícias","Para ensinar receitas"], c:0, exp:"O texto dramático é o texto do teatro: ele existe para virar encenação no palco."},
    {p:"Como a história é contada em um texto dramático como “Viravez, o cortês”?", alt:["Pelas falas dos personagens","Por um narrador que descreve tudo","Por fotografias","Por legendas de mapa"], c:0, exp:"Nos textos dramáticos geralmente não há narrador: quem conta a história são os próprios personagens, falando.", err:{1:"Narrador contando é típico dos textos NARRATIVOS, não dos dramáticos."}},
    {p:"Como o leitor identifica quem são os personagens no texto dramático?", alt:["Pelo nome do personagem escrito antes de cada fala","Pela cor da página","Adivinhando pelo assunto","Pelo tamanho da letra da fala"], c:0, exp:"Antes de cada fala aparece o nome de quem fala — assim o leitor (e o ator) sabe de quem é cada frase."},
    {p:"O que são as rubricas (marcações de fala e de cena)?", alt:["Indicações de como o autor imaginou a encenação no palco","As falas mais importantes da peça","Erros que precisam ser corrigidos","Os nomes dos atores famosos"], c:0, exp:"As rubricas orientam gestos, movimentos e o jeito de falar dos atores durante a encenação."},
    {p:"As rubricas devem ser faladas pelos atores durante a encenação?", alt:["Não: elas servem para orientar a encenação, não para ser ditas","Sim, bem alto","Sim, mas só no final","Só se o público pedir"], c:0, exp:"Rubrica é instrução, não fala. O ator lê para saber COMO agir, mas não diz aquilo em cena."},
    {p:"Como as rubricas costumam se diferenciar das falas no texto?", alt:["Por destaques ou por outro tipo e tamanho de letra","Por virem em outra língua","Por serem cantadas","Não há diferença nenhuma"], c:0, exp:"O texto marca as rubricas com itálico, parênteses ou letra diferente, para ninguém confundir com fala."},
    {p:"Além das falas, o que o texto dramático costuma marcar?", alt:["O tempo e o lugar em que a cena se passa","O preço dos ingressos","A idade dos leitores","O número de páginas"], c:0, exp:"O texto indica quando e onde cada cena acontece — na peça, a cena inicial se passa na cozinha da casa."},
    {p:"Em um texto NARRATIVO ficcional, quem costuma contar a história?", alt:["Um narrador","Os cenários","O público","Ninguém conta"], c:0, exp:"Essa é a grande diferença: o narrativo tem narrador; o dramático conta tudo pelas falas dos personagens."},
    {p:"Na peça, os vizinhos vão à casa de Viravez e Inácia e veem a fartura de comida. O que eles demonstram?", alt:["Sentimentos como inveja e cobiça diante da fartura","Vontade de ir embora","Medo do escuro","Sono"], c:0, exp:"A cena mostra a reação dos convidados diante da mesa farta — e é daí que a história se desenvolve."},
    {p:"Uma frase como “(Inácia mexe a panela, irritada)” dentro da peça é...", alt:["Uma rubrica: orienta a atriz sem ser falada","Uma fala da Inácia","Um erro de impressão","O título da peça"], c:0, exp:"Está indicando ação e emoção para a encenação — típica rubrica.", err:{1:"Fala viria depois do nome do personagem com travessão ou dois-pontos, para ser DITA em cena."}},
    {p:"No teatro, quem transforma o texto dramático em espetáculo?", alt:["Os atores, encenando no palco","O narrador","A gráfica","O público, lendo em casa"], c:0, exp:"O texto é o roteiro; a peça acontece quando os atores o encenam."},
    {p:"Qual característica pertence ao texto DRAMÁTICO (e não ao narrativo)?", alt:["Nome do personagem antes da fala e rubricas de cena","Narrador descrevendo os lugares","Parágrafos longos de descrição","Rimas obrigatórias"], c:0, exp:"Nome do personagem + fala e rubricas são a “cara” do texto dramático; descrição por narrador é do narrativo."}
  ]},
{ id:"r2", emoji:"🔤", nome:"Rodada 2 — Ortografia e sílaba tônica",
  desc:"Som da letra Z, encontro consonantal, sílaba tônica e as regras de acento.",
  resumo:[
    "No INÍCIO de palavra, o som /z/ é sempre escrito com a letra Z — nunca com S: zelo, zoar, zurrar, zangue.",
    "Trocar Z por S no início muda a palavra: zelo/selo, zoar/soar, zurrar/surrar, zangue/sangue.",
    "ENCONTRO CONSONANTAL é a sequência de duas ou mais consoantes na palavra: PRato, BRanco, FLor. Acrescentar uma consoante pode criar palavra nova: banco → branco.",
    "SÍLABA TÔNICA é a sílaba pronunciada com mais força na palavra.",
    "Classificação: OXÍTONA (força na última sílaba), PAROXÍTONA (na penúltima), PROPAROXÍTONA (na antepenúltima).",
    "TODAS as proparoxítonas recebem acento gráfico: lâmpada, médico, ônibus.",
    "Paroxítonas terminadas em L, R, I(S), Ã(S), ÃO(S), US recebem acento: útil, açúcar, táxi, lápis, órfã, órgão, bônus, Vênus.",
    "Paroxítonas terminadas em A, E, O (comuns) NÃO levam acento: casa, escola, sapato."
  ],
  questoes:[
    {p:"Complete a regra: sempre que a letra Z ocorrer em ______ de palavra, terá o som /z/...", alt:["início — e nunca poderá ser trocada pela letra S","fim — e pode virar S","meio — e não tem som","qualquer lugar — e é muda"], c:0, exp:"No começo da palavra, o som /z/ se escreve sempre com Z: zebra, zelo, zoar."},
    {p:"O que acontece se trocarmos o Z de “zelo” por S?", alt:["Vira outra palavra: “selo”","Continua a mesma palavra","A palavra deixa de existir","Fica com dois sentidos"], c:0, exp:"zelo (cuidado) ≠ selo (o do envelope). Por isso a letra certa importa!"},
    {p:"Qual par mostra que trocar Z por S muda o sentido?", alt:["zurrar / surrar","casa / caza","zebra / zebra","azul / asul"], c:0, exp:"Zurrar é o som do jumento; surrar é bater. O mesmo vale para zoar/soar e zangue/sangue."},
    {p:"O que é um encontro consonantal?", alt:["Duas ou mais consoantes juntas na palavra, como em PRato","Duas vogais juntas","Uma sílaba com acento","Uma palavra repetida"], c:0, exp:"Consoantes em sequência formam o encontro consonantal: prato, branco, flor, trigo."},
    {p:"Acrescentando uma consoante, “banco” vira “branco”. O que se formou?", alt:["Um encontro consonantal (BR)","Um acento","Uma rima","Um ditongo"], c:0, exp:"O R entrou ao lado do B: b + r = encontro consonantal BR, e a palavra mudou de sentido."},
    {p:"O que é a sílaba tônica?", alt:["A sílaba pronunciada com mais força na palavra","A primeira sílaba de toda palavra","A sílaba que tem mais letras","Uma sílaba cantada"], c:0, exp:"É a sílaba mais forte. Em “janela”, a força está em NE: ja-NE-la."},
    {p:"Palavra com a sílaba tônica na ÚLTIMA sílaba é chamada de:", alt:["Oxítona","Paroxítona","Proparoxítona","Átona"], c:0, exp:"Oxítona = força na última: café, sofá, funil."},
    {p:"Palavra com a força na PENÚLTIMA sílaba é:", alt:["Paroxítona","Oxítona","Proparoxítona","Muda"], c:0, exp:"Paroxítona = força na penúltima: escola, táxi, útil. É o grupo mais comum do português."},
    {p:"E na ANTEPENÚLTIMA sílaba?", alt:["Proparoxítona — e todas recebem acento","Oxítona — nunca tem acento","Paroxítona — às vezes tem acento","Não existe esse caso"], c:0, exp:"Proparoxítonas como lâmpada, médico e ônibus são TODAS acentuadas."},
    {p:"Por que “táxi”, “útil” e “açúcar” recebem acento gráfico?", alt:["São paroxítonas terminadas em I, L e R","São oxítonas","Terminam em vogal comum","O acento é só enfeite"], c:0, exp:"Paroxítonas terminadas em i, l, r (e também ã, ão, us) levam acento: táxi, útil, açúcar, órfã, órgão, bônus."},
    {p:"Qual grupo tem apenas palavras que DEVEM ser acentuadas?", alt:["amável, tênis, difícil","cadeira, mesa, sapato","partir, canil, ali","escola, banana, janela"], c:0, exp:"Amável e difícil são paroxítonas terminadas em L; tênis é paroxítona terminada em IS — todas com acento.", err:{2:"Partir, canil e ali são oxítonas terminadas em R, L e I — essas NÃO se acentuam.",1:"Paroxítonas terminadas em A não levam acento.",3:"Também são paroxítonas terminadas em A — sem acento."}},
    {p:"“Bônus”, “Vênus”, “órfão” e “órgão” são acentuadas porque são paroxítonas terminadas em:", alt:["US e ÃO","A e E","M e N","Z e S"], c:0, exp:"Terminação -us (bônus, Vênus) e -ão (órfão, órgão) pede acento nas paroxítonas."},
    {p:"Em “lápis”, onde está a sílaba tônica?", alt:["Na penúltima: LÁ (paroxítona)","Na última: PIS (oxítona)","Na antepenúltima","Não tem sílaba tônica"], c:0, exp:"LÁ-pis: força na penúltima, terminada em -is → paroxítona acentuada."},
    {p:"Qual destas palavras NÃO deve receber acento gráfico?", alt:["parede","tenis","dificil","orfã"], c:0, exp:"“Parede” é paroxítona terminada em E — as paroxítonas comuns (terminadas em a, e, o) não levam acento. Já tênis (-is), difícil (-l) e órfã (-ã) precisam do acento.", err:{1:"“Tênis” leva acento: paroxítona terminada em -is.",2:"“Difícil” leva acento: paroxítona terminada em -l.",3:"“Órfã” leva acento: paroxítona terminada em -ã."}}
  ]},
{ id:"r3", emoji:"💬", nome:"Rodada 3 — Pronomes de retomada e texto de opinião",
  desc:"Palavras que evitam repetição no texto e a estrutura do texto de opinião.",
  resumo:[
    "PRONOMES podem RETOMAR termos já ditos no texto, evitando repetições desnecessárias.",
    "Exemplos: “ele” pode retomar “o sapo”; “sua” pode retomar “de Tarsila”; “isso” pode retomar uma FRASE INTEIRA.",
    "Sem os pronomes, o texto ficaria repetitivo e estranho: “o sapo... olha o sapo aí”.",
    "O TEXTO DE OPINIÃO mostra a maneira de pensar do autor sobre um assunto, acontecimento ou ideia.",
    "Para defender o ponto de vista, usa ESTRATÉGIAS ARGUMENTATIVAS: fatos, exemplos, citações e dados estatísticos.",
    "Estrutura: INTRODUÇÃO (apresenta o problema) → OPINIÃO (aprofunda as ideias) → ARGUMENTO (prova que sustenta a opinião) → CONCLUSÃO (ideia final).",
    "O TÍTULO deve ser adequado ao assunto e despertar o interesse do leitor.",
    "Na REVISÃO, conferimos: o texto defende uma opinião? Os argumentos sustentam? Evitamos repetições usando palavras substitutas?"
  ],
  questoes:[
    {p:"Para que servem pronomes como “ele”, “sua” e “isso” dentro de um texto?", alt:["Retomar termos já ditos, evitando repetições desnecessárias","Deixar o texto mais comprido","Substituir os verbos","Marcar o fim do parágrafo"], c:0, exp:"Eles “apontam” para algo que já apareceu, e o texto flui sem repetir a mesma palavra toda hora."},
    {p:"Na frase da repórter diante da tela O sapo — “Ó ele aí” —, a palavra “ele” retoma o quê?", alt:["O sapo","A repórter","A exposição","A parede"], c:0, exp:"“Ele” substitui “o sapo”: como todos estavam vendo a tela, não era preciso repetir o nome."},
    {p:"Em “um retorno à infância de Tarsila ... e sua paixão por gatos”, a palavra “sua” retoma:", alt:["“de Tarsila”","“gatos”","“infância”","“fazendas”"], c:0, exp:"A paixão é de Tarsila — “sua” evita escrever “a paixão de Tarsila” de novo."},
    {p:"A palavra “isso” pode retomar até...", alt:["Uma frase inteira dita antes","Só nomes de pessoas","Só nomes de animais","Nada — isso não retoma"], c:0, exp:"“Isso” consegue retomar toda uma ideia dita antes, não apenas uma palavra."},
    {p:"O que acontece com o texto se não usarmos palavras de retomada?", alt:["Fica repetitivo e estranho","Fica mais bonito","Fica mais curto","Nada muda"], c:0, exp:"“A exposição conquista as crianças. A exposição não conquista só as crianças...” — cansativo, né? A retomada resolve."},
    {p:"O que é um texto de opinião?", alt:["Um texto que mostra a maneira de pensar do autor sobre um assunto","Uma lista de compras","Uma história inventada com narrador","Uma receita com ingredientes"], c:0, exp:"Ele apresenta e defende o ponto de vista do autor sobre um assunto, acontecimento ou ideia."},
    {p:"Quais são as estratégias argumentativas citadas no livro?", alt:["Fatos, exemplos, citações e dados estatísticos","Rimas e desenhos","Fofocas e adivinhações","Somente opiniões sem prova"], c:0, exp:"Para convencer, o autor usa provas: fatos, exemplos, citações e dados estatísticos."},
    {p:"Qual é a ordem das partes do texto de opinião?", alt:["Introdução → opinião → argumento → conclusão","Conclusão → título → rima","Argumento → receita → moral","Começo → meio → fim de história"], c:0, exp:"Introdução apresenta o problema; a opinião aprofunda; o argumento prova; a conclusão fecha a ideia."},
    {p:"O que é o “argumento” no texto de opinião?", alt:["Uma prova que confirma ou sustenta a opinião","Uma briga entre personagens","O título do texto","Uma pergunta sem resposta"], c:0, exp:"Argumento é o que sustenta o ponto de vista: sem ele, a opinião fica sem apoio."},
    {p:"Como deve ser o título de um texto de opinião?", alt:["Adequado ao assunto e capaz de despertar interesse no leitor","Bem comprido, com todas as ideias","Igual ao primeiro parágrafo","Sem relação com o texto, para surpreender"], c:0, exp:"O título anuncia o assunto e convida à leitura — é um dos itens do quadro de revisão."},
    {p:"Na revisão do texto, uma das perguntas do quadro é:", alt:["“Os argumentos usados sustentam o ponto de vista apresentado?”","“O texto tem mais de mil palavras?”","“As letras estão coloridas?”","“Tem final feliz?”"], c:0, exp:"A revisão confere opinião clara, introdução, argumentos que sustentam, conclusão que enfatiza e repetições evitadas."},
    {p:"Qual destas frases funciona como ARGUMENTO em um texto de opinião?", alt:["Uma pesquisa mostrou que separar o lixo reduz a poluição dos rios","Eu acho legal","Fim","Era uma vez uma menina"], c:0, exp:"Argumento é prova que sustenta a opinião: fatos, exemplos, citações e dados. “Eu acho” sozinho é só opinião, sem apoio.", err:{1:"É uma opinião sem prova nenhuma — falta o argumento que a sustente."}},
    {p:"O que a CONCLUSÃO de um texto de opinião deve fazer?", alt:["Apresentar a ideia final, enfatizando a opinião defendida","Trazer um assunto totalmente novo","Fazer uma lista de compras","Apenas repetir o título"], c:0, exp:"A conclusão fecha o texto: retoma e enfatiza a opinião, considerando os argumentos apresentados.", err:{1:"Assunto novo na conclusão confunde o leitor — ali é hora de fechar a ideia."}}
  ]}
]});
