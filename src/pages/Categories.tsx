
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AspectRatio } from '@/components/ui/aspect-ratio';

interface CategoryItem {
  id: string;
  name: string;
  description: string;
  image: string;
  items: number;
}

const categories: CategoryItem[] = [
  {
    id: "budaya",
    name: "Budaya",
    description: "Ragam budaya dan tradisi dari berbagai suku dan etnis di Indonesia, meliputi upacara adat, ritual, dan praktik tradisional.",
    image: "https://osccdn.medcom.id/images/content/2023/07/04/2074cc7a8c9e28ae35b629861fe8eca8.jpg",
    items: 24
  },
  {
    id: "wisata",
    name: "Wisata",
    description: "Destinasi wisata berbasis budaya di seluruh nusantara, termasuk situs sejarah, desa adat, dan festival budaya.",
    image: "https://www.cnnindonesia.com/longform/gaya-hidup/20241230/galeri-foto-interaktif-15-destinasi-wisata-terbaik-indonesia-untuk-liburan-2025/assets/img/images/medium/cover.jpg",
    items: 18
  },
  {
    id: "kuliner",
    name: "Kuliner",
    description: "Kekayaan kuliner tradisional Indonesia dengan sejarah dan filosofi di balik hidangan khas daerah.",
    image: "https://www.blibli.com/friends-backend/wp-content/uploads/2023/03/B200446-Cover-wisata-kuliner-di-bangkok-scaled.jpg",
    items: 32
  },
  {
    id: "sejarah",
    name: "Sejarah",
    description: "Perjalanan sejarah bangsa Indonesia dari era kerajaan hingga kemerdekaan dan pengaruhnya terhadap budaya.",
    image: "https://www.aartreya.com/images/berita/Tokoh-sejarah-yang-misterius.jpg?w=650",
    items: 15
  }
];

const Categories = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredCategories = categories.filter(category =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    category.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-16">
        <section className="bg-batik-light/30 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="overflow-hidden rounded-xl mb-8 shadow-lg">
                <AspectRatio ratio={16/9}>
                  <img 
                    src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" 
                    alt="Kategori Budaya Nusantara" 
                    className="w-full h-full object-cover brightness-90"
                  />
                </AspectRatio>
              </div>
              
              <div className="text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Kategori Konten</h1>
                <p className="text-lg text-muted-foreground mb-8">
                  Jelajahi ragam konten tentang budaya nusantara berdasarkan kategori
                </p>
                
                <div className="relative mt-8">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Cari kategori..."
                    className="pl-10 py-6"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredCategories.map((category) => (
                <Card key={category.id} className="overflow-hidden hover:shadow-xl transition-all duration-300">
                  <AspectRatio ratio={16/9}>
                    <img 
                      src={category.image} 
                      alt={category.name}
                      className="w-full h-full object-cover"
                    />
                  </AspectRatio>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold mb-2">{category.name}</h2>
                    <p className="text-muted-foreground mb-4">{category.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">{category.items} konten</span>
                      <Button asChild>
                        <Link to={`/category/${category.id}`}>
                          Jelajahi
                          <ChevronRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {filteredCategories.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">Kategori tidak ditemukan</p>
                <Button 
                  className="mt-4" 
                  variant="outline"
                  onClick={() => setSearchTerm('')}
                >
                  Reset Pencarian
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Categories;
