import React from 'react';
import { useSearchParams } from 'react-router-dom';
import DestinationCard from '../list/DestinationCard.js';
import '../ui/AdForm.css';
import monthlyDestinations from '../data/data.js';

function DesReco() {
    const [searchParams] = useSearchParams();
    const region = searchParams.get('region') || '국내';
    const selectedMonth = parseInt(searchParams.get('month')) || 1;

    const getDestinations = () => {
        const monthKey = region === "국내" ? selectedMonth : selectedMonth + 12;
        return monthlyDestinations[monthKey] || [];
    };

    return (
        <div className="app">
            <h2>{selectedMonth}월 {region} 추천 여행지</h2>

            <div className="destination-grid">
                {getDestinations().map((dest, index) => (
                    <DestinationCard
                        key={index}
                        title={dest.title}
                        description={dest.description}
                        image={dest.imageUrl}
                        url={dest.url}
                    />
                ))}
            </div>
        </div>
    );

    

}

export default DesReco;
