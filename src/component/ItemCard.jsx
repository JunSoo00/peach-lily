import React, { useState } from 'react'

const ItemCard = ({item}) => {
  const [hover, sethover] = useState(false);
  const imageSrc = process.env.PUBLIC_URL + '/' + (hover ? item.hoverImg : item.image);
  return (
    <div className='ItemCard'
      onMouseEnter={() => sethover(true)}
      onMouseLeave={() => sethover(false)}>
        <img src={imageSrc} alt={item.title} />

      <div className="cardText">
        <h3>{item.title}</h3>
        <p>{item.desc}</p>
        <span> &#8361; {item.price}</span>
      </div>
    </div>
  )
}

export default ItemCard