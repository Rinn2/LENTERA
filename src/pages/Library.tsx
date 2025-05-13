import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Video, FileText, Music, ChevronRight, Search, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AspectRatio } from '@/components/ui/aspect-ratio';

// Define the library item types
interface LibraryItem {
  id: string;
  title: string;
  description: string;
  type: 'article' | 'video' | 'document' | 'audio';
  category: string;
  image: string;
  author: string;
  date: string;
  duration?: string;
  fileSize?: string;
}

const libraryItems: LibraryItem[] = [
  {
    id: 'article-1',
    title: 'Filosofi dan Makna di Balik Motif Batik Tradisional Jawa',
    description: 'Menguak makna mendalam dari berbagai motif batik klasik dan hubungannya dengan pandangan hidup masyarakat Jawa',
    type: 'article',
    category: 'Tekstil',
    image: 'https://awsimages.detik.net.id/community/media/visual/2022/08/14/motif-batik-parang-kusuma-dengan-modifikasi_169.jpeg?w=650',
    author: 'Dr. Kartika Sari',
    date: '12 April 2023',
    duration: '15 menit baca'
  },
  {
    id: 'video-1',
    title: 'Dokumenter: Upacara Rambu Solo di Toraja',
    description: 'Menyaksikan langsung kemegahan dan kesakralan upacara pemakaman tradisional Toraja yang bisa berlangsung berhari-hari',
    type: 'video',
    category: 'Upacara Adat',
    image: 'https://source.unsplash.com/random/600x400/?toraja,funeral',
    author: 'Tim Dokumentasi LENTERA',
    date: '5 Juni 2023',
    duration: '45 menit'
  },
  {
    id: 'document-1',
    title: 'Katalog Rumah Adat Indonesia',
    description: 'Kompilasi lengkap arsitektur tradisional dari 34 provinsi di Indonesia beserta filosofi dan fungsi kulturalnya',
    type: 'document',
    category: 'Arsitektur',
    image: 'https://source.unsplash.com/random/600x400/?indonesia,traditional,house',
    author: 'Tim Peneliti LENTERA',
    date: '20 Maret 2023',
    fileSize: '15 MB'
  },
  {
    id: 'audio-1',
    title: 'Koleksi Musik Gamelan Jawa Tengah',
    description: 'Rekaman autentik berbagai komposisi gamelan dari keraton-keraton di Jawa Tengah',
    type: 'audio',
    category: 'Musik',
    image: 'https://source.unsplash.com/random/600x400/?gamelan,music',
    author: 'Komunitas Karawitan Surakarta',
    date: '8 Juli 2023',
    duration: '1 jam 20 menit'
  },
  {
    id: 'article-2',
    title: 'Sistem Kepercayaan dan Ritual Adat Dayak Meratus',
    description: 'Eksplorasi mendalam tentang spiritualitas dan hubungan dengan alam dalam kepercayaan Dayak Meratus',
    type: 'article',
    category: 'Kepercayaan',
    image: 'https://source.unsplash.com/random/600x400/?borneo,ritual',
    author: 'Prof. Irawan Kalimantan',
    date: '25 Mei 2023',
    duration: '12 menit baca'
  },
  {
    id: 'video-2',
    title: 'Teknik dan Proses Pembuatan Keris Pusaka',
    description: 'Dokumentasi langkah demi langkah pembuatan keris oleh empu (pandai besi) dari Solo dengan teknik tradisional',
    type: 'video',
    category: 'Kerajinan',
    image: 'https://source.unsplash.com/random/600x400/?keris,dagger',
    author: 'Yayasan Pusaka Nusantara',
    date: '17 Agustus 2023',
    duration: '55 menit'
  },
  {
    id: 'document-2',
    title: 'Kamus Bahasa Daerah Terancam Punah',
    description: 'Dokumentasi leksikon dari 10 bahasa daerah di Indonesia yang terancam punah',
    type: 'document',
    category: 'Bahasa',
    image: 'https://source.unsplash.com/random/600x400/?indonesia,language,book',
    author: 'Tim Linguis LENTERA',
    date: '30 September 2023',
    fileSize: '8 MB'
  },
  {
    id: 'audio-2',
    title: 'Kumpulan Cerita Rakyat Nusantara',
    description: 'Narasi dan dramatisasi audio dari berbagai cerita rakyat legendaris di Indonesia',
    type: 'audio',
    category: 'Sastra',
    image: 'https://source.unsplash.com/random/600x400/?storytelling,indonesia',
    author: 'Komunitas Dongeng Nusantara',
    date: '10 Oktober 2023',
    duration: '2 jam 30 menit'
  },
];

const Library = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const getFilteredItems = () => {
    return libraryItems.filter(item => {
      const matchesSearch = 
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.category.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesType = activeTab === 'all' || item.type === activeTab;
      
      return matchesSearch && matchesType;
    });
  };

  const filteredItems = getFilteredItems();

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'article':
        return <BookOpen className="h-5 w-5" />;
      case 'video':
        return <Video className="h-5 w-5" />;
      case 'document':
        return <FileText className="h-5 w-5" />;
      case 'audio':
        return <Music className="h-5 w-5" />;
      default:
        return <BookOpen className="h-5 w-5" />;
    }
  };

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
                    src="https://www.panda.id/wp-content/uploads/perpustakaan-digital-epustaka-ecampuz.jpg" 
                    alt="Perpustakaan Digital" 
                    className="w-full h-full object-cover"
                  />
                </AspectRatio>
              </div>
              
              <div className="text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Perpustakaan Digital</h1>
                <p className="text-lg text-muted-foreground mb-8">
                  Akses beragam artikel, video, dokumen, dan audio tentang kekayaan budaya nusantara
                </p>
                
                <div className="relative mt-8">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Cari artikel, video, dokumen..."
                    className="pl-10 py-6"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-12">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
              <div className="flex justify-between items-center mb-8">
                <TabsList>
                  <TabsTrigger value="all">
                    Semua
                  </TabsTrigger>
                  <TabsTrigger value="article">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Artikel
                  </TabsTrigger>
                  <TabsTrigger value="video">
                    <Video className="h-4 w-4 mr-2" />
                    Video
                  </TabsTrigger>
                  <TabsTrigger value="document">
                    <FileText className="h-4 w-4 mr-2" />
                    Dokumen
                  </TabsTrigger>
                  <TabsTrigger value="audio">
                    <Music className="h-4 w-4 mr-2" />
                    Audio
                  </TabsTrigger>
                </TabsList>
                
                <Button variant="outline" size="sm">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </Button>
              </div>
              
              <TabsContent value="all">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredItems.map((item) => (
                    <LibraryCard key={item.id} item={item} />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="article">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredItems.map((item) => (
                    <LibraryCard key={item.id} item={item} />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="video">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredItems.map((item) => (
                    <LibraryCard key={item.id} item={item} />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="document">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredItems.map((item) => (
                    <LibraryCard key={item.id} item={item} />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="audio">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredItems.map((item) => (
                    <LibraryCard key={item.id} item={item} />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
            
            {filteredItems.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">Tidak ada item yang sesuai dengan pencarian Anda</p>
                <Button 
                  className="mt-4" 
                  variant="outline"
                  onClick={() => {
                    setSearchTerm('');
                    setActiveTab('all');
                  }}
                >
                  Reset Pencarian
                </Button>
              </div>
            )}
          </div>
        </section>
        
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-4">Koleksi Terbaru</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Jelajahi penambahan terbaru ke perpustakaan digital LENTERA.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-6 justify-center">
              {libraryItems.slice(0, 3).map((item) => (
                <Card key={item.id} className="w-full max-w-sm overflow-hidden">
                  <div className="relative h-48">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-white text-foreground">Baru</Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center text-sm text-muted-foreground mb-2">
                      {getTypeIcon(item.type)}
                      <span className="ml-2">{item.type === 'article' ? 'Artikel' : 
                                                item.type === 'video' ? 'Video' : 
                                                item.type === 'document' ? 'Dokumen' : 'Audio'}</span>
                    </div>
                    <h3 className="font-bold text-lg mb-2 line-clamp-2">{item.title}</h3>
                    <p className="text-sm mb-4 line-clamp-2">{item.author} • {item.date}</p>
                    <Button variant="outline" className="w-full">Lihat</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

interface LibraryCardProps {
  item: LibraryItem;
}

const LibraryCard = ({ item }: LibraryCardProps) => {
  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'article':
        return <BookOpen className="h-5 w-5" />;
      case 'video':
        return <Video className="h-5 w-5" />;
      case 'document':
        return <FileText className="h-5 w-5" />;
      case 'audio':
        return <Music className="h-5 w-5" />;
      default:
        return <BookOpen className="h-5 w-5" />;
    }
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300">
      <div className="relative h-48">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute top-4 right-4">
          <Badge className="bg-white text-foreground">{item.category}</Badge>
        </div>
        <div className="absolute bottom-4 left-4 text-white">
          <div className="flex items-center">
            {getTypeIcon(item.type)}
            <span className="ml-2 font-medium">
              {item.type === 'article' ? 'Artikel' : 
               item.type === 'video' ? 'Video' : 
               item.type === 'document' ? 'Dokumen' : 'Audio'}
            </span>
          </div>
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="font-bold text-lg mb-2 line-clamp-2">{item.title}</h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{item.description}</p>
        
        <div className="flex justify-between text-sm text-muted-foreground mb-4">
          <span>{item.author}</span>
          <span>{item.duration || item.fileSize}</span>
        </div>
        
        <Button 
          variant="ghost" 
          className="w-full justify-between text-batik hover:text-batik hover:bg-batik-light/50"
        >
          Baca Selengkapnya
          <ChevronRight className="h-4 w-4 ml-2" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default Library;
