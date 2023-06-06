import styles from './ProjectDemoBarItem.module.css'

interface Props {
    name: string
}

const ProjectDemoBarItem = ({
    name
}: Props) => {
  return (
    <button className={styles.button}>
        {name}
    </button>
  )
}

export default ProjectDemoBarItem