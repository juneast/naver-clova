import React from 'react'
import './MainView.css'
import videoSrc from '../../../videos/header_video_1.mp4'

const MainView = () => (
    <div className="MainView">
        <div className="MainView__Wrapper">
            <video className="MainView__video" src={videoSrc} autoPlay loop>
            </video>
            <div className="MainView__textWrapper">
            <strong className="MainView__description">완전히 새로워진 전화 응대 솔루션<br/>클로바 AI 고객센터</strong>
            <div className="MainView__detail">자세히보기</div>            
            </div>
        </div>


    </div>
);

export default MainView;