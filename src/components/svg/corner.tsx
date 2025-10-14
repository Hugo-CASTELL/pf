interface CornerIconProps {
  iconClassName: string;
}
export function CornerIcon(props: CornerIconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={props.iconClassName} viewBox="0 0 24 24">
      <rect x="0" y="0" width="24" height="12"/>
      <rect x="0" y="12" width="12" height="12"/>
    </svg>
  )
}
