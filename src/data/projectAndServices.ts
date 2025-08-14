import engineerImage from '@/assets/engineer-portrait.jpg';
import consultationImage from '@/assets/consultation-meeting.jpg';
import PreviousWork1 from '@/assets/Our Previous Work 1.jpg';
import PreviousWork3 from '@/assets/Our Previous Work 3.jpg';

interface CardContent {
  title: string;
  description: string;
  image: string;
  featured: boolean;
}

export const homeServices: CardContent[] = [
  {
    title: "Panel Installation",
    description: "We use only the highest-quality solar panels, inverters, and other equipment to ensure that your system operates at peak performance.",
    image: engineerImage,
    featured: false
  },
];


export const services: CardContent[] = [
  {
    title: "Panel Installation",
    description: "We use only the highest-quality solar panels, inverters, and other equipment to ensure that your system operates at peak performance.",
    image: engineerImage,
    featured: false
  },
  {
    title: "Consultation",
    description: "Our experts use the latest technology and best practices to ensure that your system is designed for optimal performance.",
    image: consultationImage,
    featured: true
  },
  {
    title: "Customized Solutions",
    description: "We use only the highest-quality solar panels, inverters, and other equipment to ensure that your system operates at peak performance.",
    image: engineerImage,
    featured: false
  },
];

export const projects: CardContent[] = [
  {
    title: "Barapukuria, Dinajpur, Bangladesh",
    description: "Boundary & Area Survey, Land Documentation Verification for GridTied Solar PV Project (200 MWac)",
    image: PreviousWork3,
    featured: false
  },
];
