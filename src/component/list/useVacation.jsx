import { useState, useEffect } from 'react';

const useVacation = (initialVacationDays) => {
  const [vacationDaysLeft, setVacationDaysLeft] = useState(() => {
    const savedVacationDays = JSON.parse(sessionStorage.getItem('totalDays'));
    return savedVacationDays !== null ? savedVacationDays : initialVacationDays;
  });

  const [selectedDays, setSelectedDays] = useState(() => {
    return JSON.parse(sessionStorage.getItem('selectedDays')) || [];
  });

  const handleDateClick = (dateStr) => {
    if (selectedDays.includes(dateStr)) {
      const updatedDays = selectedDays.filter((day) => day !== dateStr);
      setSelectedDays(updatedDays);
      setVacationDaysLeft((prev) => prev + 1);

      // Update sessionStorage
      sessionStorage.setItem('selectedDays', JSON.stringify(updatedDays));
      sessionStorage.setItem('totalDays', vacationDaysLeft + 1);
    } else if (vacationDaysLeft > 0) {
      const updatedDays = [...selectedDays, dateStr];
      setSelectedDays(updatedDays);
      setVacationDaysLeft((prev) => prev - 1);

      // Update sessionStorage
      sessionStorage.setItem('selectedDays', JSON.stringify(updatedDays));
      sessionStorage.setItem('totalDays', vacationDaysLeft - 1);
    } else {
      alert('휴가 일수를 모두 소진했습니다!');
    }
  };

  // Sync state with sessionStorage on mount
  useEffect(() => {
    const savedVacationDays = JSON.parse(sessionStorage.getItem('totalDays'));
    const savedSelectedDays = JSON.parse(sessionStorage.getItem('selectedDays'));

    if (savedVacationDays !== null) {
      setVacationDaysLeft(savedVacationDays);
    }
    if (savedSelectedDays !== null) {
      setSelectedDays(savedSelectedDays);
    }
  }, []);

  return { vacationDaysLeft, selectedDays, handleDateClick };
};

export default useVacation;