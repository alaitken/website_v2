import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './Header.module.css'
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

interface Props {
    toggleNav: () => void,
    isNavOpen: boolean
}

const Header = ({ isNavOpen, toggleNav }: Props) => {

    return (
        <header className={styles.header}>
            <h1 className={styles.name}>Austin Aitken</h1>
            <div className={styles.linkContainer}>
                <Link className={styles.link} to='/'>Home</Link>
                <Link className={styles.link} to='/project-demos'>Project Demos</Link>
                <Link className={styles.link} to='/resume'>Resume</Link>
                <Link className={styles.link} to='/contact-me'>Contact Me</Link>
            </div>
            <button className={styles.navButton} onClick={toggleNav}>
                {
                    isNavOpen ? 
                        <FontAwesomeIcon className={styles.close} icon={faClose}/>
                        : 
                        <FontAwesomeIcon className={styles.bars} icon={faBars}/>
                }
            </button>
        </header>
    )
}

export default Header