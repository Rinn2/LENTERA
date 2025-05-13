
import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

interface AdminLayoutProps {
  children: React.ReactNode;
  title: string;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children, title }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');

  const handleLogout = () => {
    localStorage.removeItem('lentera_auth');
    toast.success('Berhasil keluar dari sistem');
    navigate('/login');
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="hidden w-64 flex-shrink-0 flex-col bg-white shadow-md md:flex">
        <div className="flex h-16 items-center justify-center border-b">
          <h1 className="text-xl font-bold text-batik">LENTERA Admin</h1>
        </div>
        
        <div className="flex flex-1 flex-col p-4">
          <nav className="space-y-1">
            <Link 
              to="/admin" 
              className={`flex items-center rounded-md px-4 py-2 text-sm font-medium transition-colors ${isActive('/admin') ? 'bg-batik/10 text-batik' : 'hover:bg-gray-100'}`}
            >
              Dashboard
            </Link>
            <Link 
              to="/admin/regions" 
              className={`flex items-center rounded-md px-4 py-2 text-sm font-medium transition-colors ${isActive('/admin/regions') ? 'bg-batik/10 text-batik' : 'hover:bg-gray-100'}`}
            >
              Wilayah
            </Link>
            <Link 
              to="/admin/categories" 
              className={`flex items-center rounded-md px-4 py-2 text-sm font-medium transition-colors ${isActive('/admin/categories') ? 'bg-batik/10 text-batik' : 'hover:bg-gray-100'}`}
            >
              Kategori
            </Link>
            <Link 
              to="/admin/library" 
              className={`flex items-center rounded-md px-4 py-2 text-sm font-medium transition-colors ${isActive('/admin/library') ? 'bg-batik/10 text-batik' : 'hover:bg-gray-100'}`}
            >
              Perpustakaan
            </Link>
            <Link 
              to="/admin/about" 
              className={`flex items-center rounded-md px-4 py-2 text-sm font-medium transition-colors ${isActive('/admin/about') ? 'bg-batik/10 text-batik' : 'hover:bg-gray-100'}`}
            >
              Tentang
            </Link>
          </nav>
        </div>
        
        <div className="border-t p-4">
          <Button 
            variant="outline" 
            onClick={handleLogout} 
            className="w-full"
          >
            Keluar
          </Button>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex flex-1 flex-col">
        {/* Header */}
        <header className="flex h-16 items-center justify-between border-b bg-white px-6">
          <h2 className="text-lg font-semibold">{title}</h2>
          
          <div className="flex items-center space-x-4">
            <div className="relative w-64">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Cari..."
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="h-8 w-8 rounded-full bg-batik text-white flex items-center justify-center font-bold">
              A
            </div>
          </div>
        </header>
        
        {/* Page Content */}
        <main className="flex-1 overflow-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
