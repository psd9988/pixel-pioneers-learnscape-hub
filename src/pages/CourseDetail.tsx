
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Play, 
  Clock, 
  Users, 
  BookOpen, 
  CheckCircle, 
  Circle,
  Calendar,
  FileText,
  Code,
  Brain,
  Award,
  FolderOpen,
  ChevronDown,
  ChevronRight,
  Video,
  Download,
  ExternalLink,
  User
} from 'lucide-react';

const CourseDetail = () => {
  const { courseId } = useParams();
  const [expandedModules, setExpandedModules] = useState<string[]>(['module-1']);

  // Mock course data with enhanced content types
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
    batch: {
      name: 'Batch PY-2024-03',
      startDate: 'March 15, 2024',
      endDate: 'June 15, 2024',
      students: 45,
      maxStudents: 50
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
        items: [
          { 
            id: 'item-1', 
            title: 'Why we Program?', 
            type: 'video', 
            duration: '8:36', 
            completed: true,
            resources: [
              { name: 'Lecture Slides', type: 'pdf', url: '#' },
              { name: 'Code Examples', type: 'link', url: '#' }
            ]
          },
          { 
            id: 'item-2', 
            title: 'Hardware Architecture', 
            type: 'video', 
            duration: '7:13', 
            completed: true,
            resources: [
              { name: 'Hardware Diagrams', type: 'pdf', url: '#' },
              { name: 'Additional Reading', type: 'article', url: '#' }
            ]
          },
          { 
            id: 'item-3', 
            title: 'Introduction to Programming Concepts', 
            type: 'article', 
            duration: '15 min read', 
            completed: true,
            resources: [
              { name: 'Programming Guide', type: 'pdf', url: '#' }
            ]
          },
          { 
            id: 'item-4', 
            title: 'Python Basics Quiz', 
            type: 'quiz', 
            duration: '10 questions', 
            completed: false,
            resources: []
          },
          { 
            id: 'item-5', 
            title: 'Hello World Coding Challenge', 
            type: 'coding', 
            duration: '30 min', 
            completed: false,
            resources: [
              { name: 'Starter Code', type: 'link', url: '#' }
            ]
          }
        ]
      },
      {
        id: 'module-2',
        title: 'Python Data Structures',
        description: 'Learn about strings, files, lists, dictionaries, and tuples',
        duration: '8 hours',
        items: [
          { 
            id: 'item-6', 
            title: 'Strings in Python', 
            type: 'video', 
            duration: '10:24', 
            completed: true,
            resources: [
              { name: 'String Methods Cheatsheet', type: 'pdf', url: '#' }
            ]
          },
          { 
            id: 'item-7', 
            title: 'Working with Files', 
            type: 'video', 
            duration: '12:15', 
            completed: true,
            resources: [
              { name: 'File Operations Guide', type: 'article', url: '#' },
              { name: 'Sample Data Files', type: 'link', url: '#' }
            ]
          },
          { 
            id: 'item-8', 
            title: 'Lists Deep Dive', 
            type: 'article', 
            duration: '20 min read', 
            completed: false,
            resources: [
              { name: 'List Methods Reference', type: 'pdf', url: '#' }
            ]
          },
          { 
            id: 'item-9', 
            title: 'Data Structures Assessment', 
            type: 'assessment', 
            duration: '45 min', 
            completed: false,
            resources: [
              { name: 'Assessment Guidelines', type: 'pdf', url: '#' }
            ]
          },
          { 
            id: 'item-10', 
            title: 'Dictionary Operations Assignment', 
            type: 'assignment', 
            duration: '2 hours', 
            completed: false,
            resources: [
              { name: 'Assignment Brief', type: 'pdf', url: '#' },
              { name: 'Template Code', type: 'link', url: '#' }
            ]
          }
        ]
      },
      {
        id: 'module-3',
        title: 'Using Python to Access Web Data',
        description: 'Web scraping, APIs, and data extraction techniques',
        duration: '5 hours',
        items: [
          { 
            id: 'item-11', 
            title: 'Regular Expressions', 
            type: 'video', 
            duration: '14:22', 
            completed: false,
            resources: [
              { name: 'Regex Cheatsheet', type: 'pdf', url: '#' },
              { name: 'Online Regex Tester', type: 'link', url: '#' }
            ]
          },
          { 
            id: 'item-12', 
            title: 'HTTP and Web Services', 
            type: 'video', 
            duration: '18:30', 
            completed: false,
            resources: []
          },
          { 
            id: 'item-13', 
            title: 'Web Scraping Coding Challenge', 
            type: 'coding', 
            duration: '60 min', 
            completed: false,
            resources: [
              { name: 'BeautifulSoup Documentation', type: 'link', url: '#' }
            ]
          },
          { 
            id: 'item-14', 
            title: 'Web Data Project', 
            type: 'project', 
            duration: '1 week', 
            completed: false,
            resources: [
              { name: 'Project Requirements', type: 'pdf', url: '#' },
              { name: 'Sample APIs', type: 'link', url: '#' },
              { name: 'Project Template', type: 'link', url: '#' }
            ]
          }
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
    const completed = module.items.filter(item => item.completed).length;
    return Math.round((completed / module.items.length) * 100);
  };

  const getItemIcon = (type: string) => {
    switch (type) {
      case 'video': return Video;
      case 'article': return FileText;
      case 'quiz': return Brain;
      case 'coding': return Code;
      case 'assessment': return Award;
      case 'assignment': return FolderOpen;
      case 'project': return Award;
      default: return BookOpen;
    }
  };

  const getItemTypeColor = (type: string) => {
    switch (type) {
      case 'video': return 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300';
      case 'article': return 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300';
      case 'quiz': return 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300';
      case 'coding': return 'bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300';
      case 'assessment': return 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300';
      case 'assignment': return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300';
      case 'project': return 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-300';
      default: return 'bg-gray-100 text-gray-700 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  const getResourceIcon = (type: string) => {
    switch (type) {
      case 'pdf': return Download;
      case 'link': return ExternalLink;
      case 'article': return FileText;
      default: return FileText;
    }
  };

  return (
    <Layout 
      title={course.title}
      breadcrumbs={['My Courses', course.title]}
    >
      <div className="space-y-8 animate-fade-in">
        {/* Course Header */}
        <div className="pixel-card">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Course Info */}
            <div className="lg:col-span-3">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-pixel-purple to-pixel-blue rounded-lg flex items-center justify-center flex-shrink-0">
                  <Play className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h1 className="font-heading font-bold text-3xl mb-3">{course.title}</h1>
                  <p className="text-muted-foreground mb-4">{course.description}</p>
                  
                  {/* Instructor Info */}
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center">
                      <User className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-medium">{course.instructor.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {course.instructor.title}, {course.instructor.organization}
                      </div>
                    </div>
                  </div>

                  {/* Batch Information */}
                  <div className="bg-muted/30 rounded-lg p-4">
                    <h3 className="font-heading font-semibold text-lg mb-2">Batch Information</h3>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                      <div>
                        <span className="text-muted-foreground">Batch:</span>
                        <div className="font-medium">{course.batch.name}</div>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Duration:</span>
                        <div className="font-medium">{course.batch.startDate} - {course.batch.endDate}</div>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Students:</span>
                        <div className="font-medium">{course.batch.students}/{course.batch.maxStudents}</div>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Status:</span>
                        <div className="font-medium text-green-600">Active</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Course Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-muted/30 rounded-lg">
                  <div className="w-6 h-6 text-pixel-purple mx-auto mb-2">
                    <div className="font-bold text-lg">{course.stats.progress}%</div>
                  </div>
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
                  <div className="text-sm text-muted-foreground">Items</div>
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
            </div>
          </div>
        </div>

        {/* Course Content */}
        <div className="pixel-card">
          <Tabs defaultValue="curriculum" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
              <TabsTrigger value="discussions">Discussions</TabsTrigger>
            </TabsList>
            
            <TabsContent value="curriculum" className="mt-6">
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
                                <span>{module.items.length} items</span>
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
                          <div className="space-y-4">
                            {module.items.map((item) => {
                              const Icon = getItemIcon(item.type);
                              const ResourceIcon = getResourceIcon;
                              
                              return (
                                <div 
                                  key={item.id}
                                  className="border border-border/50 rounded-lg p-4 hover:bg-muted/30 transition-colors"
                                >
                                  <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 mt-1">
                                      {item.completed ? (
                                        <CheckCircle className="w-5 h-5 text-pixel-green" />
                                      ) : (
                                        <Circle className="w-5 h-5 text-muted-foreground" />
                                      )}
                                    </div>
                                    <div className="flex-1">
                                      <div className="flex items-center space-x-3 mb-2">
                                        <Icon className="w-4 h-4 text-muted-foreground" />
                                        <h4 className="font-medium">{item.title}</h4>
                                        <span className={`pixel-chip text-xs ${getItemTypeColor(item.type)}`}>
                                          {item.type}
                                        </span>
                                      </div>
                                      <div className="text-sm text-muted-foreground mb-3">
                                        {item.duration}
                                      </div>
                                      
                                      {/* Resources */}
                                      {item.resources.length > 0 && (
                                        <div className="space-y-2">
                                          <h5 className="text-sm font-medium text-muted-foreground">Resources:</h5>
                                          <div className="flex flex-wrap gap-2">
                                            {item.resources.map((resource, index) => {
                                              const ResIcon = ResourceIcon(resource.type);
                                              return (
                                                <Button
                                                  key={index}
                                                  variant="outline"
                                                  size="sm"
                                                  className="h-8 text-xs"
                                                >
                                                  <ResIcon className="w-3 h-3 mr-1" />
                                                  {resource.name}
                                                </Button>
                                              );
                                            })}
                                          </div>
                                        </div>
                                      )}
                                    </div>
                                    <Button 
                                      size="sm" 
                                      variant={item.completed ? "outline" : "default"}
                                      className={item.completed ? "" : "pixel-button-primary"}
                                    >
                                      {item.completed ? "Review" : "Start"}
                                    </Button>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </TabsContent>
            
            <TabsContent value="discussions" className="mt-6">
              <div className="text-center py-12">
                <Users className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="font-heading font-semibold text-lg mb-2">Course Discussions</h3>
                <p className="text-muted-foreground">Connect with your batch mates and instructors</p>
                <Button className="mt-4 pixel-button-primary">Join Discussion</Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default CourseDetail;
