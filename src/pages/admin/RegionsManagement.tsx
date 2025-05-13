
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import AdminLayout from '@/components/admin/AdminLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

// Interface untuk data region
interface Region {
  id: string;
  name: string;
  imageUrl: string;
  description: string;
}

// Data dummy untuk wilayah
const initialRegions: Region[] = [
  {
    id: '1',
    name: 'Sumatra',
    imageUrl: 'https://source.unsplash.com/photo-1465146344425-f00d5f5c8f07',
    description: 'Pulau Sumatra memiliki beragam suku dan budaya seperti Aceh, Batak, Minangkabau, dan lainnya dengan kekayaan adat yang beragam.'
  },
  {
    id: '2',
    name: 'Jawa',
    imageUrl: 'https://source.unsplash.com/photo-1472396961693-142e6e269027',
    description: 'Pulau Jawa dikenal dengan budaya Jawa, Sunda, Betawi, dan Madura dengan adat istiadat yang kaya akan filosofi hidup.'
  },
  {
    id: '3',
    name: 'Kalimantan',
    imageUrl: 'https://source.unsplash.com/photo-1433086966358-54859d0ed716',
    description: 'Kalimantan memiliki keragaman budaya dari suku Dayak, Banjar, dan lainnya dengan kearifan lokal yang khas.'
  },
  {
    id: '4',
    name: 'Sulawesi',
    imageUrl: 'https://source.unsplash.com/photo-1506744038136-46273834b3fb',
    description: 'Sulawesi memiliki budaya Bugis, Makassar, Toraja, dan Minahasa yang terkenal dengan ritual adat yang unik.'
  },
  {
    id: '5',
    name: 'Papua',
    imageUrl: 'https://source.unsplash.com/photo-1460925895917-afdab827c52f',
    description: 'Papua menyimpan keberagaman adat dari berbagai suku lokal dengan tradisi yang masih terjaga kelestariannya.'
  }
];

// Schema validasi form
const regionSchema = z.object({
  name: z.string().min(1, 'Nama wilayah harus diisi'),
  imageUrl: z.string().min(1, 'URL gambar harus diisi'),
  description: z.string().min(20, 'Deskripsi minimal 20 karakter')
});

type RegionFormData = z.infer<typeof regionSchema>;

const RegionsManagement = () => {
  const navigate = useNavigate();
  const [regions, setRegions] = useState<Region[]>(initialRegions);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [currentRegion, setCurrentRegion] = useState<Region | null>(null);

  // Setup form
  const form = useForm<RegionFormData>({
    resolver: zodResolver(regionSchema),
    defaultValues: {
      name: '',
      imageUrl: '',
      description: ''
    }
  });

  // Cek autentikasi
  React.useEffect(() => {
    const authStatus = localStorage.getItem('lentera_auth');
    if (!authStatus) {
      navigate('/login');
    }
  }, [navigate]);

  // Handler untuk tambah region baru
  const handleAddRegion = (data: RegionFormData) => {
    const newRegion: Region = {
      id: Date.now().toString(),
      name: data.name,
      imageUrl: data.imageUrl,
      description: data.description
    };
    
    setRegions([...regions, newRegion]);
    toast.success('Wilayah berhasil ditambahkan');
    setIsAddDialogOpen(false);
    form.reset();
  };

  // Handler untuk edit region
  const handleEditRegion = (data: RegionFormData) => {
    if (!currentRegion) return;
    
    const updatedRegions = regions.map(region => 
      region.id === currentRegion.id 
        ? { ...region, ...data } 
        : region
    );
    
    setRegions(updatedRegions);
    toast.success('Wilayah berhasil diperbarui');
    setIsEditDialogOpen(false);
  };

  // Handler untuk hapus region
  const handleDeleteRegion = () => {
    if (!currentRegion) return;
    
    const updatedRegions = regions.filter(region => region.id !== currentRegion.id);
    setRegions(updatedRegions);
    toast.success('Wilayah berhasil dihapus');
    setIsDeleteDialogOpen(false);
  };

  // Handler untuk membuka dialog edit
  const openEditDialog = (region: Region) => {
    setCurrentRegion(region);
    form.reset({
      name: region.name,
      imageUrl: region.imageUrl,
      description: region.description
    });
    setIsEditDialogOpen(true);
  };

  // Handler untuk membuka dialog hapus
  const openDeleteDialog = (region: Region) => {
    setCurrentRegion(region);
    setIsDeleteDialogOpen(true);
  };

  return (
    <AdminLayout title="Kelola Wilayah">
      <div className="mb-6 flex justify-between">
        <h1 className="text-2xl font-bold">Daftar Wilayah</h1>
        <Button onClick={() => {
          form.reset();
          setIsAddDialogOpen(true);
        }}>
          Tambah Wilayah
        </Button>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nama</TableHead>
              <TableHead>Gambar</TableHead>
              <TableHead className="hidden md:table-cell">Deskripsi</TableHead>
              <TableHead>Aksi</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {regions.map(region => (
              <TableRow key={region.id}>
                <TableCell className="font-medium">{region.name}</TableCell>
                <TableCell>
                  <img 
                    src={region.imageUrl} 
                    alt={region.name}
                    className="h-16 w-24 rounded object-cover" 
                  />
                </TableCell>
                <TableCell className="hidden max-w-md truncate md:table-cell">
                  {region.description}
                </TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => openEditDialog(region)}
                    >
                      Edit
                    </Button>
                    <Button 
                      variant="destructive" 
                      size="sm"
                      onClick={() => openDeleteDialog(region)}
                    >
                      Hapus
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Dialog Tambah Region */}
      <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Tambah Wilayah Baru</DialogTitle>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleAddRegion)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nama Wilayah</FormLabel>
                    <FormControl>
                      <Input placeholder="Masukkan nama wilayah" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="imageUrl"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>URL Gambar</FormLabel>
                    <FormControl>
                      <Input placeholder="Masukkan URL gambar" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Deskripsi</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Masukkan deskripsi wilayah" 
                        rows={5}
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <DialogFooter>
                <Button type="submit">Simpan</Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>

      {/* Dialog Edit Region */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Wilayah</DialogTitle>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleEditRegion)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nama Wilayah</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="imageUrl"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>URL Gambar</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Deskripsi</FormLabel>
                    <FormControl>
                      <Textarea 
                        rows={5}
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <DialogFooter>
                <Button type="submit">Perbarui</Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>

      {/* Dialog Hapus Region */}
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Hapus Wilayah</DialogTitle>
          </DialogHeader>
          <p>
            Anda yakin ingin menghapus wilayah <strong>{currentRegion?.name}</strong>? 
            Tindakan ini tidak dapat dibatalkan.
          </p>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDeleteDialogOpen(false)}>
              Batal
            </Button>
            <Button variant="destructive" onClick={handleDeleteRegion}>
              Hapus
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </AdminLayout>
  );
};

export default RegionsManagement;
