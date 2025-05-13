
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminLayout from '@/components/admin/AdminLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Upload, Save, Plus, Trash2 } from 'lucide-react';

const AboutManagement = () => {
  const navigate = useNavigate();
  
  // Cek autentikasi
  useEffect(() => {
    const authStatus = localStorage.getItem('lentera_auth');
    if (!authStatus) {
      navigate('/login');
    }
  }, [navigate]);
  
  return (
    <AdminLayout title="Kelola Halaman Tentang">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Pengaturan Halaman Tentang</h1>
        <p className="text-muted-foreground">Kelola informasi tentang platform LENTERA</p>
      </div>
      
      <Tabs defaultValue="general" className="space-y-4">
        <TabsList>
          <TabsTrigger value="general">Umum</TabsTrigger>
          <TabsTrigger value="vision">Visi & Misi</TabsTrigger>
          <TabsTrigger value="team">Tim</TabsTrigger>
          <TabsTrigger value="contact">Kontak</TabsTrigger>
        </TabsList>
        
        <TabsContent value="general" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Banner Utama</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="overflow-hidden rounded-md border">
                  <AspectRatio ratio={16/9}>
                    <img 
                      src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" 
                      alt="Banner Tentang" 
                      className="w-full h-full object-cover"
                    />
                  </AspectRatio>
                </div>
                <div className="flex items-center gap-4">
                  <Button variant="outline">
                    <Upload className="mr-2 h-4 w-4" /> Ganti Gambar
                  </Button>
                  <Button variant="destructive">
                    <Trash2 className="mr-2 h-4 w-4" /> Hapus Gambar
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Informasi Dasar</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Judul Halaman</label>
                <Input defaultValue="Tentang LENTERA" />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Tagline</label>
                <Input defaultValue="Menjembatani kekayaan budaya tradisional dengan teknologi digital modern" />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Deskripsi</label>
                <Textarea rows={5} defaultValue="LENTERA adalah platform digital komprehensif yang berfungsi sebagai pusat dokumentasi, penelusuran, dan visualisasi informasi mengenai beragam adat nusantara Indonesia." />
              </div>
              <Button>
                <Save className="mr-2 h-4 w-4" /> Simpan Perubahan
              </Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Galeri Foto</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                <div className="overflow-hidden rounded-md border aspect-square">
                  <img 
                    src="https://source.unsplash.com/random/600x800/?indonesia,culture" 
                    alt="Galeri LENTERA" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="overflow-hidden rounded-md border aspect-square">
                  <img 
                    src="https://source.unsplash.com/random/300x300/?indonesia,tradition" 
                    alt="Galeri LENTERA" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="overflow-hidden rounded-md border aspect-square">
                  <img 
                    src="https://source.unsplash.com/random/300x300/?indonesia,craft" 
                    alt="Galeri LENTERA" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <Button>
                <Plus className="mr-2 h-4 w-4" /> Tambah Foto
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="vision" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Visi & Misi</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Visi</label>
                <Textarea rows={4} defaultValue="Menjadi platform referensi utama untuk dokumentasi, penelusuran, dan pembelajaran tentang keberagaman adat nusantara Indonesia yang komprehensif dan tervalidasi." />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Misi</label>
                <Textarea rows={6} defaultValue="1. Mengumpulkan, mendokumentasikan, dan memvalidasi informasi tentang ragam adat nusantara
2. Mengembangkan sistem digital yang memudahkan penelusuran dan visualisasi informasi adat
3. Memfasilitasi kolaborasi antara komunitas adat, peneliti, pemerintah, dan masyarakat umum
4. Menyediakan materi pembelajaran interaktif tentang adat nusantara
5. Mempromosikan keberagaman budaya Indonesia kepada masyarakat global" />
              </div>
              <Button>
                <Save className="mr-2 h-4 w-4" /> Simpan Perubahan
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="team" className="space-y-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Tim Pengembang</CardTitle>
              <Button size="sm">
                <Plus className="mr-2 h-4 w-4" /> Tambah Anggota
              </Button>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <Card key={i} className="overflow-hidden">
                    <div className="aspect-square">
                      <img 
                        src={`https://source.unsplash.com/random/300x300/?portrait,professional,${i}`}
                        alt={`Tim Member ${i}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-bold">Nama Pengembang {i}</h3>
                      <p className="text-sm text-muted-foreground">Posisi / Keahlian</p>
                      <div className="flex gap-2 mt-2">
                        <Button variant="outline" size="sm" className="flex-1">Edit</Button>
                        <Button variant="destructive" size="sm" className="flex-1">Hapus</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="contact" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Informasi Kontak</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Email</label>
                <Input defaultValue="contact@lentera.id" />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Telepon</label>
                <Input defaultValue="+62 8123456789" />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Alamat</label>
                <Textarea rows={3} defaultValue="Jl. Contoh No. 123, Jakarta Pusat, DKI Jakarta 10110, Indonesia" />
              </div>
              <Button>
                <Save className="mr-2 h-4 w-4" /> Simpan Perubahan
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </AdminLayout>
  );
};

export default AboutManagement;
