import React from 'react';
import { useNavigate } from 'react-router-dom';

function BackButton() {
    const navigate = useNavigate();
    const styles = {
        button: {
            position: 'absolute',
            top: '20px',
            left: '20px',
            backgroundColor: '#3498db',
            color: '#ffffff',
            border: 'none',
            borderRadius: '8px',
            padding: '10px 20px',
            cursor: 'pointer',
            fontSize: '16px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        },
    };

    return (
        <button style={styles.button} onClick={() => navigate(-1)}>
            ←
        </button>
    );
}

export default BackButton;
