import "./Tabs.scss";
import BackButton from "../../components/BackButton";
import { useState } from 'react';
function Tabs({ tabs }) {
  if (!tabs) tabs = ["content", "code", "concept"];
  const [ active, setActive ] = useState(0)
  return (
	<div className="tab-shell">
		<BackButton />
    <ul className="tab-container">
      {tabs.map((tab, i) => {
        return <li key={`tab${i}`} onClick={ () => setActive(i) } className={i === active ? 'active' : ''}>{tab}</li>;
      })}
    </ul>
	</div>
  );
}

export default Tabs;
