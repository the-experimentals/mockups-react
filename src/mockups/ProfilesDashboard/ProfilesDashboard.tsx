import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Fab, Tooltip, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import empty from '../../assets/illustrations/empty.svg';
import IProfileCardData from './data/IProfileCardData';
import NewProfilePanel from './NewProfilePannel/NewProfilePanel';
import ProfileCard from './ProfileCard/ProfileCard';
import styles from './ProfilesDashboard.module.scss';
import IProfilesDashboardState from './state/IProfileDashboardState';

class ProfilesDashboard extends React.Component<{}, IProfilesDashboardState>{
  constructor(props: any){
    super(props)

    this.state = {
      showNewProfilePanel: false,
      profileCardData: []
    }



    this.createNewProfile = this.createNewProfile.bind(this)
    this.closeNewProfilePanel = this.closeNewProfilePanel.bind(this)
  }


  render(){
    return(
      <Box flexDirection="row" flexWrap="wrap" display="flex" justifyContent='center' className={styles.ProfilesDashboard}>

        {
          this.state.profileCardData.length > 0 ? 
          this.state.profileCardData.map((profile: IProfileCardData, index: number) => {
            return <ProfileCard key={index} cardData={profile}/>
          }) : 
          <div>
            <img src={empty} alt="empty" style={{width:'400px'}}/>
            <div style={{textAlign:'center'}}>
              <Typography variant='h4'>No profile to view.</Typography>
            </div>
          </div>
        }
        
        {
          this.state.showNewProfilePanel && <NewProfilePanel closeNewProfilePanel = {this.closeNewProfilePanel} saveNewProfile = {this.saveNewProfile} />          
        }

        <div style={{ position:'absolute', bottom:'10px', right:'10px'}}>
          {
            this.state.showNewProfilePanel ? "" : (
              <Tooltip title="Create new profile" arrow placement='top'>
                <Fab color='primary' onClick={this.createNewProfile}>
                  <FontAwesomeIcon icon={faPlus} />
                </Fab>
              </Tooltip>
            )
          }
        </div>
      </Box>
    )
  }

  createNewProfile(){
    this.setState({
      showNewProfilePanel: true
    })
  }

  closeNewProfilePanel(){
    this.setState({
      showNewProfilePanel: false
    })
  }

  saveNewProfile = (profile: IProfileCardData) => {
    this.setState({
      profileCardData: [...this.state.profileCardData, profile],
      showNewProfilePanel: false
    })
    
  }
  
}


export default ProfilesDashboard;
