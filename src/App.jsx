import './App.css';
import Logo from './images/iconLogoWhite1.png';
import Burger from './images/burger.png';
import {Routes, Route, Link} from 'react-router-dom';
import Home from './Home/Home';
import About from './Reviews/Reviews';
import Footer from './Footer/Footer';
import Navigation from './Navigation/Navigation';

function App(props){
  return (
    <div className="App">
      <header>
        <nav>
            <div className="container">
                <ul>
                    <li><img className='logo'  src={Logo} alt='logo'/></li>
                    <li><Link to='/'>{props.firstTitle}</Link></li>
                    <li><Link to='/about'>{props.secondTitle}</Link></li>
                    <li><Link to='/navigation'>{props.thirdTitle}</Link></li>
                    <li><img className='burger' src={Burger} alt="burger"/></li>
                </ul>
            </div>
        </nav>   
    </header>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About />}/>
      <Route path='/navigation' element={<Navigation/>}/>
      <Route path='*' element={<Home />}/>
    </Routes>
    <Footer/>
    </div>
  );
}


export default App;
