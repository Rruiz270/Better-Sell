# Better-Sell

Plataforma de franquias multi-marca do ecossistema Better Tech (Alumni, TEACH, Sprix, JINSO, Kidpreneurs): landing, dashboard de performance, planejamento, cenários, business plan e modo apresentação. Aplicação de front-end sem back-end/banco.

## Stack

- **Linguagem:** TypeScript (`strict: true`), alias `@/*` → `src/*`.
- **Framework:** Next.js 16.1.0 (App Router) + React 19.2.3.
- **UI:** Radix UI primitives (`@radix-ui/react-*`), padrão shadcn-style (`class-variance-authority`, `clsx`, `tailwind-merge`).
- **Estilo:** Tailwind CSS 3.4 (config em `tailwind.config.ts`) + `tailwindcss-animate`.
- **Animação:** framer-motion.
- **Gráficos:** Recharts 3.x.
- **Estado/dados:** `@tanstack/react-query`.
- **Ícones:** lucide-react.
- **Banco:** nenhum (dados/mocks no front).
- **Deploy:** Vercel (sem `vercel.json`; defaults do Next).
- **Package manager:** npm (`package-lock.json`).

## Comandos

- `npm run dev` — servidor de desenvolvimento (`next dev`, porta 3000).
- `npm run build` — build de produção (`next build`).
- `npm start` — sobe o build (`next start`).
- `npm run lint` — ESLint (`eslint`, config em `eslint.config.mjs`).
- Não há script de testes.

## Estrutura

- `src/app/` — App Router: `layout.tsx`, `page.tsx` (landing), `globals.css` e páginas:
  - `dashboard/`, `planning/`, `scenarios/`, `business-plan/`, `presentation/`.
- `src/components/` — componentes de página; `src/components/ui/` = primitivos estilo shadcn (`button.tsx`, `card.tsx`).
- `src/lib/utils.ts` — helper `cn()` (merge de classes Tailwind).
- `public/` — estáticos.

## Convenções de código

- TypeScript estrito; imports via alias `@/…`.
- UI segue padrão shadcn/Radix: variantes com `class-variance-authority`, merge de classes via `cn()` (`src/lib/utils.ts`). Reaproveitar os primitivos de `src/components/ui` em vez de recriar.
- Componentes React em PascalCase, um por arquivo.
- ESLint flat config (`eslint.config.mjs`) com `eslint-config-next`. Rode `npm run lint` antes de commitar.
- Tailwind 3.4 com `tailwind.config.ts` — cores da marca Better Tech e animações no config.
- Ler o guia de versão em `node_modules/next/dist/docs/` antes de mexer em APIs do Next.

## Variáveis de ambiente

- Nenhuma variável de ambiente é usada atualmente (sem back-end). Se integrar API/analytics, use `.env.local` e configure no dashboard do **Vercel**; variáveis expostas ao cliente exigem prefixo `NEXT_PUBLIC_`. Nunca commitar valores.

## CI/CD & Deploy

- **Deploy:** Vercel com auto-deploy da `main` (defaults Next.js).
- **CI:** não há GitHub Actions. Recomendado workflow mínimo em PR: `npm ci` → `npm run lint` → `npx tsc --noEmit` → `npm run build`.

## Boas práticas de PR

- Branches: `feat/…`, `fix/…`, `chore/…`; commits em **Conventional Commits**.
- PRs pequenos e focados; ≥1 review; **squash merge**; `main` sempre deployável.
- Checklist: build passa, lint limpo, sem segredos no diff, screenshots antes/depois em mudanças de UI (produto muito visual, com modo apresentação).

## Testes

- Não há suíte automatizada. Recomendação mínima proporcional: testes de unidade para `src/lib/utils.ts` e para qualquer lógica de cálculo de comissão/cenários; rodar `npm run build` como smoke test.

## Segurança & dados

- **Nunca** commitar `.env*` ou segredos.
- Dados de franqueados/leads (se adicionados) → **LGPD**: minimizar e proteger. Hoje o app não persiste dados pessoais.
- Revisar dependências periodicamente (`npm audit`).

## Gotchas

- Mistura de versões modernas (Next 16 / React 19) com Tailwind 3.4 (não v4) — atenção ao criar componentes/config: siga o `tailwind.config.ts` existente.
- Componentes Radix exigem `"use client"` quando interativos; verifique o boundary server/client ao adicionar interações.
- Reaproveite `cn()` e os primitivos de `src/components/ui` para manter consistência visual entre landing, dashboard e modo apresentação.
