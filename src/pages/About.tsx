import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { BookOpen, Users, Map, BookMarked, Mail } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section with Banner Image */}
        <section className="bg-batik-light/30 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="overflow-hidden rounded-xl mb-8 shadow-lg">
                <AspectRatio ratio={16/9}>
                  <img 
                    src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" 
                    alt="Tim LENTERA" 
                    className="w-full h-full object-cover"
                  />
                </AspectRatio>
              </div>
              <div className="text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Tentang LENTERA</h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Menjembatani kekayaan budaya tradisional dengan teknologi digital modern
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* About LENTERA */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">LENTERA: Layanan Entry dan Telusur Ragam Adat Nusantara</h2>
                <p className="mb-4 text-lg">
                  LENTERA adalah platform digital komprehensif yang berfungsi sebagai pusat dokumentasi, penelusuran, 
                  dan visualisasi informasi mengenai beragam adat nusantara Indonesia.
                </p>
                <p className="mb-4">
                  Kami bertujuan untuk menciptakan repositori digital komprehensif untuk dokumentasi adat nusantara, 
                  memudahkan akses dan penelusuran informasi adat untuk berbagai keperluan (pendidikan, penelitian, pariwisata), 
                  dan memvisualisasikan kekayaan dan persebaran adat nusantara secara interaktif.
                </p>
                <p className="mb-6">
                  Dengan kolaborasi dari berbagai pemangku kepentingan, LENTERA berupaya menjadi platform referensi utama 
                  untuk informasi adat nusantara yang tervalidasi dan dapat diakses oleh siapa saja.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button className="bg-batik hover:bg-batik-dark">
                    <BookOpen className="mr-2 h-5 w-5" />
                    Pelajari Lebih Lanjut
                  </Button>
                  <Button variant="outline">
                    <Users className="mr-2 h-5 w-5" />
                    Tim Kami
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <img 
                  src="https://source.unsplash.com/random/600x800/?indonesia,culture" 
                  alt="Budaya Indonesia" 
                  className="rounded-lg shadow-lg"
                />
                <div className="grid grid-rows-2 gap-6">
                  <img 
                    src="https://source.unsplash.com/random/300x300/?indonesia,tradition" 
                    alt="Tradisi Indonesia" 
                    className="rounded-lg shadow-lg"
                  />
                  <img 
                    src="https://source.unsplash.com/random/300x300/?indonesia,craft" 
                    alt="Kerajinan Indonesia" 
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Vision & Mission */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Visi & Misi</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Kami berkomitmen untuk melestarikan dan memperkenalkan kekayaan budaya nusantara
                kepada generasi mendatang melalui teknologi digital yang inovatif.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-4">Visi</h3>
                <p className="mb-6">
                  Menjadi platform referensi utama untuk dokumentasi, penelusuran, dan
                  pembelajaran tentang keberagaman adat nusantara Indonesia yang komprehensif dan tervalidasi.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-batik">•</div>
                    <p>Membangun jembatan antara warisan budaya tradisional dengan generasi digital</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-batik">•</div>
                    <p>Menjadikan informasi adat nusantara mudah diakses oleh masyarakat global</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-batik">•</div>
                    <p>Menciptakan ekosistem pelestarian budaya yang berkelanjutan melalui teknologi</p>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-4">Misi</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-batik">1.</div>
                    <p>Mengumpulkan, mendokumentasikan, dan memvalidasi informasi tentang ragam adat nusantara</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-batik">2.</div>
                    <p>Mengembangkan sistem digital yang memudahkan penelusuran dan visualisasi informasi adat</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-batik">3.</div>
                    <p>Memfasilitasi kolaborasi antara komunitas adat, peneliti, pemerintah, dan masyarakat umum</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-batik">4.</div>
                    <p>Menyediakan materi pembelajaran interaktif tentang adat nusantara</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-batik">5.</div>
                    <p>Mempromosikan keberagaman budaya Indonesia kepada masyarakat global</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* Team Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Tim Pengembang</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                LENTERA dikembangkan oleh tim multidisiplin yang terdiri dari berbagai latar belakang keahlian.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {/* Sample team members */}
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-white rounded-lg overflow-hidden shadow-md">
                  <img 
                    src={`https://source.unsplash.com/random/300x300/?portrait,professional,${i}`} 
                    alt="Team Member" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-bold text-lg">Nama Pengembang {i}</h3>
                    <p className="text-batik text-sm">Posisi / Keahlian</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Contact Section */}
        <section className="py-16 bg-batik-light/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Hubungi Kami</h2>
              <p className="text-muted-foreground mb-8">
                Apakah Anda memiliki pertanyaan atau ingin berkolaborasi dengan LENTERA?
                Jangan ragu untuk menghubungi kami.
              </p>
              <Button size="lg" className="bg-batik hover:bg-batik-dark">
                <Mail className="mr-2 h-5 w-5" />
                Kirim Pesan
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
