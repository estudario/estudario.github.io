# EstudAI — sistema de estudo

Plataforma de treino por **ano → matéria → bimestre**, com perfil, senha,
convites aprovados pela Luiza e progresso salvo. Um motor só; cada matéria é um
arquivo separado.

## Estrutura

```
estudario/
├── index.html                      ← o motor (telas, quiz, convites, pontuação)
└── dados/
    └── 4ano-ciencias-3bim.js       ← uma matéria = um arquivo
```

Para acrescentar uma matéria: arquivo novo em `dados/` + uma linha no
`index.html` (`<script src="dados/8ano-matematica-3bim.js"></script>`). Ela
aparece sozinha na estante do ano correspondente.

## Acesso e convites — como funciona o controle da Luiza

- **Ninguém cria perfil sem código de convite.**
- A Luiza abre o **Painel de convites** (link no rodapé da tela de entrada),
  digita a senha do painel, escreve o **nome da amiga** e escolhe o **ano** —
  o sistema gera um código de 5 letras e uma mensagem pronta para enviar.
- O código só funciona para **aquele nome naquele ano**, em qualquer aparelho.
  Se a amiga passar o código adiante, não serve para outro nome.
- Cada perfil enxerga **apenas as matérias do próprio ano** (4º vê 4º, 8º vê 8º).
- As filhas criam os próprios perfis usando a **senha do painel** no campo de


### Configurar antes de publicar (topo do script em `index.html`)

```js
const ADMIN = { nome:"Luiza", senha:"mafra-2026" };   // TROQUE a senha
const SEGREDO = "estudario-vX7q2";                    // pode deixar como está
```

Trocar a `senha` não invalida códigos já dados. Trocar o `SEGREDO` invalida
todos os códigos já distribuídos (útil se um dia o controle escapar).

## Por que não é "só um quiz"

1. **Resumo antes da rodada** — cada rodada abre com os pontos que caem nela,
   para estudar antes de responder.
2. **Explicação sempre** — no acerto, o conceito é reforçado; no erro, o sistema
   diz por que a alternativa escolhida está errada e por que a certa é a certa.
3. **Revisão dos meus erros** — toda questão errada entra numa lista pessoal por
   matéria. Ela sai da lista quando a criança acerta **duas vezes**. O cartão
   "Revisão dos meus erros" aparece no menu da matéria enquanto houver pendência.
   É repetição espaçada, o método com mais evidência para memorização.
4. **Teste final em modo prova** — sem dica no meio, gabarito comentado no fim.
5. **XP, níveis, medalhas e conquistas** para dar motivo de voltar todo dia.

## Como publicar de graça

| Onde | Como |
|---|---|
| **Netlify Drop** (`app.netlify.com/drop`) | arrasta a pasta `estudario`; link em 30 s |
| **GitHub Pages** | sobe a pasta num repositório e liga o Pages |
| **Cloudflare Pages / Vercel** | conecta no GitHub e publica sozinho a cada mudança |

No celular: abrir o link → Compartilhar → **Adicionar à Tela de Início**.

## Onde o progresso fica guardado

No aparelho (navegador). Funciona offline e sem custo; não sincroniza entre
aparelhos; limpar dados do navegador apaga. A senha de 4 números do perfil
separa irmãs e amigas, não é segurança de verdade. Próximo passo, quando
precisar de sincronização ou ranking entre amigas: **Supabase** (grátis) —
basta trocar as funções `Armazem.ler`/`Armazem.gravar`.

## Avisos de adulto (para a fase "vender para as amigas")

- Enquanto tudo fica no aparelho de cada criança, não há coleta de dados.
  Perfis num servidor de vocês = dados de menores = LGPD (consentimento dos pais).
- As questões são autorais, escritas a partir do conteúdo estudado. Para virar
  produto pago, manter tudo autoral e não reproduzir texto/imagem dos livros.

## Material recebido e próximos passos

- **Matérias do 4º ano (3º bimestre) já no ar**: Ciências, Matemática, Português, História, Geografia e Inglês — 284 questões comentadas no total, todas com resumo de estudo por rodada.
  por matéria).
- **8º ano (3º bimestre) no ar**: Matemática (com questões de resposta digitada), Ciências, Português, História e Geografia — 137 questões. Próximo lote: 4º bimestre dos dois anos.
  matéria**, com rodadas, resumos e questões comentadas — uma ou duas matérias
  por mensagem, para manter a qualidade das explicações.
- Quando chegar o material do **8º ano** e o do **4º bimestre**: mesmo fluxo.
  Nada do que já existe é tocado, e o progresso das meninas não se perde.
