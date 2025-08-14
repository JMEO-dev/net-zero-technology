import engineerImage from '@/assets/engineer-portrait.jpg';
import consultationImage from '@/assets/consultation-meeting.jpg';  
  
interface CardContent {
    title: string;
    description: string;
    image: string; 
    featured: boolean;
}

  export const services : CardContent[] = [
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
    {
      title: "Customized Solutions",
      description: "We use only the highest-quality solar panels, inverters, and other equipment to ensure that your system operates at peak performance.",
      image: engineerImage,
      featured: false
    },
    {
      title: "Customized Solutions",
      description: "We use only the highest-quality solar panels, inverters, and other equipment to ensure that your system operates at peak performance.",
      image: engineerImage,
      featured: false
    }
  ];

    export const projects : CardContent[] = [
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
    {
      title: "Customized Solutions",
      description: "We use only the highest-quality solar panels, inverters, and other equipment to ensure that your system operates at peak performance.",
      image: engineerImage,
      featured: false
    },
    {
      title: "Customized Solutions",
      description: "We use only the highest-quality solar panels, inverters, and other equipment to ensure that your system operates at peak performance.",
      image: engineerImage,
      featured: false
    }
  ];
