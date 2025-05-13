
import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Book, BookOpen, FileText, Image, File } from 'lucide-react';

interface Resource {
  id: string;
  title: string;
  type: 'book' | 'article' | 'image' | 'document';
  source: string;
  thumbnail: string;
}

const resources: Resource[] = [
  {
    id: '1',
    title: 'Kearifan Lokal Dalam Arsitektur Nusantara',
    type: 'book',
    source: 'Kementerian Pendidikan dan Kebudayaan',
    thumbnail: 'https://mahakaryapustaka.com/images/produk/keragaman-lokalitas--kearifan-budaya-dalam-arsitektur-64.jpeg'
  },
  {
    id: '2',
    title: 'Pola dan Motif Batik: Filosofi dan Makna',
    type: 'book',
    source: 'Museum Tekstil Indonesia',
    thumbnail: 'https://cdn.antaranews.com/cache/infografis/800x533/2020/10/03/20201003makna-motif-batik-nusantara-01_1.jpg'
  },
  {
    id: '3',
    title: 'Upacara Adat Sekaten: Sejarah dan Perkembangannya',
    type: 'article',
    source: 'Jurnal Kebudayaan Indonesia',
    thumbnail: 'https://bakpiakukustugu.co.id/uploads/11/2023-05/upacara_sekatenan.jpg'
  },
  {
    id: '4',
    title: 'Koleksi Foto Upacara Adat Toraja',
    type: 'image',
    source: 'Arsip Nasional',
    thumbnail: 'https://img.antarafoto.com/cache/400x300/2023/09/02/prosesi-penguburan-rambu-solo-toraja-17xcu-dom.jpg'
  },
  {
    id: '5',
    title: 'Manuskrip Naskah Kuno Babad Tanah Jawi',
    type: 'document',
    source: 'Perpustakaan Nasional',
    thumbnail: 'https://assets-a1.kompasiana.com/items/album/2018/03/24/hlm-buka-58-59-b-re-5ab64fcdab12ae702e71ab22.jpg'
  },
  {
    id: '6',
    title: 'Ensiklopedia Tarian Tradisional Indonesia',
    type: 'book',
    source: 'Kementerian Pendidikan dan Kebudayaan',
    thumbnail: 'https://backend.perpusnas.go.id/uploads/bukubaru/210902092614aIe1uMjUFK.png'
  }
];

const getResourceIcon = (type: string) => {
  switch(type) {
    case 'book':
      return <Book className="h-5 w-5" />;
    case 'article':
      return <FileText className="h-5 w-5" />;
    case 'image':
      return <Image className="h-5 w-5" />;
    case 'document':
      return <File className="h-5 w-5" />;
    default:
      return <BookOpen className="h-5 w-5" />;
  }
};

const DigitalLibrary = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-4">Perpustakaan Digital</h2>
            <p className="text-muted-foreground max-w-2xl">
              Akses koleksi referensi dan arsip digital tentang kekayaan adat nusantara,
              mulai dari buku, artikel, manuskrip, hingga dokumentasi foto dan video.
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <Button variant="outline" className="border-batik text-batik hover:bg-batik hover:text-white">
              <BookOpen className="mr-2 h-5 w-5" />
              Jelajahi Koleksi Lengkap
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource) => (
            <div key={resource.id} className="group relative">
              <div className="aspect-[3/4] overflow-hidden rounded-lg bg-gray-100">
                <img
                  src={resource.thumbnail}
                  alt={resource.title}
                  className="h-full w-full object-cover object-center group-hover:opacity-90 transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <div className="text-white">
                    <div className="flex items-center mb-2">
                      <span className="bg-white/20 backdrop-blur-sm rounded-full p-1.5 mr-2">
                        {getResourceIcon(resource.type)}
                      </span>
                      <span className="text-sm font-semibold uppercase tracking-wider">{resource.type}</span>
                    </div>
                    <h3 className="font-semibold text-lg mb-1">{resource.title}</h3>
                    <p className="text-sm text-white/70">{resource.source}</p>
                    <Button variant="link" className="text-white p-0 mt-4 hover:text-batik-light">
                      Lihat Detail
                    </Button>
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <div className="flex items-center text-xs text-muted-foreground">
                  <span className="mr-2">{getResourceIcon(resource.type)}</span>
                  <span>{resource.type.charAt(0).toUpperCase() + resource.type.slice(1)}</span>
                </div>
                <h3 className="font-medium text-foreground mt-1">{resource.title}</h3>
                <p className="text-sm text-muted-foreground">{resource.source}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DigitalLibrary;
