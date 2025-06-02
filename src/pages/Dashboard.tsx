
import React from 'react';
import Layout from '@/components/Layout';
import CourseCard from '@/components/CourseCard';
import { Calendar, Clock, TrendingUp, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useStudentCourses } from '@/hooks/useStudentCourses';

const Dashboard = () => {
  const { data: studentCourses, isLoading, error } = useStudentCourses();

  // Transform API data to match CourseCard props
  const transformCourseData = (apiCourse: any) => ({
    id: apiCourse.id.toString(),
    title: apiCourse.name,
    description: `${apiCourse.bootcampTopic || 'Programming'} course in ${apiCourse.language || 'English'}`,
    instructor: apiCourse.batchName,
    progress: apiCourse.progress,
    attendance: Math.floor(Math.random() * 20) + 80, // Mock attendance data
    totalLessons: Math.floor(Math.random() * 30) + 20, // Mock lesson count
    completedLessons: Math.floor((apiCourse.progress / 100) * (Math.floor(Math.random() * 30) + 20)),
    category: apiCourse.bootcampTopic || 'Programming',
    isActive: apiCourse.progress < 100,
    image: apiCourse.coverImage
  });

  const activeCourses = studentCourses ? studentCourses.filter(course => course.progress < 100).map(transformCourseData) : [];

  const upcomingClasses = [
    {
      course: activeCourses[0]?.title || 'JavaScript & React',
      title: 'Module 4: Functions and Data Structures',
      type: 'Live Session',
      time: 'Today, 2:00 PM',
      instructor: activeCourses[0]?.instructor || 'Dr. Charles Severance',
      category: 'class'
    },
    {
      course: activeCourses[1]?.title || 'JavaScript Course', 
      title: 'Building Interactive Components',
      type: 'Live Session',
      time: 'Tomorrow, 11:00 AM',
      instructor: activeCourses[1]?.instructor || 'Sarah Johnson',
      category: 'class'
    },
    {
      course: activeCourses[0]?.title || 'JavaScript & React',
      title: 'Assignment: Build a Calculator',
      type: 'Assignment Due',
      time: 'Tomorrow, 11:59 PM',
      instructor: activeCourses[0]?.instructor || 'Dr. Charles Severance',
      category: 'assignment'
    },
    {
      course: activeCourses[2]?.title || 'Testing Module',
      title: 'Module 2: Data Visualization',
      type: 'Assessment Due',
      time: 'Friday, 3:30 PM',
      instructor: activeCourses[2]?.instructor || 'Prof. Maria Garcia',
      category: 'assessment'
    }
  ];

  const overallStats = studentCourses ? {
    totalCourses: studentCourses.length,
    completedCourses: studentCourses.filter(course => course.progress === 100).length,
    avgProgress: Math.round(studentCourses.reduce((acc, course) => acc + course.progress, 0) / studentCourses.length),
    avgAttendance: 88
  } : {
    totalCourses: 0,
    completedCourses: 0,
    avgProgress: 0,
    avgAttendance: 88
  };

  const handleCourseClick = (courseId: string) => {
    window.location.href = `/course/${courseId}`;
  };

  const handleViewSchedule = () => {
    window.location.href = '/schedule';
  };

  const getBadgeVariant = (type: string) => {
    switch (type) {
      case 'Live Session':
        return 'default';
      case 'Assignment Due':
        return 'destructive';
      case 'Assessment Due':
        return 'secondary';
      default:
        return 'outline';
    }
  };

  if (isLoading) {
    return (
      <Layout title="Dashboard">
        <div className="space-y-6 md:space-y-8 animate-fade-in">
          <div className="pixel-card">
            <div className="animate-pulse">
              <div className="h-4 bg-muted rounded w-1/4 mb-4"></div>
              <div className="h-8 bg-muted rounded w-1/2"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="pixel-card animate-pulse">
                <div className="h-48 bg-muted rounded mb-4"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-muted rounded w-3/4"></div>
                  <div className="h-4 bg-muted rounded w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout title="Dashboard">
        <div className="pixel-card text-center py-12">
          <h3 className="font-heading font-semibold text-lg mb-2 text-destructive">Error loading courses</h3>
          <p className="text-muted-foreground">Failed to load your course data. Please try again later.</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout title="Dashboard">
      <div className="space-y-6 md:space-y-8 animate-fade-in">
        {/* Welcome Section */}
        <div className="pixel-card bg-gradient-to-r from-pixel-purple/10 to-pixel-blue/10 border-pixel-purple/20">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
            <div>
              <h2 className="font-heading font-bold text-xl md:text-2xl mb-2">
                Welcome back, Alex! 👋
              </h2>
              <p className="text-muted-foreground text-sm md:text-base">
                Ready to continue your learning journey? You're doing great!
              </p>
            </div>
            <div className="grid grid-cols-3 lg:flex lg:items-center lg:space-x-6 gap-4 lg:gap-0 text-center">
              <div>
                <div className="text-xl md:text-2xl font-bold text-pixel-purple">{overallStats.totalCourses}</div>
                <div className="text-xs md:text-sm text-muted-foreground">Active Courses</div>
              </div>
              <div>
                <div className="text-xl md:text-2xl font-bold text-pixel-green">{overallStats.avgProgress}%</div>
                <div className="text-xs md:text-sm text-muted-foreground">Avg Progress</div>
              </div>
              <div>
                <div className="text-xl md:text-2xl font-bold text-pixel-orange">{overallStats.avgAttendance}%</div>
                <div className="text-xs md:text-sm text-muted-foreground">Attendance</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 md:gap-8">
          {/* Main Content - Courses */}
          <div className="xl:col-span-2 space-y-6">
            {/* Continue Learning Section */}
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 md:mb-6 space-y-2 sm:space-y-0">
                <h2 className="font-heading font-bold text-lg md:text-xl">Continue Learning</h2>
                <Button variant="outline" size="sm" className="self-start sm:self-auto">View All Courses</Button>
              </div>
              
              {activeCourses.length > 0 ? (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
                  {activeCourses.map((course) => (
                    <CourseCard
                      key={course.id}
                      {...course}
                      onClick={() => handleCourseClick(course.id)}
                    />
                  ))}
                </div>
              ) : (
                <div className="pixel-card text-center py-12">
                  <h3 className="font-heading font-semibold text-lg mb-2">No active courses</h3>
                  <p className="text-muted-foreground mb-4">Start a new course to begin your learning journey!</p>
                  <Button>Browse Courses</Button>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar Content */}
          <div className="space-y-6">
            {/* Upcoming Classes */}
            <div className="pixel-card">
              <div className="flex items-center space-x-2 mb-4">
                <Calendar className="w-5 h-5 text-pixel-purple" />
                <h3 className="font-heading font-semibold text-base md:text-lg">Upcoming</h3>
              </div>
              
              <div className="space-y-3 md:space-y-4">
                {upcomingClasses.map((item, index) => (
                  <div key={index} className="border-l-2 border-pixel-purple/30 pl-3 md:pl-4 py-2">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 space-y-1 sm:space-y-0">
                      <span className="font-medium text-xs md:text-sm text-muted-foreground truncate">
                        {item.course}
                      </span>
                      <Badge variant={getBadgeVariant(item.type)} className="text-xs self-start sm:self-auto">
                        {item.type}
                      </Badge>
                    </div>
                    <h4 className="font-medium text-sm mb-1 line-clamp-2">{item.title}</h4>
                    <p className="text-xs text-muted-foreground mb-1">by {item.instructor}</p>
                    <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                      <Clock className="w-3 h-3 flex-shrink-0" />
                      <span>{item.time}</span>
                    </div>
                  </div>
                ))}
              </div>
              
              <Button variant="outline" className="w-full mt-4" onClick={handleViewSchedule}>
                View Full Schedule
              </Button>
            </div>

            {/* Learning Streak */}
            <div className="pixel-card">
              <div className="flex items-center space-x-2 mb-4">
                <TrendingUp className="w-5 h-5 text-pixel-orange" />
                <h3 className="font-heading font-semibold text-base md:text-lg">Learning Streak</h3>
              </div>
              
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-pixel-orange mb-2">7</div>
                <p className="text-sm text-muted-foreground mb-4">
                  Days in a row! Keep it up! 🔥
                </p>
                
                <div className="flex justify-center space-x-1 mb-4">
                  {[...Array(7)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-5 h-5 md:w-6 md:h-6 rounded-full ${
                        i < 7 ? 'bg-pixel-orange' : 'bg-muted'
                      }`}
                    />
                  ))}
                </div>
                
                <p className="text-xs text-muted-foreground">
                  Complete a lesson today to continue your streak!
                </p>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="pixel-card">
              <div className="flex items-center space-x-2 mb-4">
                <BookOpen className="w-5 h-5 text-pixel-blue" />
                <h3 className="font-heading font-semibold text-base md:text-lg">Quick Actions</h3>
              </div>
              
              <div className="space-y-2 md:space-y-3">
                <Button variant="outline" className="w-full justify-start text-sm">
                  📚 Browse New Courses
                </Button>
                <Button variant="outline" className="w-full justify-start text-sm">
                  📖 Study Notes
                </Button>
                <Button variant="outline" className="w-full justify-start text-sm">
                  🏆 View Achievements
                </Button>
                <Button variant="outline" className="w-full justify-start text-sm">
                  📊 Progress Reports
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
