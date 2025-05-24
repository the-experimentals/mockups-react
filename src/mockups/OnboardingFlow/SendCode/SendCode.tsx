import React from 'react';
import styles from './SendCode.module.scss';
import mailSent from '../../../assets/illustrations/mail-sent.svg'
import { Button, Typography } from '@mui/material';
import IOnboardingProps from '../prop/IOnboardingProps';
class SendCode extends React.Component<IOnboardingProps, {}> {

  constructor(props: IOnboardingProps) {
    super(props);
  }

  render() {
    return (
      <div style={{textAlign:'center', padding:'20px 30px'}}>
        <div>
          <Typography variant="h3">Verify your email address</Typography>
          <Typography variant="body1">We will send verification code to <b>j***@domain.com</b> registered to your account.</Typography>
        </div>
        <img src={mailSent} alt="mail-sent" style={{width:'400px'}}/>
        <div>
          <Button color="primary" variant="contained" onClick={() => this.props.displayPage(2, true)}>Send code</Button>
        </div>
      </div>  
    )
  }
}
export default SendCode;
