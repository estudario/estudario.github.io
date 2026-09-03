/* Física — 8º ano — 3º bimestre
   Movimento, repouso, referencial e eletricidade. */
QUIZ.registrar({
  id:"8ano-fisica-3bim", ano:"8º ano", materia:"Física", emoji:"⚛️",
  bimestre:"3º bimestre", tema:"Movimento, referencial e eletricidade",
  qtdAquecimento:8, qtdTeste:10,
  rodadas:[
{ id:"r1", emoji:"🚄", nome:"Rodada 1 — Movimento, referencial e eletricidade",
  desc:"Repouso e movimento dependem de quem olha — mais o circuito do show de luzes.",
  resumo:[
    "MOVIMENTO e REPOUSO são RELATIVOS: dependem do REFERENCIAL adotado. Uma pessoa sentada num trem em movimento está em REPOUSO em relação ao trem e em MOVIMENTO em relação às árvores.",
    "Vale a recíproca: se um corpo A está em movimento em relação a um corpo B, então B está em movimento em relação a A.",
    "Um mesmo corpo pode estar em repouso e em movimento AO MESMO TEMPO — basta mudar o referencial. Até o SOL está em movimento (em relação a outros pontos da galáxia): não há repouso absoluto.",
    "Um corpo extenso pode ter 3 tipos de movimento: TRANSLAÇÃO, ROTAÇÃO e MISTO (translação + rotação, como a roda de um carro andando).",
    "TRANSLAÇÃO: todos os pontos do corpo descrevem trajetórias paralelas entre si — não precisam ser retas — com a mesma variação de posição para todos os pontos.",
    "No show de luzes do livro: aparelho RESISTIVO = os filamentos aquecidos da máquina de fumaça (energia elétrica → térmica); MOTOR ELÉTRICO = as bombas de ar que sopram a fumaça; SISTEMA DE INFORMAÇÃO E COMUNICAÇÃO = o sistema de som e os painéis. O circuito do painel usa uma fonte de 12 V.",
    "Na covid-19, a inflamação dos pulmões dificultava a chegada do oxigênio — por isso os respiradores (ventilação mecânica) eram necessários nos casos graves."
  ],
  questoes:[
    {p:"Uma pessoa sentada na poltrona de um trem em movimento está em repouso ou em movimento?", alt:["Depende do referencial: em repouso em relação ao trem, em movimento em relação às árvores","Sempre em repouso","Sempre em movimento","Nem uma coisa nem outra"], c:0, exp:"É a grande ideia do módulo: movimento e repouso são relativos ao referencial adotado."},
    {p:"Da janela do trem, as árvores parecem 'passar correndo'. É correto dizer que as árvores estão em movimento?", alt:["Sim, em relação ao trem — assim como o trem está em movimento em relação às árvores","Não, árvores nunca se movem","Sim, elas andam de verdade pelo chão","Só se houver vento"], c:0, exp:"Tomando o trem como referencial, as árvores se movem em relação a ele. Tomando o chão, é o trem que se move. Os dois enunciados são corretos."},
    {p:"Complete a conclusão do livro: se um corpo A está em movimento em relação a um corpo B, então...", alt:["B está em movimento em relação a A","B está sempre em repouso","A está em repouso em relação a B","nada se pode afirmar"], c:0, exp:"A relação é recíproca: o movimento de um em relação ao outro vale nos dois sentidos."},
    {p:"O Sol está em movimento ou em repouso?", alt:["Também está em movimento — depende do referencial; não há repouso absoluto","Em repouso absoluto, parado no centro de tudo","Em repouso porque é muito grande","Não se sabe"], c:0, exp:"Os planetas giram em torno do Sol, mas o Sol também se move em relação a outros corpos. Nenhum objeto está em repouso absoluto."},
    {p:"Algo pode estar em repouso e em movimento ao mesmo tempo?", alt:["Sim, em relação a referenciais diferentes","Nunca","Só objetos muito rápidos","Só no espaço"], c:0, exp:"Você agora está em repouso em relação à sua cadeira e em movimento em relação ao Sol. Tudo depende de quem observa."},
    {p:"Quais são os três tipos de movimento de um corpo extenso?", alt:["Translação, rotação e misto","Rápido, lento e parado","Reto, curvo e quebrado","Subida, descida e plano"], c:0, exp:"Translação (todos os pontos em trajetórias paralelas), rotação (giro) e misto (os dois juntos)."},
    {p:"O que caracteriza o movimento de translação?", alt:["Todos os pontos do corpo descrevem trajetórias paralelas, com a mesma variação de posição","O corpo gira em torno de si","O corpo fica parado","O corpo se divide em partes"], c:0, exp:"E atenção ao detalhe do livro: as trajetórias não precisam ser em linha reta — precisam ser paralelas entre si."},
    {p:"A roda de um carro andando pela estrada tem qual tipo de movimento?", alt:["Misto: translação (avança com o carro) + rotação (gira em torno do eixo)","Só translação","Só rotação","Nenhum movimento"], c:0, exp:"A roda avança junto com o carro e gira ao mesmo tempo — combinação de translação e rotação."},
    {p:"No show de luzes, qual equipamento é um exemplo de aparelho RESISTIVO?", alt:["Os filamentos aquecidos da máquina de fumaça","O telão de LED","O microfone","A caixa de som"], c:0, exp:"Aparelho resistivo transforma energia elétrica em térmica: os filamentos esquentam para produzir a neblina."},
    {p:"E qual é o exemplo de MOTOR elétrico no show?", alt:["As bombas de ar que sopram a fumaça","O filamento aquecido","O cabo de energia","O ingresso eletrônico"], c:0, exp:"Motor elétrico transforma energia elétrica em movimento — como as bombas/sopradores da máquina de fumaça."},
    {p:"Qual é a tensão da fonte no circuito do painel de iluminação do exercício?", alt:["12 V","220 V","1,5 V","1.000 V"], c:0, exp:"O esquema do livro mostra uma fonte de 12 V alimentando o pequeno circuito do painel."},
    {p:"Na covid-19, por que a inflamação dos pulmões podia exigir respiradores?", alt:["Porque dificultava a respiração e a chegada de oxigênio, e a ventilação mecânica ajuda o corpo nesse trabalho","Porque o vírus congelava o ar","Para deixar o paciente dormir melhor","Porque respirar cansa os médicos"], c:0, exp:"Com os pulmões inflamados, o corpo não dá conta de oxigenar o sangue; a ventilação mecânica (não invasiva ou, nos casos severos, com intubação) faz esse trabalho junto."}
  ]}
,
{ id:"rx", emoji:"⚡", nome:"Rodada relâmpago — referenciais em todo lugar",
  desc:"Situações novas para testar movimento, repouso e os tipos de movimento.",
  resumo:["Revisão: movimento e repouso dependem do REFERENCIAL; não existe repouso absoluto.", "Translação (trajetórias paralelas), rotação (giro) e misto (os dois).", "No circuito: aparelho resistivo esquenta; motor gera movimento."],
  questoes:[
    {p:"Dois carros andam lado a lado na estrada, na mesma velocidade. Um motorista olha o outro. O que ele vê?", alt:["O outro carro parado em relação a ele (repouso relativo)", "O outro carro voando", "O outro carro em alta velocidade se afastando", "Nada, é impossível"], c:0, exp:"Mesma velocidade e direção = sem mudança de posição entre eles: um está em repouso em relação ao outro, mesmo os dois correndo em relação à estrada."},
    {p:"O piloto sentado dentro de um avião em voo está em movimento em relação a quê?", alt:["Às cidades lá embaixo", "À sua poltrona", "Ao painel do avião", "Ao copiloto ao lado"], c:0, exp:"Em relação ao solo, ele viaja a centenas de km/h; em relação à poltrona, ao painel e ao copiloto, está em repouso."},
    {p:"Uma bola de futebol chutada rolando pelo gramado tem movimento:", alt:["Misto: avança (translação) enquanto gira (rotação)", "Só de rotação", "Só de translação", "Nenhum"], c:0, exp:"Como a roda do carro: a bola avança e gira ao mesmo tempo — movimento misto."},
    {p:"O elevador subindo do térreo ao 10º andar, sem girar, tem movimento de:", alt:["Translação", "Rotação", "Misto", "Repouso absoluto"], c:0, exp:"Todos os pontos do elevador sobem juntos, em trajetórias paralelas — translação pura."},
    {p:"Um ventilador ligado, preso no teto, tem as pás em movimento de:", alt:["Rotação", "Translação", "Misto", "Queda livre"], c:0, exp:"As pás giram em torno do eixo sem sair do lugar — rotação."},
    {p:"Por que NÃO existe repouso absoluto?", alt:["Porque todo corpo está em movimento em relação a algum referencial", "Porque tudo está sempre parado", "Porque o repouso é proibido", "Porque os referenciais não existem"], c:0, exp:"Você está 'parado' na cadeira — mas a Terra gira, orbita o Sol, e o Sol viaja pela galáxia. Sempre há um referencial em que você se move."},
    {p:"Num chuveiro elétrico, a energia elétrica vira principalmente:", alt:["Energia térmica (é um aparelho resistivo)", "Movimento", "Luz", "Som"], c:0, exp:"Como os filamentos da máquina de fumaça: resistência esquenta — energia elétrica vira calor."},
    {p:"Num liquidificador, a energia elétrica vira principalmente:", alt:["Movimento (tem um motor elétrico)", "Só calor", "Só luz", "Nada"], c:0, exp:"O motor gira as lâminas: energia elétrica virando movimento, como as bombas de ar do show."}
  ]}
]});
