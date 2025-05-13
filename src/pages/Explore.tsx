import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ChevronRight, Search, Map, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AspectRatio } from '@/components/ui/aspect-ratio';

interface Region {
  id: string;
  name: string;
  description: string;
  image: string;
  traditions: string[];
  category?: string;
}

const allRegions: Region[] = [
  {
    id: 'sumatera',
    name: 'Sumatera',
    description: 'Pulau Sumatera kaya akan keberagaman budaya dengan pengaruh adat Minangkabau, Batak, Aceh, dan Melayu.',
    image: 'https://kebudayaan.kemdikbud.go.id/bpcbjambi/wp-content/uploads/sites/30/2022/01/2b.jpg',
    traditions: ['Tari Saman', 'Rumah Gadang', 'Ulos', 'Rendang'],
    category: 'Pulau Besar'
  },
  {
    id: 'jawa',
    name: 'Jawa',
    description: 'Pulau Jawa memiliki adat yang kuat dipengaruhi oleh kerajaan-kerajaan Hindu-Buddha dan Islam yang pernah berkuasa.',
    image: 'https://a.travel-assets.com/findyours-php/viewfinder/images/res70/210000/210075-Java.jpg',
    traditions: ['Wayang Kulit', 'Batik', 'Gamelan', 'Sekaten'],
    category: 'Pulau Besar'
  },
  {
    id: 'kalimantan',
    name: 'Kalimantan',
    description: 'Budaya Dayak dan Melayu mendominasi pulau Kalimantan dengan ritual adat dan kesenian yang khas.',
    image: 'https://www.kulkulbali.co/public/uploads/posts/qRk9nWIvpADbDT24V0oOm3VzIq8mHU-metaS0FMSU1BTlRBLUJBUkFUICgxKS5qcGc=-.jpg',
    traditions: ['Tari Enggang', 'Mandau', 'Rumah Betang', 'Tattoo Dayak'],
    category: 'Pulau Besar'
  },
  {
    id: 'sulawesi',
    name: 'Sulawesi',
    description: 'Sulawesi memiliki beragam suku seperti Bugis, Makassar, Toraja, dan Minahasa dengan adat istiadat unik.',
    image: 'https://cdn.timesmedia.co.id/images/2020/08/25/Pulau-Sombori-kerap-dijuluki-Raja-Ampat.jpg',
    traditions: ['Rambu Solo', 'Tongkonan', 'Tari Kipas', 'Upacara Ma\'nene'],
    category: 'Pulau Besar'
  },
  {
    id: 'bali',
    name: 'Bali & Nusa Tenggara',
    description: 'Kebudayaan Hindu Bali dan tradisi NTT/NTB yang kaya menjadikan kawasan ini unik dan beragam.',
    image: 'https://titastory.id/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-04-at-14.50.01-2.jpeg',
    traditions: ['Tari Kecak', 'Upacara Ngaben', 'Tenun Ikat', 'Pasola'],
    category: 'Kepulauan'
  },
  {
    id: 'maluku',
    name: 'Papua',
    description: 'Wilayah timur Indonesia dengan adat Papua dan Maluku yang khas dan masih sangat terjaga keasliannya.',
    image: 'https://img2.beritasatu.com/cache/beritasatu/480x310-3/2023/05/1684901325-700x499.webp',
    traditions: ['Tari Perang', 'Upacara Wor', 'Ukiran Asmat', 'Honai'],
    category: 'Kepulauan'
  },
  {
    id: 'aceh',
    name: 'Aceh',
    description: 'Daerah dengan pengaruh Islam yang kuat dan budaya yang dikenal dengan tarian Saman dan Seudati.',
    image: 'https://serambimekkah.ac.id/wp-content/uploads/2024/06/Masjid-Baiturrahman-768x480.jpg',
    traditions: ['Tari Saman', 'Seudati', 'Rumoh Aceh', 'Rapa\'i'],
    category: 'Provinsi'
  },
  {
    id: 'yogyakarta',
    name: 'Yogyakarta',
    description: 'Pusat kebudayaan Jawa dengan keraton yang masih berfungsi dan tradisi yang kuat.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJUk6mBUepZp2WWowptBc33U7cfEvM57_ZuQ&s',
    traditions: ['Sekaten', 'Gamelan', 'Batik', 'Wayang'],
    category: 'Provinsi'
  },
  {
    id: 'bali-pulau',
    name: 'Bali',
    description: 'Pulau dewata dengan budaya Hindu yang kuat dan seni yang berkembang pesat.',
    image: 'https://international.unud.ac.id/protected/storage/file_summernote/4a0885ebc3c02b217cbf6c079eca6b37.jpg',
    traditions: ['Tari Kecak', 'Barong', 'Ngaben', 'Melasti'],
    category: 'Provinsi'
  }
];

const Explore = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);

  const filteredRegions = allRegions.filter(region => {
    const matchesSearch = region.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         region.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         region.traditions.some(t => t.toLowerCase().includes(searchTerm.toLowerCase()));
                         
    const matchesCategory = categoryFilter === null || region.category === categoryFilter;
    
    return matchesSearch && matchesCategory;
  });

  const categories = Array.from(new Set(allRegions.map(region => region.category)));

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="pt-16 bg-gradient-to-b from-batik-light/30 to-white">
        <div className="container mx-auto px-4 py-12">
          <div className="mb-10">
            <div className="overflow-hidden rounded-xl mb-8">
              <AspectRatio ratio={21/9}>
                <img 
                  src="https://media.istockphoto.com/id/1454047354/id/video/4k-orang-bali-membawa-makanan-untuk-persembahan-pura-saat-matahari-terbenam.jpg?s=640x640&k=20&c=unzhL5VirLnoZT9gWnZQQOwZ5KEZmxZ30BT30NM91U8=" 
                  alt="Pemandangan Nusantara" 
                  className="w-full h-full object-cover"
                />
              </AspectRatio>
            </div>
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4">Eksplorasi Budaya Nusantara</h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Temukan dan jelajahi kekayaan budaya dan tradisi dari berbagai wilayah di Indonesia.
                Dari Sabang sampai Merauke, setiap daerah memiliki keunikan tersendiri.
              </p>
            </div>
          </div>
          
          <div className="max-w-xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Cari wilayah, tradisi, atau budaya..."
                className="pl-10 py-6"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex flex-wrap gap-2 mt-4">
              <Button 
                variant={categoryFilter === null ? "default" : "outline"} 
                size="sm"
                onClick={() => setCategoryFilter(null)}
              >
                Semua
              </Button>
              {categories.map(category => (
                <Button 
                  key={category} 
                  variant={categoryFilter === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setCategoryFilter(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <main className="flex-grow bg-white">
        <div className="container mx-auto px-4 py-12">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">
              {filteredRegions.length} Wilayah Ditemukan
            </h2>
            
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Map className="h-4 w-4 mr-2" />
                Lihat Peta
              </Button>
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRegions.map((region) => (
              <Card key={region.id} className="overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="relative h-48">
                  <img
                    src={region.image}
                    alt={region.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <h3 className="absolute bottom-4 left-4 text-white text-xl font-bold">{region.name}</h3>
                  {region.category && (
                    <Badge className="absolute top-4 right-4 bg-white/80 text-foreground">
                      {region.category}
                    </Badge>
                  )}
                </div>
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-4">{region.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {region.traditions.map((tradition) => (
                      <Badge key={tradition} variant="outline" className="bg-batik-light/50">
                        {tradition}
                      </Badge>
                    ))}
                  </div>
                  <Button 
                    variant="ghost" 
                    className="w-full justify-between text-batik hover:text-batik hover:bg-batik-light/50"
                    asChild
                  >
                    <Link to={`/region/${region.id}`}>
                      Jelajahi Lebih Lanjut
                      <ChevronRight className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {filteredRegions.length === 0 && (
            <div className="text-center py-16">
              <p className="text-lg text-muted-foreground">Tidak ada wilayah yang sesuai dengan pencarian Anda.</p>
              <Button 
                className="mt-4" 
                variant="outline"
                onClick={() => {
                  setSearchTerm('');
                  setCategoryFilter(null);
                }}
              >
                Reset Pencarian
              </Button>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Explore;
