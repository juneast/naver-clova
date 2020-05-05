import React from 'react'
import './NavList.css'
import NavListItem from './NavListItem/NavListItem'

const NavList = () => {
    const Items = ["기술·솔루션", "제품", "플랫폼", "파트너", "리서치"];
    const ListItem = Items.map((item, index) => (
        <NavListItem
            key={index}
            name={item} />
    ));
    return (
        <ol className="NavList">
            {ListItem}
        </ol>

    );
}


export default NavList;