
import { useQuery } from '@tanstack/react-query';

interface StudentCourse {
  id: number;
  name: string;
  coverImage: string | null;
  duration: string | null;
  language: string | null;
  bootcampTopic: string | null;
  batchId: number;
  batchName: string;
  progress: number;
}

const fetchStudentCourses = async (): Promise<StudentCourse[]> => {
  const response = await fetch('/student');
  if (!response.ok) {
    throw new Error('Failed to fetch student courses');
  }
  return response.json();
};

export const useStudentCourses = () => {
  return useQuery({
    queryKey: ['studentCourses'],
    queryFn: fetchStudentCourses,
  });
};
