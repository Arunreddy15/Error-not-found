// Write your code here
import {List, Direction} from './styledComponents'

const GradientDirectionItem = props => {
  const {eachItem, onGrDirection, activeId} = props
  const {value, displayText} = eachItem
  const onClickBtn = () => {
    onGrDirection(value)
  }

  return (
    <List>
      <Direction Active={activeId} type="button" onClick={onClickBtn}>
        {displayText}
      </Direction>
    </List>
  )
}
export default GradientDirectionItem
