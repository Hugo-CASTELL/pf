export interface SocialProps {
  alt: string;
  valueAlt?: string,
  url: string;
  customIcon: boolean;
}

export const linkedin: SocialProps = {
  alt: "Linked In",
  url: "https://www.linkedin.com/in/hugo-castell/",
  customIcon: true,
}

export const github: SocialProps = {
  alt: "Github",
  url: "https://github.com/Hugo-CASTELL/",
  customIcon: true,
}

export const resume: SocialProps = {
  alt: "Resume",
  url: "/resume.pdf",
  customIcon: false,
}

export const mail: SocialProps = {
  alt: "Email",
  valueAlt: "hugo.castell@outlook.fr",
  url: "mailto:hugo.castell@outlook.fr",
  customIcon: false,
}

export const phone: SocialProps = {
  alt: "Phone",
  valueAlt: "+33 7 80 36 87 86",
  url: "tel:+33780368786",
  customIcon: false,
}

export const allSocials = [
  github,
  linkedin,
  resume,
  mail,
  phone
]

export const selectedSocials = [
  github,
  linkedin,
  resume
]
