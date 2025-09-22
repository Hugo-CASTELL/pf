import { BaseTemplate } from "../components/common/BaseTemplate";
import { TitleHightlight } from "../components/common/TitleHighlight";

export function Hobbies() {
  return (
    <BaseTemplate
      title={
        <div className="text-content-neutral-tertiary">
          <TitleHightlight>Programming</TitleHightlight> for fun,<br />
          mainly <TitleHightlight>sports</TitleHightlight>,<br />
          and also <TitleHightlight>videogames</TitleHightlight>.<br />
        </div>
      }
      tagsProps={[
      ]}
      buttonsProps={[
      ]}
    />
  )
}
