interface ButtonProps {
  label: string;
  action: () => void;
}

export function Button(props: ButtonProps) {
  return (
    <button
      className="relative cursor-pointer rounded-classic bg-background-inverse-primary px-[22px] py-[12px] grid place-items-center"
      onClick={props.action}
    >
      <p className="text-md font-medium text-content-inverse-primary">{props.label}</p>
    </button>
  )
}
