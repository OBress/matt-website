export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  isVideo: boolean;
  location: string;
  videoUrl?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Bucknell Sports Video",
    description:
      "Produced promotional content for Bucknell Men's Basketball, garnering over 100,000 views. Led the planning, production, and editing of video content, ensuring high-quality execution and timely delivery.",
    image: `${process.env.NODE_ENV === 'production' ? '/matt-website' : ''}/2.jpg`,
    link: "https://example.com/project1",
    isVideo: true,
    location: "Lancaster, PA",
  },
  {
    id: 2,
    title: "High-Speed Drone Racing Coverage",
    description:
      "Captured immersive footage of high-speed drone racing, enhancing the visuals to meet the specific creative and technical requirements of the company. Took charge of drone piloting and coordinated with event staff to ensure smooth and exciting race coverage.",
    image: `${process.env.NODE_ENV === 'production' ? '/matt-website' : ''}/1.jpg`,
    link: "https://www.youtube.com/watch?v=nDP_DuxFWDw&ab_channel=GregDoucette",
    isVideo: false,
    location: "Mill Hall, PA",
  },
  {
    id: 3,
    title: "Suprise Propsal Video",
    description:
      "Delivered a heartwarming and unforgettable proposal video, carefully crafted to meet the client's expectations. Managed the logistics, timing, and execution while balancing creativity and surprise to capture the perfect moment.",
    image: "/placeholder.svg?height=500&width=800",
    link: "https://www.youtube.com/watch?v=nDP_DuxFWDw&ab_channel=GregDoucette",
    isVideo: true,
    location: "Bethany Beach, DE",
    videoUrl: "https://www.youtube.com/embed/nDP_DuxFWDw"
  },
]; 