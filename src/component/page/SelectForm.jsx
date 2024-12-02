import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../ui/SelectForm.css';
import useVacation from '../list/useVacation';
import { getTileClassName, getMonthRange, groupConsecutiveDates } from '../list/holidayUtils';
import holidays from '../list/HolidayList';
import { useNavigate } from 'react-router-dom';
import { FaCalendarCheck, FaUmbrellaBeach } from 'react-icons/fa';
import BackButton from '../list/BackButton';

const SelectForm = ({ dateRange, totalDays }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
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
      setStartDate(dateRange[0]);
      setEndDate(dateRange[1]);
      const months = getMonthRange({ start: dateRange[0], end: dateRange[1] });
      setMonthRange(months); // monthRange 업데이트
    }
  }, [dateRange]);

  const minDate = startDate ? new Date(startDate) : new Date();
  const maxDate = endDate ? new Date(endDate) : null;

  // 선택된 날짜를 클릭할 때 sessionStorage에 저장
  const handleDayClick = (date) => {

    const formattedDate = date.toLocaleDateString("ko-KR");

  // 이미 선택된 날짜를 클릭한 경우 (선택 해제)
  if (selectedDays.includes(formattedDate)) {
    handleDateClick(formattedDate); // 선택 해제
    return;
  }

  // 휴가 일수가 0일인 경우 (새로운 날짜 선택 방지)
  if (vacationDaysLeft <= 0) {
    alert("휴가 일수를 모두 소진했습니다!");
    return;
  }

  // 새로운 날짜 선택
  handleDateClick(formattedDate);
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
    <div className="container">
      <header className="header-container">
        <BackButton />
        <style>
          {`
            button {
                top: auto !important;
            }
          `}
        </style>
        <h1>
          <FaUmbrellaBeach style={{ marginRight: '8px', color: '#007bff' }} />　휴가 정보를 입력하세요　
          <FaUmbrellaBeach style={{ marginRight: '8px', color: '#007bff' }} />
        </h1>
      </header>
      <div className="info-panel">
        <h2>
          <FaUmbrellaBeach style={{ marginRight: '8px', color: '#007bff' }} />
          휴가 정보
        </h2>
        <h2 className="leftdays">
          <FaCalendarCheck style={{ marginRight: '5px', color: '#f39c12' }} />
          남은 휴가 일수 :
          <span className="vacation-days-block">{vacationDaysLeft}일</span>
        </h2>
        <h2 className="selecteddays">선택된 휴가 날짜:</h2>
        <div className="date-list">
          {groupConsecutiveDates(selectedDays, holidays).map((group, idx) => (
            <span className="date-block" key={idx}>{`${group[0]} ~ ${group[group.length - 1]}`}</span>
          ))}
        </div>
        <button className="styled-button" onClick={handleResultButtonClick}>
          결과 보러 가기
        </button>
        <div>　</div>
        <div className="wise-saying">
          "휴식은 일의 절반이다."<br />-Leonardo da Vinci-
        </div>
      </div>
      <div className="calendar-grid">
        {monthRange.map((monthDate, index) => (
          <div className="calendar-container" key={index}>
            <div className="calendar-header">
              {monthDate.toLocaleString('ko-KR', { year: 'numeric', month: 'long' })}
            </div>
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectForm;
