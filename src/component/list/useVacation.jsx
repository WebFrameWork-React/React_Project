import { useState } from 'react';

const useVacation = (initialVacationDays) => {
  const [vacationDaysLeft, setVacationDaysLeft] = useState(initialVacationDays);
  const [selectedDays, setSelectedDays] = useState([]);

  const handleDateClick = (dateStr) => {
    if (selectedDays.includes(dateStr)) {
      setSelectedDays(selectedDays.filter((day) => day !== dateStr));
      setVacationDaysLeft(vacationDaysLeft + 1);
    } else if (vacationDaysLeft > 0) {
      setSelectedDays([...selectedDays, dateStr]);
      setVacationDaysLeft(vacationDaysLeft - 1);
    }
  };

  return { vacationDaysLeft, selectedDays, handleDateClick };
};

export default useVacation;