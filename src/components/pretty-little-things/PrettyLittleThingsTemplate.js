import GeneralLayout from "../../layout-templates/GeneralLayout";
function PrettyLittleThingsTemplate({ title, subtitle, component }) {
  return (
    <GeneralLayout title={title} subtitle={subtitle} component={component} />
  );
}
export default PrettyLittleThingsTemplate;
