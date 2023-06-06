import styles from './App.module.css'
import '../common-styling/global/global.css'
import { useState } from 'react'
import Header from '../components/top-level/Header/Header'
import Body from '../components/top-level/Body/Body'
import Footer from '../components/top-level/Footer/Footer'
import NavMenu from '../components/top-level/NavMenu/NavMenu'

const App = () => {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false)

  const toggleNav = () => {
      setIsNavOpen(prevNav => !prevNav)
  }

  return (
    <div className={styles.app}>
      <Header isNavOpen={isNavOpen} toggleNav={toggleNav}/>
      {
        isNavOpen ?
        <NavMenu />
        :
        <Body />
      }
      <Footer />
    </div>
  );
}

export default App;
