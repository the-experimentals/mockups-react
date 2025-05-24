import { faTimes, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, FormControl, FormHelperText, Grid, IconButton, InputAdornment, InputLabel, MenuItem, Select, Tab, Tabs, TextField, Typography } from "@mui/material";
import { Box, useTheme } from "@mui/system";
import { useState } from "react";
import { useForm } from "react-hook-form";
import LoadingIndicator from "../../../components/LoadingIndicator/LoadingIndicator";
import IProfileCardData from "../data/IProfileCardData";
import styles from './NewProfilePanel.module.scss';
import INewProfilePanelProps from "./props/INewProfilePanelProps";

const  NewProfilePanel: React.FC<INewProfilePanelProps> =(props) => {

  const theme = useTheme();
  const [isSaved , setIsSaved] = useState(false);
  const[value, setValue] = useState(0)
  const { register, handleSubmit, formState: {errors} }  = useForm({
    defaultValues: {
      username: "",
      firstName: "",
      lastName: "",
      password: "",
      confirmPassword: "",
      language: "",
      email: "",
    }
  })
  const saveNewProfile = (data: any) => {
    let cardData: IProfileCardData = {
      username: data.username,
      name: data.firstName + ' ' + data.lastName,
      initials: data.firstName[0] + data.lastName[0]
    }
    setIsSaved(true)

    setTimeout(() => {      
    props.saveNewProfile(cardData)
    }
    , 3000)
  }
  
  return(
    <div className={`${styles.panelOverlay}`}>
      <Box display={'flex'} flexDirection="column" className={[`${styles.newProfilePanel}`].join()} sx={{'--background-color': theme.palette.background.paper}}>
        <header className={`${styles.header}`}>
          <div className={`${styles.panelClose}`}>
            <IconButton size='small' onClick={props.closeNewProfilePanel}>
              <FontAwesomeIcon icon={faTimes}/>
            </IconButton>
          </div>
          <Typography variant='h5'>New profile</Typography>
        </header>

        <Box sx={{flexGrow:1}} style={{overflow:'hidden', overflowY:'auto'}}>
          <div className={`${styles.description}`}>
            <Typography variant='body1'>
              Lorem ipsum dolor sit amets, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            </Typography>
            <hr/>
          </div>   

          <div>
            <Tabs value={value} centered>
              <Tab label="Account" id={`simple-tab-0`}/>
            </Tabs>
          </div>

          <form>
            <Grid container style={{padding:'20px 30px', boxSizing:'border-box'}}>
              <Box sx={{width:'100%'}}>
                <Box p={1} sx={{ width:'50%' }}>                  
                  <TextField id="outlined-basic"                       
                    {...(errors.username ? {error: true, helperText: "Enter username"} : {})}                      
                    label="Username" 
                    variant="outlined" 
                    style={{width:'100%', marginBottom:'0.75rem'}}                      
                    {...register("username", {required: true})}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <FontAwesomeIcon icon={faUser} style={{fontSize:'21px'}}/>
                        </InputAdornment>
                      )
                  }} />
                </Box>
                <Box display={'flex'}>
                  <Box p={1}>
                    <TextField id="outlined-basic" 
                      {...register("password", {required: true})}                
                      {...(errors.password ? {error: true, helperText: "Enter password"} : {})}      
                      label="Password"
                      type="password"
                      variant="outlined" 
                      style={{width:'100%', marginBottom:'0.75rem'}}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <FontAwesomeIcon icon={faUser} style={{fontSize:'21px'}}/>
                          </InputAdornment>
                        )
                      }} 
                    />
                  </Box>
                  <Box p={1}>
                    <TextField id="outlined-basic" 
                      {...register("confirmPassword", {required: true})}                
                      {...(errors.confirmPassword ? {error: true, helperText: "Enter confirm password"} : {})}      
                      label="Confirm password"
                      type="password"
                      variant="outlined" 
                      style={{width:'100%', marginBottom:'0.75rem'}}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <FontAwesomeIcon icon={faUser} style={{fontSize:'21px'}}/>
                          </InputAdornment>
                        )
                      }} 
                    />
                  </Box>
                </Box>
                <Box display={'flex'} sx={{width:'100%'}}>
                  <Box p={1}>
                    <TextField id="outlined-basic"         
                      {...register("firstName", {required: true})}                
                      {...(errors.firstName ? {error: true, helperText: "Enter first name"} : {})}    
                      label="First name" 
                      variant="outlined" 
                      style={{width:'100%', marginBottom:'0.75rem'}}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <FontAwesomeIcon icon={faUser} style={{fontSize:'21px'}}/>
                          </InputAdornment>
                        )
                      }} 
                    />
                  </Box>
                  <Box p={1}>
                    <TextField id="outlined-basic"         
                      {...register("lastName", {required: true})}                
                      {...(errors.lastName ? {error: true, helperText: "Enter last name"} : {})}    
                      label="Last name" 
                      variant="outlined" 
                      style={{width:'100%', marginBottom:'0.75rem'}}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <FontAwesomeIcon icon={faUser} style={{fontSize:'21px'}}/>
                          </InputAdornment>
                        )
                      }} 
                    />
                  </Box>
                </Box>
                <Box display={'flex'} sx={{width:'100%'}}>
                  <Box p={1} sx={{width:'50%'}}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">Language</InputLabel>
                         <Select label="Language" id="demo-simple-select" 
                          
                          labelId="demo-simple-select-label" 
                          {...register("language", {required: true})}                                          
                          {...(errors.language ? {error: true, helperText: "Select language"} : {})}                              
                          >
                          <MenuItem value={'en-US'}>English</MenuItem>
                          <MenuItem value={'es-ES'}>Spanish</MenuItem>
                          <MenuItem value={'fr-CA'}>French</MenuItem>
                        </Select>
                        {errors.language && <FormHelperText error>Select language</FormHelperText>}
                      </FormControl>
                  </Box>
                  <Box p={1} sx={{width:'50%'}}>
                    <TextField id="outlined-basic" 
                        {...register("email", {required: true})}                
                        {...(errors.email ? {error: true, helperText: "Enter e-mail"} : {})}    
                        label="E-Mail" 
                        variant="outlined" 
                        style={{width:'100%', marginBottom:'0.75rem'}}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <FontAwesomeIcon icon={faUser} style={{fontSize:'21px'}}/>
                            </InputAdornment>
                          )
                        }} 
                    />
                  </Box>
                </Box>
              </Box>    
            </Grid>
          </form>
          <footer>          
            {isSaved ? <LoadingIndicator></LoadingIndicator> : <Button variant="contained" color="primary" onClick={handleSubmit(saveNewProfile)}>Save</Button>}
          </footer>
        </Box>        
      </Box>
    </div>
  )
}

export default NewProfilePanel;
