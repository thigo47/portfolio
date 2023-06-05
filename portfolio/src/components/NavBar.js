import { BrowserRouter, Link } from 'react-router-dom';

function NavBar() {
  return (
    <div>
        
        <Link to="/Sobre">
        <div>Mais Sobre Mim</div>
      </Link>
        
     
      <div>Contato</div>
    </div>
  );
}

export default NavBar;
