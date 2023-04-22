import styled from "styled-components";
import SearchIcon from "../../../../Icons/SearchIcon";
import IconOnlyButton from "../../../../Components/IconOnlyButton";

const WrapperInput = styled.div`
  position: relative;
  width: 216px;
  padding: 0 16px;
`;

const Input = styled.input`
  padding: 8px 16px !important;
  border-radius: 24px;
  border: solid #e2e8f0 1px;
  background-color: #f8fafc;
  color: #152842;
  width: 100%;
  &:hover {
    background: linear-gradient(180deg, #dfeaf1 0%, #cfdde8 100%);
  }
  &:focus {
    background: white;
  }
`;

const SearchIconWrapper = styled.div`
  position: absolute;
  box-sizing: border-box;
  right: 22px; /* Здесь можно добавить отступ от правого края, чтобы сдвинуть иконку левее */
  top: 50%;
  transform: translateY(-50%);
`;

function SearchField() {
  return (
    <WrapperInput className="d-inline-flex">
      {/* Устанавливает ширину поля и включает относительное положение */}
      <Input className="p-2" placeholder="Найти" />
      <SearchIconWrapper className="p-2">
        {/* Устанавливает абсолютное положение внутри поля ввода */}
        <IconOnlyButton icon={<SearchIcon />} />
      </SearchIconWrapper>
    </WrapperInput>
  );
}

export default SearchField;
