export function contentBrandRoundRobin(index: number) {
  return coreBgBrandRoundRobin("content", index)
}

export function bgBrandRoundRobin(index: number) {
  return coreBgBrandRoundRobin("background", index)
}

export function coreBgBrandRoundRobin(context: string, index: number) {
  if(index <= 0) return ""

  let color = "";
  switch (index % 5) {
    case 1: color = "-brand-primary"; break;
    case 2: color = "-brand-secondary"; break;
    case 3: color = (context.includes("content") ? "-parchment-300" : "-neutral-tertiary"); break;
    case 4: color = "-brand-tertiary"; break;
    default: return ""
  }
  return `bg-${context}${color}`
}

export function borderByBrandBackground(background: string) {
  return lineByBrandBackground("border-", background)
}

export function outlineByBrandBackground(background: string) {
  return lineByBrandBackground("outline-", background)
}

export function lineByBrandBackground(prefix: string, background: string) {
  if(!background.includes("bg-")) return ""

  let color = "";

  switch (background) {
    case "bg-background-brand-primary": color = "ice-300"; break;
    case "bg-background-brand-secondary": color = "moss-300"; break;
    case "bg-background-brand-tertiary": color = "pastel-300"; break;
    case "bg-background-neutral-tertiary": color = "parchment-300"; break;
    default: return ""
  }

  return `${prefix}${color}`
}
export const transitionClassic = "transition-all duration-500 ease-in-out"
export const transitionFast    = "transition-all duration-250 ease-in-out"
