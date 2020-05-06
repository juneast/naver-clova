import React from 'react'
import './NavListItem.css'


const NavListItem = ({name, list}) => {
    const [hover, setHover] = React.useState(false);

    const innerList = list.map((item)=>(
        <span>{item}</span>
    ));
    return (
        <li className="NavListItem" onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>
            {name}
            <div className={`InnerList ${(hover &&list.length!==0)?'hover':''}`}>
                <div className="Inner__Wrapper">
                    {innerList}
                    
                </div>
            </div>
        </li>

    );
}


export default NavListItem;