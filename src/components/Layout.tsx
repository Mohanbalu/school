import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { MessageCircle } from 'lucide-react';

const Layout = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      
      {/* WhatsApp Button */}
      <a 
        href="https://wa.me/919876543210" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all active:scale-95 flex items-center justify-center"
      >
        <MessageCircle size={32} />
        <span className="absolute right-full mr-4 bg-white text-navy px-4 py-2 rounded-xl text-sm font-bold shadow-lg whitespace-nowrap opacity-0 hover:opacity-100 transition-opacity hidden md:block">
          Chat with us
        </span>
      </a>
    </div>
  );
};

export default Layout;
