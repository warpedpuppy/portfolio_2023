import GeneralLandingPage from "../../layout-templates/GeneralLandingPage";
import PrettyLittleThings from "../../site-data/pretty-little-things";
function PrettyLittleThingsLanding() {
  return (
    <GeneralLandingPage
      title="pretty little things:"
      dotColor={"0x669900"}
      explanatoryText={[
        `Over the years I've created a lot of pretty little things for work and myself.`,
        `Here are several of them:`,
      ]}
      links={Object.values(PrettyLittleThings).map(
        (item) => item.landingPageData
      )}
    />
  );
}

export default PrettyLittleThingsLanding;
