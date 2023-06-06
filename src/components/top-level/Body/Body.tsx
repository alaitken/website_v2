import { Route, Routes } from 'react-router-dom'
import styles from './Body.module.css'
import Resume from 'components/routes/Resume/Resume'
import ContactMe from 'components/routes/ContactMe/ContactMe'
import Home from 'components/routes/Home/Home'
import ProjectDemos from 'components/routes/ProjectDemos/ProjectDemos'

const Body = () => {
    return (
        <div className={styles.body}>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/project-demos' element={<ProjectDemos />}/>
                <Route path='/resume' element={<Resume />}/>
                <Route path='/contact-me' element={<ContactMe />}/>
            </Routes>
        </div>
    )
}

export default Body