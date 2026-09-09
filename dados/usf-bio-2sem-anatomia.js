QUIZ.registrar({
  id:"usf-bio-2sem-anatomia", ano:"2º semestre", materia:"Anatomia", emoji:"🦴",
  escola:"USF — Biomedicina",
  bimestre:"2026 · 2º semestre", tema:"Introdução, esquelético, articular, muscular, circulatório e linfático",
  qtdAquecimento:8, qtdTeste:12,
  rodadas:[

    { id:"r1", emoji:"🧭", nome:"Rodada 1 — Introdução e termos anatômicos",
      desc:"Posição anatômica, planos, princípios de construção corpórea e nomenclatura.",
      resumo:[
        "Anatomia vem do grego Anatemnō, 'cortar em partes': estuda as estruturas do corpo humano e suas relações.",
        "Níveis de organização: celular, tecidual, orgânico e sistêmico. Anatomia macroscópica observa a olho nu; anatomia sistemática estuda por sistemas isolados.",
        "Normal é o mais frequente. Variação anatômica é diferente do normal sem prejuízo da função; anomalia afeta a função mas é compatível com a vida (polidactilia); monstruosidade é incompatível com a vida (anencefalia).",
        "Nomina Anatomica: termos oficiais em latim. Abreviaturas — A. artéria, V. veia, M. músculo, N. nervo, R. ramo, Lig. ligamento; dobrar a letra indica plural (Aa., Vv., Mm.).",
        "Posição anatômica: corpo ereto, cabeça para frente, braços ao lado do corpo, palmas viradas para frente e pés voltados para frente.",
        "Planos de secção: sagitais (dividem em direita e esquerda), frontais ou coronais (anterior e posterior) e transversais ou horizontais (superior e inferior).",
        "Princípios de construção: antimeria (duas metades semelhantes), metameria (segmentos sobrepostos, como vértebras e costelas), estratificação (pele, tela subcutânea, fáscia, músculo, osso) e paquimeria (paquímero anterior visceral e posterior neural).",
        "Termos de posição: proximal e distal (em relação à raiz do membro), medial e lateral (em relação ao plano mediano), superficial e profundo (em relação à fáscia muscular), ipsilateral e contralateral."
      ],
      questoes:[
        {p:"Qual é a descrição correta da posição anatômica?",
         alt:["Corpo ereto, braços ao lado, palmas e pés para frente","Corpo deitado de costas, braços cruzados sobre o tórax e pernas estendidas","Corpo ereto com os braços elevados acima da cabeça e palmas voltadas para trás","Corpo sentado, com joelhos e cotovelos flexionados a 90 graus"],
         c:0, exp:"A posição anatômica é a referência convencional para toda descrição de estrutura. Sem ela, termos como 'anterior' e 'lateral' perderiam sentido, já que dependeriam da postura em que a pessoa estivesse."},

        {p:"Um plano vertical que atravessa o corpo dividindo-o em partes anterior e posterior é o plano:",
         alt:["Frontal ou coronal","Sagital","Transversal","Mediano"],
         c:0, exp:"O nome coronal vem da sutura coronal do crânio, que segue exatamente essa orientação. Os sagitais dividem em direita e esquerda; os transversais, em superior e inferior.",
         err:{1:"Planos sagitais são verticais, mas dividem em direita e esquerda.",2:"O transversal é horizontal e separa superior de inferior.",3:"O plano mediano é o sagital que passa exatamente pelo meio."}},

        {p:"A polidactilia — presença de dedos supranumerários — é um exemplo de:",
         alt:["Anomalia: função afetada, mas compatível com a vida","Variação anatômica: diferente do normal, mas sem prejuízo da função","Monstruosidade: alteração incompatível com a vida","Normal: apenas menos frequente na população"],
         c:0, exp:"A escala vai do normal (mais frequente) à variação (diferente sem prejuízo funcional), passando pela anomalia (função afetada, vida preservada) até a monstruosidade (incompatível com a vida, como a anencefalia).",
         err:{1:"Variações não comprometem a função — o exemplo típico é o trajeto diferente de vasos sanguíneos.",2:"A monstruosidade é incompatível com a vida, o que não é o caso da polidactilia."}},

        {p:"O princípio de construção corpórea segundo o qual o corpo apresenta uma sobreposição longitudinal de segmentos semelhantes é a:",
         alt:["Metameria","Antimeria","Estratificação","Paquimeria"],
         c:0, exp:"A coluna vertebral e o gradil costal são os exemplos clássicos de metameria: unidades semelhantes empilhadas ao longo do eixo longitudinal.",
         err:{1:"Antimeria é a divisão em duas metades semelhantes, os antímeros direito e esquerdo.",2:"Estratificação são as camadas superpostas, da pele ao osso.",3:"Paquimeria são os dois tubos do segmento axial."}},

        {p:"Na estratificação do corpo humano, qual é a sequência correta da superfície para a profundidade?",
         alt:["Pele, tela subcutânea, fáscia muscular, músculo e osso","Pele, fáscia muscular, tela subcutânea, osso e músculo","Tela subcutânea, pele, músculo, fáscia muscular e osso","Fáscia muscular, pele, tela subcutânea, músculo e osso"],
         c:0, exp:"Essa ordem é a base do vocabulário de profundidade: superficial é o que está na pele ou tela subcutânea, externo à fáscia muscular; profundo é o que está para dentro da fáscia."},

        {p:"Segundo o princípio da paquimeria, o paquímero posterior, dorsal ou neural corresponde a:",
         alt:["Cavidade craniana e canal vertebral","Cavidades torácica, abdominal e pélvica","Membros superiores e inferiores","Pele e tela subcutânea do dorso"],
         c:0, exp:"O segmento axial — cabeça, pescoço e tronco — é constituído por dois tubos. O anterior, ventral ou visceral abriga as cavidades torácica, abdominal e pélvica; o posterior, dorsal ou neural abriga a cavidade craniana e o canal vertebral.",
         err:{1:"Essa é a descrição do paquímero anterior, ventral ou visceral."}},

        {p:"A falange média do dedo indicador está localizada entre a falange proximal e a distal. O que significam esses termos?",
         alt:["Proximal é mais perto da raiz do membro","Proximal é mais próximo do plano mediano; distal é mais lateral","Proximal é mais superficial; distal é mais profundo","Proximal é anterior; distal é posterior"],
         c:0, exp:"Proximal e distal sempre se referem à distância em relação à raiz do membro. Já medial e lateral se referem ao plano mediano, e superficial e profundo à fáscia muscular.",
         err:{1:"Proximidade ao plano mediano é descrita por medial e lateral."}},

        {p:"Na Nomina Anatomica, o que indica a abreviatura 'Mm.'?",
         alt:["Músculos, no plural","Músculo, no singular","Membrana muscular","Meninges"],
         c:0, exp:"A duplicação da inicial marca o plural: A. é artéria e Aa. artérias; V. é veia e Vv. veias; M. é músculo e Mm. músculos; N. é nervo e Nn. nervos.",
         err:{1:"Músculo no singular é abreviado com um único M."}},

        {p:"O nome 'm. levantador da escápula' segue qual critério de nomenclatura anatômica?",
         alt:["Função","Forma","Trajeto","Conexões"],
         c:0, exp:"Os critérios são forma (m. trapézio), posição (n. mediano), localização ou relação (m. tibial anterior), trajeto (a. circunflexa da escápula), conexões (lig. sacro-ilíaco) e função (m. levantador da escápula).",
         err:{1:"Forma é o critério do m. trapézio, batizado pelo seu formato geométrico.",2:"Trajeto descreve o caminho, como na a. circunflexa da escápula."}},

        {p:"Duas estruturas situadas no mesmo lado do corpo são descritas como:",
         alt:["Ipsilaterais","Contralaterais","Intermédias","Bilaterais medianas"],
         c:0, exp:"Ipsilateral indica mesmo lado; contralateral, lado oposto. É um par de termos muito usado em neuroanatomia, para descrever vias que cruzam ou não a linha média.",
         err:{1:"Contralateral significa exatamente o oposto: do lado contrário."}},

        {p:"Qual das opções corresponde ao aparelho locomotor?",
         alt:["Sistemas esquelético e muscular","Sistemas cardíaco e respiratório","Sistemas urinário e genital","Sistemas nervoso e endócrino"],
         c:0, exp:"A aula agrupa três aparelhos: locomotor (esquelético e muscular), cardiorrespiratório (cardíaco e respiratório) e urogenital (urinário e genital).",
         err:{1:"Essa combinação forma o aparelho cardiorrespiratório.",2:"Essa combinação forma o aparelho urogenital."}},

        {p:"O que caracteriza o nível de organização 'orgânico' do corpo humano?",
         alt:["Estrutura composta de dois ou mais tipos de tecidos","Menor unidade estrutural e funcional viva","Grupo de células que atuam juntas numa função específica","Conjunto de órgãos que trabalham juntos numa função comum"],
         c:0, exp:"Os quatro níveis, em ordem crescente: celular (a célula), tecidual (grupo de células com função específica), orgânico (dois ou mais tipos de tecido) e sistêmico (conjunto de órgãos com função comum).",
         err:{1:"Essa é a definição de célula, o nível celular.",2:"Essa é a definição de tecido.",3:"Essa é a definição de sistema orgânico."}}
      ]},

    { id:"r2", emoji:"🦴", nome:"Rodada 2 — Sistema esquelético",
      desc:"Funções do esqueleto, divisão axial e apendicular, crânio, coluna e osso longo.",
      resumo:[
        "O esqueleto é formado por ossos e cartilagens, com 206 ossos no adulto — número que varia com a idade, os critérios de contagem e fatores individuais.",
        "Funções: sustentação e conformação, sistema de alavancas para o movimento, proteção de órgãos vitais, hematopoiese, armazenamento de triglicerídeos e de sais minerais (cálcio e fósforo).",
        "Esqueleto axial: ossos da cabeça, pescoço e tronco. Esqueleto apendicular: ossos dos membros, incluindo as cinturas — escapular (escápula e clavícula) e pélvica (osso do quadril).",
        "Crânio: 22 ossos articulados, sendo a mandíbula o único móvel. Neurocrânio tem 8 ossos (frontal, parietais, temporais, occipital, esfenoide, etmoide); viscerocrânio tem 14.",
        "Coluna vertebral: 7 cervicais, 12 torácicas, 5 lombares, 5 sacrais e 4 a 3 coccígeas. Curvaturas torácica e sacral são primárias; cervical e lombar, secundárias. Atlas é a 1ª cervical, Áxis a 2ª.",
        "Gradil costal: costelas verdadeiras (1ª a 7ª), falsas (8ª a 10ª) e flutuantes (11ª e 12ª). Esterno com manúbrio, corpo e processo xifoide.",
        "Osso longo: epífises proximal e distal, diáfise, disco epifisial, cavidade medular, periósteo e endósteo, medula óssea e cartilagem articular. A cartilagem epifisial faz o osso crescer em comprimento; o periósteo, em espessura.",
        "Substância óssea compacta é a camada externa; a esponjosa é a parte interna (díploe, no crânio). Na osteoporose a reabsorção supera a deposição."
      ],
      questoes:[
        {p:"Quantos ossos tem o esqueleto humano adulto, segundo a contagem convencional?",
         alt:["206","270","300","180"],
         c:0, exp:"São 206 no adulto, mas o número não é absoluto: varia conforme o fator etário (o recém-nascido tem mais peças, que depois se fundem), os critérios de contagem adotados e fatores individuais.",
         err:{1:"Esse é aproximadamente o número no recém-nascido, antes das fusões ósseas."}},

        {p:"Qual destas NÃO é uma função do esqueleto?",
         alt:["Produção de hormônios sexuais","Hematopoiese","Armazenamento de cálcio e fósforo","Proteção de órgãos vitais"],
         c:0, exp:"As funções listadas são sustentação e conformação do corpo, sistema de alavancas para o movimento, proteção de órgãos vitais, produção de células sanguíneas, armazenamento de triglicerídeos no tecido adiposo e armazenamento de sais minerais.",
         err:{1:"A hematopoiese ocorre na medula óssea vermelha.",2:"Cálcio e fósforo são justamente os sais minerais armazenados."}},

        {p:"A cintura escapular é formada por quais ossos?",
         alt:["Escápula e clavícula","Escápula e úmero","Clavícula e esterno","Osso do quadril e sacro"],
         c:0, exp:"As cinturas ou cíngulos ligam os membros ao esqueleto axial e pertencem ao esqueleto apendicular. A escapular é formada por escápula e clavícula; a pélvica, pelo osso do quadril.",
         err:{1:"O úmero é o osso do braço, e não parte da cintura.",3:"O osso do quadril forma a cintura pélvica."}},

        {p:"Qual é o único osso móvel do crânio?",
         alt:["Mandíbula","Maxila","Vômer","Osso frontal"],
         c:0, exp:"Os 22 ossos do crânio se articulam entre si, na maioria por suturas imóveis. A mandíbula é a exceção, articulando-se pela articulação temporomandibular.",
         err:{1:"As maxilas são fixas; quem se move é a mandíbula."}},

        {p:"Quantos ossos compõem o neurocrânio e quantos o viscerocrânio?",
         alt:["8 no neurocrânio e 14 no viscerocrânio","14 no neurocrânio e 8 no viscerocrânio","10 no neurocrânio e 12 no viscerocrânio","12 em cada um"],
         c:0, exp:"O neurocrânio tem 8 ossos: frontal, parietais, temporais, occipital, esfenoide e etmoide. O viscerocrânio, ou face, tem 14: nasais, conchas nasais inferiores, vômer, lacrimais, maxilas, palatinos, zigomáticos e mandíbula. Somados, os 22 do crânio.",
         err:{1:"Os números estão invertidos: o neurocrânio, que envolve o encéfalo, é o de 8 ossos."}},

        {p:"Qual é a composição correta da coluna vertebral, de cima para baixo?",
         alt:["7 cervicais, 12 torácicas, 5 lombares e 5 sacrais","12 cervicais, 7 torácicas, 5 lombares, 5 sacrais e 4 coccígeas","7 cervicais, 5 torácicas, 12 lombares, 5 sacrais e 3 coccígeas","5 cervicais, 12 torácicas, 7 lombares, 4 sacrais e 5 coccígeas"],
         c:0, exp:"Uma forma de fixar: 7, 12 e 5 são as vértebras móveis (cervicais, torácicas e lombares), enquanto sacrais e coccígeas se fundem. As 12 torácicas correspondem aos 12 pares de costelas.",
         err:{1:"São 7 cervicais, correspondentes ao pescoço, e 12 torácicas, que articulam com as costelas."}},

        {p:"Quais curvaturas da coluna vertebral são classificadas como primárias?",
         alt:["Torácica e sacral","Cervical e lombar","Cervical e torácica","Lombar e sacral"],
         c:0, exp:"As curvaturas primárias, torácica e sacral, já existem no feto. As secundárias, cervical e lombar, se desenvolvem depois do nascimento — a cervical quando o bebê sustenta a cabeça e a lombar quando começa a andar.",
         err:{1:"Cervical e lombar são as curvaturas secundárias."}},

        {p:"Como são classificadas a 11ª e a 12ª costelas?",
         alt:["Flutuantes","Verdadeiras","Falsas","Cervicais"],
         c:0, exp:"Da 1ª à 7ª são verdadeiras; da 8ª à 10ª, falsas; a 11ª e a 12ª são flutuantes, porque não alcançam o esterno nem indiretamente.",
         err:{1:"Verdadeiras são as sete primeiras.",2:"Falsas são a 8ª, 9ª e 10ª."}},

        {p:"Quais são as três partes do esterno?",
         alt:["Manúbrio, corpo e processo xifoide","Cabeça, colo e diáfise","Epífise, diáfise e metáfise","Manúbrio, ângulo e tuberosidade"],
         c:0, exp:"O esterno é um osso plano do gradil costal, dividido em manúbrio (superior), corpo (médio) e processo xifoide (inferior).",
         err:{2:"Epífise, diáfise e metáfise são divisões de um osso longo, não do esterno."}},

        {p:"Qual estrutura do osso longo é responsável pelo crescimento em comprimento, e qual pelo crescimento em espessura?",
         alt:["Cartilagem epifisial pelo comprimento; periósteo pela espessura","Periósteo pelo comprimento; endósteo pela espessura","Cavidade medular pelo comprimento; cartilagem articular pela espessura","Diáfise pelo comprimento; epífise pela espessura"],
         c:0, exp:"É por isso que a radiografia do disco epifisial serve para estimar se ainda há potencial de crescimento: enquanto a lâmina está aberta, o osso pode alongar. O periósteo, além do crescimento em espessura, cuida da vascularização, inervação e regeneração.",
         err:{1:"O periósteo atua na espessura, não no comprimento."}},

        {p:"Qual é a diferença entre substância óssea compacta e esponjosa?",
         alt:["A compacta é externa; a esponjosa, interna","A compacta é interna; a esponjosa, externa","A compacta existe só nos ossos longos; a esponjosa, só nos planos","A compacta contém medula óssea; a esponjosa não"],
         c:0, exp:"A compacta forma a casca externa resistente; a esponjosa preenche o interior, com trabéculas que dão leveza. Nos ossos do crânio a camada esponjosa recebe o nome de díploe.",
         err:{1:"É o contrário: compacta por fora, esponjosa por dentro."}},

        {p:"O que ocorre no osso osteoporótico?",
         alt:["A reabsorção supera a deposição de sais minerais","A deposição de sais minerais supera a reabsorção, deixando o osso mais denso","O periósteo deixa de existir","A cartilagem articular se calcifica e substitui o osso esponjoso"],
         c:0, exp:"O osso é um tecido em remodelação permanente. Na osteoporose o equilíbrio se desloca para o lado da reabsorção, e a substância esponjosa vai perdendo trabéculas, o que aumenta o risco de fraturas.",
         err:{1:"Esse quadro descreveria o oposto da osteoporose."}}
      ]},

    { id:"r3", emoji:"🔗", nome:"Rodada 3 — Sistema articular",
      desc:"Classificação estrutural das junturas e os elementos da articulação sinovial.",
      resumo:[
        "Articulação ou juntura é a união entre dois ou mais ossos. Funções: sustentação e mobilidade.",
        "Fatores que afetam o movimento: forma das superfícies articulares, material interposto, ação hormonal (relaxina) e uso ou desuso.",
        "Classificação estrutural pelo material interposto — fibrosas (tecido conjuntivo fibroso, sem cavidade), cartilaginosas (cartilagem, sem cavidade) e sinoviais (com cavidade e líquido sinovial).",
        "Fibrosas: suturas (denteada, escamosa, plana e esquindilese), sindesmoses (membranas interósseas do antebraço e da perna) e gonfoses (articulação alvéolo-dental).",
        "Suturas do crânio: coronal ou frontoparietal, sagital ou interparietal e lambdoide ou parietoccipital — todas denteadas. Internasal é plana; temporoparietal é escamosa.",
        "Sinostose é a ossificação do tecido interposto quando cessa o crescimento, a partir dos 20 anos na maioria das suturas.",
        "Cartilaginosas: sincondroses de cartilagem hialina (disco epifisial, sincondrose esfenoccipital) e sínfises de cartilagem fibrosa (sínfise púbica, disco intervertebral com anel fibroso e núcleo pulposo).",
        "Sinoviais: cápsula articular com membrana fibrosa e membrana sinovial, cavidade articular com líquido sinovial e cartilagem articular hialina. Elementos acessórios: ligamentos, meniscos, discos e lábios articulares.",
        "Quanto à mobilidade: sinartroses são imóveis (suturas), anfiartroses têm mobilidade parcial (sindesmoses)."
      ],
      questoes:[
        {p:"Qual é o critério da classificação estrutural das articulações?",
         alt:["O material interposto entre os ossos","O grau de mobilidade permitido","O número de ossos envolvidos","A região do corpo onde se localizam"],
         c:0, exp:"A classificação estrutural olha para o que está entre os ossos: tecido conjuntivo fibroso nas fibrosas, cartilagem nas cartilaginosas e uma cavidade com líquido sinovial nas sinoviais.",
         err:{1:"A mobilidade dá origem a outra classificação, a funcional — sinartroses, anfiartroses e diartroses."}},

        {p:"A articulação alvéolo-dental, que prende o dente ao osso, é um exemplo de:",
         alt:["Gonfose","Sindesmose","Sincondrose","Sínfise"],
         c:0, exp:"Gonfose é um tipo de articulação fibrosa cujo nome deriva da imagem de um pino cravado — exatamente a relação entre a raiz do dente e o alvéolo.",
         err:{1:"Sindesmoses unem ossos por membranas interósseas, como no antebraço e na perna.",2:"Sincondroses têm cartilagem hialina interposta.",3:"Sínfises têm cartilagem fibrosa interposta."}},

        {p:"A membrana interóssea da perna, que une tíbia e fíbula, é classificada como:",
         alt:["Sindesmose, fibrosa de mobilidade parcial","Sutura, uma articulação fibrosa imóvel","Sincondrose, uma articulação cartilaginosa hialina","Articulação sinovial com cavidade"],
         c:0, exp:"Sindesmoses são fibrosas e permitem mobilidade parcial — são anfiartroses. É o caso da sindesmose tibiofibular e da radioulnar.",
         err:{1:"Suturas são imóveis, classificadas como sinartroses, e ocorrem no crânio."}},

        {p:"A sutura sagital, entre os dois ossos parietais, é de que tipo?",
         alt:["Denteada ou serreada","Escamosa","Plana","Esquindilese"],
         c:0, exp:"As três grandes suturas da calvária — coronal (frontoparietal), sagital (interparietal) e lambdoide (parietoccipital) — são denteadas. A internasal é plana e a temporoparietal é escamosa.",
         err:{1:"A escamosa é o encaixe em bisel da sutura temporoparietal.",2:"A plana é o encontro de bordas retas, como na internasal."}},

        {p:"O que é a sinostose?",
         alt:["A ossificação do tecido interposto às faces articulares","A inflamação da membrana sinovial","A separação anormal entre duas superfícies articulares","A formação de líquido sinovial em excesso"],
         c:0, exp:"A sinostose acontece na maioria das suturas a partir dos 20 anos de idade, e também em sincondroses e algumas sínfises. O disco epifisial fechado é um exemplo de sincondrose que sofreu sinostose.",
         err:{2:"A separação anormal de superfícies articulares é a luxação."}},

        {p:"O disco intervertebral, com seu anel fibroso e núcleo pulposo, é uma articulação do tipo:",
         alt:["Sínfise, cartilaginosa de cartilagem fibrosa","Sincondrose, cartilaginosa de cartilagem hialina","Sindesmose, fibrosa","Sinovial, com cavidade articular"],
         c:0, exp:"Sínfises são unidas por cartilagem fibrosa, como a sínfise púbica e os discos intervertebrais. Quando o núcleo pulposo se desloca através do anel fibroso, ocorre a hérnia de disco.",
         err:{1:"Sincondroses usam cartilagem hialina — o disco epifisial e a sincondrose esfenoccipital são os exemplos."}},

        {p:"Quais são os componentes da cápsula articular de uma articulação sinovial?",
         alt:["Membrana fibrosa e membrana sinovial","O anel fibroso e o núcleo pulposo","Periósteo e endósteo","Epicárdio e endocárdio"],
         c:0, exp:"A membrana fibrosa é a camada externa resistente; a membrana sinovial reveste internamente e produz o líquido sinovial que preenche a cavidade articular.",
         err:{1:"Anel fibroso e núcleo pulposo são partes do disco intervertebral.",3:"Epicárdio e endocárdio são camadas da parede do coração."}},

        {p:"Que tipo de cartilagem reveste as superfícies articulares nas articulações sinoviais?",
         alt:["Cartilagem hialina","Cartilagem fibrosa","Cartilagem elástica","Tecido conjuntivo fibroso denso"],
         c:0, exp:"A cartilagem articular é hialina e proporciona uma superfície lisa e de baixo atrito, lubrificada pelo líquido sinovial.",
         err:{1:"A cartilagem fibrosa aparece nos meniscos, discos e sínfises, não revestindo a superfície articular."}},

        {p:"Os meniscos medial e lateral são elementos característicos de qual articulação?",
         alt:["Joelho","Ombro","Quadril","Temporomandibular"],
         c:0, exp:"Os meniscos do joelho são cartilagens fibrosas em forma de meia-lua, associados à articulação tibiofemoral. A temporomandibular tem um disco articular; ombro e quadril têm lábios articulares — o glenoidal e o do acetábulo.",
         err:{1:"No ombro o elemento acessório é o lábio glenoidal.",2:"No quadril é o lábio do acetábulo.",3:"Na ATM é um disco articular, não meniscos."}},

        {p:"Os ligamentos cruzados anterior e posterior pertencem a que categoria de ligamentos articulares?",
         alt:["Intra-articulares","Extracapsulares","Capsulares","Interósseos"],
         c:0, exp:"Os ligamentos articulares se dividem em extracapsulares, capsulares e intra-articulares. Os cruzados do joelho ficam dentro da articulação, cruzando-se entre si — daí o nome.",
         err:{1:"Os colaterais tibial e fibular são exemplos de ligamentos situados fora da cápsula."}},

        {p:"Qual hormônio é citado como fator que afeta o movimento articular?",
         alt:["Relaxina","Insulina","Cortisol","Tiroxina"],
         c:0, exp:"Os fatores que afetam o movimento são a forma das superfícies articulares, o material interposto, a ação hormonal da relaxina e o uso ou desuso. A relaxina aumenta a frouxidão ligamentar, o que tem papel conhecido na gestação."},

        {p:"As fontanelas ou fontículos do crânio do recém-nascido correspondem a:",
         alt:["Regiões onde as suturas ainda não se ossificaram","Forames por onde passam nervos cranianos","Depressões articulares da base do crânio","Cavidades preenchidas por líquido sinovial"],
         c:0, exp:"Nos recém-nascidos as suturas ainda são amplas áreas de tecido conjuntivo fibroso não ossificado — os fontículos ântero-lateral e póstero-lateral, entre outros. Isso permite a moldagem do crânio no parto e o crescimento do encéfalo.",
         err:{3:"Não há líquido sinovial nas suturas: elas são articulações fibrosas, sem cavidade articular."}}
      ]},

    { id:"r4", emoji:"💪", nome:"Rodada 4 — Sistema muscular",
      desc:"Tipos de músculo, componentes anatômicos, origem e inserção, e os principais músculos.",
      resumo:[
        "Músculo é órgão de tecido predominantemente muscular; a célula alongada é a fibra muscular ou miócito, capaz de contração e relaxamento. São cerca de 650 músculos.",
        "Funções: movimentos corporais, manutenção da postura, respiração, comunicação, constrição de órgãos e vasos, e batimentos cardíacos.",
        "Três tipos — estriado esquelético (fixado ao esqueleto, contração voluntária, com estrias), estriado cardíaco ou miocárdio (parede do coração, involuntário, com estrias) e liso (parede de vísceras e vasos, involuntário, sem estrias).",
        "Componentes do músculo estriado esquelético: ventre muscular, tendões, aponeurose e fáscia muscular.",
        "Origem é o ponto fixo, na extremidade que não se desloca; inserção é o ponto móvel. Para haver movimento, o músculo se fixa em ossos diferentes e cruza a articulação.",
        "Contagens que caem em prova: bíceps braquial tem 2 tendões de origem, tríceps tem 3, quadríceps tem 4. O digástrico tem 2 ventres e 1 tendão intermédio; o reto do abdome é poligástrico, com 4 ventres.",
        "Grupos: expressão facial (orbicular do olho, orbicular da boca, bucinador, abaixador do ângulo da boca) e mastigação (temporal, masseter, pterigóideos lateral e medial); pescoço (esternocleidomastóideo, digástrico); dorso (trapézio, latíssimo do dorso); tórax (intercostais, diafragma); membros (deltoide, bíceps, tríceps, glúteos máximo, médio e mínimo, piriforme, quadríceps).",
        "Anexos musculares: bursa ou bolsa sinovial, bainha fibrosa (retináculos) e bainha sinovial, com folhetos externo e interno."
      ],
      questoes:[
        {p:"Qual tipo de músculo tem contração involuntária e apresenta estrias?",
         alt:["Estriado cardíaco","Estriado esquelético","Liso","Nenhum: toda musculatura estriada é voluntária"],
         c:0, exp:"O miocárdio é a exceção que quebra a associação intuitiva entre estrias e controle voluntário: tem estrias como o esquelético, mas contração involuntária como o liso.",
         err:{1:"O estriado esquelético é voluntário.",2:"O liso é involuntário, mas não tem estrias.",3:"O músculo cardíaco é justamente o contraexemplo dessa regra."}},

        {p:"Onde se localiza o músculo liso?",
         alt:["Na parede das vísceras e dos vasos","Fixado ao esqueleto","Na parede muscular do coração","Apenas no diafragma"],
         c:0, exp:"O músculo liso reveste vísceras e vasos, e sua contração involuntária responde pela constrição de órgãos e vasos sanguíneos — uma das funções listadas do sistema muscular.",
         err:{1:"Essa é a localização do estriado esquelético.",2:"A parede do coração é o miocárdio, estriado cardíaco.",3:"O diafragma é músculo estriado esquelético."}},

        {p:"Qual é a diferença entre origem e inserção de um músculo?",
         alt:["Origem é o ponto fixo; inserção, o ponto móvel","Origem é sempre proximal e inserção sempre distal, independentemente do movimento","Origem se fixa em osso e inserção em cartilagem","Origem é o ventre muscular e inserção é o tendão"],
         c:0, exp:"Para haver movimento, o músculo precisa se fixar em ossos diferentes e cruzar a articulação. Quando ele se contrai, traciona um osso em direção ao outro: a origem é o ponto fixo, a inserção é o ponto móvel.",
         err:{3:"Ventre e tendão são componentes anatômicos, e não pontos de fixação."}},

        {p:"Quantos tendões de origem tem o músculo quadríceps?",
         alt:["4","2","3","1"],
         c:0, exp:"O prefixo entrega a resposta em cada caso: bíceps tem 2 tendões de origem, tríceps tem 3 e quadríceps tem 4.",
         err:{1:"Dois tendões de origem correspondem ao bíceps.",2:"Três correspondem ao tríceps."}},

        {p:"O músculo digástrico do pescoço recebe esse nome porque possui:",
         alt:["2 ventres e 1 tendão intermédio","2 tendões de origem","2 inserções bem distintas no osso","Dupla inervação"],
         c:0, exp:"O critério aqui é o número de ventres, e não de tendões. O reto do abdome segue a mesma lógica e é chamado de poligástrico, por apresentar 4 ventres musculares.",
         err:{1:"Contar tendões de origem é o critério do bíceps, tríceps e quadríceps."}},

        {p:"Quais destes são músculos da mastigação?",
         alt:["Temporal, masseter e pterigóideos lateral e medial","Orbicular da boca, bucinador e abaixador do ângulo da boca","Esternocleidomastóideo e digástrico","Trapézio e latíssimo do dorso"],
         c:0, exp:"Os músculos da cabeça se dividem em dois grupos: os da expressão facial (orbicular do olho, orbicular da boca, bucinador, abaixador do ângulo da boca) e os da mastigação (temporal, masseter e pterigóideos).",
         err:{1:"Esses são músculos da expressão facial.",2:"Esses são músculos do pescoço.",3:"Esses são músculos do dorso."}},

        {p:"Qual é a estrutura em forma de lâmina larga que substitui o tendão em alguns músculos?",
         alt:["Aponeurose","Fáscia muscular","Bursa sinovial","Retináculo"],
         c:0, exp:"A aponeurose é um tendão achatado e laminar. Não deve ser confundida com a fáscia muscular, que é a membrana que envolve e separa músculos e compartimentos.",
         err:{1:"A fáscia envolve e separa os músculos em compartimentos, sem ser um meio de fixação.",2:"A bursa é uma bolsa que reduz o atrito.",3:"Retináculo é a bainha fibrosa que mantém tendões em posição."}},

        {p:"O que são os retináculos, entre os anexos musculares?",
         alt:["Bainhas fibrosas que seguram os tendões","Bolsas cheias de líquido que reduzem o atrito","Os folhetos da bainha sinovial","Tendões intermédios de músculos digástricos"],
         c:0, exp:"Os anexos musculares incluem a bursa ou bolsa sinovial, a bainha fibrosa — os retináculos, como o dos extensores — e a bainha sinovial, com folheto externo e interno.",
         err:{1:"Essa é a descrição da bursa ou bolsa sinovial."}},

        {p:"Qual nervo é citado na aula em relação topográfica com o músculo piriforme?",
         alt:["Nervo isquiático","Nervo mediano","Nervo femoral","Nervo ulnar"],
         c:0, exp:"A relação entre o piriforme e o nervo isquiático é anatomicamente importante — é a base do quadro conhecido como síndrome do piriforme, em que o músculo comprime o nervo.",
         err:{1:"O nervo mediano é do membro superior, e seu nome vem do critério de posição."}},

        {p:"Aproximadamente quantos músculos há no corpo humano?",
         alt:["650","206","300","1200"],
         c:0, exp:"São cerca de 650 músculos, contra 206 ossos — um contraste que costuma cair em prova justamente porque os dois números aparecem próximos no conteúdo.",
         err:{1:"206 é o número de ossos do esqueleto adulto."}},

        {p:"Qual destes NÃO é um músculo do grupo glúteo citado na aula?",
         alt:["Glúteo lateral","Glúteo máximo","Glúteo médio","Glúteo mínimo"],
         c:0, exp:"O grupo é formado por glúteo máximo, médio e mínimo — nomeados pelo tamanho. O piriforme aparece na mesma região, mas não pertence ao grupo glúteo."},

        {p:"Como se chama a célula do tecido muscular?",
         alt:["Fibra muscular","Osteócito","Condrócito","Sinoviócito"],
         c:0, exp:"A fibra muscular ou miócito é alongada e capaz de contração — encurtamento — e relaxamento, o que sustenta todas as funções do sistema.",
         err:{1:"Osteócito é a célula do tecido ósseo.",2:"Condrócito é a célula da cartilagem."}}
      ]},

    { id:"r5", emoji:"❤️", nome:"Rodada 5 — Sistema circulatório: coração",
      desc:"Câmaras, valvas, vasos da base, ciclo cardíaco e irrigação do miocárdio.",
      resumo:[
        "O sistema circulatório reúne o cardiovascular (coração e vasos sanguíneos: artérias, capilares e veias) e o linfático. Volume sanguíneo aproximado: 70 ml por quilo.",
        "Lado direito do coração conduz sangue venoso (CO₂); lado esquerdo, sangue arterial (O₂).",
        "O coração fica no mediastino, com formato de cone invertido e ápice voltado para baixo, para frente e para a esquerda.",
        "Pericárdio: fibroso e seroso, este com lâmina parietal e lâmina visceral (epicárdio), separadas pela cavidade do pericárdio com líquido. Função de fixação e contenção.",
        "Parede do coração: epicárdio, miocárdio (músculo estriado cardíaco) e endocárdio (endotélio e tecido conjuntivo).",
        "Câmaras: 2 átrios superiores, de recepção, e 2 ventrículos inferiores, de ejeção. Septos interatrial e interventricular impedem a mistura entre os lados.",
        "Vasos da base: veias cavas superior e inferior chegam ao átrio direito; 4 veias pulmonares chegam ao átrio esquerdo. O ventrículo direito ejeta no tronco pulmonar; o esquerdo, na aorta.",
        "Valvas atrioventriculares: direita é a tricúspide, esquerda é a bicúspide ou mitral, com válvulas presas por cordas tendíneas aos músculos papilares. Valvas do tronco pulmonar e da aorta têm válvulas semilunares.",
        "Circulação pulmonar: VD → tronco pulmonar → artérias pulmonares → pulmões → veias pulmonares → AE. Circulação sistêmica: VE → aorta → corpo → veias cavas → AD.",
        "Ramos do arco da aorta: tronco braquiocefálico (que se divide em carótida comum direita e subclávia direita), carótida comum esquerda e subclávia esquerda.",
        "As artérias coronárias se originam na aorta ascendente. As veias cardíacas drenam para o seio coronário, que desemboca no átrio direito."
      ],
      questoes:[
        {p:"O sangue que chega ao átrio esquerdo vem de onde?",
         alt:["Das quatro veias pulmonares","Das veias cavas superior e inferior","Do tronco pulmonar","Do seio coronário"],
         c:0, exp:"Duas veias pulmonares direitas e duas esquerdas trazem o sangue já oxigenado dos pulmões ao átrio esquerdo. É a exceção clássica: são veias que carregam sangue arterial.",
         err:{1:"As cavas chegam ao átrio direito, trazendo sangue venoso.",2:"O tronco pulmonar sai do ventrículo direito, e não chega a átrio nenhum.",3:"O seio coronário desemboca no átrio direito."}},

        {p:"Qual é o nome da valva atrioventricular esquerda?",
         alt:["Bicúspide ou mitral","Tricúspide","Valva da aorta","Valva do tronco pulmonar"],
         c:0, exp:"A valva atrioventricular direita é a tricúspide, com três válvulas; a esquerda é a bicúspide, também chamada mitral. As duas têm válvulas presas por cordas tendíneas aos músculos papilares.",
         err:{1:"A tricúspide é a atrioventricular direita.",2:"A valva da aorta é semilunar e fica na saída do ventrículo esquerdo, não entre átrio e ventrículo."}},

        {p:"Qual é a função das cordas tendíneas?",
         alt:["Prender as válvulas aos músculos papilares","Conduzir o impulso elétrico do átrio ao ventrículo","Sustentar as valvas semilunares da aorta e do tronco pulmonar","Ligar o pericárdio fibroso ao diafragma"],
         c:0, exp:"As cordas tendíneas impedem que as válvulas se evertam para dentro do átrio durante a sístole ventricular, quando a pressão sobe bruscamente.",
         err:{2:"As valvas semilunares não têm cordas tendíneas — abrem e fecham pela própria diferença de pressão."}},

        {p:"Descreva corretamente o trajeto da pequena circulação:",
         alt:["Ventrículo direito → tronco pulmonar → pulmões → átrio esquerdo","Ventrículo esquerdo → aorta → corpo → veias cavas → átrio direito","Átrio direito → ventrículo direito → aorta → pulmões → átrio esquerdo","Ventrículo esquerdo → artérias pulmonares → pulmões → veias cavas → átrio direito"],
         c:0, exp:"A pequena circulação, ou pulmonar, leva o sangue venoso do coração aos pulmões e traz de volta o sangue já oxigenado. A grande circulação, ou sistêmica, é a que sai do ventrículo esquerdo pela aorta e retorna pelas cavas ao átrio direito.",
         err:{1:"Esse é o trajeto da grande circulação, ou sistêmica."}},

        {p:"Quais são as três camadas da parede do coração, de fora para dentro?",
         alt:["Epicárdio, miocárdio e endocárdio","Endocárdio, miocárdio e epicárdio","Pericárdio fibroso, pericárdio seroso e miocárdio","Membrana fibrosa, membrana sinovial e endotélio"],
         c:0, exp:"O epicárdio é a lâmina visceral do pericárdio seroso; o miocárdio é o músculo estriado cardíaco, responsável pela contração; o endocárdio é a camada interna, de endotélio e tecido conjuntivo.",
         err:{1:"A ordem está invertida: o epicárdio é a camada mais externa."}},

        {p:"Onde se originam as artérias coronárias?",
         alt:["Na aorta ascendente","No arco da aorta, junto ao tronco braquiocefálico","No tronco pulmonar","No seio coronário"],
         c:0, exp:"As coronárias saem da aorta ascendente, logo acima da valva da aorta — o coração é o primeiro órgão a ser irrigado pelo sangue que ele acabou de ejetar.",
         err:{1:"Do arco da aorta saem o tronco braquiocefálico, a carótida comum esquerda e a subclávia esquerda.",3:"O seio coronário é venoso e recebe o sangue já usado pelo miocárdio."}},

        {p:"Quais são os três ramos do arco da aorta, na ordem?",
         alt:["Tronco braquiocefálico, carótida comum e subclávia esquerdas","Artérias carótidas comuns direita e esquerda e tronco braquiocefálico","Artérias subclávias direita e esquerda e tronco pulmonar","Tronco braquiocefálico direito e esquerdo e artéria carótida comum"],
         c:0, exp:"A assimetria é o ponto: à direita existe um tronco braquiocefálico que só depois se divide em carótida comum direita e subclávia direita, enquanto à esquerda a carótida comum e a subclávia saem diretamente do arco.",
         err:{1:"A carótida comum direita não sai do arco: ela é ramo do tronco braquiocefálico."}},

        {p:"Para onde as veias cardíacas drenam o sangue venoso do miocárdio?",
         alt:["Para o seio coronário, no átrio direito","Para a veia cava superior","Diretamente para o ventrículo direito do coração","Para as veias pulmonares"],
         c:0, exp:"O átrio direito recebe sangue venoso de três fontes: veia cava superior, veia cava inferior e seio coronário."},

        {p:"Durante a sístole ventricular, o que acontece com as valvas cardíacas?",
         alt:["As atrioventriculares se fecham e as semilunares se abrem","As atrioventriculares se abrem e as semilunares se fecham","Todas se fecham simultaneamente","Todas se abrem simultaneamente"],
         c:0, exp:"Sístole é contração e diástole é relaxamento. Quando os ventrículos se contraem, a pressão interna sobe, fecha as valvas atrioventriculares — impedindo o refluxo para os átrios — e abre as semilunares, ejetando o sangue para o tronco pulmonar e a aorta.",
         err:{1:"Essa configuração corresponde à sístole atrial com diástole ventricular, quando o sangue passa dos átrios para os ventrículos."}},

        {p:"Por que o ventrículo esquerdo tem parede muito mais espessa que o direito?",
         alt:["Porque ejeta contra a resistência de todo o corpo","Porque recebe um volume de sangue muito maior a cada ciclo","Porque contém as artérias coronárias em sua parede","Porque abriga o septo interatrial"],
         c:0, exp:"A diferença de espessura entre os lados direito e esquerdo é visível a olho nu num corte transversal. O direito ejeta apenas para os pulmões, um circuito curto e de baixa pressão; o esquerdo precisa vencer a resistência de todo o corpo.",
         err:{1:"O volume ejetado pelos dois ventrículos é essencialmente o mesmo; o que muda é a pressão."}},

        {p:"Em que região do tórax o coração está localizado?",
         alt:["No mediastino","Na cavidade pleural direita","No espaço retroperitoneal","Na cavidade pericárdica do abdome"],
         c:0, exp:"O mediastino é o compartimento central da cavidade torácica, entre os pulmões. Ali o coração se aloja com formato de cone invertido, ápice apontando para baixo, para frente e para a esquerda."},

        {p:"Qual é a função do pericárdio?",
         alt:["Fixação e contenção do coração","Contração e propulsão do sangue","Condução do impulso elétrico","Filtração da linfa que chega ao coração"],
         c:0, exp:"O pericárdio fibroso e o seroso, com suas lâminas parietal e visceral e o líquido entre elas, fixam o coração no mediastino, contêm sua expansão e reduzem o atrito durante os batimentos.",
         err:{1:"A contração é papel do miocárdio."}}
      ]},

    { id:"r6", emoji:"🛡️", nome:"Rodada 6 — Sistema linfático",
      desc:"Linfa, capilares, troncos, ductos e os órgãos linfáticos.",
      resumo:[
        "Linfa é um líquido viscoso e esbranquiçado que circula nos vasos linfáticos e tem a mesma composição do fluido intersticial.",
        "Fluxo do fluido: capilar sanguíneo → espaço intersticial → vaso linfático → veia torácica.",
        "Fluxo da linfa: capilares linfáticos → vasos linfáticos → troncos linfáticos → ductos linfáticos. O fluxo é lento e unidirecional, em direção ao coração, com válvulas ao longo do trajeto.",
        "Principais troncos: jugulares (cabeça e pescoço), subclávios (membros superiores), broncomediastinais (tórax, diafragma, pulmões, coração e parte do fígado), intestinal (parte do fígado, estômago, pâncreas, baço e intestinos) e lombares (abdome, pelve, rins, vísceras pélvicas e membros inferiores).",
        "Ducto linfático direito recebe os troncos jugular direito, subclávio direito e broncomediastinal direito. O ducto torácico recebe todos os demais. Ambos desembocam na junção das veias jugular interna e subclávia.",
        "Órgãos linfáticos: medula óssea (produz linfócitos), timo (maturação de linfócitos T, posterior ao manúbrio do esterno, involui a partir da puberdade), baço, tonsilas e linfonodos.",
        "Baço: lado esquerdo da cavidade abdominal, ao nível das 9ª, 10ª e 11ª costelas. Destrói patógenos, remove eritrócitos e plaquetas defeituosos, armazena plaquetas, produz eritrócitos no feto e recicla ferro.",
        "Tonsilas faríngea, palatina e lingual ficam no início dos tratos respiratório e digestivo. Linfonodos são massas encapsuladas de tecido linfoide que filtram micro-organismos e toxinas, encontradas na axila, virilha e ao longo dos grandes vasos do pescoço."
      ],
      questoes:[
        {p:"Qual afirmação sobre a composição da linfa está correta?",
         alt:["Tem a mesma composição do fluido intersticial","Tem a mesma composição do sangue arterial","É composta apenas de linfócitos e plaquetas","É idêntica ao líquido sinovial das articulações"],
         c:0, exp:"A linfa é o próprio líquido intersticial depois de captado pelos capilares linfáticos — daí a identidade de composição. Ela é viscosa e esbranquiçada.",
         err:{1:"Ao contrário do sangue, a linfa não contém hemácias."}},

        {p:"Qual é a sequência correta do fluxo da linfa?",
         alt:["Capilares → vasos → troncos → ductos linfáticos","Ductos → troncos → vasos → capilares linfáticos","Capilares linfáticos → linfonodos → capilares sanguíneos → coração","Vasos linfáticos → capilares linfáticos → troncos → ductos"],
         c:0, exp:"O sistema vai do mais fino ao mais calibroso: capilares linfáticos, vasos, troncos e por fim os ductos, que despejam a linfa no sistema venoso.",
         err:{1:"A ordem está invertida: os capilares são o ponto de partida."}},

        {p:"Onde os ductos linfáticos desembocam?",
         alt:["Na junção da jugular interna com a subclávia","No átrio direito, junto com as veias cavas","No baço","Nos capilares sanguíneos do intestino"],
         c:0, exp:"O ducto torácico e o ducto linfático direito devolvem a linfa à circulação sanguínea exatamente nesse ângulo venoso — é assim que o líquido que escapou dos capilares retorna ao sangue.",
         err:{1:"A linfa entra no sistema venoso antes de chegar ao coração, e não diretamente no átrio."}},

        {p:"Quais troncos linfáticos são recebidos pelo ducto linfático direito?",
         alt:["Jugular, subclávio e broncomediastinal direitos","Todos os troncos do lado direito, inclusive o lombar direito","Apenas o tronco intestinal","Jugulares e subclávios de ambos os lados"],
         c:0, exp:"O ducto linfático direito drena apenas o quadrante superior direito do corpo. Todo o resto — os dois membros inferiores, o abdome e o lado esquerdo do tórax e da cabeça — vai para o ducto torácico, muito maior.",
         err:{1:"Os troncos lombares drenam para o ducto torácico, não para o direito."}},

        {p:"O tronco linfático lombar drena qual região?",
         alt:["Abdome, pelve, rins e membros inferiores","Cabeça e pescoço","Membros superiores","Tórax, diafragma, pulmões e coração"],
         c:0, exp:"Cada tronco tem seu território: jugulares para cabeça e pescoço, subclávios para os membros superiores, broncomediastinais para o tórax, intestinal para as vísceras digestivas e lombares para abdome, pelve e membros inferiores.",
         err:{1:"Cabeça e pescoço são drenados pelos troncos jugulares.",2:"Os membros superiores são drenados pelos troncos subclávios.",3:"Essa é a região dos troncos broncomediastinais."}},

        {p:"Qual órgão linfático é responsável pela maturação dos linfócitos T e involui a partir da puberdade?",
         alt:["Timo","Baço","Medula óssea","Tonsila palatina"],
         c:0, exp:"O timo fica posterior ao manúbrio do esterno, produz linfócitos e anticorpos e, a partir da puberdade, involui e é substituído por gordura. A medula óssea produz os linfócitos; o timo é onde os T amadurecem.",
         err:{1:"O baço não involui na puberdade e tem funções de filtragem e reciclagem.",2:"A medula óssea produz linfócitos, mas não é onde ocorre a maturação dos T."}},

        {p:"Onde o baço se localiza?",
         alt:["À esquerda do abdome, junto às últimas costelas","No lado direito da cavidade abdominal, abaixo do fígado","No mediastino, posterior ao esterno","Na pelve, junto às vísceras pélvicas"],
         c:0, exp:"A relação com as costelas inferiores esquerdas explica por que traumas nessa região podem provocar ruptura esplênica.",
         err:{2:"Posterior ao manúbrio do esterno fica o timo."}},

        {p:"Qual destas NÃO é uma função do baço?",
         alt:["Maturação de linfócitos T","Remoção de eritrócitos e plaquetas defeituosos","Armazenamento de plaquetas","Reciclagem de ferro"],
         c:0, exp:"O baço contém linfócitos B e T que destroem patógenos, remove eritrócitos e plaquetas velhos ou rompidos, armazena plaquetas, produz eritrócitos no feto e recicla ferro. A maturação dos linfócitos T é função do timo.",
         err:{3:"A reciclagem de ferro é consequência direta da destruição de hemácias velhas pelo baço."}},

        {p:"Quais são as três tonsilas citadas e onde se localizam?",
         alt:["Faríngea, palatina e lingual, na entrada das vias","Cervical, torácica e lombar, ao longo da coluna","Axilar, inguinal e cervical, junto aos grandes vasos","Superior, média e inferior, no mediastino"],
         c:0, exp:"As tonsilas são agregados de tecido linfoide produtores de linfócitos, posicionados justamente na porta de entrada do ar e do alimento — uma primeira linha de defesa.",
         err:{2:"Axila, virilha e pescoço são localizações típicas de linfonodos, não de tonsilas."}},

        {p:"Qual é a função principal dos linfonodos?",
         alt:["Filtrar micro-organismos e toxinas","Produzir hemácias no adulto","Bombear a linfa em direção ao coração e aos pulmões","Produzir líquido sinovial"],
         c:0, exp:"Linfonodos são massas encapsuladas de tecido linfoide contendo macrófagos e linfócitos, interpostas ao longo dos vasos linfáticos. São encontrados na axila, virilha e ao longo dos grandes vasos do pescoço.",
         err:{2:"A linfa não é bombeada por um órgão: o fluxo é lento, unidirecional e depende de válvulas e da compressão muscular."}},

        {p:"Por que os vasos linfáticos possuem válvulas?",
         alt:["Porque o fluxo é lento e precisa não refluir","Porque a pressão dentro deles é maior que a das artérias","Porque precisam separar a linfa do sangue","Porque produzem linfócitos ao longo do trajeto"],
         c:0, exp:"Sem uma bomba própria, o sistema linfático depende de válvulas e da compressão pelos músculos vizinhos para manter a linfa avançando em direção ao coração.",
         err:{1:"A pressão no sistema linfático é baixa, muito menor que a arterial."}},

        {p:"Quais órgãos são citados como hematopoiéticos na aula de sistema circulatório?",
         alt:["Medula óssea, timo, baço e linfonodos","Coração, pulmões, fígado e rins","Rins, pâncreas e estômago","Apenas a medula óssea"],
         c:0, exp:"A aula apresenta o sistema circulatório como a soma do cardiovascular e do linfático, e lista esses cinco como órgãos hematopoiéticos — o que já antecipa a ponte com o conteúdo do sistema linfático."}
      ]}
  ]});
