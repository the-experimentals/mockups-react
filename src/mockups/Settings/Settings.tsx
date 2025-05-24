import { faCog, faCubes, faPalette } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import styles from './Settings.module.scss';

class Settings extends React.Component {
  render() {
    return (
      <Box display="flex" justifyContent='center' className={`${styles.Settings}`}>

        <Box m={3} flexDirection="column" display="flex" className={`${styles.settingTile}`}>
          <Box style={{position:'relative'}} className={`${styles.iconContainer}`}>
            <FontAwesomeIcon icon={faCog} className={`${styles.tileIcon}`}/>
          </Box>
          <Box>
            <Typography variant="h5">General</Typography>  
          </Box>
        </Box>
        <Box m={3} flexDirection="column" display="flex" className={`${styles.settingTile}`}>
          <Box style={{position:'relative'}} className={`${styles.iconContainer}`}>
            <FontAwesomeIcon icon={faCubes} className={`${styles.tileIcon}`}/>
          </Box>
          <Box>
            <Typography variant="h5">Modules</Typography>  
          </Box>
        </Box>
        <Box m={3} flexDirection="column" display="flex" className={`${styles.settingTile}`}>
          <Box style={{position:'relative'}} className={`${styles.iconContainer}`}>
            <FontAwesomeIcon icon={faPalette} className={`${styles.tileIcon}`}/>
          </Box>
          <Box>
            <Typography variant="h5">Theme</Typography>  
          </Box>
        </Box>

        
      </Box>
    )
  }
}

export default Settings;
