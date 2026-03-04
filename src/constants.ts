import { Event, Topper, NewsItem, AlumniStory } from './types';

export const UPCOMING_EVENTS: Event[] = [
  {
    id: '1',
    title: 'Annual Day Celebration',
    date: '2026-04-15',
    time: '10:00 AM',
    description: 'A grand celebration of talent and culture.',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '2',
    title: 'Science Exhibition',
    date: '2026-03-20',
    time: '09:00 AM',
    description: 'Innovations and experiments by our young scientists.',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '3',
    title: 'Sports Meet 2026',
    date: '2026-03-28',
    time: '08:00 AM',
    description: 'Annual inter-house sports competition.',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=800'
  }
];

export const TOPPERS: Topper[] = [
  { name: 'A. Sneha', grade: '10th', percentage: '98.4%', year: '2025', image: 'https://i.pravatar.cc/150?u=sneha' },
  { name: 'K. Rahul', grade: '10th', percentage: '97.8%', year: '2025', image: 'https://i.pravatar.cc/150?u=rahul' },
  { name: 'M. Divya', grade: '10th', percentage: '97.2%', year: '2025', image: 'https://i.pravatar.cc/150?u=divya' }
];

export const NEWS: NewsItem[] = [
  { id: '1', title: 'Summer Vacation starts from May 1st', date: '2026-03-01', category: 'Notice' },
  { id: '2', title: 'Admissions Open for 2026-27 Academic Year', date: '2026-02-15', category: 'Update' },
  { id: '3', title: '10th Class Mock Exam Schedule Released', date: '2026-02-28', category: 'Notice' }
];

export const ALUMNI: AlumniStory[] = [
  {
    name: 'Dr. P. Satish',
    batch: '2005',
    achievement: 'Senior Surgeon at Apollo Hospitals',
    quote: 'Little Angels gave me the discipline and foundation to pursue my dreams in medicine.',
    image: 'https://i.pravatar.cc/150?u=satish'
  },
  {
    name: 'S. Anjali',
    batch: '2012',
    achievement: 'Software Engineer at Google',
    quote: 'The technical foundation and logical thinking I developed here were invaluable.',
    image: 'https://i.pravatar.cc/150?u=anjali'
  }
];
