import './TabBody.scss';
function TabBody({active, code, concept, content}) {

	return ( <div className="tab-body-shell"> {active === 0 ? content : active === 1 ? code : concept } </div> );
}

export default TabBody;