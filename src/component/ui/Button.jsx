import React from "react";
import styled from "styled-components";

// StyledButton 컴포넌트에서 disabled 속성을 받아 스타일 적용
const StyledButton = styled.button`
    padding: 8px 16px;
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    border-width: 1px;
    border-radius: 8px;
    cursor: ${props => (props.disabled ? "not-allowed" : "pointer")};  /* 비활성화 상태일 때 커서 변경 */
    background-color: ${props => (props.disabled ? "lightgray" : (props.modified ? "orange" : "blue"))};  /* 비활성화 시 색상 변경 */
    color: ${props => (props.disabled ? "darkgray" : "white")};  /* 비활성화 시 글자 색상 변경 */
    border: 1px solid ${props => (props.disabled ? "gray" : (props.modified ? "darkorange" : "blue"))};  /* 비활성화 시 테두리 색상 변경 */
    
    &:hover {
        background-color: ${props => (props.disabled ? "lightgray" : (props.modified ? "darkorange" : "darkblue"))};  /* 비활성화 시 hover 상태 색상 변경 */
    }
`;

function Button(props) {
    const { title, onClick, modified, disabled } = props; // disabled를 추가로 받아옴

    return (
        <StyledButton onClick={onClick} disabled={disabled} modified={modified}>
            {title || "button"}
        </StyledButton>
    );
}

export default Button;
