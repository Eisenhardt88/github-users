import React from 'react'
import { Route } from 'react-router-dom'
import { routesList } from './routes'

export const Routes = () => {
  return routesList.map(route => (
    <Route exact={route.isExact} path={route.path} component={route.component} key={route.path} />
  ))
}
