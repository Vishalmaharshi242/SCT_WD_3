import { UserProvider } from './context/UserContext'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import RootLayout from './layout/RootLayout'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './components/Login'
import Signup from './components/Signup'
import { Navigate } from 'react-router-dom'
function App() {


  return (
    <>
    <UserProvider>
      <Routes>
        <Route path='/' element={<RootLayout/>}>
        <Route path='home'  element={<Home/>}>
          <Route index element={<Signup/>} />
          <Route path='login' element={<Login/>} />
        </Route>
        <Route path='about' element={<About/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route index element={<Navigate to="home" />} />
        </Route>
      </Routes>
    </UserProvider>
    </>
  )
}

export default App
