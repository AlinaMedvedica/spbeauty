import styled from "styled-components";
import SecondaryButton from "../../../../../Components/SecondaryButton";
import EditIcon from "../../../../../Icons/EditIcon";
import RemoveIcon from "../../../../../Icons/RemoveIcon";
import IconOnlyButton from "../../../../../Components/IconOnlyButton.js";
import "./ListElements.css";

const Option = styled.div`
  color: #0f172a;
  font-size: 15px;
`;

function ListElement(props) {
  return (
    <div className="d-flex flex-row align-items-center align-self-stretch gap-2 item">
      <Option className="flex-grow-1">{props.children}</Option>
      <EditIcon />
      <RemoveIcon />
    </div>
  );
}

export default ListElement;
