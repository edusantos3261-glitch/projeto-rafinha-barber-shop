<iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d285.1955558096679!2d-48.06258527274702!3d-15.902849625529152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a2d5fa04f3723%3A0xccac5b8ef09e5d30!2sRafinha%20BarberShop!5e0!3m2!1spt-BR!2sbr!4v1762999414364!5m2!1spt-BR!2sbr"
  width="100%"
  height="400"
  style="border:0; border-radius:12px;"
  allowfullscreen=""
  loading="lazy"
  referrerpolicy="no-referrer-when-downgrade">
</iframe>
// Função para carregar componentes HTML
function carregarComponente(idElemento, caminhoComponente) {
  fetch(caminhoComponente)
    .then(response => response.text())
    .then(html => {
      document.getElementById(idElemento).innerHTML = html;
    });
}