# 📚 Documentação Técnica - SiteEconomy

## Visão Geral Técnica

Este projeto utiliza a stack moderna do Next.js com as melhores práticas de desenvolvimento web.

## Stack Tecnológico

### Frontend
- **React 18.2** - Biblioteca UI
- **Next.js 14** - Framework React otimizado
- **TypeScript** - Type safety
- **Tailwind CSS 3.4** - Utilidades de CSS
- **PostCSS & Autoprefixer** - Processamento de CSS

### Hospedagem
- **Vercel** - Plataforma otimizada para Next.js

## Estrutura de Arquivos Detalhada

```
site-economy/
│
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   │   └── Componente raiz que envolve toda a aplicação
│   │   │   └── Define <html>, <head>, <body>
│   │   │   └── Inicia metadados para SEO
│   │   │
│   │   ├── page.tsx
│   │   │   └── Página homepage (rota /)
│   │   │   └── Renderiza: header, tabela, cards informativos
│   │   │   └── Página renderizada no servidor (SSR)
│   │   │
│   │   └── globals.css
│   │       └── Estilos globais
│   │       └── @tailwind directives
│   │       └── Resets de CSS
│   │
│   └── components/
│       └── RoleTable.tsx
│           └── Componente Client-side interativo
│           └── Exibe tabela com dados dos papéis
│           └── Estilizado com Tailwind CSS
│           └── Hover effects e responsividade
│
├── public/
│   └── Arquivos estáticos (imagens, ícones, etc.)
│   └── Servidos diretamente sem processamento
│
├── node_modules/
│   └── Dependências instaladas
│
├── .next/
│   └── Build cache do Next.js
│   └── Gerado automaticamente durante build
│
├── Arquivos de Configuração
│   ├── package.json
│   │   └── Dependências e scripts do projeto
│   │   └── Scripts: dev, build, start, lint
│   │
│   ├── tsconfig.json
│   │   └── Configuração TypeScript
│   │   └── Paths alias: @/* → ./src/*
│   │   └── Target: ES2017
│   │
│   ├── tailwind.config.ts
│   │   └── Configuração Tailwind CSS
│   │   └── Cores customizadas
│   │   └── Extensões de tema
│   │
│   ├── next.config.js
│   │   └── Configuração Next.js
│   │   └── Plugins e otimizações
│   │
│   ├── postcss.config.js
│   │   └── Plugins PostCSS
│   │   └── Tailwind CSS e Autoprefixer
│   │
│   ├── vercel.json
│   │   └── Configuração específica Vercel
│   │   └── Build commands, framework
│   │
│   ├── .gitignore
│   │   └── Arquivos ignorados pelo Git
│   │   └── node_modules, .next, .env, etc.
│   │
│   └── .env.example
│       └── Exemplo de variáveis de ambiente
│
└── Arquivos de Documentação
    ├── README.md
    │   └── Documentação principal do projeto
    │
    ├── DEPLOY.md
    │   └── Guia passo-a-passo de deployment
    │
    └── README_TECNICO.md
        └── Este arquivo
```

## Arquitetura de Componentes

### Layout Hierarchy

```
RootLayout (src/app/layout.tsx)
└── <html><head><body>
    └── Page Content (src/app/page.tsx)
        ├── Header Section
        ├── Main Content Section
        │   └── RoleTable Component (src/components/RoleTable.tsx)
        ├── Summary Cards Section
        └── Footer Section
```

## Fluxo de Renderização

### Server-Side Components
- `layout.tsx` - Renderizado no servidor
- `page.tsx` - Renderizado no servidor

### Client-Side Components
- `RoleTable.tsx` - Usa `'use client'`
- Interatividade local (hover effects)

## Tipagem TypeScript

### Principais tipos

```typescript
// Definição de um papel
interface Role {
  papel: string      // Nome do papel
  valor: string      // Fórmula de valor
  descricao: string  // Descrição detalhada
}

// Array de papéis
const roles: Role[] = [...]
```

## Estilização Tailwind CSS

### Sistema de Cores Customizado

```json
{
  "primary": "#0066cc",      // Azul principal
  "secondary": "#00aa66",    // Verde secundário
  "accent": "#ff6600"        // Laranja destaque
}
```

### Classes Tailwind Utilizadas

- Layout: `flex`, `grid`, `max-w-*`, `mx-auto`
- Spacing: `p-*`, `m-*`, `py-*`, `px-*`
- Typography: `text-*`, `font-*`, `leading-*`
- Colors: `bg-*`, `text-*`, `border-*`
- Efeitos: `hover:*`, `shadow`, `rounded-*`
- Responsividade: `sm:`, `md:`, `lg:`

## Performance

### Otimizações Implementadas

1. **Static Generation**
   - Página pré-renderizada em build time
   - Cache automático no Vercel

2. **Code Splitting**
   - Next.js carrega apenas o JS necessário
   - Componentes carregados on-demand

3. **Image Optimization**
   - Usa `next/image` para otimizar imagens
   - Lazy loading automático

4. **CSS Optimization**
   - Tailwind CSS purga CSS não utilizado
   - Resulta em CSS bundle pequeno (~3-5kb)

## SEO

### Metadados

```typescript
export const metadata: Metadata = {
  title: 'SiteEconomy - Sistema de Papéis e Valores',
  description: 'Tabela de papéis, valores e descrições do sistema economy',
}
```

### Open Graph (Pronto para adicionar)

Pode adicionar em `layout.tsx`:

```typescript
metadata: {
  openGraph: {
    title: 'SiteEconomy',
    description: '...',
    url: 'https://site-economy.vercel.app',
    images: [...]
  }
}
```

## Variáveis de Ambiente

### Formato .env

```
# Chave pública (pode conter NEXT_PUBLIC_)
NEXT_PUBLIC_SITE_NAME=SiteEconomy

# Chave privada (servidor apenas)
PRIVATE_API_KEY=xxx
```

## Scripts Available

```bash
npm run dev      # Servidor de desenvolvimento (localhost:3000)
npm run build    # Build para produção
npm start        # Inicia servidor de produção
npm run lint     # Executa linter ESLint
```

## Deployment Workflow

### Local Development
```
npm install → npm run dev → http://localhost:3000
```

### Build Process
```
npm run build → .next/ folder criada → Otimizada para produção
```

### Vercel Deployment
```
git push → Vercel detect Next.js → Executa build → Deploy automático
```

## Security

### Práticas de Segurança

1. ✅ Headers CSP (pode ser adicionado)
2. ✅ TypeScript para type safety
3. ✅ HTTPS enforced no Vercel
4. ✅ Sem dados sensíveis em frontend
5. ✅ .env para secrets

### Adicionar Security Headers

Em `next.config.js`:

```javascript
async headers() {
  return [
    {
      source: '/:path*',
      headers: [
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff'
        },
      ],
    },
  ]
}
```

## Debugging

### Localmente
```bash
npm run dev
# Abra DevTools (F12) no navegador
# Console, Network, Sources tabs
```

### Em Produção (Vercel)
```bash
vercel logs --follow
# Streaming de logs em tempo real
```

## Escalabilidade

### Para adicionar mais funcionalidades

1. **Nova página:**
   - Crie arquivo em `src/app/[nome]/page.tsx`

2. **Novo componente:**
   - Crie arquivo em `src/components/[Nome].tsx`

3. **API Route:**
   - Crie arquivo em `src/app/api/[route]/route.ts`

4. **Database:**
   - Adicione Prisma: `npm install @prisma/client`
   - Configure em `prisma/schema.prisma`

5. **Authentication:**
   - NextAuth.js para autenticação
   - `npm install next-auth`

## Dependências Explicadas

| Pacote | Versão | Propósito |
|--------|--------|----------|
| react | 18.2 | Biblioteca UI |
| react-dom | 18.2 | DOM binding para React |
| next | 14.0 | Framework Next.js |
| tailwindcss | 3.4 | Utilidades CSS |
| postcss | 8.4 | Processador CSS |
| autoprefixer | 10.4 | Prefixos CSS automáticos |
| typescript | 5.3 | Type safety |

## Troubleshooting Técnico

### Build falha localmente
```bash
# Limpar cache
rm -rf .next node_modules
npm install
npm run build
```

### Porta 3000 já em uso
```bash
npm run dev -- -p 3001
# Ou no Windows: netstat -ano | findstr :3000
```

### TypeScript errors
```bash
# Checar tipos
npx tsc --noEmit
```

---

**Última atualização:** 6 de abril de 2026
**Framework:** Next.js 14
**Runtime:** Node.js 18+
