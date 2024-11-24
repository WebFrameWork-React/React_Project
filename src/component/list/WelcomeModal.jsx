import React from "react";
import { Modal, Paper, Typography, Button } from "@mui/material";
import Slider from "react-slick"; // react-slick 라이브러리 가져오기
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// 커스터마이징된 이전 버튼
const CustomPrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            onClick={onClick}
            style={{
                ...style,
                display: "block", // 확실히 보이도록 설정
                color: "blue", // 화살표 색상
                fontSize: "30px", // 화살표 크기
                zIndex: 1000, // 슬라이드 위에 표시되도록 설정
                position: "absolute", // 절대 위치
                left: "-80px", // 왼쪽 위치, 수치로 절대값 지정
                top: "50%", // 슬라이드 중앙에 위치
                transform: "translateY(-50%)", // 수직 중앙 정렬
                cursor: "pointer", // 클릭 가능하도록 설정
                padding: "10px", // 클릭 영역을 확대
            }}
        />
    );
};

// 커스터마이징된 다음 버튼
const CustomNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            onClick={onClick}
            style={{
                ...style,
                display: "block",
                color: "blue",
                fontSize: "30px",
                zIndex: 1000,
                position: "absolute",
                right: "-80px", 
                top: "50%", 
                transform: "translateY(-50%)",
                cursor: "pointer", 
                padding: "10px", 
            }}
        />
    );
};

function WelcomeModal({ open, onClose }) {
    const sliderSettings = {
        dots: true, // 슬라이드 하단에 점 표시
        infinite: true, // 무한 루프
        speed: 500, // 슬라이드 전환 속도
        slidesToShow: 1, // 한 번에 보여줄 슬라이드 수
        slidesToScroll: 1, // 한 번에 넘어가는 슬라이드 수
        autoplay: true, // 자동 재생
        autoplaySpeed: 3000, // 자동 재생 간격
        prevArrow: <CustomPrevArrow />, // 이전 버튼 적용
        nextArrow: <CustomNextArrow />, // 다음 버튼 적용
    };

    return (
        <Modal
            open={open}
            onClose={onClose}
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "rgba(0, 0, 0, 0.7)", // 어두운 배경
            }}
        >
            <Paper
                sx={{
                    padding: "32px",
                    maxWidth: "600px",
                    width: "90%",
                    textAlign: "center",
                    backgroundColor: "#ffffff",
                    borderRadius: "16px",
                    position: "relative", // 슬라이드 안의 화살표가 상대적으로 위치하도록 설정
                    overflow: "visible", // 화살표가 잘리지 않도록 설정
                }}
            >
                <Typography variant="h5" gutterBottom>
                    환영합니다!
                </Typography>
                <Typography variant="body1" gutterBottom>
                    이 페이지에서는 휴가 일정을 선택하고 관리할 수 있습니다.
                </Typography>

                {/* 슬라이드 컴포넌트 */}
                <Slider {...sliderSettings} style={{ margin: "20px 0" }}>
                    <div>
                        <img
                            src="/images/1.png"
                            alt="Step 1"
                            style={{ width: "100%", borderRadius: "16px" }}
                        />
                        <Typography variant="body2" mt={2}>
                            Step 1: 총 휴가일수와 시작일, 종료일을 선택하세요.
                        </Typography>
                    </div>
                    <div>
                        <img
                            src="/images/2.png"
                            alt="Step 2"
                            style={{ width: "100%", borderRadius: "16px" }}
                        />
                        <Typography variant="body2" mt={2}>
                            Step 2: 휴가 날짜를 마음대로 지정하세요.
                        </Typography>
                    </div>
                    <div>
                        <img
                            src="/images/3.png"
                            alt="Step 3"
                            style={{ width: "100%", borderRadius: "16px" }}
                        />
                        <Typography variant="body2" mt={2}>
                            Step 3: 결과 화면과 통계를 보여드립니다.
                        </Typography>
                    </div>
                    <div>
                        <img
                            src="/images/3.png"
                            alt="Step 4"
                            style={{ width: "100%", borderRadius: "16px" }}
                        />
                        <Typography variant="body2" mt={2}>
                            Step 4: 기간과 계절을 고려하여 여행지를 추천해드립니다.
                        </Typography>
                    </div>
                </Slider>

                <Button
                    variant="contained"
                    color="primary"
                    onClick={onClose}
                    sx={{
                        marginTop: "20px",
                        padding: "10px 20px",
                        borderRadius: "20px",
                        fontSize: "1rem",
                    }}
                >
                    시작하기
                </Button>
            </Paper>
        </Modal>
    );
}

export default WelcomeModal;
