import React from 'react';
import { useSearchParams } from 'react-router-dom';
import DestinationCard from '../list/DestinationCard.js';
import '../ui/AdForm.css';
import monthlyDestinations from '../data/data.js';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function DesReco() {
  const [searchParams] = useSearchParams();
  const region = searchParams.get('region') || '국내';
  const selectedMonth = parseInt(searchParams.get('month')) || 1;

  const getDestinations = () => {
    const monthKey = region === "국내" ? selectedMonth : selectedMonth + 12;
    return monthlyDestinations[monthKey] || [];
  };

  const sliderSettings = {
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '60px',
  };

  return (
    <div className="app">
      {/* header로 제목 관리 */}
      <header className="header">
        <h2>{selectedMonth}월 {region} 추천 여행지</h2>
      </header>

      {/* 슬라이더 영역 */}
      <main className="slider-wrapper">
        <Slider {...sliderSettings}>
          {getDestinations().map((dest, index) => (
            <div key={index} className="slider-item">
              <DestinationCard
                title={dest.title}
                description={dest.description}
                image={dest.imageUrl}
                url={dest.url}
              />
            </div>
          ))}
        </Slider>
      </main>
    </div>
  );
}

export default DesReco;
