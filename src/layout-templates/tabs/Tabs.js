import "./Tabs.scss";


function Tabs({ tabs, active, setActive }) {
  if (!tabs) tabs = ["content", "code", "concept"];

  let tabWidth = 100 / tabs.length;
  let tabCSSWidth = {width: `${tabWidth}%`};

  return (
    <div className="tab-shell">

      <ul className="tab-container">
        {tabs.map((tab, i) => {
          return (
            <li 
			  style={tabCSSWidth}
              key={`tab${i}`}
              onClick={() => setActive(i)}
              className={i === active ? "active" : ""}
            >
              {tab}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Tabs;
