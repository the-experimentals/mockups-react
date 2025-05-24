import { Button, TextField, Typography } from '@mui/material';
import React from 'react';
import styles from './VerifyAccount.module.scss';
import tfa from '../../../assets/illustrations/tfa.svg'
import IOnboardingProps from '../prop/IOnboardingProps';
class VerifyAccount extends React.Component<IOnboardingProps, {}> {
  constructor(props: IOnboardingProps) {
    super(props);
  }

  render() {
    return (
      <div style={{textAlign:'center', padding:'20px 30px'}}>
        <div>
          <Typography variant="h3">Enter verification code</Typography>
          <Typography variant="body1">Obtain verification code sent to email registered with your account.</Typography>
        </div> 
        <div>
          <img src={tfa} alt="tfa" style={{width:'400px'}}/>
        </div>
        <div>
          <TextField type="text" variant="outlined" style={{width:'40px', marginLeft:'0.5rem'}} inputProps={{maxLength: '1'}} autoFocus>

          </TextField>
          <TextField type="text" variant="outlined" style={{width:'40px', marginLeft:'0.5rem'}} inputProps={{maxLength: '1'}}>

          </TextField>
          <TextField type="text" variant="outlined" style={{width:'40px', marginLeft:'0.5rem'}} inputProps={{maxLength: '1'}}>

          </TextField>
          <TextField type="text" variant="outlined" style={{width:'40px', marginLeft:'0.5rem'}} inputProps={{maxLength: '1'}}>

          </TextField>
          <TextField type="text" variant="outlined" style={{width:'40px', marginLeft:'0.5rem'}} inputProps={{maxLength: '1'}}>

          </TextField>
          <TextField type="text" variant="outlined" style={{width:'40px', marginLeft:'0.5rem'}} inputProps={{maxLength: '1'}}>

          </TextField>
        </div>
        <div>
          <Button variant="contained" color="primary" style={{marginTop:'20px'}} onClick={() => this.props.displayPage(3, true)}>Verify</Button>
        </div>
      </div>
    )
  }
}

export default VerifyAccount;
