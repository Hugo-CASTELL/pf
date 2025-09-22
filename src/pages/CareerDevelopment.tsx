import { BaseTemplate } from "../components/common/BaseTemplate";
import { TitleHightlight } from "../components/common/TitleHighlight";

export function CareerDevelopment() {
  return (
    <BaseTemplate
      title={
        <div className="text-content-neutral-tertiary">
          <TitleHightlight>Career development</TitleHightlight>,<br />
          a page <TitleHightlight>about my growth</TitleHightlight>,<br />
          mainly <TitleHightlight>for my teachers</TitleHightlight>.<br />
        </div>
      }
    />
  )
}
