/* Geografia — 4º ano — 3º bimestre
   Paralelos e meridianos, incidência solar, zonas térmicas,
   campo e cidade, setores da economia. */
QUIZ.registrar({
  id:"4ano-geografia-3bim", ano:"4º ano", materia:"Geografia", emoji:"🌍",
  bimestre:"3º bimestre", tema:"Linhas imaginárias, zonas da Terra e os setores da economia",
  qtdAquecimento:8, qtdTeste:15,
  rodadas:[
{ id:"r1", emoji:"🧭", nome:"Rodada 1 — Paralelos e meridianos",
  desc:"As linhas imaginárias do globo: Equador, trópicos, círculos polares e Greenwich.",
  resumo:[
    "PARALELOS são circunferências imaginárias que circundam o globo. Os 5 principais: linha do EQUADOR, Trópico de CÂNCER, Trópico de CAPRICÓRNIO, Círculo Polar ÁRTICO e Círculo Polar ANTÁRTICO.",
    "A linha do EQUADOR é o paralelo principal: passa pelo ponto em que a Terra é mais larga e divide o globo nos hemisférios NORTE e SUL.",
    "MERIDIANOS são diferentes: são SEMICIRCUNFERÊNCIAS que ligam um polo ao outro.",
    "No fim do século XIX, num congresso internacional, o meridiano de GREENWICH (que passa pelo Observatório Real de Greenwich, perto de Londres) foi escolhido como referência: é o meridiano 0°, que divide o globo em ORIENTE e OCIDENTE.",
    "Pelo BRASIL passam a linha do Equador e o Trópico de Capricórnio. NÃO passam pelo Brasil: o Trópico de Câncer e os círculos polares.",
    "Existe uma placa do Trópico de Capricórnio na rodovia dos Bandeirantes (SP) e um Marco Zero do Equador perto de Quito, no Equador."
  ],
  questoes:[
    {p:"O que são os paralelos?", alt:["Circunferências imaginárias que circundam o globo","Estradas de verdade pintadas no chão","Montanhas em linha reta","Rios que cortam o planeta"], c:0, exp:"Os paralelos são linhas imaginárias em forma de circunferência que dão a volta no globo — só existem nos mapas e representações.", err:{1:"As linhas são IMAGINÁRIAS: no chão há apenas placas e marcos em alguns pontos."}},
    {p:"Quais são os cinco principais paralelos do globo?", alt:["Equador, Trópicos de Câncer e de Capricórnio, Círculos Polares Ártico e Antártico","Greenwich, Equador e mais três meridianos","Norte, Sul, Leste, Oeste e Centro","Ártico, Antártico, Atlântico, Pacífico e Índico"], c:0, exp:"São os cinco principais: o Equador no meio, os dois trópicos e os dois círculos polares.", err:{3:"Atlântico, Pacífico e Índico são OCEANOS, não paralelos."}},
    {p:"Por que a linha do Equador é o paralelo principal?", alt:["Passa pelo ponto em que a Terra é mais larga e divide o globo em dois hemisférios","Porque é a única linha que existe de verdade","Porque foi a primeira a ser pintada","Porque passa por todos os países"], c:0, exp:"O Equador marca a “cintura” da Terra e separa o hemisfério Norte do hemisfério Sul."},
    {p:"Quais hemisférios a linha do Equador separa?", alt:["Norte e Sul","Oriental e Ocidental","Quente e frio","Direito e esquerdo"], c:0, exp:"Equador divide Norte/Sul. Quem divide Oriental/Ocidental é o meridiano de Greenwich.", err:{1:"Oriente e ocidente são divididos pelo meridiano de Greenwich."}},
    {p:"Qual é a diferença entre meridianos e paralelos?", alt:["Meridianos são semicircunferências que ligam um polo ao outro; paralelos circundam o globo","Não há diferença","Meridianos são retas no chão","Paralelos ligam os polos"], c:0, exp:"Paralelo dá a volta “deitado”; meridiano vai “em pé”, de polo a polo."},
    {p:"Que meridiano foi escolhido como referência (meridiano 0°)?", alt:["O meridiano de Greenwich","O meridiano do Equador","O meridiano de Capricórnio","O meridiano do Brasil"], c:0, exp:"No congresso do fim do século XIX, o meridiano que passa pelo Observatório Real de Greenwich, perto de Londres, virou a referência mundial.", err:{1:"Equador é PARALELO, não meridiano."}},
    {p:"O meridiano de Greenwich divide o globo em quais partes?", alt:["Oriente e ocidente","Norte e sul","Verão e inverno","Terra e mar"], c:0, exp:"Greenwich separa o hemisfério Oriental do Ocidental — há até uma marca no chão do observatório mostrando a linha."},
    {p:"Quais linhas imaginárias principais passam pelo território brasileiro?", alt:["A linha do Equador e o Trópico de Capricórnio","O Trópico de Câncer e o Círculo Polar Ártico","Só o Círculo Polar Antártico","Nenhuma linha passa pelo Brasil"], c:0, exp:"O Equador passa pelo norte do Brasil e o Trópico de Capricórnio passa pelo estado de São Paulo — há uma placa na rodovia dos Bandeirantes!"},
    {p:"Quais linhas NÃO passam pelo território brasileiro?", alt:["O Trópico de Câncer e os círculos polares","O Equador e o Trópico de Capricórnio","Todas passam pelo Brasil","Só o Equador não passa"], c:0, exp:"Câncer fica no hemisfério Norte e os círculos polares ficam perto dos polos — longe do Brasil."},
    {p:"Onde há uma placa indicando “Aqui passa o Trópico de Capricórnio”?", alt:["Na rodovia dos Bandeirantes, no estado de São Paulo","No meio da Floresta Amazônica","Na praia de Copacabana","Em Portugal"], c:0, exp:"A placa da rodovia mostra que a linha imaginária “cruza” a estrada naquele ponto."},
    {p:"O Marco Zero construído perto da cidade de Quito mostra a passagem de qual linha?", alt:["Da linha do Equador","Do meridiano de Greenwich","Do Trópico de Câncer","Do Círculo Polar Ártico"], c:0, exp:"O país Equador tem esse nome justamente porque a linha do Equador passa por ele — e o Marco Zero marca o ponto."},
    {p:"O que aconteceu no congresso internacional do final do século XIX citado no livro?", alt:["Políticos e geógrafos decidiram que o meridiano de Greenwich seria a referência para todos os cartógrafos","Foi inventado o mapa","Decidiram apagar as linhas imaginárias","O Brasil mudou de hemisfério"], c:0, exp:"A decisão padronizou os mapas do mundo inteiro: todos passaram a contar os meridianos a partir de Greenwich."}
  ]},
{ id:"r2", emoji:"☀️", nome:"Rodada 2 — Incidência solar e zonas da Terra",
  desc:"Por que perto do Equador é quente: as zonas intertropical, temperadas e polares.",
  resumo:[
    "Perto da linha do EQUADOR, os raios solares chegam PERPENDICULARES (retinhos), concentrando a luz — por isso as temperaturas são ELEVADAS.",
    "Longe do Equador, os raios chegam INCLINADOS e se espalham por uma área maior — por isso faz mais FRIO.",
    "Regra: quanto MAIS PERTO do Equador, mais ALTA a temperatura; quanto mais LONGE, mais BAIXA.",
    "ZONA INTERTROPICAL: entre os dois trópicos. É a zona mais QUENTE e ILUMINADA do planeta.",
    "ZONAS TEMPERADAS Norte e Sul: entre os trópicos e os círculos polares. Menos quentes que a intertropical.",
    "ZONAS POLARES (ou glaciais) Norte e Sul: além dos círculos polares. São as mais FRIAS da Terra — e passam DOIS MESES sem receber radiação solar.",
    "O Brasil é um país (QUASE TODO) TROPICAL: a maior parte do território fica na zona intertropical; só a parte ao sul do Trópico de Capricórnio fica na zona temperada Sul. É o “País Tropical” da canção de Jorge Ben Jor."
  ],
  questoes:[
    {p:"Como os raios solares chegam nas áreas próximas à linha do Equador?", alt:["Perpendiculares, concentrando a luz sobre a superfície","Inclinados, espalhando a luz","Não chegam raios ali","Somente à noite"], c:0, exp:"Raios perpendiculares concentram luz e calor — a superfície irradia esse calor e as temperaturas ficam elevadas."},
    {p:"Por que as regiões distantes do Equador são mais frias?", alt:["Os raios solares chegam inclinados e se espalham por uma área maior","Porque o Sol não gosta delas","Porque chove o tempo todo","Porque ficam mais longe do Sol no espaço"], c:0, exp:"Inclinado, o mesmo “feixe” de luz cobre uma área maior — menos calor concentrado em cada ponto.", err:{3:"A distância até o Sol quase não muda; o que muda é o ÂNGULO dos raios."}},
    {p:"Complete: quanto mais próximo do Equador, mais ______ é a temperatura.", alt:["Alta","Baixa","Igual","Instável"], c:0, exp:"É a regra da incidência solar: perto do Equador = mais calor; longe = mais frio."},
    {p:"Onde fica a zona intertropical?", alt:["Entre o Trópico de Câncer e o Trópico de Capricórnio","Entre os círculos polares e os polos","Só no hemisfério Norte","No fundo do oceano"], c:0, exp:"A zona intertropical fica entre os dois trópicos — com o Equador passando bem no meio dela."},
    {p:"Qual é a característica da zona intertropical?", alt:["É a zona mais quente e iluminada do planeta","É a mais fria do planeta","Não recebe luz solar","É coberta de gelo"], c:0, exp:"Ali os raios chegam quase perpendiculares o ano todo: calor e luz em abundância."},
    {p:"Onde ficam as zonas temperadas Norte e Sul?", alt:["Entre os trópicos e os círculos polares","Entre os dois trópicos","Nos polos","No centro da Terra"], c:0, exp:"São as faixas intermediárias: menos quentes que a intertropical e menos frias que as polares."},
    {p:"Qual é a característica das zonas polares (glaciais)?", alt:["São as mais frias da Terra e ficam dois meses sem receber radiação solar","São as mais quentes","Têm praias tropicais","Nunca fica frio nelas"], c:0, exp:"Além dos círculos polares os raios chegam muito inclinados — e em parte do ano o Sol nem aparece: dois meses sem radiação solar."},
    {p:"Por que o Brasil é chamado de país (quase todo) tropical?", alt:["Porque a maior parte do território fica na zona intertropical","Porque é todo coberto de florestas","Porque fica no hemisfério Norte","Porque não tem inverno em lugar nenhum"], c:0, exp:"Quase todo o Brasil está entre os trópicos; só o pedacinho ao sul do Trópico de Capricórnio fica na zona temperada Sul."},
    {p:"A parte do Brasil ao sul do Trópico de Capricórnio fica em qual zona?", alt:["Zona temperada Sul","Zona polar Norte","Zona intertropical","Zona glacial Sul"], c:0, exp:"Estados do Sul do país ficam abaixo do trópico, na zona temperada Sul — por isso os invernos mais frios por lá."},
    {p:"Que parte do território brasileiro é maior?", alt:["A localizada na zona intertropical","A localizada na zona temperada Sul","As duas são iguais","A localizada na zona polar"], c:0, exp:"A maior parte do Brasil está na zona intertropical — é isso que faz o país ser quente na maior parte do ano."},
    {p:"Qual músico fez a canção que expressa a alegria de viver num país tropical?", alt:["Jorge Ben Jor","Piet Mondrian","Alexander Fleming","Martim Afonso de Sousa"], c:0, exp:"“Moro num país tropical, abençoado por Deus...” — Jorge Ben Jor.", err:{2:"Fleming é o cientista da penicilina, lá de Ciências!"}},
    {p:"Qual frase resume por que a Terra tem zonas quentes, temperadas e frias?", alt:["O ângulo com que os raios do Sol chegam muda conforme a distância do Equador","O Sol gira em volta da Terra esquentando um lado só","Os polos ficam mais perto do Sol","A luz do Sol não alcança o Equador"], c:0, exp:"A mesma quantidade de luz esquenta mais onde chega perpendicular (perto do Equador) e menos onde chega inclinada (perto dos polos) — o ângulo dos raios cria as zonas térmicas."}
  ]},
{ id:"r3", emoji:"🏙️", nome:"Rodada 3 — Campo, cidade e setores da economia",
  desc:"Zona rural, zona urbana e os três setores: primário, secundário e terciário.",
  resumo:[
    "O MUNICÍPIO é formado pela ZONA URBANA (cidade) e pela ZONA RURAL (campo). Cada uma tem características próprias, mas elas são COMPLEMENTARES e INTERDEPENDENTES — uma precisa da outra.",
    "A natureza do lugar (relevo, solo, clima, rios e vegetação) + o TRABALHO das pessoas + a TECNOLOGIA = a produção do que precisamos para viver.",
    "ZONA RURAL → SETOR PRIMÁRIO: agricultura, pecuária e extrativismo. Fornece MATÉRIAS-PRIMAS para as indústrias e ALIMENTOS para a população.",
    "ZONA URBANA → SETOR SECUNDÁRIO: a INDÚSTRIA, que transforma as matérias-primas em bens industrializados (carros, calçados...).",
    "SETOR TERCIÁRIO: o COMÉRCIO e os SERVIÇOS — saúde, educação, transporte, segurança, lazer, bancos. Pelo comércio, as mercadorias do campo e da indústria chegam ao consumidor.",
    "O cordel “O campo e a cidade” lembra: sem o trabalho rural não haveria plantação — nem trigo para fazer o nosso pão."
  ],
  questoes:[
    {p:"O município é formado por quais zonas?", alt:["Zona urbana (cidade) e zona rural (campo)","Zona norte e zona sul","Zona quente e zona fria","Apenas pela cidade"], c:0, exp:"Todo município tem as duas: a cidade e o campo, cada uma com suas características."},
    {p:"Como é a relação entre a zona rural e a zona urbana?", alt:["São complementares e interdependentes: uma precisa da outra","São inimigas","Não têm nenhuma relação","A cidade vive sem o campo"], c:0, exp:"O campo fornece alimentos e matérias-primas; a cidade fornece indústrias, comércio e serviços. Uma completa a outra.", err:{3:"Sem o campo não haveria alimentos nem matérias-primas — como diz o cordel, nem trigo para o pão!"}},
    {p:"Quais atividades econômicas são típicas da zona rural?", alt:["Agricultura, pecuária e extrativismo","Indústria e bancos","Cinema e teatro","Somente comércio"], c:0, exp:"Plantar, criar animais e extrair recursos da natureza são as atividades do campo — o setor primário."},
    {p:"As atividades da zona rural fazem parte de qual setor da economia?", alt:["Setor primário","Setor secundário","Setor terciário","Setor quaternário"], c:0, exp:"Setor primário = atividades que tiram da natureza: agricultura, pecuária e extrativismo."},
    {p:"O que o setor primário fornece?", alt:["Matérias-primas para as indústrias e alimentos para a população","Somente serviços","Carros prontos","Dinheiro impresso"], c:0, exp:"Tudo começa no primário: o algodão da roupa, o couro do calçado, o alimento da mesa."},
    {p:"A indústria pertence a qual setor?", alt:["Setor secundário","Setor primário","Setor terciário","Nenhum setor"], c:0, exp:"O secundário transforma: pega a matéria-prima do campo e produz bens industrializados."},
    {p:"O que a indústria faz com as matérias-primas?", alt:["Transforma em bens industrializados, como carros e calçados","Devolve para a natureza","Apenas guarda em estoque","Vende sem mudar nada"], c:0, exp:"Couro vira calçado, aço vira carro: essa transformação é o trabalho do setor secundário."},
    {p:"O comércio e os serviços formam qual setor?", alt:["Setor terciário","Setor primário","Setor secundário","Setor rural"], c:0, exp:"O terciário faz as mercadorias circularem e presta serviços à população."},
    {p:"Quais destas atividades são exemplos de SERVIÇOS (setor terciário)?", alt:["Saúde, educação, transporte, segurança, lazer e bancos","Plantar arroz e criar gado","Fabricar calçados","Extrair minério"], c:0, exp:"Serviços atendem as pessoas: hospital, escola, ônibus, polícia, cinema, banco.", err:{1:"Plantar e criar gado são setor PRIMÁRIO.",2:"Fabricar é setor SECUNDÁRIO."}},
    {p:"Qual é o papel do comércio na economia?", alt:["Fazer as mercadorias do campo e da indústria chegarem ao consumidor","Plantar alimentos","Fabricar produtos","Construir estradas"], c:0, exp:"Pelo comércio, o que foi produzido nos setores primário e secundário circula na sociedade e chega até você."},
    {p:"O que aconteceria se não existisse o trabalho rural?", alt:["Não haveria plantação — nem trigo para fazer o nosso pão","Nada mudaria","A cidade produziria os alimentos sozinha","Sobraria comida"], c:0, exp:"Sem quem planta, colhe e cria os animais, não haveria alimento — nem o trigo para fazer o pão. A cidade depende do campo todos os dias."},
    {p:"O que garante as condições para a sociedade produzir o necessário para viver, segundo o texto?", alt:["A natureza do lugar (relevo, solo, clima, rios, vegetação) junto com o trabalho e a tecnologia","Apenas a sorte","Somente o dinheiro","Apenas as máquinas, sem pessoas"], c:0, exp:"Natureza + trabalho + tecnologia: é essa combinação que produz o que precisamos para a sobrevivência."},
    {p:"Uma fábrica de carros e uma plantação de soja pertencem, respectivamente, aos setores:", alt:["Secundário e primário","Primário e secundário","Terciário e primário","Secundário e terciário"], c:0, exp:"Fábrica transforma (secundário); plantação tira da natureza (primário)."}
  ]}
]});
