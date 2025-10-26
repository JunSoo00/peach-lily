import React, { useEffect, useState } from 'react'

const MobileGnb = ({onClose}) => {
    const [isOn, setIsOn] = useState(false);

    useEffect(()=>{
        const t = setTimeout(()=> setIsOn(true), 10); //살짝 늦게 on 클래스 부여
        return() => clearTimeout(t);
    }, []);

    const DelayClose = () => {
        setIsOn(false);
        setTimeout(onClose, 500);
    }

    return (
        <div className={`gnbWrap ${isOn ? 'on' : ''}`}>
            <div className="Mgnb">
                <button className='closeBtn' onClick={DelayClose}>x</button>
                <ul>
                    <li className='Mlogo'><img src={process.env.PUBLIC_URL + "/asset/ico/ico_headerLogo.svg"} alt="로고" /></li>
                    <li>
                        <span>전체상품</span>
                        <div className='M_gnb_menu'>
                            <a href="#">전체상품</a>
                            <a href="#">베스트셀러</a>
                            <a href="#">카테고리별</a>
                            <a href="#">피부고민별</a>
                        </div>
                    </li>
                    <li>
                        <span>피부고민별</span>
                        <div className='M_gnb_menu'>
                            <a href="#">전체상품</a>
                            <a href="#">카테고리별</a>
                        </div>
                    </li>
                    <li>
                        <span>베스트셀러</span>
                        <div className='M_gnb_menu'>
                            <a href="#">베스트셀러 전체보기</a>
                            <a href="#">카테고리별</a>
                            <a href="#">시그니쳐 라인</a>
                        </div>
                    </li>
                    <li>
                        <span>카테고리별</span>
                        <div className='M_gnb_menu'>
                            <a href="#">신상품</a>
                            <a href="#">전체상품</a>
                            <a href="#">베스트셀러</a>
                            <a href="#">카테고리별</a>
                        </div>
                    </li>
                    <li>
                        <span>시그니쳐 라인</span>
                        <div className='M_gnb_menu'>
                            <a href="#">신상품</a>
                            <a href="#">전체상품</a>
                            <a href="#">베스트셀러</a>
                            <a href="#">카테고리별</a>
                            <a href="#">대표 시리즈</a>
                        </div>
                    </li>
                    <li><span>뷰티 스토리</span></li>
                    <li><span>피부진단 테스트</span></li>
                    <li>
                        <div className="Mnav">
                            <a href="#">
                                <img src={process.env.PUBLIC_URL + "/asset/ico/ico_locate.png"} alt="위치아이콘" />
                                대한민국
                            </a>
                            <a href="#">
                                Log in
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="dim"></div>
        </div>
    )
}

export default MobileGnb