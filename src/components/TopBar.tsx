
import React from 'react';
import { Bell, Search, User, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { SidebarTrigger } from '@/components/ui/sidebar';

interface TopBarProps {
  title: string;
  breadcrumbs?: string[];
  sidebarCollapsed: boolean;
}

const TopBar = ({ title, breadcrumbs, sidebarCollapsed }: TopBarProps) => {
  return (
    <div className="fixed top-0 left-0 right-0 h-16 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border z-30 md:left-0">
      <div className="flex items-center justify-between h-full px-4 md:px-6">
        {/* Left side - Mobile menu and Title */}
        <div className="flex items-center space-x-4">
          <div className="md:hidden">
            <SidebarTrigger />
          </div>
          <div>
            {breadcrumbs && breadcrumbs.length > 0 && (
              <div className="text-xs md:text-sm text-muted-foreground mb-1 hidden sm:block">
                {breadcrumbs.join(' > ')}
              </div>
            )}
            <h1 className="text-lg md:text-2xl font-heading font-bold truncate">{title}</h1>
          </div>
        </div>

        {/* Center - Search (hidden on mobile) */}
        <div className="flex-1 max-w-md mx-4 md:mx-8 hidden md:block">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search courses, lessons..."
              className="pl-10 h-10"
            />
          </div>
        </div>

        {/* Right side - Actions and Profile */}
        <div className="flex items-center space-x-2 md:space-x-4">
          <Button variant="ghost" size="sm" className="p-2 md:hidden">
            <Search className="w-5 h-5" />
          </Button>
          
          <Button variant="ghost" size="sm" className="p-2">
            <Bell className="w-5 h-5" />
          </Button>
          
          <div className="flex items-center space-x-2 md:space-x-3">
            <div className="text-right hidden lg:block">
              <div className="text-sm font-medium">Alex Johnson</div>
              <div className="text-xs text-muted-foreground">Student</div>
            </div>
            <div className="w-8 h-8 bg-gradient-to-br from-pixel-purple to-pixel-blue rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
