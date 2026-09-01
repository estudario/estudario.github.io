/* Geografia — 8º ano — 3º bimestre
   América Latina: crescimento populacional, distribuição e urbanização. */
QUIZ.registrar({
  id:"8ano-geografia-3bim", ano:"8º ano", materia:"Geografia", emoji:"🌎",
  bimestre:"3º bimestre", tema:"América Latina: população e urbanização",
  qtdAquecimento:8, qtdTeste:12,
  rodadas:[
{ id:"r1", emoji:"📈", nome:"Rodada 1 — Crescimento populacional",
  desc:"O salto populacional da América Latina depois da Segunda Guerra.",
  resumo:[
    "A América Latina teve um grande e rápido crescimento populacional a partir da SEGUNDA METADE DO SÉCULO XX, sobretudo após a Segunda Guerra Mundial.",
    "Números: 1950 = 150 milhões → 1960 = 210 → 1970 = 275 → 1980 = 350 milhões.",
    "Na década de 1960, a taxa chegou a quase 3% ao ano — a população DOBROU no intervalo de três décadas.",
    "A VENEZUELA dobrou a população em 20 anos; Argentina, Uruguai, Cuba e Chile levaram 35 anos.",
    "CRESCIMENTO VEGETATIVO (ou natural) = taxa de natalidade − taxa de mortalidade.",
    "CRESCIMENTO POPULACIONAL (ou demográfico) = crescimento vegetativo + SALDO MIGRATÓRIO.",
    "Brasil, Colômbia, Costa Rica e Chile começaram a apresentar QUEDA nas taxas em meados dos anos 1960; México, Panamá, Peru, República Dominicana e Venezuela na década seguinte. BOLÍVIA e HAITI ainda apresentam taxas elevadas."
  ],
  questoes:[
    {p:"Quando a América Latina apresentou grande e rápido crescimento populacional?", alt:["A partir da segunda metade do século XX, sobretudo após a Segunda Guerra Mundial","No século XVI, com a colonização","Apenas depois do ano 2000","Nunca cresceu rápido"], c:0, exp:"O 'boom' populacional latino-americano é um fenômeno do pós-guerra."},
    {p:"Qual era a população da América Latina em 1950 e em 1980?", alt:["150 milhões e 350 milhões","50 milhões e 100 milhões","500 milhões e 1 bilhão","10 milhões e 20 milhões"], c:0, exp:"De 150 para 350 milhões em 30 anos: mais que o dobro."},
    {p:"Qual taxa de crescimento anual a região atingiu na década de 1960?", alt:["Quase 3% ao ano","10% ao ano","0,1% ao ano","20% ao ano"], c:0, exp:"Com quase 3% ao ano, a população dobrava em cerca de três décadas."},
    {p:"Qual país dobrou sua população em apenas 20 anos?", alt:["Venezuela","Argentina","Uruguai","Chile"], c:0, exp:"A Venezuela dobrou em 20 anos; Argentina, Uruguai, Cuba e Chile levaram 35 anos para isso.", err:{1:"A Argentina foi um dos países mais lentos: 35 anos."}},
    {p:"O que é o crescimento vegetativo (ou natural)?", alt:["A diferença entre a taxa de natalidade e a taxa de mortalidade","A soma de todos os habitantes","O número de imigrantes","O crescimento das florestas"], c:0, exp:"Nascimentos menos mortes: é o crescimento 'de dentro' da população."},
    {p:"E o crescimento populacional (demográfico) considera o quê, além do vegetativo?", alt:["O saldo migratório","O tamanho do território","O clima do país","A altitude média"], c:0, exp:"Crescimento populacional = vegetativo + saldo migratório (quem chega menos quem sai)."},
    {p:"Quais países da América Latina ainda apresentam taxas de crescimento elevadas?", alt:["Bolívia e Haiti","Argentina e Uruguai","Chile e Cuba","Brasil e México"], c:0, exp:"Enquanto a maioria desacelerou, Bolívia e Haiti mantêm taxas altas.", err:{1:"Argentina e Uruguai estavam entre os de taxas MAIS BAIXAS já nos anos 1950."}},
    {p:"Quando o Brasil começou a apresentar queda nas taxas de crescimento vegetativo?", alt:["Em meados dos anos 1960, junto com Colômbia, Costa Rica e Chile","Somente em 2020","No século XIX","Nunca caiu"], c:0, exp:"A queda brasileira começa em meados dos anos 1960; México, Panamá, Peru, República Dominicana e Venezuela vieram na década seguinte."}
  ]},
{ id:"r2", emoji:"🏙️", nome:"Rodada 2 — Distribuição e urbanização",
  desc:"Por que a população se concentra no litoral, as megacidades e as favelas.",
  resumo:[
    "A distribuição da população latino-americana é IRREGULAR, com maior concentração nas ÁREAS LITORÂNEAS.",
    "Motivos: o PASSADO COLONIAL (a proximidade dos portos facilitava a comunicação com as metrópoles) e fatores naturais — relevo plano, clima ameno e solos férteis.",
    "Exceções: a BOLÍVIA não tem litoral e concentra a população no ALTIPLANO ANDINO; o MÉXICO é bioceânico, mas 75% da população vive no PLANALTO DO ANAHUAC (entre as serras Madre Ocidental e Oriental) — e a Cidade do México concentra 20% da população do país.",
    "Megacidades com mais de 20 milhões de habitantes: CIDADE DO MÉXICO, SÃO PAULO e BUENOS AIRES. Com cerca de 10 milhões: Bogotá, Caracas e Lima.",
    "A concentração populacional está interligada à concentração das ATIVIDADES ECONÔMICAS: as cidades mais populosas são os principais polos econômicos, dos quais dependem as cidades menores e as áreas rurais.",
    "O crescimento urbano ACELERADO e sem investimentos em infraestrutura gera: falta de moradias e saneamento, congestionamentos, violência, ocupações irregulares e serviços públicos deficientes.",
    "ONU (2023): 18% da população latino-americana vivia em AGLOMERADOS SUBNORMAIS (favelas) — cerca de 120 MILHÕES de pessoas, mais do que a população do México, o 2º país mais populoso da região (atrás do Brasil)."
  ],
  questoes:[
    {p:"Onde se concentra a maior parte da população latino-americana?", alt:["Nas áreas litorâneas","No centro das florestas","Nos desertos","Nas montanhas geladas"], c:0, exp:"A distribuição é irregular, com forte concentração no litoral — herança colonial e vantagens naturais."},
    {p:"Que fator HISTÓRICO explica a concentração no litoral?", alt:["O passado colonial: a proximidade dos portos facilitava a comunicação com as metrópoles","A invenção do avião","O turismo de praia moderno","A pesca esportiva"], c:0, exp:"As colônias se organizavam de frente para o mar, por onde saíam riquezas e chegavam ordens das metrópoles."},
    {p:"Que fatores NATURAIS também favoreceram essa concentração?", alt:["Relevo plano, clima ameno e solos férteis","Vulcões ativos","Rios congelados","Falta de chuva"], c:0, exp:"Terreno plano para construir, clima agradável e solo bom para plantar: combinação que atrai gente."},
    {p:"Por que a Bolívia é uma exceção à regra do litoral?", alt:["Não tem litoral, e a maior parte da população se concentra no altiplano andino","Porque todos vivem na floresta","Porque é uma ilha","Porque ninguém vive lá"], c:0, exp:"Sem acesso ao mar, a vida boliviana se organizou nas terras altas dos Andes."},
    {p:"Onde vivem 75% dos mexicanos?", alt:["No planalto do Anahuac, entre as serras Madre Ocidental e Oriental","Na costa do Pacífico","Na fronteira com os EUA","Na península de Yucatán"], c:0, exp:"Mesmo sendo um país bioceânico (dois oceanos!), o México concentra a população no planalto central — e a Cidade do México sozinha tem 20% dos habitantes do país."},
    {p:"Quais cidades latino-americanas já ultrapassam 20 milhões de habitantes?", alt:["Cidade do México, São Paulo e Buenos Aires","Bogotá, Caracas e Lima","Montevidéu, Assunção e Quito","La Paz, Havana e Manágua"], c:0, exp:"As três megacidades da região estão entre as mais populosas do mundo. Bogotá, Caracas e Lima estão na faixa dos 10 milhões.", err:{1:"Bogotá, Caracas e Lima têm CERCA de 10 milhões — grandes, mas na faixa de baixo."}},
    {p:"Qual é a relação entre concentração populacional e economia?", alt:["As cidades mais populosas são os principais polos econômicos, dos quais dependem as cidades menores e as áreas rurais","Não há relação nenhuma","Cidades grandes são sempre mais pobres","A economia se concentra no campo"], c:0, exp:"Gente e atividade econômica se atraem mutuamente: emprego, educação e serviços puxam mais gente, que gera mais atividade."},
    {p:"Que problemas o crescimento urbano acelerado SEM infraestrutura provoca?", alt:["Falta de moradias e saneamento, congestionamentos, violência, ocupações irregulares e serviços deficientes","Excesso de parques e praças","Queda no preço dos aluguéis","Nenhum problema"], c:0, exp:"Quando a cidade cresce mais rápido que os investimentos, a conta chega em forma de problemas urbanos."},
    {p:"Segundo a ONU (2023), quantos latino-americanos viviam em favelas (aglomerados subnormais)?", alt:["18% da população — cerca de 120 milhões de pessoas","1% — cerca de 5 milhões","50% — cerca de 300 milhões","Nenhum"], c:0, exp:"120 milhões de pessoas: mais do que a população inteira do México."},
    {p:"Qual é o 2º país mais populoso da América Latina?", alt:["O México, atrás apenas do Brasil","A Argentina","A Colômbia","O Chile"], c:0, exp:"Brasil em 1º, México em 2º — e mesmo assim a população das favelas da região supera a população mexicana."}
  ]},
{ id:"r3", emoji:"🏭", nome:"Rodada 3 — Estados Unidos: potência econômica",
  desc:"Petróleo, indústria, Manufacturing Belt e o Cinturão do Sol.",
  resumo:[
    "Os Estados Unidos são uma POTÊNCIA ECONÔMICA: o desenvolvimento transformou intensamente a paisagem natural nos últimos dois séculos (mineração, agropecuária, indústria, urbanização, transportes).",
    "O PIB e a PEA (população economicamente ativa) do país se concentram no SETOR TERCIÁRIO — os setores secundário e primário respondem por parcelas bem menores.",
    "O território tem grande disponibilidade de RECURSOS MINERAIS, mas o consumo é tão alto que o país precisa IMPORTAR insumos, com destaque para o petróleo.",
    "PETRÓLEO: os EUA têm hoje a MAIOR PRODUÇÃO do mundo (seguidos por Arábia Saudita e Rússia) e, ao mesmo tempo, são o MAIOR IMPORTADOR. As maiores RESERVAS estão na Venezuela e na Arábia Saudita — produzir mais não significa ter mais reservas.",
    "Quase 60% da MATRIZ ELÉTRICA americana ainda vem de combustíveis fósseis, com grande destaque para o GÁS NATURAL.",
    "No comércio de minérios, os principais parceiros são os vizinhos CANADÁ e MÉXICO, além de China, Japão e Alemanha.",
    "A região industrial tradicional é o MANUFACTURING BELT, no Nordeste / Grandes Lagos (Chicago, Detroit, Nova York). No pós-Segunda Guerra, as indústrias se deslocaram para o SUL e o OESTE, formando o CINTURÃO DO SOL (Sun Belt): alta tecnologia — informática, telecomunicações, eletrônica, aeroespacial e química fina — atraída por estímulos do governo e pela presença de petróleo.",
    "Na agropecuária, o país também é gigante: grandes produções de trigo, algodão, tomates e outros gêneros."
  ],
  questoes:[
    {p:"Em qual setor da economia se concentram o PIB e a PEA dos Estados Unidos?", alt:["No setor terciário","No setor primário","No setor secundário","Divididos igualmente"], c:0, exp:"Como nas grandes economias desenvolvidas, comércio e serviços dominam: o terciário concentra a riqueza e os empregos."},
    {p:"Os Estados Unidos são o maior produtor de petróleo do mundo. Isso significa que têm as maiores reservas?", alt:["Não: as maiores reservas estão na Venezuela e na Arábia Saudita","Sim, produção e reserva são a mesma coisa","Sim, as reservas americanas são infinitas","Não, as maiores reservas são do Japão"], c:0, exp:"Produzir muito hoje não é ter mais guardado: os EUA extraem em ritmo acelerado, mas as maiores reservas conhecidas estão na Venezuela e na Arábia Saudita.", err:{1:"Produção é o que se extrai por ano; reserva é o que existe no subsolo — coisas bem diferentes."}},
    {p:"Além de maior produtor, que outra posição os EUA ocupam no mercado de petróleo?", alt:["Maior importador do mundo","Único exportador","Não participam do mercado","Maior refinador de açúcar"], c:0, exp:"O consumo interno é tão gigantesco que nem a maior produção do mundo dá conta — o país importa muito petróleo."},
    {p:"Quem completa o pódio dos maiores produtores de petróleo, junto com os EUA?", alt:["Arábia Saudita e Rússia","Brasil e Argentina","França e Alemanha","Japão e Coreia do Sul"], c:0, exp:"EUA em 1º, seguidos de Arábia Saudita (Oriente Médio) e Rússia."},
    {p:"Como é composta a matriz elétrica dos Estados Unidos?", alt:["Quase 60% vem de combustíveis fósseis, com destaque para o gás natural","100% de energia solar","Quase toda de usinas nucleares","Apenas de hidrelétricas"], c:0, exp:"Apesar do avanço das renováveis, os fósseis ainda dominam a geração elétrica americana — o gás natural na frente."},
    {p:"Quais são os principais parceiros comerciais dos EUA no setor de minérios?", alt:["Canadá e México, seguidos de China, Japão e Alemanha","Somente a Austrália","Bolívia e Paraguai","Egito e Marrocos"], c:0, exp:"Os vizinhos de fronteira lideram o comércio de minérios, com os gigantes asiáticos e a Alemanha na sequência."},
    {p:"O que é o Manufacturing Belt?", alt:["A região industrial tradicional dos EUA, no Nordeste e nos Grandes Lagos","Uma marca de cinto","A região agrícola do sul","Uma cadeia de montanhas"], c:0, exp:"Chicago, Detroit, Nova York, Filadélfia: ali nasceu e se concentrou a indústria pesada americana."},
    {p:"Para onde as indústrias do Manufacturing Belt se deslocaram?", alt:["Para o sul e o oeste do país","Para o Canadá","Para o Alasca","Não saíram do lugar"], c:0, exp:"O deslocamento para o sul e o oeste redesenhou o mapa industrial americano no fim do século XX."},
    {p:"O que é o Cinturão do Sol (Sun Belt)?", alt:["A área do sul e do oeste que atraiu indústrias de alta tecnologia no pós-Segunda Guerra","Uma praia famosa da Califórnia","O deserto sem nenhuma indústria","Uma linha imaginária como o Equador"], c:0, exp:"Com estímulos do governo e petróleo por perto, o Sun Belt concentrou informática, telecomunicações, eletrônica, aeroespacial e química fina."},
    {p:"Quais setores de alta tecnologia se destacam no Cinturão do Sol?", alt:["Informática, telecomunicações, eletrônica, aeroespacial e química fina","Apenas fábricas de brinquedos","Somente pesca","Artesanato em madeira"], c:0, exp:"É a indústria do futuro que se instalou no sul e no oeste — do chip ao foguete."},
    {p:"Por que a paisagem natural dos EUA mudou tanto nos últimos dois séculos?", alt:["Pelo aumento da produção mineral, agropecuária e industrial, pela urbanização e pela expansão de transportes e comunicações","Por causa de terremotos apenas","Porque a população diminuiu","Não mudou nada"], c:0, exp:"O motor econômico transformou o território: minas, fazendas, fábricas, cidades e redes de transporte redesenharam a paisagem."},
    {p:"Na agropecuária, os Estados Unidos:", alt:["Estão entre os maiores produtores mundiais de gêneros como trigo, algodão e tomates","Não produzem alimentos","Importam toda a comida que consomem","Só produzem café"], c:0, exp:"Além de potência industrial e de serviços, o país é um gigante agrícola — tecnologia no campo em escala continental."}
  ]}
]});
