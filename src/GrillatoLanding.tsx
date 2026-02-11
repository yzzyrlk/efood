import React from 'react';

export function GrillatoLanding() {
  const handleOrderClick = () => {
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'InitiateCheckout');
    }
  };

  const handleWhatsAppClick = () => {
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Contact');
    }
  };

  return (
    <div className="min-h-screen bg-[#111111] text-white flex items-center justify-center">
      <div className="max-w-lg mx-auto px-6 py-16 text-center">
        <div className="inline-block bg-[#2ecc71] text-black px-4 py-2 rounded-lg text-sm font-semibold mb-6">
          🔥 Smash Burgers Artesanais
        </div>

        <h1 className="text-4xl font-bold mb-4">Grillato Hamburgueria</h1>

        <p className="text-xl text-gray-300 mb-10">
          Hambúrguer artesanal + batata crocante<br />
          Entrega rápida em Arapongas
        </p>

        <div className="space-y-4">
          <a
            href="https://pedido.anota.ai/loja/grillato-hamburgueria?f=msa"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleOrderClick}
            className="block bg-[#ffb300] hover:bg-[#ffa000] text-black font-bold text-xl py-5 px-8 rounded-lg transition-colors"
          >
            🍔 PEDIR AGORA
          </a>

          <a
            href="https://api.whatsapp.com/send/?phone=5543991681441&text&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleWhatsAppClick}
            className="block bg-[#ffb300] hover:bg-[#ffa000] text-black font-bold text-xl py-5 px-8 rounded-lg transition-colors"
          >
            💬 Falar no WhatsApp
          </a>
        </div>

        <footer className="mt-12 text-sm text-gray-500">
          © Grillato Burgers • Delivery
        </footer>
      </div>
    </div>
  );
}
