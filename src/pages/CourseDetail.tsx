
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { 
  Play, 
  Clock, 
  Users, 
  BookOpen, 
  CheckCircle, 
  Circle,
  Calendar,
  Download,
  TrendingUp,
  ChevronDown,
  ChevronRight
} from 'lucide-react';

const CourseDetail = () => {
  const { courseId } = useParams();
  const [expandedModules, setExpandedModules] = useState<string[]>(['module-1']);

  // Mock course data - in real app this would come from API
  const course = {
    id: courseId,
    title: 'Python for Everybody',
    description: 'This Specialization builds on the success of the Python for Everybody course and will introduce fundamental programming concepts including data structures, networked application program interfaces, and databases, using the Python programming language.',
    instructor: {
      name: 'Charles Russell Severance',
      title: 'Clinical Professor',
      organization: 'University of Michigan',
      image: '/placeholder-instructor.jpg'
    },
    stats: {
      progress: 65,
      attendance: 89,
      totalLessons: 45,
      completedLessons: 29,
      totalDuration: '24 hours',
      enrolled: '2.1M students'
    },
    modules: [
      {
        id: 'module-1',
        title: 'Programming for Everybody (Getting Started with Python)',
        description: 'Introduction to programming and Python basics',
        duration: '6 hours',
        lessons: [
          { id: 'lesson-1', title: 'Why we Program?', type: 'video', duration: '8:36', completed: true },
          { id: 'lesson-2', title: 'Hardware Architecture', type: 'video', duration: '7:13', completed: true },
          { id: 'lesson-3', title: 'Python as a Language', type: 'video', duration: '5:52', completed: true },
          { id: 'lesson-4', title: 'Elements of Python', type: 'video', duration: '11:11', completed: true },
          { id: 'lesson-5', title: 'Hello World', type: 'practice', duration: '30 min', completed: false }
        ]
      },
      {
        id: 'module-2',
        title: 'Python Data Structures',
        description: 'Learn about strings, files, lists, dictionaries, and tuples',
        duration: '8 hours',
        lessons: [
          { id: 'lesson-6', title: 'Strings in Python', type: 'video', duration: '10:24', completed: true },
          { id: 'lesson-7', title: 'Working with Files', type: 'video', duration: '12:15', completed: true },
          { id: 'lesson-8', title: 'Lists', type: 'video', duration: '15:30', completed: false },
          { id: 'lesson-9', title: 'Dictionaries', type: 'video', duration: '13:45', completed: false },
          { id: 'lesson-10', title: 'Tuples', type: 'video', duration: '9:20', completed: false }
        ]
      },
      {
        id: 'module-3',
        title: 'Using Python to Access Web Data',
        description: 'Web scraping, APIs, and data extraction techniques',
        duration: '5 hours',
        lessons: [
          { id: 'lesson-11', title: 'Regular Expressions', type: 'video', duration: '14:22', completed: false },
          { id: 'lesson-12', title: 'Networks and Sockets', type: 'video', duration: '16:15', completed: false },
          { id: 'lesson-13', title: 'HTTP and Web Services', type: 'video', duration: '18:30', completed: false },
          { id: 'lesson-14', title: 'Working with XML', type: 'practice', duration: '45 min', completed: false }
        ]
      },
      {
        id: 'module-4',
        title: 'Using Databases with Python',
        description: 'SQL, database design, and data modeling',
        duration: '5 hours',
        lessons: [
          { id: 'lesson-15', title: 'Object Oriented Programming', type: 'video', duration: '12:45', completed: false },
          { id: 'lesson-16', title: 'Databases', type: 'video', duration: '15:20', completed: false },
          { id: 'lesson-17', title: 'Data Models and Relational SQL', type: 'video', duration: '20:15', completed: false },
          { id: 'lesson-18', title: 'Many-to-Many Relationships', type: 'practice', duration: '60 min', completed: false }
        ]
      }
    ],
    upcomingClasses: [
      {
        title: 'Module 2 Q&A Session',
        date: 'Today, 2:00 PM',
        type: 'Live Session'
      },
      {
        title: 'Assignment 1 Due',
        date: 'Tomorrow, 11:59 PM',
        type: 'Assignment'
      }
    ]
  };

  const toggleModule = (moduleId: string) => {
    setExpandedModules(prev => 
      prev.includes(moduleId) 
        ? prev.filter(id => id !== moduleId)
        : [...prev, moduleId]
    );
  };

  const getModuleProgress = (module: typeof course.modules[0]) => {
    const completed = module.lessons.filter(lesson => lesson.completed).length;
    return Math.round((completed / module.lessons.length) * 100);
  };

  return (
    <Layout 
      title={course.title}
      breadcrumbs={['My Courses', course.title]}
    >
      <div className="space-y-8 animate-fade-in">
        {/* Course Header */}
        <div className="pixel-card">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Course Info */}
            <div className="lg:col-span-2">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-pixel-purple to-pixel-blue rounded-lg flex items-center justify-center flex-shrink-0">
                  <Play className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h1 className="font-heading font-bold text-3xl mb-3">{course.title}</h1>
                  <p className="text-muted-foreground mb-4">{course.description}</p>
                  
                  {/* Instructor Info */}
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center">
                      <Users className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-medium">{course.instructor.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {course.instructor.title}, {course.instructor.organization}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Course Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-muted/30 rounded-lg">
                  <TrendingUp className="w-6 h-6 text-pixel-purple mx-auto mb-2" />
                  <div className="font-bold text-lg">{course.stats.progress}%</div>
                  <div className="text-sm text-muted-foreground">Progress</div>
                </div>
                <div className="text-center p-4 bg-muted/30 rounded-lg">
                  <Calendar className="w-6 h-6 text-pixel-green mx-auto mb-2" />
                  <div className="font-bold text-lg">{course.stats.attendance}%</div>
                  <div className="text-sm text-muted-foreground">Attendance</div>
                </div>
                <div className="text-center p-4 bg-muted/30 rounded-lg">
                  <BookOpen className="w-6 h-6 text-pixel-blue mx-auto mb-2" />
                  <div className="font-bold text-lg">{course.stats.completedLessons}/{course.stats.totalLessons}</div>
                  <div className="text-sm text-muted-foreground">Lessons</div>
                </div>
                <div className="text-center p-4 bg-muted/30 rounded-lg">
                  <Clock className="w-6 h-6 text-pixel-orange mx-auto mb-2" />
                  <div className="font-bold text-lg">{course.stats.totalDuration}</div>
                  <div className="text-sm text-muted-foreground">Duration</div>
                </div>
              </div>
            </div>

            {/* Course Sidebar */}
            <div className="space-y-6">
              {/* Progress Card */}
              <div className="pixel-card bg-gradient-to-br from-pixel-purple/10 to-pixel-blue/10 border-pixel-purple/20">
                <h3 className="font-heading font-semibold text-lg mb-4">Course Progress</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Overall Progress</span>
                      <span className="font-medium">{course.stats.progress}%</span>
                    </div>
                    <div className="pixel-progress">
                      <div 
                        className="pixel-progress-fill" 
                        style={{ width: `${course.stats.progress}%` }}
                      />
                    </div>
                  </div>
                  <Button className="w-full pixel-button-primary">
                    Continue Learning
                  </Button>
                </div>
              </div>

              {/* Upcoming Classes */}
              <div className="pixel-card">
                <h3 className="font-heading font-semibold text-lg mb-4">Upcoming</h3>
                <div className="space-y-3">
                  {course.upcomingClasses.map((item, index) => (
                    <div key={index} className="p-3 bg-muted/30 rounded-lg">
                      <div className="font-medium text-sm mb-1">{item.title}</div>
                      <div className="text-xs text-muted-foreground">{item.date}</div>
                      <span className={`inline-block mt-2 px-2 py-1 text-xs rounded ${
                        item.type === 'Live Session' 
                          ? 'bg-pixel-green/10 text-pixel-green' 
                          : 'bg-pixel-orange/10 text-pixel-orange'
                      }`}>
                        {item.type}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Resources */}
              <div className="pixel-card">
                <h3 className="font-heading font-semibold text-lg mb-4">Resources</h3>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full justify-start" size="sm">
                    <Download className="w-4 h-4 mr-2" />
                    Course Materials
                  </Button>
                  <Button variant="outline" className="w-full justify-start" size="sm">
                    <BookOpen className="w-4 h-4 mr-2" />
                    Study Guide
                  </Button>
                  <Button variant="outline" className="w-full justify-start" size="sm">
                    <Users className="w-4 h-4 mr-2" />
                    Discussion Forum
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Course Modules */}
        <div className="pixel-card">
          <h2 className="font-heading font-bold text-2xl mb-6">Course Modules</h2>
          
          <div className="space-y-4">
            {course.modules.map((module, moduleIndex) => {
              const isExpanded = expandedModules.includes(module.id);
              const moduleProgress = getModuleProgress(module);
              
              return (
                <div key={module.id} className="border border-border rounded-lg overflow-hidden">
                  {/* Module Header */}
                  <div 
                    className="p-6 bg-muted/30 cursor-pointer hover:bg-muted/50 transition-colors"
                    onClick={() => toggleModule(module.id)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-pixel-purple to-pixel-blue rounded-lg flex items-center justify-center text-white font-bold">
                          {moduleIndex + 1}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-heading font-semibold text-lg mb-1">{module.title}</h3>
                          <p className="text-muted-foreground text-sm mb-2">{module.description}</p>
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                            <span className="flex items-center space-x-1">
                              <Clock className="w-4 h-4" />
                              <span>{module.duration}</span>
                            </span>
                            <span>{module.lessons.length} lessons</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <div className="text-sm font-medium">{moduleProgress}%</div>
                          <div className="w-16 h-2 bg-muted rounded-full mt-1">
                            <div 
                              className="h-full bg-pixel-purple rounded-full transition-all duration-300"
                              style={{ width: `${moduleProgress}%` }}
                            />
                          </div>
                        </div>
                        {isExpanded ? (
                          <ChevronDown className="w-5 h-5 text-muted-foreground" />
                        ) : (
                          <ChevronRight className="w-5 h-5 text-muted-foreground" />
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Module Content */}
                  {isExpanded && (
                    <div className="p-6 pt-0">
                      <div className="space-y-3">
                        {module.lessons.map((lesson, lessonIndex) => (
                          <div 
                            key={lesson.id}
                            className="flex items-center space-x-4 p-4 rounded-lg hover:bg-muted/30 transition-colors cursor-pointer"
                          >
                            <div className="flex-shrink-0">
                              {lesson.completed ? (
                                <CheckCircle className="w-5 h-5 text-pixel-green" />
                              ) : (
                                <Circle className="w-5 h-5 text-muted-foreground" />
                              )}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center space-x-3">
                                <h4 className="font-medium">{lesson.title}</h4>
                                <span className={`pixel-chip text-xs ${
                                  lesson.type === 'video' 
                                    ? 'bg-pixel-blue/10 text-pixel-blue' 
                                    : 'bg-pixel-orange/10 text-pixel-orange'
                                }`}>
                                  {lesson.type}
                                </span>
                              </div>
                              <div className="text-sm text-muted-foreground mt-1">
                                {lesson.duration}
                              </div>
                            </div>
                            <Button 
                              size="sm" 
                              variant={lesson.completed ? "outline" : "default"}
                              className={lesson.completed ? "" : "pixel-button-primary"}
                            >
                              {lesson.completed ? "Review" : "Start"}
                            </Button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CourseDetail;
