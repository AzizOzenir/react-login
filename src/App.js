import React from 'react'
import Login from './pages/login/login'
import { Route } from 'react-router-dom'
import Register from './pages/register/register'
import Home from './pages/home/home'
import { AuthProvider } from './Auth'
import PrivateRoute from './privateRouter'

function App() {
  return (
    <div>
   <AuthProvider>
    <PrivateRoute exact path = "/" component={Home}/>
    <Route exact path = "/login" component={Login} />
    <Route exact path = "/register" component={Register} />

   </AuthProvider>
    </div>
  )
}

export default App