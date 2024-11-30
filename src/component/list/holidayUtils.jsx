export const getTileClassName = ({ date, view, selectedDays, holidays }) => {
    const dateStr = date.toLocaleDateString('ko-KR');
    if (view === 'month') {
      if (selectedDays.includes(dateStr)) {
        return 'selected';
      }
      if (holidays.includes(dateStr) || date.getDay() === 0 || date.getDay() === 6) {
        return 'holiday';
      }
    }
    return null;
  };
  
export const getMonthRange = ({ start, end }) => {
    const startDate = new Date(start);
    const endDate = new Date(end);
    const months = [];
    const date = new Date(startDate);

    date.setDate(1);
  
    while (date <= endDate) {
      months.push(new Date(date));
      date.setMonth(date.getMonth() + 1);
    }
  
    return months;
  };

// 공휴일 및 선택된 날짜를 기준으로 연속된 날짜를 그룹화하는 함수
export const groupConsecutiveDates = (selectedDates, holidays) => {
  // 선택된 날짜를 정렬
  const sortedSelectedDates = selectedDates.sort((a, b) => new Date(a) - new Date(b));
  
  // 공휴일과 주말을 기준으로 선택된 날짜와 연속되는 날짜를 확인
  const isHolidayOrWeekend = (date) => {
    const day = date.getDay();
    const dateStr = date.toLocaleDateString('ko-KR');
    return holidays.includes(dateStr) || day === 0 || day === 6; // 공휴일 또는 주말인지 확인
  };

  const extendedDates = new Set(selectedDates); // 중복 방지를 위해 Set 사용
  sortedSelectedDates.forEach((selectedDateStr) => {
    const currentDate = new Date(selectedDateStr);

    // 이전 날짜와 다음 날짜를 검사
    let prevDate = new Date(currentDate);
    let nextDate = new Date(currentDate);

    // 이전 날짜가 주말/공휴일이면 추가
    while (true) {
      prevDate.setDate(prevDate.getDate() - 1);
      if (isHolidayOrWeekend(prevDate) && !extendedDates.has(prevDate.toLocaleDateString('ko-KR'))) {
        extendedDates.add(prevDate.toLocaleDateString('ko-KR'));
      } else {
        break;
      }
    }

    // 다음 날짜가 주말/공휴일이면 추가
    while (true) {
      nextDate.setDate(nextDate.getDate() + 1);
      if (isHolidayOrWeekend(nextDate) && !extendedDates.has(nextDate.toLocaleDateString('ko-KR'))) {
        extendedDates.add(nextDate.toLocaleDateString('ko-KR'));
      } else {
        break;
      }
    }
  });

  // Set을 배열로 변환하여 정렬 후 연속된 날짜 그룹화
  const allDates = Array.from(extendedDates).sort((a, b) => new Date(a) - new Date(b));
  const groupedDates = [];
  let group = [];

  for (let i = 0; i < allDates.length; i++) {
    const currentDate = new Date(allDates[i]);
    const previousDate = new Date(allDates[i - 1]);

    if (i === 0 || currentDate - previousDate === 86400000) {
      group.push(allDates[i]);
    } else {
      groupedDates.push(group);
      group = [allDates[i]];
    }

    if (i === allDates.length - 1) {
      groupedDates.push(group);
    }
  }

  return groupedDates;
};
//결과 페이지서 쓰는 함수
export const calculateVacationSummary = (selectedDays, holidays) => {
  // selectedDays와 holidays를 기준으로 연속된 날짜 그룹화
  const groupedDates = groupConsecutiveDates(selectedDays, holidays);
  
  // 사용된 휴가 일수는 선택된 날짜의 개수
  const usedVacationDays = selectedDays.length;
  
  // 연휴 기간은 연속된 날짜 그룹을 이용하여 계산 (공휴일, 주말 포함)
  const totalVacationPeriods = groupedDates.map((group) => {
    const startDate = new Date(group[0]);
    const endDate = new Date(group[group.length - 1]);
    const totalDays = group.length;  // 연휴 기간은 연속된 날짜 수


    // 월별로 날짜 개수를 계산
    const monthCounts = group.reduce((counts, dateStr) => {
      const date = new Date(dateStr);
      const month = date.getMonth() + 1; // 0부터 시작하므로 +1
      counts[month] = (counts[month] || 0) + 1;
      return counts;
    }, {});

    // 가장 많은 날짜가 포함된 월 찾기
    const dominantMonth = Object.entries(monthCounts)
      .sort((a, b) => b[1] - a[1])[0][0]; // 날짜 개수 기준 내림차순 정렬 후 첫 번째 월 선택




    
    // 연휴 기간 내에서 사용된 휴가일만 계산
    const usedVacationDaysInGroup = group.filter(date => selectedDays.includes(date)).length;

    return {
      startDate: startDate.toLocaleDateString('ko-KR'),
      endDate: endDate.toLocaleDateString('ko-KR'),
      totalDays: totalDays, // 연휴 기간
      usedVacationDays: usedVacationDaysInGroup,// 사용된 휴가 일수
      months: [parseInt(dominantMonth,10)],
    };
  });

  // 총 연휴 기간 (연속된 날짜 그룹의 길이 합산)
  const totalDays = groupedDates.reduce((total, group) => total + group.length, 0);

  return {
    usedVacationDays,  // 전체 사용된 휴가 일수는 선택된 날짜의 수
    totalVacationPeriods,
    totalDays, // 연휴 기간 (전체 연속된 날짜 수)
  };
};