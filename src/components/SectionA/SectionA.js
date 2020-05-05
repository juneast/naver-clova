import React from 'react'
import './SectionA.css'
import Product from './Product/Product'

const SectionA = () => {
    const products=[{
        title : 'Device & Service',
        body1 : '스마트 디바이스, 서비스로',
        body2 : '더욱 편리한 일상을 만나보세요.',
    },{
        title : 'Solution',
        body1 : '비즈니스 맞춤형 AI 솔루션으로',
        body2 : '혁신을 경험하세요.',
    },{
        title : 'Product',
        body1 : '세계 최고 수준의 AI가 적용된',
        body2: '놀라운 서비스, 제품을 제공해보세요.',
    },{
        title : 'Research',
        body1 : 'CLOVA AI의 독자적인 기술과',
        body2 : '세계적인 연구 성과를 확인하세요',
    }];
    const productList = products.map((value,index)=> (<Product
        Key = {index+1}
        title ={value.title}
        body1 ={value.body1}
        body2 = {value.body2}
       />));
        
    return (
        <div className="SectionA">
            <div className="SectionA__description">
                <strong>CLOVA AI</strong>
                <span>네이버 클로바는 독자적으로 개발한 AI기술을 통해</span>
                <span>세상에 없던 새로운 기술, 서비스, 제품을 만들어가고 있습니다.</span>
            </div>
            <div className="SectionA__Products">
                {productList}
            </div>
        </div>

    );
}

export default SectionA;