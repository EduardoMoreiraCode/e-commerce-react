import React from 'react'
import Card from '../Card/Card'
import './Highlights.css';
import nikeOne from '../../assets/images/nike1.png'
import nike2 from '../../assets/images/nike2.png';
import basketShoe from '../../assets/images/basket-shoe.png';
import orangeNike from '../../assets/images/orange-nike.png';
import adidasGreen from '../../assets/images/green-white-adidas.png';
import casualSport from '../../assets/images/SportCasual.png';
import Button from '../Button/Button';

const Highlights = () => {
  return (
    <div>
      <div className='destaques-text'>
        destaques
      </div>
<div className='highs'>

<div className='high-item'> 
  {/* high-item1 */}
  <Card>
    <div className='card-content'>
      <img className='high-image' src={nikeOne} alt='Nike One'/>
      <span title='Nike Suns 2TS' className='card-text'>Nike Suns 2TS</span>
    </div>
    <Button>Compre já</Button>
  </Card>
</div>

<div className='high-item'>
  <Card>
    <div className='card-content'>
      <img className='high-image' src={nike2} alt='Nike Air Jordan White 2XS'/>
      <span title='Nike Air Jordan White 2XS' className='card-text'>Nike Air Jordan White 2XS</span>
    </div>
    <Button>Compre já</Button>
  </Card>
</div>

<div className='high-item'>
  <Card>
    <div className='card-content'>
      <img className='high-image' src={basketShoe} alt='Nike Super Pro Max Omega'/>
      <span title='Nike Super Pro Max Omega' className='card-text'>Nike Super Pro Max Omega</span>
    </div>
    <Button>Compre já</Button>
  </Card>
</div>

<div className='high-item'>
  <Card>
    <div className='card-content'>
      <img className='high-image' src={adidasGreen} alt='Adidas Green-White SportsRace'/>
      <span title='Adidas Green-White SportsRace' className='card-text'>Adidas Green-White SportsRace</span>
    </div>
    <Button>Compre já</Button>
  </Card>
</div>

<div className='high-item'>
  <Card>
    <div className='card-content'>
      <img className='high-image' src={orangeNike} alt='Nike Casual-Social Orange-White'/>
      <span title='Nike Casual-Social Orange-White' className='card-text'>Nike Casual-Social Orange-White</span>
    </div>
    <Button>Compre já</Button>
  </Card>
</div>

<div className='high-item'>
  <Card>
    <div className='card-content'>
      <img className='high-image' src={casualSport} alt='Nike Beige Sport Casual'/>
      <span title='Nike Beige Sport Casual' className='card-text'>Nike Beige Sports</span>
    </div>
    <Button>Compre já</Button>
  </Card>
</div>

<div className='high-item'>
  <Card>
    <div className='card-content'>
      <img className='high-image' src={nikeOne} alt='Nike One'/>
      <span title='Nike Suns 2TS' className='card-text'>Nike Suns 2TS</span>
    </div>
    <Button>Compre já</Button>
  </Card>
</div>

<div className='high-item'>
  <Card>
    <div className='card-content'>
      <img className='high-image' src={nike2} alt='Nike Air Jordan White 2XS'/>
      <span title='Nike Air Jordan White 2XS' className='card-text'>Nike Air Jordan White 2XS</span>
    </div>
    <Button>Compre já</Button>
  </Card>
</div>

<div className='high-item'>
  <Card>
    <div className='card-content'>
      <img className='high-image' src={basketShoe} alt='Nike Super Pro Max Omega'/>
      <span title='Nike Super Pro Max Omega' className='card-text'>Nike Super Pro Max Omega</span>
    </div>
    <Button>Compre já</Button>
  </Card>
</div>

<div className='high-item'>
  <Card>
    <div className='card-content'>
      <img className='high-image' src={adidasGreen} alt='Adidas Green-White SportsRace'/>
      <span title='Adidas Green-White SportsRace' className='card-text'>Adidas Green-White SportsRace</span>
    </div>
    <Button>Compre já</Button>
  </Card>
</div>

<div className='high-item'>
  <Card>
    <div className='card-content'>
      <img className='high-image' src={orangeNike} alt='Nike Casual-Social Orange-White'/>
      <span title='Nike Casual-Social Orange-White' className='card-text'>Nike Casual-Social Orange-White</span>
    </div>
    <Button>Compre já</Button>
  </Card>
</div>

</div>
    </div>
  )
}

export default Highlights