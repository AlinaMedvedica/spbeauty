import styled from "styled-components";

const Input = styled.input`
  outline: none;
  border-radius: 0px;
  border: 1px solid #e2e8f0;
  background-color: #f8fafc;
  color: #0f172a;
  border-radius: 24px;
  padding-left: 16px !important;
`;

const TitleComponent = styled.div`
  color: #94a3b8;
`;

function TitledTextInput({ title, def }) {
  const Title =
    title === undefined ? (
      <div></div>
    ) : (
      <TitleComponent>{title}</TitleComponent>
    );
  return (
    <div className="d-flex flex-column gap-2">
      {Title}
      <Input className="p-2" defaultValue={def}></Input>
    </div>
  );
}

export default TitledTextInput;
