

## Plano: Criar páginas de redirecionamento em `/link/`

### O que será feito

Criar dois arquivos HTML estáticos na pasta `public/link/` para que fiquem acessíveis em:
- `gatha.com.br/link/` → redireciona para WhatsApp (554626041806)
- `gatha.com.br/link/insta.html` → redireciona para Instagram (@gathaconfeccao)

### Arquivos

1. **`public/link/index.html`** — Página de redirecionamento para WhatsApp com:
   - Facebook Pixel (ID 443778689097916) com eventos PageView e Cadastro
   - Auto-redirect via JavaScript para `wa.me/554626041806`
   - Botões fallback para Android, iOS e Web (conforme HTML fornecido)
   - Visual dark com card centralizado

2. **`public/link/insta.html`** — Página de redirecionamento para Instagram com:
   - Facebook Pixel com eventos PageView e tracking de clique Instagram
   - Auto-redirect para `https://www.instagram.com/gathaconfeccao/`
   - Visual similar ao index.html, adaptado para Instagram

3. **Atualizar `vercel.json`** e **`public/_redirects`** para garantir que `/link/` sirva os arquivos estáticos ao invés de cair no SPA fallback.

### Detalhe técnico

Os arquivos ficam em `public/link/` e são servidos como HTML estático pelo Vite/Vercel. Será necessário adicionar exceção no rewrite do `vercel.json` para que `/link/*` não redirecione para `index.html`.

