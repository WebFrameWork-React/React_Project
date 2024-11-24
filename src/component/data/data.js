const monthlyDestinations = {
    1: [
        { title: '강원도 화천군', description: '대한민국 대표 겨울 축제가 열리는 얼음 나라 화천' },
        { title: '충청남도 청양군', description: '완벽한 겨울을 즐기는 칠갑산 얼음분수 축제' },
        { title: '충청남도 예산군', description: '일출명소인 예당호에서 맞이하는 새해 첫 날' },
        { title: '경기도 이천시', description: '긴 겨울밤을 따뜻하고 반짝이게 보낼 수 있는 여행지 이천' },
        { title: '강원도 인제군', description: '얼음 위에서 즐기는 겨울 낚시 축제' },
        { title: '전라북도 무주군', description: '스키 천국 무주로 떠나는 낭만적인 겨울 여행' }
    ],
    2: [
        { title: '경상북도 성주군', description: '즐길 거리가 가득한 경북 성주의 힐링 스폿들' },
        { title: '충청남도 논산시', description: '역사적 명소부터 드라마 촬영지까지 알차게 즐기는 논산' },
        { title: '전라남도 광양시', description: '광양 은빛 설경 속으로 떠나는 감성충전 낭만여행' },
        { title: '충청남도 홍성군', description: '새조개 먹으러 홍성 남당항으로' },
        { title: '전라남도 구례군', description: '다채로운 체험거리가 가득한 감성 플레이스' },
        { title: '경상남도 진해구', description: '겨울 낭만 가득한 창원 진해로' }
    ],
    3: [
        { title: '경상남도 진해구', description: '화사한 벚꽃의 향연, 진해군항제' },
        { title: '충청남도 서산시', description: '보물 같은 사찰들이 가득한 충청남도 서산으로의 힐링 여행' },
        { title: '전라남도 구례군', description: '봄기운 가득한 3월에 열리는 봄꽃 축제' },
        { title: '충청북도 진천군', description: '봄꽃 향기 가득한 진천으로의 힐링 여행' },
        { title: '충청남도 서천군', description: '동백꽃에 취하고 주꾸미에 반하다' },
        { title: '충청남도 당진시', description: '따뜻한 봄날에 떠나는 당일치기 감성충전 여행' }
    ],
    4: [
        { title: '경상북도 경산시', description: '우리나라 역사 문화 탐방 & 인생 샷 명소' },
        { title: '전라북도 고창군', description: '보리밭 사이를 걸으며 느끼는 봄날의 서정적인 정취' },
        { title: '경기도 의정부시', description: '의정부 시민들의 휴식처가 되어주는 이곳저곳' },
        { title: '전라남도 보성군', description: '푸른 녹차 밭 물결 따라 향긋한 봄 내음 가득한 보성' },
        { title: '경기도 안성시', description: '꽃길 따라 이어지는 봄날 최고의 여행지 안성' },
        { title: '경기도 남양주시', description: '따스한 봄날에 떠나는 당일치기 최적의 여행지 남양주!' }
    ],
    5: [
        { title: '경상남도 함안군', description: '물 위에 쏟아지는 불꽃의 향연, 함안 무진정 낙화놀이' },
        { title: '전라남도 곡성군', description: '장미 명소 곡성 세계장미축제로 놀러 오세요' },
        { title: '경기도 오산시', description: '자연의 향연 속으로 떠나는 감성 충전 오산 여행' },
        { title: '경상남도 창원시', description: '생태공원과 드라마 세트장 등 다양한 명소' },
        { title: '충청북도 증평군', description: '동심이 파릇파릇! 아이와 함께 여행하기 좋은 곳' },
        { title: '경상북도 영천시', description: '경북 영천으로의 낭만 가득 봄맞이 여행' }
    ],
    6: [
        { title: '전라남도 장성군', description: '도시를 떠나 자연 속에서 힐링할 수 있는 곳' },
        { title: '경상북도 구미시', description: '자연과 역사를 함께 만나는 경북 구미 여행' },
        { title: '전라남도 신안군', description: '쨍한 여름 색으로 물드는 신안 1004의 섬' },
        { title: '전라남도 완도군', description: '청정자연 속에 숨은 매력적인 섬 완도로 떠나는 힐링 여행' },
        { title: '경상남도 밀양시', description: '여름이면 더 매력적인 밀양의 명소들!' },
        { title: '경기도 화성시', description: '바람 따라 발길 따라 떠나는 바닷가 당일치기 여행지' }
    ],
    7: [
        { title: '전라남도 장흥군', description: '무더위 한방에 날릴 정남진 장흥 물 축제' },
        { title: '강원도 횡성군', description: '무더위 날려버리는 짜릿한 레포츠의 천국 횡성' },
        { title: '강원도 양양군', description: '태양보다 더 뜨거운 서핑 도시로 떠나는 여름' },
        { title: '경상북도 예천군', description: '예천으로의 시원한 여름 바캉스' },
        { title: '강원도 태백시', description: '태백에서 시원하게 즐기는 여름 축제' },
        { title: '전라남도 해남군', description: '해남만의 특별한 여름 속으로 빠져들어보자!' }
    ],
    8: [
        { title: '전라북도 진안군', description: '한여름에도 얼음 바람이 부는 시원한 계곡에서의 피서' },
        { title: '경상남도 마산합포구', description: '알고 보면 더 매력적인 곳, 마산으로' },
        { title: '충청북도 영동군', description: '전국 최대 포도 주산지 영동에서의 축제 체험' },
        { title: '경기도 분당구', description: '다양한 여름을 즐길 수 있는 도심 속 피서지!' },
        { title: '전라북도 순창군', description: '아름다운 자연경관과 건강한 먹거리가 가득한 곳' },
        { title: '경상남도 고성군', description: '신비롭고 아름다운 고성의 여름 속으로' }
    ],
    9: [
        { title: '전라남도 영광군', description: '붉은 꽃무릇의 향연, 영광 불갑사 상사화 축제' },
        { title: '전라남도 함평군', description: '붉은 물결 함평, 모악산 꽃무릇 축제' },
        { title: '경기도 하남시', description: '가족부터 연인까지 모두가 만족하는 서울 근교 가을 맛집' },
        { title: '경기도 연천군', description: '체험학습부터 데이트까지 모두 가능한 가을의 연천' },
        { title: '경기도 양주시', description: '다채로운 가을의 풍경이 아름답게 물드는 양주' },
        { title: '충청남도 홍성군', description: '가을 별미 대하 맛보러 홍성 오세요' }
    ],
    10: [
        { title: '충청북도 괴산군', description: '괴산군 레저스포츠 페스티벌 체험해보세요' },
        { title: '경상남도 의령군', description: '공원과 자전거길에서 만나는 가을의 향내' },
        { title: '충청북도 보은군', description: '대추처럼 달콤한 축제가 열리는 보은으로' },
        { title: '경상북도 영주시', description: '역사가 살아 숨 쉬는 영주로의 가을 힐링 여행' },
        { title: '전라북도 정읍시', description: '가을 정취 물씬! 정읍으로 떠나는 구절초 꽃축제' },
        { title: '울산광역시 울주군', description: '메밀꽃 필 무렵, 영남알프스 숲페스타' }
    ],
    11: [
        { title: '경상북도 청도군', description: '아름다운 빛 축제가 열리는 로맨틱한 하루' },
        { title: '경상북도 청송군', description: '볼거리와 즐길거리가 풍부한 청송 사과축제' },
        { title: '경기도 이천시', description: '진짜 가을을 느끼고 싶다면 방문해야 할 이곳' },
        { title: '강원도 인제군', description: '신비로운 단풍 아래 인제에서 잊지 못할 추억 여행' },
        { title: '경상남도 창녕군', description: '태고의 자연과 역사가 공존하는 창녕으로 떠나요' },
        { title: '전라북도 무주군', description: '낭만적인 전북 무주로 떠나는 가을 여행' }
    ],
    12: [
        { title: '강원도 인제군', description: '새하얀 눈 빛 자작나무 숲과 겨울로 통하는 비밀정원' },
        { title: '전라북도 무주군', description: '겨울방학에 아이들과 함께 즐길 수 있는 축제' },
        { title: '충청남도 청양군', description: '즐길거리가 다양한 청양군으로의 겨울 여행' },
        { title: '경기도 이천시', description: '긴 겨울밤을 따뜻하고 반짝이게 보낼 수 있는 여행지 이천' },
        { title: '경상북도 영덕군', description: '여권 없이 떠나는 이국적인 국내 휴양지' },
        { title: '경상북도 청송군', description: '신선들이 사는 무릉도원 같은 청송'}
    ],
    13: [
        { title: "치앙마이", description: "태국 북부의 고요한 도시", imageUrl: "/images/chiangmai.jpg" },
        { title: "방콕", description: "현대와 전통이 어우러진 태국의 수도", imageUrl: "/images/bangkok.jpg" },
        { title: "도쿄", description: "일본의 수도, 매력적인 대도시", imageUrl: "/images/tokyo.jpg" },
        { title: "다낭", description: "베트남의 아름다운 해변 도시", imageUrl: "/images/danang.jpg" },
        { title: "하노이", description: "베트남의 수도, 고풍스러운 분위기", imageUrl: "/images/hanoi.jpg" },
        { title: "홍콩", description: "아시아의 금융 중심지, 활기찬 도시", imageUrl: "/images/hongkong.jpg" }
    ],
    14: [
        { title: "파리", description: "프랑스의 낭만적인 도시", imageUrl: "/images/paris.jpg" },
        { title: "로마", description: "고대 유적지로 가득한 이탈리아의 수도", imageUrl: "/images/rome.jpg" },
        { title: "발리", description: "인도네시아의 천국 같은 섬", imageUrl: "/images/bali.jpg" },
        { title: "싱가포르", description: "다양한 문화가 공존하는 도시 국가", imageUrl: "/images/singapore.jpg" },
        { title: "마드리드", description: "스페인의 활기찬 수도", imageUrl: "/images/madrid.jpg" },
        { title: "케이프타운", description: "남아프리카 공화국의 아름다운 해안 도시", imageUrl: "/images/capetown.jpg" }
    ],
    15: [
        { title: "시드니", description: "오페라 하우스로 유명한 호주의 대표 도시", imageUrl: "/images/sydney.jpg" },
        { title: "골드코스트", description: "호주의 유명 해변 도시", imageUrl: "/images/goldcoast.jpg" },
        { title: "뉴욕", description: "미국의 대도시, 다양한 볼거리와 즐길거리", imageUrl: "/images/newyork.jpg" },
        { title: "샌프란시스코", description: "미국 캘리포니아의 문화 도시", imageUrl: "/images/sanfrancisco.jpg" },
        { title: "밴쿠버", description: "캐나다의 자연과 도시가 공존하는 곳", imageUrl: "/images/vancouver.jpg" },
        { title: "멜버른", description: "예술과 커피의 도시, 호주의 대표 도시", imageUrl: "/images/melbourne.jpg" }
    ],
    16: [
        { title: "교토", description: "일본의 전통적인 아름다움이 살아있는 도시", imageUrl: "/images/kyoto.jpg" },
        { title: "나하", description: "일본 오키나와의 중심 도시", imageUrl: "/images/naha.jpg" },
        { title: "오사카", description: "미식과 오락으로 유명한 일본의 도시", imageUrl: "/images/osaka.jpg" },
        { title: "베를린", description: "독일의 역사적인 수도", imageUrl: "/images/berlin.jpg" },
        { title: "프라하", description: "체코의 아름다운 고도", imageUrl: "/images/prague.jpg" },
        { title: "이스탄불", description: "동양과 서양이 만나는 터키의 대도시", imageUrl: "/images/istanbul.jpg" }
    ],
    17: [
        { title: "바르셀로나", description: "스페인의 예술적 도시", imageUrl: "/images/barcelona.jpg" },
        { title: "피렌체", description: "이탈리아의 예술과 문화의 중심지", imageUrl: "/images/florence.jpg" },
        { title: "리스본", description: "포르투갈의 언덕이 많은 매력적인 도시", imageUrl: "/images/lisbon.jpg" },
        { title: "부다페스트", description: "헝가리의 수도, 다뉴브 강이 흐르는 곳", imageUrl: "/images/budapest.jpg" },
        { title: "암스테르담", description: "네덜란드의 자유로운 도시", imageUrl: "/images/amsterdam.jpg" },
        { title: "발리", description: "인도네시아의 천국 같은 섬", imageUrl: "/images/bali.jpg" }
    ],
    18: [
        { title: "시드니", description: "호주의 매력적인 해안 도시", imageUrl: "/images/sydney.jpg" },
        { title: "골드코스트", description: "아름다운 해변과 서핑 명소", imageUrl: "/images/goldcoast.jpg" },
        { title: "브리즈번", description: "호주의 태양의 도시", imageUrl: "/images/brisbane.jpg" },
        { title: "방콕", description: "태국의 수도이자 관광 명소", imageUrl: "/images/bangkok.jpg" },
        { title: "하와이", description: "미국의 휴양지, 따뜻한 날씨와 해변", imageUrl: "/images/hawaii.jpg" },
        { title: "괌", description: "미국의 남태평양 휴양지", imageUrl: "/images/guam.jpg" }
    ],
    19: [
        { title: "파리", description: "프랑스의 낭만적인 도시", imageUrl: "/images/paris.jpg" },
        { title: "로마", description: "이탈리아의 역사적인 수도", imageUrl: "/images/rome.jpg" },
        { title: "마르세유", description: "프랑스의 해안 도시", imageUrl: "/images/marseille.jpg" },
        { title: "나폴리", description: "이탈리아의 아름다운 항구 도시", imageUrl: "/images/naples.jpg" },
        { title: "니스", description: "프랑스의 코트 다쥐르 해변 도시", imageUrl: "/images/nice.jpg" },
        { title: "바르셀로나", description: "스페인의 예술과 건축의 도시", imageUrl: "/images/barcelona.jpg" }
    ],
    20: [
        { title: "런던", description: "영국의 수도, 역사와 현대가 공존하는 도시", imageUrl: "/images/london.jpg" },
        { title: "에든버러", description: "스코틀랜드의 수도", imageUrl: "/images/edinburgh.jpg" },
        { title: "더블린", description: "아일랜드의 활기찬 도시", imageUrl: "/images/dublin.jpg" },
        { title: "암스테르담", description: "네덜란드의 자유로운 도시", imageUrl: "/images/amsterdam.jpg" },
        { title: "코펜하겐", description: "덴마크의 수도, 아름다운 항구 도시", imageUrl: "/images/copenhagen.jpg" },
        { title: "헬싱키", description: "핀란드의 수도", imageUrl: "/images/helsinki.jpg" }
    ],
    21: [
        { title: "시애틀", description: "미국의 비 내리는 도시", imageUrl: "/images/seattle.jpg" },
        { title: "벤쿠버", description: "캐나다의 자연이 아름다운 도시", imageUrl: "/images/vancouver.jpg" },
        { title: "상하이", description: "중국의 경제 중심지", imageUrl: "/images/shanghai.jpg" },
        { title: "도쿄", description: "일본의 수도, 현대적인 대도시", imageUrl: "/images/tokyo.jpg" },
        { title: "홍콩", description: "아시아의 금융 중심지", imageUrl: "/images/hongkong.jpg" },
        { title: "싱가포르", description: "아시아의 허브 도시", imageUrl: "/images/singapore.jpg" }
    ],
    22: [
        { title: "로마", description: "이탈리아의 역사적인 수도", imageUrl: "/images/rome.jpg" },
        { title: "피렌체", description: "르네상스의 중심지", imageUrl: "/images/florence.jpg" },
        { title: "이스탄불", description: "터키의 동서양이 만나는 도시", imageUrl: "/images/istanbul.jpg" },
        { title: "프라하", description: "체코의 고풍스러운 도시", imageUrl: "/images/prague.jpg" },
        { title: "부다페스트", description: "헝가리의 다뉴브 강이 흐르는 도시", imageUrl: "/images/budapest.jpg" },
        { title: "베를린", description: "독일의 역사와 문화가 살아있는 도시", imageUrl: "/images/berlin.jpg" }
    ],
    23: [
        { title: "하와이", description: "미국의 아름다운 섬", imageUrl: "/images/hawaii.jpg" },
        { title: "마우이", description: "하와이의 낙원 같은 섬", imageUrl: "/images/maui.jpg" },
        { title: "오키나와", description: "일본의 아름다운 해변과 전통이 어우러진 섬", imageUrl: "/images/okinawa.jpg" },
        { title: "괌", description: "미국의 휴양지 섬", imageUrl: "/images/guam.jpg" },
        { title: "사이판", description: "남태평양의 미국령 휴양지", imageUrl: "/images/saipan.jpg" },
        { title: "세부", description: "필리핀의 아름다운 해양 휴양지", imageUrl: "/images/cebu.jpg" }
    ],
    24: [
        { title: "뉴욕", description: "미국의 크리스마스 분위기가 느껴지는 도시", imageUrl: "/images/newyork.jpg" },
        { title: "파리", description: "프랑스의 로맨틱한 크리스마스", imageUrl: "/images/paris.jpg" },
        { title: "프라하", description: "체코의 겨울이 아름다운 도시", imageUrl: "/images/prague.jpg" },
        { title: "로마", description: "이탈리아의 유서 깊은 도시", imageUrl: "/images/rome.jpg" },
        { title: "빈", description: "오스트리아의 크리스마스 마켓이 유명한 도시", imageUrl: "/images/vienna.jpg" },
        { title: "뮌헨", description: "독일의 전통적인 크리스마스 마켓이 열리는 도시", imageUrl: "/images/munich.jpg" }
    ]
};


Object.entries(monthlyDestinations).forEach(([month, destinationList]) => {
    destinationList.forEach((destination, index) => {
        if (parseInt(month) >= 1 && parseInt(month) <= 12) {
            destination.imageUrl = `/images/${month}-${index + 1}.jpg`;
            destination.url = `https://www.yanolja.com/search/${encodeURIComponent(destination.title)}`;
        }
        else {
            destination.url = `https://www.yanolja.com/global/search/${encodeURIComponent(destination.title)}`;
        }
    });
});

export default monthlyDestinations;