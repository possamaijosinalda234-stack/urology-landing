export interface Testimonial {
  id: number;
  name: string;
  age: number;
  location: string;
  text: string;
  rating: number;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface Stat {
  label: string;
  value: string;
  suffix?: string;
}

export interface FAQ {
  question: string;
  answer: string;
}
