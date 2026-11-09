# La Belle Lingerie

Site demonstrativo de e-commerce feito com HTML, CSS e JavaScript puro.

## Arquivos
- `index.html`: estrutura do site.
- `style.css`: identidade visual bordô e off-white e layout responsivo.
- `script.js`: catálogo demonstrativo, busca, filtro, sacola e pedido via WhatsApp.

## Como visualizar
Abra `index.html` no navegador. Para publicar, envie os três arquivos para um repositório GitHub e ative o GitHub Pages em **Settings → Pages**.

## Antes de publicar
1. Abra `script.js`.
2. Altere `WHATSAPP_NUMBER` para o número da loja, com código do país e DDD, somente números. Exemplo: `5511999999999`.
3. Atualize o Instagram no `index.html`.
4. Troque nomes e preços de exemplo no array `products` em `script.js`.
5. Revise textos, políticas, formas de pagamento, frete e dados de contato.

## Importante
Este projeto é uma vitrine demonstrativa. O carrinho monta o pedido e encaminha para o WhatsApp; não processa pagamentos, não calcula frete real, não salva pedidos em banco de dados e não possui painel administrativo. Para vender com pagamento online, estoque e pedidos automatizados, será necessário integrar um backend e um provedor de pagamentos.
