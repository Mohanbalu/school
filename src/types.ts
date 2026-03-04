export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  description: string;
  image: string;
}

export interface Topper {
  name: string;
  grade: string;
  percentage: string;
  year: string;
  image: string;
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  category: 'Update' | 'Notice' | 'Result' | 'Event';
}

export interface AlumniStory {
  name: string;
  batch: string;
  achievement: string;
  quote: string;
  image: string;
}
