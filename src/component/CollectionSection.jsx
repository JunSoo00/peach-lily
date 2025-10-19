import React from 'react'

const CollectionSection = () => {
  return (
    <div className='CollectionSection'>
      <div className="ourCollection">
        <h2 className="title">시그니처 상품</h2>
        <div className="gotoSection">
          <div className="peachlily">
            <figure className="peachlily_img"></figure>
            <div className="goto_text">
              <h3>카테고리 별 상품들을 만나보세요</h3>
              <p>건강한 피부를 생각하며 부드럽지만 효과적인 성분으로 만들어졌습니다.</p>
              <button>더보러가기</button>
            </div>
          </div>
          <div className="peachSlice">
            <figure className="peachSlice_img"></figure>
            <div className="goto_text">
              <h3>시그니처 제품들을 사용해보세요</h3>
              <p>복잡한 피부 고민을 쉽고, 효과적이며, 합리적인 가격으로 해결하세요.</p>
              <button>더보러가기</button>
            </div>
          </div>
        </div>
      </div>
      <div className="collectionImg">
        <div className="collection_text">
          <h3>유리광 피부 컬렉션 쇼핑하기</h3>
          <p>
            건강한 피부를 생각하며 <br />
            부드럽지만 효과적인 성분으로 <br />
            당신의 #유리광 피부 목표를 이루세요.
          </p>
        </div>
      </div>
    </div>
  )
}

export default CollectionSection