import React from 'react'
import { Button } from '@material-ui/core'

export default function StepOne(props) {
  return (
    <div>
      <Button onClick={() => props.chooseFromList()}>Choose a list</Button>
      <Button onClick={() => props.makeOwnList()}>Make a list</Button>
    </div>
  )
}