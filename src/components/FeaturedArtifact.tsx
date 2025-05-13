
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ChevronRight } from 'lucide-react';

const FeaturedArtifact = () => {
  return (
    <section className="relative py-32 bg-batik-pattern">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge variant="outline" className="mb-4 bg-white">Artefak Unggulan</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Keris Pusaka Nusantara</h2>
            <p className="text-lg mb-6">
              Keris merupakan senjata tikam khas Nusantara yang memiliki nilai filosofis, historis, dan spiritual yang mendalam. 
              Keris tidak hanya berfungsi sebagai senjata, tetapi juga sebagai simbol status, pusaka keluarga, dan bagian dari 
              identitas budaya yang menghubungkan manusia dengan leluhur dan kekuatan spiritual.
            </p>
            <div className="space-y-3 mb-8 text-sm md:text-base">
              <div className="flex">
                <span className="font-semibold w-36">Asal:</span>
                <span>Jawa, Bali, Sumatera, Sulawesi</span>
              </div>
              <div className="flex">
                <span className="font-semibold w-36">Usia:</span>
                <span>Abad ke-14 hingga sekarang</span>
              </div>
              <div className="flex">
                <span className="font-semibold w-36">Material:</span>
                <span>Besi, baja, nikel, emas, permata</span>
              </div>
              <div className="flex">
                <span className="font-semibold w-36">Fungsi:</span>
                <span>Senjata, pusaka, simbol status, bagian dari ritual</span>
              </div>
            </div>
            <Button className="bg-songket hover:bg-songket-dark">
              Pelajari Lebih Lanjut
              <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
          
          <div className="relative">
            <div className="relative z-10 aspect-[3/4] overflow-hidden rounded-lg">
              <img
                src="https://pusakakeris.com/wp-content/uploads/2021/03/Menilik-Lebih-Jauh-Sejarah-dan-Asal-Usul-Keris-Pusaka-Nusantara.jpg"
                alt="Keris Pusaka Nusantara"
                className="h-full w-full object-cover object-center shadow-xl"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-28 h-28 bg-ikat rounded-full opacity-20 z-0"></div>
            <div className="absolute -bottom-4 -left-4 w-40 h-40 bg-songket rounded-full opacity-20 z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedArtifact;
