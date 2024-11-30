import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../ui/SelectForm.css';
import useVacation from '../list/useVacation';
import { getTileClassName, getMonthRange, groupConsecutiveDates } from '../list/holidayUtils';
import holidays from '../list/HolidayList';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FaCalendarCheck, FaUmbrellaBeach } from 'react-icons/fa';
import BackButton from '../list/BackButton';

// 스타일 컴포넌트 정의

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
`;

const InfoPanel = styled.div`
  flex: 1;
  position: sticky;
  top: 20px;
  align-self: flex-start;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;
  min-width: 265px;
  max-width: 300px;
`;

const CalendarGrid = styled.div`
  flex: 2;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  max-width : 100px;
   
  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr); /* 한 줄에 2개의 열 */
  }

  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr); /* 한 줄에 1개의 열 */
  }
`;

const CalendarHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffecb3; /* 배경색 */
  color: #333; /* 텍스트 색상 */
  padding: 10px 20px;
  border-radius: 20px;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 10px; /* 달력과 간격 */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* 그림자 효과 */
  max-width: fit-content;
  margin-left: auto;
  margin-right: auto;
`;

const CalendarContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-height: 400px;
  background-color: #D6F0FF;

  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05); /* 크기를 1.05배 확대 */
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2); /* 그림자 효과를 강조 */
  }
`;

const StyledButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #4D9ED8;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;

  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    background-color: #5BB8E6;
    transform: scale(1.02);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  }
`;

const DateBlock = styled.div`
  display: inline-block;
  background-color: #ffecb3;
  color: #333;
  padding: 8px 12px;
  margin: 5px;
  border-radius: 12px;
  font-size: 14px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const DateList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const VacationDaysBlock = styled.div`
  display: inline-block;
  background-color: #ffecb3; /* 밝은 노란색 배경 */
  color: #333;
  padding: 8px 12px;
  margin: 5px 0;
  border-radius: 12px;
  font-size: 14px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-weight: bold;
`;

const SelectForm = ({ dateRange, totalDays }) => {
  const [startDate] = useState(null);
  const [endDate] = useState(null);
  const { vacationDaysLeft, selectedDays, handleDateClick } = useVacation(totalDays);
  const navigate = useNavigate();
  const [monthRange, setMonthRange] = useState([]);

  useEffect(() => {
    const savedSelectedDays = JSON.parse(sessionStorage.getItem('selectedDays')) || [];
    const savedHolidays = JSON.parse(sessionStorage.getItem('holidays')) || [];

    // 중복 방지: 배열에 동일한 값을 추가하지 않도록 설정
    if (savedSelectedDays.length > 0) {
      const uniqueSelectedDays = Array.from(new Set([...selectedDays, ...savedSelectedDays]));
      selectedDays.splice(0, selectedDays.length, ...uniqueSelectedDays);
    }
    if (savedHolidays.length > 0) {
      holidays.splice(0, holidays.length, ...savedHolidays);
    }
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // dateRange 값이 변경될 때마다 월 범위 업데이트
  useEffect(() => {
    if (dateRange?.[0] && dateRange?.[1]) {
      const months = getMonthRange({ start: dateRange[0], end: dateRange[1] });
      setMonthRange(months); // monthRange 업데이트
    }
  }, [dateRange]);

  const minDate = startDate ? new Date(startDate) : new Date();
  const maxDate = endDate ? new Date(endDate) : null;

  // 선택된 날짜를 클릭할 때 sessionStorage에 저장
  const handleDayClick = (date) => {
    handleDateClick(date.toLocaleDateString('ko-KR'));
  };

  // 결과 보러 가기 버튼 클릭 시 서버로 유저의 휴가 일정 값을 전송, 정상 처리 시 다음 페이지로 이동
  const handleResultButtonClick = async () => {
    // const vacationData = {
    //   userId, // 유저 아이디
    //   vacationDaysLeft, // 남은 휴가 일수
    //   selectedDays, // 선택된 휴가 날짜
    //   holidays, // 공휴일
    // };

    // try {
    //   const response = await fetch('https://example.com/api/vacation', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(vacationData),
    //   });

    //   if (response.ok) {
    //     const result = await response.json();
    //     console.log('서버 응답:', result);

        // 성공 시 결과 페이지로 이동
        navigate('/result', { state: { selectedDays, holidays } });
        sessionStorage.setItem('selectedDays', JSON.stringify(selectedDays));
        sessionStorage.setItem('holidays', JSON.stringify(holidays));
        sessionStorage.setItem("totalDays", JSON.stringify(vacationDaysLeft))
    //   } else {
    //     console.error('서버 요청 실패:', response.statusText);
    //   }
    // } catch (error) {
    //   console.error('서버 요청 중 에러 발생:', error);
    // }
  };

  return (
    <Container>
      <header className="header-container">
        {/* BackButton 컴포넌트 추가 */}
        <BackButton />
        <style>
          {`
            button {
                top: auto !important;
            }
            `}
        </style>
        <h1>휴가 정보를 입력하세요</h1>
      </header>
      {/* 정보 패널 */}
      <InfoPanel>
        <h2>
          <FaUmbrellaBeach style={{ marginRight: '8px', color: '#007bff' }} />
          휴가 정보
        </h2>
        <h2 className="leftdays">
          <FaCalendarCheck style={{ marginRight: '5px', color: '#f39c12' }} />
          남은 휴가 일수 :
          <VacationDaysBlock>{vacationDaysLeft}일</VacationDaysBlock>
        </h2>
        <h2 className="selecteddays">선택된 휴가 날짜:</h2>
        <DateList>
          {groupConsecutiveDates(selectedDays, holidays).map((group, idx) => (
            <DateBlock key={idx}>{`${group[0]} ~ ${group[group.length - 1]}`}</DateBlock>
          ))}
        </DateList>
        <StyledButton
          onClick={handleResultButtonClick}
        >
          결과 보러 가기
        </StyledButton>
      </InfoPanel>

      {/* 달력 그리드 */}
      <CalendarGrid>
        {monthRange.map((monthDate, index) => (
          <CalendarContainer key={index}>
            <CalendarHeader>
              {monthDate.toLocaleString('ko-KR', { year: 'numeric', month: 'long' })}
            </CalendarHeader>
            <Calendar
              locale="ko-KR"
              calendarType="hebrew"
              minDate={minDate}
              maxDate={maxDate}
              tileClassName={(props) =>
                getTileClassName({ ...props, selectedDays, holidays })
              }
              onClickDay={handleDayClick}
              value={monthDate}
              tileDisabled={({ date, view }) =>
                view === 'month' && date.getMonth() !== monthDate.getMonth()
              }
              showNavigation={false}
            />
          </CalendarContainer>
        ))}
      </CalendarGrid>
    </Container>
  );
};

export default SelectForm;
