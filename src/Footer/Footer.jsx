import './Footer.css'
import Logodark from '../images/iconLogoDark1.png';
import Social from '../images/social.png';

function Footer(){
    return(
        <div className='footer'>
            <div className="container">
                <img className="footer-logo" src={Logodark} alt="darklogo"/>
                <h3 className="footer-h3">Политика конфиденциальности</h3>
                <h3 className="footer-h31">Соглашение на обработку персональных данных</h3>
                <img className="footer-social" src={Social} alt="social"/>
                
            </div>
        </div>
    );
}

export default Footer;