import Heading from "./Components/Heading";
import General from "./Components/General/General";
import Addresses from "./Components/Addresses/Addresses";
import styled from "styled-components";

const ContentElement = styled.div`
  padding: 0 72px;
`;

function AboutCompany() {
  return (
    <ContentElement>
      <Heading /> {/* Заголовок и кнопка справа */}
      <div className="d-flex flex-row mt-5 justify-content-between">
        <General /> {/* Основная информация вроде названия, типа и телефона */}
        <Addresses /> {/* Список доступных адресов заведений */}
      </div>
    </ContentElement>
  );
}

export default AboutCompany;
