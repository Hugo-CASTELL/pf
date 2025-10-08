import { CursorArrowRaysIcon } from "@heroicons/react/16/solid";

interface TitleHightlightProps {
  children: string;
  onClick?: () => void;
  selected?: boolean
}

export function TitleHightlight({ children, onClick = undefined, selected = false }: TitleHightlightProps) {
  if (onClick) {
    return (
      <button
        onClick={onClick}
        className={`relative mr-1 text-content-neutral-primary ${selected ? "text-stroke-white": ""}`}
      >
        <CursorArrowRaysIcon className="absolute -top-0 -right-2.5 size-icon-sm" />
        {children}
      </button>
    );
  }

  return <span className="text-content-neutral-primary">{children}</span>;
}

