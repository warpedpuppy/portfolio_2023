import "./Tabs.scss";
import BackButton from "../../components/BackButton";

function Tabs({ tabs, active, setActive }) {
  if (!tabs) tabs = ["content", "code", "concept"];

  return (
    <div className="tab-shell">
      <BackButton />
      <ul className="tab-container">
        {tabs.map((tab, i) => {
          return (
            <li
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
