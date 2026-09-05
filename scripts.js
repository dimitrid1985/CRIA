document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const isFromGoogleAds = urlParams.has("gclid");

  if (isFromGoogleAds) {
    // 1. Personalizar a mensagem padrão do botão de WhatsApp
    const whatsappButtons = document.querySelectorAll('a[href*="wa.me"], a[href*="api.whatsapp.com"]');
    const customMessage = encodeURIComponent("Olá! Vim pelo anúncio da CRIA no Google.");

    whatsappButtons.forEach((button) => {
      button.href = `https://wa.me/5521986624133?text=${customMessage}`;
    });
  }
});