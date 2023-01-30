import { useNavigate } from 'react-router-dom';
import IResults from '../interfaces/IResults';
import milkImg from '../assets/milkImg.png';
import '../styles/Card.scss';

interface CardProps {
  product: IResults,
}
const Card = ({ product } : CardProps) => {

  const navigate = useNavigate();

  return (
    <article
      className='card-article'
      onClick={() => {navigate(`/${product.id}`)}}>
      <div className='card-article-img'>
        <img
          className='milk-img'
          src={milkImg} 
          alt='milkImg'/>
        </div>
      <div className='card-body'>
        <h6 className='card-title'>{product.name}</h6>
        <div className='card-detail'>
          <p>{product.type}</p>
          <p className='storage'>{product.storage === 0 ? 'Out of Stock' : `${product.storage} Liters`}</p>
        </div>
      </div>
    </article>
  )
}

export default Card