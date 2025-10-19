import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="content">
        <div className="footer_logo">PEACH & LILY</div>
        <div className="footer_event">
          <div className="firstOrder">
            <span>첫 주문시 15%할인</span>
            <p>신제품 출시 소식과 독점 혜택, <br /> 그리고 다양한 소식을 가장 먼저 만나보세요.</p>
            <div className="inputWrap">
              <input type="email" className='email' placeholder='이메일 주소 입력'/>
            </div>
            <input type="checkbox"/> <label htmlFor="checkbox">서비스 관련 이메일 수신 허용</label>
          </div>
          <div className="subscribe">
            <span>문자 알림 구독하기</span>
            <p>스페셜 할인, 스킨케어 팁, <br /> 독점 콘텐츠를 받아보세요.</p>
            <button>지금 가입하고 15% 할인 혜택을 받아보세요</button>
          </div>
        </div>
        <ul className="footer_gnb">
          <li>
            <span className="title">제품</span>
            <a href="">베스트셀러</a>
            <a href="">유리광 컬렉션</a>
            <a href="">구독 서비스</a>
            <a href="">기프트 카드</a>
          </li>
          <li>
            <span className="title">고객지원</span>
            <a href="">내 계정</a>
            <a href="">내 피부 타입 찾기</a>
            <a href="">자주 묻는 질문</a>
            <a href="">사이트 맵</a>
          </li>
          <li>
            <span className="title">브랜드</span>
            <a href="">브랜드 소개</a>
            <a href="">블로그</a>
            <a href="">친구 추천</a>
            <a href="">피치 리워드 / 회원 혜택 프로그램</a>
          </li>
        </ul>
        <div className="footer_under">
          <div className="under_left">
            <a href="#">개인정보처리방침</a>
            <a href="#">이용약관</a>
            <a href="#">접근성</a>
            <a href="#">쿠키 설정 관리</a>
          </div>
          <div className="under_mid">
            <p>© 2025. ALL RIGHTS RESERVED</p>
          </div>
          <div className="under_right">
            <a href="#" className="pint"><span className="blind">핀터레스트</span></a>
            <a href="#" className="youtube"><span className="blind">유튜브</span></a>
            <a href="#" className="facebook"><span className="blind">페이스북</span></a>
            <a href="#" className="insta"><span className="blind">인스타그램</span></a>
            <a href="#" className="tictoc"><span className="blind">틱톡</span></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer