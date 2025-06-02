
import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  BookOpen, 
  User, 
  GraduationCap,
  Menu
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sidebar as SidebarPrimitive,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  SidebarFooter,
  useSidebar,
} from '@/components/ui/sidebar';

interface SidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

const Sidebar = ({ collapsed, onToggle }: SidebarProps) => {
  const { state } = useSidebar();
  const isCollapsed = state === 'collapsed';

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
    <SidebarPrimitive>
      <SidebarHeader className="border-b border-sidebar-border p-4">
        <div className="flex items-center justify-between">
          {!isCollapsed && (
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-pixel-purple to-pixel-blue rounded-lg flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <span className="font-heading font-bold text-lg text-sidebar-foreground">
                Pixel Pioneers
              </span>
            </div>
          )}
          <SidebarTrigger />
        </div>
      </SidebarHeader>

      <SidebarContent className="p-4">
        <SidebarMenu>
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <SidebarMenuItem key={item.href}>
                <SidebarMenuButton asChild>
                  <NavLink
                    to={item.href}
                    end={item.href === '/'}
                    className={({ isActive }) =>
                      `flex items-center space-x-3 px-3 py-3 rounded-lg transition-colors group w-full ${
                        isActive
                          ? 'bg-sidebar-accent text-sidebar-primary font-medium'
                          : 'text-sidebar-foreground hover:bg-sidebar-accent/50'
                      }`
                    }
                  >
                    <Icon className="w-5 h-5 flex-shrink-0" />
                    <span className="text-sm font-medium">{item.title}</span>
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarContent>

      {!isCollapsed && (
        <SidebarFooter className="p-4">
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
        </SidebarFooter>
      )}
    </SidebarPrimitive>
  );
};

export default Sidebar;
