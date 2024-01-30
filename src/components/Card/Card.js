import './Card.css';

const Card = ({children}) => {
  return (
    <div>
        <div className='card-structure'>
          {children}
        </div>
    </div>
  )
}

export default Card