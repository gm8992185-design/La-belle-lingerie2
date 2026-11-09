document.getElementById('ano').textContent = new Date().getFullYear();
// Para ativar o WhatsApp, substitua o número abaixo por código do país + DDD + número, sem espaços.
// Exemplo fictício: 5511999999999
const numero = '55DDNUMEROAQUI';
if (numero !== '55DDNUMEROAQUI') {
  document.getElementById('whats').href = 'https://wa.me/' + numero + '?text=' + encodeURIComponent('Olá! Vim pelo site da La Belle Lingerie e gostaria de informações.');
} else {
  document.getElementById('whats').addEventListener('click', function(e) {
    e.preventDefault();
    alert('Configure o WhatsApp da loja no arquivo script.js.');
  });
}