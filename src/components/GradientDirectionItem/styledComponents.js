// Style your elements here
import styled from 'styled-components'

export const List = styled.li`
  list-style: none;
  margin: 10px;
`
export const Direction = styled.button`
  background-color: white;
  opacity: ${props => (props.Active ? 1 : 0.5)};
  color: ${props => (props.Active ? '#334155' : '#1e293b')};
  outline: none;
  border-radius: 8px;
  padding: 5px 15px;
  border: 0px solid;
`
