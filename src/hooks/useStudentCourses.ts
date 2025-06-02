
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

const staticStudentCourses: StudentCourse[] = [
  {
    "id": 502,
    "name": "Demo For Zuvy",
    "coverImage": "https://merakilearn.s3.ap-south-1.amazonaws.com/courseEditor/61c7b3e4-8329-46f1-83cf-0d4df5f4b402-cropped-image.png",
    "duration": "8",
    "language": "Kannada",
    "bootcampTopic": "JavaScript & React",
    "batchId": 212,
    "batchName": "JavaScript & React Learning",
    "progress": 8
  },
  {
    "id": 508,
    "name": "JavaScript Course",
    "coverImage": "",
    "duration": "",
    "language": "",
    "bootcampTopic": "",
    "batchId": 239,
    "batchName": "JavaScript Batch",
    "progress": 13
  },
  {
    "id": 513,
    "name": "Himachal Campus",
    "coverImage": "",
    "duration": "",
    "language": "",
    "bootcampTopic": "",
    "batchId": 250,
    "batchName": "Intern Batch",
    "progress": 67
  },
  {
    "id": 527,
    "name": "Testing Module Lock Feature",
    "coverImage": null,
    "duration": null,
    "language": null,
    "bootcampTopic": null,
    "batchId": 272,
    "batchName": "testing module lock",
    "progress": 40
  },
  {
    "id": 528,
    "name": "abcdefg course",
    "coverImage": null,
    "duration": null,
    "language": null,
    "bootcampTopic": null,
    "batchId": 273,
    "batchName": "asdfasd",
    "progress": 0
  }
];

const fetchStudentCourses = async (): Promise<StudentCourse[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 100));
  return staticStudentCourses;
};

export const useStudentCourses = () => {
  return useQuery({
    queryKey: ['studentCourses'],
    queryFn: fetchStudentCourses,
  });
};
