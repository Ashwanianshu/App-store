// Write your code here
import './index.css'

const TabItem = props => {
  const {fun, item, isActive} = props
  const {tabId, displayText} = item
  const extraClass = isActive ? 'change' : ''
  const font = isActive ? 'color' : ''
  const change = () => {
    fun(tabId)
  }
  return (
    <li className={`list-item ${extraClass}`}>
      <button onClick={change} className={`btn ${font}`} type="button">
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
