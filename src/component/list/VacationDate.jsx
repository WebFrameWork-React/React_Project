import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';

function VacationDate({ date, usedDays, totalDays, onClick }) {
  const styles = {
    holiday: {
      backgroundColor: '#ffffff', // 카드 배경색
      borderRadius: '12px', // 카드 모서리 둥글게
      padding: '30px 20px', // 전체 여백
      display: 'flex',
      flexDirection: 'row', // 가로 방향 정렬
      alignItems: 'center', // 수직 중앙 정렬
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // 그림자 효과
      transition: 'transform 0.2s, box-shadow 0.2s', // Hover 애니메이션
      cursor: 'pointer', // 클릭 가능한 스타일
      marginBottom: '30px',
      width: '90%',
      boxSizing: 'border-box',
    },
    holidayHover: {
      transform: 'translateY(-5px)', // 위로 살짝 이동
      boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)', // Hover 시 그림자 강조
    },
    iconContainer: {
      display: 'flex',
      alignItems: 'center', // 아이콘 수직 중앙 정렬
      justifyContent: 'center', // 아이콘 가로 중앙 정렬
      width: '50px', // 아이콘 영역 너비
      height: '50px', // 아이콘 영역 높이
      marginRight: '15px', // 아이콘과 텍스트 간 간격
      backgroundColor: '#eaf4ff', // 배경색
      borderRadius: '8px', // 아이콘 배경 둥글게
    },
    icon: {
      fontSize: '20px',
      color: '#007BFF', // 아이콘 색상
    },
    textContainer: {
      display: 'flex',
      flexDirection: 'column', // 텍스트 상하 정렬
      justifyContent: 'space-between', // 텍스트 간격 조정
      flex: 1, // 텍스트 영역 넓히기
    },
    dateText: {
      margin: 0,
      fontSize: '25px',
      fontWeight: '700', // Bold 효과
      lineHeight: '1.5',
      color: '#2c3e50',
    },
    usedDaysText: {
      fontSize: '16px',
      color: '#34495e',
      margin: '5px 0 0', // 위쪽 간격만 추가
      fontWeight: '500', // 중간 Bold
    },
    totalDaysTextContainer: {
      display: 'flex',
      alignItems: 'center', // 수직 중앙 정렬
      justifyContent: 'flex-end', // 우측 정렬
      width: '100px', // 고정 너비
    },
    totalDaysText: {
      fontSize: '18px',
      fontWeight: '700',
      color: '#2c3e50',
    },
  };

  // Hover 상태 관리
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      style={{
        ...styles.holiday,
        ...(isHovered ? styles.holidayHover : {}),
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >

      {/* 아이콘 컨테이너 */}
      <div style={styles.iconContainer}>
        <FontAwesomeIcon icon={faCalendar} style={styles.icon} />
      </div>
      {/* 텍스트 컨테이너 */}
      <div style={styles.textContainer}>
        <p style={styles.dateText}>{date}</p>
        <p style={styles.usedDaysText}>휴가 {usedDays}일 사용</p>
      </div>
      {/* 우측 총 x일 텍스트 */}
      <div style={styles.totalDaysTextContainer}>
        {totalDays && <p style={styles.totalDaysText}>총 {totalDays}일</p>}
      </div>
    </div>
  );
}

export default VacationDate;
