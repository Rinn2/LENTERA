
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminLayout from '@/components/admin/AdminLayout';

const LibraryManagement = () => {
  const navigate = useNavigate();
  
  // Cek autentikasi
  useEffect(() => {
    const authStatus = localStorage.getItem('lentera_auth');
    if (!authStatus) {
      navigate('/login');
    }
  }, [navigate]);
  
  return (
    <AdminLayout title="Kelola Perpustakaan">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Koleksi Perpustakaan Digital</h1>
        <p className="text-muted-foreground">Kelola konten perpustakaan digital adat nusantara</p>
      </div>
      
      {/* Tampilkan konten manajemen perpustakaan di sini */}
      <div className="rounded-md border p-8 text-center">
        <p className="text-muted-foreground">
          Fitur manajemen perpustakaan dalam pengembangan...
        </p>
      </div>
    </AdminLayout>
  );
};

export default LibraryManagement;
