
import React from 'react';
import { Play, Clock, Users, BookOpen, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CourseCardProps {
  id: string;
  title: string;
  description: string;
  instructor: string;
  progress: number;
  attendance: number;
  totalLessons: number;
  completedLessons: number;
  image?: string;
  category: string;
  isActive: boolean;
  onClick: () => void;
}

const CourseCard = ({
  title,
  description,
  instructor,
  progress,
  attendance,
  totalLessons,
  completedLessons,
  category,
  isActive,
  onClick
}: CourseCardProps) => {
  return (
    <div className="pixel-card hover:shadow-pixel-lg transition-all duration-300 cursor-pointer group" onClick={onClick}>
      {/* Course Image/Thumbnail */}
      <div className="w-full h-48 bg-gradient-to-br from-pixel-purple to-pixel-blue rounded-lg mb-4 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
        <Play className="w-12 h-12 text-white opacity-80" />
      </div>

      {/* Course Info */}
      <div className="space-y-4">
        {/* Category and Status */}
        <div className="flex items-center justify-between">
          <span className="pixel-chip">{category}</span>
          {isActive && (
            <span className="px-2 py-1 bg-pixel-green/10 text-pixel-green rounded-md text-xs font-medium">
              Active
            </span>
          )}
        </div>

        {/* Title and Description */}
        <div>
          <h3 className="font-heading font-bold text-lg mb-2 line-clamp-2">{title}</h3>
          <p className="text-muted-foreground text-sm line-clamp-2">{description}</p>
        </div>

        {/* Instructor */}
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 bg-muted rounded-full flex items-center justify-center">
            <Users className="w-3 h-3" />
          </div>
          <span className="text-sm text-muted-foreground">{instructor}</span>
        </div>

        {/* Progress */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Progress</span>
            <span className="font-medium">{progress}%</span>
          </div>
          <div className="pixel-progress">
            <div 
              className="pixel-progress-fill" 
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 text-center py-3 border-t border-border/50">
          <div>
            <div className="flex items-center justify-center mb-1">
              <BookOpen className="w-4 h-4 text-muted-foreground" />
            </div>
            <div className="text-sm font-medium">{completedLessons}/{totalLessons}</div>
            <div className="text-xs text-muted-foreground">Lessons</div>
          </div>
          <div>
            <div className="flex items-center justify-center mb-1">
              <TrendingUp className="w-4 h-4 text-muted-foreground" />
            </div>
            <div className="text-sm font-medium">{attendance}%</div>
            <div className="text-xs text-muted-foreground">Attendance</div>
          </div>
          <div>
            <div className="flex items-center justify-center mb-1">
              <Clock className="w-4 h-4 text-muted-foreground" />
            </div>
            <div className="text-sm font-medium">24h</div>
            <div className="text-xs text-muted-foreground">Duration</div>
          </div>
        </div>

        {/* Action Button */}
        <Button 
          className={`w-full ${isActive ? 'pixel-button-primary' : 'pixel-button-secondary'}`}
        >
          {isActive ? 'Continue Learning' : 'View Course'}
        </Button>
      </div>
    </div>
  );
};

export default CourseCard;
