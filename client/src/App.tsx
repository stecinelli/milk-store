import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './routes/Home';
import Product from './routes/Product';
import OrderConfirmation from './routes/OrderConfirmation';
import Footer from './components/Footer';
import IState from './interfaces/IState';
import IResults from './interfaces/IResults';
import './styles/App.scss';

const App = () => {

  const [data, setData] = useState<IState>({
    loading: false,
    results: [] as IResults[],
    errorMessage: '',
  });

  const [query, setQuery] = useState<string>('');

  const search = (data:IResults[]) => {
    return data.filter((product:IResults) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    )
  }

  const milkTypes = (data:IResults[]) => {
    const allTypes = data.map(product => product.type);
    const types = allTypes.filter((type, index) => {
      return allTypes.indexOf(type) === index;
    });
    return types;
  }

  useEffect(() => {
    setData({...data, loading: true})
    const fetchData = async () => {
      const response = await fetch('http://localhost:8080/api/milkstore');
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
    };
    fetchData();
  },[])
  
  return (
    <>
      <Header/>
        {data.errorMessage && (<p className='p-3'>{data.errorMessage}</p>)}
        {data.loading && (<h3 className='p-3'>Loading... </h3>)}
        <Routes>
          <Route path='/' element={<Home
            setQuery={setQuery}
            results={search(data?.results)}
            milkTypes={milkTypes(data?.results)}
            />} />
          <Route path={`/:productId`} element={<Product
            data={data}
            setData={setData}
            results={data?.results}/>} />
          <Route path={`/orderconfirmation`} element={<OrderConfirmation/>} />
        </Routes>
      <Footer/>
    </>
  )
}

export default App
