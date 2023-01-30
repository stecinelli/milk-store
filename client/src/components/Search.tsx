import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { IoSearchOutline, IoClose } from 'react-icons/io5';

interface SearchProps {
  setQuery: (string:string) => void,
  setCurrentPage: (number:number) => void,
  milkTypes: string[];
}

const Search = ({ setQuery, setCurrentPage, milkTypes } : SearchProps) => {

  return (
    <Navbar className='justify-content-center align-items-end' style={{height: '100px'}}>
      <Nav className='searchbar justify-content-between'>
        <InputGroup style={{width: '40%'}}>
          <InputGroup.Text id='basic-addon1'>
            <IoSearchOutline/>
          </InputGroup.Text>
          <Form.Control
            placeholder='Search'
            aria-label='Search'
            aria-describedby='basic-addon1'
            onClick={() => setCurrentPage(1)}
            onChange={(e) => setQuery(e.target.value)}
            style={{borderRight: 'none'}}
          />
          <InputGroup.Text
            id='basic-addon1'
            style={{backgroundColor: '#fff'}}
            onClick={()=> window.location.reload()}>
            <IoClose style={{color: 'grey'}}/>
          </InputGroup.Text>
        </InputGroup>
        <NavDropdown title='Filter' id='basic-nav-dropdown'>
          {milkTypes.map((type, index) => (
            <NavDropdown.Item
              key={index}
              onClick={()=> {setQuery(type); setCurrentPage(1)}}>{type}</NavDropdown.Item>
            )
          )}
        </NavDropdown>
      </Nav>
    </Navbar>
  );
}

export default Search;

