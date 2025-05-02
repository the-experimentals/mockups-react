import { faCog } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, Button, IconButton, Typography } from '@mui/material';
import React from 'react';
import styles from './ProfileCard.module.scss';

class ProfileCard extends React.Component{
  render(){
    return(
      <Box display="flex">
        <Box className={`${styles.ProfileCard}`}>
          <div className={`${styles.gearOption}`}>
            <IconButton color="primary">
              <FontAwesomeIcon icon={faCog} style={{fontSize:"18px", color:'#000'}}/>
            </IconButton>
          </div>
          <header>
            <div className={`${styles.profileIcon}`}>
              <span className={`${styles.initials}`}>JD</span>
            </div>
          </header>
          <div style={{textAlign:'center'}}>
            <Typography variant="h4">John Doe</Typography>
            <Typography variant="subtitle1">@johndoe</Typography>            
          </div>

          <div className={`${styles.profileIntro}`}>
            <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Typography>
          </div>

          <Box display='flex' className={`${styles.profileActions}`}>
            <Box flexGrow={0.5} p={0.5}>
              <Button variant='outlined' style={{width:'100%'}} color='error'>
                Delete
              </Button>
            </Box>            
            <Box flexGrow={0.5} p={0.5}>
              <Button variant='contained' style={{width:'100%'}}>
                View profile
              </Button>
            </Box>

          </Box>
        </Box>
      </Box>
    )
  }
}

export default ProfileCard;
