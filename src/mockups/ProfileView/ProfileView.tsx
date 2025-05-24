
import { faCamera, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, IconButton, Tab, Tabs, Typography } from '@mui/material';
import React from 'react';
import AccountTab from './AccountTab/AccountTab';
import HistoryTab from './HistoryTab/HistoryTab';
import PermissionsTab from './PermissionsTab/PermissionsTab';
import styles from './ProfileView.module.scss';
import IProfileViewState from './state/IProfileViewState';


class ProfileView extends React.Component<{}, IProfileViewState>{
  constructor(props:any){
    super(props)

    this.state = {
      value: 0
    }
  }
  render(){
    return(
      <div className={`${styles.ProfileView}`}>       
        <header className={`${styles.profileCover}`}>
          <div className={`${styles.profileIcon}`}>
              <span className={`${styles.initials}`}>JD</span>
              <div className={`${styles.uploadIcon}`}>
                <IconButton color='primary'>
                  <FontAwesomeIcon icon={faCamera} style={{fontSize:'21px', color:'#000'}}/>
                </IconButton>                
              </div>
          </div>          
        </header>

        <div className={`${styles.userName}`}>
            <Typography variant="h3">John Doe</Typography>
            <Typography variant="subtitle1">@johndoe</Typography>
        </div>

        <div className={`${styles.description}`}>
          <div style={{position:'relative'}}>            
            <Typography variant="h6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Typography>            
          </div>          
          <hr/>
        </div>
 
        <div>
          <Tabs  value={this.state.value} onChange={this.switchTab.bind(this)} centered>
            <Tab label="Account" id={`simple-tab-0`}/>
            <Tab label="Permissions" />
            <Tab label="History" />
          </Tabs>

          {( () => {
            if(this.state.value === 0)
              return (
                <AccountTab />
              )
            else if( this.state.value === 1)
              return (
                <PermissionsTab />
              )
            else if (this.state.value === 2)
              return (
                <HistoryTab />
              )
          }
          )()}
          
        </div>
      </div>
    )
  }


  switchTab(event: React.SyntheticEvent, newValue:number){    
    this.setState({
      value: newValue
    })
  }
}

export default ProfileView;
