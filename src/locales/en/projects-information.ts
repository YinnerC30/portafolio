import type { ProjectInformation } from "../../interfaces/ProjectInformation";

export const projectsEN: ProjectInformation[] = [
  {
    projectName: "Cropco: Crop Control and Monitoring Solution",
    descriptionProject:
      "The comprehensive solution to manage crop information efficiently and effectively. Record and monitor crop progress in real time. Provides valuable insights thanks to advanced analysis tools.",
    stackTechnologies: [
      {
        name: "React",
        backgroundColor: "bg-blue-600",
      },
      { name: "NestJS", backgroundColor: "bg-pink-600" },
      { name: "PostgreSQL", backgroundColor: "bg-blue-600" },
      { name: "Shadcn/ui", backgroundColor: "bg-gray-600" },
    ],
    linkRepository: "https://github.com/YinnerC30/frontend-cropco-app",
    linkPreview: "https://cropco-dev.netlify.app/",
    features: [
      "User authentication and authorization through policies",
      "Control and management of client employees, crops, suppliers, agricultural inputs, harvests, sales, purchases and payments",
      "Analysis and presentation of graphs",
      "PDF report generation",
      "Search bars and advanced information filtering",
      "Query optimization by storing data in cache",
      "Temporary user session with the ability to extend it",
      "Tabulated records with manual pagination",
      "Ordering of information by numerical values, dates and alphabet",
      "Application command search bar",
      "Application theme change (dark and light mode)",
    ],
    images: [],
    videoDemoURL: "https://www.youtube.com/embed/UXXsp_PqsHo?si=GNIZBMMfTT4QFWjb"
  },
];
