import React, { useEffect } from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    margin: 0 auto;  /* 부모에서 자동으로 가운데 정렬 */
`;

const DateInputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 50px;
    text-align: center;
    margin: 0 auto;  /* 부모에서 자동으로 가운데 정렬 */

    label {
        margin-bottom: 4px;
    }
`;

const SelectedDate = styled.p`
    font-size: 14px;
    color: #555;
    margin-top: 8px;
    text-align: center;
`;

function PickDateItem({ dateRange, setDateRange }) {
    const today = new Date();

    useEffect(() => {
        const today = new Date();
        if (!dateRange[0]) {
            setDateRange([today, dateRange[1]]);
        }
    }, [dateRange, setDateRange]);


    // 시작 날짜 변경 처리
    const handleStartDateChange = (date) => {
        const startDate = date || today;  // 날짜가 없으면 today를 사용
        setDateRange([startDate, dateRange?.[1]]);
    };

    // 종료 날짜 변경 처리
    const handleEndDateChange = (date) => {
        setDateRange([dateRange?.[0], date]);
    };

    return (
        <Wrapper>
            {/* 시작 날짜 선택 */}
            <DateInputWrapper>
                <label>시작 날짜</label>
                <DatePicker
                    selected={dateRange?.[0] || today}  // 시작 날짜가 없으면 today 사용
                    onChange={handleStartDateChange}
                    selectsStart
                    startDate={dateRange?.[0] || today}
                    endDate={dateRange?.[1] || null}
                    minDate={today}
                    inline
                    dateFormat="yyyy년 MM월 dd일"
                />
                <SelectedDate>
                    선택된 시작 날짜: {dateRange?.[0] ? dateRange[0].toLocaleDateString() : '날짜를 선택하세요'}
                </SelectedDate>
            </DateInputWrapper>

            {/* 종료 날짜 선택 */}
            <DateInputWrapper>
                <label>종료 날짜</label>
                <DatePicker
                    selected={dateRange?.[1] || null}
                    onChange={handleEndDateChange}
                    selectsEnd
                    startDate={dateRange?.[0] || today}
                    endDate={dateRange?.[1] || null}
                    minDate={dateRange?.[0] || today}
                    inline
                    dateFormat="yyyy년 MM월 dd일"
                />
                <SelectedDate>
                    선택된 종료 날짜: {dateRange?.[1] ? dateRange[1].toLocaleDateString() : '날짜를 선택하세요'}
                </SelectedDate>
            </DateInputWrapper>
        </Wrapper>
    );
}

export default PickDateItem;
