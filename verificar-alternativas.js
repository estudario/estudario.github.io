/* Verificador de alternativas do EstudAI
   Mede o quanto a estratégia "marcar a mais longa sem ler" acerta.
   O acaso acerta 25%. Acima de 35% a matéria reprova.

   uso:  node verificar-alternativas.js            (todas as matérias)
         node verificar-alternativas.js Biologia   (filtra pelo nome)
*/
const fs = require("fs");
const LIMITE = 35;
const filtro = (process.argv[2] || "").toLowerCase();

global.QUIZ = { catalogo: [], registrar(o){ this.catalogo.push(o); } };
fs.readdirSync("dados").filter(f=>f.endsWith(".js"))
  .forEach(f => eval(fs.readFileSync("dados/"+f, "utf8")));

let reprovadas = 0, totalGeral = 0, acertoGeral = 0;

for(const m of QUIZ.catalogo){
  const nome = m.materia + " " + m.ano;
  if(filtro && !nome.toLowerCase().includes(filtro)) continue;

  let acerta = 0, total = 0;
  const suspeitas = [];

  for(const r of m.rodadas){
    for(const q of r.questoes){
      if(!q.alt) continue;
      total++;
      const comp = q.alt.map(a => a.length);
      const maior = Math.max(...comp);
      if(comp.indexOf(maior) === q.c) acerta++;

      const outros = comp.filter((_, i) => i !== q.c);
      const media = outros.reduce((a,b)=>a+b, 0) / outros.length;
      const excesso = Math.round(100 * (comp[q.c] - media) / media);
      const sobra = comp[q.c] - media;
      if(excesso > 20 && sobra > 10) suspeitas.push({ rodada: r.id, excesso, p: q.p });
    }
  }

  totalGeral += total; acertoGeral += acerta;
  const taxa = Math.round(100 * acerta / total);
  const passa = taxa <= LIMITE;
  if(!passa) reprovadas++;

  console.log(`${passa ? "ok  " : "RUIM"}  ${String(taxa).padStart(3)}%  ${nome.padEnd(36)} (${acerta}/${total})`);
  if(filtro){
    suspeitas.sort((a,b)=>b.excesso-a.excesso)
      .forEach(s => console.log(`        +${s.excesso}%  ${s.rodada}  ${s.p.slice(0,70)}`));
  }
}

console.log("");
console.log(`Geral: marcar a mais longa acerta ${Math.round(100*acertoGeral/totalGeral)}% (acaso = 25%, limite = ${LIMITE}%)`);
if(reprovadas) console.log(`${reprovadas} matéria(s) acima do limite.`);
process.exit(reprovadas ? 1 : 0);
