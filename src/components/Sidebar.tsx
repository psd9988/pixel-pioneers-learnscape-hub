
import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  BookOpen, 
  User, 
  GraduationCap,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

const Sidebar = ({ collapsed, onToggle }: SidebarProps) => {
  const navItems = [
    { 
      title: 'Dashboard', 
      href: '/', 
      icon: LayoutDashboard 
    },
    { 
      title: 'My Courses', 
      href: '/courses', 
      icon: BookOpen 
    },
    { 
      title: 'Profile', 
      href: '/profile', 
      icon: User 
    }
  ];

  return (
    <div className={`
      fixed left-0 top-0 h-screen bg-sidebar border-r border-sidebar-border transition-all duration-300 z-40
      ${collapsed ? 'w-16' : 'w-64'}
    `}>
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-sidebar-border">
        {!collapsed && (
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-pixel-purple to-pixel-blue rounded-lg flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
            <span className="font-heading font-bold text-lg text-sidebar-foreground">
              Pixel Pioneers
            </span>
          </div>
        )}
        
        <Button
          variant="ghost"
          size="sm"
          onClick={onToggle}
          className="p-2 hover:bg-sidebar-accent"
        >
          {collapsed ? (
            <ChevronRight className="w-4 h-4" />
          ) : (
            <ChevronLeft className="w-4 h-4" />
          )}
        </Button>
      </div>

      {/* Navigation */}
      <nav className="p-4 space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.href}
              to={item.href}
              end={item.href === '/'}
              className={({ isActive }) =>
                `flex items-center space-x-3 px-3 py-3 rounded-lg transition-colors group ${
                  isActive
                    ? 'bg-sidebar-accent text-sidebar-primary font-medium'
                    : 'text-sidebar-foreground hover:bg-sidebar-accent/50'
                }`
              }
            >
              <Icon className="w-5 h-5 flex-shrink-0" />
              {!collapsed && (
                <span className="text-sm font-medium">{item.title}</span>
              )}
            </NavLink>
          );
        })}
      </nav>

      {/* Footer */}
      {!collapsed && (
        <div className="absolute bottom-4 left-4 right-4">
          <div className="pixel-card bg-gradient-to-r from-pixel-purple/10 to-pixel-blue/10 border-pixel-purple/20">
            <h4 className="font-heading font-semibold text-sm mb-2">
              Ready to level up?
            </h4>
            <p className="text-xs text-muted-foreground mb-3">
              Join our premium courses for advanced content
            </p>
            <Button size="sm" className="w-full pixel-button-primary text-xs">
              Upgrade Now
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
