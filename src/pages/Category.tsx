
import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ChevronRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

// Define the category data structure
interface CategoryData {
  id: string;
  name: string;
  icon: string;
  description: string;
  longDescription: string;
  bannerImage: string;
  items: Array<{
    id: string;
    name: string;
    region: string;
    description: string;
    image: string;
  }>;
}

// Sample data for categories
const categoriesData: Record<string, CategoryData> = {
  ritual: {
    id: 'ritual',
    name: 'Upacara Adat',
    icon: '🪔',
    description: 'Berbagai ritual dan upacara tradisional yang masih dilaksanakan hingga kini',
    longDescription: 'Upacara adat merupakan rangkaian aktivitas yang dilakukan secara tradisional sebagai wujud ekspresi religius, penghormatan kepada leluhur, atau perayaan momen penting dalam siklus kehidupan. Di Indonesia, terdapat ribuan upacara adat yang mencerminkan kekayaan budaya dan kearifan lokal yang beragam dari Sabang sampai Merauke.',
    bannerImage: 'https://source.unsplash.com/random/1600x400/?indonesia,ceremony',
    items: [
      {
        id: 'ngaben',
        name: 'Upacara Ngaben',
        region: 'Bali',
        description: 'Upacara kremasi untuk mengirim jiwa mendiang kembali ke alam sana',
        image: 'https://source.unsplash.com/random/600x400/?bali,ngaben'
      },
      {
        id: 'rambu-solo',
        name: 'Rambu Solo',
        region: 'Toraja, Sulawesi Selatan',
        description: 'Ritual pemakaman yang bisa berlangsung berhari-hari dengan pemotongan kerbau',
        image: 'https://source.unsplash.com/random/600x400/?toraja,funeral'
      },
      {
        id: 'sekaten',
        name: 'Sekaten',
        region: 'Yogyakarta & Surakarta',
        description: 'Perayaan memperingati kelahiran Nabi Muhammad SAW dengan tradisi gamelan',
        image: 'https://source.unsplash.com/random/600x400/?yogyakarta,sekaten'
      },
      {
        id: 'kasada',
        name: 'Yadnya Kasada',
        region: 'Suku Tengger, Jawa Timur',
        description: 'Upacara melempar sesaji ke kawah Gunung Bromo',
        image: 'https://source.unsplash.com/random/600x400/?bromo,kasada'
      },
      {
        id: 'tabuik',
        name: 'Tabuik',
        region: 'Pariaman, Sumatera Barat',
        description: 'Ritual memperingati wafatnya cucu Nabi Muhammad dengan arak-arakan',
        image: 'https://source.unsplash.com/random/600x400/?pariaman,tabuik'
      },
      {
        id: 'waisak',
        name: 'Waisak di Borobudur',
        region: 'Jawa Tengah',
        description: 'Perayaan hari suci umat Buddha dengan pelepasan lampion di Candi Borobudur',
        image: 'https://source.unsplash.com/random/600x400/?borobudur,waisak'
      }
    ]
  },
  textiles: {
    id: 'textiles',
    name: 'Tekstil & Tenun',
    icon: '🧵',
    description: 'Kerajinan tekstil tradisional dengan motif dan teknik pembuatan yang unik',
    longDescription: 'Seni tekstil Indonesia memiliki keragaman dan kedalaman makna yang luar biasa. Dari batik yang diakui UNESCO hingga tenun ikat dari berbagai daerah, kain-kain tradisional Indonesia tidak hanya berfungsi sebagai pakaian, tetapi juga sebagai simbol status, identitas budaya, dan media untuk menyampaikan falsafah hidup masyarakat pendukungnya.',
    bannerImage: 'https://source.unsplash.com/random/1600x400/?indonesia,textile',
    items: [
      {
        id: 'batik',
        name: 'Batik',
        region: 'Jawa',
        description: 'Kain bermotif yang dibuat dengan teknik perintang warna menggunakan malam (lilin)',
        image: 'https://source.unsplash.com/random/600x400/?indonesia,batik'
      },
      {
        id: 'songket',
        name: 'Songket',
        region: 'Sumatera',
        description: 'Kain tenun mewah dengan benang emas atau perak yang membentuk motif pada kain',
        image: 'https://source.unsplash.com/random/600x400/?indonesia,songket'
      },
      {
        id: 'ulos',
        name: 'Ulos',
        region: 'Batak, Sumatera Utara',
        description: 'Kain tenun tradisional Batak yang digunakan dalam berbagai upacara adat',
        image: 'https://source.unsplash.com/random/600x400/?indonesia,ulos'
      },
      {
        id: 'tenun-ikat',
        name: 'Tenun Ikat',
        region: 'Nusa Tenggara',
        description: 'Kain tenun dengan teknik mengikat benang sebelum dicelup untuk membentuk motif',
        image: 'https://source.unsplash.com/random/600x400/?indonesia,ikat'
      },
      {
        id: 'sasirangan',
        name: 'Sasirangan',
        region: 'Kalimantan Selatan',
        description: 'Kain tradisional Banjar yang dibuat dengan teknik jelujur dan celup',
        image: 'https://source.unsplash.com/random/600x400/?indonesia,sasirangan'
      },
      {
        id: 'gringsing',
        name: 'Gringsing',
        region: 'Tenganan, Bali',
        description: 'Kain double ikat langka yang dipercaya memiliki kekuatan magis untuk menangkal penyakit',
        image: 'https://source.unsplash.com/random/600x400/?bali,gringsing'
      }
    ]
  },
  dance: {
    id: 'dance',
    name: 'Tarian Tradisional',
    icon: '💃',
    description: 'Beragam tarian dari seluruh penjuru nusantara dengan filosofi mendalam',
    longDescription: 'Tarian tradisional Indonesia merupakan salah satu bentuk ekspresi seni yang paling dinamis, dengan ribuan jenis tarian yang tersebar dari Sabang sampai Merauke. Setiap tarian memiliki makna dan fungsi yang berbeda, mulai dari ritual keagamaan, perayaan panen, penghormatan kepada leluhur, hingga hiburan dan penyambutan tamu kehormatan.',
    bannerImage: 'https://source.unsplash.com/random/1600x400/?indonesia,dance',
    items: [
      {
        id: 'saman',
        name: 'Tari Saman',
        region: 'Aceh',
        description: 'Tarian dengan gerakan tangan dan badan cepat dan sinkron, diiringi nyanyian',
        image: 'https://source.unsplash.com/random/600x400/?aceh,saman'
      },
      {
        id: 'kecak',
        name: 'Tari Kecak',
        region: 'Bali',
        description: 'Tarian massal dengan iringan suara "cak" yang menceritakan Ramayana',
        image: 'https://source.unsplash.com/random/600x400/?bali,kecak'
      },
      {
        id: 'reog',
        name: 'Reog Ponorogo',
        region: 'Jawa Timur',
        description: 'Tarian dengan topeng besar berbentuk kepala singa dengan hiasan bulu merak',
        image: 'https://source.unsplash.com/random/600x400/?reog,ponorogo'
      },
      {
        id: 'pendet',
        name: 'Tari Pendet',
        region: 'Bali',
        description: 'Tarian penyambutan yang awalnya merupakan tarian persembahan di pura',
        image: 'https://source.unsplash.com/random/600x400/?bali,pendet'
      },
      {
        id: 'piring',
        name: 'Tari Piring',
        region: 'Sumatera Barat',
        description: 'Tarian Minangkabau yang dilakukan dengan piring di tangan, simbolisasi rasa syukur',
        image: 'https://source.unsplash.com/random/600x400/?minangkabau,piring'
      },
      {
        id: 'legong',
        name: 'Tari Legong',
        region: 'Bali',
        description: 'Tarian klasik Bali dengan gerakan halus dan rumit dengan ekspresi wajah kuat',
        image: 'https://source.unsplash.com/random/600x400/?bali,legong'
      }
    ]
  }
};

const Category = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const category = categoriesData[categoryId as string];
  
  if (!category) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Kategori tidak ditemukan</h1>
            <p className="mb-6">Maaf, kami tidak dapat menemukan informasi tentang kategori yang Anda cari.</p>
            <Button asChild>
              <Link to="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Kembali ke Beranda
              </Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Banner Image */}
      <div className="relative h-72 w-full">
        <div className="absolute inset-0">
          <img 
            src={category.bannerImage} 
            alt={category.name} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="container mx-auto">
            <Button variant="ghost" className="mb-4 text-white hover:bg-white/20" asChild>
              <Link to="/">
                <ArrowLeft className="mr-2 h-5 w-5" />
                Kembali
              </Link>
            </Button>
            <div className="flex items-center gap-4">
              <span className="text-5xl">{category.icon}</span>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">{category.name}</h1>
                <p className="text-white/90 max-w-2xl">{category.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl font-bold mb-4">Tentang {category.name}</h2>
          <p className="text-muted-foreground">{category.longDescription}</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {category.items.map((item) => (
            <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="relative h-48">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <h3 className="absolute bottom-4 left-4 text-white text-lg font-bold">{item.name}</h3>
                <Badge className="absolute top-4 right-4 bg-white/80 text-foreground">
                  {item.region}
                </Badge>
              </div>
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4">{item.description}</p>
                <Button 
                  variant="ghost" 
                  className="w-full justify-between text-batik hover:text-batik hover:bg-batik-light/50"
                >
                  Pelajari Lebih Lanjut
                  <ChevronRight className="h-4 w-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold mb-6">Jelajahi Kategori Lainnya</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {Object.values(categoriesData)
              .filter(cat => cat.id !== category.id)
              .map(cat => (
                <Button 
                  key={cat.id} 
                  variant="outline" 
                  size="lg" 
                  className="flex items-center gap-2"
                  asChild
                >
                  <Link to={`/category/${cat.id}`}>
                    <span>{cat.icon}</span>
                    {cat.name}
                  </Link>
                </Button>
              ))
            }
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Category;
