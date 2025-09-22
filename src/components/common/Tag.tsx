export interface TagProps {
  imgSrc?: string,
  label: string,
  bgType: 1 | 2 | 3 | 4,
  action?: () => void,
}

function bgSelector(bgType: 1 | 2 | 3 | 4) {
  switch (bgType) {
    case 1: return "bg-background-brand-primary";
    case 2: return "bg-background-brand-secondary";
    case 3: return "bg-background-brand-tertiary";
    case 4: return "bg-background-neutral-tertiary";
  }
}

export function Tag(props: TagProps){
  return (
    <button 
      className={`${props.action && 'cursor-pointer'} rounded-classic flex justify-center items-center gap-[7px] px-[5px] py-[3px] ${bgSelector(props.bgType)}`}
      onClick={props.action ?? (() => {})}
    >
      {props.imgSrc && <img src={props.imgSrc} className="max-h-[18px]" />}
      <p className="text-md font-medium">{props.label}</p>
    </button>
  )
}
