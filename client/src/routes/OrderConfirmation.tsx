import { useLayoutEffect } from 'react';
import milkImg from '../assets/milkImg.png';
import { Link } from 'react-router-dom';
import '../styles/OrderConfirmation.scss';

const OrderConfirmation = () => {

  useLayoutEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'auto',
    });
  })

  return (
    <main className='container-xl' style={{minHeight: '100vh'}}>
      <section className='message-container'>
          <article className='message-article'>
            <h1 className='message-heading'>THE MILK STORE</h1>
            <img
              className='message-img'
              src={milkImg}
              alt='milkImg'/>
            <p className='message-text'>Thank you for your purchase!</p>
            <Link to={'/'}>
              <button className='home-btn'>Return to homepage</button>
            </Link>
          </article>
      </section>
    </main>
  )
}

export default OrderConfirmation