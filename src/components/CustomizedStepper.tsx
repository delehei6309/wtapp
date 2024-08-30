// import * as React from 'react';
// import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';



export default function HorizontalLinearStepper({ steps, activeStep }: { steps: string[]; activeStep: number; }) {
//   const [skipped, setSkipped] = React.useState(new Set<number>());

//   const isStepOptional = (step: number) => {
//     return step === 1;
//   };

//   const isStepSkipped = (step: number) => {
//     return skipped.has(step);
//   };

 


    return <Stepper activeStep={activeStep}>
        {/* completed */}
        {steps.map((label, index) => {
          return (
            <Step key={index} >
              <StepLabel >{label}</StepLabel>
            </Step>
          );
        })}
    </Stepper>
}