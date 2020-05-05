import React from 'react'
import './SectionB.css'

const SectionB = () => {

    return (
        <div className="SectionB">
            <div className="SectionB__Wrapper">
                <div className="first">
                    <h2>CLOVA AI <br />Special Feature</h2>
                    <p>네이버, 라인의 풍부한 데이터와 세계 최고 수준의 AI 기술이 만나 전에 없던 시너지를 창출합니다.</p>
                </div>
                <div>
                    <img src={require("icon/icon_special_1.svg")} alt="" />
                    <span>Customized Solution</span>
                    <p>
                        네이버, 라인의 서비스를 통해 축적된 데이터와 클로바의 자체 기술로
                        제작한 AI엔진을 활용하여, 개별 비즈니스의 니즈에 부합하는 Customized Solution을 제공합니다.
                    </p>
                </div>
                <div>
                    <img src={require("icon/icon_special_2.svg")} alt="" />
                    <span>Integrated AI Engine</span>
                    <p>
                        네이버 클로바에서 자체적으로 보유한 AI
                        기술을 복합적으로 활용한 솔루션을 개발
                        할 수 있습니다. 이를 통해 단일 기술을
                        활용한 경우보다 월등한 시너지를 만들어냅니다.
                    </p>
                </div>
            </div>
        </div>

    );
}


export default SectionB;