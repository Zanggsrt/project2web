import './Home.css';
import IconPlay from '../images/iconPlay1.png';
import Foto1 from '../images/2.png';
import Foto2 from '../images/3.png';
import Foto3 from '../images/4.png';
import Travel from '../images/travel.png';


function Home(){
    return(
        <div className="main">
            <section className="first-display">
            <div className="container">
                <h1 className="open-text">Открой для себя Новую Ирландию</h1>
                <h2 className="author-text">Авторские туры по экзотическим уголкам от Ивана Иванова</h2>
                <div className="information-buttons">
                    <button className="statement-button">Оставить заявку</button>
                    <div className="video">
                        <img src={IconPlay} alt="play"/>
                        <h2>Посмотрите видео-отчет 2018-2019</h2>
                    </div>
                    <div className="images">
                        <img src={Foto1} alt="02"/>
                        <img src={Foto2} alt="03"/>
                        <img src={Foto3} alt="04"/>
                    </div>
                </div>
            </div>
        </section>
        <section className="second-display">
            <div className="container">
                <img className="travel" src={Travel} alt="travel"/>
                <div className="second-text">
                    <h2>Посмотрите все направления туров</h2>
                    <h3>Берега океанов и дикие пляжи с редкими породами деревьев. Местная архитектура и первозданный вид дикой природы</h3>
                    <button>Смотреть все</button>
                </div>
            </div>
        </section>
        </div>
    );
}

export default Home;