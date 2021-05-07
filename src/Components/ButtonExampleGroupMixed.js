import React from 'react'
import { Button } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

const ButtonExampleGroupMixed = (props) => (
  <Button.Group>
    <Button labelPosition='left' icon='minus' content='DECREASE' onClick={props.handleDecrease} />
    <Button icon='repeat' content='RESET'  onClick={props.handleReset} />
    <Button labelPosition='right' icon='plus' content='INCREASE'  onClick={props.handleIncrease} />
  </Button.Group>
)

export default ButtonExampleGroupMixed