interface TitleHightlightProps {
  children: String,
}

export function TitleHightlight(props: TitleHightlightProps) {
  return (
    <button className="text-content-neutral-primary">
      {props.children}
    </button>
  )
}
