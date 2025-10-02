import capgemini_logo from "../../assets/img/capgemini_logo.png"
import enseeiht_logo from "../../assets/img/ENSEEIHT_logo.png"

export interface KnownTag {
  logoSrc: string,
  label: string,
}

export const capgemini: KnownTag = { label:"Capgemini Engineering", logoSrc:capgemini_logo }

export const enseeiht: KnownTag = { label:"ENSEEIHT", logoSrc:enseeiht_logo }

export const figma: KnownTag = { label:"Figma", logoSrc:enseeiht_logo }

export const react: KnownTag = { label:"React", logoSrc:enseeiht_logo }

export const nginx: KnownTag = { label:"Nginx", logoSrc:capgemini_logo }

export const known_tags = [
  capgemini,
  enseeiht
]
