import { Link } from 'react-router-dom'
import styles from './NavMenu.module.css'

const NavMenu = () => {
    return (
        <div className={styles.navMenu}>
            <Link to='/'>Home</Link>
            <hr className={styles.hr}/>
            <Link to='/project-demos'>Project Demos</Link>
            <hr className={styles.hr}/>
            <Link to='/resume'>Resume</Link>
            <hr className={styles.hr}/>
            <Link to='/contact-me'>Contact Me</Link>
        </div>
    )
}

export default NavMenu