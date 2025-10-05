export interface Project {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  number: string;
  heroImage: string;
  images: string[];
  category: string;
  year: string;
  client?: string;
  role: string;
  duration: string;
  tools: string[];
  challenge: string;
  solution: string;
  results: string[];
  nextProject?: string;
  prevProject?: string;
}

export const projects: Project[] = [
  {
    id: "energy-insights",
    title: "Energy Insights",
    description: "Energy Insights is a comprehensive platform that aims to provide visual data representation on your energy consumption patterns. The platform offers users the ability to track, analyze, and optimize their energy usage through intuitive dashboards and actionable insights.",
    shortDescription: "A platform for visualizing and optimizing energy consumption data.",
    number: "01",
    heroImage: "https://static.wixstatic.com/media/6dd4cb_db4eca3770524c919e814dcd803f23a5~mv2.png/v1/fit/w_826,h_805,q_90,enc_avif,quality_auto/6dd4cb_db4eca3770524c919e814dcd803f23a5~mv2.png",
    images: [
    "https://static.wixstatic.com/media/6dd4cb_6544767aa87b473284e9120ecbf72f05~mv2.png/v1/fit/w_826,h_805,q_90,enc_avif,quality_auto/6dd4cb_6544767aa87b473284e9120ecbf72f05~mv2.png",
    "https://static.wixstatic.com/media/6dd4cb_6a0194be3f5345ccb26c6a3335e7516e~mv2.png/v1/fit/w_826,h_805,q_90,enc_avif,quality_auto/6dd4cb_6a0194be3f5345ccb26c6a3335e7516e~mv2.png",
  ],
    category: "Energy & Sustainability",
    year: "2024",
    tools: ["Figma", "Figjam", "Illustrator", "Photoshop"],
    challenge: "A one shop-stop platform for all your energy consumption data, providing insights and actionable recommendations to help users save on energy costs.",
    solution: "Designed a clean, user-friendly interface that allows users to easily navigate through their energy data, visualize consumption areas throughout their homes, and receive personalized tips for reducing energy usage.",
    nextProject: "ctrl",
    prevProject: "fintech-mobile-app",
    results: []
  },
  {
    id: "ctrl",
    title: "Ctrl - AI Productivity Tool",
    description: "Ctrl is an app aiming for productivity and having control over your day-to-day tasks. Creating priorites for both your apps and contacts.",
    shortDescription: "Ctrl is an AI-powered productivity tool that helps users manage tasks, prioritize apps, and streamline daily routines.",
    number: "02",
    heroImage: "https://static.wixstatic.com/media/6dd4cb_3601428b9030461aba2fdcacb6bb6e22~mv2.png/v1/fit/w_826,h_688,q_90,enc_avif,quality_auto/6dd4cb_3601428b9030461aba2fdcacb6bb6e22~mv2.png",
    images: [
      "https://static.wixstatic.com/media/6dd4cb_f2a6c6292f234564a99d0f461c4a00a8~mv2.png/v1/fit/w_826,h_688,q_90,enc_avif,quality_auto/6dd4cb_f2a6c6292f234564a99d0f461c4a00a8~mv2.png",
      "https://static.wixstatic.com/media/6dd4cb_357d0376345145c485560d98159f4b94~mv2.png/v1/fit/w_826,h_688,q_90,enc_avif,quality_auto/6dd4cb_357d0376345145c485560d98159f4b94~mv2.png"
    ],
    category: "Productivity",
    year: "2022",
    tools: ["Figma", "Figjam", "Illustrator", "Photoshop"],
    challenge: "Simplifying task management and app prioritization to enhance user productivity without overwhelming them with features.",
    solution: "Designed an intuitive interface that leverages AI to help users prioritize their tasks and apps based on their daily routines and goals, while maintaining a clean and distraction-free environment.",
    nextProject: "strive",
    prevProject: "energy-insights"
  },
  {
    id: "strive",
    title: "Strive - Portfolio & Social Platform",
    description: "A platform for learning new skills, sharing your work, and recieving feedback and criticism from industry professionals. Create an online portfolio to showcase your work and connect with potential clients or employers.",
    shortDescription: "Platform for learning new skills, sharing work, and connecting with professionals.",
    number: "03",
    heroImage: "https://static.wixstatic.com/media/6dd4cb_3731e6d495624a67b9cefcfcc0a2b125~mv2.png/v1/fit/w_826,h_688,q_90,enc_avif,quality_auto/6dd4cb_3731e6d495624a67b9cefcfcc0a2b125~mv2.png",
    images: [
      "https://static.wixstatic.com/media/6dd4cb_b155dfecd96f4cb595ef1c074295719d~mv2.png/v1/fit/w_826,h_688,q_90,enc_avif,quality_auto/6dd4cb_b155dfecd96f4cb595ef1c074295719d~mv2.png",
      "https://static.wixstatic.com/media/6dd4cb_7ff0aee2b13d48909ca14010778b2fb9~mv2.png/v1/fit/w_826,h_688,q_90,enc_avif,quality_auto/6dd4cb_7ff0aee2b13d48909ca14010778b2fb9~mv2.png"
    ],
    year: "2022",
    tools: ["Figma", "Figjam", "Illustrator", "Photoshop"],
    challenge: "Creating a space for new designers and existing professionals to learn, share, and grow their skills in a supportive community environment.",
    solution: "Designed a user-friendly platform that combines portfolio showcasing with social networking features, allowing users to easily share their work, receive feedback, and access learning resources.",
    nextProject: "3D Art Showcase",
    prevProject: "ctrl"
  },
  {
    id: "3D Art Showcase",
    title: "3D Art Showcase",
    description: "A collection of 3D Artworks created on Blender and rendered on Cycles.",
    shortDescription: "Showcasing a variety of 3D art styles and techniques.",
    number: "04",
    heroImage: "https://static.wixstatic.com/media/6dd4cb_05f82593203d498db43ba45e3ce46401~mv2.png/v1/fit/w_826,h_688,q_90,enc_avif,quality_auto/6dd4cb_05f82593203d498db43ba45e3ce46401~mv2.png",
    images: [
      "https://static.wixstatic.com/media/6dd4cb_64e9dd67cc9e4f46886b2d19a5335eaf~mv2.jpg/v1/fit/w_826,h_688,q_90,enc_avif,quality_auto/6dd4cb_64e9dd67cc9e4f46886b2d19a5335eaf~mv2.jpg",
      "https://static.wixstatic.com/media/6dd4cb_ac7a83d12ce14627947388c272f395af~mv2.jpg/v1/fit/w_826,h_688,q_90,enc_avif,quality_auto/6dd4cb_ac7a83d12ce14627947388c272f395af~mv2.jpg"
    ],
    category: "3D Art",
    year: "2021-present",
    tools: ["Blender", "Cycles", "Photoshop"],
    challenge: "Showcasing a diverse range of 3D art styles and techniques to demonstrate versatility and creativity in 3D design.",
    solution: "Using various modeling and rendering techniques in Blender and Cycles to create visually striking 3D artworks that highlight different themes and concepts.",
    nextProject: "energy-insights",
    prevProject: "strive"
  }
];

export function getProjectById(id: string): Project | undefined {
  return projects.find(project => project.id === id);
}

export function getProjectsByPage(page: 'home' | 'work'): Project[] {
  // Return the same 4 main projects for both home and work pages
  return projects.slice(0, 4);
}