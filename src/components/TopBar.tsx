
import React from 'react';
import { Bell, Search, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface TopBarProps {
  title: string;
  breadcrumbs?: string[];
  sidebarCollapsed: boolean;
}

const TopBar = ({ title, breadcrumbs, sidebarCollapsed }: TopBarProps) => {
  return (
    <div className={`
      fixed top-0 right-0 h-16 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 
      border-b border-border z-30 transition-all duration-300
      ${sidebarCollapsed ? 'left-16' : 'left-64'}
    `}>
      <div className="flex items-center justify-between h-full px-6">
        {/* Left side - Title and Breadcrumbs */}
        <div className="flex items-center space-x-4">
          <div>
            {breadcrumbs && breadcrumbs.length > 0 && (
              <div className="text-sm text-muted-foreground mb-1">
                {breadcrumbs.join(' > ')}
              </div>
            )}
            <h1 className="text-2xl font-heading font-bold">{title}</h1>
          </div>
        </div>

        {/* Center - Search */}
        <div className="flex-1 max-w-md mx-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search courses, lessons..."
              className="pl-10 h-10"
            />
          </div>
        </div>

        {/* Right side - Actions and Profile */}
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" className="p-2">
            <Bell className="w-5 h-5" />
          </Button>
          
          <div className="flex items-center space-x-3">
            <div className="text-right hidden sm:block">
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
