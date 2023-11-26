import { CreateButton } from '../../../services/createButton';

import './Hed.css'
import img from '../../../img/Image.png'
export default function Hed() {
    return (
      <section className='section-hed'>
          <h2 className='hed-title'>{'Школа ораторсокого искусства'}</h2>
          <div className='hed-description'>
                <p>{`Вы избавитесь от страха выступать на публике за 8 занятий!`}</p>
                <p>{`Вас обучат профессиональные преподаватели по ораторскому мастерству`}</p>
                <p>{`со стажем 18 лет!`}</p>
          </div>
          <div className='button-wpapper'>
            <CreateButton className = {'order-button'} buttonText = {'Заказать консультацию'}/>
            <CreateButton className = {'info-button'} buttonText = {'Узнать больше'}/>
          </div>
          <img className='hed-img' src = {img} alt="картинка"/>
      </section>
    )
  }