import React from 'react'
import './NavListItem.css'

const NavListItem = ({name}) => {

    return (
        <li className="NavListItem">
            {name}
        </li>

    );
}


export default NavListItem;