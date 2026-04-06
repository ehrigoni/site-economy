# 🚀 Guia Rápido de Deploy no Vercel

## Passo 1: Preparar o Repositório Git

Se ainda não tiver um repositório Git, crie um na raiz do projeto:

```bash
cd site-economy
git init
git add .
git commit -m "Initial commit: SiteEconomy project"
```

## Passo 2: Criar Repositório no GitHub

1. Acesse [github.com](https://github.com)
2. Clique em "New repository"
3. Nomeie como `site-economy`
4. Clique em "Create repository"
5. Siga as instruções para fazer push do seu código local

## Passo 3: Deploy no Vercel

### Opção A: Deploy com Interface Web

1. Acesse [vercel.com](https://vercel.com)
2. Clique em "Import Project"
3. Selecione "Import Git Repository"
4. Cole a URL do seu repositório GitHub
5. Vercel autodescobre que é um projeto Next.js
6. Clique em "Deploy"
7. **Pronto!** Seu site estará ao vivo em segundos

### Opção B: Deploy com Vercel CLI

1. Instale o Vercel CLI:
```bash
npm install -g vercel
```

2. No diretório do projeto, execute:
```bash
vercel
```

3. Siga as perguntas interativas:
   - Link to existing project? → Não (primeira vez)
   - What's your project's name? → site-economy
   - In which directory is your code? → ./
   - Want to modify vercel.json? → Sim/Não (sua preferência)

4. **Pronto!** Seu site estará online!

## Passo 4: Acessar seu Site

Após o deploy, você receberá uma URL como:
- `https://site-economy.vercel.app`

Compartilhe esta URL com quem quiser acessar!

## Tips de Deployment

✅ **Commit semântico antes de fazer push:**
```bash
git add .
git commit -m "feat: adicionar nova seção"
git push origin main
```

✅ **Vercel faz deploy automático:** Cada push para a branch main dispara um novo deploy

✅ **Preview de PRs:** Vercel cria um URL de preview para cada Pull Request

✅ **Configurar domínio customizado:**
1. Vá para Vercel Dashboard
2. Selecione o projeto `site-economy`
3. Clique em "Settings" → "Domains"
4. Adicione seu domínio personalizado

## Troubleshooting

### Build falhando?

1. Verifique localmente:
```bash
npm run build
```

2. Se falhar localmente, corrija o problema

3. Faça commit e push novamente

### Configurações de Build no Vercel

Se precisar customizar, vá em:
- Dashboard → Project Settings → Build & Development Settings

### Limpando Cache

Se quiser fazer rebuild sem mudanças:
- Dashboard → Deployments → Clique em "..." → Redeploy

---

**Suporte:**
- Documentação Next.js: https://nextjs.org/docs
- Documentação Vercel: https://vercel.com/docs
- Status do Vercel: https://status.vercel.com

Bom deploy! 🎉
