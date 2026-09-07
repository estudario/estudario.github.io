QUIZ.registrar({
  id:"usf-bio-2sem-microbiologia", ano:"2º semestre", materia:"Microbiologia", emoji:"🦠",
  escola:"USF — Biomedicina",
  bimestre:"2026 · 2º semestre", tema:"Bactérias, fungos, vírus e metabolismo microbiano",
  qtdAquecimento:8, qtdTeste:12,
  rodadas:[

    { id:"r1", emoji:"🧫", nome:"Rodada 1 — Bactérias: estrutura celular",
      desc:"Membrana, citoplasma, DNA e os apêndices da célula procariótica.",
      resumo:[
        "Bactérias são unicelulares e procariontes: não têm membrana nuclear envolvendo o material genético.",
        "A membrana plasmática é ~60% proteína e ~40% bicamada fosfolipídica. Suas cinco funções: permeabilidade seletiva, produção de energia, biossíntese, secreção e receptores de transdução de sinal.",
        "Como não possuem mitocôndrias, a cadeia transportadora de elétrons e a fosforilação oxidativa acontecem na própria membrana plasmática.",
        "Nucleoide: região onde fica o cromossomo bacteriano — DNA único, circular, dupla fita. Plasmídeo: DNA circular extracromossômico, dispensável, mas que confere vantagens (resistência a antibióticos, toxinas).",
        "Ribossomo procariótico é 70S (subunidades 50S + 30S); o eucariótico é 80S (60S + 40S).",
        "Apêndices e envoltórios: cápsula (resistência à fagocitose), flagelo (motilidade), fímbrias (aderência), pilus sexual (transferência de DNA), filamento axial (espiroquetas), endósporo (resistência)."
      ],
      questoes:[
        {p:"O que define uma célula como procariótica, caso das bactérias?",
         alt:["A ausência de membrana nuclear envolvendo o material genético","A ausência total de ribossomos","O fato de ser sempre unicelular","A presença de parede celular"],
         c:0, exp:"Procarionte significa literalmente 'antes do núcleo': o DNA fica disperso no citoplasma, numa região chamada nucleoide, sem carioteca separando-o do resto da célula.",
         err:{1:"Ribossomos existem em procariontes e eucariontes — a diferença está no tamanho (70S contra 80S), não na presença.",2:"Ser unicelular não define procarionte: leveduras são unicelulares e eucarióticas.",3:"Parede celular também aparece em fungos e vegetais, que são eucariontes."}},

        {p:"Nas bactérias, onde ocorrem o transporte de elétrons e a fosforilação oxidativa?",
         alt:["Na membrana plasmática","Nas mitocôndrias","No nucleoide","Nos plasmídeos"],
         c:0, exp:"Bactérias não possuem mitocôndrias. A membrana plasmática carrega os citocromos e as enzimas da cadeia transportadora, exercendo função análoga à da membrana interna mitocondrial das células eucarióticas.",
         err:{1:"Mitocôndrias são organelas exclusivas de eucariontes — a célula bacteriana não as tem."}},

        {p:"Qual é a composição aproximada da membrana plasmática bacteriana?",
         alt:["60% de proteínas imersas em uma bicamada fosfolipídica que responde por 40%","90% de fosfolipídios e 10% de proteínas","Apenas peptideoglicano","Glucanas, mananas e quitina"],
         c:0, exp:"A proporção invertida em relação ao senso comum é justamente o que chama atenção: a membrana bacteriana é mais proteica (60%) do que lipídica (40%), o que se explica pelo número de funções que ela acumula.",
         err:{2:"Peptideoglicano é o componente da parede celular, não da membrana.",3:"Glucanas, mananas e quitina compõem a parede celular dos fungos."}},

        {p:"Uma bactéria adquire resistência a um antibiótico por meio de um DNA circular de fita dupla que não faz parte do cromossomo bacteriano. Trata-se de:",
         alt:["Plasmídeo","Nucleoide","Endósporo","Corpo de inclusão"],
         c:0, exp:"Plasmídeos são moléculas circulares extracromossômicas. Não são cruciais para a sobrevivência da bactéria, mas frequentemente conferem vantagens seletivas: resistência a antibióticos, tolerância a metais pesados, produção de toxinas e síntese de enzimas.",
         err:{1:"O nucleoide é a região do cromossomo bacteriano principal, que carrega as informações essenciais.",2:"Endósporo é estrutura de resistência a condições ambientais desfavoráveis, não de resistência a fármacos.",3:"Corpos de inclusão servem como reserva de nutrientes."}},

        {p:"Qual é o coeficiente de sedimentação do ribossomo procariótico e de suas subunidades?",
         alt:["70S, formado por 50S e 30S","80S, formado por 60S e 40S","70S, formado por 40S e 30S","80S, formado por 50S e 30S"],
         c:0, exp:"O ribossomo bacteriano é 70S, com subunidades 50S e 30S. Repare que o coeficiente de sedimentação não é uma soma aritmética — 50 + 30 não dá 70, porque S mede velocidade de sedimentação, não massa.",
         err:{1:"80S (60S + 40S) é o ribossomo eucariótico, encontrado em fungos, por exemplo."}},

        {p:"Qual estrutura externa à parede celular ajuda a bactéria a escapar da fagocitose pelas células de defesa do hospedeiro?",
         alt:["Cápsula","Fímbria","Flagelo","Pilus sexual"],
         c:0, exp:"Além de aumentar a resistência à fagocitose, a cápsula funciona como reservatório de água e nutrientes, favorece a aderência, aumenta a capacidade invasiva e a resistência a biocidas.",
         err:{1:"Fímbrias servem para aderência a superfícies e a células de mamíferos, não para evasão imune.",2:"O flagelo confere motilidade.",3:"O pilus sexual conecta duas bactérias para transferência de material genético."}},

        {p:"Qual é a diferença funcional entre flagelos e fímbrias nas bactérias?",
         alt:["Flagelos promovem motilidade; fímbrias servem para aderência","Flagelos servem para aderência; fímbrias promovem motilidade","Ambos promovem motilidade, mudando apenas o tamanho","Ambos servem para transferir DNA entre bactérias"],
         c:0, exp:"O flagelo tem estrutura basal, gancho e um longo filamento externo que gira e move a célula. As fímbrias são filamentos proteicos mais curtos e muito mais numerosos, comuns em Gram-negativas, e não participam da motilidade — sua função é grudar.",
         err:{3:"A transferência de DNA por contato direto é papel do pilus sexual, na conjugação."}},

        {p:"Uma bactéria apresenta um tufo de flagelos em cada uma de suas extremidades. Como esse arranjo é classificado?",
         alt:["Anfitríquio","Monotríquio","Lofotríquio","Peritríquio"],
         c:0, exp:"Os quatro arranjos: monotríquio (um único flagelo polar), lofotríquio (dois ou mais flagelos num só polo), anfitríquio (um tufo em cada extremidade) e peritríquio (flagelos distribuídos por toda a célula).",
         err:{2:"Lofotríquio também é um tufo, mas concentrado em apenas um dos polos.",3:"Peritríquio espalha os flagelos por toda a superfície, sem concentração polar."}},

        {p:"Qual estrutura promove a motilidade específica das espiroquetas, enrolando-se em espiral ao redor do corpo da bactéria?",
         alt:["Filamento axial","Fímbria","Cápsula","Endósporo"],
         c:0, exp:"O filamento axial é característico das espiroquetas — bactérias espiraladas de corpo flexível. Ele se enrola em torno do corpo celular e produz o movimento em saca-rolha típico desse grupo.",
         err:{1:"Fímbrias são estruturas de aderência, e não de movimento."}},

        {p:"A teoria endossimbiótica, proposta por Lynn Margulis, se apoia em várias semelhanças entre mitocôndrias e bactérias. Qual das evidências abaixo NÃO faz parte desse conjunto?",
         alt:["Mitocôndrias possuem parede celular de peptideoglicano","Mitocôndrias possuem DNA circular próprio","Mitocôndrias possuem dupla membrana","Os ribossomos mitocondriais se assemelham aos de procariontes"],
         c:0, exp:"Mitocôndrias não têm parede de peptideoglicano. As evidências reais são a dupla membrana, o genoma circular próprio, a capacidade de autoduplicação, ribossomos do tipo procariótico, a sensibilidade a certos antibióticos e o tamanho comparável ao de bactérias.",
         err:{1:"O DNA circular é justamente uma das evidências mais fortes da teoria.",3:"Certos antibióticos afetarem a síntese proteica mitocondrial reforça o parentesco procariótico."}},

        {p:"Qual é a função das junções de Bayer na célula bacteriana?",
         alt:["Permear para o lado externo moléculas sintetizadas junto à membrana, como peptideoglicanos e LPS","Ancorar o flagelo à parede celular","Transferir plasmídeos entre duas bactérias","Armazenar nutrientes no citoplasma"],
         c:0, exp:"As enzimas que sintetizam lipídios de membrana e macromoléculas de estruturas externas (peptideoglicanos, lipopolissacarídeos, polissacarídeos extracelulares) ficam ligadas à membrana plasmática. Depois de sintetizadas, essas moléculas atravessam para fora por canais chamados junções de Bayer."},

        {p:"Por que a parede celular é indispensável à maioria das bactérias?",
         alt:["Porque a pressão osmótica interna é muito maior que a do meio externo, e sem a parede a célula estouraria","Porque é nela que ocorre a síntese proteica","Porque ela armazena o material genético","Porque é ela que confere motilidade"],
         c:0, exp:"Além de manter a forma da bactéria (coco, bacilo, espiral) e participar da divisão celular pela ação das autolisinas, a parede contém a pressão osmótica interna, muitas vezes superior à do meio.",
         err:{1:"A síntese proteica ocorre nos ribossomos, no citoplasma.",2:"O material genético fica no nucleoide."}}
      ]},

    { id:"r2", emoji:"🔬", nome:"Rodada 2 — Morfologia e coloração de Gram",
      desc:"Formas, arranjos, nomenclatura binomial e a técnica de Hans Christian Gram.",
      resumo:[
        "Nomenclatura binomial (Linnaeus, 1735): gênero com inicial maiúscula, espécie em minúscula, ambos em itálico ou sublinhado. O gênero pode ser abreviado após a primeira menção; a espécie nunca.",
        "Formas: cocos (redondos), bacilos (bastões) e espiraladas. Arranjos de cocos: diplococos (pares), estreptococos (cadeias), estafilococos (cachos).",
        "Espiraladas de corpo rígido: vibriões (vírgula) e espirilos (espiral). De corpo flexível: espiroquetas.",
        "Parede Gram-positiva: 70 a 75% de peptideoglicano, com ácidos teicoicos e lipoteicoicos.",
        "Parede Gram-negativa: poucas camadas de peptideoglicano, sem ácidos teicoicos, com membrana externa, porinas, OMPs, espaço periplasmático e LPS atuando como endotoxina.",
        "Sequência de Gram: cristal violeta (corante primário) → lugol (mordente) → álcool-cetona (descorante) → fucsina (contracorante). Gram-positivas retêm o violeta; Gram-negativas perdem e coram de rosa pela fucsina."
      ],
      questoes:[
        {p:"Qual conjunto abaixo aplica corretamente a nomenclatura binomial?",
         alt:["Yersinia pestis, Treponema pallidum, Neisseria gonorrhoeae","Escherichia Coli, Bacillus Subtilis, Staphylococcus Aureus","salmonella typhi, vibrio cholerae, clostridium botulinum","helicobacter Pylori, shigella Flexneri, enterococcus Faecalis"],
         c:0, exp:"A regra é gênero com inicial maiúscula e espécie inteiramente em minúscula, ambos em itálico. Só a primeira opção respeita as duas metades da regra.",
         err:{1:"O epíteto específico foi escrito com inicial maiúscula — 'Coli', 'Subtilis', 'Aureus' — o que é incorreto.",2:"Aqui o gênero ficou em minúscula; ele precisa começar com maiúscula.",3:"Esta opção inverte as duas regras ao mesmo tempo: gênero minúsculo e espécie maiúscula."}},

        {p:"Um microbiologista isolou Staphylococcus aureus, Staphylococcus epidermidis, Enterococcus faecalis, Enterococcus faecium, Klebsiella pneumoniae, Klebsiella oxytoca e Streptococcus pyogenes. Quantos gêneros e quantas espécies estão representados?",
         alt:["4 gêneros e 7 espécies","5 gêneros e 6 espécies","7 gêneros e 7 espécies","4 gêneros e 3 espécies"],
         c:0, exp:"Os gêneros distintos são Staphylococcus, Enterococcus, Klebsiella e Streptococcus — quatro. Já as espécies são todas diferentes entre si, totalizando sete.",
         err:{2:"Vários nomes repetem o gênero: há dois Staphylococcus, dois Enterococcus e dois Klebsiella.",3:"O número de espécies corresponde ao total de binômios distintos, que é sete."}},

        {p:"Bactérias esféricas agrupadas em cachos recebem que nome?",
         alt:["Estafilococos","Estreptococos","Diplococos","Estreptobacilos"],
         c:0, exp:"Quando cocos se dividem e as células permanecem unidas, o arranjo resultante define o nome: aos pares são diplococos, em cadeias são estreptococos e em cachos são estafilococos.",
         err:{1:"Estreptococos formam cadeias, como um colar.",2:"Diplococos aparecem aos pares.",3:"Estreptobacilos são bacilos em cadeia, e não cocos."}},

        {p:"Uma bactéria espiralada de corpo rígido e formato de vírgula é classificada como:",
         alt:["Vibrião","Espiroqueta","Espirilo","Cocobacilo"],
         c:0, exp:"Entre as espiraladas, as de corpo rígido se dividem em vibriões (formato de vírgula) e espirilos (espiral completa). As de corpo flexível são as espiroquetas.",
         err:{1:"Espiroquetas têm corpo flexível e se movem por filamentos axiais.",2:"Espirilo é a espiral rígida completa, não a vírgula."}},

        {p:"Qual característica é exclusiva da parede celular das bactérias Gram-positivas?",
         alt:["Ácidos teicoicos e lipoteicoicos, com 70 a 75% de peptideoglicano","Presença de membrana externa com porinas","Lipopolissacarídeo atuando como endotoxina","Espaço periplasmático amplo"],
         c:0, exp:"A parede Gram-positiva é espessa e majoritariamente formada por peptideoglicano, com ácidos teicoicos e lipoteicoicos que facilitam a entrada e saída de cátions, a adesão e a regulação das autolisinas.",
         err:{1:"A membrana externa é característica das Gram-negativas.",2:"O LPS é componente da membrana externa das Gram-negativas.",3:"O espaço periplasmático é típico da arquitetura Gram-negativa."}},

        {p:"Na coloração de Gram, qual é a função do lugol?",
         alt:["Atuar como mordente, fixando o corante primário nas células","Descorar as bactérias Gram-negativas","Corar de rosa as bactérias que perderam o violeta","Dissolver a parede celular antes da coloração"],
         c:0, exp:"A sequência é cristal violeta (corante primário), lugol (mordente que fixa o violeta), álcool-cetona (descorante) e fucsina (contracorante).",
         err:{1:"Quem descora é o álcool-cetona.",2:"O contracorante rosa é a fucsina.",3:"Nenhum reagente da técnica dissolve a parede — é justamente a diferença de parede que produz o resultado."}},

        {p:"Por que as bactérias Gram-negativas perdem o cristal violeta durante a etapa de descoloração?",
         alt:["Porque o álcool dissolve os lipídios da membrana externa e o corante escapa","Porque elas não chegam a absorver o cristal violeta","Porque a fucsina desloca o violeta por competição","Porque a camada espessa de peptideoglicano se contrai e expulsa o corante"],
         c:0, exp:"Todas as bactérias absorvem o cristal violeta na primeira etapa. A diferença aparece na descoloração: nas Gram-negativas o álcool dissolve os lipídios da membrana externa e abre caminho para o corante sair; nas Gram-positivas ele desidrata a camada espessa de peptideoglicano, contrai os poros e prende o violeta dentro.",
         err:{1:"Na etapa do cristal violeta todas as bactérias se coram igualmente.",3:"Esse é exatamente o mecanismo das Gram-positivas, que faz o corante ficar retido."}},

        {p:"Ao final de uma coloração de Gram bem executada, de que cor aparecem as bactérias Gram-negativas?",
         alt:["Rosa ou avermelhadas, pela fucsina","Roxas, pelo cristal violeta","Incolores","Azuis, pelo lugol"],
         c:0, exp:"As Gram-negativas perdem o violeta na descoloração e ficam sem cor, até serem reveladas pela fucsina, o contracorante — daí a tonalidade rosada.",
         err:{1:"Roxo é o resultado das Gram-positivas, que retêm o cristal violeta."}},

        {p:"Quem desenvolveu a técnica de coloração que leva seu nome, e a partir de qual material?",
         alt:["Hans Christian Gram, estudando tecido pulmonar de pacientes mortos por pneumonia","Carolus Linnaeus, estudando plantas medicinais","Alexander Fleming, estudando culturas contaminadas por fungos","Lynn Margulis, estudando mitocôndrias"],
         c:0, exp:"O fisiologista dinamarquês Hans Christian Gram desenvolveu o método em Berlim, em 1883, publicando-o em 1884. Seu primeiro estudo foi com tecido pulmonar de pacientes que haviam morrido de pneumonia.",
         err:{1:"Linnaeus criou o sistema binomial de nomenclatura, em 1735.",2:"Fleming descobriu a penicilina, a partir do Penicillium, em 1928.",3:"Margulis propôs a teoria endossimbiótica."}},

        {p:"Por que as bactérias precisam ser coradas para observação ao microscópio óptico?",
         alt:["Porque são transparentes, o que dificulta ver forma e arranjo","Porque se movem rápido demais para serem fotografadas","Porque são pequenas demais para o microscópio óptico","Porque a luz do microscópio as destruiria sem o corante"],
         c:0, exp:"A transparência das células é o obstáculo. O corante cria contraste e permite distinguir tanto a morfologia quanto o tipo de arranjo — e, no caso de Gram, ainda classifica a bactéria pelo tipo de parede.",
         err:{2:"Bactérias são perfeitamente visíveis ao microscópio óptico; o problema é o contraste, não a resolução."}},

        {p:"Qual é o significado do LPS presente na parede das Gram-negativas?",
         alt:["É o lipopolissacarídeo, que atua como endotoxina","É uma enzima que degrada antibióticos","É o principal componente da parede das Gram-positivas","É a proteína que forma o flagelo"],
         c:0, exp:"O lipopolissacarídeo compõe a membrana externa das Gram-negativas e funciona como endotoxina — o que ajuda a explicar por que infecções por esse grupo podem desencadear respostas inflamatórias intensas.",
         err:{2:"Nas Gram-positivas o componente dominante é o peptideoglicano, com ácidos teicoicos."}},

        {p:"Qual material NÃO faz parte da lista necessária para executar uma coloração de Gram?",
         alt:["Microscópio eletrônico de transmissão","Alça bacteriológica","Bico de Bunsen","Lâminas de vidro limpas"],
         c:0, exp:"A coloração de Gram é lida em microscópio óptico. O microscópio eletrônico de transmissão é usado para observar estruturas muito menores, como partículas virais, e não faz parte da técnica.",
         err:{1:"A alça bacteriológica é usada para manipular as colônias.",2:"O bico de Bunsen flamba a alça e a lâmina."}}
      ]},

    { id:"r3", emoji:"🍄", nome:"Rodada 3 — Fungos",
      desc:"Leveduras e filamentosos, parede, ergosterol, reprodução e importância.",
      resumo:[
        "Fungos são eucariontes, unicelulares (leveduras) ou pluricelulares (filamentosos, bolores, cogumelos). Desde 1969 formam o reino Fungi próprio.",
        "Parede celular: glucanas e mananas, com menor quantidade de quitina, proteínas e lipídios — protege contra choques osmóticos.",
        "Membrana contém ergosterol, ausente nas bactérias e equivalente ao colesterol animal. É o alvo dos antifúngicos com toxicidade seletiva.",
        "Colônias leveduriformes são pastosas ou cremosas; filamentosas são algodonosas, aveludadas ou pulverulentas, formadas por hifas septadas ou cenocíticas (não septadas).",
        "Reprodução assexuada: brotamento, esporulação e fragmentação de hifas — sem variabilidade genética. Sexuada: plasmogamia, cariogamia e meiose.",
        "Teleomorfos têm as duas fases de reprodução; anamorfos só a assexuada.",
        "Preferências ambientais: pH próximo de 5, tolerância a alta pressão osmótica e baixa umidade, menos nitrogênio que bactérias e capacidade de metabolizar lignina.",
        "Quase todos os filamentosos são aeróbios; a maioria das leveduras é anaeróbia facultativa."
      ],
      questoes:[
        {p:"Qual componente da membrana das células fúngicas está ausente nas bactérias e é o alvo da maioria dos antifúngicos?",
         alt:["Ergosterol","Colesterol","Peptideoglicano","Ácido teicoico"],
         c:0, exp:"O ergosterol ocupa nos fungos o papel que o colesterol tem nos animais. Como não existe em células bacterianas nem humanas, fármacos que bloqueiam sua síntese atingem o fungo com toxicidade seletiva — a base da terapia antifúngica moderna.",
         err:{1:"Colesterol é o esterol das membranas animais, não das fúngicas.",2:"Peptideoglicano é componente da parede bacteriana.",3:"Ácidos teicoicos são exclusivos de bactérias Gram-positivas."}},

        {p:"De que é composta, principalmente, a parede celular dos fungos?",
         alt:["Glucanas e mananas, com menor quantidade de quitina","Peptideoglicano","Celulose e lignina","Lipopolissacarídeo"],
         c:0, exp:"A parede fúngica é rígida e protege a célula contra choques osmóticos. Sua composição predominante são glucanas e mananas, com quitina, proteínas e lipídios em menor quantidade.",
         err:{1:"Peptideoglicano é bacteriano.",2:"Celulose e lignina compõem a parede vegetal — a lignina, aliás, é justamente o que muitos fungos conseguem degradar.",3:"LPS pertence às Gram-negativas."}},

        {p:"Uma célula de levedura duplica seu núcleo e forma uma projeção que se destaca como célula-filha. Esse processo é:",
         alt:["Brotamento","Esporulação","Plasmogamia","Fissão binária"],
         c:0, exp:"O brotamento é uma das formas de reprodução assexuada dos fungos: envolve um único progenitor e não há mistura de material genético, de modo que as descendentes são geneticamente idênticas. Uma única levedura pode produzir mais de 24 células-filhas por brotamento.",
         err:{1:"Na esporulação a célula desenvolve estruturas reprodutivas (esporos) que caem no substrato.",2:"Plasmogamia é a primeira etapa da reprodução sexuada.",3:"Fissão binária é o mecanismo de divisão das bactérias."}},

        {p:"Coloque em ordem as três etapas da reprodução sexuada dos fungos:",
         alt:["Plasmogamia, cariogamia e meiose","Cariogamia, plasmogamia e mitose","Meiose, plasmogamia e cariogamia","Brotamento, esporulação e fragmentação"],
         c:0, exp:"Primeiro a plasmogamia: um núcleo haploide da célula doadora (+) penetra no citoplasma da receptora (−). Depois a cariogamia: os núcleos se fundem num núcleo zigótico diploide. Por fim a meiose, que origina esporos sexuados haploides, alguns deles recombinantes.",
         err:{1:"A fusão de citoplasmas precede a fusão de núcleos, e o processo termina em meiose, não em mitose.",3:"As três alternativas listadas aqui são formas de reprodução assexuada."}},

        {p:"Algumas leveduras produzem brotos que não se separam, formando uma pequena cadeia de células. Como essa estrutura é chamada?",
         alt:["Pseudo-hifa","Micélio","Esporangióforo","Conídio"],
         c:0, exp:"A pseudo-hifa é uma cadeia de brotos que permaneceram unidos — lembra uma hifa verdadeira sem sê-la, o que explica o prefixo.",
         err:{1:"Micélio é o conjunto entrelaçado de hifas verdadeiras.",2:"Esporangióforo é a hifa especializada que sustenta o esporângio.",3:"Conídio é um tipo de esporo assexuado."}},

        {p:"Um fungo apresenta hifas cenocíticas e esporos assexuados do tipo esporangiósporo. A que grupo ele pertence?",
         alt:["Zigomicetos","Ascomicetos","Basidiomicetos","Leveduras"],
         c:0, exp:"Zigomicetos têm hifas cenocíticas (não septadas), esporangiósporos como esporos assexuados e zigósporos como sexuados. O representante clássico é Rhizopus spp., o mofo preto do pão, causador da mucormicose.",
         err:{1:"Ascomicetos têm hifas septadas, conídios e ascósporos — o gênero Aspergillus é o exemplo típico.",2:"Basidiomicetos têm hifas septadas, artroconídios e basidiósporos, com Cryptococcus spp. como representante."}},

        {p:"Qual gênero de fungo é representante dos basidiomicetos, coloniza aves e solos e causa infecções sistêmicas?",
         alt:["Cryptococcus","Aspergillus","Rhizopus","Penicillium"],
         c:0, exp:"Cryptococcus spp. é o representante basidiomiceto citado na aula, associado a aves e solos e responsável pela criptococose, uma infecção sistêmica.",
         err:{1:"Aspergillus é ascomiceto, fungo de ambiente e patógeno da aspergilose.",2:"Rhizopus é zigomiceto, o mofo preto do pão.",3:"Penicillium é a origem da penicilina."}},

        {p:"Por que os fungos conseguem crescer em substratos improváveis, como paredes de banheiro, couro de sapatos e jornais velhos?",
         alt:["Toleram pH ácido, alta pressão osmótica e baixa umidade, e exigem pouco nitrogênio","Realizam fotossíntese e dispensam matéria orgânica","São todos anaeróbios estritos","Possuem parede de peptideoglicano, muito resistente"],
         c:0, exp:"Os fungos são quimio-heterotróficos e absorvem nutrientes em vez de ingeri-los. Crescem melhor em pH próximo de 5 — ácido demais para a maioria das bactérias comuns —, resistem a concentrações elevadas de sal ou açúcar, sobrevivem com pouca umidade, precisam de menos nitrogênio que as bactérias e ainda metabolizam carboidratos complexos como a lignina.",
         err:{1:"Fungos não fazem fotossíntese; são heterotróficos.",2:"Quase todos os filamentosos são aeróbios, e a maioria das leveduras é anaeróbia facultativa."}},

        {p:"Um fungo que apresenta apenas a fase assexuada de reprodução é chamado de:",
         alt:["Anamorfo","Teleomorfo","Cenocítico","Septado"],
         c:0, exp:"A maioria dos fungos tem as duas fases, assexuada e sexuada, e por isso é chamada de teleomorfo. Os que apresentam somente a fase assexuada são os anamorfos.",
         err:{1:"Teleomorfo é justamente o oposto: possui ambas as fases.",2:"Cenocítico e septado descrevem o tipo de hifa, não o modo de reprodução."}},

        {p:"Em 1928, Alexander Fleming desenvolveu a penicilina a partir de qual gênero de fungo?",
         alt:["Penicillium","Aspergillus","Trichoderma","Tolypocladium"],
         c:0, exp:"A penicilina veio do gênero Penicillium — especificamente Penicillium chrysogenum — e se tornou peça central no combate a infecções bacterianas.",
         err:{1:"Aspergillus niger produz ácido cítrico e A. terreus produz estatinas.",2:"Trichoderma é usado na produção comercial de celulase.",3:"Tolypocladium inflatum produz a ciclosporina, usada contra rejeição em transplantes."}},

        {p:"A levedura Saccharomyces cerevisiae é usada na produção de pão e vinho e, geneticamente modificada, também para produzir:",
         alt:["A vacina contra hepatite B","A ciclosporina","O antibiótico penicilina","O antitumoral taxol"],
         c:0, exp:"S. cerevisiae é modificada geneticamente para produzir uma variedade de proteínas úteis, entre elas a vacina contra hepatite B.",
         err:{1:"A ciclosporina vem de Tolypocladium inflatum.",2:"A penicilina vem de Penicillium chrysogenum.",3:"O taxol é produzido por teixos e também pelo fungo Taxomyces."}},

        {p:"Qual é a diferença entre hifas septadas e cenocíticas?",
         alt:["As septadas têm divisões transversais separando as células; as cenocíticas são contínuas, sem septos","As septadas são unicelulares; as cenocíticas são pluricelulares","As septadas pertencem às leveduras; as cenocíticas aos cogumelos","As septadas se reproduzem só sexuadamente; as cenocíticas só assexuadamente"],
         c:0, exp:"Hifas são os tubos multicelulares que formam as colônias filamentosas. Podem ser septadas, com paredes transversais dividindo as células, ou cenocíticas (não septadas), formando um tubo contínuo com vários núcleos.",
         err:{2:"Leveduras não formam hifas verdadeiras — no máximo pseudo-hifas."}}
      ]},

    { id:"r4", emoji:"🦠", nome:"Rodada 4 — Vírus",
      desc:"Estrutura, morfologia, ciclos lítico e lisogênico e multiplicação em células animais.",
      resumo:[
        "Vírus não têm metabolismo próprio, dependem da maquinaria do hospedeiro e só replicam o material genético dentro da célula. Por outro lado, possuem ácido nucleico e causam infecção.",
        "Tamanho de aproximadamente 20 a 1000 nm; só visíveis ao microscópio eletrônico de transmissão.",
        "Vírion é a partícula viral completa e infectante: ácido nucleico (DNA ou RNA) mais capsídeo, formado por subunidades chamadas capsômeros. Alguns têm envelope de lipídios, proteínas e carboidratos, às vezes com espículas.",
        "Genoma com cerca de 250.000 pares de base, contra aproximadamente 5 milhões de uma bactéria.",
        "Morfologia pela arquitetura do capsídeo: helicoidal, poliédrico (icosaedro, 20 faces e 12 vértices) e complexo (bacteriófago).",
        "Bacteriófagos: ciclo lítico (adsorção, penetração, biossíntese, maturação e liberação com lise) e ciclo lisogênico (DNA circulariza, recombina-se com o DNA bacteriano e permanece latente como profago).",
        "Em células animais são seis fases: adsorção, penetração, desnudamento, biossíntese, maturação e liberação. Entrada por pinocitose ou fusão; saída por brotamento (envelopados) ou ruptura da membrana (não envelopados)."
      ],
      questoes:[
        {p:"Qual argumento é usado para sustentar que vírus não são seres vivos?",
         alt:["Não apresentam metabolismo próprio e dependem da maquinaria do hospedeiro","Não possuem ácido nucleico","Não são capazes de causar infecção","São grandes demais para serem células"],
         c:0, exp:"Os argumentos contra: não têm metabolismo próprio, dependem inteiramente da célula hospedeira para sintetizar seus produtos e o material genético só começa a replicar depois de entrar na célula. A favor: possuem ácido nucleico e causam infecção — o que mantém a discussão aberta.",
         err:{1:"Todo vírus possui ácido nucleico, DNA ou RNA. Esse é justamente um argumento a favor de considerá-lo vivo.",2:"A capacidade de causar infecção é característica dos vírus."}},

        {p:"O que é um vírion?",
         alt:["A partícula viral completa, com capacidade de causar infecção","O envelope lipídico que reveste alguns vírus","A subunidade proteica que forma o capsídeo","O vírus já integrado ao DNA da célula hospedeira"],
         c:0, exp:"O vírion é a partícula completa e infectante, composta por um ácido nucleico — DNA ou RNA — e pelo capsídeo, o envoltório proteico que protege o genoma e serve de veículo de transmissão entre células.",
         err:{2:"A subunidade proteica do capsídeo é o capsômero.",3:"O vírus integrado ao cromossomo bacteriano é o profago."}},

        {p:"Qual é a função principal do capsídeo?",
         alt:["Proteger o ácido nucleico e servir de veículo para a transmissão entre células","Fornecer energia para a replicação viral","Produzir as enzimas necessárias à biossíntese","Fundir-se com a membrana da célula hospedeira"],
         c:0, exp:"O capsídeo envolve o ácido nucleico, protege-o da degradação durante o transporte e a infecção e constitui a maior parte da massa viral. Diferenças na estrutura do envoltório proteico servem inclusive para identificar os diferentes tipos de vírus.",
         err:{1:"Vírus não produzem energia; a produção de ATP é fornecida pela célula hospedeira.",3:"A fusão com a membrana é papel do envelope, presente apenas em alguns vírus."}},

        {p:"Um vírus com capsídeo em forma de icosaedro, com 20 faces triangulares e 12 vértices, é classificado como:",
         alt:["Poliédrico","Helicoidal","Complexo","Envelopado"],
         c:0, exp:"A classificação morfológica se baseia na arquitetura do capsídeo. Os poliédricos têm forma de icosaedro, com 20 faces triangulares e 12 vértices; os capsômeros de cada face formam um triângulo equilátero.",
         err:{1:"Helicoidais são bastões longos, rígidos ou flexíveis, como o vírus Ebola.",2:"Complexos têm estruturas adicionais aderidas ao capsídeo, como os bacteriófagos.",3:"Ter envelope não é um critério morfológico de capsídeo."}},

        {p:"Por que um vírus só consegue infectar determinados tipos de célula?",
         alt:["Porque a ligação depende de receptores específicos na superfície da célula que se encaixem na superfície viral","Porque só entra em células que estejam se dividindo","Porque só infecta células com parede celular","Porque depende do tamanho da célula hospedeira"],
         c:0, exp:"A escolha do hospedeiro depende de ligações específicas determinadas pelas características químicas da superfície do vírus e da célula. Cada tipo viral só infecta células que possuam o receptor que encaixa perfeitamente com sua superfície.",
         err:{2:"Vírus infectam tanto células com parede, como as bacterianas, quanto animais, que não têm parede."}},

        {p:"No ciclo lítico dos bacteriófagos, qual enzima destrói parte da parede celular na penetração e depois provoca a lise na liberação?",
         alt:["Lisozima","Transcriptase reversa","RNA polimerase","Autolisina"],
         c:0, exp:"A cauda do fago produz lisozima, que abre a parede para a inserção do DNA viral. Ao final do ciclo, a lisozima leva à lise da bactéria e libera as novas partículas virais, capazes de infectar as células vizinhas.",
         err:{1:"A transcriptase reversa atua em vírus de RNA, produzindo DNA a partir do RNA.",3:"Autolisinas são enzimas bacterianas ligadas à divisão celular."}},

        {p:"Qual é a diferença fundamental entre os ciclos lítico e lisogênico dos bacteriófagos?",
         alt:["No lítico a célula hospedeira sofre lise; no lisogênico ela permanece viva","No lítico o vírus não replica; no lisogênico sim","No lítico o DNA viral circulariza; no lisogênico permanece linear","No lítico o vírus infecta animais; no lisogênico, bactérias"],
         c:0, exp:"No ciclo lítico a multiplicação viral termina com a lise da bactéria. No lisogênico o fago incorpora seu DNA ao da célula hospedeira e permanece latente na forma de profago, sem matá-la — embora possa induzir a lise mais tarde.",
         err:{2:"O DNA do fago circulariza nos dois casos; é depois disso que ele decide entre um ciclo e outro.",3:"Bacteriófagos infectam bactérias em ambos os ciclos."}},

        {p:"No ciclo lisogênico, como se chama o DNA do fago depois de recombinado com o cromossomo bacteriano?",
         alt:["Profago","Plasmídeo","Capsômero","Vírion"],
         c:0, exp:"Recombinado com o DNA bacteriano, o fago passa a ser chamado de profago e permanece em forma latente, replicando junto com o cromossomo da bactéria a cada divisão. Ocasionalmente pode ser removido por recombinação gênica e reiniciar o ciclo lítico.",
         err:{1:"Plasmídeo é um DNA bacteriano extracromossômico, de origem não viral."}},

        {p:"Quais são, em ordem, as seis fases da multiplicação viral em células animais?",
         alt:["Adsorção, penetração, desnudamento, biossíntese, maturação e liberação","Adsorção, penetração, biossíntese, maturação e liberação","Desnudamento, adsorção, penetração, biossíntese, maturação e liberação","Adsorção, desnudamento, penetração, maturação, biossíntese e liberação"],
         c:0, exp:"O desnudamento — separação do ácido nucleico viral do capsídeo — é a etapa que distingue o ciclo animal do ciclo dos bacteriófagos, no qual o capsídeo já fica do lado de fora da bactéria.",
         err:{1:"Faltou o desnudamento, etapa presente no ciclo em células animais.",2:"A adsorção vem primeiro: o vírus precisa se ligar antes de qualquer outra coisa."}},

        {p:"HIV, influenza e vírus da dengue entram na célula hospedeira principalmente por qual mecanismo?",
         alt:["Fusão do envelope viral com a membrana plasmática","Pinocitose","Injeção do material genético, ficando o capsídeo do lado de fora","Transporte ativo pela bomba de sódio e potássio"],
         c:0, exp:"Vírus envelopados, como HIV, influenza, hepatite C, dengue, herpes e zika, entram por fusão: o envelope se funde com a membrana da célula e libera o capsídeo no citoplasma.",
         err:{1:"A pinocitose é a via de adenovírus, poliovírus, rotavírus e enterovírus, entre outros.",2:"A injeção do DNA com o capsídeo permanecendo fora é o mecanismo dos bacteriófagos."}},

        {p:"Vírus que saem da célula hospedeira por brotamento têm qual característica em comum?",
         alt:["Possuem envelope lipídico derivado da membrana da célula hospedeira","São todos vírus de DNA","Não possuem capsídeo","Provocam sempre a morte imediata da célula"],
         c:0, exp:"Na liberação por brotamento, a membrana plasmática da célula hospedeira forma o envelope do vírus — é por isso que os vírus que saem assim são os envelopados, como influenza, HCV, HIV, dengue, rubéola e varicela-zóster.",
         err:{2:"Todo vírus possui capsídeo.",3:"A morte da célula é característica da liberação por ruptura da membrana, típica dos não envelopados como poliovírus e raiva."}},

        {p:"Em um vírus de RNA de fita simples de sentido positivo, o que acontece com o genoma ao entrar na célula?",
         alt:["Funciona diretamente como mRNA e entra na fase de tradução","Precisa da transcriptase reversa para gerar DNA antes de qualquer coisa","É integrado ao DNA do hospedeiro obrigatoriamente","É degradado e reconstruído pela célula"],
         c:0, exp:"O RNA de sentido positivo já é a fita molde e funciona diretamente como mRNA, seguindo direto para a tradução. Já o RNA de sentido negativo, por ser a fita complementar, exige a ação da transcriptase reversa para produzir a fita que entrará na transcrição e tradução.",
         err:{1:"Essa é a rota do RNA de sentido negativo, não do positivo."}}
      ]},

    { id:"r5", emoji:"⚡", nome:"Rodada 5 — Metabolismo, fisiologia e genética bacteriana",
      desc:"Anabolismo e catabolismo, meios de cultura, curva de crescimento e troca de genes.",
      resumo:[
        "Anabolismo é síntese, com reações de desidratação e endergônicas (consomem energia). Catabolismo é quebra, com reações de hidrólise e exergônicas (liberam energia).",
        "ATP é a moeda energética: adenosina (adenina + ribose) com três grupos fosfato.",
        "A glicose é o carboidrato preferencial. Respiração e fermentação começam pelo mesmo estágio, a glicólise, que oxida a glicose de 6 carbonos em duas moléculas de 3 carbonos (piruvato).",
        "Respiração aeróbica usa O₂ como aceptor final de elétrons e rende 38 ATP. A anaeróbica usa nitritos, nitratos, sulfatos ou carbonatos, rendendo menos — por isso anaeróbios crescem mais devagar.",
        "Quanto à temperatura ótima: psicrófilas (12 a 17 °C), mesófilas (28 a 37 °C) e termófilas (57 a 87 °C). As de interesse médico concentram-se nas mesófilas.",
        "Quanto ao oxigênio: aeróbias estritas, facultativas, aerotolerantes e anaeróbias estritas.",
        "Meios de cultura: enriquecidos (nutrientes extras para fastidiosos, como ágar sangue), seletivos (inibidores que impedem certos micro-organismos, como MacConkey) e diferenciais (permitem distinguir os que crescem, como o manitol).",
        "Reprodução por fissão binária. Curva de crescimento: fase lag (adaptação, sem divisão), log (divisão em velocidade máxima), estacionária (velocidade diminui por limitação de nutrientes) e declínio ou morte.",
        "Transferência gênica: transformação (DNA livre no meio), transdução (via bacteriófago) e conjugação (contato direto)."
      ],
      questoes:[
        {p:"Reações de síntese proteica, que consomem mais energia do que produzem, pertencem a qual categoria?",
         alt:["Anabolismo, com reações endergônicas","Catabolismo, com reações exergônicas","Anabolismo, com reações exergônicas","Catabolismo, com reações endergônicas"],
         c:0, exp:"Anabolismo é formação: envolve reações de desidratação e é endergônico, absorvendo energia. Catabolismo é quebra: envolve hidrólise e é exergônico, liberando energia para o trabalho celular.",
         err:{1:"Catabolismo é quebra — respiração celular e fermentação são exemplos.",2:"Anabolismo consome energia; se produzisse mais do que gasta seria exergônico."}},

        {p:"De que é formada a molécula de ATP?",
         alt:["Uma adenina, uma ribose e três grupos fosfato","Uma adenina, uma desoxirribose e dois grupos fosfato","Uma guanina, uma ribose e três grupos fosfato","Duas adeninas e um grupo fosfato"],
         c:0, exp:"ATP significa adenosina trifosfato: a adenosina é a adenina somada à ribose, e a ela se ligam três grupos fosfato. A molécula armazena a energia gerada nas reações catabólicas para depois fornecê-la às anabólicas.",
         err:{1:"A desoxirribose é o açúcar do DNA; o ATP usa ribose. E são três fosfatos, não dois."}},

        {p:"Respiração celular e fermentação têm em comum um estágio inicial. Qual?",
         alt:["A glicólise","O ciclo de Krebs","A cadeia transportadora de elétrons","A fosforilação oxidativa"],
         c:0, exp:"A glicólise é o processo de oxidação da glicose em ácido pirúvico: quebra a molécula de 6 carbonos em duas de 3 carbonos. Só depois dela os dois caminhos se separam.",
         err:{1:"O ciclo de Krebs pertence apenas à via respiratória.",2:"A cadeia transportadora e a fosforilação oxidativa também são exclusivas da respiração."}},

        {p:"Qual é o saldo final de ATP da respiração celular aeróbica por molécula de glicose?",
         alt:["38 ATP","2 ATP","4 ATP","12 ATP"],
         c:0, exp:"A respiração aeróbica, que usa O₂ como aceptor final de elétrons, rende 38 ATP — um saldo muito superior ao da fermentação, o que explica por que a via aeróbica é energeticamente preferida.",
         err:{1:"Um saldo dessa ordem corresponde à fermentação, não à respiração aeróbica."}},

        {p:"O que caracteriza a respiração anaeróbica em bactérias?",
         alt:["Usa uma molécula inorgânica como nitrito, nitrato, sulfato ou carbonato como aceptor final de elétrons","Não produz ATP algum","Dispensa a glicólise","Ocorre apenas em bactérias termófilas"],
         c:0, exp:"Na respiração anaeróbica o aceptor final não é o O₂, e sim outra molécula inorgânica. A produção de ATP é menor que na aeróbica, e por isso micro-organismos anaeróbicos crescem mais lentamente.",
         err:{1:"Ela produz ATP, apenas em menor quantidade.",2:"A glicólise é o ponto de partida comum a todas essas vias."}},

        {p:"Uma bactéria de interesse médico cresce melhor entre 28 °C e 37 °C. Como ela é classificada?",
         alt:["Mesófila","Psicrófila","Termófila","Halófila"],
         c:0, exp:"Mesófilas têm temperatura ótima entre 28 e 37 °C — faixa que inclui a temperatura corporal humana, razão pela qual a maioria das bactérias de interesse médico, veterinário e agronômico está nesse grupo.",
         err:{1:"Psicrófilas preferem entre 12 e 17 °C.",2:"Termófilas crescem entre 57 e 87 °C.",3:"Halófilo se refere à tolerância ao sal, não à temperatura."}},

        {p:"Uma bactéria que se desenvolve tanto na presença quanto na ausência de oxigênio é classificada como:",
         alt:["Aeróbia facultativa","Aeróbia estrita","Aerotolerante","Anaeróbia estrita"],
         c:0, exp:"Facultativa significa que a bactéria consegue usar o oxigênio quando ele está disponível, mas também sobrevive sem ele. Diferente da aerotolerante, que suporta a presença de O₂ apesar de não o utilizar.",
         err:{1:"A aeróbia estrita exige a presença de O₂.",2:"A aerotolerante convive com o O₂, mas não o aproveita metabolicamente.",3:"A anaeróbia estrita não tolera oxigênio."}},

        {p:"O ágar MacConkey contém sais biliares e cristal violeta, que impedem o crescimento de Gram-positivas. Que tipo de meio é esse?",
         alt:["Seletivo","Enriquecido","Diferencial apenas","Meio mínimo"],
         c:0, exp:"Meios seletivos contêm inibidores que tornam inviável o crescimento de certos micro-organismos sem prejudicar o que está sendo pesquisado. O MacConkey também tem propriedades diferenciais, mas o que os sais biliares e o cristal violeta caracterizam é a seletividade.",
         err:{1:"Meios enriquecidos adicionam nutrientes extras, como sangue ou soro, para favorecer micro-organismos fastidiosos.",2:"Um meio diferencial permite distinguir os micro-organismos que crescem nele, e não impedir crescimento."}},

        {p:"O ágar sangue permite diferenciar distintos tipos de hemólise. Que tipo de meio ele exemplifica nessa função?",
         alt:["Diferencial","Seletivo","Mínimo","Inibidor"],
         c:0, exp:"Meios diferenciais permitem a distinção entre os micro-organismos que crescem neles. O ágar sangue é enriquecido pela adição de sangue e, ao mesmo tempo, diferencial pela leitura dos padrões de hemólise.",
         err:{1:"Seletivo é o que inibe o crescimento de certos grupos, como o MacConkey."}},

        {p:"Como se chama o processo de reprodução das bactérias, no qual septos se dirigem da superfície para o interior e dividem a célula em duas filhas?",
         alt:["Fissão binária","Brotamento","Esporulação","Conjugação"],
         c:0, exp:"O crescimento bacteriano se refere ao aumento do número de células, não do seu tamanho. Ele acontece por fissão binária, e o intervalo entre divisões é o tempo de geração de cada espécie.",
         err:{1:"Brotamento é típico das leveduras.",3:"Conjugação é transferência de material genético, não reprodução celular."}},

        {p:"Em qual fase da curva de crescimento bacteriano não ocorre divisão celular, porque as células estão se adaptando ao meio e reparando danos?",
         alt:["Fase lag","Fase log","Fase estacionária","Fase de declínio"],
         c:0, exp:"As quatro fases: lag (adaptação, sem divisão), log ou logarítmica (divisão em velocidade máxima e constante), estacionária (a velocidade diminui até se anular, por limitação de nutrientes) e declínio ou morte (o número de micro-organismos cai até todos morrerem).",
         err:{1:"Na fase log a divisão acontece na velocidade máxima.",2:"Na estacionária a multiplicação diminui gradualmente até cessar."}},

        {p:"Por que a contagem direta ou microscópica de micro-organismos tem limitações?",
         alt:["Não distingue células vivas de mortas e pode omitir células pequenas","Exige incubação de vários dias","Só funciona para bactérias Gram-positivas","Depende de um microscópio eletrônico"],
         c:0, exp:"A contagem direta é rápida e fácil, mas não separa vivas de mortas, pode omitir células pequenas e sofre com a mobilidade celular. Já a contagem de viabilidade mede as unidades formadoras de colônia (UFC), ou seja, apenas as células capazes de se multiplicar."},

        {p:"Uma bactéria incorpora fragmentos de DNA livre dispersos no meio, provenientes da lise de outra célula. Esse mecanismo é a:",
         alt:["Transformação","Transdução","Conjugação","Transcrição"],
         c:0, exp:"Os três mecanismos de transferência gênica em bactérias: transformação (captura de DNA livre no meio), transdução (transferência mediada por bacteriófagos) e conjugação (contato direto entre duas células, via pilus sexual).",
         err:{1:"A transdução exige um bacteriófago como intermediário.",2:"A conjugação depende de contato direto entre bactérias.",3:"Transcrição é a produção de RNA a partir do DNA, não uma troca entre células."}}
      ]}
  ]});
