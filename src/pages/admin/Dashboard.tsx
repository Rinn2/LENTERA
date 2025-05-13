
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminLayout from '@/components/admin/AdminLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  
  useEffect(() => {
    // Cek status autentikasi
    const authStatus = localStorage.getItem('lentera_auth');
    if (!authStatus) {
      setIsAuthenticated(false);
      navigate('/login');
    }
  }, [navigate]);
  
  if (!isAuthenticated) {
    return null;
  }
  
  return (
    <AdminLayout title="Dashboard">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Wilayah</CardTitle>
            <CardDescription>Kelola data wilayah adat nusantara</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">7</p>
            <p className="text-muted-foreground">wilayah besar</p>
          </CardContent>
          <CardFooter>
            <Button onClick={() => navigate('/admin/regions')}>Kelola</Button>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Kategori</CardTitle>
            <CardDescription>Kelola kategori adat dan budaya</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">8</p>
            <p className="text-muted-foreground">kategori adat</p>
          </CardContent>
          <CardFooter>
            <Button onClick={() => navigate('/admin/categories')}>Kelola</Button>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Perpustakaan</CardTitle>
            <CardDescription>Kelola konten perpustakaan digital</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">24</p>
            <p className="text-muted-foreground">artikel & dokumen</p>
          </CardContent>
          <CardFooter>
            <Button onClick={() => navigate('/admin/library')}>Kelola</Button>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Pengunjung</CardTitle>
            <CardDescription>Statistik pengunjung situs</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">1,248</p>
            <p className="text-muted-foreground">pengunjung bulan ini</p>
          </CardContent>
          <CardFooter>
            <Button variant="outline">Lihat Detail</Button>
          </CardFooter>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
