import { useRef, useEffect } from "react";
import KlimtCanvas from "./components/KlimtCanvas";
import TabLayout from "../../../layout-templates/tabs/TabLayout";

function KlimtBackground() {
 

  return (
    <div className="general-layout">
      <h1>Klimt-inspired animation</h1>

      <TabLayout
        content={<KlimtCanvas />}
        code={<h1>code</h1>}
        concept={<h1>concept</h1>}
      />
    </div>
  );
}
export default KlimtBackground;
