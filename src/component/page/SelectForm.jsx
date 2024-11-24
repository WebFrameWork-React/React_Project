import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../ui/SelectForm.css';
import useVacation from '../list/useVacation';
import { getTileClassName, getMonthRange, groupConsecutiveDates } from '../list/holidayUtils';
import holidays from '../list/HolidayList';
import { useNavigate } from 'react-router-dom';

//다음 화면에 넘겨줘야 할 상태변수 : 총 사용한 휴가일수, 연속되어 정해진 쉬는날들 (공휴일+휴가사용) => totalDays(App.js에 존재), 
const SelectForm = ({ dateRange, totalDays }) => {
  //dateRange값을 받아서 시작 날짜 세팅
  const [startDate, setStartDate] = useState(null);
  //dateRange값을 받아서 종료 날짜 세팅
  const [endDate, setEndDate] = useState(null);
  const { vacationDaysLeft, selectedDays, handleDateClick } = useVacation(totalDays);
  const [monthRange, setMonthRange] = useState([]);
  const navigate = useNavigate();

  // dateRange 값이 변경될 때마다 시작 날짜와 종료 날짜 업데이트
  useEffect(() => {
    if (dateRange?.[0] && dateRange?.[1]) {
      setStartDate(dateRange[0]);
      setEndDate(dateRange[1]);

      const months = getMonthRange({ start: dateRange[0], end: dateRange[1] });
      setMonthRange(months);  // monthRange 업데이트
    }
  }, [dateRange]);

  // 휴가 선택 가능 날짜 범위 설정 (시작 날짜 입력X => 현재 날짜로 설정)
  const minDate = startDate ? new Date(startDate) : new Date();
  const maxDate = endDate ? new Date(endDate) : null;

  return (
    <div>
      <h2>휴가 설정</h2>
      <p>남은 휴가 일수: {vacationDaysLeft}</p>

      {monthRange.map((monthDate, index) => (
        <div key={index} className="calendar-container">
          <h3>{monthDate.toLocaleString('ko-KR', { year: 'numeric', month: 'long' })}</h3>
          <Calendar
            locale="ko-KR"
            calendarType="hebrew"
            minDate={minDate}
            maxDate={maxDate}
            tileClassName={(props) => getTileClassName({ ...props, selectedDays, holidays })}
            onClickDay={(date) => handleDateClick(date.toLocaleDateString('ko-KR'))}
            value={monthDate}
          />
        </div>
      ))}

      <h3>선택된 휴가 날짜:</h3>
      <ul>
        {groupConsecutiveDates(selectedDays, holidays).map((group, idx) => (
          <li key={idx}>{`${group[0]} ~ ${group[group.length - 1]}`}</li>
        ))}
      </ul>
      <button
        className="result-button"
        onClick={() => 
        navigate('/result', { state: { selectedDays, holidays } })
        }
      >
        결과 보러 가기
      </button>
    </div>
  );
};

export default SelectForm;
