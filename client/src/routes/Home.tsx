import { useState, useLayoutEffect } from 'react';
import { IoRefresh } from 'react-icons/io5';
import IResults from '../interfaces/IResults';
import Search from '../components/Search';
import Card from '../components/Card';
import Pages from '../components/Pages';
import '../styles/Home.scss';

interface HomeProps {
  results: IResults[],
  setQuery: (input:string) => void,
  milkTypes: string[],
}

const Home = ({ results, setQuery, milkTypes } : HomeProps) => {

  const [currentPage, setCurrentPage] = useState<number>(1);
  const cardsPerPage = 9;

  const lastIndex = currentPage * cardsPerPage;
  const firstIndex = lastIndex - cardsPerPage;
  const currentResults = results.slice(firstIndex, lastIndex)

  useLayoutEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  })
  
  return (
    <main className='container-xl' style={{minHeight: '100vh'}}>
      <Search
        setQuery={setQuery}
        setCurrentPage={setCurrentPage}
        milkTypes={milkTypes}/>
      <p className='product-count'>
        {`${results.length} Products`}
        <IoRefresh
          className='refresh'
          onClick={()=> window.location.reload()}/>
      </p>
      <section className='gallery'>
          {currentResults.map((product, index) => {
            return (
              <Card
                product={product}
                key={index}/>
              )
            })
          }
      </section>
      <section className='pagination'>
        <Pages
          totalPages={Math.ceil(results.length/cardsPerPage)}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}/>
      </section>
    </main>
  )
}

export default Home