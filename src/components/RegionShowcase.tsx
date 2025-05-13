
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Region {
  id: string;
  name: string;
  description: string;
  image: string;
  traditions: string[];
}

const regions: Region[] = [
  {
    id: 'sumatera',
    name: 'Sumatera',
    description: 'Pulau Sumatera kaya akan keberagaman budaya dengan pengaruh adat Minangkabau, Batak, Aceh, dan Melayu.',
    image: 'https://kebudayaan.kemdikbud.go.id/bpcbjambi/wp-content/uploads/sites/30/2022/01/2b.jpg',
    traditions: ['Tari Saman', 'Rumah Gadang', 'Ulos', 'Rendang']
  },
  {
    id: 'jawa',
    name: 'Jawa',
    description: 'Pulau Jawa memiliki adat yang kuat dipengaruhi oleh kerajaan-kerajaan Hindu-Buddha dan Islam yang pernah berkuasa.',
    image: 'https://a.travel-assets.com/findyours-php/viewfinder/images/res70/210000/210075-Java.jpg',
    traditions: ['Wayang Kulit', 'Batik', 'Gamelan', 'Sekaten']
  },
  {
    id: 'kalimantan',
    name: 'Kalimantan',
    description: 'Budaya Dayak dan Melayu mendominasi pulau Kalimantan dengan ritual adat dan kesenian yang khas.',
    image: 'https://www.kulkulbali.co/public/uploads/posts/qRk9nWIvpADbDT24V0oOm3VzIq8mHU-metaS0FMSU1BTlRBLUJBUkFUICgxKS5qcGc=-.jpg',
    traditions: ['Tari Enggang', 'Mandau', 'Rumah Betang', 'Tattoo Dayak']
  },
  {
    id: 'sulawesi',
    name: 'Sulawesi',
    description: 'Sulawesi memiliki beragam suku seperti Bugis, Makassar, Toraja, dan Minahasa dengan adat istiadat unik.',
    image: 'https://cdn.timesmedia.co.id/images/2020/08/25/Pulau-Sombori-kerap-dijuluki-Raja-Ampat.jpg',
    traditions: ['Rambu Solo', 'Tongkonan', 'Tari Kipas', 'Upacara Ma\'nene']
  },
  {
    id: 'bali',
    name: 'Bali & Nusa Tenggara',
    description: 'Kebudayaan Hindu Bali dan tradisi NTT/NTB yang kaya menjadikan kawasan ini unik dan beragam.',
    image: 'https://titastory.id/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-04-at-14.50.01-2.jpeg',
    traditions: ['Tari Kecak', 'Upacara Ngaben', 'Tenun Ikat', 'Pasola']
  },
  {
    id: 'maluku',
    name: 'Maluku & Papua',
    description: 'Wilayah timur Indonesia dengan adat Papua dan Maluku yang khas dan masih sangat terjaga keasliannya.',
    image: 'https://img2.beritasatu.com/cache/beritasatu/480x310-3/2023/05/1684901325-700x499.webp',
    traditions: ['Tari Perang', 'Upacara Wor', 'Ukiran Asmat', 'Honai']
  }
];

const RegionShowcase = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Eksplorasi Budaya Nusantara</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Temukan kekayaan tradisi dari berbagai wilayah di Indonesia, dari Sabang hingga Merauke,
            setiap daerah memiliki keunikan budaya yang telah diwariskan selama berabad-abad.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {regions.map((region) => (
            <Card key={region.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 border-none">
              <div className="relative h-48">
                <img
                  src={region.image}
                  alt={region.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <h3 className="absolute bottom-4 left-4 text-white text-xl font-bold">{region.name}</h3>
              </div>
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4">{region.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {region.traditions.map((tradition) => (
                    <Badge key={tradition} variant="outline" className="bg-batik-light text-batik-dark">
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
        
        <div className="mt-12 text-center">
          <Button size="lg" className="bg-batik hover:bg-batik-dark" asChild>
            <Link to="/explore">
              Lihat Semua Daerah
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RegionShowcase;
