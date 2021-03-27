import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import 'normalize.css'
import { Routes } from './routes'
import { store } from './store'
import { Layout } from './components'
import { ErrorBoundary } from './components'
import './style.scss'

export const App = () => {
  const PUBLIC_URL = '/github-users'

  return (
    <ErrorBoundary>
      <Provider store={store}>
        <Router basename={PUBLIC_URL}>
          <Layout>
            <Routes />
          </Layout>
        </Router>
      </Provider>
    </ErrorBoundary>
  )
}
