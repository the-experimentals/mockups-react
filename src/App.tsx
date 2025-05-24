import React from 'react';
import { Route, HashRouter, Routes } from 'react-router-dom';
import './App.scss';
import ROUTES from './core/routes/routes';

export default class App extends React.Component{

  render(){
    return (
      <HashRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          {ROUTES.map((route, index) => {
            return(
              <Route key={index} path={route.path} element={<route.component {...route.props}/>}>
                {route.children?.map((childRoute, childIndex) => {
                  return (
                    <Route key={childIndex} path={childRoute.path} element={<childRoute.component {...route.props}/>} />
                  )
                })}
              </Route>
            )
          })}
        </Routes>
      </HashRouter>
    )
  }
}