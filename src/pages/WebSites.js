import WebSitesLandingPage from '../layout-templates/WebSitesLandingPage';

const sites = [
  {
    name: 'tugtug',
    url:  'https://tugtug.com',
    image: '/images/sites/tugtug.png',
    tagline: 'See where the risk lives in any codebase.',
    description:
      'A code health dashboard for GitHub repositories. Tugtug reads the ' +
      'signals that make maintenance expensive — complexity, churn, coupling, ' +
      'ownership, and change history — and turns them into a practical map of ' +
      'where a codebase is asking for attention and whether that risk is ' +
      'getting better or worse over time.',
    tags: ['Code Analytics', 'Next.js', 'Supabase', 'GitHub API', 'd3'],
  },
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
      explanatoryText={["A few things I'm currently building."]}
      dotColor="0xBBCB50"
      sites={sites}
    />
  );
}

export default WebSites;
