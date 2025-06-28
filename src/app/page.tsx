'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    document.title = "Kavárna U Kódu - Nejlepší káva v Praze";
    
    // Generate a darker, code-themed favicon (dark blue, subtle green)
    const faviconSvg = `<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#1A2B3C" /><stop offset="100%" stop-color="#4CAF50" /></linearGradient></defs><circle cx="50" cy="50" r="50" fill="url(#g)" /></svg>`;
    const faviconUrl = `data:image/svg+xml;base64,${btoa(faviconSvg)}`;

    let faviconLink = document.querySelector('link[rel="icon"]');
    if (!faviconLink) {
      faviconLink = document.createElement('link');
      faviconLink.setAttribute('rel', 'icon');
      document.head.appendChild(faviconLink);
    }
    if (faviconLink) {
      faviconLink.setAttribute('href', faviconUrl);
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#F4F1E8] text-[#3D3A3B] font-sans overflow-x-hidden">
      {/* Navbar */}
      <nav className="fixed w-full z-10 bg-[#F4F1E8] bg-opacity-95 shadow-sm py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <a href="#hero" className="text-2xl font-bold text-[#8D8741]">
            Testovací Kavárna "U Kódu"
          </a>
          <div className="hidden md:flex space-x-6">
            <a href="#about" className="text-[#659DBD] hover:text-[#8D8741] transition-colors">O nás</a>
            <a href="#services" className="text-[#659DBD] hover:text-[#8D8741] transition-colors">Služby</a>
            <a href="#contact" className="text-[#659DBD] hover:text-[#8D8741] transition-colors">Kontakt</a>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-[#659DBD] focus:outline-none">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-[#F4F1E8] py-4`}>
          <div className="flex flex-col items-center space-y-4">
            <a href="#about" className="text-[#659DBD] hover:text-[#8D8741] transition-colors text-lg" onClick={toggleMenu}>O nás</a>
            <a href="#services" className="text-[#659DBD] hover:text-[#8D8741] transition-colors text-lg" onClick={toggleMenu}>Služby</a>
            <a href="#contact" className="text-[#659DBD] hover:text-[#8D8741] transition-colors text-lg" onClick={toggleMenu}>Kontakt</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative pt-24 pb-16 bg-[#D8D4C7] text-white flex items-center justify-center min-h-screen-75 bg-cover bg-center" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1511920170109-d90066cf6403?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")'}}>
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-[#F4F1E8]">Testovací Kavárna "U Kódu"</h1>
          <p className="text-xl md:text-2xl text-[#E0DBCF]">Nejlepší káva pro vaše bugy.</p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 bg-[#F4F1E8] container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-[#8D8741] mb-6">O nás</h2>
            <p className="text-lg leading-relaxed text-[#3D3A3B]">
              Jsme moderní kavárna v srdci Prahy, která nabízí nejen skvělou kávu, ale i klidné prostředí pro práci a setkávání. Naše specialita je "debuggovací doppio".
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img src="https://images.unsplash.com/photo-1509042239860-f550ce7103ab?auto=format&fit=crop&q=80&w=2787&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="About Us" className="w-full h-80 object-cover" />
          </div>
        </div>
      </section>

      {/* Services Section (since none were provided content-wise, providing a placeholder visual) */}
      <section id="services" className="py-16 md:py-24 bg-[#E0DBCF] container mx-auto px-4">
        <h2 className="text-4xl font-bold text-[#8D8741] text-center mb-12">Naše Služby</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Placeholder for services, as no specific services were provided uncomment below to populate */}
          <div className="bg-white p-8 rounded-lg shadow-md text-center border-t-4 border-[#659DBD]">
            <h3 className="text-2xl font-semibold text-[#8D8741] mb-4">Káva a nápoje</h3>
            <p className="text-[#3D3A3B]">Široká nabídka kávových specialit, čajů a osvěžujících nápojů.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md text-center border-t-4 border-[#659DBD]">
            <h3 className="text-2xl font-semibold text-[#8D8741] mb-4">Prostředí pro práci</h3>
            <p className="text-[#3D3A3B]">Klidné koutky s Wi-Fi pro vaši produktivitu.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md text-center border-t-4 border-[#659DBD]">
            <h3 className="text-2xl font-semibold text-[#8D8741] mb-4">Setkávání</h3>
            <p className="text-[#3D3A3B]">Ideální místo pro neformální schůzky a relax.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-[#F4F1E8] container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img src="https://images.unsplash.com/photo-1541167760496-c67be38bd16e?auto=format&fit=crop&q=80&w=2787&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Contact Us" className="w-full h-80 object-cover" />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-[#8D8741] mb-6">Kontakt</h2>
            <p className="text-lg leading-relaxed text-[#3D3A3B]">
            <strong className="text-[#659DBD]">Email:</strong> test@kavarna.cz<br />
            <strong className="text-[#659DBD]">Telefon:</strong> +420 777 123 456<br />
            <strong className="text-[#659DBD]">Adresa:</strong> Bugfixová 1, 110 00 Praha 1
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#8D8741] py-8 text-center text-[#F4F1E8] text-sm">
        <p>Vytvořeno s láskou od <a href="https://digitalfusion.cz" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#659DBD]">DigitalFusion</a></p>
      </footer>
    </div>
  );
}
