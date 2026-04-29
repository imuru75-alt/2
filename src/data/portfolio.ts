import img1 from '../assets/Portfolio/Ecommerce-Logo-Design-Graphics.jpg';
import img2 from '../assets/Portfolio/Branding.webp';
import img3 from '../assets/Portfolio/SocialMedia.webp';
import img4 from '../assets/Portfolio/YourCompanyLogo.avif';
import img5 from '../assets/Portfolio/Rebrand.webp';
import img6 from '../assets/Portfolio/ConsumerLogo.jpg';

export type Category = "All" | "Web" | "Design" | "Marketing" | "Branding";

export interface Project {
  id: number;
  title: string;
  category: Category;
  imageUrl: string;
}

export const portfolioData: Project[] = [
  {
    id: 1,
    title: "E-Commerce Website",
    category: "Web",
    imageUrl: img1,
  },
  {
    id: 2,
    title: "Brand Identity Guide",
    category: "Branding",
    imageUrl: img2,
  },
  {
    id: 3,
    title: "Social Media Campaign",
    category: "Marketing",
    imageUrl: img3,
  },
  {
    id: 4,
    title: "Mobile App Interface",
    category: "Design",
    imageUrl: img4,
  },
  {
    id: 5,
    title: "Corporate Website Rebrand",
    category: "Web",
    imageUrl: img5,
  },
  {
    id: 6,
    title: "Product Packaging",
    category: "Design",
    imageUrl: img6,
  },
];
