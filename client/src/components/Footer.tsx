import '../styles/Footer.scss';
import githubLogo from '../assets/githubLogo.png';

const Footer = () => {
  return (
    <footer className='footer'>
      <p className='footer-text'>The Milk Store • 2023</p>
        <a href='https://github.com/stecinelli/milk-store'>
        <img className="footer-img" src={githubLogo} alt='github logo'/>
        </a>
      <p className='footer-text'>Website developed by 
        <a>
          <b className='footer-link'>Steph Cinelli</b>
        </a>
      </p>
    </footer>
  )
}

export default Footer