import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Toaster } from 'react-hot-toast';

export const metadata = {
  title: 'Care.IO - Baby Sitting & Elderly Care Service Platform',
  description:
    'Book trusted baby sitting, elderly care, and sick care services.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-lime-50">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
    
        <Toaster position="top-right" />
      </body>
    </html>
  );
}