/* Língua Portuguesa — 8º ano — 3º bimestre
   Palavras compostas, radicais gregos e latinos, e os usos do hífen. */
QUIZ.registrar({
  id:"8ano-portugues-3bim", ano:"8º ano", materia:"Português", emoji:"📚",
  bimestre:"3º bimestre", tema:"Palavras compostas e os usos do hífen",
  qtdAquecimento:8, qtdTeste:12,
  rodadas:[
{ id:"r1", emoji:"🧩", nome:"Rodada 1 — Palavras compostas",
  desc:"Composição, radicais gregos e latinos, e o umbigocentrismo do Armandinho.",
  resumo:[
    "COMPOSIÇÃO é o processo que une duas ou mais palavras-base (vale-refeição, socioeconômico, hidromassagem) ou dois radicais (caligrafia, politécnico) para criar um termo de NOVO significado.",
    "RADICAL é a estrutura da palavra que contém seu significado básico e recebe os AFIXOS (prefixos e sufixos).",
    "Exemplos: AZEITÓLOGO = azeite + logos (estudo) → especialista em óleos vegetais. BIBLIOSMIA = bibli(o) (livro) + osmia (cheiro) → atração pelo cheiro dos livros.",
    "CALIGRAFIA = kallos (belo) + graphia (escrita). POLITÉCNICO = poli (muitos) + técne (arte). O radical -ALGIA significa dor, sofrimento.",
    "Muitos radicais vêm do grego e do latim porque, nos séculos XVI a XVIII, as obras científicas e filosóficas circulavam em latim (com empréstimos do grego) — por isso o vocabulário técnico-científico é cheio deles, e até hoje formam termos novos.",
    "Na tira do Armandinho: GEOCENTRISMO (geo = Terra) = a Terra no centro do universo; HELIOCENTRISMO (hélio = Sol) = o Sol no centro; e o invento UMBIGOCENTRISMO critica quem se acha o centro de tudo.",
    "Na notícia da vespa-do-mar: vespa-do-mar, água-viva e tartaruga-verde são substantivos compostos escritos com hífen."
  ],
  questoes:[
    {p:"O que é o processo de composição?", alt:["A união de duas ou mais palavras-base ou radicais, formando um termo de novo significado","Acrescentar apenas um sufixo a uma palavra","Trocar as letras de lugar","Abreviar uma palavra longa"], c:0, exp:"Compor é juntar: cachorro + quente, socio + econômico, cali + grafia — e o resultado tem um significado próprio, novo."},
    {p:"O que é o radical de uma palavra?", alt:["A estrutura que contém seu significado básico e recebe os afixos","A última letra da palavra","O acento gráfico","O plural da palavra"], c:0, exp:"O radical carrega o sentido central; prefixos e sufixos (os afixos) se prendem a ele."},
    {p:"A palavra 'azeitólogo' foi criada para designar:", alt:["O profissional especializado no conhecimento de óleos vegetais","Quem estuda azeitonas do espaço","Um tipo de tempero","Quem vende azeite na feira"], c:0, exp:"Azeite + logos (estudo, do grego) = o especialista em óleos vegetais."},
    {p:"O que significa 'bibliosmia'?", alt:["A atração pelo cheiro exalado pelo interior dos livros","O medo de bibliotecas","Uma doença dos olhos","O hábito de rasgar livros"], c:0, exp:"Bibli(o) = livro + osmia = cheiro. Quem ama cheirar livro antigo tem nome!"},
    {p:"O radical grego -algia significa:", alt:["Dor, sofrimento","Alegria","Estudo","Cheiro"], c:0, exp:"Por isso nevralgia é dor nos nervos — o radical -algia aparece em várias palavras da medicina.", err:{1:"Parece 'alegria', mas é quase o contrário: dor!"}},
    {p:"'Caligrafia' é formada por quais radicais?", alt:["kallos (belo) + graphia (escrita)","cali (quente) + grafia (mapa)","calo (pele dura) + grafia (desenho)","kalli (flor) + graphia (livro)"], c:0, exp:"Caligrafia = escrita bela. Dois radicais gregos relacionados entre si."},
    {p:"E 'politécnico'?", alt:["poli (muitos) + técne (arte)","poli (cidade) + técnico (profissional)","polí (educado) + técne (máquina)","polo (gelo) + técnica (método)"], c:0, exp:"Poli = muitos, técne = arte: a escola politécnica reúne muitas artes/técnicas."},
    {p:"Por que a língua portuguesa tem tantas palavras com radicais do latim e do grego?", alt:["Porque nos séculos XVI a XVIII as obras científicas e filosóficas eram veiculadas em latim, com muitos empréstimos do grego","Porque o português nasceu na Grécia","Porque era moda nos anos 1980","Por acaso"], c:0, exp:"Essas línguas dominavam a ciência e a filosofia — por isso o vocabulário técnico-científico é cheio delas, e ainda hoje criamos termos novos assim."},
    {p:"Na tira do Armandinho, o que é o geocentrismo?", alt:["A ideia de que a Terra seria o centro do universo","A ideia de que o Sol seria o centro","O estudo das rochas","Um tipo de mapa"], c:0, exp:"Geo = Terra + centrismo = centro. No heliocentrismo (hélio = Sol), o centro seria o Sol."},
    {p:"O que Armandinho critica ao inventar a palavra 'umbigocentrismo'?", alt:["Pessoas que se acham o centro de tudo, que só olham para o próprio umbigo","Quem estuda astronomia","Quem gosta de história","Médicos"], c:0, exp:"A piada junta 'umbigo' + 'centrismo' para criticar o egocentrismo: gente que age como se o universo girasse em torno de si."},
    {p:"Na notícia, 'vespa-do-mar', 'água-viva' e 'tartaruga-verde' são exemplos de:", alt:["Substantivos compostos escritos com hífen","Verbos no passado","Palavras estrangeiras","Siglas"], c:0, exp:"Nomes de seres formados por mais de uma palavra, unidas pelo hífen numa unidade só de sentido."},
    {p:"Segundo a notícia, qual é o único animal conhecido por se alimentar da vespa-do-mar?", alt:["A tartaruga-verde, que tem pele grossa que o veneno não penetra","O tubarão-branco","A água-viva comum","Nenhum animal"], c:0, exp:"A Chelonia mydas (tartaruga-verde) come a cubomedusa mais venenosa do mundo sem se ferir, graças à pele grossa."}
  ]},
{ id:"r2", emoji:"➖", nome:"Rodada 2 — Os usos do hífen",
  desc:"Cachorro-quente, contar-lhe e o corte no fim da linha: quando o tracinho entra em cena.",
  resumo:[
    "Uso principal: o hífen transforma um conjunto de palavras em UNIDADE AUTÔNOMA, com um terceiro significado: cachorro + quente = CACHORRO-QUENTE (o lanche, não um cão com calor).",
    "Uso 2: combinar VERBO + PRONOME ENCLÍTICO — o pronome átono que vem DEPOIS do verbo e se agrega a ele: contar-lhe, olhou-me.",
    "Uso 3: marcar o CORTE da palavra no fim da linha, ligando-a à parte que continua na linha seguinte — sempre obedecendo às regras da divisão silábica.",
    "Uso 4: recurso gráfico de DICÇÃO — separar as sílabas para indicar ênfase na fala: de-va-gar."
  ],
  questoes:[
    {p:"Qual é a função principal do hífen nas palavras compostas?", alt:["Transformar um conjunto de palavras em unidade autônoma, com novo significado","Deixar a palavra mais bonita","Indicar plural","Substituir a vírgula"], c:0, exp:"Cachorro e quente, separados, têm cada um seu sentido; unidos pelo hífen formam outra unidade, com um terceiro significado."},
    {p:"'Cachorro-quente' significa um cão com calor?", alt:["Não: o hífen criou uma nova unidade, com um terceiro significado (o lanche)","Sim, literalmente","Depende do contexto","É um erro de escrita"], c:0, exp:"É o exemplo clássico: a composição gera um significado que não é a soma dos dois."},
    {p:"Em 'contar-lhe' e 'olhou-me', o hífen serve para:", alt:["Combinar o verbo com o pronome enclítico","Separar duas frases","Marcar o plural","Indicar pergunta"], c:0, exp:"O pronome átono que vem depois do verbo (enclítico) se liga a ele pelo hífen."},
    {p:"O que é um pronome enclítico?", alt:["O pronome átono que vem depois do verbo e se agrega a ele","O pronome que vem antes do verbo","Um pronome gritado","Um pronome em inglês"], c:0, exp:"Ênclise = pronome depois do verbo: contar-LHE, olhou-ME.", err:{1:"Antes do verbo é a próclise (ele me olhou) — sem hífen."}},
    {p:"Quando cortamos uma palavra no fim da linha, o hífen deve obedecer:", alt:["Às regras da divisão silábica","À vontade de quem escreve","Ao tamanho da página","À ordem alfabética"], c:0, exp:"O corte só pode acontecer entre sílabas: ca-der-no pode quebrar em ca- / derno, nunca em cad- / erno."},
    {p:"Escrever 'de-va-gar', separando as sílabas com hífen numa fala, é um recurso para:", alt:["Indicar ênfase na dicção","Corrigir a ortografia","Mostrar que a palavra é estrangeira","Economizar espaço"], c:0, exp:"É o hífen como recurso gráfico de dicção, marcando uma pronúncia pausada, enfática."},
    {p:"Qual das opções traz um uso do hífen para unidade autônoma (palavra composta)?", alt:["vale-refeição","olhou-me","de-va-gar","ca- / derno (fim de linha)"], c:0, exp:"Vale-refeição é composição: duas palavras viraram uma unidade com sentido próprio. As outras são os outros usos do hífen.", err:{1:"'Olhou-me' é verbo + pronome enclítico.",2:"'De-va-gar' é o recurso de dicção/ênfase."}},
    {p:"'Vou contar-lhe um segredo.' A quem o hífen liga o pronome?", alt:["Ao verbo contar","Ao substantivo segredo","À palavra vou","A ninguém, está errado"], c:0, exp:"Contar-lhe: o pronome 'lhe' vem depois do verbo 'contar' e se agrega a ele — ênclise com hífen."},
    {p:"Qual destas situações NÃO é um uso do hífen?", alt:["Separar o sujeito do verbo na frase","Formar palavras compostas","Ligar verbo a pronome enclítico","Marcar o corte da palavra no fim da linha"], c:0, exp:"Sujeito e verbo não se separam por hífen (nem por vírgula!). Os usos do hífen são: composição, ênclise, translineação e ênfase de dicção."},
    {p:"'Água-viva' leva hífen porque:", alt:["As duas palavras formam um único ser, uma unidade de sentido","'Água' é feminina","É nome científico em latim","Toda palavra com 'água' leva hífen"], c:0, exp:"Água-viva não é uma água que está viva: é o nome de um animal — unidade autônoma de significado, como vespa-do-mar e tartaruga-verde."}
  ]}
]});
