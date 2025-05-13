
import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Search, Map, BookOpen } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-gradient-to-b from-background to-muted pt-16">
      {/* Decorative patterns */}
      <div className="lentera-pattern -top-20 -left-20 w-64 h-64 rounded-full bg-batik/5 animate-pattern-float" />
      <div className="lentera-pattern top-1/4 -right-20 w-80 h-80 rounded-full bg-songket/5 animate-pattern-float" style={{ animationDelay: '1s' }} />
      <div className="lentera-pattern bottom-10 left-10 w-40 h-40 rounded-full bg-ulos/5 animate-pattern-float" style={{ animationDelay: '2s' }} />
      
      <div className="container mx-auto px-4 py-12 sm:py-24 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Hero text */}
          <div className="flex-1 text-center lg:text-left max-w-3xl mx-auto lg:mx-0">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Jelajahi Kekayaan <span className="highlight-text">Adat Nusantara</span>
            </h1>
            <p className="text-lg mb-6 text-muted-foreground">
              LENTERA menjadi jembatan antara kekayaan budaya tradisional dengan teknologi digital modern.
              Temukan, pelajari, dan lestarikan beragam budaya Indonesia dengan cara yang interaktif.
            </p>
            
            <div className="space-y-4 sm:space-y-0 sm:flex sm:space-x-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-batik hover:bg-batik-dark">
                <Map className="mr-2 h-5 w-5" />
                Jelajahi Peta Budaya
              </Button>
              <Button size="lg" variant="outline" className="border-batik text-batik hover:bg-batik hover:text-white">
                <BookOpen className="mr-2 h-5 w-5" />
                Perpustakaan Digital
              </Button>
            </div>
            
            {/* Search box */}
            <div className="relative mt-10 max-w-lg mx-auto lg:mx-0">
              <div className="flex">
                <input
                  type="text"
                  className="block w-full rounded-l-lg border-0 py-3 pl-4 pr-10 text-foreground ring-1 ring-inset ring-border focus:ring-2 focus:ring-batik"
                  placeholder="Cari adat, tradisi, daerah..."
                />
                <button className="bg-batik text-white px-4 rounded-r-lg hover:bg-batik-dark transition-colors">
                  <Search className="h-5 w-5" />
                </button>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="text-xs bg-muted px-2 py-1 rounded-full text-muted-foreground">Tarian Tradisional</span>
                <span className="text-xs bg-muted px-2 py-1 rounded-full text-muted-foreground">Upacara Adat</span>
                <span className="text-xs bg-muted px-2 py-1 rounded-full text-muted-foreground">Batik</span>
                <span className="text-xs bg-muted px-2 py-1 rounded-full text-muted-foreground">Songket</span>
              </div>
            </div>
          </div>
          
          {/* Hero image: Indonesia map */}
          <div className="flex-1 w-full max-w-lg">
            <div className="relative">
              <svg viewBox="0 0 550 400" className="w-full h-auto filter drop-shadow-xl animate-fade-in">
                <defs>
                  <linearGradient id="indonesiaGradient" x1="0" y1="0" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#9b5de5" />
                    <stop offset="50%" stopColor="#D96704" />
                    <stop offset="100%" stopColor="#F7C59F" />
                  </linearGradient>
                </defs>
                {/* Simplified Indonesia map outlines */}
                <g fill="url(#indonesiaGradient)" stroke="#fff" strokeWidth="1.5">
                  {/* Sumatra */}
                  <path d="M110,120 L160,80 L180,150 L150,200 L100,180 Z" />
                  {/* Java */}
                  <path d="M180,200 L240,190 L280,210 L220,225 Z" />
                  {/* Kalimantan */}
                  <path d="M200,120 L270,90 L300,150 L270,170 L220,160 Z" />
                  {/* Sulawesi */}
                  <path d="M330,120 L350,80 L370,110 L360,150 L380,180 L350,190 L330,150 Z" />
                  {/* Papua */}
                  <path d="M420,120 L490,110 L480,180 L430,200 L400,150 Z" />
                  {/* Bali & Nusa Tenggara */}
                  <path d="M290,220 L310,215 L350,225 L330,235 Z" />
                  {/* Maluku */}
                  <path d="M390,140 L405,130 L415,150 L400,160 Z" />
                </g>
                {/* Dots for major cultural centers */}
                <g>
                  <circle cx="130" cy="130" r="5" fill="#fff" className="pulse-dot" />
                  <circle cx="210" cy="210" r="5" fill="#fff" className="pulse-dot" />
                  <circle cx="240" cy="130" r="5" fill="#fff" className="pulse-dot" />
                  <circle cx="350" cy="140" r="5" fill="#fff" className="pulse-dot" />
                  <circle cx="450" cy="150" r="5" fill="#fff" className="pulse-dot" />
                  <circle cx="300" cy="220" r="5" fill="#fff" className="pulse-dot" />
                </g>
              </svg>
              
              {/* Floating cards */}
              <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg p-2 animate-pattern-float" style={{ animationDelay: '0.5s' }}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF_RxZzyb4_Gs7lfmxqGWaSj7921X77ARViA&s" alt="Batik" className="w-16 h-16 object-cover rounded" />
              </div>
              <div className="absolute top-1/3 right-1/4 transform translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg p-2 animate-pattern-float" style={{ animationDelay: '1.5s' }}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVtxr0zM5KzsunCAnO_AYJDfKsu0XaqOz-Dg&s" alt="Tarian" className="w-16 h-16 object-cover rounded" />
              </div>
              <div className="absolute bottom-1/4 left-1/3 transform -translate-x-1/2 translate-y-1/2 bg-white rounded-lg shadow-lg p-2 animate-pattern-float" style={{ animationDelay: '2.5s' }}>
                <img src="https://shopee.co.id/inspirasi-shopee/wp-content/uploads/2021/08/ezgif.com-gif-maker-5-4.webp" alt="Musik" className="w-16 h-16 object-cover rounded" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,192L48,176C96,160,192,128,288,122.7C384,117,480,139,576,154.7C672,171,768,181,864,165.3C960,149,1056,107,1152,101.3C1248,96,1344,128,1392,144L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;
