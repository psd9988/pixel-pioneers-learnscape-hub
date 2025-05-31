
import React from 'react';
import Layout from '@/components/Layout';
import { User, Mail, Calendar, Award, BookOpen, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Profile = () => {
  return (
    <Layout title="Profile">
      <div className="space-y-8 animate-fade-in">
        {/* Profile Header */}
        <div className="pixel-card">
          <div className="flex items-center space-x-6">
            <div className="w-24 h-24 bg-gradient-to-br from-pixel-purple to-pixel-blue rounded-full flex items-center justify-center">
              <User className="w-12 h-12 text-white" />
            </div>
            <div className="flex-1">
              <h1 className="font-heading font-bold text-3xl mb-2">Alex Johnson</h1>
              <p className="text-muted-foreground mb-4">Aspiring Full Stack Developer</p>
              <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>alex.johnson@email.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>Joined March 2024</span>
                </div>
              </div>
            </div>
            <Button className="pixel-button-primary">Edit Profile</Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="pixel-card text-center">
            <BookOpen className="w-8 h-8 text-pixel-purple mx-auto mb-3" />
            <div className="text-2xl font-bold mb-1">6</div>
            <div className="text-sm text-muted-foreground">Courses Enrolled</div>
          </div>
          <div className="pixel-card text-center">
            <Award className="w-8 h-8 text-pixel-green mx-auto mb-3" />
            <div className="text-2xl font-bold mb-1">2</div>
            <div className="text-sm text-muted-foreground">Completed</div>
          </div>
          <div className="pixel-card text-center">
            <TrendingUp className="w-8 h-8 text-pixel-orange mx-auto mb-3" />
            <div className="text-2xl font-bold mb-1">7</div>
            <div className="text-sm text-muted-foreground">Day Streak</div>
          </div>
          <div className="pixel-card text-center">
            <Calendar className="w-8 h-8 text-pixel-blue mx-auto mb-3" />
            <div className="text-2xl font-bold mb-1">156h</div>
            <div className="text-sm text-muted-foreground">Time Learned</div>
          </div>
        </div>

        {/* Coming Soon */}
        <div className="pixel-card text-center py-12">
          <h2 className="font-heading font-bold text-2xl mb-4">Profile Details Coming Soon!</h2>
          <p className="text-muted-foreground">
            We're working on bringing you a comprehensive profile experience with achievements, 
            certificates, and detailed learning analytics.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
