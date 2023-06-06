import { ProjectDemo } from 'interfaces'
import styles from './ProjectDemos.module.css'
import ProjectDemoItem from './components/ProjectDemoItem/ProjectDemoItem'
import { useEffect, useState } from 'react'
import ProjectDemoBarItem from './components/ProjectDemoBarItem/ProjectDemoBarItem'

const ProjectDemos = () => {

    const [index, setIndex] = useState<number>(0)

    useEffect(() => {
        const intervalId = setInterval(() => {
            setIndex(prevIndex => (prevIndex + 1) % projectDemos.length)
        }, 3000)

        return () => clearInterval(intervalId)
    }, [])
    

    const projectDemos: ProjectDemo[] = [
        {
            name: 'Mdium',
            startDate: new Date(),
            endDate: new Date(),
            github: '',
            youtube: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
        },
        {
            name: 'Teckie',
            startDate: new Date(),
            endDate: new Date(),
            github: '',
            youtube: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
        },
        {
            name: 'DMV Simulator',
            startDate: new Date(),
            endDate: new Date(),
            github: '',
            youtube: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
        }
    ]

    return (
        <div className={styles.projectDemos}>
            <ProjectDemoItem 
                name={projectDemos[index].name}
                startDate={projectDemos[index].startDate}
                endDate={projectDemos[index].endDate}
                github={projectDemos[index].github}
                youtube={projectDemos[index].youtube}
            />
            <hr className={styles.hr}/>
            <div className={styles.demoBarItems}>
                <ProjectDemoBarItem name={projectDemos[(index+1) % projectDemos.length].name}/>
                <ProjectDemoBarItem name={projectDemos[(index+2) % projectDemos.length].name}/>
            </div>
        </div>
    )
}

export default ProjectDemos