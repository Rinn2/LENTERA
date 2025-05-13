
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

const loginSchema = z.object({
  email: z.string().min(1, 'Email harus diisi').email('Format email tidak valid'),
  password: z.string().min(6, 'Password minimal 6 karakter'),
});

type LoginFormData = z.infer<typeof loginSchema>;

const Login = () => {
  const navigate = useNavigate();

  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  });

  const handleLogin = (data: LoginFormData) => {
    // Demo purposes only - in real app, this would connect to auth system
    console.log('Login attempted with:', data);
    
    // Mock credentials for demo (email: admin@lentera.id, password: admin123)
    if (data.email === 'admin@lentera.id' && data.password === 'admin123') {
      toast.success('Login berhasil');
      // Set a simple flag in localStorage to simulate authentication
      localStorage.setItem('lentera_auth', 'true');
      navigate('/admin');
    } else {
      toast.error('Email atau password salah');
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-batik-light/10">
      <div className="mx-auto w-full max-w-md rounded-lg border bg-white p-8 shadow-md">
        <div className="text-center">
          <h2 className="mb-2 text-3xl font-bold text-batik">LENTERA</h2>
          <p className="mb-6 text-muted-foreground">Admin Dashboard Login</p>
        </div>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleLogin)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="admin@lentera.id" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="Masukkan password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <Button type="submit" className="w-full">
              Masuk
            </Button>
          </form>
        </Form>
        
        <div className="mt-6 text-center text-sm">
          <Link to="#" className="text-batik hover:underline">
            Lupa Password?
          </Link>
          <span className="mx-2">•</span>
          <Link to="#" className="text-batik hover:underline">
            Buat Akun
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
