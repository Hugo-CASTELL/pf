import { BaseTemplate } from "../components/common/BaseTemplate";
import { TitleHightlight } from "../components/common/TitleHighlight";

export function CareerDevelopmentBelow() {
  return (
    <div className="blog-block">
      <h2 className="blog-first-title">Professional experience</h2>

      <div className="blog-paragraph">
        <div className="flex gap-2">
          <div className="flex flex-col">
            <strong>2024–now</strong> 
            <strong>2022–2024</strong> 
          </div>
          <div className="flex flex-col">
            <p>Capgemini Engineering</p>
            <p>Equans</p>
          </div>
        </div>
      </div>

      <h2 className="blog-title">Study journey</h2>

      <div className="blog-paragraph">
        <div className="flex gap-2">
          <div className="flex flex-col">
            <strong>2024–now</strong> 
            <strong>2021–2024</strong> 
          </div>
          <div className="flex flex-col">
            <p>Computer and networks engineering</p>
            <p>Academic computer science bachelor</p>
          </div>
        </div>
      </div>

      <h2 className="blog-title">My main strength</h2>

        <p className="blog-paragraph">
          I spent four out of five years of my computer engineering studies as an apprentice so far. My academic studies gave me a solid theoretical foundation, personal exploration with true curiosity deepened my understanding, and real-world experience in companies taught me about teamwork, deadlines, project management, compromises, and addressing user needs. This combination has helped me develop a well-rounded skill set and the ability to tackle complex problems effectively, always keeping in mind what truly matters: performance and the end user.
        </p>

      <h2 className="blog-title">My Career Evolution Plan</h2>

      <p className="blog-paragraph">
        <a href="cep.pdf" target="_blank" className="cursor-pointer">
          <img src="cep.jpg" />
        </a>
      </p>
    </div>
  );
}

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
      belowSection={<CareerDevelopmentBelow />}
    />
  )
}
