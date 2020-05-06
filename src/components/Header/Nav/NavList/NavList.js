import React from 'react'
import './NavList.css'
import NavListItem from './NavListItem/NavListItem'

const NavList = () => {
    const Items = [{
        name : "기술·솔루션",
        list : []
    },{
        name : "제품",
        list : ["네이버 클로바 앱", "스마트 디바이스", "클로바 스마트홈", "지원 기기", "명령어 가이드", "스킬 스토어", "클로바 & 일상들"]
    },{
        name : "플랫폼",
        list : ["Platform", "Skill Tools", "Interface Connect", "Skills"]
    },{
        name : "파트너",
        list : []
    },{
        name : "리서치",
        list : ["Research Areas","Tech Demo", "Publications", "Blog", "Events", "Join Us"]
    }]
    const ListItem = Items.map((item, index) => (
        <NavListItem
            key={index}
            name={item.name}
            list ={item.list} />
    ));
    return (
        <ol className="NavList">
            {ListItem}
        </ol>

    );
}


export default NavList;