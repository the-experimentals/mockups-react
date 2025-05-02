import { Button, Typography } from '@mui/material';
import React from 'react';
import onboard from '../../../assets/illustrations/onboard.svg';
import IOnboardingProps from '../prop/IOnboardingProps';

class GetStarted extends React.Component<IOnboardingProps, {}> {

  render() {
    return (
      <div style={{padding:'20px 30px', textAlign:'center'}}>
        <Typography variant="h3" gutterBottom>Welcome John Doe</Typography>
        <img src={onboard} alt="Onboarding flow" style={{width:'400px'}} />

        <div>
          <Typography variant="h4" gutterBottom>We are so excited to have you onboard</Typography>
          <Typography variant="body1" gutterBottom>We are here to help you get started with your new account. We will guide you through the process and we will be there for you if you need any help.</Typography>
        </div> 
        <div>
          <Button variant="contained" color="primary" style={{marginTop:'20px'}} onClick={() => this.props.displayPage(1, true)}>Let's get started</Button>
        </div>
      </div>
    );
  }
}

export default GetStarted;
