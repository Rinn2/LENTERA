
import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminLayout from '@/components/admin/AdminLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Plus, Pencil, Trash2, Search, Upload, Link, Check, Image } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'sonner';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface CategoryItem {
  id: string;
  name: string;
  description: string;
  image: string;
  items: number;
}

const demoCategories: CategoryItem[] = [
  {
    id: "budaya",
    name: "Budaya",
    description: "Ragam budaya dan tradisi dari berbagai suku dan etnis di Indonesia",
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    items: 24
  },
  {
    id: "wisata",
    name: "Wisata",
    description: "Destinasi wisata berbasis budaya di seluruh nusantara",
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    items: 18
  },
  {
    id: "kuliner",
    name: "Kuliner",
    description: "Kekayaan kuliner tradisional Indonesia dengan sejarah dan filosofi",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    items: 32
  },
  {
    id: "sejarah",
    name: "Sejarah",
    description: "Perjalanan sejarah bangsa Indonesia dan pengaruhnya terhadap budaya",
    image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    items: 15
  }
];

// Schema for form validation
const categorySchema = z.object({
  name: z.string().min(1, 'Nama kategori harus diisi'),
  description: z.string().min(10, 'Deskripsi minimal 10 karakter'),
  image: z.string().min(1, 'Gambar harus diisi'),
});

type CategoryFormData = z.infer<typeof categorySchema>;

const CategoriesManagement = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState<CategoryItem[]>(demoCategories);
  const [searchTerm, setSearchTerm] = useState('');
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [currentCategory, setCurrentCategory] = useState<CategoryItem | null>(null);
  const [imageUploadTab, setImageUploadTab] = useState<string>("link");
  const [imagePreview, setImagePreview] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  // Form setup
  const form = useForm<CategoryFormData>({
    resolver: zodResolver(categorySchema),
    defaultValues: {
      name: '',
      description: '',
      image: '',
    }
  });

  // Cek autentikasi
  useEffect(() => {
    const authStatus = localStorage.getItem('lentera_auth');
    if (!authStatus) {
      navigate('/login');
    }
  }, [navigate]);

  const filteredCategories = categories.filter(category => 
    category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    category.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Image upload handlers
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    
    // Validate file format
    const validFormats = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];
    if (!validFormats.includes(file.type)) {
      toast.error('Format file tidak didukung. Gunakan JPG, PNG, WEBP, atau GIF');
      return;
    }
    
    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      toast.error('Ukuran file terlalu besar. Maksimal 5MB');
      return;
    }
    
    // Create a preview of the uploaded image
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        setImagePreview(reader.result);
        form.setValue('image', reader.result);
      }
    };
    reader.readAsDataURL(file);
  };
  
  const handleLinkInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const url = event.target.value;
    setImagePreview(url);
    form.setValue('image', url);
  };
  
  // Add category handler
  const handleAddCategory = (data: CategoryFormData) => {
    const newCategory: CategoryItem = {
      id: data.name.toLowerCase().replace(/\s+/g, '-'),
      name: data.name,
      description: data.description,
      image: data.image,
      items: 0
    };
    
    setCategories([...categories, newCategory]);
    toast.success('Kategori berhasil ditambahkan');
    setIsAddDialogOpen(false);
    form.reset();
    setImagePreview("");
  };

  // Edit category handler
  const handleEditCategory = (data: CategoryFormData) => {
    if (!currentCategory) return;
    
    const updatedCategories = categories.map(category => 
      category.id === currentCategory.id 
        ? { ...category, name: data.name, description: data.description, image: data.image } 
        : category
    );
    
    setCategories(updatedCategories);
    toast.success('Kategori berhasil diperbarui');
    setIsEditDialogOpen(false);
    form.reset();
    setImagePreview("");
  };

  // Delete category handler
  const handleDeleteCategory = () => {
    if (!currentCategory) return;
    
    const updatedCategories = categories.filter(category => category.id !== currentCategory.id);
    setCategories(updatedCategories);
    toast.success('Kategori berhasil dihapus');
    setIsDeleteDialogOpen(false);
  };

  // Open edit dialog handler
  const openEditDialog = (category: CategoryItem) => {
    setCurrentCategory(category);
    form.reset({
      name: category.name,
      description: category.description,
      image: category.image
    });
    setImagePreview(category.image);
    setIsEditDialogOpen(true);
  };

  // Open delete dialog handler
  const openDeleteDialog = (category: CategoryItem) => {
    setCurrentCategory(category);
    setIsDeleteDialogOpen(true);
  };
  
  return (
    <AdminLayout title="Kelola Kategori">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Daftar Kategori</h1>
        <p className="text-muted-foreground">Kelola kategori adat dan budaya nusantara</p>
      </div>
      
      <div className="flex flex-col sm:flex-row justify-between gap-4 mb-6">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Cari kategori..."
            className="pl-9"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <Button onClick={() => {
          form.reset();
          setImagePreview("");
          setImageUploadTab("link");
          setIsAddDialogOpen(true);
        }}>
          <Plus className="mr-2 h-4 w-4" /> Tambah Kategori
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCategories.map((category) => (
          <Card key={category.id} className="overflow-hidden">
            <AspectRatio ratio={16/9}>
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover"
              />
            </AspectRatio>
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-bold">{category.name}</h3>
                <div className="text-xs bg-muted px-2 py-1 rounded-full">
                  {category.items} konten
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                {category.description}
              </p>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex-1" onClick={() => openEditDialog(category)}>
                  <Pencil className="mr-1 h-4 w-4" /> Edit
                </Button>
                <Button variant="destructive" size="sm" className="flex-1" onClick={() => openDeleteDialog(category)}>
                  <Trash2 className="mr-1 h-4 w-4" /> Hapus
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      {filteredCategories.length === 0 && (
        <div className="rounded-md border p-8 text-center">
          <p className="text-muted-foreground">
            Tidak ada kategori yang ditemukan. Silakan buat kategori baru atau ubah kata kunci pencarian.
          </p>
        </div>
      )}
      
      {/* Dialog Tambah Kategori */}
      <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Tambah Kategori</DialogTitle>
          </DialogHeader>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleAddCategory)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nama Kategori</FormLabel>
                    <FormControl>
                      <Input placeholder="Masukkan nama kategori" {...field} />
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
                        placeholder="Masukkan deskripsi kategori" 
                        rows={3} 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="image"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Gambar</FormLabel>
                    <FormControl>
                      <div className="space-y-4">
                        <Tabs value={imageUploadTab} onValueChange={setImageUploadTab}>
                          <TabsList className="grid w-full grid-cols-2">
                            <TabsTrigger value="link">
                              <Link className="mr-2 h-4 w-4" />
                              Link URL
                            </TabsTrigger>
                            <TabsTrigger value="upload">
                              <Upload className="mr-2 h-4 w-4" />
                              Unggah File
                            </TabsTrigger>
                          </TabsList>
                          <TabsContent value="link">
                            <Input 
                              placeholder="Masukkan URL gambar" 
                              onChange={handleLinkInput}
                              defaultValue={field.value}
                            />
                          </TabsContent>
                          <TabsContent value="upload">
                            <div className="flex flex-col gap-2">
                              <Button 
                                type="button"
                                variant="outline" 
                                onClick={() => fileInputRef.current?.click()}
                                className="w-full h-20 flex-col gap-2"
                              >
                                <Image className="h-5 w-5" />
                                <span>Pilih File</span>
                                <span className="text-xs text-muted-foreground">
                                  JPG, PNG, WEBP, GIF (maks 5MB)
                                </span>
                              </Button>
                              <input
                                type="file"
                                ref={fileInputRef}
                                className="hidden"
                                accept="image/jpeg,image/png,image/webp,image/gif"
                                onChange={handleImageUpload}
                              />
                            </div>
                          </TabsContent>
                        </Tabs>
                        
                        {imagePreview && (
                          <div className="mt-4">
                            <p className="text-sm mb-2 font-medium">Preview:</p>
                            <div className="border rounded-md overflow-hidden">
                              <AspectRatio ratio={16/9}>
                                <img
                                  src={imagePreview}
                                  alt="Preview"
                                  className="w-full h-full object-cover"
                                  onError={() => {
                                    setImagePreview("");
                                    toast.error("Gambar tidak dapat dimuat. Periksa URL atau pilih file lain");
                                  }}
                                />
                              </AspectRatio>
                            </div>
                          </div>
                        )}
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <DialogFooter>
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={() => setIsAddDialogOpen(false)}
                >
                  Batal
                </Button>
                <Button 
                  type="submit" 
                  disabled={!form.formState.isValid || !imagePreview}
                >
                  <Check className="mr-2 h-4 w-4" />
                  Simpan
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
      
      {/* Dialog Edit Kategori */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Edit Kategori</DialogTitle>
          </DialogHeader>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleEditCategory)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nama Kategori</FormLabel>
                    <FormControl>
                      <Input placeholder="Masukkan nama kategori" {...field} />
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
                        placeholder="Masukkan deskripsi kategori" 
                        rows={3} 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="image"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Gambar</FormLabel>
                    <FormControl>
                      <div className="space-y-4">
                        <Tabs value={imageUploadTab} onValueChange={setImageUploadTab}>
                          <TabsList className="grid w-full grid-cols-2">
                            <TabsTrigger value="link">
                              <Link className="mr-2 h-4 w-4" />
                              Link URL
                            </TabsTrigger>
                            <TabsTrigger value="upload">
                              <Upload className="mr-2 h-4 w-4" />
                              Unggah File
                            </TabsTrigger>
                          </TabsList>
                          <TabsContent value="link">
                            <Input 
                              placeholder="Masukkan URL gambar" 
                              onChange={handleLinkInput}
                              defaultValue={imagePreview}
                            />
                          </TabsContent>
                          <TabsContent value="upload">
                            <div className="flex flex-col gap-2">
                              <Button 
                                type="button"
                                variant="outline" 
                                onClick={() => fileInputRef.current?.click()}
                                className="w-full h-20 flex-col gap-2"
                              >
                                <Image className="h-5 w-5" />
                                <span>Pilih File</span>
                                <span className="text-xs text-muted-foreground">
                                  JPG, PNG, WEBP, GIF (maks 5MB)
                                </span>
                              </Button>
                              <input
                                type="file"
                                ref={fileInputRef}
                                className="hidden"
                                accept="image/jpeg,image/png,image/webp,image/gif"
                                onChange={handleImageUpload}
                              />
                            </div>
                          </TabsContent>
                        </Tabs>
                        
                        {imagePreview && (
                          <div className="mt-4">
                            <p className="text-sm mb-2 font-medium">Preview:</p>
                            <div className="border rounded-md overflow-hidden">
                              <AspectRatio ratio={16/9}>
                                <img
                                  src={imagePreview}
                                  alt="Preview"
                                  className="w-full h-full object-cover"
                                  onError={() => {
                                    setImagePreview("");
                                    toast.error("Gambar tidak dapat dimuat. Periksa URL atau pilih file lain");
                                  }}
                                />
                              </AspectRatio>
                            </div>
                          </div>
                        )}
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <DialogFooter>
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={() => setIsEditDialogOpen(false)}
                >
                  Batal
                </Button>
                <Button 
                  type="submit" 
                  disabled={!form.formState.isValid || !imagePreview}
                >
                  <Check className="mr-2 h-4 w-4" />
                  Perbarui
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
      
      {/* Dialog Hapus Kategori */}
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Hapus Kategori</DialogTitle>
          </DialogHeader>
          <p>
            Apakah Anda yakin ingin menghapus kategori <strong>{currentCategory?.name}</strong>? 
            Tindakan ini tidak dapat dibatalkan.
          </p>
          <DialogFooter>
            <Button 
              variant="outline" 
              onClick={() => setIsDeleteDialogOpen(false)}
            >
              Batal
            </Button>
            <Button 
              variant="destructive" 
              onClick={handleDeleteCategory}
            >
              Hapus
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </AdminLayout>
  );
};

export default CategoriesManagement;
