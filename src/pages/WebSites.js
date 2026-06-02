import "./WebSites.scss";
import GeneralLandingPage from '../layout-templates/GeneralLandingPage';
function WebSites() {
  return (
    <GeneralLandingPage
      title="web sites:"
      explanatoryText={[`I'm currently working on the following two web sites`]}
      dotColor={'0xBBCB50'}
      links={
        [
          { link: "http://tryingsomething.com", title: 'trying something' },
          { link: "http://utilspalooza.com", title: 'utils palooza' }
        ]
      }
    />
  );
}

export default WebSites;
