import { useState, useEffect, useLayoutEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import IState from '../interfaces/IState';
import IResults from '../interfaces/IResults';
import Slider from '@mui/material/Slider';
import { MdArrowBackIos } from 'react-icons/md';
import milkImg from '../assets/milkImg.png';
import '../styles/Product.scss';

interface ProductProps {
  data: IState,
  setData: (state:IState) => void,
  results: IResults[],
}

const Product = ({ data, setData, results } : ProductProps) => {

  const param = useParams();
  const navigate = useNavigate();
  
  const [storage, setStorage] = useState<number>(0)

  const liters = results?.filter(product => product.id === param.productId)
    .map(product => product.storage)[0];

  const updateStorage = async (newStorage : number) => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:8080/api/milkstore/${param.productId}`, {
        method: 'PATCH',
        body: JSON.stringify({storage: newStorage}),
        headers: {
          'Content-Type': 'application/json'
          }
      });
      try {
        const milkstore = await response.json();
        setData({
          ...data,
          loading: false,
          results: milkstore?.results,
        });
      } catch (error:any) {
        setData({
          ...data,
          loading: false,
          errorMessage: error.message,
        });
      }
    }
    fetchData();
  }

  useLayoutEffect(() => {
    window.scrollTo({
      top: 0,
    });
  })

  useEffect(() => setStorage(liters), [])

  return (
    <main className='container-xl' style={{minHeight: '100vh'}}>
      <section className='product-container'>
        {results.filter(product => product.id === param.productId).map((product, index) => {
          return (
            <article key={index} className='product-article'>
              <div
                className='back-arrow'
                onClick={()=> navigate(-1)}>
                <MdArrowBackIos/>
                <p>Back</p>
              </div>
              <div className='product'>
                <div className='product-img'>
                  <img className='product-milk-img'
                    src={milkImg}
                    alt='milkImg'/>
                </div>
                <div className='product-detail'>
                  <p className='product-text'>{product.name}</p>
                  <p className='product-text'>{product.type}</p>
                  <p className='product-text'>{storage === 0 ? 'Out of Stock' : `Available liters: ${storage}`}</p>
                  <div className='slider'>
                    <Slider
                      defaultValue={1}
                      min={0}
                      max={product.storage}
                      step={1}
                      marks
                      aria-label='Default'
                      valueLabelDisplay='auto'
                      color='secondary'
                      onChange={(e:any) => setStorage(product.storage - e.target.value)}/>
                  </div>
                  <p className='product-text'>{`Liters ordered: ${product.storage - storage}`}</p>
                  <button
                    className='order-btn'
                    onClick={()=> {
                      if (product.storage === 0) {
                        alert('Product out of stock!')
                      } else if (product.storage - storage === 0) {
                        alert('Please use the slider to select number of liters for order')
                      } else {
                        navigate('/orderconfirmation');
                        updateStorage(storage)}}
                      }>
                      Place Order
                  </button>
                </div>
              </div>
            </article>
            )
          })}
      </section>
    </main>
  )
}

export default Product