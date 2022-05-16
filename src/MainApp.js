import React from 'react'
import App from './App'
import { Provider as AuthProvider } from './context/usercontext'
import { store } from './store'
import { Provider } from 'react-redux'

const MainApp = () => {
  return (
    <Provider store={store}>
      <AuthProvider>
        <App/>
      </AuthProvider>
    </Provider>
  )
}

export default MainApp