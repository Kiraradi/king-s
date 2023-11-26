export default function Item(props) {
    const {item, index} = props;
    return (
      <li className='item' key={index}>
         <div className="item-index">{index}</div> 
         <div className="item-description-wrapper">
            <h3 className="item-title">{item.title}</h3>
            <p className="item-description">{item.description}</p>
         </div>
      </li>
    )
  }