export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: string;
  pdfUrl?: string;
  figmaLink?: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  description: string;
  pdfUrl: string;
  coverImage: string;
  tags: string[];
  date: string;
}