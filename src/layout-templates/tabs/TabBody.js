import './TabBody.scss';
function TabBody({active, contentArray}) {

	return ( <div className="tab-body-shell"> { contentArray[active] } </div> );
}

export default TabBody;