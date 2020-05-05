import React from 'react'
import './SectionC.css'

const SectionC = () => {

    return (
        <div className="SectionC">
            <img src={require("icon/blog.png")} alt="" />
            <div className="SectionC__text">
                <strong>CLOVA Official Blog</strong><br/>
                <span>클로바 공식 블로그에서 다양한 소식을 확인해보세요</span>
                <div className="SectionC__detail">자세히보기</div>

            </div>
        </div>

    );
}


export default SectionC;