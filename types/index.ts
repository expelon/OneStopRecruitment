export interface Service {
  id: number;
  icon: string;
  title: string;
  description: string;
}

export interface Job {
  id: number;
  title: string;
  category: string;
  type: string;
  location: string;
  description: string;
}

export interface Industry {
  id: number;
  icon: string;
  title: string;
}

export interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  content: string;
  avatar: string;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
}
