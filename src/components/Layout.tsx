
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import TopBar from './TopBar';

interface LayoutProps {
  children: React.ReactNode;
  title: string;
  breadcrumbs?: string[];
}

const Layout = ({ children, title, breadcrumbs }: LayoutProps) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Sidebar 
        collapsed={sidebarCollapsed} 
        onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
      />
      
      <TopBar 
        title={title}
        breadcrumbs={breadcrumbs}
        sidebarCollapsed={sidebarCollapsed}
      />
      
      <main className={`
        pt-16 transition-all duration-300
        ${sidebarCollapsed ? 'ml-16' : 'ml-64'}
      `}>
        <div className="p-6">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;
