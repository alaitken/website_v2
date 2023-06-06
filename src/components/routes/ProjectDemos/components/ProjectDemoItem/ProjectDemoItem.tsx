import { ProjectDemo } from 'interfaces'
import styles from './ProjectDemoItem.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const ProjectDemoItem = ({
    name,
    startDate,
    endDate,
    github,
    youtube
}: ProjectDemo) => {
  return (
    <div className={styles.item}>
        <h2 className={styles.name}>{name}</h2>
        <h3 className={styles.date}>
            {startDate.getFullYear()} - {endDate.getFullYear()}
        </h3>
        <iframe
            className={styles.video}
            src={youtube}
        />
        <div>
            <button><FontAwesomeIcon icon={faGithub}/> GitHub</button>
            <button>Try App</button>
        </div>
    </div>
  )
}

export default ProjectDemoItem