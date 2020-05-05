import React from 'react'
import './SectionD.css'

const SectionD = () => {

    return (
        <div className="SectionD">
            <strong>Latest News</strong>
            <span>좀더 편리하고 스마트한 삶을 위한 클로바의 다양한 AI적용사례 및 소식들을 확인해보세요.</span>
            <div className="SectionD__News">
                <div>
                    <img src={require("icon/news1.png")} alt="" />
                    <div className="textbox">
                    <span>클로바 케어콜 성남시에 시범 적용</span>
                    <p>
                        의료 분야의 전화상담 및 응대를 수행하는 AI
                        솔루션으로, 코로나19 능동감시자 대상에게
                        전화를 걸어 증상을 확인하고 결과를 보건소
                        에 전송합니다.
                    </p>
                    </div>
                    
                </div>
                <div>
                    <img src={require("icon/news2.png")} alt="" />
                    <div className="textbox">
                    <span>클로바더빙 무료 이용</span>
                    <p>
                        코로나19 확진자 급증에 따른 정보성 콘텐츠를 보다 편리하게 제작하실 수 있도록 기관 및 기업 그리고 개인에게 클로바더빙 사용을 무료로 지원합니다.
                    </p>
                    </div>
                    
                </div>
                <div>
                    <img src={require("icon/news3.png")} alt="" />
                    <div className="textbox">
                        <span>세계 최고 권위 학회 연구 성과</span>
                        <p>
                            컴퓨터 비전 분야 최고 학회 CVPR 2020에서 연구 논문 5개, 음성신호처리 분야 최고 학회 ICASSP 2020에서 연구 논문 7개가 채택됐습니다.
                        </p>
                    </div>
                </div>
            </div>
        </div>

    );
}


export default SectionD;