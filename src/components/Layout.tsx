
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import TopBar from './TopBar';
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';
import { useIsMobile } from '@/hooks/use-mobile';

interface LayoutProps {
  children: React.ReactNode;
  title: string;
  breadcrumbs?: string[];
}

const Layout = ({ children, title, breadcrumbs }: LayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const isMobile = useIsMobile();

  return (
    <SidebarProvider>
      <div className="min-h-screen w-full flex">
        <Sidebar 
          collapsed={false} 
          onToggle={() => setSidebarOpen(!sidebarOpen)}
        />
        
        <SidebarInset className="flex-1">
          <TopBar 
            title={title}
            breadcrumbs={breadcrumbs}
            sidebarCollapsed={false}
          />
          
          <main className="flex-1 p-4 md:p-6 pt-20 md:pt-24">
            {children}
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default Layout;
