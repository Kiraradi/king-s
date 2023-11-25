import './Navigation.css'

export default function Navigation(props) {
    const {navigation} = props;
  return (
    <ul className="navigation-list">
        {
            navigation.map((item, index) => {
               return <li className="navigatoin-item" key={index}>{item}</li>
            })
        }
    </ul>
  )
}
