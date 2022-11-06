import './Reviews.css'
import Review from '../images/otzv.png'
import React from 'react';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Reviews(){
    const notify = () => toast("Ждите звонка от оператора"+document.getElementsByTagName("text")[0].value);
    return(
        <div>
            <section className="feedback-section">
                <div className="container">
                    <div className="feedback-text">
                        <h1>Оставьте заявку на бесплатную консультацию</h1>
                        <h2>Мы перезвоним вам в ближайшее время</h2>
                    </div>
                    <div className="feedback-input">
                        <form action='/'>
                            <input type="text" name="text" id="text" placeholder="Ваше имя"/>
                            <input type="number" name="number" id="number" placeholder="+7 (___) ___-__-__"/>
                            <button type="submit" onClick={notify}>Отправить заявку</button>
                        </form>
                        <h3>Нажимая кнопку, вы даёте согласиена <span>обработку персональных данных</span></h3>
                    </div>
                </div>
            </section>
            <section className="reviews-section">
                <div className="container">
                    <div className="reviews-text">
                        <h2>Что пишут участники наших путешествий</h2>
                        <h3>87% участников приходят по личной рекомендации от друзей. А каждый 4-ый путешествует с нами больше двух раз!</h3>
                        <button>Читать отзывы</button>
                    </div>
                    <img className="review-img" src={Review} alt="otzv"/>
                </div>
            </section>
        </div>
    );
}

export default Reviews;