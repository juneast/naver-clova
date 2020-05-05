import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className="Footer">
            <div className="Footer__Wrapper">
                <div className="upper">
                    <img src={require("icon/icon_logo.svg")} alt="" />
                    <div className="Footer__icon">
                        <img src={require("icon/icon_blog.svg")} alt="" />
                        <img src={require("icon/icon_facebook.svg")} alt="" />
                        <img src={require("icon/icon_instargram.svg")} alt="" />
                        <img src={require("icon/icon_youtube.svg")} alt="" />
                    </div>
                </div>
                <div className="down">
                    <div className="Footer__left">
                        <span>고객센터 1833-5387</span>
                        <span>09:00 ~ 18:00 (주말, 공휴일 휴무)</span>
                    </div>
                    <div className="Footer__middle">
                        Powered by <span>NAVER·LINE</span>
                    </div>
                    <div className="Footer__right">
                        <span>공지사항</span>
                        <span>이용약관</span>
                        <span>CLOVA 채용안내</span>
                        <span>CLOVA JP</span>
                    </div>

                </div>
            </div>

        </div>
    )

}

export default Footer;