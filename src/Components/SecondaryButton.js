import Clickable from "./Clickable";
import styled from "styled-components";

function SecondaryButton(props) {
  // Здесь устанавливается минимальная ширина для кнопки
  let minWidth = props.minWidth === undefined ? "144px" : props.minWidth;
  const Button = styled.div`
    min-width: ${minWidth};
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px 16px;
    gap: 16px;
    background: #ffffff;
    border: 1px solid #64748b;
    border-radius: 24px;
    color: #64748b;
  `;
  return (
    <Clickable>
      <Button className="p-2 text-md">{props.children}</Button>
    </Clickable>
  );
}

export default SecondaryButton;
