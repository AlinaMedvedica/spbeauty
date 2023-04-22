import PrimaryButton from "../../../../../Components/PrimaryButton";
import SecondaryButton from "../../../../../Components/SecondaryButton";
import ListElement from "./ListElement";
import "./Adresses.css";

function Addresses() {
  return (
    <div className="d-inline-flex flex-column gap-2 mt-4 border adresses-width">
      <div className="subheder-container">
        <h3 className="subheader">Адреса заведений</h3>
      </div>
      <div className="d-inline-flex flex-column gap-3">
        <div className="content-container">
          <ListElement>Санкт-Петербург, Невский пр-т. 28</ListElement>
          <ListElement>Санкт-Петербург, Казанская ул, 7</ListElement>
        </div>

        <SecondaryButton minWidth="217px">Добавить филиал</SecondaryButton>
      </div>
    </div>
  );
}

export default Addresses;
