import * as components from '../containers'

export const routesList = [
  { path: '/', component: components.UsersListContainer, title: '', isExact: true },
  { path: '/user/:user_id', component: components.UserContainer, title: '', isExact: true },
]
