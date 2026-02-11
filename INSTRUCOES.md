# 🍔 GRILLATO BURGERS - INSTRUÇÕES

## ✅ PÁGINA PRONTA E FUNCIONANDO!

A landing page do Grillato Burgers está pronta. Agora você só precisa adicionar **2 coisas**:

---

## 🔴 1. ADICIONAR O PIXEL DA META

**Arquivo:** `index.html`

**Onde:** Dentro da tag `<head>`, procure este comentário:

```html
<!-- 🔴 COLE O CÓDIGO DO PIXEL DA META AQUI 🔴 -->
```

**O que fazer:**

1. Acesse o Gerenciador de Eventos da Meta
2. Copie **TODO** o código do Pixel (não só o ID)
3. Cole EXATAMENTE onde está marcado no `index.html`

**Exemplo do código que você vai colar:**

```html
<!-- Meta Pixel Code -->
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', 'SEU_PIXEL_ID_AQUI');
  fbq('track', 'PageView');
</script>
<noscript><img height="1" width="1" style="display:none"
  src="https://www.facebook.com/tr?id=SEU_PIXEL_ID_AQUI&ev=PageView&noscript=1"
/></noscript>
<!-- End Meta Pixel Code -->
```

---

## 🟡 2. ADICIONAR O LINK DO ANOTA AI

**Arquivo:** `src/GrillatoLanding.tsx`

**Onde:** Procure esta linha:

```typescript
href="COLE_AQUI_O_LINK_DO_ANOTA_AI"
```

**O que fazer:**

Substitua `COLE_AQUI_O_LINK_DO_ANOTA_AI` pelo link real do seu cardápio no Anota AI.

**Exemplo:**

```typescript
href="https://anota.ai/loja/grillato-burgers"
```

---

## 💬 OPCIONAL: ATUALIZAR NÚMERO DO WHATSAPP

**Arquivo:** `src/GrillatoLanding.tsx`

**Onde:** Procure esta linha:

```typescript
href="https://wa.me/5543999999999"
```

**O que fazer:**

Substitua `5543999999999` pelo seu número real no formato:

- **55** = código do Brasil
- **43** = DDD de Arapongas
- **999999999** = seu número (sem espaços, sem traços)

**Exemplo:**

```typescript
href="https://wa.me/5543988776655"
```

---

## 🎯 O QUE A PÁGINA JÁ FAZ

✅ Design limpo e focado em conversão
✅ Rastreamento automático de cliques nos botões (quando o Pixel estiver ativo)
✅ Responsiva (funciona em celular e desktop)
✅ Pronta para receber tráfego de anúncios

---

## 📦 COMO PUBLICAR

### Opção 1: Carrd.co (Mais Fácil)
1. Crie uma conta no Carrd.co
2. Crie um site novo
3. Escolha "Blank"
4. Cole o código da pasta `dist/` depois do build
5. Publique

### Opção 2: Netlify (Grátis e Automático)
1. Faça push do projeto para o GitHub
2. Conecte no Netlify
3. Deploy automático

### Opção 3: Hospedagem própria
1. Faça o build: `npm run build`
2. Suba a pasta `dist/` para o servidor

---

## 🚀 EVENTOS RASTREADOS AUTOMATICAMENTE

Quando você adicionar o Pixel, estes eventos serão enviados para a Meta:

- **PageView**: Quando alguém abre a página
- **InitiateCheckout**: Quando clica em "PEDIR AGORA"
- **Contact**: Quando clica em "Falar no WhatsApp"

Isso permite criar públicos personalizados e otimizar campanhas!

---

## ❓ DÚVIDAS COMUNS

**O Pixel funciona sem estar publicado?**
Não. Precisa estar em um domínio público (não localhost).

**Posso testar antes de adicionar o Pixel?**
Sim! A página funciona perfeitamente sem o Pixel.

**Preciso ter conta no Anota AI?**
Sim, você precisa criar sua loja lá e pegar o link.

---

Qualquer dúvida, é só perguntar! 🍔
