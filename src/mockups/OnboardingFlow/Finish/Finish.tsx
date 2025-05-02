import { Button, Typography } from '@mui/material';
import React from 'react';
import done from '../../../assets/illustrations/done.svg'

class Finish extends React.Component {
  render() {
    return (
      <div style={{textAlign:'center', padding:'20px 30px'}}>
        <div>
          <Typography variant="h3">Onboarding complete</Typography>
          <Typography variant="body1">Welcome John Doe your onboarding is complete</Typography>
        </div>

        <div>
          <img src={done} alt="done" style={{width:'400px'}}/>
        </div>
        <div>
          <Button variant="contained" color="primary" >Enter</Button>
        </div>
      </div>
    )
  }
}

export default Finish;
