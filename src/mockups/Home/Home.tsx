import React from 'react';
import styles from './Home.module.scss';
import './Home.module.scss';
import { Link } from "react-router-dom";
import IHomeState from './state/IHomeState';
import { THUMBNAIL_DATA } from './data/thumbnail-data';
import { Box, Typography } from '@mui/material';

export default class Home extends React.Component<{}, IHomeState>{

  availableSizes: string[] = ['gridItemLG', 'gridItemSM', 'gridItemXS']
  
  constructor(props:any){
    super(props)
    
    let lastIndex:number = 0;
    THUMBNAIL_DATA.map((thumb, index) => {
      let randomIndex = this.getRandomNumber(lastIndex)
      thumb.size = this.availableSizes[randomIndex]
      lastIndex = randomIndex
    })


    this.state = {
      thumbmails: THUMBNAIL_DATA
    }
  }

  getRandomNumber = (lastNumber: number): number => {
    let randomNumber = Math.floor(Math.random() * this.availableSizes.length)
    while(lastNumber === randomNumber){
      randomNumber = Math.floor(Math.random() * this.availableSizes.length)
    }

    return randomNumber
  }

  render(){
    return (      

      <div className={`${styles.padding2030}`}>        
        <Box display="flex" className={`${styles.padding2030} ${styles.galleryWrapper}`}>
          <div className={`${styles.grid}`}>
            {            
              this.state.thumbmails.map((thumb, index) => {
                return (
                  <div className={[styles[thumb.size], styles['gridItem'], 'animate__animated animate__zoomIn animate__faster'].join(' ')}  key={index}>
                    <Link to={thumb.routerLink}>
                      <img src={thumb.image} alt=""></img>
                    </Link>                        
                  </div>  
                )
              })
            }                
          </div>        
        </Box>
      </div>
    )
  }
}