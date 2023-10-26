import BackButton from "../components/BackButton";

function GeneralLayout({title, subtitle, component}) {
  return (
    <section className="general-layout">
	  <BackButton />
      <h1>{ title }</h1>
	  <h2>{ subtitle }</h2>
	 { component }
    </section>
  );
}

export default GeneralLayout;
