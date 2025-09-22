export interface ButtonProps {
  label: string;
  action: () => void;
  isSpecial?: boolean;
}

export function Button(props: ButtonProps) {
  console.log(props.label, props.isSpecial)
  if(props.isSpecial && props.isSpecial == true) {
    return (
      <div className="relative">
        <ButtonCore label={props.label} action={props.action} />
        <div className="absolute top-0 left-0 -translate-1/2 size-[30px] rounded-full bg-background-neutral-secondary" />
        <div className="absolute bottom-0 right-0 translate-1/2 size-[30px] rounded-full bg-background-neutral-secondary" />
      </div>
    )
  } else {
    return (
      <ButtonCore label={props.label} action={props.action} />
    )
  }
}

function ButtonCore(props: ButtonProps) {
  return (
    <button
      className="relative cursor-pointer rounded-classic bg-background-inverse-primary px-[22px] py-[12px] grid place-items-center"
      onClick={props.action}
    >
      <p className="text-md font-medium text-content-inverse-primary">{props.label}</p>
    </button>
  )
}
