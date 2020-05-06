import React from 'react'
import './MainView.css'

const MainView = () => {
    const [videoIndex, setVideoIndex] = React.useState(1);

 
    return(
        <div className="MainView">
        <div className="MainView__Wrapper">
        <video className="MainView__video"  src={require(`videos/header_video_${videoIndex}.mp4`)} autoPlay loop>
            </video>
            
            
            <div className="MainView__textWrapper">
                <strong className="MainView__description">완전히 새로워진 전화 응대 솔루션<br />클로바 AI 고객센터</strong>
                <div className="MainView__detail">자세히보기</div>
            </div>
            <div className="MainView__Btn">
                <div className={videoIndex===1 ? "selected":""} onClick={()=>setVideoIndex(1)}></div>
                <div className={videoIndex===2 ? "selected":""} onClick={()=>setVideoIndex(2)}></div>
                <div className={videoIndex===3 ? "selected":""} onClick={()=>setVideoIndex(3)}></div>
            </div>
        </div>


    </div>
    );

}

export default MainView;