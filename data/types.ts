export interface IData {
  mainSection: IMainSection;
  consent: string;
  experience: IExperience;
  education: IEducation;
}

export interface IMainSection {
  header: IHeader;
  profileSection: IProfileSection;
  technologies: ITechnologies;
}

export interface IHeader {
  fullName: string;
  role: string;
}

export interface IProfileSection {
  photoUrl: string;
  contactLinks: IContactLink[];
  aboutMe: IAboutMe;
}

export interface IContactLink {
  icon: string;
  text: string;
  link: string;
}

export interface IAboutMe {
  title: string;
  description: string;
}

export interface ITechnologies {
  title: string;
  technologies: ISingleTechnology[];
  tools: ISingleTool[];
}

export interface ISingleTechnology {
  name: string;
  icon: string;
  level: number;
}

export interface ISingleTool {
  name: string;
  icon: string;
}

export interface IExperience {
  title: string;
  entries: IEntry[];
}

export interface IEntry {
  startTime: Date;
  endTime: Date | null;
  position: string;
  logo?: string;
  description: string;
}

export interface IEducation {
  title: string;
  entries: IEducationEntry[];
}

export interface IEducationEntry {
  startYear: string;
  endYear: string;
  institution: string;
  description: string;
}
