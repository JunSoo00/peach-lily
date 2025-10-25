import React, { useState,useEffect, useRef } from 'react'
import MobileGnb from './MobileGnb';
import '../App.css'


const Header = () => {
    const [MGOpen, setMGOpen] = useState(false); /* 모바일gnb 상태설정 */
    const root = useRef(null);

    useEffect(() => {
        const el = root.current;
        if (window.innerWidth <= 1023) return;
        const gnb = [...el.querySelectorAll('.gnb > li')];
        const panels = {
            0: el.querySelector('.shopAll'),
            1: el.querySelector('.concerns'),
            2: el.querySelector('.bestsellers'),
            3: el.querySelector('.peachlily'),
            4: el.querySelector('.peachSlice')
        };

        const hideAll = () => el.querySelectorAll('.gnbMenu.on').forEach(p => p.classList.remove('on'));

        const handlers = gnb.map((li, i) => {
            const fn = () => { hideAll(); panels[i]?.classList.add('on'); };
            li.addEventListener('mouseenter', fn);
            return () => li.removeEventListener('mouseenter', fn);
        });

        const leave = () => hideAll();
        el.addEventListener('mouseleave', leave);

        return () => { handlers.forEach(off => off()); el.removeEventListener('mouseleave', leave) };

    })

    /* 모바일 버튼 설정 */
    const togglegnb = (e) => {
            e.preventDefault();
            if (window.innerWidth > 1023) return;
            setMGOpen(prev => !prev)
        }

    return (
        <>
        <header ref={root}>
            <div className="event">
                <p>7만원 이상 주문 시 무료배송 + 무료 샘플 2개</p>
                <ul className="eventMenu">
                    <li>
                        <a href="#">
                            더보기
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src={process.env.PUBLIC_URL + "/asset/ico/ico_locate.png"} alt="위치아이콘" />
                            대한민국
                        </a>
                    </li>
                </ul>
            </div>
            <ul className="header">
                <li className='logo'><img src={process.env.PUBLIC_URL + "/asset/ico/ico_headerLogo.svg"} alt="로고" /></li>
                <li>
                    <ul className="gnb">
                        <li>전체상품</li>
                        <li>피부고민별</li>
                        <li>베스트셀러</li>
                        <li>카테고리별</li>
                        <li>시그니쳐 라인</li>
                        <li>뷰티 스토리</li>
                        <li>피부진단 테스트</li>
                    </ul>
                </li>
                <li>
                    <ul className="nav">
                        <li>
                            <a href="">
                                <img src={process.env.PUBLIC_URL + "/asset/ico/ico_mypage.png"} alt="마이페이지" />
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src={process.env.PUBLIC_URL + "/asset/ico/ico_search.png"} alt="찾아보기" />
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src={process.env.PUBLIC_URL + "/asset/ico/ico_cart.png"} alt="장바구니" />
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src={process.env.PUBLIC_URL + "/asset/ico/ico_mbtn.png"} alt="모바일버튼" className='mbtn' onClick={togglegnb}/>
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
            <ul className="gnbMenu shopAll">
                <li className='left'>
                    <a href="#" className='title'>전체 상품</a>
                    <a href="#" className='title'>인기 제품</a>
                    <p>신제품</p>
                    <a href="#">미니프로틴 엑소좀 바이오액티브 앰플</a>
                    <a href="#">트랜스퍼렌-C 프로 브라이트닝 모이스처라이저</a>
                    <a href="#">하이드로버블 딥 폼 클렌저</a>
                </li>
                <li className="middle">
                    <div className="cate">
                        <span className="title">카테고리별</span>
                        <ul className="list">
                            <li><a href="#">클렌저</a></li>
                            <li><a href="#">토너</a></li>
                            <li><a href="#">에센스</a></li>
                            <li><a href="#">세럼</a></li>
                            <li><a href="#">오일</a></li>
                            <li><a href="#">보습제</a></li>
                            <li><a href="#">눈 케어</a></li>
                            <li><a href="#">트러블 케어</a></li>
                            <li><a href="#">각질케어</a></li>
                            <li><a href="#">립 케어</a></li>
                            <li><a href="#">바디 케어</a></li>
                            <li><a href="#">마스크</a></li>
                            <li><a href="#">메이크업</a></li>
                            <li><a href="#">굿즈</a></li>
                            <li><a href="#">기획 세트</a></li>
                        </ul>
                    </div>
                    <div className="conc">
                        <span className="title">피부고민별</span>
                        <ul className="list">
                            <li><a href="#">여드름</a></li>
                            <li><a href="#">안티에이징</a></li>
                            <li><a href="#">블랙헤드</a></li>
                            <li><a href="#">잡티 / 기미</a></li>
                            <li><a href="#">건조함</a></li>
                            <li><a href="#">생기 부족</a></li>
                            <li><a href="#">주름 개선</a></li>
                            <li><a href="#">탄력 케어</a></li>
                            <li><a href="#">피지 개선</a></li>
                            <li><a href="#">모공</a></li>
                            <li><a href="#">붉은기</a></li>
                        </ul>
                    </div>
                </li>
                <li className="right">
                    <img src={process.env.PUBLIC_URL + "/asset/img_header_shopall.jpg"}
                        alt="" />
                    <p>쇼핑 바로가기</p>
                </li>
            </ul>
            <ul className="gnbMenu concerns">
                <li className='left'>
                    <a href="#" className='title'>전체 상품</a>
                </li>
                <li className="middle">
                    <div className="conc">
                        <span className="title">피부고민별</span>
                        <ul className="list">
                            <li><a href="#">여드름</a></li>
                            <li><a href="#">안티에이징</a></li>
                            <li><a href="#">블랙헤드</a></li>
                            <li><a href="#">잡티 / 기미</a></li>
                            <li><a href="#">수분 부족</a></li>
                            <li><a href="#">색소 침착</a></li>
                            <li><a href="#">건조함</a></li>
                            <li><a href="#">생기 부족</a></li>
                            <li><a href="#">주름 개선</a></li>
                            <li><a href="#">탄력 케어</a></li>
                            <li><a href="#">각질</a></li>
                            <li><a href="#">잡티</a></li>
                            <li><a href="#">유수분 밸런스</a></li>
                            <li><a href="#">인그로운 헤어</a></li>
                            <li><a href="#">자극</a></li>
                            <li><a href="#">피지 개선</a></li>
                            <li><a href="#">모공</a></li>
                            <li><a href="#">면도 트러블</a></li>
                            <li><a href="#">붉은기</a></li>
                            <li><a href="#">민감성 피부</a></li>
                            <li><a href="#">피부 당김</a></li>
                            <li><a href="#">피부 톤 정돈</a></li>
                            <li><a href="#">피부 결 정돈</a></li>
                        </ul>
                    </div>
                </li>
                <li className="right">
                    <div><img src={process.env.PUBLIC_URL + "/asset/img_header_concerns01.jpg"}
                        alt="" /></div>
                    <div><img src={process.env.PUBLIC_URL + "/asset/img_header_concerns02.jpg"}
                        alt="" /></div>
                </li>
            </ul>
            <ul className="gnbMenu bestsellers">
                <li className='left'>
                    <a href="#" className='title'>베스트셀러</a>
                </li>
                <li className="middle">
                    <div className="cate">
                        <span className="title">카테고리별</span>
                        <ul className="list">
                            <li><a href="#">글래스 스킨 리파이닝 세럼</a></li>
                            <li><a href="#">프로퍼밍 모이스처라이저</a></li>
                            <li><a href="#">글래스 스킨 루미나이징 스틱</a></li>
                            <li><a href="#">말차 푸딩 안티옥시던트 크림</a></li>
                            <li><a href="#">글래스 스킨 디스커버리 키트</a></li>
                        </ul>
                    </div>
                    <div className="conc">
                        <span className="title">시그니처 라인</span>
                        <ul className="list">
                            <li><a href="#">스무딩 솔루션 인그로운 헤어 트리트먼트</a></li>
                            <li><a href="#">노즈 포어 패치</a></li>
                            <li><a href="#">스네일 레스큐 블레미쉬 버스팅 토너</a></li>
                            <li><a href="#">슈퍼 페이드 디스컬러레이션 세럼</a></li>
                            <li><a href="#">스네일 레스큐 트리오</a></li>
                        </ul>
                    </div>
                </li>
                <li className="right">
                    <div>
                        <img src={process.env.PUBLIC_URL + "/asset/img_header_best01.jpg"}
                            alt="" />
                        <p>맑고 투명한 피부</p>
                    </div>
                    <div>
                        <img src={process.env.PUBLIC_URL + "/asset/img_header_best02.jpg"}
                            alt="" />
                        <p>거친 피부 작별</p>
                    </div>
                </li>
            </ul>
            <ul className="gnbMenu peachlily">
                <li className='left'>
                    <a href="#" className='title'>신제품</a>
                    <a href="#" className='title'>전체 상품</a>
                    <a href="#" className='title'>베스트셀러</a>
                    <a href="#" className='title'>브랜드 소개</a>
                </li>
                <li className="middle">
                    <div className="cate">
                        <span className="title">카테고리별</span>
                        <ul className="list">
                            <li><a href="#">클렌저</a></li>
                            <li><a href="#">토너</a></li>
                            <li><a href="#">에센스</a></li>
                            <li><a href="#">세럼</a></li>
                            <li><a href="#">오일</a></li>
                            <li><a href="#">보습제</a></li>
                            <li><a href="#">눈 케어</a></li>
                            <li><a href="#">트러블 케어</a></li>
                            <li><a href="#">각질케어</a></li>
                            <li><a href="#">립 케어</a></li>
                            <li><a href="#">바디 케어</a></li>
                            <li><a href="#">마스크</a></li>
                            <li><a href="#">미스트</a></li>
                            <li><a href="#">메이크업</a></li>
                            <li><a href="#">굿즈</a></li>
                            <li><a href="#">기획 세트</a></li>
                        </ul>
                    </div>
                </li>
                <li className="right">
                    <div>
                        <img src={process.env.PUBLIC_URL + "/asset/img_header_peach01.jpg"}
                            alt="" />
                        <p>신제품 쇼핑하기</p>
                    </div>
                    <div>
                        <img src={process.env.PUBLIC_URL + "/asset/img_header_peach02.jpg"}
                            alt="" />
                        <p>모든 제품 보기</p>
                    </div>
                </li>
            </ul>
            <ul className="gnbMenu peachSlice">
                <li className='left'>
                    <a href="#" className='title'>신제품</a>
                    <a href="#" className='title'>전체 상품</a>
                    <a href="#" className='title'>베스트셀러</a>
                </li>
                <li className="middle">
                    <div className="cate">
                        <span className="title">카테고리별</span>
                        <ul className="list">
                            <li><a href="#">클렌저</a></li>
                            <li><a href="#">토너</a></li>
                            <li><a href="#">세럼 & 트리트먼트</a></li>
                            <li><a href="#">보습제</a></li>
                            <li><a href="#">마스크</a></li>
                            <li><a href="#">미스트</a></li>
                            <li><a href="#">패치</a></li>
                            <li><a href="#">바디 케어</a></li>
                            <li><a href="#">기획 세트</a></li>
                        </ul>
                    </div>
                    <div className="conc">
                        <span className="title">대표 시리즈</span>
                        <ul className="list">
                            <li><a href="#">여드름 케어</a></li>
                            <li><a href="#">바디 트러블 케어</a></li>
                            <li><a href="#">유분 조절</a></li>
                            <li><a href="#">민감 진정</a></li>
                            <li><a href="#">트러블 패치</a></li>
                            <li><a href="#">달팽이 크림</a></li>
                        </ul>
                    </div>
                </li>
                <li className="right">
                    <div>
                        <img src={process.env.PUBLIC_URL + "/asset/img_header_slice01.jpg"}
                            alt="" />
                        <p>전체상품 보기</p>
                    </div>
                    <div>
                        <img src={process.env.PUBLIC_URL + "/asset/img_header_slice02.jpg"}
                            alt="" />
                        <p>신제품 보기</p>
                    </div>
                </li>
            </ul>
        </header>

        {MGOpen && <MobileGnb onClose={() => setMGOpen(false)}/>}
        </>
    )
}

export default Header