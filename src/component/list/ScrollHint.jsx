// ScrollHint.jsx
import React from 'react';

const ScrollHint = ({ isLastSection }) => {
  return (
    <div style={{
      marginTop: '80px',
      textAlign: 'center',
    }}>
      {!isLastSection ? (
        <>
          <div style={{
            fontSize: '24px',
            fontWeight: 'bold',
            marginBottom: '5px',
            color: '#333',
            animation: 'blink 1.3s infinite'
          }}>
            아래로 스크롤
          </div>
          <div style={{
            fontSize: '24px',
            marginTop: '0px',
            animation: 'blink 1.3s infinite'
          }}>
            ↓
          </div>
          <style jsx>{`
            @keyframes blink {
              0% { opacity: 1; }
              50% { opacity: 0; }
              100% { opacity: 1; }
            }
          `}</style>
        </>
      ) : (
        <div style={{
          fontSize: '24px',
          fontWeight: 'bold',
          color: '#333',
          marginBottom: '20px',
        }}>
          휴가 입력하러 가기 버튼 클릭!
        </div>
      )}
    </div>
  );
};

export default ScrollHint;