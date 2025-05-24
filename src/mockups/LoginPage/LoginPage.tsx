import { faEye, faEyeSlash, faKey, faTrash, faTrashAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Box, Button, Checkbox, FormControlLabel, TextField,  InputAdornment, Typography, useTheme} from '@mui/material';
import React from 'react';
import styles from './LoginPage.module.scss';

const LoginPage: React.FC = () => {

  const theme = useTheme();
      
  const [savedUser, setSavedUser] = React.useState([
    {
      initials: "JD",
      name: "John Doe 1",
      username: "johndoe",
      selected: false
    },
    {
      initials: "JD",
      name: "John Doe 2",
      username: "johndoe",
      selected: false
    },
    {
      initials: "JD",
      name: "John Doe 3",
      username: "johndoe",
      selected: false
    }
  ]);

  const [showPassword, setShowPassword] = React.useState(false);

    const clickUser = (index:any) => {    
    const currentUsers = savedUser
    // unselect all users first.
    currentUsers.map((user) => {
      if(user.selected)
        user.selected = false
    })

    let clickedUser = Object.assign({}, currentUsers[index])
    clickedUser.selected = true
    currentUsers[index] = clickedUser

    setSavedUser([...currentUsers]);
  }
  

  const deleteUser = (index:number) =>{
    const currentUsers = savedUser
    currentUsers.splice(index, 1) 

    setSavedUser([...currentUsers]);
  }


  return (
      <Box flexDirection="row" flexWrap="wrap" display="flex" justifyContent='center' className={'wrapper'} sx={{ '--background-color': theme.palette.background.default }}>
        <Box m={1} className={`${styles.loginCard}`} height='fit-content'>
        <header className={'padding1015'}>
          <Typography variant="h4">Welcome</Typography>
          <Typography variant="subtitle2">Login to continue to services</Typography>
        </header>

        <div className={'padding1015'}>
          <TextField id="outlined-basic" 
                     helperText="test" 
                     label="Username" 
                     variant="outlined" 
                     style={{width:'100%', marginBottom:'0.75rem'}}
                     InputProps={{
                       startAdornment: (
                         <InputAdornment position="start">
                           <FontAwesomeIcon icon={faUser} style={{fontSize:'21px'}}/>
                         </InputAdornment>
                       )
                     }} />

          <TextField id="outlined-basic"                      
                     helperText="Test"
                     type={showPassword ? "text" : "password"}
                     label="Password" 
                     variant="outlined" 
                     style={{width:'100%'}}
                     InputProps={{
                       startAdornment: (
                         <InputAdornment position="start">
                           <FontAwesomeIcon icon={faKey} style={{fontSize:'21px'}}/>
                         </InputAdornment>
                       ),
                       endAdornment: (
                         <InputAdornment position="end">
                           <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} style={{fontSize:'21px'}} className={'cursor-pointer'}/>
                         </InputAdornment>
                       )
                     }} />
          <FormControlLabel 
            control={
              <Checkbox />
            }
            label="Remember me" />

          <div style={{textAlign:'right'}}>
            <Button variant="contained" color="primary"> Log in </Button>            
          </div>
          <div style={{textAlign:'right', marginTop:'0.25rem'}}>
            <Button color="primary"> Forgot password? </Button>            
          </div>
        </div>
        </Box>

        <Box m={1} className={`${styles.loginCard}`}>
          <header className={'padding1015'}>
            <Typography variant="h4">Welcome</Typography>
            <Typography variant="subtitle2">Login to continue to services</Typography>
          </header>

          <div className={'padding1015'}>
            {savedUser.map((user, index) => {              
              return (
                
                <Box flexDirection="column" display="flex" key={index} className={`${styles.savedUser}`}>
                  <Box flexDirection="row" display="flex" onClick={() => clickUser(index)}>
                    <div style={{width:'40px', position: 'relative'}}>
                      <div className={`${styles.profileIcon} ${styles.verticalCenter}`}>
                        <span className={`${styles.initials}`}>{user.initials}</span>
                      </div>
                    </div>
                    <Box flexGrow={1} style={{marginLeft:'0.5rem'}}>
                      <Typography variant="h5">{user.name}</Typography>
                      <Typography variant="subtitle2">@{user.username}</Typography>
                    </Box>
                    <Box justifyItems="flex-end" className={`${styles.trashIcon}`} style={{position:'relative', width:'50px', textAlign:'center'}}>                
                      <FontAwesomeIcon icon={faTrash} className={`${styles.verticalCenter}`} onClick={() => deleteUser(index)}/> 
                    </Box>    
                  </Box>

                  {
                    user.selected ? 
                    <Box className={'padding1015'} style={{marginTop:'0.5rem'}}>                      
                      <TextField variant="outlined" 
                                 label="Password" 
                                 type="password" 
                                 style={{width:'100%'}}
                                 InputProps={{
                                  startAdornment: (
                                    <InputAdornment position="start">
                                      <FontAwesomeIcon icon={faKey} style={{fontSize:'21px'}}/>
                                    </InputAdornment>
                                  ),
                                  endAdornment: (
                                    <InputAdornment position="end">
                                      <FontAwesomeIcon icon={faEyeSlash} style={{fontSize:'21px'}} className={'cursor-pointer'}/>
                                    </InputAdornment>
                                  )
                                }} />
                      <div style={{marginTop:'0.5rem', textAlign:'right'}}>
                        <Button variant="contained" color="primary">
                          Log in as {user.name}? 
                        </Button>
                      </div>
                    </Box> : ""
                  }
                  
                </Box>

                
              )
            })}

          <div style={{textAlign:'right'}}>
            <Button variant="outlined" color="primary"> Use another account</Button>            
          </div>
                       
          </div>
        </Box>
        
      </Box>
  )
}

export default LoginPage;
