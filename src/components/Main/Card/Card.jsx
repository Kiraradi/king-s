import { CreateButton } from '../../../services/createButton';
import './Card.css'

export default function Card(props) {
    const {img, titleText, contentText, buttonText} = props;
    return (
      <section className='section-Card'>
          <img className='card-img' src={img} alt="img"/>
          <div className='card-content'>
            <h2 className='card-title'>{titleText}</h2>
            <p className='card-description'>{contentText}</p>
            <CreateButton className ={'button-card'} buttonText = {buttonText} />
          </div>
      </section>
    )
  }