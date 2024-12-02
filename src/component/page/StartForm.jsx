import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import ScrollSection from '../list/ScrollSection';

const sections = [
  {
    title: '나만의 휴가 일정 계획하기',
    description: '자신만의 휴가를 입력하고 확인하세요',
    images: ['/images/1.gif', '/images/2.gif'],
  },
  {
    title: '휴가 정보를 입력하세요',
    description: '총 휴가일수, 시작과 종료 날짜를 입력하세요',
    image: '/images/1.png',
  },
  {
    title: '휴가를 지정할 날짜를 선택하세요',
    description: '날짜를 클릭해서 휴가를 사용하세요',
    image: '/images/2.png',
  },
  {
    title: '지정된 휴가 기간을 확인해보세요',
    description: '선택한 연휴 기간을 모아서 보여드려요',
    image: '/images/3.png',
  },
  {
    title: '추천된 여행지를 확인해보세요',
    description: '국내/해외 추천 여행지를 보여드립니다',
    image: '/images/4.png',
  },
];

const StartForm = () => {
  const scrollRef = useRef(null);
  const navigate = useNavigate();

  const handleNextClick = () => {
    navigate('/input');
  };

  return (
    <div style={{
      height: '100vh',
      overflow: 'hidden',
      scrollSnapType: 'y mandatory',
      display: 'flex',
    }}>
      <div ref={scrollRef} style={{ flex: 1, overflowY: 'scroll', scrollSnapType: 'y mandatory' }}>
        {sections.map((section, index) => (
          <ScrollSection
            key={index}
            title={section.title}
            description={section.description}
            images={section.images || [section.image]} // images가 배열이어야 함
            isLastSection={index === sections.length - 1}
          />
        ))}
      </div>
      {/* 고정 버튼 */}
      <button
        style={{
          position: 'fixed',
          bottom: '50px',
          right: '150px',
          padding: '10px 30px',
          fontSize: '18px',
          backgroundColor: '#1478CD',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontFamily: 'Noto Sans, sans-serif',
          fontWeight: 'bold',
        }}
        onClick={handleNextClick}
      >
        휴가 입력하러 가기
      </button>
    </div>
  );
};

export default StartForm;
