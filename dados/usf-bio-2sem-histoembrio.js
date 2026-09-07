QUIZ.registrar({
  id:"usf-bio-2sem-histoembrio", ano:"2º semestre", materia:"Histologia e Embriologia", emoji:"🔬",
  escola:"USF — Biomedicina",
  bimestre:"2026 · 2º semestre", tema:"Tecidos epitelial, conjuntivo, cartilaginoso e ósseo, e desenvolvimento embrionário",
  qtdAquecimento:8, qtdTeste:12,
  rodadas:[

    { id:"r1", emoji:"🧱", nome:"Rodada 1 — Tecido epitelial",
      desc:"Funções, origem embrionária, junções celulares e glândulas.",
      resumo:[
        "Funções do tecido epitelial: proteção física e química, proteção contra desidratação, absorção, percepção sensorial e secreção.",
        "Tipos: epitélio de revestimento, epitélio glandular e neuroepitélio (captação de estímulos).",
        "Origem embrionária tripla — ectoderma (epiderme, unhas, pelos, glândulas mamárias, hipófise), mesoderma (membranas serosas pericárdica, pleural e peritoneal, revestimento de rins, ovários, testículos e ductos genitais) e endoderma (tratos gastrintestinal e respiratório, bexiga, parte da uretra, cavidade timpânica, tireoide, paratireoide, timo, fígado e pâncreas).",
        "Características: células poliédricas firmemente unidas, pouca substância extracelular, ausência de vasos sanguíneos, polaridade celular e renovação constante (intestino em 5 a 7 dias; pâncreas em 50 dias).",
        "Superfície apical apresenta cílios e microvilosidades. Proteínas de junção: ocludina, caderina, desmogleína e desmocolina, conexina e integrina. A membrana basal contém colágeno.",
        "Glândulas se originam da proliferação de células epiteliais que penetram o tecido conjuntivo subjacente. Exócrinas mantêm o ducto e liberam na superfície de origem; endócrinas perdem o ducto e liberam nos vasos sanguíneos e linfáticos.",
        "Glândulas endócrinas cordonais não armazenam secreção; as foliculares armazenam antes de liberar na corrente sanguínea.",
        "Mecanismos de secreção exócrina: merócrina (exocitose, a mais comum), holócrina (desintegração da célula secretora, como nas glândulas sebáceas) e apócrina (perda de parte do citoplasma, como nas glândulas mamárias, que secretam gotículas de lipídios no leite)."
      ],
      questoes:[
        {p:"Por que o tecido epitelial não possui vasos sanguíneos?",
         alt:["É uma característica do tecido: ele é avascular e se nutre por difusão a partir do conjuntivo subjacente","Porque suas células não precisam de nutrientes","Porque os vasos ficam na superfície apical","Porque a renovação celular é rápida demais para permitir vascularização"],
         c:0, exp:"A avascularidade é uma das características definidoras do epitélio, junto com as células poliédricas firmemente unidas, a pouca substância extracelular, a polaridade e a renovação constante. A nutrição chega por difusão através da membrana basal."},

        {p:"Qual glândula tem origem no ectoderma?",
         alt:["Glândula mamária","Glândula tireoide","Pâncreas","Fígado"],
         c:0, exp:"Do ectoderma derivam a epiderme e seus apêndices (unhas e pelos), o tecido epitelial das glândulas mamárias e o da hipófise. Tireoide, paratireoide, timo, fígado e pâncreas vêm do endoderma.",
         err:{1:"A tireoide é de origem endodérmica.",2:"O pâncreas também vem do endoderma.",3:"O fígado é endodérmico."}},

        {p:"As membranas serosas das cavidades pericárdica, pleural e peritoneal derivam de qual folheto embrionário?",
         alt:["Mesoderma","Ectoderma","Endoderma","Neuroectoderma"],
         c:0, exp:"Do mesoderma vêm as membranas serosas dessas três cavidades e também o revestimento dos rins, ovários, testículos e ductos genitais.",
         err:{1:"Do ectoderma vêm epiderme, anexos, mamárias e hipófise.",2:"Do endoderma vêm os revestimentos dos tratos digestório e respiratório."}},

        {p:"Qual é o tempo aproximado de renovação das células do epitélio intestinal?",
         alt:["5 a 7 dias","50 dias","6 meses","24 horas"],
         c:0, exp:"O contraste com o pâncreas, que leva cerca de 50 dias, ilustra como a taxa de renovação varia conforme a agressão a que o epitélio está exposto.",
         err:{1:"50 dias é o tempo citado para as células do pâncreas."}},

        {p:"Qual é a principal diferença entre uma glândula exócrina e uma endócrina?",
         alt:["A exócrina mantém o ducto e libera na superfície de origem; a endócrina perde o ducto e libera nos vasos","A exócrina é unicelular e a endócrina é sempre multicelular","A exócrina vem do ectoderma e a endócrina do endoderma","A exócrina armazena secreção e a endócrina nunca armazena"],
         c:0, exp:"Ambas nascem da proliferação de células epiteliais que penetram o tecido conjuntivo. Na formação da endócrina as células do ducto desaparecem, e a porção secretora passa a liberar seus produtos nos vasos sanguíneos e linfáticos. As exócrinas atuam em digestão, termorregulação, nutrição, proteção e lubrificação; as endócrinas, na homeostase.",
         err:{3:"O armazenamento não separa os dois grupos: entre as endócrinas, as foliculares armazenam a secreção e as cordonais não."}},

        {p:"Nas glândulas sebáceas dos folículos pilosos, a célula secretora se desintegra ao liberar seu produto. Esse mecanismo é a secreção:",
         alt:["Holócrina","Merócrina","Apócrina","Parácrina"],
         c:0, exp:"A holócrina destrói a própria célula, e as glândulas sebáceas são o melhor exemplo. A merócrina, mais comum, é a exocitose do conteúdo de vesículas na membrana apical. A apócrina se observa nas glândulas mamárias, que secretam gotículas de lipídios no leite.",
         err:{1:"A merócrina preserva a célula, liberando o conteúdo por exocitose.",2:"Na apócrina a célula perde parte do citoplasma, mas não se desintegra.",3:"Parácrino é um mecanismo de sinalização, não de secreção glandular."}},

        {p:"Qual proteína está associada às junções de oclusão entre células epiteliais?",
         alt:["Ocludina","Caderina","Conexina","Integrina"],
         c:0, exp:"Cada tipo de junção tem sua proteína característica: ocludina nas de oclusão, caderina nas de adesão, desmogleína e desmocolina nos desmossomos, conexina nas junções comunicantes e integrina na ligação com a membrana basal.",
         err:{1:"A caderina atua nas junções de adesão.",2:"A conexina forma os canais das junções comunicantes.",3:"A integrina ancora a célula à membrana basal."}},

        {p:"Qual estrutura da superfície apical do epitélio tem função de aumentar a área de absorção?",
         alt:["Microvilosidades","Membrana basal","Desmossomos","Integrinas"],
         c:0, exp:"A superfície apical pode apresentar cílios, ligados ao movimento de fluidos e partículas, e microvilosidades, que ampliam a área disponível para absorção — coerente com a função absortiva listada para o tecido.",
         err:{1:"A membrana basal fica na face oposta, a basal, e faz a ancoragem ao conjuntivo."}},

        {p:"O neuroepitélio tem qual função específica?",
         alt:["Captação de estímulos","Secreção de hormônios na corrente sanguínea","Proteção contra desidratação","Produção de matriz extracelular"],
         c:0, exp:"Os três tipos de epitélio são o de revestimento, o glandular e o neuroepitélio, este especializado na captação de estímulos — o que corresponde à função de percepção sensorial listada para o tecido."},

        {p:"O que significa dizer que as células epiteliais apresentam polaridade?",
         alt:["Suas superfícies apical e basal têm estruturas e funções distintas","Elas possuem carga elétrica de repouso invertida","Elas se dividem sempre no mesmo eixo","Elas migram sempre em direção à membrana basal"],
         c:0, exp:"A polaridade é o que permite ao epitélio absorver de um lado e secretar de outro. A superfície apical, voltada para o lúmen, apresenta cílios e microvilosidades; a basal se apoia sobre a membrana basal, ligada por integrinas."},

        {p:"O que caracteriza uma glândula endócrina folicular em comparação com uma cordonal?",
         alt:["A folicular armazena a secreção antes de liberá-la na corrente sanguínea","A folicular mantém o ducto de origem","A cordonal libera sua secreção na superfície do epitélio","A cordonal é sempre unicelular"],
         c:0, exp:"Nas glândulas endócrinas cordonais os cordões de células não armazenam secreção, liberando-a diretamente. Nas foliculares, a secreção fica armazenada antes de ser lançada nos capilares.",
         err:{1:"Nenhuma glândula endócrina mantém ducto: essa é a característica das exócrinas."}},

        {p:"A membrana basal, que separa o epitélio do tecido conjuntivo subjacente, contém principalmente:",
         alt:["Colágeno","Queratina","Elastina pura","Hidroxiapatita"],
         c:0, exp:"O colágeno da membrana basal, junto com as integrinas da superfície basal das células, faz a ancoragem do epitélio ao conjuntivo — a via pela qual também chegam os nutrientes, já que o tecido é avascular.",
         err:{3:"Hidroxiapatita é o cristal mineral da matriz óssea."}}
      ]},

    { id:"r2", emoji:"🕸️", nome:"Rodada 2 — Tecido conjuntivo",
      desc:"Células fixas e transitórias, matriz extracelular, fibras e classificação.",
      resumo:[
        "Origem no mesoderma: células mesenquimais migram pelo corpo e formam o conjuntivo propriamente dito e os conjuntivos especiais.",
        "Características: diversos tipos de células fixas e transitórias, grande quantidade de material extracelular (fibras e substância amorfa) e vascularização — exceto a cartilagem.",
        "Funções: sustentação estrutural, meio de trocas, defesa e proteção, e armazenamento de gordura.",
        "Fibroblastos sintetizam colágeno, elastina, proteoglicanas e glicoproteínas estruturais; são alongados, de núcleo estrelado, com REG e Golgi desenvolvidos. Fibrócitos são a forma envelhecida.",
        "Macrófagos: núcleo grande em forma de rim, forma amebóide, fagocitam agentes estranhos, apresentam antígenos e se originam dos monócitos do sangue. Fazem parte do sistema mononuclear fagocitário.",
        "Plasmócitos: núcleo excêntrico, REG desenvolvido, originados dos linfócitos B, produzem anticorpos. Mastócitos: elípticos e volumosos, núcleo central, origem na medula óssea, produzem grânulos de heparina e histamina e atuam em reações alérgicas.",
        "Substância fundamental amorfa: gel hidratado, veículo de passagem de células e moléculas e barreira a micro-organismos. Contém proteoglicanas (glicosaminoglicanas mais proteínas), glicoproteínas adesivas (fibronectina e laminina) e líquido tissular.",
        "Fibras: colágenas (inelásticas, grande resistência à tração), elásticas (elastina, esticam até 150% do comprimento em repouso) e reticulares (trama de colágeno tipo III).",
        "Classificação: embrionário (mesenquimal e mucoso), propriamente dito (frouxo e denso — este não modelado ou modelado, colágeno ou elástico) e especializado (reticular, adiposo, cartilaginoso, ósseo e sanguíneo).",
        "Tecido adiposo: depósito de energia em triglicerídios, contorno corporal e isolamento térmico. Comum, amarelo ou unilocular; e pardo, multilocular."
      ],
      questoes:[
        {p:"Qual célula do tecido conjuntivo produz anticorpos e apresenta núcleo excêntrico com REG desenvolvido?",
         alt:["Plasmócito","Macrófago","Mastócito","Fibroblasto"],
         c:0, exp:"O plasmócito se origina dos linfócitos B. Seu retículo endoplasmático rugoso muito desenvolvido é consequência direta da função: produzir grandes quantidades de anticorpos.",
         err:{1:"Macrófagos fagocitam e apresentam antígenos, mas não produzem anticorpos.",2:"Mastócitos produzem heparina e histamina.",3:"Fibroblastos produzem os componentes da matriz extracelular."}},

        {p:"Os macrófagos do tecido conjuntivo se originam de qual célula sanguínea?",
         alt:["Monócito","Linfócito B","Linfócito T","Neutrófilo"],
         c:0, exp:"O monócito circula no sangue e, ao migrar para o tecido conjuntivo, diferencia-se em macrófago, integrando o sistema mononuclear fagocitário. Seu núcleo grande em forma de rim e a forma amebóide são marcas reconhecíveis na lâmina.",
         err:{1:"Do linfócito B se origina o plasmócito."}},

        {p:"Quais substâncias os mastócitos armazenam em seus grânulos?",
         alt:["Heparina e histamina","Colágeno e elastina","Fibronectina e laminina","Anticorpos e antígenos"],
         c:0, exp:"A liberação desses grânulos é o que liga o mastócito às reações alérgicas. A célula é elíptica e volumosa, com núcleo central, e tem origem na medula óssea.",
         err:{1:"Colágeno e elastina são produtos do fibroblasto.",2:"Fibronectina e laminina são glicoproteínas adesivas da substância fundamental."}},

        {p:"Qual é a diferença entre fibroblasto e fibrócito?",
         alt:["O fibrócito é a forma envelhecida e menos ativa do fibroblasto","O fibrócito produz colágeno e o fibroblasto o degrada","O fibroblasto pertence ao conjuntivo e o fibrócito ao epitelial","O fibrócito é multinucleado e o fibroblasto uninucleado"],
         c:0, exp:"O fibroblasto é a célula jovem e ativa, com REG e Golgi desenvolvidos, sintetizando colágeno, elastina, proteoglicanas e glicoproteínas estruturais. O fibrócito é a versão envelhecida, com atividade sintética reduzida."},

        {p:"As fibras reticulares são formadas por qual tipo de colágeno?",
         alt:["Tipo III","Tipo I","Tipo II","Tipo IV"],
         c:0, exp:"As fibras reticulares formam uma trama delicada de colágeno tipo III. Vale contrastar com as colágenas, que são inelásticas e de grande resistência à tração, e as elásticas, de elastina, capazes de esticar até 150% do comprimento em repouso.",
         err:{1:"O colágeno tipo I forma as fibras colágenas propriamente ditas e a cartilagem fibrosa.",2:"O tipo II é o da cartilagem hialina."}},

        {p:"Até quanto uma fibra elástica pode ser esticada em relação ao seu comprimento em repouso?",
         alt:["150%","50%","10%","400%"],
         c:0, exp:"A elastina confere essa capacidade de deformação reversível, em contraste direto com as fibras colágenas, que são inelásticas e resistem à tração sem alongar."},

        {p:"Quais são as glicoproteínas adesivas da substância fundamental amorfa citadas na aula?",
         alt:["Fibronectina e laminina","Ocludina e caderina","Heparina e histamina","Condronectina e osteocalcina"],
         c:0, exp:"A substância fundamental amorfa é um gel hidratado formado por proteoglicanas — glicosaminoglicanas ligadas a proteínas —, glicoproteínas adesivas como fibronectina e laminina, e líquido tissular. A água de solvatação dá turgidez à matriz.",
         err:{1:"Ocludina e caderina são proteínas de junção do epitélio."}},

        {p:"Qual das funções abaixo NÃO é atribuída à substância fundamental amorfa?",
         alt:["Conduzir impulsos nervosos entre as células do conjuntivo","Servir de veículo para a passagem de células e moléculas","Atuar como barreira a micro-organismos","Conferir compressibilidade ao tecido"],
         c:0, exp:"A substância fundamental é um gel que preenche os espaços entre células e fibras. Ela permite o trânsito de células e moléculas, dificulta a progressão de micro-organismos e, pelas proteoglicanas hidratadas, confere compressibilidade e turgidez."},

        {p:"Como se classifica o tecido conjuntivo encontrado na artéria do cordão umbilical?",
         alt:["Tecido conjuntivo mucoso, um conjuntivo embrionário","Tecido conjuntivo denso modelado elástico","Tecido reticular","Tecido adiposo pardo"],
         c:0, exp:"O conjuntivo embrionário se divide em mesenquimal e mucoso. O mucoso é o do cordão umbilical, conhecido também como geleia de Wharton."},

        {p:"Qual é a diferença entre tecido adiposo comum e pardo?",
         alt:["O comum é amarelo e unilocular; o pardo é multilocular","O comum é multilocular; o pardo é unilocular","O comum armazena triglicerídios; o pardo armazena glicogênio","O comum existe só no feto; o pardo só no adulto"],
         c:0, exp:"Unilocular significa uma única grande gota de gordura por célula, empurrando o núcleo para a periferia; multilocular significa várias gotículas menores. O tecido adiposo em geral funciona como depósito de energia em triglicerídios, define o contorno do corpo e faz isolamento térmico.",
         err:{1:"Os termos estão trocados: o comum, amarelo, é o unilocular."}},

        {p:"Qual tecido conjuntivo especializado NÃO é vascularizado?",
         alt:["Cartilaginoso","Ósseo","Adiposo","Sanguíneo"],
         c:0, exp:"A vascularização é característica do conjuntivo, com a cartilagem como exceção explícita — sua nutrição depende do pericôndrio e da difusão pela água de solvatação da matriz.",
         err:{1:"O tecido ósseo é ricamente vascularizado, com canais de Havers e de Volkmann."}},

        {p:"Como se subdivide o tecido conjuntivo denso modelado?",
         alt:["Em colágeno e elástico","Em frouxo e denso","Em mesenquimal e mucoso","Em unilocular e multilocular"],
         c:0, exp:"Dentro do conjuntivo propriamente dito estão o frouxo e o denso; o denso se divide em não modelado e modelado; e o modelado, por sua vez, em colágeno e elástico, conforme a fibra predominante e sua orientação."}
      ]},

    { id:"r3", emoji:"🦻", nome:"Rodada 3 — Tecido cartilaginoso",
      desc:"Condrócitos, matriz, pericôndrio, os três tipos de cartilagem e a degeneração.",
      resumo:[
        "Tecido conjuntivo especializado de consistência firme, sem vasos sanguíneos, linfáticos e nervos — quem os possui é o pericôndrio.",
        "Composição: condrócitos e abundante matriz (colágenos, elastina, água e macromoléculas). A firmeza vem do colágeno somado a glicosaminoglicanos ligados à água.",
        "Funções: consistência rígida, revestir articulações, absorver choques e participar da formação dos ossos longos.",
        "Condroblastos produzem a matriz extracelular; condrócitos são as células já situadas dentro das lacunas, no interior da matriz, e podem formar grupos isógenos ou isogênicos.",
        "Matriz da cartilagem hialina: colágeno tipo II, proteoglicanas, glicoproteínas adesivas (condronectina) e água.",
        "Pericôndrio: presente em todas as cartilagens exceto as articulares. É fonte de condrócitos e faz a nutrição por difusão através da água de solvatação — o que limita a espessura possível da cartilagem. Divide-se em pericôndrio fibroso e condrogênico.",
        "Tipos: hialina (colágeno tipo II), elástica (fibras elásticas, colágeno tipo II, cor amarela, com pericôndrio, no pavilhão auditivo, tuba auditiva, epiglote e cartilagem cuneiforme da laringe) e fibrosa (colágeno tipo I, sem pericôndrio, nos discos intervertebrais, com condrócitos em fileiras).",
        "Processos degenerativos: degeneração (condrócitos hipertrofiam e morrem, acelerada com a idade), calcificação da matriz por deposição de hidroxiapatita e regeneração difícil no adulto."
      ],
      questoes:[
        {p:"Por que a cartilagem não possui vasos sanguíneos e como ela se nutre?",
         alt:["A nutrição vem por difusão a partir do pericôndrio, através da água de solvatação da matriz","Ela possui capilares finos demais para serem vistos ao microscópio óptico","Ela é nutrida diretamente pelo osso subjacente","Os condrócitos produzem seus próprios nutrientes por fotossíntese"],
         c:0, exp:"O pericôndrio é quem possui vasos sanguíneos e nervos. A difusão através da matriz hidratada é justamente o que limita a espessura possível de uma cartilagem: além de certa distância, os condrócitos centrais não seriam nutridos."},

        {p:"Qual é a diferença entre condroblasto e condrócito?",
         alt:["O condroblasto produz a matriz extracelular; o condrócito já está aprisionado nas lacunas dentro dela","O condroblasto reabsorve a matriz; o condrócito a produz","O condroblasto é multinucleado; o condrócito é uninucleado","O condroblasto pertence ao pericôndrio fibroso; o condrócito ao condrogênico"],
         c:0, exp:"O condroblasto sintetiza a matriz e acaba envolvido pelo próprio produto, passando a ser chamado condrócito. Quando um condrócito se divide dentro da lacuna, forma-se um grupo isógeno ou isogênico."},

        {p:"Qual tipo de colágeno predomina na matriz da cartilagem hialina?",
         alt:["Tipo II","Tipo I","Tipo III","Tipo IV"],
         c:0, exp:"A matriz da hialina reúne colágeno tipo II, proteoglicanas, a glicoproteína adesiva condronectina e água. Na fibrosa o colágeno predominante é o tipo I.",
         err:{1:"O colágeno tipo I é o da cartilagem fibrosa e do tecido ósseo.",2:"O tipo III forma as fibras reticulares do conjuntivo."}},

        {p:"Em quais cartilagens o pericôndrio está ausente?",
         alt:["Nas cartilagens articulares e na cartilagem fibrosa","Apenas na cartilagem elástica","Em todas as cartilagens hialinas","Somente nas cartilagens da laringe"],
         c:0, exp:"O pericôndrio está presente em todas as cartilagens exceto as articulares. A cartilagem fibrosa também não o possui, estando sempre associada ao tecido conjuntivo denso.",
         err:{1:"A cartilagem elástica possui pericôndrio."}},

        {p:"Onde é encontrada a cartilagem elástica?",
         alt:["Pavilhão auditivo externo, tuba auditiva, epiglote e cartilagem cuneiforme da laringe","Discos intervertebrais e sínfise púbica","Superfícies articulares dos ossos longos","Apenas no septo nasal"],
         c:0, exp:"A cartilagem elástica tem cor amarela, possui pericôndrio, contém colágeno tipo II e grande quantidade de fibras elásticas, e aparece frequentemente em conjunto com a hialina. Está sujeita a processos degenerativos.",
         err:{1:"Discos intervertebrais são de cartilagem fibrosa."}},

        {p:"Quais características tornam a cartilagem fibrosa intermediária entre o conjuntivo denso e a cartilagem hialina?",
         alt:["Matriz rica em colágeno tipo I, ausência de pericôndrio, condrócitos em fileiras e substância amorfa escassa","Abundância de fibras elásticas e cor amarelada","Presença de pericôndrio condrogênico espesso","Matriz totalmente calcificada por hidroxiapatita"],
         c:0, exp:"Na fibrocartilagem os feixes de colágeno se orientam paralelamente à força de tração, e a substância fundamental amorfa é escassa, limitada às lacunas. É encontrada nos discos intervertebrais e está sempre associada ao tecido conjuntivo denso."},

        {p:"O que é um grupo isógeno ou isogênico na cartilagem?",
         alt:["Um conjunto de condrócitos originados da divisão de uma mesma célula, agrupados numa região da matriz","Um agrupamento de condroblastos no pericôndrio","Uma região de matriz calcificada","Um feixe de fibras colágenas orientadas na mesma direção"],
         c:0, exp:"Como o condrócito fica aprisionado na lacuna, suas células-filhas permanecem próximas umas das outras — daí o agrupamento característico visto na lâmina, que a aula distingue da matriz territorial e da interterritorial."},

        {p:"Qual sal mineral se deposita na calcificação da matriz cartilaginosa?",
         alt:["Hidroxiapatita, de fórmula Ca10(PO4)6(OH)2","Carbonato de sódio","Cloreto de potássio","Sulfato de magnésio"],
         c:0, exp:"A deposição de cristais de hidroxiapatita resulta em aumento de volume e morte celular. É o mesmo cristal que compõe o componente inorgânico da matriz óssea."},

        {p:"O que ocorre na degeneração da cartilagem, processo acelerado com a idade?",
         alt:["Os condrócitos hipertrofiam e morrem, com diminuição da motilidade e dor articular","O pericôndrio prolifera e recobre a superfície articular","As fibras elásticas se convertem em colágeno tipo III","A matriz se liquefaz e é absorvida pelos vasos sanguíneos"],
         c:0, exp:"Além da degeneração e da calcificação, a aula aponta um terceiro problema: cartilagens lesadas se regeneram com dificuldade no adulto, e lesões extensas acabam formando tecido cartilaginoso denso."},

        {p:"Como se subdivide o pericôndrio?",
         alt:["Em pericôndrio fibroso e pericôndrio condrogênico","Em pericôndrio externo e interno","Em pericôndrio territorial e interterritorial","Em pericôndrio hialino e elástico"],
         c:0, exp:"A camada condrogênica é a fonte de novos condrócitos — o que explica por que a ausência de pericôndrio nas cartilagens articulares e na fibrocartilagem torna a regeneração desses tecidos ainda mais difícil.",
         err:{2:"Matriz territorial e interterritorial são regiões da matriz, e não do pericôndrio."}},

        {p:"O que dá firmeza à matriz cartilaginosa?",
         alt:["A associação entre colágeno e glicosaminoglicanos ligados à água","A deposição de hidroxiapatita em condições normais","A densidade de condrócitos por milímetro cúbico","A presença de fibras reticulares de colágeno tipo III"],
         c:0, exp:"O colágeno resiste à tração e as glicosaminoglicanas hidratadas resistem à compressão. A combinação dá à cartilagem a consistência firme mas deformável que permite absorver choques.",
         err:{1:"A calcificação por hidroxiapatita é um processo degenerativo na cartilagem, não uma condição normal."}},

        {p:"Qual destas NÃO é uma função do tecido cartilaginoso?",
         alt:["Produzir células sanguíneas","Revestir articulações","Absorver choques","Participar na formação de ossos longos"],
         c:0, exp:"A hematopoiese ocorre na medula óssea, alojada no tecido ósseo. A cartilagem tem consistência rígida, reveste articulações, absorve choques e serve de molde na formação dos ossos longos, pela ossificação endocondral."}
      ]},

    { id:"r4", emoji:"🦴", nome:"Rodada 4 — Tecido ósseo",
      desc:"Matriz, as quatro células, ossificação e a arquitetura do osso compacto.",
      resumo:[
        "Um dos tecidos mais duros do corpo, constituinte principal do esqueleto. Suas células sintetizam matriz calcificada na qual ficam presas.",
        "Funções: sustentação e proteção de órgãos vitais (caixa torácica, caixa craniana, canal raquidiano), órgão hematopoiético (aloja a medula óssea), alavanca para o movimento e reservatório de sais minerais — 99% do cálcio do corpo, além de fósforo, magnésio, sódio, bicarbonato e potássio.",
        "É um tecido dinâmico: modifica a forma em resposta a pressão e tração, num processo de remodelação.",
        "Matriz óssea — componente orgânico: colágeno tipo I, proteoglicanas e glicoproteínas de adesão. Componente inorgânico: cálcio, fósforo, bicarbonato, magnésio, sódio e potássio, na forma de hidroxiapatita, Ca10(PO4)6(OH)2.",
        "Quatro células: osteoprogenitoras (derivadas do mesênquima), osteoblastos (cuboides achatados, sintetizam o osteoide, matriz recém-formada ainda não calcificada), osteócitos (maduros, dentro das lacunas, fazem a manutenção da matriz) e osteoclastos (gigantes multinucleados, reabsorvem a matriz, formando as lacunas de Howship com sua zona pregueada).",
        "Ossificação intramembranosa: diferenciação direta de células mesenquimais em osteoblastos, a partir da 8ª semana de gestação; forma trabéculas, e os osteoclastos remodelam. O osso recém-formado é primário; após remodelação, secundário.",
        "Ossificação endocondral: células mesenquimais proliferam, diferenciam-se em condroblastos e produzem um molde de cartilagem hialina, depois substituído por osso.",
        "Osso compacto: mais denso, com espaços menores e organização lamelar desenvolvida. Osso esponjoso: interior da epífise, grandes espaços medulares com trabéculas anastomosadas.",
        "Arquitetura do compacto: canal de Havers com lamelas concêntricas formando o ósteon, contendo vasos, nervos e tecido conjuntivo; canais de Volkmann, transversais e sem lamelas concêntricas; sistemas lamelares circunferenciais externo e interno.",
        "Periósteo: membrana externa de tecido conjuntivo, com colágeno, fibras de Sharpey, fibroblastos e células osteogênicas — função de nutrição e recuperação. Endósteo reveste as cavidades do osso esponjoso, o canal medular e os canais de Havers e de Volkmann.",
        "Zonas do disco de crescimento: repouso, proliferação, hipertrófica, calcificação e ossificação."
      ],
      questoes:[
        {p:"Qual célula óssea é gigante, multinucleada e responsável pela reabsorção da matriz?",
         alt:["Osteoclasto","Osteoblasto","Osteócito","Célula osteoprogenitora"],
         c:0, exp:"O osteoclasto escava a matriz e deixa depressões características chamadas lacunas de Howship. Sua superfície de contato com o osso é a zona pregueada, que amplia a área de reabsorção.",
         err:{1:"O osteoblasto constrói, sintetizando o osteoide.",2:"O osteócito é a célula madura aprisionada na lacuna, responsável pela manutenção.",3:"As osteoprogenitoras derivam do mesênquima e originam as demais."}},

        {p:"O que é o osteoide?",
         alt:["A matriz óssea recém-formada, ainda não calcificada","A cavidade onde fica o osteócito","A membrana externa do osso","O cristal mineral da matriz óssea"],
         c:0, exp:"O osteoblasto, de forma cuboide achatada, sintetiza os componentes orgânicos da matriz. Esse material recém-depositado ainda sem mineral é o osteoide; a calcificação vem depois, com a deposição de hidroxiapatita.",
         err:{1:"A cavidade do osteócito é a lacuna.",2:"A membrana externa do osso é o periósteo."}},

        {p:"Qual é a composição do componente orgânico da matriz óssea?",
         alt:["Colágeno tipo I, proteoglicanas e glicoproteínas de adesão","Colágeno tipo II e condronectina","Hidroxiapatita e fosfato de cálcio","Elastina e fibras reticulares"],
         c:0, exp:"O componente inorgânico é formado por cálcio, fósforo, bicarbonato, magnésio, sódio e potássio, cristalizados como hidroxiapatita — Ca10(PO4)6(OH)2. A combinação de colágeno flexível com mineral rígido é o que dá ao osso resistência sem fragilidade excessiva.",
         err:{1:"Colágeno tipo II e condronectina compõem a matriz da cartilagem hialina.",2:"Essa é a descrição do componente inorgânico."}},

        {p:"Que percentual do cálcio do corpo é armazenado no tecido ósseo?",
         alt:["99%","50%","25%","75%"],
         c:0, exp:"Praticamente todo o cálcio corporal está no esqueleto, que funciona como reservatório dinâmico — mobilizando ou depositando mineral conforme a necessidade. Fósforo, magnésio, sódio, bicarbonato e potássio também são estocados ali."},

        {p:"O que é o ósteon?",
         alt:["O conjunto do canal de Havers com suas lamelas concêntricas","O canal transversal que liga dois canais de Havers","A trabécula do osso esponjoso","A camada mais externa do osso compacto"],
         c:0, exp:"O ósteon, ou sistema de Havers, é a unidade estrutural do osso compacto: um canal central com vasos, nervos e tecido conjuntivo, cercado por lamelas concêntricas com osteócitos em suas lacunas.",
         err:{1:"O canal transversal é o de Volkmann, que não apresenta lamelas concêntricas."}},

        {p:"Qual é a diferença entre o canal de Havers e o canal de Volkmann?",
         alt:["O de Havers é longitudinal e cercado por lamelas concêntricas; o de Volkmann é transversal e não tem lamelas concêntricas","O de Havers contém medula óssea; o de Volkmann contém cartilagem","O de Havers existe só no osso esponjoso; o de Volkmann só no compacto","O de Havers é revestido por periósteo; o de Volkmann por endósteo"],
         c:0, exp:"Os dois formam a rede de canais que leva vasos e nervos ao interior do osso compacto. Ambos são revestidos por endósteo, assim como as cavidades do osso esponjoso e o canal medular."},

        {p:"Qual é a diferença fundamental entre ossificação intramembranosa e endocondral?",
         alt:["Na intramembranosa as células mesenquimais viram osteoblastos diretamente; na endocondral há antes um molde de cartilagem hialina","Na intramembranosa há molde de cartilagem; na endocondral não","A intramembranosa ocorre só no adulto; a endocondral só no feto","A intramembranosa forma osso esponjoso; a endocondral forma apenas osso compacto"],
         c:0, exp:"A intramembranosa começa na 8ª semana de gestação, com a diferenciação direta de células mesenquimais em osteoblastos que sintetizam trabéculas. A endocondral parte da proliferação e agregação de células mesenquimais que se diferenciam em condroblastos, produzem um molde de cartilagem hialina e só então o osso o substitui — é assim que se formam a maioria dos ossos longos.",
         err:{1:"Os processos estão trocados."}},

        {p:"O que caracteriza o osso primário em relação ao secundário?",
         alt:["É o osso recém-formado, antes da remodelação pelos osteoclastos","É o osso do feto que nunca é substituído","É o osso compacto, em oposição ao esponjoso","É o osso formado exclusivamente por ossificação endocondral"],
         c:0, exp:"Depois que os osteoblastos sintetizam a matriz e formam trabéculas, os osteoclastos remodelam o tecido. O resultado dessa remodelação é o osso secundário, de organização lamelar mais madura."},

        {p:"O que é a lacuna de Howship?",
         alt:["A depressão escavada na matriz pela ação do osteoclasto","A cavidade onde reside o osteócito","O espaço entre duas lamelas concêntricas","O canal por onde passam vasos no osso compacto"],
         c:0, exp:"É a marca deixada pelo osteoclasto durante a reabsorção. Não confundir com a lacuna do osteócito, que é o pequeno espaço onde a célula madura fica aprisionada na matriz que ela mesma ajudou a formar.",
         err:{1:"Essa é a lacuna do osteócito, um conceito diferente apesar do nome semelhante."}},

        {p:"Qual estrutura reveste o canal medular, as cavidades do osso esponjoso e os canais de Havers e de Volkmann?",
         alt:["Endósteo","Periósteo","Pericôndrio","Membrana basal"],
         c:0, exp:"O endósteo faz o revestimento interno. O periósteo é a membrana externa, de tecido conjuntivo com colágeno, fibras de Sharpey, fibroblastos e células osteogênicas, com função de nutrição e recuperação.",
         err:{1:"O periósteo reveste o osso por fora.",2:"O pericôndrio reveste a cartilagem, não o osso."}},

        {p:"O que diferencia macroscopicamente o tecido ósseo compacto do esponjoso?",
         alt:["O compacto é mais denso, com espaços menores e organização lamelar mais desenvolvida","O compacto tem grandes espaços medulares com trabéculas anastomosadas","O compacto fica no interior da epífise e o esponjoso na superfície externa","O compacto não contém osteócitos"],
         c:0, exp:"O esponjoso ocupa o interior da epífise, com grandes espaços medulares e finas placas anastomosadas — as trabéculas — constituindo várias lamelas. O compacto forma o osso denso da superfície externa.",
         err:{1:"Essa é a descrição do osso esponjoso.",2:"As posições estão invertidas."}},

        {p:"Quais são as zonas do disco de crescimento, da epífise em direção à diáfise?",
         alt:["Repouso, proliferação, hipertrófica, calcificação e ossificação","Ossificação, calcificação, hipertrófica, proliferação e repouso","Proliferação, repouso, calcificação, ossificação e hipertrófica","Repouso, calcificação, proliferação, ossificação e hipertrófica"],
         c:0, exp:"A sequência acompanha o destino dos condrócitos: eles descansam, multiplicam-se, hipertrofiam, a matriz ao redor calcifica e finalmente o tecido é substituído por osso — o mecanismo que faz o osso longo crescer em comprimento."}
      ]},

    { id:"r5", emoji:"🧬", nome:"Rodada 5 — Embriologia: gametas e fertilização",
      desc:"Células-tronco, gametogênese, capacitação, reação acrossômica e bloqueio à polispermia.",
      resumo:[
        "Embriologia estuda o desenvolvimento desde a fertilização do ovócito até a organogênese. Período embrionário: 1ª à 8ª semana. Período fetal: 9ª semana até o nascimento.",
        "Células-tronco: totipotentes (qualquer tipo celular, inclusive tecidos extraembrionários como a placenta), pluripotentes (só os folhetos embrionários), multipotentes (alguns tipos celulares, como as da medula óssea) e unipotentes (um único tipo).",
        "Gametogênese reduz o número de cromossomos à metade por meiose. Espermatogênese no homem, ovogênese na mulher.",
        "Comparação entre os gametas: o feminino é bem maior; o ovócito sempre libera um cromossomo X e o espermatozoide pode fornecer X ou Y, de modo que o sexo cromossômico é definido pelo pai; o ovócito é imóvel e o espermatozoide móvel pelo flagelo; uma ovogônia produz um ovócito, enquanto uma espermatogônia produz quatro espermatozoides.",
        "Ovócito maduro: recoberto pela corona radiata (células foliculares) e pela zona pelúcida (glicoproteínas e glicosaminoglicanos), com citoplasma rico em grânulos vitelinos para nutrição na 1ª semana.",
        "Espermatozoide maduro: cabeça com núcleo haploide e acrossoma (organela com mais de 10 enzimas, entre elas hialuronidase e acrosina) e cauda com peça intermediária, principal e final.",
        "Capacitação, cerca de 7 horas: perda de cobertura de glicoproteínas e proteínas do líquido seminal, saída de colesterol, aumento da atividade respiratória e da motilidade, e desbloqueio das proteínas que se ligam à zona pelúcida.",
        "Reação acrossômica: ZP3 da zona pelúcida liga-se à β1,4-galactosiltransferase; influxo de Ca²⁺ funde a membrana externa do acrossomo com a plasmática; a hialuronidase digere o ácido hialurônico da corona radiata e a acrosina digere as glicoproteínas da zona pelúcida. A fusão envolve a fertilina do espermatozoide e a integrina do ovócito.",
        "Reação da zona (cortical): troca de Na⁺ por H⁺ eleva o pH; IP3 libera Ca²⁺ do retículo; a exocitose dos grânulos corticais libera enzimas que hidrolisam ZP3 e clivam ZP2 — bloqueio definitivo à polispermia. A onda de Ca²⁺ ativa a segunda meiose e libera o segundo corpúsculo polar.",
        "Ejaculação: 200 a 500 milhões de espermatozoides. O zigoto reúne 23 cromossomos da mãe e 23 do pai."
      ],
      questoes:[
        {p:"Qual tipo de célula-tronco pode originar tecidos extraembrionários como a placenta?",
         alt:["Totipotente","Pluripotente","Multipotente","Unipotente"],
         c:0, exp:"A totipotência é a única que inclui os anexos extraembrionários. A pluripotente já não os origina — gera apenas as células dos três folhetos: ectoderma, mesoderma e endoderma.",
         err:{1:"A pluripotente gera os folhetos embrionários, mas não a placenta.",2:"As multipotentes, como as da medula óssea, geram apenas alguns tipos celulares."}},

        {p:"Por que se diz que o sexo cromossômico do embrião é sempre definido pelo pai?",
         alt:["Porque o ovócito sempre libera um cromossomo X, enquanto o espermatozoide pode fornecer X ou Y","Porque o espermatozoide contribui com mais cromossomos que o ovócito","Porque o ovócito perde seus cromossomos sexuais na segunda meiose","Porque a determinação depende da velocidade do espermatozoide"],
         c:0, exp:"Como a mãe só pode contribuir com X, a combinação final — XX ou XY — depende de qual gameta paterno fertiliza o ovócito.",
         err:{1:"Cada gameta contribui com 23 cromossomos; o zigoto reúne 23 da mãe e 23 do pai."}},

        {p:"Na gametogênese, quantas células funcionais resultam de uma ovogônia e de uma espermatogônia, respectivamente?",
         alt:["Um ovócito e quatro espermatozoides","Quatro ovócitos e um espermatozoide","Dois de cada","Um de cada"],
         c:0, exp:"A assimetria tem sentido funcional: a divisão desigual concentra citoplasma e grânulos vitelinos num único ovócito, garantindo reserva nutritiva, enquanto os corpúsculos polares se perdem. O espermatozoide, que não precisa carregar reserva, é produzido em quatro."},

        {p:"Quais são as duas camadas que recobrem o ovócito maduro?",
         alt:["Corona radiata e zona pelúcida","Trofoblasto e embrioblasto","Epiblasto e hipoblasto","Sinciciotrofoblasto e citotrofoblasto"],
         c:0, exp:"A corona radiata é formada por camadas de células foliculares; a zona pelúcida é uma camada de glicoproteínas e glicosaminoglicanos. As duas são as barreiras que o espermatozoide precisa vencer.",
         err:{1:"Trofoblasto e embrioblasto são estruturas do blastocisto, já depois da fertilização."}},

        {p:"Que enzimas o acrossoma libera e sobre o que atuam?",
         alt:["Hialuronidase, que digere o ácido hialurônico da corona radiata, e acrosina, que digere as glicoproteínas da zona pelúcida","Lisozima, que rompe a parede celular, e transcriptase reversa","Fertilina e integrina, que promovem a fusão das membranas","Ocludina e caderina, que desfazem as junções celulares"],
         c:0, exp:"O acrossoma é uma organela com mais de dez tipos de enzimas. Depois da reação acrossômica, a hialuronidase abre caminho pela corona radiata e a acrosina digere a zona pelúcida.",
         err:{2:"Fertilina e integrina são proteínas de fusão das membranas, não enzimas digestivas."}},

        {p:"O que é a capacitação do espermatozoide?",
         alt:["Alterações de cerca de 7 horas que removem coberturas do líquido seminal, aumentam a motilidade e desbloqueiam as proteínas de ligação à zona pelúcida","A fusão do acrossomo com a membrana plasmática","A redução do número de cromossomos à metade","A ativação do metabolismo do zigoto após a fusão"],
         c:0, exp:"A capacitação ocorre no muco cervical e no fluido folicular. Envolve a perda de colesterol, de proteínas e carboidratos, e o aumento da atividade respiratória — condições sem as quais o espermatozoide não consegue realizar a reação acrossômica.",
         err:{1:"Essa é a reação acrossômica, que só acontece depois da capacitação.",2:"A redução cromossômica ocorre na meiose, durante a gametogênese."}},

        {p:"Qual proteína da zona pelúcida é o sítio de ligação que desencadeia a reação acrossômica?",
         alt:["ZP3","ZP1","Fertilina","Condronectina"],
         c:0, exp:"A ZP3 liga-se à β1,4-galactosiltransferase da membrana do espermatozoide. Isso gera influxo de Ca²⁺ e a fusão da membrana externa do acrossomo com a plasmática em vários pontos.",
         err:{2:"A fertilina é a proteína do espermatozoide que se liga à integrina do ovócito na etapa de fusão das membranas."}},

        {p:"Qual é o bloqueio definitivo à polispermia?",
         alt:["A reação cortical, com exocitose dos grânulos corticais que hidrolisam ZP3 e clivam ZP2","A capacitação do espermatozoide","O fechamento mecânico da corona radiata","A liberação do segundo corpúsculo polar"],
         c:0, exp:"A cascata começa com a troca de Na⁺ extracelular por H⁺ intracelular, elevando o pH. O IP3 liga-se ao retículo endoplasmático, libera Ca²⁺ e provoca a exocitose dos grânulos corticais, cujas enzimas modificam a zona pelúcida e impedem a entrada de outro espermatozoide.",
         err:{3:"A liberação do segundo corpúsculo polar é consequência da onda de Ca²⁺, mas não é o mecanismo de bloqueio."}},

        {p:"O que a onda de cálcio provocada pela entrada do espermatozoide desencadeia no ovócito?",
         alt:["A ativação da segunda meiose, que o transforma em óvulo e libera o segundo corpúsculo polar","A imediata primeira clivagem em dois blastômeros","A formação da blastocele","A implantação no endométrio"],
         c:0, exp:"O ovócito estava parado na segunda divisão meiótica. A entrada do espermatozoide é o gatilho que a completa. A onda de Ca²⁺ também ativa a NAD-quinase e o transporte de K⁺ e aminoácidos, retomando a síntese de DNA, RNA e proteínas."},

        {p:"Quantos espermatozoides são liberados em média numa ejaculação?",
         alt:["200 a 500 milhões","2 a 5 milhões","20 a 50 mil","1 a 2 bilhões"],
         c:0, exp:"Desse número enorme, apenas um fertiliza o ovócito — o restante contribui indiretamente, já que as enzimas liberadas por muitos espermatozoides ajudam a abrir caminho pela corona radiata."},

        {p:"Quais são os limites do período embrionário e do período fetal?",
         alt:["Embrionário da 1ª à 8ª semana; fetal da 9ª semana ao nascimento","Embrionário da 1ª à 12ª semana; fetal da 13ª ao nascimento","Embrionário da 1ª à 4ª semana; fetal da 5ª ao nascimento","Embrionário da concepção ao parto; fetal apenas após o nascimento"],
         c:0, exp:"A divisão marca a transição do estabelecimento dos sistemas de órgãos, no período embrionário, para o crescimento e maturação desses sistemas, no período fetal."},

        {p:"Qual é a função dos grânulos vitelinos abundantes no citoplasma do ovócito?",
         alt:["Nutrir o embrião durante a primeira semana","Impedir a entrada de mais de um espermatozoide","Produzir as enzimas que digerem a zona pelúcida","Formar a corona radiata"],
         c:0, exp:"Antes da implantação, o embrião não tem conexão com a circulação materna. Os grânulos vitelinos são a reserva que o sustenta enquanto ele desce pela tuba uterina.",
         err:{1:"O bloqueio à polispermia é feito pelos grânulos corticais, não pelos vitelinos."}}
      ]},

    { id:"r6", emoji:"🌱", nome:"Rodada 6 — Embriologia: da clivagem à organogênese",
      desc:"Mórula, blastocisto, nidação, gastrulação, neurulação e destino dos folhetos.",
      resumo:[
        "Clivagem: mitoses sucessivas que aumentam o número de células sem aumentar o volume, originando blastômeros. Ocorre enquanto o embrião avança pela tuba uterina, ainda dentro da zona pelúcida.",
        "Com 8 células formam-se junções gap e de adesão entre os blastômeros internos, e junções de oclusão nos externos, criando polaridade. Com 16 células o conjunto lembra uma amora — a mórula, que chega ao útero cerca de três dias depois da concepção.",
        "Com 32 células os blastômeros secretam fluido, formando a cavidade blastocele: é o blastocisto, delimitado pelo trofoblasto (origina parte da placenta) e com o embrioblasto na parede interna (origina o embrião).",
        "Nidação: o blastocisto encosta no epitélio uterino pelo polo embrionário. A fusão de células do trofoblasto forma o sinciciotrofoblasto, multinucleado; as internas uninucleadas formam o citotrofoblasto. A adesão envolve receptores do trofoblasto e integrinas da matriz do endométrio.",
        "O sinciciotrofoblasto penetra o endométrio com projeções e enzimas, atinge glândulas e vasos e alcança o terço interno do miométrio; o sangue materno extravasa para lacunas. Sinciciotrofoblasto e citotrofoblasto secretam gonadotrofina coriônica humana, que mantém o corpo lúteo — ao fim da 2ª semana o teste de gravidez já é positivo.",
        "Embrioblasto forma uma placa bilaminar: epiblasto (células colunares altas, junto à cavidade amniótica) e hipoblasto (endoderma primitivo, células cuboides).",
        "Gastrulação, início da 3ª semana: surge a linha primitiva na extremidade caudal do epiblasto; células mesenquimais migram formando endoderma e depois mesoderma intraembrionário. Na extremidade cefálica surge o nó primitivo com a fosseta primitiva, que origina o tubo notocordal.",
        "Neurulação: a notocorda induz espessamento do ectoderma, formando a placa neural, que se invagina no sulco neural entre as pregas neurais; o fechamento forma o tubo neural. Neuroporo anterior fecha aos 25 dias; o posterior aos 28. A crista neural se divide em duas partes e origina os gânglios sensoriais dos nervos espinhais e cranianos.",
        "Somitos: o mesoderma paraxial se divide em corpos cuboides pareados, cerca de três pares por dia, até 42 a 44 — 4 occipitais, 8 cervicais, 12 torácicos, 5 lombares e 8 a 10 coccígeos. Cada somito se diferencia em esclerótomo (vértebras e costelas) e dermomiótomo (miótomo forma mioblastos; dermátomo forma a derme).",
        "Organogênese — ectoderma: epiderme e anexos, encéfalo e medula espinhal. Mesoderma: notocorda, derme, musculatura estriada, esqueleto axial, aparelho urogenital, sistema circulatório, musculatura lisa, peritônio, mesentérios e esqueleto apendicular. Endoderma: aparelho respiratório, tubo digestivo e glândulas anexas.",
        "Resumo da embriogênese: zigoto → mórula → blástula → gástrula → nêurula."
      ],
      questoes:[
        {p:"O que caracteriza a clivagem?",
         alt:["Mitoses sucessivas que aumentam o número de células sem aumentar o volume total do embrião","Divisões meióticas que reduzem o número de cromossomos","O crescimento das células sem que elas se dividam","A migração das células para formar os folhetos embrionários"],
         c:0, exp:"O embrião continua envolvido pela zona pelúcida, gelatinosa e espessa, o que o mantém com o mesmo tamanho enquanto o número de blastômeros aumenta. Tudo isso ocorre enquanto ele avança pela tuba uterina.",
         err:{1:"A meiose ocorre na gametogênese, antes da fertilização.",3:"A migração celular caracteriza a gastrulação."}},

        {p:"Com quantas células o embrião passa a ser chamado de mórula, e quando ela chega ao útero?",
         alt:["16 células, cerca de três dias depois da concepção","32 células, cerca de sete dias depois","8 células, no mesmo dia da fertilização","64 células, ao fim da segunda semana"],
         c:0, exp:"Com 16 células o aglomerado lembra uma amora — daí o nome. É nesse estágio que o embrião alcança a cavidade uterina.",
         err:{1:"Com 32 células o embrião já é blastocisto, com a blastocele formada."}},

        {p:"Quais são as duas partes do blastocisto e o que cada uma origina?",
         alt:["Trofoblasto, que origina parte da placenta, e embrioblasto, que origina o embrião","Epiblasto, que origina a placenta, e hipoblasto, que origina o embrião","Sinciciotrofoblasto, que origina o embrião, e citotrofoblasto, que origina o âmnio","Blastocele, que origina o embrião, e zona pelúcida, que origina a placenta"],
         c:0, exp:"Quando os blastômeros secretam fluido e formam a blastocele, o embrião se organiza numa camada externa — o trofoblasto — e numa saliência de massa celular interna, o embrioblasto.",
         err:{1:"Epiblasto e hipoblasto são as duas camadas do embrioblasto, formadas depois."}},

        {p:"Qual estrutura penetra o endométrio durante a nidação, alcançando o terço interno do miométrio?",
         alt:["Sinciciotrofoblasto","Citotrofoblasto","Embrioblasto","Saco vitelíneo"],
         c:0, exp:"O sinciciotrofoblasto é a massa multinucleada formada pela fusão de células do trofoblasto. Ele avança com projeções e enzimas que degradam a matriz extracelular, atingindo glândulas e vasos — o sangue materno passa a extravasar para suas lacunas.",
         err:{1:"O citotrofoblasto é a camada interna, cujas células permanecem uninucleadas."}},

        {p:"Qual hormônio é secretado pelo sinciciotrofoblasto e pelo citotrofoblasto, tornando o teste de gravidez positivo ao fim da 2ª semana?",
         alt:["Gonadotrofina coriônica humana","Progesterona","Relaxina","Estrogênio"],
         c:0, exp:"A gonadotrofina coriônica humana mantém o corpo lúteo funcionante, além de contribuir na implantação e na diferenciação do trofoblasto."},

        {p:"Quais são as duas camadas da placa bilaminar do embrioblasto?",
         alt:["Epiblasto, de células colunares altas, e hipoblasto, de células cuboides","Trofoblasto e citotrofoblasto","Ectoderma e endoderma definitivos","Âmnio e saco vitelíneo"],
         c:0, exp:"O epiblasto fica voltado para a cavidade amniótica e o hipoblasto, também chamado endoderma primitivo, forma o teto da cavidade extracelômica. É do epiblasto que sairão, na gastrulação, os três folhetos definitivos."},

        {p:"O que marca o início da gastrulação?",
         alt:["O aparecimento da linha primitiva na extremidade caudal do epiblasto","O fechamento do neuroporo anterior","A formação da blastocele","A secreção de gonadotrofina coriônica humana"],
         c:0, exp:"A gastrulação começa no início da 3ª semana e é o início da morfogênese. Da linha primitiva migram células mesenquimais: o primeiro conjunto forma o endoderma embrionário e o segundo, o mesoderma intraembrionário.",
         err:{1:"O fechamento do neuroporo anterior ocorre aos 25 dias, já na neurulação."}},

        {p:"Qual estrutura induz o espessamento do ectoderma sobrejacente para formar a placa neural?",
         alt:["A notocorda","A linha primitiva","O saco vitelíneo","O citotrofoblasto"],
         c:0, exp:"A notocorda é a indutora da neurulação. As células da placa neural formam o neuroectoderma, que origina o sistema nervoso central e algumas outras estruturas, como a retina. Nos vertebrados a notocorda é posteriormente substituída pela coluna vertebral."},

        {p:"Em que dias ocorrem os fechamentos dos neuroporos anterior e posterior?",
         alt:["25 dias o anterior e 28 dias o posterior","28 dias o anterior e 25 dias o posterior","14 e 21 dias","42 e 44 dias"],
         c:0, exp:"Antes do fechamento, as extremidades cefálica e caudal do tubo neural se comunicam com a cavidade amniótica pelos neuroporos anterior (cranial) e posterior (caudal). Falhas nesse fechamento estão na origem de malformações do tubo neural.",
         err:{3:"42 a 44 é o número total de pares de somitos formados, não uma data."}},

        {p:"Em que duas partes cada somito se diferencia, e o que cada uma origina?",
         alt:["Esclerótomo, que forma vértebras e costelas, e dermomiótomo, cujo miótomo forma mioblastos e cujo dermátomo forma a derme","Epímero e hipômero, que formam respectivamente a derme e o esqueleto","Notocorda e tubo neural","Epiblasto e hipoblasto"],
         c:0, exp:"O esclerótomo é a porção ventromedial; o dermomiótomo, a dorsolateral. Os somitos surgem a cerca de três pares por dia, chegando a 42 ou 44 pares: 4 occipitais, 8 cervicais, 12 torácicos, 5 lombares e 8 a 10 coccígeos."},

        {p:"Qual conjunto de estruturas deriva do ectoderma?",
         alt:["Epiderme e seus anexos, encéfalo e medula espinhal","Aparelho respiratório, tubo digestivo e glândulas anexas","Musculatura estriada, esqueleto axial e aparelho urogenital","Notocorda, peritônio e mesentérios"],
         c:0, exp:"É o folheto que dá origem tanto à cobertura externa quanto ao sistema nervoso — coerente com o fato de a placa neural se formar a partir do ectoderma induzido pela notocorda.",
         err:{1:"Esses são derivados do endoderma.",2:"Esses são derivados do mesoderma."}},

        {p:"Qual é a sequência resumida da embriogênese?",
         alt:["Zigoto → mórula → blástula → gástrula → nêurula","Zigoto → blástula → mórula → nêurula → gástrula","Mórula → zigoto → gástrula → blástula → nêurula","Zigoto → gástrula → mórula → blástula → nêurula"],
         c:0, exp:"Cada etapa nomeia um marco: o zigoto é a célula única; a mórula, o aglomerado maciço; a blástula, o estágio com cavidade; a gástrula, o embrião com folhetos definidos; a nêurula, aquele com tubo neural formado."}
      ]}
  ]});
