import { BaseTemplate } from "../components/common/BaseTemplate";

export function InternationalMobilityBelow() {
  return (
    <div className="blog-block">
      <h2 className="blog-first-title">Currently searching for opportunities</h2>
        <p className="blog-paragraph">As a future engineer with a global outlook, I am dedicating significant effort to research international mobility internship opportunities within the software engineering sector.</p>
        <p className="blog-paragraph">My goal is to build a career that allows me to contribute to diverse teams around the world, gain exposure to different engineering practices, and strengthen my communication and intercultural skills.</p>
        <p className="blog-paragraph">As I actively seek these engineering opportunities abroad, please feel free to contact me.</p>

      <h2 className="blog-title">Professional background</h2>
        <p className="blog-paragraph">Currently working in a fully English-speaking environment at Capgemini Engineering, I collaborate daily with a highly diverse team including colleagues from France, Brazil, Germany, India and Spain.</p>
        <p className="blog-paragraph">This experience has strengthened my ability to work across cultures and my next goal is to immerse myself in another country's professional environment to continue growing both personally and technically.</p>
    </div>
  )
}

export function InternationalMobility() {
  return (
    <BaseTemplate
      title={"Beyond borders,\nembracing challenges,\nfor a passport of skills."}
      belowSection={<InternationalMobilityBelow />}
    />
  )
}
