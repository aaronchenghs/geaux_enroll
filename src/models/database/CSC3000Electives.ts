import { Course, Department } from "../course";

export const CSC3304 = new Course({
  name: "Introduction to Systems Programming",
  code: 3304,
  department: Department.CSC,
  description: `This course provides an in-depth exploration of systems programming fundamentals. Students will gain practical experience with low-level programming, focusing on the development and management of system software. Key topics include operating system interfaces, memory management, process synchronization, and file systems. The course emphasizes hands-on experience with system-level programming, using languages like C and assembly. Students will also learn about the architecture of modern operating systems and how to optimize software for system-level performance. By the end of this course, students will have developed a solid understanding of systems programming and its critical role in computer science.`,
  credits: 3,
});

export const CSC3700 = new Course({
  name: "Special Topics in Computer Science",
  code: 3700,
  department: Department.CSC,
  description: `CSC 3700 is a dynamic course designed to delve into emerging and advanced topics in computer science. The curriculum varies each semester, focusing on cutting-edge developments and innovative technologies in the field. Topics may include advanced algorithms, emerging programming paradigms, new software development techniques, or recent trends in computer hardware. The course is designed to offer students an opportunity to stay abreast of the rapidly evolving landscape of computer science and to gain hands-on experience with the latest tools and technologies. The course fosters a collaborative environment where students can engage in project-based learning on contemporary issues and challenges in computer science.`,
  credits: 3,
});

export const CSC3730 = new Course({
  name: "Machine Learning and Data Analytics",
  code: 3730,
  department: Department.CSC,
  description: `CSC 3730 provides a comprehensive introduction to machine learning and data analytics, focusing on the theoretical foundations and practical applications of these fields. Students will learn about various machine learning algorithms, including supervised and unsupervised learning, neural networks, and deep learning techniques. The course also covers essential aspects of data analytics, such as data preprocessing, statistical analysis, and visualization techniques. Emphasis is placed on real-world applications, enabling students to develop skills in building, evaluating, and improving machine learning models for tasks like classification, prediction, and clustering. The course is designed to equip students with the necessary tools to analyze complex datasets and derive meaningful insights, preparing them for careers in the rapidly growing fields of data science and artificial intelligence.`,
  credits: 3,
});

  export const CSC3000Electives: Course[] = [
    CSC3304,
    CSC3700,
    CSC3730,
  ];