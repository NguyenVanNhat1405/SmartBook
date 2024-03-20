import React from 'react'
import './BookDisplay.css'
import starpull from '../Assets/star.png'
import star from '../Assets/starpull.png'
const BookDisplay = (props) => {
    const {book} = props;
  return (
    <div className='bookdisplay'>
      <div className='bookdisplay-left'>
        <div className='bookdisplay-img-list'>
            <img src={book.image} alt=""/>
            <img src={book.image} alt=""/>
            <img src={book.image} alt=""/>
            <img src={book.image} alt=""/>
        </div>
        <div className='bookdisplay-img'>
            <img className='bookdisplay-main-img' src={book.image} alt=""/>
        </div>
      </div>
      <div className='bookdisplay-right'>
        <h1>{book.name}</h1>
        <div className='bookdisplay-right-star'>
            <img src={star} alt=""/>
            <img src={star} alt=""/>
            <img src={star} alt=""/>
            <img src={star} alt=""/>
            <img src={starpull} alt=""/>
            <p>(19)</p>
        </div>
        <div className='bookdisplay-right-prices'>{book.price}VND</div>
        <div className='bookdisplay-right-description'>
            Description:
        </div>
        <div className='bookdisplay-right-author'>
            Author:
        </div>
        <div className='bookdisplay-right-publisher'>
            Publisher:
        </div>
        <div className='bookdisplay-right-amount'>
            Amount:
        </div>
        <div>
            <button>ADD TO CART</button>
            <button>BUY</button>
        </div>
        <p className='bookdisplay-right-category'><span></span></p>
      </div>
      

    </div>
  )
}

export default BookDisplay
