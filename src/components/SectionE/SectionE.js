import React from 'react'
import './SectionE.css'
import Lottie from 'react-lottie'
import lottieAction from 'videos/lottie.json'

const SectionE = () => {
    const lottieOptions = {
        animationData: lottieAction,
        loop: true,
        autoplay: true,
        rendererSettings: {
            className: 'add-class', // svg에 적용
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    return (
        <div className="SectionE">
            <Lottie
                options={lottieOptions}
                style ={{height:"300px"}}
            />

            <div className="SectionE__text">
                <strong>With NAVER CLOVA</strong><br />
                <span>네이버 클로바가 제안하는 AI 솔루션을 통해 비즈니스의 새로운 성장과 발전을 경험하세요.</span>
                <div className="SectionE__detail">비즈니스 문의</div>
            </div>
        </div>

    );
}


export default SectionE;