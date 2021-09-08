/* eslint-disable jsx-a11y/label-has-associated-control */
import {Component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'

import {
  GradientGeneratorCon,
  Heading,
  Para,
  Label,
  ButtonsList,
  Generate,
  ColorPick,
  ColorPickCont,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here
class GradientGenerator extends Component {
  state = {
    direction: gradientDirectionsList[0].value,
    firstColor: '#8ae323',
    secondColor: '#014f7b',
    gradient: `to ${gradientDirectionsList[0].value},${'#8ae323'},${'#014f7b'}`,
  }

  onGrDirection = value => {
    this.setState({direction: value})
  }

  onChangeOne = event => {
    this.setState({firstColor: event.target.value})
  }

  onChangeTwo = event => {
    this.setState({secondColor: event.target.value})
  }

  onClickGen = () => {
    const {firstColor, secondColor, direction} = this.state
    this.setState({gradient: `to ${direction},${firstColor},${secondColor}`})
  }

  render() {
    const {firstColor, secondColor, direction, gradient} = this.state

    return (
      <GradientGeneratorCon gradient={gradient} data-testid="gradientGenerator">
        <Heading>Generate a CSS Color Gradient</Heading>
        <Para>Choose Direction</Para>
        <ButtonsList>
          {gradientDirectionsList.map(eachItem => (
            <GradientDirectionItem
              eachItem={eachItem}
              key={eachItem.directionId}
              onGrDirection={this.onGrDirection}
              activeId={eachItem.value === direction}
            />
          ))}
        </ButtonsList>
        <Para>Pick the Colors</Para>
        <ColorPickCont>
          <div>
            <Label>{firstColor}</Label>
            <br />
            <ColorPick
              type="color"
              value={firstColor}
              onChange={this.onChangeOne}
            />
          </div>
          <div>
            <Label>{secondColor}</Label>
            <br />
            <ColorPick
              type="color"
              value={secondColor}
              onChange={this.onChangeTwo}
            />
          </div>
        </ColorPickCont>
        <Generate type="button" onClick={this.onClickGen}>
          Generate
        </Generate>
      </GradientGeneratorCon>
    )
  }
}
export default GradientGenerator
