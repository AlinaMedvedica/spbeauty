import styled from "styled-components";
import PrimaryButton from "../../../../Components/PrimaryButton";
import SecondaryButton from "../../../../Components/SecondaryButton";

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 64px;
`;
function Heading() {
  return (
    <Header className="">
      <h1 className="large-title">Данные о компании</h1>
      <SecondaryButton>Закрыть запись</SecondaryButton>
    </Header>
  );
}

export default Heading;
