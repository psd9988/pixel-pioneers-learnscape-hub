
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Calendar, Clock, User, BookOpen, FileText, Brain, Code, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Schedule = () => {
  const [selectedWeek, setSelectedWeek] = useState('current');

  const scheduleItems = [
    {
      id: 1,
      date: '2024-06-03',
      day: 'Monday',
      course: 'Python for Everybody',
      title: 'Module 4: Functions and Data Structures',
      type: 'Live Session',
      time: '2:00 PM - 3:30 PM',
      instructor: 'Dr. Charles Severance',
      status: 'upcoming',
      description: 'Deep dive into Python functions, parameters, and data structures'
    },
    {
      id: 2,
      date: '2024-06-04',
      day: 'Tuesday',
      course: 'React Web Development',
      title: 'Building Interactive Components',
      type: 'Live Session',
      time: '11:00 AM - 12:30 PM',
      instructor: 'Sarah Johnson',
      status: 'upcoming',
      description: 'Learn to create dynamic and interactive React components'
    },
    {
      id: 3,
      date: '2024-06-04',
      day: 'Tuesday',
      course: 'Python for Everybody',
      title: 'Assignment: Build a Calculator',
      type: 'Assignment Due',
      time: '11:59 PM',
      instructor: 'Dr. Charles Severance',
      status: 'upcoming',
      description: 'Create a functional calculator using Python functions'
    },
    {
      id: 4,
      date: '2024-06-07',
      day: 'Friday',
      course: 'Data Science Fundamentals',
      title: 'Module 2: Data Visualization',
      type: 'Live Session',
      time: '3:30 PM - 5:00 PM',
      instructor: 'Prof. Maria Garcia',
      status: 'upcoming',
      description: 'Introduction to matplotlib and seaborn for data visualization'
    },
    {
      id: 5,
      date: '2024-06-08',
      day: 'Saturday',
      course: 'React Web Development',
      title: 'Quiz: React Hooks Assessment',
      type: 'Assessment Due',
      time: '6:00 PM',
      instructor: 'Sarah Johnson',
      status: 'upcoming',
      description: 'Test your understanding of React hooks and state management'
    },
    {
      id: 6,
      date: '2024-06-10',
      day: 'Monday',
      course: 'JavaScript Algorithms',
      title: 'Coding Challenge: Two Sum Problem',
      type: 'Coding Assignment',
      time: '11:59 PM',
      instructor: 'Alex Thompson',
      status: 'upcoming',
      description: 'Solve the classic two sum problem with optimal time complexity'
    },
    {
      id: 7,
      date: '2024-06-01',
      day: 'Saturday',
      course: 'Python for Everybody',
      title: 'Module 3: Conditional Execution',
      type: 'Live Session',
      time: '2:00 PM - 3:30 PM',
      instructor: 'Dr. Charles Severance',
      status: 'completed',
      description: 'Conditional logic and decision making in Python'
    },
    {
      id: 8,
      date: '2024-05-30',
      day: 'Thursday',
      course: 'React Web Development',
      title: 'Project: Todo Application',
      type: 'Project Due',
      time: '11:59 PM',
      instructor: 'Sarah Johnson',
      status: 'completed',
      description: 'Build a complete todo application with CRUD operations'
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Live Session':
        return <BookOpen className="w-4 h-4" />;
      case 'Assignment Due':
        return <FileText className="w-4 h-4" />;
      case 'Assessment Due':
        return <Brain className="w-4 h-4" />;
      case 'Coding Assignment':
        return <Code className="w-4 h-4" />;
      case 'Project Due':
        return <CheckCircle className="w-4 h-4" />;
      default:
        return <Calendar className="w-4 h-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Live Session':
        return 'bg-pixel-green/10 text-pixel-green border-pixel-green/20';
      case 'Assignment Due':
        return 'bg-pixel-orange/10 text-pixel-orange border-pixel-orange/20';
      case 'Assessment Due':
        return 'bg-pixel-blue/10 text-pixel-blue border-pixel-blue/20';
      case 'Coding Assignment':
        return 'bg-pixel-purple/10 text-pixel-purple border-pixel-purple/20';
      case 'Project Due':
        return 'bg-red-100 text-red-700 border-red-200';
      default:
        return 'bg-muted/10 text-muted-foreground border-muted/20';
    }
  };

  const filteredItems = scheduleItems.filter(item => {
    const itemDate = new Date(item.date);
    const today = new Date();
    const currentWeekStart = new Date(today.setDate(today.getDate() - today.getDay()));
    const currentWeekEnd = new Date(currentWeekStart);
    currentWeekEnd.setDate(currentWeekEnd.getDate() + 6);

    if (selectedWeek === 'current') {
      return itemDate >= currentWeekStart && itemDate <= currentWeekEnd;
    } else if (selectedWeek === 'upcoming') {
      return itemDate > currentWeekEnd;
    } else if (selectedWeek === 'past') {
      return itemDate < currentWeekStart;
    }
    return true;
  });

  const groupedItems = filteredItems.reduce((groups, item) => {
    const date = item.date;
    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(item);
    return groups;
  }, {} as Record<string, typeof scheduleItems>);

  return (
    <Layout title="Schedule" breadcrumbs={['Dashboard', 'Schedule']}>
      <div className="space-y-6">
        {/* Header with filters */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="font-heading font-bold text-2xl mb-2">My Schedule</h1>
            <p className="text-muted-foreground">Keep track of all your classes, assignments, and deadlines</p>
          </div>
          
          <div className="flex space-x-2">
            <Button
              variant={selectedWeek === 'past' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedWeek('past')}
            >
              Past
            </Button>
            <Button
              variant={selectedWeek === 'current' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedWeek('current')}
            >
              This Week
            </Button>
            <Button
              variant={selectedWeek === 'upcoming' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedWeek('upcoming')}
            >
              Upcoming
            </Button>
          </div>
        </div>

        {/* Schedule items */}
        <div className="space-y-6">
          {Object.entries(groupedItems).map(([date, items]) => (
            <Card key={date} className="pixel-card">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-pixel-purple" />
                  <div>
                    <div className="font-heading font-bold text-lg">
                      {items[0].day}
                    </div>
                    <div className="text-sm text-muted-foreground font-normal">
                      {new Date(date).toLocaleDateString('en-US', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </div>
                  </div>
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className={`p-4 rounded-lg border-l-4 ${
                      item.status === 'completed' 
                        ? 'bg-muted/20 border-l-muted' 
                        : 'bg-background border-l-pixel-purple'
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row justify-between items-start gap-3">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <Badge variant="outline" className={`${getTypeColor(item.type)} text-xs`}>
                            {getTypeIcon(item.type)}
                            <span className="ml-1">{item.type}</span>
                          </Badge>
                          <span className="text-sm text-muted-foreground">{item.course}</span>
                        </div>
                        
                        <h3 className="font-heading font-semibold text-lg mb-1">
                          {item.title}
                        </h3>
                        
                        <p className="text-sm text-muted-foreground mb-2">
                          {item.description}
                        </p>
                        
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{item.time}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <User className="w-4 h-4" />
                            <span>{item.instructor}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex space-x-2">
                        {item.status === 'upcoming' && item.type === 'Live Session' && (
                          <Button size="sm" className="pixel-button-primary">
                            Join Class
                          </Button>
                        )}
                        {item.status === 'upcoming' && item.type !== 'Live Session' && (
                          <Button size="sm" variant="outline">
                            View Details
                          </Button>
                        )}
                        {item.status === 'completed' && (
                          <Badge variant="outline" className="bg-pixel-green/10 text-pixel-green border-pixel-green/20">
                            Completed
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <Card className="pixel-card text-center py-12">
            <CardContent>
              <Calendar className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="font-heading font-semibold text-lg mb-2">No events found</h3>
              <p className="text-muted-foreground">
                {selectedWeek === 'current' && "You don't have any events scheduled for this week."}
                {selectedWeek === 'upcoming' && "No upcoming events scheduled yet."}
                {selectedWeek === 'past' && "No past events to display."}
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </Layout>
  );
};

export default Schedule;
