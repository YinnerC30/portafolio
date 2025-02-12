import type { ImageCarousel } from "../components/Carousel";
import type { ItemTechnology } from "./ItemTechnology";

export interface ProjectInformation {
  projectName: string;
  descriptionProject: string;
  stackTechnologies: ItemTechnology[];
  linkRepository: string;
  linkPreview: string;
  features: string[];
  images: ImageCarousel[];
  videoDemoURL?: string;
}
