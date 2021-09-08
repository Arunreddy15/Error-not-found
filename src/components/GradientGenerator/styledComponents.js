// Style your elements here
import styled from 'styled-components'

export const GradientGeneratorCon = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(${props => props.gradient});
`
export const Heading = styled.h1`
  color: #fff;
`

export const Para = styled.p`
  color: white;
`
export const Label = styled.p`
  color: white;
`

export const ButtonsList = styled.ul`
  display: flex;
  padding: 0px;
`
export const Generate = styled.button`
  margin-top: 10px;
  border: 0px solid;
  color: black;
  padding: 10px;
  border-radius: 10px;
  background-color: #00c9b7;
`
export const ColorPick = styled.input`
  border: 0px solid;
  width: 50px;
  height: 50px;
  margin: 10px;
`
export const ColorPickCont = styled.div`
  display: flex;
  margin: 5px 0;
`
