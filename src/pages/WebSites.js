import WebSitesLandingPage from '../layout-templates/WebSitesLandingPage';

const sites = [
  {
    name: 'trying something',
    url:  'http://tryingsomething.com',
    image: '/images/sites/tryingsomething.png',
    tagline: 'Hear it. Read it. Play it.',
    description:
      'Interactive rhythm training and music theory for curious beginners and ' +
      'serious learners alike. Tap along to rhythms displayed on a live staff, ' +
      'explore the circle of fifths, read sheet music, and build real musical ' +
      'intuition — one exercise at a time.',
    tags: ['Music Education', 'React', 'Vite', 'Web Audio'],
  },
  {
    name: 'utilspalooza',
    url:  'http://utilspalooza.com',
    image: '/images/sites/utilspalooza.png',
    tagline: 'Canvas animation formulas. Live demos.',
    description:
      'A living reference of canvas animation utilities — collision detection, ' +
      'trigonometry, easing, bezier curves, and more. Every formula pairs with ' +
      'a live interactive canvas demo so you can see exactly what it does. ' +
      'Select what you need and download a ready-to-use TypeScript or JavaScript file.',
    tags: ['Animation', 'React', 'TypeScript', 'Canvas'],
  },
];

function WebSites() {
  return (
    <WebSitesLandingPage
      title="web sites:"
      explanatoryText={["A couple of things I'm currently building."]}
      dotColor="0xBBCB50"
      sites={sites}
    />
  );
}

export default WebSites;
