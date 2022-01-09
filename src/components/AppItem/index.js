import './index.css'

const AppItem = props => {
  const {item} = props
  const {appName, imageUrl} = item
  return (
    <li className="list-container">
      <img src={imageUrl} alt={appName} className="logo" />
      <p className="app-name">{appName}</p>
    </li>
  )
}
export default AppItem
