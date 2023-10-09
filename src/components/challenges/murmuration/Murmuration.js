import "./Murmuration.scss";
import MurmurationCanvas from "./MurmurationCanvas";
import SetUpMurmuration from "./code/index";
import BackButton from "../../BackButton";
function Murmuration() {
  return (
    <section className="general-challenges-layout">
      <BackButton />
      murmuration
      <MurmurationCanvas startClass={SetUpMurmuration} />
    </section>
  );
}

export default Murmuration;
