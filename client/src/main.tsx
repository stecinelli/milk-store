import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import Home from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <Home />
  </BrowserRouter>
)
