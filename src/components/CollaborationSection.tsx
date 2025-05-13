
import React from 'react';
import { Button } from '@/components/ui/button';
import { Users, BookOpen, Calendar, Map, Search } from 'lucide-react';

const features = [
  {
    icon: <Search className="h-10 w-10 text-batik" />,
    title: 'Telusuri',
    description: 'Cari informasi adat dengan mesin pencari yang didukung AI dan filter multidimensi.'
  },
  {
    icon: <Map className="h-10 w-10 text-batik" />,
    title: 'Visualisasi',
    description: 'Lihat persebaran adat melalui peta interaktif dan visualisasi data budaya.'
  },
  {
    icon: <BookOpen className="h-10 w-10 text-batik" />,
    title: 'Pelajari',
    description: 'Akses materi pembelajaran interaktif dan perpustakaan digital lengkap.'
  },
  {
    icon: <Users className="h-10 w-10 text-batik" />,
    title: 'Berkolaborasi',
    description: 'Bergabung dalam forum diskusi dan proyek dokumentasi bersama.'
  },
];

const CollaborationSection = () => {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">Mari Lestarikan Budaya Nusantara Bersama</h2>
          <p className="text-lg text-muted-foreground mb-8">
            LENTERA adalah proyek kolaboratif untuk pelestarian budaya. Kami mengundang para peneliti, 
            komunitas adat, dan pemerhati budaya untuk bergabung dalam upaya dokumentasi dan digitalisasi adat nusantara.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button size="lg" className="bg-batik hover:bg-batik-dark">
              <Users className="mr-2 h-5 w-5" />
              Gabung Sebagai Kontributor
            </Button>
            <Button size="lg" variant="outline" className="border-batik text-batik hover:bg-batik hover:text-white">
              <Calendar className="mr-2 h-5 w-5" />
              Ikuti Workshop Dokumentasi
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-md transition-transform hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollaborationSection;
