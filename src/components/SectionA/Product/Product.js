import React from 'react'
import './Product.css'
const Product = ({title,body1,body2,Key}) => {
    return (
        <div className='Product'>
            <img src={require(`icon/icon_feature_${Key}.svg`)} alt=""/>
            <span className="title">{title}</span>
            <span>{body1}</span>
            <span>{body2}</span>
        </div>

    );
}


export default Product;