import { BaseTemplate } from "../components/common/BaseTemplate";

export function CivicEngagementBelow() {
  return (
    <div className="blog-block">
      <h2 className="blog-title">A space for future civic engagement</h2>
      <p className="blog-paragraph">
        This page will be dedicated to sharing upcoming participations and initiatives related to civic engagement and community involvement.
      </p>
      <p className="blog-paragraph">
        Whether through local associations, volunteer projects, or collaborative efforts that contribute to the common good, this section will showcase actions that reflect a commitment to making a positive social impact.
      </p>
      <p className="blog-paragraph">
        As I continue to explore opportunities to get involved in civic and community-oriented activities, updates will be published here to highlight new experiences and partnerships.
      </p>

      <h2 className="blog-title">Stay tuned</h2>
      <p className="blog-paragraph">
        Feel free to visit again soon for updates on the first projects and associations I’ll be joining.
      </p>
    </div>
  )
}

export function CivicEngagement() {
  return (
    <BaseTemplate
      title={"Civic engagement,\ncommitment and actions,\nfor the common good."}
      belowSection={<CivicEngagementBelow />}
    />
  )
}
