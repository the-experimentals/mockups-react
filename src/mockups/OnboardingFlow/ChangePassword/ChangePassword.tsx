import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Checkbox, FormControlLabel, InputAdornment, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import {faKey} from '@fortawesome/free-solid-svg-icons';
import IOnboardingProps from '../prop/IOnboardingProps';

class ChangePassword extends React.Component<IOnboardingProps, {}> {

  render() {
    return (
      <div style={{textAlign:'center', padding:'20px 30px'}}>
        <div>
          <Typography variant="h3">Change Password</Typography>
          <Typography variant="body1">For security purpose lets change the default password for your account.</Typography>
        </div>
        <Box  display="flex" sx={{width:'800px'}} style={{ margin:'auto', padding:'20px 15px'}}>
          <Box style={{ padding:'20px 30px', textAlign:'left'}} sx={{width:'50%'}} >
            <TextField variant="outlined" style={{width:'100%', marginBottom:'1.5rem'}} label="Old password" 
            
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <FontAwesomeIcon icon={faKey} style={{fontSize:'21px'}} />
                  </InputAdornment>
                )
              }
            }}/>

            <TextField variant="outlined" style={{width:'100%', marginBottom:'1.5rem'}} label="New password" 
            slotProps={{
              input:{
                startAdornment: (
                  <InputAdornment position="start">
                    <FontAwesomeIcon icon={faKey} style={{fontSize:'21px'}} />
                  </InputAdornment>
                )
              }
            }}/>

          <TextField variant="outlined" style={{width:'100%'}} label="Confirm password" 
          slotProps={{
            input:{
              startAdornment: (
                <InputAdornment position="start">
                  <FontAwesomeIcon icon={faKey} style={{fontSize:'21px'}} />
                </InputAdornment>
              )
            }
          }}/>

          <div>
          <FormControlLabel
            control={
              <Checkbox />
            }
            label="Show password" />
          </div>
          </Box>
          <Box style={{borderLeft:'1px solid', padding:'10px 15px', textAlign:'left'}} sx={{width:'50%'}} >
            <Typography variant="body1">In order to protect your account, make sure your password:</Typography>
            <ul>
                <li style={{marginBottom:'0.5rem'}}>
                    Is longer than 8 characters.
                </li>
                <li style={{marginBottom:'0.5rem'}}>
                    Does not match or significantly contains your username, e.g. 'username123'.
                </li>
                <li style={{marginBottom:'0.5rem'}}>
                    Is not member of this list of common passwords.
                </li>
                <li>
                    Is not member of the Have I been pwned breach databases.
                </li>
            </ul>
          </Box>
        </Box>
        <div>
          <Button variant="contained" color="primary" onClick={() => this.props.displayPage(4, true)}>Save</Button>
        </div>
      </div>
    )
  }
}

export default ChangePassword;
