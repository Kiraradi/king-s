import Item from './ItemEl/ItemEl';

import './CourseProgram.css'

export default function CourseProgram(props) {
    const {titleText, contentText, list = [], img} = props;
    return (
      <section className='section-courseProgram'>
          <div className='courseProgram-description-wpapper'>
            <div className='courseProgram-description'>
               <h2 className='courseProgram-title'>{titleText}</h2>
               <p className='courseProgram-description'>{contentText}</p> 
            </div> 
            <img className='courseProgram-img' src={img}></img>  
          </div>
          <ul className='courseProgram-list'>
                {
                    list.map((item, index )=> {
                        return <Item item ={ item } index = { index + 1 } />
                    })
                }
          </ul>
      </section>
    )
  }