
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
}

const categories: Category[] = [
  {
    id: 'ritual',
    name: 'Upacara Adat',
    icon: '🪔',
    description: 'Berbagai ritual dan upacara tradisional yang masih dilaksanakan hingga kini'
  },
  {
    id: 'textiles',
    name: 'Tekstil & Tenun',
    icon: '🧵',
    description: 'Kerajinan tekstil tradisional dengan motif dan teknik pembuatan yang unik'
  },
  {
    id: 'dance',
    name: 'Tarian Tradisional',
    icon: '💃',
    description: 'Beragam tarian dari seluruh penjuru nusantara dengan filosofi mendalam'
  },
  {
    id: 'music',
    name: 'Musik & Alat Musik',
    icon: '🎵',
    description: 'Instrumen musik tradisional dan komposisi yang khas dari berbagai daerah'
  },
  {
    id: 'architecture',
    name: 'Arsitektur Tradisional',
    icon: '🏯',
    description: 'Rumah adat dan bangunan tradisional dengan makna dan fungsi khusus'
  },
  {
    id: 'culinary',
    name: 'Kuliner Tradisional',
    icon: '🍲',
    description: 'Kekayaan kuliner nusantara dengan sejarah dan filosofinya'
  },
  {
    id: 'craft',
    name: 'Kerajinan Tangan',
    icon: '🧶',
    description: 'Aneka kerajinan tradisional dari berbagai bahan dan teknik'
  },
  {
    id: 'tradition',
    name: 'Tradisi & Kepercayaan',
    icon: '🕯️',
    description: 'Tradisi turun temurun dan sistem kepercayaan lokal'
  }
];

const FeaturedCategories = () => {
  return (
    <section className="py-16 bg-batik-light/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Kategori Adat Nusantara</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Telusuri ragam adat nusantara berdasarkan kategori yang diminati.
            Setiap kategori menyajikan kekayaan budaya dari berbagai daerah di Indonesia.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link 
              key={category.id}
              to={`/category/${category.id}`}
              className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="text-4xl mb-3">{category.icon}</div>
              <h3 className="font-semibold text-lg mb-2 group-hover:text-batik transition-colors">{category.name}</h3>
              <p className="text-muted-foreground text-sm">{category.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
