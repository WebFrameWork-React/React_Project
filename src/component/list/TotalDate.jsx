import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    width: 50%;
    padding: 16px;
    display: flex;
    justify-content: center;  /* 수평 가운데 정렬 */
    align-items: center;  /* 수직 가운데 정렬 */
    border: 1px solid grey;
    border-radius: 8px;
    background: white;
    margin: 0 auto;  /* 부모에서 자동으로 가운데 정렬 */
`;

const Column = styled.div`
    flex: 1;
    margin-right: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    &:last-child {
        margin-right: 0;
    }
`;

const InputLabel = styled.label`
    font-size: 20px;
    margin-top: 10px;
    display: flex;
`;

const InputField = styled.input`
    width: 80%;
    max-width: 200px;
    padding: 6px;
    margin-top: 4px;
    margin-bottom: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
`;

function TotalDate(props) {
    const { setTotalDays } = props;

    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e) => {
        const value = e.target.value;
        setInputValue(value);
        setTotalDays(value ? Number(value) : 0);
    };

    return (
        <Wrapper>
            <Column>
                <InputLabel htmlFor="totalDays">총 휴가일수</InputLabel>
                <InputField
                    type="number"
                    id="totalDays"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="총 휴가일수"
                />
            </Column>
        </Wrapper>
    );
}

export default TotalDate;
