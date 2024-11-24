import React, { useState } from 'react';

function AdCard({ imageSrc, description, recommendation, onClickUrl, month }) {
    const [isHovered, setIsHovered] = useState(false); // Hover 상태 관리

    const styles = {
        card: {
            backgroundColor: '#ffffff',
            borderRadius: '12px',
            boxShadow: isHovered ? '0 8px 15px rgba(0, 0, 0, 0.2)' : '0 4px 6px rgba(0, 0, 0, 0.1)',
            overflow: 'hidden',
            transition: 'transform 0.3s, box-shadow 0.3s',
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            padding: '15px',
            marginBottom: '15px',
            width: '90%',
            boxSizing: 'border-box',
            textDecoration: 'none',
            color: 'inherit',
            transform: isHovered ? 'translateY(-10px)' : 'none',
        },
        imageContainer: {
            width: '60px',
            height: '60px',
            marginRight: '15px',
            borderRadius: '8px',
            overflow: 'hidden',
            backgroundColor: '#f0f0f0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        image: {
            maxWidth: '100%',
            maxHeight: '100%',
        },
        textContainer: {
            display: 'flex',
            flexDirection: 'column',
            paddingLeft: '20px',
            textAlign: 'left',
            alignItems: 'flex-start',
        },
        description: {
            fontSize: '16px',
            fontWeight: 'bold',
            color: '#2c3e50',
            marginBottom: '5px',
        },
        recommendation: {
            fontSize: '14px',
            color: '#7f8c8d',
        },
        month: {
            fontSize: '12px',
            color: '#95a5a6',
            marginTop: '8px',
        },
    };

    return (
        <a
            href={onClickUrl}
            style={styles.card}
            onMouseEnter={() => setIsHovered(true)} // Hover 시작
            onMouseLeave={() => setIsHovered(false)} // Hover 종료
        >
            <div style={styles.imageContainer}>
                {imageSrc ? <img src={imageSrc} alt={description} style={styles.image} /> : '이미지 없음'}
            </div>
            <div style={styles.textContainer}>
                <p style={styles.description}>{description}</p>
                <p style={styles.recommendation}>{recommendation}</p>
                {month && <p style={styles.month}>추천 월: {month}월</p>}
            </div>
        </a>
    );
}

export default AdCard;
