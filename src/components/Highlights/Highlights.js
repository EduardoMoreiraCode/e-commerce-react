import React from 'react'
import Card from '../Card/Card'
import './Highlights.css';
import nikeOne from '../../assets/images/nike1.png'
import nike2 from '../../assets/images/nike2.png';
import basketShoe from '../../assets/images/basket-shoe.png';

const Highlights = () => {
  return (
    <div className='highs'>

        <div className='high-item1'>
          <Card>
            <div className='card-content'>
              <img className='high-image' src={nikeOne} alt='Nike One'/>
              <span title='Nike Suns 2TS' className='card-text'>Nike Suns 2TS</span>
            </div>
          </Card>
        </div>

        <div className='high-item'>
          <Card>
            <div className='card-content'>
              <img className='high-image' src={nike2} alt='Nike Air Jordan White 2XS'/>
              <span title='Nike Air Jordan White 2XS' className='card-text'>Nike Air Jordan White 2XS</span>
            </div>
          </Card>
        </div>

        <div className='high-item'>
          <Card>
            <div className='card-content'>
              <img className='high-image' src={basketShoe} alt='Nike Super Pro Max Omega'/>
              <span title='Nike Super Pro Max Omega' className='card-text'>Nike Super Pro Max Omega</span>
            </div>
          </Card>
        </div>

        <div className='high-item'>
          <Card>
            <div className='card-content'>
              <img className='high-image' src={nikeOne} alt='Nike One'/>
              <span className='card-text'>Nike Air White Plus</span>
            </div>
          </Card>
        </div>

        <div className='high-item'>
          <Card>
            <div className='card-content'>
              <img className='high-image' src={nikeOne} alt='Nike One'/>
              <span className='card-text'>Nike Suns 2TS</span>
            </div>
          </Card>
        </div>

    </div>
  )
}

export default Highlights