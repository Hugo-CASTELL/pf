import { CursorArrowRaysIcon } from "@heroicons/react/16/solid";
import { CornerIcon } from "../svg/corner";

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
        className="relative mr-1 text-content-neutral-primary"
      >
        <CursorArrowRaysIcon className="absolute -top-0 -right-2.5 size-icon-sm" />
        {selected &&
          <>
            <CornerIcon iconClassName="animate-pulse w-2 h-2 absolute top-0    -left-1.5" />
            <CornerIcon iconClassName="animate-pulse w-2 h-2 absolute bottom-0 -left-1.5  -rotate-90" />
            <CornerIcon iconClassName="animate-pulse w-2 h-2 absolute bottom-0 -right-1.5  rotate-180" />
          </>
        }
        {children}
      </button>
    );
  }

  return <span className="text-content-neutral-primary">{children}</span>;
}

