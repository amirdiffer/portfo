export default interface Project {
  name: string;
  description: string;
  technologies: Technology[];
}

interface Technology {
  title: string;
  iconColor: TechnologyColor;
}

export enum TechnologyColor {
  TypeScript,
  PHP,
}
