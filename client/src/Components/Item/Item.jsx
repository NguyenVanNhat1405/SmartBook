import React from 'react'
import './Item.css'
const Item = (props) => {
  return (
    <div className='item'>
        <img src={props.image}/>
        <p>{props.name}</p>
        <div className='item-prices'>
            <div className='item-price-new'>
                {props.new_price}đ
            </div>
            <div className='item-price-old'>
                {props.old_price}đ
            </div>
        </div>
    </div>
  )
}

export default Item
