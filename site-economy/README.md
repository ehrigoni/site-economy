# SiteEconomy

Um site para apresentar o sistema de papéis, valores e descrições do sistema Economy. O site é construído com Next.js e Tailwind CSS, otimizado para hospedagem no Vercel.

## 🚀 Características

- ✨ Interface moderna e responsiva
- 📱 Otimizado para mobile, tablet e desktop
- ⚡ Performance otimizada com Next.js 14
- 🎨 Estilo com Tailwind CSS
- 📊 Tabela interativa com papel, valor e descrição
- 🔍 SEO pronto
- 📦 Fácil de fazer deploy no Vercel

## 📋 Conteúdo

A tabela apresenta três papéis principais:

### 1. **Captador**
- Valor: 4 (3+1) + 4 (3+1) = 8 (6+2)
- Responsável pela captação e entrega de valor ao cliente
- Máximo de 2 turnos (8 horas)

### 2. **Produtor**
- Valor: 4 (+1)→ (6h)
- Custo de trabalho de 25% (1 hora) por turno de 4 horas
- Custeio total de 5 horas

### 3. **Organizador**
- Valor: 8→5 (3 ganho) | 8→6 (2 ganho)
- Organiza produtores em duplas para economia de horas
- Pode gerar economia de 2 a 3 horas

## 🛠️ Instalação Local

### Pré-requisitos
- Node.js 18+ ou superior
- npm, yarn ou pnpm

### Passos

1. **Clone ou navegue até o diretório do projeto:**
```bash
cd site-economy
```

2. **Instale as dependências:**
```bash
npm install
# ou
yarn install
# ou
pnpm install
```

3. **Execute o servidor de desenvolvimento:**
```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

4. **Abra o navegador:**
Visite `http://localhost:3000` para ver o site em ação.

## 📁 Estrutura do Projeto

```
site-economy/
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Layout principal
│   │   ├── page.tsx         # Página inicial
│   │   └── globals.css      # Estilos globais
│   ├── components/
│   │   └── RoleTable.tsx    # Componente da tabela
│   └── ...
├── public/                  # Arquivos estáticos
├── package.json            # Dependências
├── tsconfig.json           # Configuração TypeScript
├── tailwind.config.ts      # Configuração Tailwind CSS
├── next.config.js          # Configuração Next.js
└── README.md              # Este arquivo
```

## 🚀 Deploy no Vercel

### Opção 1: Deploy Automático com Git

1. **Faça login no Vercel:**
   - Acesse [vercel.com](https://vercel.com)
   - Conecte seu GitHub, GitLab ou Bitbucket

2. **Conecte seu repositório:**
   - Clique em "New Project"
   - Selecione o repositório `site-economy`
   - Vercel detectará automaticamente que é um projeto Next.js

3. **Configurações:**
   - Framework: `Next.js`
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Environment Variables: (deixe em branco se não houver)

4. **Deploy:**
   - Clique em "Deploy"
   - Seu site estará ao vivo em poucos segundos!

### Opção 2: Deploy com CLI do Vercel

1. **Instale o Vercel CLI:**
```bash
npm i -g vercel
```

2. **Faça login:**
```bash
vercel login
```

3. **Deploy:**
```bash
vercel
```

4. **Siga as instruções na tela**

## 🔧 Buildando para Produção

```bash
npm run build
npm start
```

## 📝 Personalizações

### Trocar cores
Edite `tailwind.config.ts` para mudar o esquema de cores.

### Modificar tabela
Edite `src/components/RoleTable.tsx` para adicionar ou alterar linhas.

### Trocar conteúdo da página
Edite `src/app/page.tsx` para mudar o texto principal.

## 📄 Licença

Este projeto é fornecido como está. Sinta-se livre para modificar e distribuir.

## 🤝 Suporte

Para mais informações sobre Next.js, visite [nextjs.org](https://nextjs.org)

Para documentação do Vercel, visite [vercel.com/docs](https://vercel.com/docs)

---

**Última atualização:** 6 de abril de 2026
