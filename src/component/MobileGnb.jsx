import React from 'react'

const MobileGnb = ({onClose}) => {
    
    return (
        <div className='Mgnb on'>
            <button className='closeBtn' onClick={onClose}>x</button>
            <ul>
                <li>
                    <span>전체상품</span>
                    <div>
                        <a href="#">전체상품</a>
                        <a href="#">베스트셀러</a>
                        <a href="#">카테고리별</a>
                        <a href="#">피부고민별</a>
                    </div>
                </li>
                <li>
                    <span>피부고민별</span>
                    <div>
                        <a href="#">전체상품</a>
                        <a href="#">카테고리별</a>
                    </div>
                </li>
                <li>
                    <span>베스트셀러</span>
                    <div>
                        <a href="#">베스트셀러 전체보기</a>
                        <a href="#">카테고리별</a>
                        <a href="#">시그니쳐 라인</a>
                    </div>
                </li>
                <li>
                    <span>카테고리별</span>
                    <div>
                        <a href="#">신상품</a>
                        <a href="#">전체상품</a>
                        <a href="#">베스트셀러</a>
                        <a href="#">카테고리별</a>
                    </div>
                </li>
                <li>
                    <span>시그니쳐 라인</span>
                    <div>
                        <a href="#">신상품</a>
                        <a href="#">전체상품</a>
                        <a href="#">베스트셀러</a>
                        <a href="#">카테고리별</a>
                        <a href="#">대표 시리즈</a>
                    </div>
                </li>
                <li>뷰티 스토리</li>
                <li>피부진단 테스트</li>
            </ul>
        </div>
    )
}

export default MobileGnb