# PROMPT COMPLETO — Landing Page Vitão IB
### Réplica fiel do modelo Evoryia (comunidade.evoryia.com)

---

## OBJETIVO
Criar uma Landing Page de captura (lead capture) para **Vitão IB**,
trader profissional e Introducing Broker, cujo CTA é entrar num grupo
no WhatsApp. A estrutura, o design e o fluxo de seções devem replicar
fielmente o site de referência: **https://www.comunidade.evoryia.com/**

---

## STACK
- **React** (functional components + hooks)
- CSS via `<style>` tag injetada + inline styles
- Google Fonts via `@import`
- Zero dependências externas (sem Tailwind, sem bibliotecas de UI)

---

## PALETA DE CORES

| Token       | Valor       | Uso                               |
|-------------|-------------|-----------------------------------|
| BG_MAIN     | `#0A0A0F`   | Fundo principal (quase preto)     |
| BG_DARK     | `#0D0D13`   | Fundo seções alternadas           |
| GREEN       | `#25D366`   | Botões WhatsApp, badges de lucro  |
| GREEN_DARK  | `#1EAA52`   | Hover dos botões verdes           |
| PURPLE      | `#7B3FE4`   | Accent, logo, dots, live card     |
| TEXT_MUTED  | `#A0A8BE`   | Parágrafos e labels secundários   |

---

## TIPOGRAFIA
- **Plus Jakarta Sans** (Google Fonts) — weights 400, 500, 600, 700, 800
- `@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');`
- **NUNCA** usar Inter, Roboto, Arial ou fontes do sistema

---

## ANIMAÇÕES GLOBAIS (CSS keyframes)

```css
@keyframes floatA  { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-9px)} }
@keyframes floatB  { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-7px)} }
@keyframes fadeIn  { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
@keyframes livePulse { 0%,100%{box-shadow:0 0 0 0 rgba(239,68,68,.4)} 70%{box-shadow:0 0 0 10px rgba(239,68,68,0)} }
```

- `.fa0` a `.fa4` → `animation: fadeIn .8s Xs ease both` (delays 0.05s, 0.2, 0.35, 0.5, 0.65)
- `.flt` → `floatA 4s ease-in-out infinite`
- `.flt2` → `floatB 5s 1.2s ease-in-out infinite`
- `.livepulse` → `livePulse 1.8s ease-in-out infinite`

---

## COMPONENTES REUTILIZÁVEIS

### `<WaButton>` — Botão WhatsApp
- Pill arredondado (`border-radius: 999px`)
- Background: `#25D366` → hover `#1EAA52`
- Ícone SVG WhatsApp (path completo inline, fill="currentColor")
- Props: `label`, `size` ("md" = 12px/24px padding | "lg" = 16px/36px padding), `style`
- `box-shadow` verde em hover + `transform: scale(1.03)` + transition 0.2s

### `<TickerCard>` — Floating price ticker
- Fundo: `rgba(20,20,36,0.88)` + `backdrop-filter: blur(12px)`
- Border: `1px solid rgba(255,255,255,0.08)` + `border-radius: 12px`
- Conteúdo: ícone circular (verde ou vermelho conforme bullish) + symbol + price + change%
- Props: `symbol`, `value`, `change`, `positive`, `style`

### `<ProfitBadge>` — Badge de lucro flutuante
- Fundo verde translúcido: `rgba(37,211,102,0.15)`
- Border: `1px solid rgba(37,211,102,0.3)`, radius 8px
- Texto verde `#25D366` bold com prefixo "▲"
- Props: `value`, `style`

### `<AvatarGroup>` — Prova social com avatares
- 5 círculos sobrepostos (marginLeft: -10 a partir do 2°)
- Cores: `["#7B3FE4","#25D366","#FF6B35","#3B82F6","#EC4899"]`
- Iniciais: `["LF","AC","RM","JC","MS"]`
- Badge verde com contagem + texto muted "Só falta você!"

### `<VideoCard>` — Card de depoimento em vídeo (carousel)
- Aspect-ratio 9/16, border-radius 16px
- Ativo: `scale(1.05)`, opacidade 1, borda roxa, player controls visíveis
- Inativo: `scale(0.9)`, opacidade 0.45, sem controls
- Props: `active`, `name`, `idx`

---

## ESTRUTURA DE SEÇÕES — RÉPLICA EXATA EVORYIA

---

### [1] NAVBAR — Fixa, centralizada

```
┌──────────────────────────────────────────────────────┐
│              [LOGO ICON]  VITÃO IB                   │
└──────────────────────────────────────────────────────┘
```

- `position: fixed; top: 0; z-index: 999`
- Fundo transparente; ao scrollar `>40px`:
  - `background: rgba(10,10,15,0.92)`
  - `backdrop-filter: blur(16px)`
  - `border-bottom: 1px solid rgba(255,255,255,0.05)`
- Logo: ícone SVG tipo "tridente" (linhas conectadas, cor `#7B3FE4`) dentro de box `border-radius:10px` com fundo/borda roxo suave + texto "VITÃO IB" 9px uppercase abaixo
- Centralizado horizontalmente

---

### [2] HERO — Full-width, 100vh, split layout

```
┌─────────────────────────────────────────────────────┐
│  [COPY LEFT]                [FOTO/VISUAL RIGHT]     │
│                                                     │
│  🇧🇷 Maior comunidade trader no Brasil!             │
│                                                     │
│  Lucre diariamente                  [TickerCard]   │
│  copiando minhas                    [TickerCard]   │
│  operações                                         │
│                                   [ProfitBadge]   │
│  Live de Alavancagem garantida,   [ProfitBadge]   │
│  mais de 100 mil reais em bancas  [ProfitBadge]   │
│  alavancadas por semana.                           │
│                                                    │
│  [🟢 Entre no meu grupo]                          │
│                                                    │
│  [👤👤👤👤👤] 5.149  Só falta você!               │
└─────────────────────────────────────────────────────┘
```

**Background:**
- Base: `linear-gradient(140deg, #07070F, #0E0B1F, #080816)`
- SVG de gráfico (candles + trend line) posicionado à direita, opacity 0.3
  - Candles bullish/bearish alternados, ~28 unidades a partir de x=580
  - Linha de tendência ascendente do fundo ao topo da SVG
  - Área preenchida com gradient roxo translúcido abaixo da linha
  - Linhas de grid horizontais pontilhadas, opacity 0.04
- Overlay: `linear-gradient(90deg, rgba(10,10,15,1) 0%, ..., rgba(10,10,15,0.15) 75%)`

**Copy (esquerda, max-width 500px):**
- Badge: `display:inline-flex`, background branco 7%, border branco 12%, border-radius 20px, padding 6px 16px — com emoji 🇧🇷 + texto
- H1: fontWeight 800, `clamp(34px,4.5vw,56px)`, lineHeight 1.1, letterSpacing -0.025em; "operações" em `#25D366`
- Subheadline: fontWeight 400, `clamp(14px,1.4vw,16px)`, color `#A0A8BE`, maxWidth 400px
- Botão `<WaButton size="lg" label="Entre no meu grupo" />`
- `<AvatarGroup count="5.149" />`

**Animações hero:** Cada elemento com classe `.fa0` a `.fa4` (staggered fadeIn)

**Visual (direita, ~42vw):**
- Caixa com aspect implícito `clamp(380px,58vh,600px)` altura
- Fundo: `linear-gradient(170deg, #1A1535, #0D0B1A)`, border roxa, glow radial interno
- Placeholder com emoji 🧑‍💼 grande + nome + cargo (substituir por foto real do Vitão)
- 2x `<TickerCard>` com classe `.flt` e `.flt2` posicionados `position:absolute` top-right
- 3x `<ProfitBadge>` com classes `.flt` e `.flt2`, posicionados absoluto no canto direito/esquerdo inferior

---

### [3] ABOUT — "Vou te ajudar a faturar todos os dias"

```
┌──────────────────────────────────────────────────────┐
│  [FOTO 3/4]    Vou te ajudar a                      │
│                faturar todos os dias                 │
│                                                      │
│                Vitão é trader responsável...         │
│                                                      │
│                [🟢 Entre no meu grupo]               │
└──────────────────────────────────────────────────────┘
```

- `background: #0D0D13`, padding 100px 40px
- Layout flex row, gap clamp(40px,8vw,96px), flex-wrap
- **Foto (esquerda):** `clamp(240px,32vw,360px)` × aspect-ratio 3/4, border-radius 18px, fundo escuro com glow roxo interno, borda roxa suave. Placeholder com emoji + nome.
- **Copy (direita):**
  - H2: fontWeight 800, `clamp(26px,3.2vw,42px)`, duas linhas
  - 2 parágrafos de copy descrevendo a metodologia do Vitão (price action, gestão de risco, tempo real)
  - `<WaButton label="Entre no meu grupo" />`

---

### [4] SOCIAL PROOF — "São milhares de vidas transformadas"

```
┌──────────────────────────────────────────────────────┐
│          5.0  ★ ★ ★ ★ ★                             │
│                                                      │
│     São milhares de vidas                           │
│          transformadas                              │
│                                                      │
│   Operações comentadas, histórico público...        │
│                                                      │
│  [card]  [CARD ATIVO]  [card]                       │
│            ● ○ ○ ○ ○                               │
└──────────────────────────────────────────────────────┘
```

- `background: #0A0A0F`, padding 100px 40px
- Estrelas: "5.0" + 5× ★ cor `#F59E0B` (âmbar)
- H2: fontWeight 800, `clamp(26px,4vw,44px)`, centralizado
- Subtítulo: muted, max-width 600px, centralizado, margin-bottom 52px
- **Carousel de vídeos:**
  - 5 `<VideoCard>` renderizados (apenas os 3 mais próximos do slide atual visíveis: idx ± 1)
  - Card ativo: `scale(1.05)`, opacidade 1, borda roxa 2px, controls de vídeo visíveis
  - Cards laterais: `scale(0.9)`, opacidade 0.45, sem controls
  - Setas `‹` e `›` posicionadas absolutas nos lados, 34×34px, fundo branco 7%
  - Auto-avançar a cada 4000ms com `useEffect` + `setInterval`
- **Dots:** 5 indicadores, ativo = `width:22px`, `background:#7B3FE4`; inativo = `width:8px`, branco 18%

---

### [5] LIVE CTA CARD — "Hoje tem live!"

```
┌──────────────────────────────────────────────────────┐
│                                                      │
│        ┌─────────────────────────┐                  │
│        │       [🔴 LIVE]        │                  │
│        │    Hoje tem live!      │                  │
│        │  Clique no botão...    │                  │
│        │  [🟢 Entre no meu grupo│                  │
│        └─────────────────────────┘                  │
└──────────────────────────────────────────────────────┘
```

- `background: #0D0D13`, padding 60px 40px 100px
- Card centralizado, max-width 560px:
  - `background: linear-gradient(140deg, #180E3A, #271660, #180E3A)`
  - `border: 1px solid rgba(123,63,228,0.35)`, border-radius 20px, padding 52px 40px
  - Glow radial roxo no topo do card (pseudoelemento ou div absolute)
- **Ícone LIVE:**
  - Círculo 54px, background `#EF4444`, border-radius 50%
  - Conteúdo: texto "LIVE" (8px, uppercase, tracking .12em) + ícone play SVG 14px
  - `animation: livePulse 1.8s ease-in-out infinite` (pulso de box-shadow vermelho)
- H2: fontWeight 800, centralizado, branco
- Parágrafo: rgba(255,255,255,0.6), centralizado, max-width 320px
- `<WaButton size="lg" label="Entre no meu grupo" />`

---

### [6] FOOTER

```
┌──────────────────────────────────────────────────────┐
│  [LOGO]    2026 Copyright © Vitão IB...    [espaço] │
└──────────────────────────────────────────────────────┘
```

- `background: #0D0D13`, border-top rgba branca, padding 28px 40px
- Flex row, space-between, flex-wrap, gap 16px
- Logo pequeno (32px box + label 8px) à esquerda
- Copyright centrado: "2026 Copyright © Vitão IB Todos os direitos reservados."  
  - fontFamily Plus Jakarta Sans, fontSize 12px, color rgba(255,255,255,0.28)
- Div vazia (40px) à direita para balancear

---

## RESPONSIVIDADE

```css
@media(max-width: 768px) {
  .hero-grid  { flex-direction: column !important; }
  .about-grid { flex-direction: column !important; }
  .hero-right { display: none !important; }  /* esconder visual direito no mobile */
}
```

- Todos os títulos com `clamp(min, vw, max)` 
- `flex-wrap: wrap` nas seções em grid
- Padding horizontal reduzido no mobile via clamp

---

## LINK CTA (TODOS OS BOTÕES)
```
https://chat.whatsapp.com/LR1XkXae3KP0AzM9PCY1QC
```
Todos os `<WaButton>` devem ter `href` apontando para este link,
com `target="_blank" rel="noopener noreferrer"`.

---

## INSTRUÇÕES PARA SUBSTITUIÇÃO POR ASSETS REAIS

1. **Foto do Vitão:**
   - Substituir os placeholders (div com emoji 🧑‍💼) por `<img src="URL_DA_FOTO" />`
   - Na seção Hero (direita): foto recortada/PNG sem fundo, enquadramento vertical
   - Na seção About (esquerda): foto com fundo (pode ser com fundo), aspect-ratio 3/4

2. **Vídeos de depoimento:**
   - Nos `<VideoCard>`, substituir o mock por `<video src="URL" controls />` com poster
   - Manter o overlay de player controls visível apenas no card ativo

3. **Logo:**
   - Substituir SVG do tridente pelo logo real do Vitão IB (PNG ou SVG)

4. **Copy personalizado:**
   - Adaptar o texto dos parágrafos com informações reais da metodologia do Vitão
   - Números de prova social (5.149 traders) devem ser atualizados periodicamente

---

## NOTAS DE PRODUÇÃO
- Adicionar `<meta>` tags OG para preview no WhatsApp (importante pois o CTA é WA)
- Google Analytics / Meta Pixel antes do `</head>`
- Hospedar com HTTPS obrigatório
- Testar velocidade de carregamento: sem fontes pesadas, sem imagens não otimizadas
- Disclaimer legal não obrigatório neste modelo (igual à Evoryia), mas recomendado no rodapé
