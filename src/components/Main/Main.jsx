import Hed from './Hed/Hed';
import Card from './Card/Card';
import CourseProgram from './CourseProgram/CourseProgram';

import './Main.css';
import cardImg from '../../img/cardImg.png';
import  CourseProgramImg from '../../img/Group.png';

const CourseProgramList = [
  {
    title: 'Самопрезентация',
    description: 'Подготовите продающую самопрезентацию себя как эксперта, своих товаров и услуг'
  },
  {
    title: 'Образ уверенного спикера:',
    description: 'Сформируете уверенный образ эксперта, у которого хочется покупать и за которым хочется следовать'
  },
  {
    title: 'Страх сцены:',
    description: 'Научитесь избавляться от стресса и телесных зажимов перед выступлением'
  },
  {
    title: 'Практика выступлений:',
    description: 'Отработаете технику работы с камерой, записи видео и онлайн-выступлений'
  },
  {
    title: 'Финальное выступление:',
    description: 'Подготовите лучшее выступление в своей жизни!'
  }
]

export default function Main() {
    return (
      <main className='main'>
          <Hed/>
          <Card img = {cardImg} titleText = {'«Король говорит!» — это знания и практика.'} 
          contentText = {'Уже более 15 000 учеников, прошедших наши курсы, получили реальный результат в развитии речи и уверенности в себе. Хотите так же? Бронируйте место на ближайший курс.'} 
          buttonText = {'Забронировать место'} 
          />
          <CourseProgram titleText = {'Программа курса'} 
          contentText = {'Чтобы эффективно управлять аудиторией и вести за собой людей, вам нужны навыки, которыми владеют лишь 5% людей. Мы запустили продвинутые курсы: это удобно, оптимальная цена, хорошая обратная связь от преподавателей, насыщенная программа!'} 
          list = {CourseProgramList} 
          img = {CourseProgramImg}
          />

      </main>
    )
  }