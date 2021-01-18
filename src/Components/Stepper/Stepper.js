import React, { useState } from 'react'
import { Stepper, Step, Button, makeStyles, StepLabel } from '@material-ui/core'
import MakeList from './MakeList'
import ChooseList from './ChooseList'
import Randomizer from './Randomizer'
import StepOne from './StepOne'

const useStyles = makeStyles(() => ({
  stepper: {
    padding: "8px",
    flex: 1,
  }
}))


function getSteps() {
  return ['Get Started', 'Choose Or Make Your List', 'Randomize!']
}

export default function StepperComponent() {
  const classes = useStyles();
  const steps = getSteps();
  const [activeStep, setActiveStep] = useState(0)
  const [chooseState, setChooseState] = useState(true)

  function handleNext() {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  function handlePrevious() {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  function chooseFromList() {
    console.log('Choose own list')
    setChooseState(true)
    handleNext()
  }

  function makeOwnList() {
    console.log('Make own list')
    setChooseState(false)
    handleNext()
  }


  function getStepContent(step) {
    switch (step) {

      case 0:
        console.log('0')
        return (
          <StepOne
            chooseFromList={chooseFromList}
            makeOwnList={makeOwnList}
          />
        );
      case 1:
        console.log('1')
        return (
          <>
            {chooseState === true ? <ChooseList /> : <MakeList />}
          </>
        );
      case 2:
        console.log('2')
        return (
          <Randomizer />
        )

      default:
        console.log('Default')
        return null;
    }
  }

  return (
    <div>
      <div>
        <Stepper alternativeLabel className={classes.stepper} activeStep={activeStep}>
          {steps.map((e) => (
            <Step key={e}>
              <StepLabel>{e}</StepLabel>
            </Step>

          ))}
        </Stepper>
        <Button
          disabled={activeStep === 0}
          variant="contained"
          color="primary"
          onClick={handlePrevious}
        >Back</Button>
        <Button
          variant="contained"
          color="primary"
          onClick={handleNext}
          disabled={activeStep === steps.length || activeStep === 0}
        >Next</Button>
      </div>
      <div>
        <div>
          {getStepContent(activeStep)}
        </div>
      </div>
    </div>
  )
}