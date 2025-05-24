import React from 'react';
import { Route, Link, Outlet } from 'react-router-dom';
import styles from './MainLayout.module.scss';
import IRoute from '../../core/routes/IRoute';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';
import SavedUser from '../../mockups/LoginPage/state/ISavedUser';
import { Box, Card } from '@mui/material';

interface IMainLayoutProps{
  name: string
}

class MainLayout extends React.Component<IMainLayoutProps,{}>{

  constructor(props:IMainLayoutProps){        
    super(props) 
  }

  render(){
    return(
      <div style={{padding:'0.75rem', 'height': '100%', boxSizing: 'border-box'}}>        
        <Card style={{boxSizing:'border-box', margin:'auto', height:'100%', overflow:'hidden', overflowY:'auto'}} 
        classes={{root: 'shadow max-supported-width'}}>          
          <Box display="flex" flexDirection="column" style={{height:'100%'}}>            
              <Box className={'padding2030'} style={{paddingBottom:'0'}}>
                <Link to="/">
                  <FontAwesomeIcon icon={faLongArrowAltLeft} style={{fontSize:'28px', color:'#000'}} className={'cursor-pointer'} />  
                </Link>
                <h2 style={{margin:0}}>{this.props.name}</h2>
                <hr/>
              </Box>
              

              <Box className={`${styles.pageWrapper}`} sx={{ flexGrow: 1 }}>
                <Outlet/>
              </Box>
            </Box>
        
          
        </Card>
      </div>
    )
  }
}

export default MainLayout;
 