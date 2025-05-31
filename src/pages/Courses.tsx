
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import CourseCard from '@/components/CourseCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Courses = () => {
  const [activeTab, setActiveTab] = useState('all');

  const allCourses = [
    {
      id: '1',
      title: 'Python for Everybody',
      description: 'Learn the basics of programming computers using Python. Cover the basics of how to construct a program from a series of simple instructions.',
      instructor: 'University of Michigan',
      progress: 65,
      attendance: 89,
      totalLessons: 45,
      completedLessons: 29,
      category: 'Programming',
      isActive: true
    },
    {
      id: '2',
      title: 'React Web Development',
      description: 'Build modern web applications with React, hooks, and state management. Learn component-based architecture.',
      instructor: 'Meta',
      progress: 42,
      attendance: 75,
      totalLessons: 32,
      completedLessons: 13,
      category: 'Web Development',
      isActive: true
    },
    {
      id: '3',
      title: 'Data Science Fundamentals',
      description: 'Introduction to data analysis, visualization, and machine learning concepts using Python and popular libraries.',
      instructor: 'IBM',
      progress: 23,
      attendance: 92,
      totalLessons: 28,
      completedLessons: 6,
      category: 'Data Science',
      isActive: true
    },
    {
      id: '4',
      title: 'JavaScript Algorithms',
      description: 'Master algorithmic thinking and problem-solving with JavaScript. Build efficient solutions to complex problems.',
      instructor: 'FreeCodeCamp',
      progress: 88,
      attendance: 96,
      totalLessons: 24,
      completedLessons: 21,
      category: 'Programming',
      isActive: true
    },
    {
      id: '5',
      title: 'Machine Learning Specialization',
      description: 'Comprehensive introduction to machine learning, deep learning, and AI applications.',
      instructor: 'Stanford University',
      progress: 100,
      attendance: 100,
      totalLessons: 36,
      completedLessons: 36,
      category: 'AI/ML',
      isActive: false
    },
    {
      id: '6',
      title: 'Full Stack Web Development',
      description: 'Complete web development course covering frontend, backend, and database technologies.',
      instructor: 'The Odin Project',
      progress: 100,
      attendance: 94,
      totalLessons: 52,
      completedLessons: 52,
      category: 'Web Development',
      isActive: false
    }
  ];

  const ongoingCourses = allCourses.filter(course => course.isActive);
  const completedCourses = allCourses.filter(course => !course.isActive);

  const handleCourseClick = (courseId: string) => {
    window.location.href = `/course/${courseId}`;
  };

  const renderCourses = (courses: typeof allCourses) => (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {courses.map((course) => (
        <CourseCard
          key={course.id}
          {...course}
          onClick={() => handleCourseClick(course.id)}
        />
      ))}
    </div>
  );

  return (
    <Layout title="My Courses">
      <div className="space-y-6 animate-fade-in">
        {/* Header Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="pixel-card text-center">
            <div className="text-2xl font-bold text-pixel-purple mb-1">{allCourses.length}</div>
            <div className="text-sm text-muted-foreground">Total Courses</div>
          </div>
          <div className="pixel-card text-center">
            <div className="text-2xl font-bold text-pixel-green mb-1">{ongoingCourses.length}</div>
            <div className="text-sm text-muted-foreground">Ongoing</div>
          </div>
          <div className="pixel-card text-center">
            <div className="text-2xl font-bold text-pixel-blue mb-1">{completedCourses.length}</div>
            <div className="text-sm text-muted-foreground">Completed</div>
          </div>
          <div className="pixel-card text-center">
            <div className="text-2xl font-bold text-pixel-orange mb-1">
              {Math.round(allCourses.reduce((acc, course) => acc + course.progress, 0) / allCourses.length)}%
            </div>
            <div className="text-sm text-muted-foreground">Avg Progress</div>
          </div>
        </div>

        {/* Course Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 lg:w-96">
            <TabsTrigger value="all" className="font-medium">
              All Courses ({allCourses.length})
            </TabsTrigger>
            <TabsTrigger value="ongoing" className="font-medium">
              Ongoing ({ongoingCourses.length})
            </TabsTrigger>
            <TabsTrigger value="completed" className="font-medium">
              Completed ({completedCourses.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-6">
            {renderCourses(allCourses)}
          </TabsContent>

          <TabsContent value="ongoing" className="mt-6">
            {ongoingCourses.length > 0 ? (
              renderCourses(ongoingCourses)
            ) : (
              <div className="pixel-card text-center py-12">
                <h3 className="font-heading font-semibold text-lg mb-2">No ongoing courses</h3>
                <p className="text-muted-foreground mb-4">Start a new course to begin your learning journey!</p>
              </div>
            )}
          </TabsContent>

          <TabsContent value="completed" className="mt-6">
            {completedCourses.length > 0 ? (
              renderCourses(completedCourses)
            ) : (
              <div className="pixel-card text-center py-12">
                <h3 className="font-heading font-semibold text-lg mb-2">No completed courses yet</h3>
                <p className="text-muted-foreground mb-4">Complete your first course to see it here!</p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Courses;
